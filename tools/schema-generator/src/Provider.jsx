import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import {
  widgets as defaultWidgets,
  mapping as defaultMapping,
} from 'form-render';
import {
  flattenSchema,
  idToSchema,
  combineSchema,
  dataToFlatten,
  flattenToData,
  newSchemaToOld,
  schemaToState,
} from './utils';
import { Ctx, StoreCtx } from './context';
import { useSet } from './hooks';
import list from './widgets/list';

const DEFAULT_SCHEMA = {
  type: 'object',
  properties: {},
};

// TODO: formData 不存在的时候会报错：can't find # of undefined
function Provider(props, ref) {
  const {
    defaultValue,
    submit,
    transformer,
    extraButtons,
    controlButtons,
    hideId,
    settings,
    commonSettings,
    globalSettings,
    widgets = {},
    mapping = {},
    children,
  } = props;

  let transformFrom = schema => schema;
  let transformTo = schema => schema;

  if (transformer) {
    if (typeof transformer.from === 'function') {
      transformFrom = transformer.from;
    }
    if (typeof transformer.to === 'function') {
      transformTo = transformer.to;
    }
  }

  const frwRef = ref || useRef();
  const [state, setState] = useSet({
    formData: {},
    frProps: defaultValue?{displayType:defaultValue.displayType||'row',labelWidth:defaultValue.labelWidth||120,column:defaultValue.column||1}:{}, // form-render 的全局 props 等
    hovering: undefined, // 目前没有用到
    isNewVersion: true, // 用schema字段，还是用propsSchema字段，这是一个问题
    preview: false, // preview = false 是编辑模式
    schema: {},
    selected: undefined, // 被选中的$id, 如果object/array的内部，以首字母0标识
  });

  // 收口点 propsSchema 到 schema 的转换 (一共3处，其他两个是 importSchema 和 setValue，在 FRWrapper 文件)
  useEffect(() => {
    const schema = defaultValue ? transformFrom(defaultValue) : DEFAULT_SCHEMA;
    if (schema) setState(schemaToState(schema));
  }, [defaultValue]);

  const {
    formData,
    frProps,
    hovering,
    isNewVersion,
    preview,
    schema,
    selected,
  } = state;

  const onChange = data => {
    setState({ formData: data });
    props.onChange && props.onChange(data);
  };

  const onSchemaChange = newSchema => {
    setState({ schema: newSchema });
    if (props.onSchemaChange) {
      setTimeout(() => {
        if (!frwRef.current) return;
        const pureSchema = frwRef.current.getValue();
        props.onSchemaChange(pureSchema);
      }, 0);
    }
  };

  const _mapping = { ...defaultMapping, ...mapping };
  const _widgets = { ...defaultWidgets, ...widgets, list };

  const rootState = {
    preview,
    mapping: _mapping,
    widgets: _widgets,
    selected,
    hovering,
  };

  const userProps = {
    submit,
    transformFrom,
    transformTo,
    isNewVersion,
    extraButtons,
    controlButtons,
    hideId,
    settings,
    commonSettings,
    globalSettings,
  };

  let _schema = {};
  if (schema) {
    _schema = combineSchema(schema); // TODO: 要不要判断是否都是object
  }
  const flatten = flattenSchema(_schema);
  const flattenWithData = dataToFlatten(flatten, formData);

  const onFlattenChange = (newFlatten, changeSource = 'schema') => {
    const newSchema = idToSchema(newFlatten);
    const newData = flattenToData(newFlatten);
    // 判断只有schema变化时才调用，一般需求的用户不需要
    if (changeSource === 'schema' && onSchemaChange) {
      onSchemaChange(newSchema);
    }
    // schema 变化大都会触发 data 变化
    onChange(newData);
  };

  const onItemChange = (key, value, changeSource) => {
    flattenWithData[key] = value;
    onFlattenChange(flattenWithData, changeSource);
  };

  let displaySchema = {};
  let displaySchemaString = '';
  try {
    const _schema = {
      ...idToSchema(flattenWithData, '#', true),
      ...frProps,
    };
    displaySchema = transformTo(_schema);
    if (!isNewVersion) {
      displaySchema = newSchemaToOld(displaySchema);
    }
    displaySchemaString = JSON.stringify(displaySchema, null, 2);
  } catch (error) {}

  const getValue = () => displaySchema;

  const setValue = value => {
    try {
      setState(state => ({
        ...state,
        selected: undefined,
        ...schemaToState(value),
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const copyValue = () => {
    copyTOClipboard(displaySchemaString);
  };

  useImperativeHandle(ref, () => ({
    getValue,
    setValue,
    copyValue,
  }));

  // TODO: flatten是频繁在变的，应该和其他两个函数分开
  const store = {
    flatten: flattenWithData, // schema + formData = flattenWithData
    onFlattenChange, // onChange + onSchemaChange = onFlattenChange
    onItemChange, // onFlattenChange 里只改一个item的flatten，使用这个方法
    userProps,
    frProps,
    displaySchema,
    displaySchemaString,
    ...rootState,
  };

  return (
    <DndProvider backend={HTML5Backend} context={window}>
      <ConfigProvider locale={zhCN}>
        <Ctx.Provider value={setState}>
          <StoreCtx.Provider value={store}>{children}</StoreCtx.Provider>
        </Ctx.Provider>
      </ConfigProvider>
    </DndProvider>
  );
}

export default forwardRef(Provider);
