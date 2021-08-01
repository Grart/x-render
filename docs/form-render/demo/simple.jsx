import React from 'react';
import FormRender, { useForm } from 'form-render';
import Table from 'antd'

const delay = ms => new Promise(res => setTimeout(res, ms));
const d = {
  "type": "object",
  "ui:displayType": "row",
  "ui:showDescIcon": true,
  "ui:column": 3,
  "required": [
    "input1"
  ],
  "column": 3,
  "labelWidth": 100,
  "displayType": "row",
  "properties": {
    "input_ihbTAw": {
      "title": "采购单号",
      "type": "string",
      "props": {}
    },
    "input_WQoPfx": {
      "title": "采购时间",
      "type": "string",
      "format": "date"
    },
    "object_B1L4BB": {
      "title": "供应商",
      "type": "number",
      "properties": {},
      "widget": "refinput",
      "dataSource": {
        "dataSourceName": "供应商",
        "displayFieldName": "input_m-YQYJ"
      }
    },
    "switch_ZnyHq4": {
      "title": "已入库",
      "type": "boolean",
      "widget": "switch"
    },
    "input_NoVF5r": {
      "title": "入库仓位",
      "type": "number",
      "properties": {},
      "widget": "refinput",
      "dataSource": {
        "dataSourceName": "仓库",
        "displayFieldName": "input_NA2gOr"
      }
    },
    "object_luA7cV": {
      "title": "仓位编码",
      "type": "string",
      "properties": {},
      "widget": "refmapping",
      "dataSource": {
        "dataSourceName": "仓库",
        "displayFieldName": "input_382nxS"
      }
    },
    "input_J2yDey": {
      "title": "入库时间",
      "type": "string",
      "props": {}
    },
    "input_wckZef": {
      "title": "制单时间",
      "type": "string",
      "props": {}
    },
    "input_YYEXOB": {
      "title": "制单人",
      "type": "string",
      "props": {},
      "required": false,
      "placeholder": "",
      "readOnlyWidget": ""
    },
    "object_abJRh4": {
      "title": "明细表",
      "type": "array",
      "widget": "table",
      "fields": [
        {
          "id": "86",
          "name": "A",
          "dataType": "Text",
          "description": "A"
        },
        {
          "id": "82",
          "name": "B",
          "dataType": "Text",
          "description": "B"
        },
        {
          "id": "9",
          "name": "C",
          "dataType": "Text",
          "description": "C"
        },
        {
          "id": "14",
          "name": "D",
          "dataType": "Text",
          "description": "D"
        },
        {
          "id": "76",
          "name": "EE",
          "dataType": "Text",
          "description": "EE"
        }
      ],
      "properties": {},
      "items": {
        "type": "object",
        "properties": {}
      }
    }
  }
}
const schema = {
  type: 'object',
  "column": 3,
  "labelWidth": 100,
  "displayType": "row",
  properties: {
    range1: {
      bind: ['startDate', 'endDate'],
      title: '日期',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '对象',
      bind: 'obj',
      description: '这是一个对象类型',
      type: 'object',
      properties: {
        input1: {
          bind: 'a.b.c',
          title: '简单输入框',
          description: '输入‘123’，避免外部校验错误',
          type: 'string',
          required: true,
        },
        input2: {
          title: '简单输入框2',
          type: 'string',
          required: true,
        },
        select1: {
          title: '单选',
          bind: false,
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['早', '中', '晚'],
          'ui:widget': 'radio',
        },
      },
    },
    "object_abJRh4": {
      "title": "明细表",
      "type": "array",
      "widget": "table",
      "fields": [
        {
          "id": "86",
          "name": "A",
          "dataType": "Text",
          "description": "A"
        },
        {
          "id": "82",
          "name": "B",
          "dataType": "Text",
          "description": "B"
        },
        {
          "id": "9",
          "name": "C",
          "dataType": "Text",
          "description": "C"
        },
        {
          "id": "14",
          "name": "D",
          "dataType": "Text",
          "description": "D"
        },
        {
          "id": "76",
          "name": "EE",
          "dataType": "Text",
          "description": "EE"
        }
      ],
      "properties": {},
      "items": {
        "type": "object",
        "properties": {}
      }
    }
  },
};

const Demo = () => {
  const form = useForm();

  const beforeFinish = ({ data, errors, schema }) => {
    if (data.objectName && data.objectName.input1 === '123') return;
    return delay(1000).then(() => {
      return {
        name: 'objectName.select1',
        error: ['外部校验错误'],
      };
    });
  };

  const onFinish = (formData, errors) => {
    console.group('onFinish');
    console.log(formData, 'formData', errors, 'errors');
    console.groupEnd();
    if (errors.length > 0) return;
    // alert('formData:' + JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <button
        onClick={() => {
          console.log(form.getValues());
        }}
      >
        取值
      </button>
      <button
        onClick={() => {
          form.setValues({
            a: { b: { c: '23434' } },
            startDate: '2021-03-10',
            endDate: '2021-04-08',
            obj: { input2: 'heelo' },
          });
        }}
      >
        赋值
      </button>
      <button onClick={form.submit}>提交</button>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish} // 如果beforeFinish返回一个promise，onFinish会等promise resolve之后执行
        debug={true}
        widgets={_widgets}
      />
    </div>
  );
};

export default Demo;




const _widgets = {
  'table': function (props) {
    const { schema, onChange, value } = props;


    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];


    return (
      <Table dataSource={dataSource} columns={columns} />
    );
  }
}