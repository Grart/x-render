(window.webpackJsonp=window.webpackJsonp||[]).push([[34,11],{"0zqC":function(Ve,Ee,e){"use strict";e.r(Ee);var F=e("tJVT"),c=e("q1tI"),o=e.n(c),O=e("k3GJ"),Ae=e("MZF8"),K=e("asP9"),v=e.n(K),ge=e("ZpkN"),pe=e("TIsu"),an=e.n(pe);function Le(Pe,Fe){var Ce,je=(Ce=Pe.match(/\.(\w+)$/))===null||Ce===void 0?void 0:Ce[1];return je||(je=Fe.tsx?"tsx":"jsx"),je}var Je=Pe=>{var Fe,Ce,je,ze=Object(c.useRef)(),ye=Object(c.useContext)(K.context),Ue=ye.locale,N=Object(K.useLocaleProps)(Ue,Pe),Ge=Object(K.useDemoUrl)(N.identifier),He=N.demoUrl||Ge,Xe=(Ae.e===null||Ae.e===void 0?void 0:Ae.e.location.hash)==="#".concat(N.identifier),y=Object.keys(N.sources).length===1,h=Object(K.useCodeSandbox)((Fe=N.hideActions)!==null&&Fe!==void 0&&Fe.includes("CSB")?null:N),g=Object(K.useRiddle)((Ce=N.hideActions)!==null&&Ce!==void 0&&Ce.includes("RIDDLE")?null:N),i=Object(K.useMotions)(N.motions||[],ze.current),t=Object(F.default)(i,2),m=t[0],u=t[1],p=Object(K.useCopy)(),n=Object(F.default)(p,2),s=n[0],r=n[1],f=Object(c.useState)("_"),D=Object(F.default)(f,2),l=D[0],T=D[1],E=Object(c.useState)(Le(l,N.sources[l])),a=Object(F.default)(E,2),b=a[0],z=a[1],k=Object(c.useState)(Boolean(N.defaultShowCode)),U=Object(F.default)(k,2),_=U[0],w=U[1],ie=Object(c.useState)(Math.random()),fe=Object(F.default)(ie,2),Ne=fe[0],d=fe[1],R=N.sources[l][b]||N.sources[l].content,C=Object(K.useTSPlaygroundUrl)(Ue,R),A=Object(c.useRef)(),S=Object(K.usePrefersColor)(),j=Object(F.default)(S,1),I=j[0];Object(c.useEffect)(()=>{d(Math.random())},[I]);function M(B){T(B),z(Le(B,N.sources[B]))}return o.a.createElement("div",{style:N.style,className:[N.className,"__dumi-default-previewer",Xe?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:N.identifier,"data-debug":N.debug||void 0,"data-iframe":N.iframe||void 0},N.iframe&&o.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),o.a.createElement("div",{ref:ze,className:"__dumi-default-previewer-demo",style:{transform:N.transform?"translate(0, 0)":void 0,padding:N.compact||N.iframe&&N.compact!==!1?"0":void 0,background:N.background}},N.iframe?o.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(N.iframe).replace(/(\d)$/,"$1px")},key:Ne,src:He,ref:A}):N.children),o.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":N.title},N.title&&o.a.createElement(K.AnchorLink,{to:"#".concat(N.identifier)},N.title),N.description&&o.a.createElement("div",{dangerouslySetInnerHTML:{__html:N.description}})),o.a.createElement("div",{className:"__dumi-default-previewer-actions"},h&&o.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:h}),g&&o.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),N.motions&&o.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:u,onClick:()=>m()}),N.iframe&&o.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>d(Math.random())}),!((je=N.hideActions)!==null&&je!==void 0&&je.includes("EXTERNAL"))&&o.a.createElement(K.Link,{target:"_blank",to:He},o.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),o.a.createElement("span",null),o.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":r,onClick:()=>s(R)}),b==="tsx"&&_&&o.a.createElement(K.Link,{target:"_blank",to:C},o.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),o.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(_?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>w(!_)})),_&&o.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&o.a.createElement(O.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:l,onChange:M},Object.keys(N.sources).map(B=>o.a.createElement(O.TabPane,{tab:B==="_"?"index.".concat(Le(B,N.sources[B])):B,key:B}))),o.a.createElement("div",{className:"__dumi-default-previewer-source"},o.a.createElement(ge.a,{code:R,lang:b,showCopy:!1}))))};Ee.default=Je},JjdP:function(Ve,Ee,e){"use strict";e.r(Ee);var F=e("9og8"),c=e("WmNS"),o=e.n(c),O=e("LtsZ"),Ae=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,K=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,v=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};`,ge=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,pe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,an=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Collapse, Slider } from 'antd';
import './index.css';

window.copyMe = (list, index) => {
  const item = list[index];
  list.splice(index, 0, item);
  return list;
};

const Option = Select.Option;
const RadioGroup = Radio.Group;
const { Panel } = Collapse;
// constant
const themeList = [
  { label: 'antd\u4E3B\u9898', value: 'antd' },
  { label: 'fusion\u4E3B\u9898', value: 'fusion' },
];
class Root extends Component {
  state = {
    schemaName: 'simplest',
    theme: 'antd',
    column: 1,
    displayType: 'column',
    showDescIcon: false,
    readOnly: false,
    labelWidth: 110,
  };

  onThemeChange = e => {
    this.setState({ theme: e.target.value });
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onShowDescChange = value => {
    this.setState({ showDescIcon: value });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="date">\u65E5\u671F</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <RadioGroup
              options={themeList}
              value={this.state.theme}
              onChange={this.onThemeChange}
            />
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u5173\u63CF\u8FF0"
              onChange={this.onShowDescChange}
              unCheckedChildren="\u5F00\u63CF\u8FF0"
              checked={showDescIcon}
            />
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 42 }}>\u6807\u7B7E\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        {/* <Collapse defaultActiveKey={['1']} onChange={() => {}}>
          <Panel
            header={
              <div className="flex justify-between items-center">
                <div className="b f3">FormRender</div>
              </div>
            }
            key="1"
          >
            </Panel>
        </Collapse> */}
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,Le=`import React, { useState, useEffect } from 'react';
import deepEqual from 'deep-equal';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import CodeBlock from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(schema2str(DefaultSchema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  const handleDataChange = data => {
    let schema = tryParse(schemaStr);
    if (schema && typeof data === 'object') {
      if (!deepEqual(schema.formData, data)) {
        schema = { ...schema, formData: data };
        set1(schema2str(schema));
      }
    }
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }
  const { formData = {} } = schema;

  const form = useForm({ formData, onChange: handleDataChange });

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(formData)} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema.schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,Je=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"]
      }
    }
  }
}`,Pe=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,Fe=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,Ce=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,je=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,ze=`import React from 'react';
import { Table, Search, TableProvider, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      'ui:width': '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  return (
    <TableProvider>
      <TableBody />
    </TableProvider>
  );
};

const TableBody = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi,
          },
        ]}
      />
      <Table
        // size="small"
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default Demo;`,ye=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,Ue=`import React, { useState, useRef } from 'react';
import Generator, { fromFormily, toFormily } from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

// const b = {
//   schema: {
//     type: 'object',
//     properties: {
//       array: {
//         type: 'array',
//         title: 'Name',
//         items: {
//           type: 'object',
//           properties: {
//             aa: {
//               type: 'string',
//               title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
//               enum: [true, false],
//               'ui:widget': 'input',
//               enumNames: ['\u663E\u793A', '\u9690\u85CF'],
//             },
//             bb: { type: 'string', title: 'BB', 'ui:widget': 'input' },
//           },
//         },
//       },
//       cc: {
//         type: 'string',
//         title: 'CC',
//         'ui:widget': 'input',
//         'ui:options': { min: 1 },
//       },
//     },
//   },
// };

// console.log(toFormily(b));

export default Demo;`,N=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u670D\u52A1\u7AEF\u4E0B\u62C9\u9009\u6846',
                name: 'asyncSelect',
                schema: {
                  title: '\u6765\u81EA\u670D\u52A1\u7AEF',
                  type: 'string',
                  'ui:widget': 'NewWidget',
                },
                widget: 'NewWidget',
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                widget: 'map',
                setting: {},
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,Ge=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator, { toFormily, fromFormily } from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();
  const { location, replace } = useHistory();
  const [isFormily, setIsFormily] = useState(location.query.type === 'formily');

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  const switchMode = () => {
    if (isFormily) {
      setIsFormily(false);
      replace('/tools/generator/playground');
    } else {
      setIsFormily(true);
      replace('/tools/generator/playground?type=formily');
    }
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        transformer={isFormily && { to: toFormily, from: fromFormily }}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
          {
            text: 'Formily',
            shape: 'round',
            type: isFormily && 'primary',
            onClick: switchMode,
          }
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,He=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Xe=Ee.default={"guide-card":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=e("3PQu"),t=e("K+nK"),r.t0=t,r.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return r.t1=r.sent,m=(0,r.t0)(r.t1),r.t2=i,r.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return r.t3=r.sent,u=(0,r.t2)(r.t3),r.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return p=r.sent,n=function(){var D=(0,u.useState)("Line"),l=(0,m.default)(D,2),T=l[0],E=l[1],a={Line:p.Line,Column:p.Column,PivotTable:p.PivotTable}[T];return u.default.createElement("div",null,u.default.createElement("div",{style:{marginBottom:10}},u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return E("Line")}},"\u6298\u7EBF\u56FE"),u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return E("Column")}},"\u67F1\u72B6\u56FE"),u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return E("PivotTable")}},"\u4EA4\u53C9\u8868")),u.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},r.abrupt("return",n);case 17:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable, } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>
      
      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
      
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { pv: 50, uv: 20 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20, pv: 120 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120, pv: 1120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21, pv: 121 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121, pv: 1121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15, pv: 115 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115, pv: 1115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40, pv: 140 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140, pv: 1140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31, pv: 131 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131, pv: 1131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32, pv: 132 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132, pv: 1132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30, pv: 130 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e("K+nK"),n.t0=i,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,u=function(){return t.default.createElement(m.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(f,D,l){return t.default.createElement("div",null,t.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),t.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(D).length]}},f),t.default.createElement("p",null,JSON.stringify(D)),t.default.createElement("p",null,JSON.stringify(l)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},n.abrupt("return",u);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p style={{
          color: ['red', 'orange', 'yellow', 'green', 'blue'][Object.keys(dimRecord).length],
        }}>{val}</p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=e("3PQu"),t=e("K+nK"),r.t0=t,r.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return r.t1=r.sent,m=(0,r.t0)(r.t1),r.t2=i,r.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return r.t3=r.sent,u=(0,r.t2)(r.t3),r.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return p=r.sent,n=function(){var D=(0,u.useState)(!1),l=(0,m.default)(D,2),T=l[0],E=l[1];return u.default.createElement(u.default.Fragment,null,u.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",u.default.createElement("input",{type:"checkbox",value:T,onChange:function(){return E(!T)}})),u.default.createElement(p.PivotTable,{leftExpandable:T,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},r.abrupt("return",n);case 17:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A<input type="checkbox" value={expandable} onChange={() => setExpandable(!expandable)} /></label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f,D,l,T,E;return o.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return i=e("3PQu"),t=e("K+nK"),b.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return b.t0=t,b.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return b.t1=b.sent,m=(0,b.t0)(b.t1),b.t2=t,b.next=12,e.e(59).then(e.bind(null,"fWQN"));case 12:return b.t3=b.sent,u=(0,b.t2)(b.t3),b.t4=t,b.next=17,e.e(60).then(e.bind(null,"mtLc"));case 17:return b.t5=b.sent,p=(0,b.t4)(b.t5),b.t6=t,b.next=22,e.e(62).then(e.bind(null,"yKVA"));case 22:return b.t7=b.sent,n=(0,b.t6)(b.t7),b.t8=t,b.next=27,e.e(56).then(e.bind(null,"879j"));case 27:return b.t9=b.sent,s=(0,b.t8)(b.t9),b.t10=t,b.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return b.t11=b.sent,r=(0,b.t10)(b.t11),b.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 36:return f=b.sent,b.t12=i,b.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return b.t13=b.sent,D=(0,b.t12)(b.t13),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(z){(0,n.default)(U,z);var k=(0,s.default)(U);function U(){return(0,u.default)(this,U),k.apply(this,arguments)}return(0,p.default)(U,[{key:"render",value:function(){var w=this.props.form;return r.default.createElement("div",null,r.default.createElement(D.default,{form:w,schema:l}),r.default.createElement(m.default,{type:"primary",onClick:w.submit},"\u63D0\u4EA4"))}}]),U}(r.default.Component),E=(0,D.connectForm)(T),b.abrupt("return",E);case 46:case"end":return b.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f;return o.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("3PQu"),t=e("K+nK"),l.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return l.t0=t,l.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return l.t1=l.sent,m=(0,l.t0)(l.t1),l.t2=t,l.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return l.t3=l.sent,u=(0,l.t2)(l.t3),l.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 16:return p=l.sent,l.t4=i,l.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return l.t5=l.sent,n=(0,l.t4)(l.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},r=function(){var E=(0,n.useForm)();return u.default.createElement("div",null,u.default.createElement(n.default,{form:E,schema:s}),u.default.createElement(m.default,{type:"primary",onClick:E.submit},"\u63D0\u4EA4"))},f=r,l.abrupt("return",f);case 26:case"end":return l.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f;return o.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("3PQu"),t=e("K+nK"),l.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return l.t0=t,l.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return l.t1=l.sent,m=(0,l.t0)(l.t1),l.t2=t,l.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return l.t3=l.sent,u=(0,l.t2)(l.t3),l.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 16:return p=l.sent,l.t4=i,l.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return l.t5=l.sent,n=(0,l.t4)(l.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},r=function(){var E=(0,n.useForm)(),a=function(z,k){k.length>0?alert("errors:"+JSON.stringify(k)):alert("formData:"+JSON.stringify(z,null,2))};return u.default.createElement("div",null,u.default.createElement(n.default,{form:E,schema:s,onFinish:a}),u.default.createElement(m.default,{type:"primary",onClick:E.submit},"\u63D0\u4EA4"))},f=r,l.abrupt("return",f);case 26:case"end":return l.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s;return o.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return n=function(){var l=(0,u.useForm)(),T=function(a,b){b.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(b))):alert(JSON.stringify(a))};return m.default.createElement("div",null,m.default.createElement(u.default,{form:l,schema:p,onFinish:T}),m.default.createElement("button",{onClick:l.submit},"\u63D0\u4EA4"))},i=e("3PQu"),t=e("K+nK"),f.t0=t,f.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return f.t1=f.sent,m=(0,f.t0)(f.t1),f.t2=i,f.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return f.t3=f.sent,u=(0,f.t2)(f.t3),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=n,f.abrupt("return",s);case 16:case"end":return f.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),s.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return u=s.sent,p=function(){return t.default.createElement(m.default,{schema:u.basic})},s.abrupt("return",p);case 16:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:K},"json/schema.js":{import:"./json/schema",content:v}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),u=function(f){return{type:"object",displayType:f,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},p=function(){return t.default.createElement("div",null,t.default.createElement("h2",null,"display: row"),t.default.createElement(m.default,{schema:u("row")}),t.default.createElement("h2",null,"display: column"),t.default.createElement(m.default,{schema:u("column")}))},s.abrupt("return",p);case 14:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),u={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},p=function(){return t.default.createElement(m.default,{schema:u})},s.abrupt("return",p);case 14:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'inline',
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),u={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},p=function(){return t.default.createElement(m.default,{readOnly:!0,schema:u})},s.abrupt("return",p);case 14:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),u={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},p=function(){return t.default.createElement(m.default,{labelWidth:"200",schema:u})},s.abrupt("return",p);case 14:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=e("K+nK"),r.t0=i,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=i,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},p=function(){return t.default.createElement(m.default,{schema:u})},n=p,r.abrupt("return",n);case 15:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=e("K+nK"),r.t0=i,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=i,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},p=function(){return t.default.createElement(m.default,{schema:u})},n=p,r.abrupt("return",n);case 15:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=e("K+nK"),r.t0=i,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=i,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},p=function(){return t.default.createElement(m.default,{schema:u})},n=p,r.abrupt("return",n);case 15:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=e("K+nK"),r.t0=i,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=i,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},p=function(){return t.default.createElement(m.default,{schema:u})},n=p,r.abrupt("return",n);case 15:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f,D,l,T;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=e("3PQu"),t=e("K+nK"),a.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return a.t0=t,a.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return a.t2=t,a.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return a.t3=a.sent,u=(0,a.t2)(a.t3),a.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return a.t4=t,a.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return a.t5=a.sent,p=(0,a.t4)(a.t5),a.t6=t,a.next=26,Promise.resolve().then(e.bind(null,"tJVT"));case 26:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.t8=i,a.next=31,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 31:return a.t9=a.sent,s=(0,a.t8)(a.t9),a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 35:return r=a.sent,a.t10=i,a.next=39,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 39:return a.t11=a.sent,f=(0,a.t10)(a.t11),a.next=43,e.e(15).then(e.bind(null,"OH0R"));case 43:return D=a.sent,l=function(){var z=(0,f.useForm)(),k=(0,s.useState)({}),U=(0,n.default)(k,2),_=U[0],w=U[1],ie=function(){(0,D.fakeApi)("xxx/getForm").then(function(d){z.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,D.delay)(1e3).then(function(Ne){w({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var fe=function(d,R){R.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(R.map(function(C){return C.name}))):(0,D.fakeApi)("xxx/submit",d).then(function(C){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(f.default,{form:z,schema:_,onFinish:fe}),s.default.createElement(m.default,null,s.default.createElement(u.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(u.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=l,a.abrupt("return",T);case 47:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f,D,l,T;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=e("3PQu"),t=e("K+nK"),a.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return a.t0=t,a.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.t2=t,a.next=12,Promise.resolve().then(e.bind(null,"PpiC"));case 12:return a.t3=a.sent,u=(0,a.t2)(a.t3),a.next=16,e.e(14).then(e.t.bind(null,"tL+A",7));case 16:return a.t4=t,a.next=19,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 19:return a.t5=a.sent,p=(0,a.t4)(a.t5),a.t6=t,a.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 28:return s=a.sent,a.t8=i,a.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=36,e.e(15).then(e.bind(null,"OH0R"));case 36:return f=a.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},l=function(){var z=(0,r.useForm)(),k=function(w,ie){ie.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(fe){return fe.name}))):(0,f.fakeApi)("xxx/submit",w).then(function(fe){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},U=function(w){var ie=w.data,fe=w.errors,Ne=w.schema,d=(0,u.default)(w,["data","errors","schema"]);return(0,f.fakeApi)("xxx/validation").then(function(R){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return n.default.createElement("div",{style:{width:"400px"}},n.default.createElement(r.default,{form:z,schema:D,beforeFinish:U,onFinish:k}),n.default.createElement(m.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},T=l,a.abrupt("return",T);case 41:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f,D,l,T;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=e("3PQu"),t=e("K+nK"),a.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return a.t0=t,a.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return a.t2=t,a.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return a.t3=a.sent,u=(0,a.t2)(a.t3),a.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return a.t4=t,a.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return a.t5=a.sent,p=(0,a.t4)(a.t5),a.t6=t,a.next=26,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 26:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=30,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 30:return s=a.sent,a.t8=i,a.next=34,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 34:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=38,e.e(15).then(e.bind(null,"OH0R"));case 38:return f=a.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},l=function(){var z=(0,r.useForm)(),k=function(w,ie){ie.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(fe){return fe.name}))):(0,f.fakeApi)("xxx/submit",w).then(function(fe){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},U=function(){(0,f.fakeApi)("xxx/getForm").then(function(w){z.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return n.default.createElement("div",{style:{width:"400px"}},n.default.createElement(r.default,{form:z,schema:D,onFinish:k}),n.default.createElement(m.default,null,n.default.createElement(u.default,{onClick:U},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),n.default.createElement(u.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=l,a.abrupt("return",T);case 43:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f,D,l;return o.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return i=e("3PQu"),t=e("K+nK"),E.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return E.t0=t,E.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return E.t1=E.sent,m=(0,E.t0)(E.t1),E.next=11,e.e(14).then(e.t.bind(null,"tL+A",7));case 11:return E.t2=t,E.next=14,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 14:return E.t3=E.sent,u=(0,E.t2)(E.t3),E.t4=i,E.next=19,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 19:return E.t5=E.sent,p=(0,E.t4)(E.t5),E.next=23,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 23:return n=E.sent,E.t6=i,E.next=27,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 27:return E.t7=E.sent,s=(0,E.t6)(E.t7),E.next=31,e.e(15).then(e.bind(null,"OH0R"));case 31:return r=E.sent,f={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},D=function(){var b=(0,s.useForm)(),z={"#":function(w){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",w)},input1:function(w){w.length>2?b.setSchemaByPath("obj1.select1",function(ie){var fe=ie.enumNames;return{enumNames:fe.map(function(Ne){return Ne+"a"})}}):b.setSchemaByPath("obj1.select1",{enumNames:["\u65E9","\u4E2D","\u665A"]})}},k=function(){b.setSchemaByPath("obj1.select1",{enumNames:["\u65E92","\u4E2D2","\u665A3"]})},U=function(w,ie){ie.length>0?u.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(fe){return fe.name}))):u.default.info(JSON.stringify(w))};return p.default.createElement("div",{style:{width:"400px"}},p.default.createElement(s.default,{form:b,schema:f,watch:z,onMount:k,onFinish:U}),p.default.createElement(m.default,{type:"primary",onClick:b.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},l=D,E.abrupt("return",l);case 36:case"end":return E.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select1', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select1', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enumNames: ['\u65E92', '\u4E2D2', '\u665A3'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        watch={watch}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s;return o.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return i=e("3PQu"),t=e("K+nK"),f.t0=t,f.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return f.t1=f.sent,m=(0,f.t0)(f.t1),f.t2=i,f.next=10,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 10:return f.t3=f.sent,u=(0,f.t2)(f.t3),p={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},n=function(){var l=(0,u.useForm)();return m.default.createElement(u.default,{form:l,schema:p})},s=n,f.abrupt("return",s);case 16:case"end":return f.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    select1: {
      title: '\u5355\u9009',
      description: '\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D',
      type: 'string',
      enum: ['a', 'b'],
      enumNames: ['\u9690\u85CF\u8F93\u5165\u6846', '\u663E\u793A\u8F93\u5165\u6846'],
      disabled: '{{rootValue.input1.length > 5}}',
      default: 'a',
    },
    input1: {
      title: '\u8F93\u5165\u6846',
      description: '\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26',
      type: 'string',
      hidden: '{{formData.select1 == "a"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),s.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return u=s.sent,p=function(){return t.default.createElement(m.default,{schema:u.expression})},s.abrupt("return",p);case 16:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:K},"json/schema.js":{import:"./json/schema",content:v}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r;return o.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return i=e("3PQu"),D.t0=i,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,t=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 8:return m=D.sent,D.t2=i,D.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return D.t3=D.sent,u=(0,D.t2)(D.t3),p=function(T){return new Promise(function(E){return setTimeout(E,T)})},n={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var T=(0,u.useForm)(),E=function(){T.setValues({input1:"hello world"}),p(3e3).then(function(b){T.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return t.default.createElement(u.default,{form:T,schema:n,onMount:E})},r=s,D.abrupt("return",r);case 19:case"end":return D.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u4E0B\u62C9\u9009\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s;return o.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return i=e("3PQu"),f.t0=i,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,t=(0,f.t0)(f.t1),f.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 8:return m=f.sent,f.t2=i,f.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return f.t3=f.sent,u=(0,f.t2)(f.t3),p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},n=function(){var l=(0,u.useForm)(),T={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){l.setValueByPath("input2",a)}};return t.default.createElement(u.default,{form:l,schema:p,watch:T})},s=n,f.abrupt("return",s);case 18:case"end":return f.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f;return o.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("3PQu"),t=e("K+nK"),l.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return l.t0=t,l.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return l.t1=l.sent,m=(0,l.t0)(l.t1),l.t2=i,l.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return l.t3=l.sent,u=(0,l.t2)(l.t3),l.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 16:return p=l.sent,l.t4=i,l.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return l.t5=l.sent,n=(0,l.t4)(l.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},r=function(){var E=(0,n.useForm)(),a=function(k,U){U.length>0?alert("errorFields:"+JSON.stringify(U)):alert("formData:"+JSON.stringify(k,null,2))},b={input1:function(k){k.length>2?E.setSchemaByPath("obj1.select",function(U){var _=U.enumNames;return{enumNames:_.map(function(w){return w+"a"})}}):E.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return u.default.createElement("div",null,u.default.createElement(n.default,{form:E,schema:s,onFinish:a,watch:b}),u.default.createElement(m.default,{type:"",style:{marginRight:8},onClick:function(){return E.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),u.default.createElement(m.default,{type:"primary",onClick:E.submit},"\u63D0\u4EA4"))},f=r,l.abrupt("return",f);case 26:case"end":return l.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f,D,l,T;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=e("3PQu"),t=e("K+nK"),a.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return a.t0=t,a.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,Promise.all([e.e(3),e.e(57)]).then(e.t.bind(null,"cUip",7));case 11:return a.t2=t,a.next=14,Promise.all([e.e(0),e.e(55),e.e(58)]).then(e.t.bind(null,"iJl9",7));case 14:return a.t3=a.sent,u=(0,a.t2)(a.t3),a.t4=t,a.next=19,e.e(61).then(e.bind(null,"0Owb"));case 19:return a.t5=a.sent,p=(0,a.t4)(a.t5),a.t6=i,a.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 28:return s=a.sent,a.t8=i,a.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),f={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(z){return n.default.createElement(u.default,(0,p.default)({addonBefore:"http://",addonAfter:".com"},z))},l=function(){var z=(0,r.useForm)(),k=function(){};return n.default.createElement("div",null,n.default.createElement(r.default,{form:z,schema:f,widgets:{site:D},onFinish:function(_){return alert(JSON.stringify(_,null,2))}}),n.default.createElement(m.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4"))},T=l,a.abrupt("return",T);case 39:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"docs-playground":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:an},"main.js":{import:"./main",content:Le},"json/simplest.json":{import:"./json/simplest.json",content:Je},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Pe},"monaco/index.js":{import:"./monaco",content:Fe},"theme.css":{import:"./theme.css",content:Ce},"index.css":{import:"./index.css",content:je}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{tsx:ze}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n,s,r,f;return o.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("K+nK"),l.t0=i,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,t=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(54)]).then(e.bind(null,"P2DI"));case 8:for(m=l.sent,u=[],p=0;p<6;p++)u.push({id:p.toString(),title:"\u6807\u9898".concat(p+1),created_at:new Date().getTime()});return n={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},s=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(E,a){return t.default.createElement("a",{onClick:function(){return alert(E.title)}},"\u7F16\u8F91")}}],r=function(){var E=function(){return{rows:u,total:u.length}};return t.default.createElement(m.TableProvider,null,t.default.createElement(m.Search,{schema:n,api:E}),t.default.createElement(m.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:s,rowKey:"id"}))},f=r,l.abrupt("return",f);case 16:case"end":return l.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, TableProvider } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u6807\u9898',
      type: 'string',
      'ui:width': '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '30%',
    },
  }
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => (
     <a onClick={()=>alert(row.title)}>\u7F16\u8F91</a>
    ),
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <TableProvider>
       <Search schema={schema} api={searchApi} />
       <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){var i,t,m,u,p,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=e("K+nK"),r.t0=i,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=i,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(53)]).then(e.bind(null,"nYSz"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),u={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},p=function(){return t.default.createElement("div",{style:{height:"80vh"}},t.default.createElement(m.default,{defaultValue:u}))},n=p,r.abrupt("return",n);case 15:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:ye}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:Ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:N}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(O.dynamic)({loader:function(){var y=Object(F.a)(o.a.mark(function g(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:Ge},"index.less":{import:"./index.less",content:He}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.6"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Ve,Ee,e){},Zs1V:function(Ve){Ve.exports=JSON.parse("{}")},j57V:function(Ve,Ee,e){"use strict";e.r(Ee);var F=e("q1tI"),c=e.n(F),o=e("asP9"),O=e.n(o),Ae=e("0zqC"),K=e("ZpkN"),v=e("JjdP"),ge=c.a.memo(v.default["widget-demo"].component);Ee.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},c.a.createElement(o.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),c.a.createElement("p",null,"\u5F53 FormRender \u63D0\u4F9B\u7684\u7EC4\u4EF6\u65E0\u6CD5 100%\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u5DF1\u5199\u4E00\u4E2A\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u529F\u80FD\u4F7F FormRender \u62E5\u6709\u5F88\u597D\u6269\u5C55\u6027\uFF0C\u53EF\u80FD\u7684\u5E94\u7528\u573A\u666F\u5982\u4E0B\uFF1A"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u6211\u9700\u8981\u5199\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u7684\u641C\u7D22\u8F93\u5165\u6846\uFF08\u666E\u9002\u6027\u4E0D\u9AD8/\u96BE\u4EE5\u7528 schema \u63CF\u8FF0\u7684\u7EC4\u4EF6\uFF09"),c.a.createElement("li",null,"\u6211\u4EEC\u56E2\u961F\u4F7F\u7528 xxx ui\uFF0C\u4E0E antd \u4E0D\u642D\uFF0C\u5E0C\u671B\u80FD\u9002\u914D\u4E00\u5957 xxx ui \u7EC4\u4EF6\u7684 FormRender\uFF08\u6B22\u8FCE Pull Request\uFF09"),c.a.createElement("li",null,"\u6211\u9700\u8981\u5728\u8868\u5355\u5185\u90E8\u5199\u4E00\u4E2A excel \u4E0A\u4F20\u6309\u94AE\uFF08\u5B8C\u5168\u5B9A\u5236\u5316\u7684\u9700\u6C42\uFF09")),c.a.createElement("p",null,"\u6CE8\uFF1A\u5982\u679C\u662F\u65B0\u589E\u4E00\u4E2A\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u7ED9 FormRender \u7EF4\u62A4\u7684\u540C\u5B66\u6765\u63D0 Pull Request\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u6269\u5C55\u5176\u751F\u6001\uFF0CFormRender \u7684\u793E\u533A\u4EE5\u53CA\u63D0\u4F9B\u4E86\u90E8\u5206 ",c.a.createElement(o.Link,{to:"/widgets"},"\u5E38\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u3002"),c.a.createElement("h2",{id:"\u4F7F\u7528"},c.a.createElement(o.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),c.a.createElement("p",null,"\u7B80\u5355\u7684\u8BF4\uFF0C\u5728 Form \u7EC4\u4EF6\u5C42\u4F7F\u7528 widgets \u5B57\u6BB5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728 schema \u5185\u4F7F\u7528 widget \u5B57\u6BB5\u6307\u660E\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u503C\u5373\u53EF\uFF1A"),c.a.createElement(K.a,{code:`const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    //...
  },
};

<Form
  schema={schema}
  widgets={{ site: SiteInput }}
  //...
/>;`,lang:"js"}),c.a.createElement("p",null,"\u5B9E\u9645\u4EE3\u7801\u5982\u4E0B\uFF1A")),c.a.createElement(Ae.default,v.default["widget-demo"].previewerProps,c.a.createElement(ge,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("p",null,"\u53EF\u4EE5\u770B\u5230\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5199\u6CD5\u5341\u5206\u76F4\u89C2\uFF0C\u4E8B\u5B9E\u4E0A\u5F88\u591A antd \u7684\u7EC4\u4EF6\u90FD\u662F\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF08\u5185\u7F6E\u7EC4\u4EF6\u4E2D\u5C31\u6709 Input, InputNumber, Checkbox \u548C Switch\uFF09"),c.a.createElement("h2",{id:"createwidget"},c.a.createElement(o.AnchorLink,{to:"#createwidget","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"createWidget"),c.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u63A5\u6536\u4EE5\u4E0B Props\uFF1A"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",null,"disabled"),"\uFF1A\u662F\u5426\u7981\u6B62\u8F93\u5165"),c.a.createElement("li",null,c.a.createElement("strong",null,"readOnly"),"\uFF1A\u662F\u5426\u53EA\u8BFB"),c.a.createElement("li",null,c.a.createElement("strong",null,"value"),"\uFF1A\u7EC4\u4EF6\u73B0\u5728\u7684\u503C"),c.a.createElement("li",null,c.a.createElement("strong",null,"onChange"),"\uFF1A\u51FD\u6570\uFF0C\u63A5\u6536 value \u4E3A\u5165\u53C2\uFF0C\u7528\u4E8E\u5C06\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C\u540C\u6B65\u7ED9 Form"),c.a.createElement("li",null,c.a.createElement("strong",null,"schema"),"\uFF1A\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5B50 schema"),c.a.createElement("li",null,c.a.createElement("strong",null,"addons.onItemChange"),": \u6CE8\u610F\u6302\u5728 addons \u4E0B\u9762\u3002\u7528\u4E8E\u5728\u672C\u7EC4\u4EF6\u5185\u4FEE\u6539\u5176\u4ED6\u7EC4\u4EF6\u7684\u503C onItemChange(value, path)"),c.a.createElement("li",null,c.a.createElement("strong",null,"addons.getValue"),": \u7528\u4E8E\u901A\u8FC7\u8DEF\u5F84\u5B57\u7B26\u4E32\u83B7\u53D6\u503C getValue(path)\u3002\u4F8B\u5982 ",c.a.createElement("code",null,"getValue('a.b[2].c')"),"\u3002getValue() \u83B7\u53D6 formData"),c.a.createElement("li",null,c.a.createElement("strong",null,"addons.formData"),": \u8868\u5355\u5F53\u524D\u7684\u6570\u636E\u3002\u5176\u5B9E\u53EF\u4EE5\u901A\u8FC7 getValue \u83B7\u53D6\uFF0C\u4F46\u6211\u4E5F\u4F20\u4E0B\u6765\u4E86\u3002"),c.a.createElement("li",null,c.a.createElement("strong",null,"addons.dataPath"),': \u76EE\u524D\u6570\u636E\u6240\u5728\u7684 path\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0Cstring \u7C7B\u578B\u3002'),c.a.createElement("li",null,c.a.createElement("strong",null,"addons.dataIndex"),': \u5982\u679C dataPath \u4E0D\u5305\u542B\u6570\u7EC4\uFF0C\u5219\u4E3A [], \u5982\u679C dataPath \u5305\u542B\u6570\u7EC4\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0C\u5219\u4E3A [2,0]\u3002\u662F\u81EA\u4E0A\u5230\u4E0B\u6240\u6709\u7ECF\u8FC7\u7684\u6570\u7EC4\u7684 index \u6309\u987A\u5E8F\u5B58\u653E\u7684\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B')),c.a.createElement("p",null,"\u5BF9\u9AD8\u9636\u7EC4\u4EF6\u719F\u6089\u7684\u540C\u5B66\uFF0C",c.a.createElement("code",null,"form-render")," \u5185\u7F6E\u4E86 ",c.a.createElement("code",null,"createWidget")," \u65B9\u6CD5\uFF0C\u652F\u6301\u7528\u7C7B\u4F3C\u4E8E ",c.a.createElement("code",null,"redux")," \u7684 ",c.a.createElement("code",null,"connect")," \u7684\u8BED\u6CD5\u5FEB\u901F\u751F\u4EA7\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF1A"),c.a.createElement(K.a,{code:`import { Checkbox } from 'antd';
import { createWidget } from 'form-render';

const MyCheckBox = createWidget(({ value }) => {
  return {
    checked: value,
  };
})(Checkbox);`,lang:"js"}),c.a.createElement("p",null,c.a.createElement("code",null,"createWidget")," \u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u63A5\u6536\u7EC4\u4EF6 props\uFF0C\u5141\u8BB8\u7528\u6237\u5BF9\u9F50\u505A\u4FEE\u6539\u5E76\u8FD4\u56DE\u771F\u6B63\u9700\u8981\u7684 props\u3002\u4F7F\u7528 ",c.a.createElement("code",null,"createWidget")," \u4E0E\u76F4\u63A5\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5DE5\u4F5C\u91CF\u57FA\u672C\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u559C\u6B22\u7684\u540C\u5B66\u53EF\u4EE5\u4F7F\u7528"),c.a.createElement("h2",{id:"\u6700\u4F73\u5B9E\u8DF5"},c.a.createElement(o.AnchorLink,{to:"#\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u6700\u4F73\u5B9E\u8DF5"),c.a.createElement("p",null,"\u540C\u4E00\u4E2A\u9879\u76EE\u4E0B\u4E0D\u540C\u7684 form \u91CC\uFF0C\u4F7F\u7528\u5230\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EF\u80FD\u5927\u81F4\u76F8\u540C\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u4E92\u76F8\u4E0D\u540C\uFF0C\u7B14\u8005\u5EFA\u8BAE\u662F\u4E2D\u5FC3\u5316\u4E00\u4E2A Form \u7EC4\u4EF6\uFF0C\u5E76\u4E00\u6B21\u6027\u5C06\u6240\u6709\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u5165\u5176\u4E2D\u3002\u5728\u9879\u76EE\u7684\u5404\u5904\u5F15\u5165\u5BF9\u5E94\u7EC4\u4EF6\uFF1A"),c.a.createElement(K.a,{code:`//  /Component/FormRender.js
import Form from 'form-render';
import Cascade from './Cascade';
import Percentage from './Percentage';
import MyCheckBox from './MyCheckBox';
import ExcelUploader from './ExcelUploader';

const FormRender = props => {
  return (
    <Form
      widgets={{
        percentage: Percentage,
        cascade: Cascade,
        myCheck: MyCheckBox,
        excelUpload: ExcelUploader,
      }}
      {...props}
    />
  );
};`,lang:"js"}),c.a.createElement("p",null,"\u7136\u540E\u5728\u6BCF\u4E2A form \u9875\u9762\u7EDF\u4E00\u5F15\u5165\u4F7F\u7528"),c.a.createElement(K.a,{code:`import { useForm } from 'form-render';
import FormRender from './Component/FormRender';
const Demo1 = props => {
  const form = useForm();
  return <FormRender form={form} onFinish={() => {}} />;
};`,lang:"js"}),c.a.createElement("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6"},c.a.createElement(o.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6"),c.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u4E5F\u8BB8\u5DF2\u7ECF\u6709\u5185\u7F6E\u7EC4\u4EF6\u652F\u6301\u3002\u6240\u4EE5\u5728\u6B64\u7F57\u5217\u4E00\u4E0B\u6240\u6709\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u4ED6\u4EEC\u4E0E schema \u7684\u5339\u914D\u89C4\u5219\uFF1A"),c.a.createElement(K.a,{code:`export const mapping = {
  default: 'input',
  string: 'input',
  array: 'list',
  boolean: 'checkbox',
  integer: 'number',
  number: 'number',
  object: 'map',
  html: 'html',
  'string:upload': 'upload',
  'string:url': 'url',
  'string:dateTime': 'date',
  'string:date': 'date',
  'string:time': 'time',
  'string:textarea': 'textarea',
  'string:color': 'color',
  'string:image': 'imageInput',
  'range:time': 'timeRange',
  'range:date': 'dateRange',
  'range:dateTime': 'dateRange',
  '*?enum': 'radio',
  '*?enum_long': 'select',
  'array?enum': 'checkboxes',
  'array?enum_long': 'multiSelect',
  '*?readOnly': 'html',
};`,lang:"js"}),c.a.createElement("p",null,"\u9664\u6B64\u4E4B\u5916\u8FD8\u6709\u5FC5\u987B\u901A\u8FC7 ",c.a.createElement("code",null,"widget")," \u5173\u952E\u8BCD\u6765\u4F7F\u7528\u7684\u7EC4\u4EF6"),c.a.createElement(K.a,{code:`widget:slider  \u6ED1\u52A8\u8F93\u5165\u6761
widget:rate  \u4E94\u661F\u8BC4\u5206
widget:cascader  \u7EA7\u8054\u9009\u62E9
widget:treeSelect  \u6811\u5F62\u9009\u62E9`,lang:"unknown"}),c.a.createElement("p",null,"\u5176\u4E2D\u5DE6\u4FA7\u4E3A\u5339\u914D\u89C4\u5219\uFF08\u683C\u5F0F\u4E3A ",c.a.createElement("code",null,"type:format?enum/readOnly"),"\uFF09\uFF0C\u53F3\u4FA7\u4E3A\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u3002\u5982\u679C\u9700\u8981\u5F3A\u5236\u4EE5\u67D0\u4E2A\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u76F8\u540C"),c.a.createElement(K.a,{code:`const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u4E0B\u62C9\u9009\u6846',
      type: 'string',
      widget: 'select',
    },
    ...
  },
};`,lang:"js"}))))}},k3GJ:function(Ve,Ee,e){"use strict";e.r(Ee),e.d(Ee,"TabPane",function(){return k});var F=e("wx14"),c=e("rePB"),o=e("ODXe"),O=e("U8pU"),Ae=e("Ff2n"),K=e("VTBJ"),v=e("q1tI"),ge=e("TSYQ"),pe=e.n(ge),an=e("Zm9Q"),Le=e("5Z9U"),Je=e("6cGi"),Pe=e("KQm4"),Fe=e("wgJM"),Ce=e("t23M");function je(d){var R=Object(v.useRef)(),C=Object(v.useRef)(!1);function A(){for(var S=arguments.length,j=new Array(S),I=0;I<S;I++)j[I]=arguments[I];C.current||(Fe.a.cancel(R.current),R.current=Object(Fe.a)(function(){d.apply(void 0,j)}))}return Object(v.useEffect)(function(){return function(){C.current=!0,Fe.a.cancel(R.current)}},[]),A}function ze(d){var R=Object(v.useRef)([]),C=Object(v.useState)({}),A=Object(o.a)(C,2),S=A[1],j=Object(v.useRef)(typeof d=="function"?d():d),I=je(function(){var B=j.current;R.current.forEach(function(Q){B=Q(B)}),R.current=[],j.current=B,S({})});function M(B){R.current.push(B),I()}return[j.current,M]}var ye=e("4IlW");function Ue(d,R){var C,A=d.prefixCls,S=d.id,j=d.active,I=d.rtl,M=d.tab,B=M.key,Q=M.tab,W=M.disabled,$=M.closeIcon,X=d.tabBarGutter,re=d.tabPosition,ee=d.closable,G=d.renderWrapper,ve=d.removeAriaLabel,le=d.editable,de=d.onClick,me=d.onRemove,se=d.onFocus,oe="".concat(A,"-tab");v.useEffect(function(){return me},[]);var q={};re==="top"||re==="bottom"?q[I?"marginLeft":"marginRight"]=X:q.marginBottom=X;var be=le&&ee!==!1&&!W;function ne(V){W||de(V)}function Y(V){V.preventDefault(),V.stopPropagation(),le.onEdit("remove",{key:B,event:V})}var H=v.createElement("div",{key:B,ref:R,className:pe()(oe,(C={},Object(c.a)(C,"".concat(oe,"-with-remove"),be),Object(c.a)(C,"".concat(oe,"-active"),j),Object(c.a)(C,"".concat(oe,"-disabled"),W),C)),style:q,onClick:ne},v.createElement("div",{role:"tab","aria-selected":j,id:S&&"".concat(S,"-tab-").concat(B),className:"".concat(oe,"-btn"),"aria-controls":S&&"".concat(S,"-panel-").concat(B),"aria-disabled":W,tabIndex:W?null:0,onClick:function(P){P.stopPropagation(),ne(P)},onKeyDown:function(P){[ye.a.SPACE,ye.a.ENTER].includes(P.which)&&(P.preventDefault(),ne(P))},onFocus:se},Q),be&&v.createElement("button",{type:"button","aria-label":ve||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(P){P.stopPropagation(),Y(P)}},$||le.removeIcon||"\xD7"));return G&&(H=G(H)),H}var N=v.forwardRef(Ue),Ge={width:0,height:0,left:0,top:0};function He(d,R,C){return Object(v.useMemo)(function(){for(var A,S=new Map,j=R.get((A=d[0])===null||A===void 0?void 0:A.key)||Ge,I=j.left+j.width,M=0;M<d.length;M+=1){var B=d[M].key,Q=R.get(B);if(!Q){var W;Q=R.get((W=d[M-1])===null||W===void 0?void 0:W.key)||Ge}var $=S.get(B)||Object(K.a)({},Q);$.right=I-$.left-$.width,S.set(B,$)}return S},[d.map(function(A){return A.key}).join("_"),R,C])}var Xe={width:0,height:0,left:0,top:0,right:0};function y(d,R,C,A,S){var j=S.tabs,I=S.tabPosition,M=S.rtl,B,Q,W;["top","bottom"].includes(I)?(B="width",Q=M?"right":"left",W=Math.abs(R.left)):(B="height",Q="top",W=-R.top);var $=R[B],X=C[B],re=A[B],ee=$;return X+re>$&&(ee=$-re),Object(v.useMemo)(function(){if(!j.length)return[0,0];for(var G=j.length,ve=G,le=0;le<G;le+=1){var de=d.get(j[le].key)||Xe;if(de[Q]+de[B]>W+ee){ve=le-1;break}}for(var me=0,se=G-1;se>=0;se-=1){var oe=d.get(j[se].key)||Xe;if(oe[Q]<W){me=se+1;break}}return[me,ve]},[d,W,ee,I,j.map(function(G){return G.key}).join("_"),M])}var h=e("1j5w"),g=e("eDIo");function i(d,R){var C=d.prefixCls,A=d.editable,S=d.locale,j=d.style;return!A||A.showAdd===!1?null:v.createElement("button",{ref:R,type:"button",className:"".concat(C,"-nav-add"),style:j,"aria-label":(S==null?void 0:S.addAriaLabel)||"Add tab",onClick:function(M){A.onEdit("add",{event:M})}},A.addIcon||"+")}var t=v.forwardRef(i);function m(d,R){var C=d.prefixCls,A=d.id,S=d.tabs,j=d.locale,I=d.mobile,M=d.moreIcon,B=M===void 0?"More":M,Q=d.moreTransitionName,W=d.style,$=d.className,X=d.editable,re=d.tabBarGutter,ee=d.rtl,G=d.onTabClick,ve=Object(v.useState)(!1),le=Object(o.a)(ve,2),de=le[0],me=le[1],se=Object(v.useState)(null),oe=Object(o.a)(se,2),q=oe[0],be=oe[1],ne="".concat(A,"-more-popup"),Y="".concat(C,"-dropdown"),H=q!==null?"".concat(ne,"-").concat(q):null,V=j==null?void 0:j.dropdownAriaLabel,P=v.createElement(h.default,{onClick:function(ue){var Re=ue.key,De=ue.domEvent;G(Re,De),me(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":H,selectedKeys:[q],"aria-label":V!==void 0?V:"expanded dropdown"},S.map(function(x){return v.createElement(h.MenuItem,{key:x.key,id:"".concat(ne,"-").concat(x.key),role:"option","aria-controls":A&&"".concat(A,"-panel-").concat(x.key),disabled:x.disabled},x.tab)}));function Z(x){for(var ue=S.filter(function(Me){return!Me.disabled}),Re=ue.findIndex(function(Me){return Me.key===q})||0,De=ue.length,Ie=0;Ie<De;Ie+=1){Re=(Re+x+De)%De;var Se=ue[Re];if(!Se.disabled){be(Se.key);return}}}function te(x){var ue=x.which;if(!de){[ye.a.DOWN,ye.a.SPACE,ye.a.ENTER].includes(ue)&&(me(!0),x.preventDefault());return}switch(ue){case ye.a.UP:Z(-1),x.preventDefault();break;case ye.a.DOWN:Z(1),x.preventDefault();break;case ye.a.ESC:me(!1);break;case ye.a.SPACE:case ye.a.ENTER:q!==null&&G(q,x);break}}Object(v.useEffect)(function(){var x=document.getElementById(H);x&&x.scrollIntoView&&x.scrollIntoView(!1)},[q]),Object(v.useEffect)(function(){de||be(null)},[de]);var ae=Object(c.a)({},ee?"marginLeft":"marginRight",re);S.length||(ae.visibility="hidden",ae.order=1);var Te=pe()(Object(c.a)({},"".concat(Y,"-rtl"),ee)),We=I?null:v.createElement(g.default,{prefixCls:Y,overlay:P,trigger:["hover"],visible:de,transitionName:Q,onVisibleChange:me,overlayClassName:Te,mouseEnterDelay:.1,mouseLeaveDelay:.1},v.createElement("button",{type:"button",className:"".concat(C,"-nav-more"),style:ae,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(A,"-more"),"aria-expanded":de,onKeyDown:te},B));return v.createElement("div",{className:pe()("".concat(C,"-nav-operations"),$),style:W,ref:R},We,v.createElement(t,{prefixCls:C,locale:j,editable:X}))}var u=v.forwardRef(m),p=Object(v.createContext)(null),n=.1,s=.01,r=20,f=Math.pow(.995,r);function D(d,R){var C=Object(v.useState)(),A=Object(o.a)(C,2),S=A[0],j=A[1],I=Object(v.useState)(0),M=Object(o.a)(I,2),B=M[0],Q=M[1],W=Object(v.useState)(0),$=Object(o.a)(W,2),X=$[0],re=$[1],ee=Object(v.useState)(),G=Object(o.a)(ee,2),ve=G[0],le=G[1],de=Object(v.useRef)();function me(Y){var H=Y.touches[0],V=H.screenX,P=H.screenY;j({x:V,y:P}),window.clearInterval(de.current)}function se(Y){if(!!S){Y.preventDefault();var H=Y.touches[0],V=H.screenX,P=H.screenY;j({x:V,y:P});var Z=V-S.x,te=P-S.y;R(Z,te);var ae=Date.now();Q(ae),re(ae-B),le({x:Z,y:te})}}function oe(){if(!!S&&(j(null),le(null),ve)){var Y=ve.x/X,H=ve.y/X,V=Math.abs(Y),P=Math.abs(H);if(Math.max(V,P)<n)return;var Z=Y,te=H;de.current=window.setInterval(function(){if(Math.abs(Z)<s&&Math.abs(te)<s){window.clearInterval(de.current);return}Z*=f,te*=f,R(Z*r,te*r)},r)}}var q=Object(v.useRef)();function be(Y){var H=Y.deltaX,V=Y.deltaY,P=0,Z=Math.abs(H),te=Math.abs(V);Z===te?P=q.current==="x"?H:V:Z>te?(P=H,q.current="x"):(P=V,q.current="y"),R(-P,-P)&&Y.preventDefault()}var ne=Object(v.useRef)(null);ne.current={onTouchStart:me,onTouchMove:se,onTouchEnd:oe,onWheel:be},v.useEffect(function(){function Y(Z){ne.current.onTouchStart(Z)}function H(Z){ne.current.onTouchMove(Z)}function V(Z){ne.current.onTouchEnd(Z)}function P(Z){ne.current.onWheel(Z)}return document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",V,{passive:!1}),d.current.addEventListener("touchstart",Y,{passive:!1}),d.current.addEventListener("wheel",P),function(){document.removeEventListener("touchmove",H),document.removeEventListener("touchend",V)}},[])}function l(){var d=Object(v.useRef)(new Map);function R(A){return d.current.has(A)||d.current.set(A,v.createRef()),d.current.get(A)}function C(A){d.current.delete(A)}return[R,C]}function T(d,R){var C=v.useRef(d),A=v.useState({}),S=Object(o.a)(A,2),j=S[1];function I(M){var B=typeof M=="function"?M(C.current):M;B!==C.current&&R(B,C.current),C.current=B,j({})}return[C.current,I]}var E=function(R){var C=R.position,A=R.prefixCls,S=R.extra;if(!S)return null;var j,I=S;return C==="right"&&(j=I.right||!I.left&&I||null),C==="left"&&(j=I.left||null),j?v.createElement("div",{className:"".concat(A,"-extra-content")},j):null};function a(d,R){var C,A=v.useContext(p),S=A.prefixCls,j=A.tabs,I=d.className,M=d.style,B=d.id,Q=d.animated,W=d.activeKey,$=d.rtl,X=d.extra,re=d.editable,ee=d.locale,G=d.tabPosition,ve=d.tabBarGutter,le=d.children,de=d.onTabClick,me=d.onTabScroll,se=Object(v.useRef)(),oe=Object(v.useRef)(),q=Object(v.useRef)(),be=Object(v.useRef)(),ne=l(),Y=Object(o.a)(ne,2),H=Y[0],V=Y[1],P=G==="top"||G==="bottom",Z=T(0,function(J,L){P&&me&&me({direction:J>L?"left":"right"})}),te=Object(o.a)(Z,2),ae=te[0],Te=te[1],We=T(0,function(J,L){!P&&me&&me({direction:J>L?"top":"bottom"})}),x=Object(o.a)(We,2),ue=x[0],Re=x[1],De=Object(v.useState)(0),Ie=Object(o.a)(De,2),Se=Ie[0],Me=Ie[1],rn=Object(v.useState)(0),sn=Object(o.a)(rn,2),Ye=sn[0],on=sn[1],pn=Object(v.useState)(0),un=Object(o.a)(pn,2),Ze=un[0],fn=un[1],ln=Object(v.useState)(0),we=Object(o.a)(ln,2),dn=we[0],ce=we[1],$e=Object(v.useState)(null),mn=Object(o.a)($e,2),Be=mn[0],Yn=mn[1],Zn=Object(v.useState)(null),Rn=Object(o.a)(Zn,2),Qe=Rn[0],xn=Rn[1],kn=Object(v.useState)(0),Dn=Object(o.a)(kn,2),qn=Dn[0],_n=Dn[1],et=Object(v.useState)(0),Sn=Object(o.a)(et,2),nt=Sn[0],tt=Sn[1],at=ze(new Map),On=Object(o.a)(at,2),rt=On[0],st=On[1],cn=He(j,rt,Se),Bn="".concat(S,"-nav-operations-hidden"),xe=0,ke=0;P?$?(xe=0,ke=Math.max(0,Se-Be)):(xe=Math.min(0,Be-Se),ke=0):(xe=Math.min(0,Qe-Ye),ke=0);function vn(J){return J<xe?xe:J>ke?ke:J}var An=Object(v.useRef)(),ot=Object(v.useState)(),Pn=Object(o.a)(ot,2),hn=Pn[0],Nn=Pn[1];function gn(){Nn(Date.now())}function yn(){window.clearTimeout(An.current)}D(se,function(J,L){function he(Oe,_e){Oe(function(en){var nn=vn(en+_e);return nn})}if(P){if(Be>=Se)return!1;he(Te,J)}else{if(Qe>=Ye)return!1;he(Re,L)}return yn(),gn(),!0}),Object(v.useEffect)(function(){return yn(),hn&&(An.current=window.setTimeout(function(){Nn(0)},100)),yn},[hn]);function Tn(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:W,L=cn.get(J)||{width:0,height:0,left:0,right:0,top:0};if(P){var he=ae;$?L.right<ae?he=L.right:L.right+L.width>ae+Be&&(he=L.right+L.width-Be):L.left<-ae?he=-L.left:L.left+L.width>-ae+Be&&(he=-(L.left+L.width-Be)),Re(0),Te(vn(he))}else{var Oe=ue;L.top<-ue?Oe=-L.top:L.top+L.height>-ue+Qe&&(Oe=-(L.top+L.height-Qe)),Te(0),Re(vn(Oe))}}var ut=y(cn,{width:Be,height:Qe,left:ae,top:ue},{width:Ze,height:dn},{width:qn,height:nt},Object(K.a)(Object(K.a)({},d),{},{tabs:j})),In=Object(o.a)(ut,2),it=In[0],lt=In[1],dt=j.map(function(J){var L=J.key;return v.createElement(N,{id:B,prefixCls:S,key:L,rtl:$,tab:J,closable:J.closable,editable:re,active:L===W,tabPosition:G,tabBarGutter:ve,renderWrapper:le,removeAriaLabel:ee==null?void 0:ee.removeAriaLabel,ref:H(L),onClick:function(Oe){de(L,Oe)},onRemove:function(){V(L)},onFocus:function(){Tn(L),gn(),$||(se.current.scrollLeft=0),se.current.scrollTop=0}})}),bn=je(function(){var J,L,he,Oe,_e,en,nn,Cn,jn,ht=((J=se.current)===null||J===void 0?void 0:J.offsetWidth)||0,gt=((L=se.current)===null||L===void 0?void 0:L.offsetHeight)||0,zn=((he=be.current)===null||he===void 0?void 0:he.offsetWidth)||0,Un=((Oe=be.current)===null||Oe===void 0?void 0:Oe.offsetHeight)||0,yt=((_e=q.current)===null||_e===void 0?void 0:_e.offsetWidth)||0,bt=((en=q.current)===null||en===void 0?void 0:en.offsetHeight)||0;Yn(ht),xn(gt),_n(zn),tt(Un);var Gn=(((nn=oe.current)===null||nn===void 0?void 0:nn.offsetWidth)||0)-zn,Hn=(((Cn=oe.current)===null||Cn===void 0?void 0:Cn.offsetHeight)||0)-Un;Me(Gn),on(Hn);var wn=(jn=q.current)===null||jn===void 0?void 0:jn.className.includes(Bn);fn(Gn-(wn?0:yt)),ce(Hn-(wn?0:bt)),st(function(){var Qn=new Map;return j.forEach(function(Et){var Xn=Et.key,tn=H(Xn).current;tn&&Qn.set(Xn,{width:tn.offsetWidth,height:tn.offsetHeight,left:tn.offsetLeft,top:tn.offsetTop})}),Qn})}),mt=j.slice(0,it),ct=j.slice(lt+1),Mn=[].concat(Object(Pe.a)(mt),Object(Pe.a)(ct)),pt=Object(v.useState)(),Kn=Object(o.a)(pt,2),ft=Kn[0],vt=Kn[1],Ke=cn.get(W),Ln=Object(v.useRef)();function Wn(){Fe.a.cancel(Ln.current)}Object(v.useEffect)(function(){var J={};return Ke&&(P?($?J.right=Ke.right:J.left=Ke.left,J.width=Ke.width):(J.top=Ke.top,J.height=Ke.height)),Wn(),Ln.current=Object(Fe.a)(function(){vt(J)}),Wn},[Ke,P,$]),Object(v.useEffect)(function(){Tn()},[W,Ke,cn,P]),Object(v.useEffect)(function(){bn()},[$,ve,W,j.map(function(J){return J.key}).join("_")]);var $n=!!Mn.length,qe="".concat(S,"-nav-wrap"),En,Fn,Vn,Jn;return P?$?(Fn=ae>0,En=ae+Be<Se):(En=ae<0,Fn=-ae+Be<Se):(Vn=ue<0,Jn=-ue+Qe<Ye),v.createElement("div",{ref:R,role:"tablist",className:pe()("".concat(S,"-nav"),I),style:M,onKeyDown:function(){gn()}},v.createElement(E,{position:"left",extra:X,prefixCls:S}),v.createElement(Ce.default,{onResize:bn},v.createElement("div",{className:pe()(qe,(C={},Object(c.a)(C,"".concat(qe,"-ping-left"),En),Object(c.a)(C,"".concat(qe,"-ping-right"),Fn),Object(c.a)(C,"".concat(qe,"-ping-top"),Vn),Object(c.a)(C,"".concat(qe,"-ping-bottom"),Jn),C)),ref:se},v.createElement(Ce.default,{onResize:bn},v.createElement("div",{ref:oe,className:"".concat(S,"-nav-list"),style:{transform:"translate(".concat(ae,"px, ").concat(ue,"px)"),transition:hn?"none":void 0}},dt,v.createElement(t,{ref:be,prefixCls:S,locale:ee,editable:re,style:{visibility:$n?"hidden":null}}),v.createElement("div",{className:pe()("".concat(S,"-ink-bar"),Object(c.a)({},"".concat(S,"-ink-bar-animated"),Q.inkBar)),style:ft}))))),v.createElement(u,Object(F.a)({},d,{ref:q,prefixCls:S,tabs:Mn,className:!$n&&Bn})),v.createElement(E,{position:"right",extra:X,prefixCls:S}))}var b=v.forwardRef(a);function z(d){var R=d.id,C=d.activeKey,A=d.animated,S=d.tabPosition,j=d.rtl,I=d.destroyInactiveTabPane,M=v.useContext(p),B=M.prefixCls,Q=M.tabs,W=A.tabPane,$=Q.findIndex(function(X){return X.key===C});return v.createElement("div",{className:pe()("".concat(B,"-content-holder"))},v.createElement("div",{className:pe()("".concat(B,"-content"),"".concat(B,"-content-").concat(S),Object(c.a)({},"".concat(B,"-content-animated"),W)),style:$&&W?Object(c.a)({},j?"marginRight":"marginLeft","-".concat($,"00%")):null},Q.map(function(X){return v.cloneElement(X.node,{key:X.key,prefixCls:B,tabKey:X.key,id:R,animated:W,active:X.key===C,destroyInactiveTabPane:I})})))}function k(d){var R=d.prefixCls,C=d.forceRender,A=d.className,S=d.style,j=d.id,I=d.active,M=d.animated,B=d.destroyInactiveTabPane,Q=d.tabKey,W=d.children,$=v.useState(C),X=Object(o.a)($,2),re=X[0],ee=X[1];v.useEffect(function(){I?ee(!0):B&&ee(!1)},[I,B]);var G={};return I||(M?(G.visibility="hidden",G.height=0,G.overflowY="hidden"):G.display="none"),v.createElement("div",{id:j&&"".concat(j,"-panel-").concat(Q),role:"tabpanel",tabIndex:I?0:-1,"aria-labelledby":j&&"".concat(j,"-tab-").concat(Q),"aria-hidden":!I,style:Object(K.a)(Object(K.a)({},G),S),className:pe()("".concat(R,"-tabpane"),I&&"".concat(R,"-tabpane-active"),A)},(I||re||C)&&W)}var U=0;function _(d){return Object(an.a)(d).map(function(R){if(v.isValidElement(R)){var C=R.key!==void 0?String(R.key):void 0;return Object(K.a)(Object(K.a)({key:C},R.props),{},{node:R})}return null}).filter(function(R){return R})}function w(d,R){var C,A=d.id,S=d.prefixCls,j=S===void 0?"rc-tabs":S,I=d.className,M=d.children,B=d.direction,Q=d.activeKey,W=d.defaultActiveKey,$=d.editable,X=d.animated,re=X===void 0?{inkBar:!0,tabPane:!1}:X,ee=d.tabPosition,G=ee===void 0?"top":ee,ve=d.tabBarGutter,le=d.tabBarStyle,de=d.tabBarExtraContent,me=d.locale,se=d.moreIcon,oe=d.moreTransitionName,q=d.destroyInactiveTabPane,be=d.renderTabBar,ne=d.onChange,Y=d.onTabClick,H=d.onTabScroll,V=Object(Ae.a)(d,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),P=_(M),Z=B==="rtl",te;re===!1?te={inkBar:!1,tabPane:!1}:re===!0?te={inkBar:!0,tabPane:!0}:te=Object(K.a)({inkBar:!0,tabPane:!1},Object(O.a)(re)==="object"?re:{});var ae=Object(v.useState)(!1),Te=Object(o.a)(ae,2),We=Te[0],x=Te[1];Object(v.useEffect)(function(){x(Object(Le.a)())},[]);var ue=Object(Je.a)(function(){var ce;return(ce=P[0])===null||ce===void 0?void 0:ce.key},{value:Q,defaultValue:W}),Re=Object(o.a)(ue,2),De=Re[0],Ie=Re[1],Se=Object(v.useState)(function(){return P.findIndex(function(ce){return ce.key===De})}),Me=Object(o.a)(Se,2),rn=Me[0],sn=Me[1];Object(v.useEffect)(function(){var ce=P.findIndex(function(mn){return mn.key===De});if(ce===-1){var $e;ce=Math.max(0,Math.min(rn,P.length-1)),Ie(($e=P[ce])===null||$e===void 0?void 0:$e.key)}sn(ce)},[P.map(function(ce){return ce.key}).join("_"),De,rn]);var Ye=Object(Je.a)(null,{value:A}),on=Object(o.a)(Ye,2),pn=on[0],un=on[1],Ze=G;We&&!["left","right"].includes(G)&&(Ze="top"),Object(v.useEffect)(function(){A||(un("rc-tabs-".concat(U)),U+=1)},[]);function fn(ce,$e){Y==null||Y(ce,$e),Ie(ce),ne==null||ne(ce)}var ln={id:pn,activeKey:De,animated:te,tabPosition:Ze,rtl:Z,mobile:We},we,dn=Object(K.a)(Object(K.a)({},ln),{},{editable:$,locale:me,moreIcon:se,moreTransitionName:oe,tabBarGutter:ve,onTabClick:fn,onTabScroll:H,extra:de,style:le,panes:M});return be?we=be(dn,b):we=v.createElement(b,dn),v.createElement(p.Provider,{value:{tabs:P,prefixCls:j}},v.createElement("div",Object(F.a)({ref:R,id:A,className:pe()(j,"".concat(j,"-").concat(Ze),(C={},Object(c.a)(C,"".concat(j,"-mobile"),We),Object(c.a)(C,"".concat(j,"-editable"),$),Object(c.a)(C,"".concat(j,"-rtl"),Z),C),I)},V),we,v.createElement(z,Object(F.a)({destroyInactiveTabPane:q},ln,{animated:te}))))}var ie=v.forwardRef(w);ie.TabPane=k;var fe=ie,Ne=Ee.default=fe}}]);
