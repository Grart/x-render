import React, { useCallback, useEffect, useRef } from 'react';
import FormRender, { useForm } from 'form-render';
import { flattenToData, dataToFlatten } from '../../../utils';
import { useStore } from '../../../hooks';
import RenderChildren from './RenderChildren';
import RenderField from './RenderField';
import Wrapper from './Wrapper';

import deepClone from 'clone';
import ReactDom from 'react-dom';
import { Menu  } from 'antd';
const { SubMenu } = Menu;

const PreviewFR = ({ schema }) => {
  const form = useForm();
  const { flatten, widgets, mapping, userProps, onFlattenChange } = useStore();
  const renderSchema = userProps.transformFrom(schema);

  useEffect(() => {
    form.setValues(flattenToData(flatten));
  }, []);

  return (
    <FormRender
      schema={renderSchema}
      form={form}
      widgets={widgets}
      mapping={mapping}
      watch={{
        '#': formData => {
          onFlattenChange(dataToFlatten(flatten, formData), 'data');
        },
      }}
    />
  );
};

var PropMnuIsMount=false;

import { defaultSettings } from '../../../settings';

const FR = ({ id = '#', preview, displaySchema }) => {
  const store=useStore();
  const { flatten, frProps = {},selected ,userProps} = store;
  
  const { settings } = userProps;

  const storeRef=useRef();
  storeRef.current=store;
  
  const divRef=useRef();
  
  const selectedRef=useRef(selected);
  selectedRef.current=selected;
  
  if(divRef.current&&divRef.current.style){
    divRef.current.style.display='none';
  }

  useEffect(
    ()=>{
      if(PropMnuIsMount){
        return;
      }
      PropMnuIsMount=true;

      console.log('componentDidMount');
      const popup= document.createElement("div");
      document.body.append(popup);
      
      const _settings = Array.isArray(settings) ? settings : defaultSettings;
      
     

      ReactDom.render(
        <div ref={divRef} style={{display:"none",position:"absolute",'zIndex':999}}>
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            onClick={handleMenuClick}
          >
            {
              Array.isArray(_settings)
              ?(
                _settings.map((item, idx1) => {
                  if (item && item.show === false) {
                    return null;
                  }
                  
                  return (
                    <SubMenu key={idx1} title={item.title}>
                      {
                        Array.isArray(item.widgets) 
                        ? (
                          item.widgets.map((widget, idx2) => {
                            return (
                              <Menu.Item key={`${idx1}.${idx2}`}>
                                {widget.text}
                              </Menu.Item>
                            );
                          })
                        ) 
                        :(
                          <div>此处配置有误</div>
                        )
                      }
                    </SubMenu>
        
                    );
                })
              )
              :(
                <div>配置错误：Setting不是数组</div>
              )
              
            }
          </Menu>
        </div>,
        popup
      );
      
      
      
      return ()=>{
        console.log('componentWillUnmount');
        ReactDom.unmountComponentAtNode(popup);
        document.body.removeChild(popup);
        PropMnuIsMount=false;
      }
      
    },
    []
  );

  const handleMenuClick=useCallback(
    e=>{
      // console.log(e,selectedRef.current);//preventDefault()阻止默认事件（这里阻止了默认菜单）
      const _key=e.key;
      const selectId=selectedRef.current;
      const _settings = Array.isArray(settings) ? settings : defaultSettings;
      if(
        _key
        &&selectId
        &&'#'!=selectId
      )
      {
        const _indexAry=`${_key}`.split('.');
        if(2==_indexAry.length){
          const _widget=_settings[_indexAry[0]].widgets[_indexAry[1]];
          const newFlatten = { ...storeRef.current.flatten };
          const _item=newFlatten[selectId];
          _item.schema={ 
            ..._widget.schema,
             $id: selectId,
             title:_item.schema.title, 
             children:_item.schema.children
           };
          
          storeRef.current.onFlattenChange(newFlatten);
        }
      }

      const propDiv=divRef.current;
      if(propDiv&&propDiv.style){
        propDiv.style.display='none';
      }
    }
  );
  
  const handleContextMenu=useCallback(
    e=>{
      e.preventDefault();//preventDefault()阻止默认事件（这里阻止了默认菜单）
      if(
        selectedRef.current
        &&'#'!=selectedRef.current
      ){
        const propDiv=divRef.current;
        if(propDiv&&propDiv.style){
          propDiv.style.display='block';//点击右键菜单显示出来
          
          // console.log(
          //   'contextmenu',
          //   divRef.current,
          //   e.pageX,
          //   wrapDiv.clientLeft,
          //   e.pageY,
          //   wrapDiv.clientTop
          // );
          
          let X=e.pageX;// wrapDiv.offsetLeft;
          let Y=e.pageY;// wrapDiv.offsetTop;
          propDiv.style.left=X+'px';
          propDiv.style.top=Y+'px';
        }
      }
    }
  );

  if (preview) {
    return <PreviewFR schema={displaySchema} />;
  }

  const { displayType, column } = frProps;
  const item = flatten[id];
  if (!item) return null;

  const { schema } = item;
  const isObj = schema.type === 'object';
  const isList = schema.type === 'array' && schema.enum === undefined;
  const isComplex = isObj || isList;
  const width = schema['width'];
  let containerClass = `fr-field w-100 ${isComplex ? 'fr-field-complex' : ''}`;
  let labelClass = 'fr-label mb2';
  let contentClass = 'fr-content';

  let columnStyle = {};
  if (!isComplex && width) {
    columnStyle = {
      width,
      paddingRight: '12px',
    };
  } else if (!isComplex && column > 1) {
    columnStyle = {
      width: `calc(100% /${column})`,
      paddingRight: '12px',
    };
  }

  switch (schema.type) {
    case 'object':
      if (schema.title) {
        containerClass += ' ba b--black-20 pt4 pr3 pb2 relative mt3 mb4'; // object的margin bottom由内部元素撑起
        labelClass += ' fr-label-object bg-white absolute ph2 top-upper left-1'; // fr-label-object 无默认style，只是占位用于使用者样式覆盖
      }
      containerClass += ' fr-field-object'; // object的margin bottom由内部元素撑起
      if (schema.title) {
        contentClass += ' ml3'; // 缩进
      }
      break;
    case 'array':
      if (schema.title && !schema.enum) {
        labelClass += ' mt2 mb3';
      }
      break;
    case 'boolean':
      if (schema['widget'] !== 'switch') {
        if (schema.title) {
          labelClass += ' ml2';
          labelClass = labelClass.replace('mb2', 'mb0');
        }
        contentClass += ' flex items-center'; // checkbox高度短，需要居中对齐
        containerClass += ' flex items-center flex-row-reverse justify-end';
      }
      break;
    default:
      if (displayType === 'row') {
        labelClass = labelClass.replace('mb2', 'mb0');
      }
  }
  // 横排时
  const isCheckBox = schema.type === 'boolean' && schema['widget'] !== 'switch';
  if (displayType === 'row' && !isComplex && !isCheckBox) {
    containerClass += ' flex items-center';
    labelClass += ' flex-shrink-0 fr-label-row';
    labelClass = labelClass.replace('mb2', 'mb0');
    contentClass += ' flex-grow-1 relative';
  }

  // 横排的checkbox
  if (displayType === 'row' && isCheckBox) {
    contentClass += ' flex justify-end pr2';
  }

  const fieldProps = {
    $id: id,
    item,
    labelClass,
    contentClass,
    isComplex,
  };

  const childrenElement =
    item.children && item.children.length > 0 ? (
      <ul className={`flex flex-wrap pl0`}>
        <RenderChildren children={item.children} />
      </ul>
    ) : null;

  const isEmpty = Object.keys(flatten).length < 2; // 只有一个根元素 # 的情况
  if (isEmpty) {
    return (
      <Wrapper style={columnStyle} $id={id} item={item}>
        <div
          className={`${containerClass} h-100 f4 black-40 flex items-center justify-center`}
        >
          点击/拖拽左侧栏的组件进行添加
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper style={columnStyle} $id={id} item={item} onContextMenu={handleContextMenu}>
      <div className={containerClass}>
        <RenderField {...fieldProps}>
          {(isObj || isList) && (
            <Wrapper $id={id} item={item} inside>
              {childrenElement || <div className="h2" />}
            </Wrapper>
          )}
        </RenderField>
      </div>
    </Wrapper>
  );
};

export default FR;


// const WrapperMenu =props=>{
//   useEffect(
//     ()=>{
//       console.log('componentDidMount');
//       const popup= document.createElement("div");
//       document.body.append(popup);
//       ReactDom.render(props.children, popup);
//       return ()=>{
//         console.log('componentWillUnmount');
//         ReactDom.unmountComponentAtNode(popup);
//         document.body.removeChild(popup);
//       }
//     },
//     []
//   )
//   return <></>
// }
