(window.webpackJsonp=window.webpackJsonp||[]).push([[38,11],{"0zqC":function(we,ye,e){"use strict";e.r(ye);var C=e("tJVT"),n=e("q1tI"),r=e.n(n),R=e("k3GJ"),Oe=e("MZF8"),P=e("asP9"),h=e.n(P),Ee=e("ZpkN"),pe=e("TIsu"),an=e.n(pe);function Ke(Pe,Ce){var be,Ae=(be=Pe.match(/\.(\w+)$/))===null||be===void 0?void 0:be[1];return Ae||(Ae=Ce.tsx?"tsx":"jsx"),Ae}var ze=Pe=>{var Ce,be,Ae,Ve=Object(n.useRef)(),ge=Object(n.useContext)(P.context),Je=ge.locale,T=Object(P.useLocaleProps)(Je,Pe),Ue=Object(P.useDemoUrl)(T.identifier),Ge=T.demoUrl||Ue,Xe=(Oe.e===null||Oe.e===void 0?void 0:Oe.e.location.hash)==="#".concat(T.identifier),g=Object.keys(T.sources).length===1,v=Object(P.useCodeSandbox)((Ce=T.hideActions)!==null&&Ce!==void 0&&Ce.includes("CSB")?null:T),E=Object(P.useRiddle)((be=T.hideActions)!==null&&be!==void 0&&be.includes("RIDDLE")?null:T),i=Object(P.useMotions)(T.motions||[],Ve.current),a=Object(C.default)(i,2),c=a[0],o=a[1],p=Object(P.useCopy)(),t=Object(C.default)(p,2),l=t[0],s=t[1],f=Object(n.useState)("_"),D=Object(C.default)(f,2),d=D[0],I=D[1],y=Object(n.useState)(Ke(d,T.sources[d])),u=Object(C.default)(y,2),F=u[0],V=u[1],k=Object(n.useState)(Boolean(T.defaultShowCode)),J=Object(C.default)(k,2),_=J[0],H=J[1],oe=Object(n.useState)(Math.random()),fe=Object(C.default)(oe,2),Ne=fe[0],m=fe[1],B=T.sources[d][F]||T.sources[d].content,b=Object(P.useTSPlaygroundUrl)(Je,B),O=Object(n.useRef)(),j=Object(P.usePrefersColor)(),A=Object(C.default)(j,1),L=A[0];Object(n.useEffect)(()=>{m(Math.random())},[L]);function M(S){I(S),V(Ke(S,T.sources[S]))}return r.a.createElement("div",{style:T.style,className:[T.className,"__dumi-default-previewer",Xe?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:T.identifier,"data-debug":T.debug||void 0,"data-iframe":T.iframe||void 0},T.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:Ve,className:"__dumi-default-previewer-demo",style:{transform:T.transform?"translate(0, 0)":void 0,padding:T.compact||T.iframe&&T.compact!==!1?"0":void 0,background:T.background}},T.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(T.iframe).replace(/(\d)$/,"$1px")},key:Ne,src:Ge,ref:O}):T.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":T.title},T.title&&r.a.createElement(P.AnchorLink,{to:"#".concat(T.identifier)},T.title),T.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:T.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},v&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:v}),E&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:E}),T.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:o,onClick:()=>c()}),T.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>m(Math.random())}),!((Ae=T.hideActions)!==null&&Ae!==void 0&&Ae.includes("EXTERNAL"))&&r.a.createElement(P.Link,{target:"_blank",to:Ge},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":s,onClick:()=>l(B)}),F==="tsx"&&_&&r.a.createElement(P.Link,{target:"_blank",to:b},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(_?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>H(!_)})),_&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!g&&r.a.createElement(R.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:d,onChange:M},Object.keys(T.sources).map(S=>r.a.createElement(R.TabPane,{tab:S==="_"?"index.".concat(Ke(S,T.sources[S])):S,key:S}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(Ee.a,{code:B,lang:F,showCopy:!1}))))};ye.default=ze},"5p62":function(we,ye,e){"use strict";e.r(ye);var C=e("q1tI"),n=e.n(C),r=e("asP9"),R=e.n(r),Oe=e("0zqC"),P=e("ZpkN"),h=e("JjdP"),Ee=n.a.memo(h.default["schema-demo"].component);ye.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"schema-\u534F\u8BAE"},n.a.createElement(r.AnchorLink,{to:"#schema-\u534F\u8BAE","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Schema \u534F\u8BAE"),n.a.createElement("h2",{id:"\u6982\u8FF0"},n.a.createElement(r.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,n.a.createElement("code",null,"schema")," \u662F <FormRender/> \u7684\u5FC5\u586B props\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002\u4ED6\u5728\u7ED3\u6784\u4E0A\u4F7F\u7528\u4E86 ",n.a.createElement("code",null,"JSON Schema")," \u56FD\u9645\u89C4\u8303(",n.a.createElement(r.Link,{to:"https://json-schema.org/understanding-json-schema/",target:"_blank"},"Understanding JSON Schema"),")\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(P.a,{code:`// \u5BF9\u8C61\u7ED3\u6784\u5982\u4E0B:
{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "count": {
      "title": "\u6570\u5B57",
      "type": "number"
    }
  }
}
// \u5BF9\u8C61\u5217\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A
{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "count": {
        "title": "\u6570\u5B57",
        "type": "number"
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5355\u4E2A schema \u7684\u4E66\u5199\u5206\u4E3A",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),", ",n.a.createElement("code",null,"rules")," \u548C ",n.a.createElement("code",null,"props"),"\uFF0C",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),"\u4E3A\u5404\u4E2A\u7EC4\u4EF6\u5171\u901A\u7684\u63CF\u8FF0\uFF0C",n.a.createElement("code",null,"rules")," \u63CF\u8FF0\u6821\u9A8C\u8865\u5145\u4FE1\u606F\uFF0C",n.a.createElement("code",null,"props")," \u63CF\u8FF0\u7EC4\u4EF6 props\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(P.a,{code:`{
  "type": "object",
  "properties": {
    "count": {
      // \u57FA\u7840\u5C5E\u6027
      "title": "\u4EE3\u53F7",
      "type": "string",
      "min": 6,
      // rules (\u8865\u5145\u6821\u9A8C\u4FE1\u606F)
      "rules": [
        {
          "pattern": "^[A-Za-z0-9]+$",
          "message": "\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"
        }
      ],
      // props (\u8865\u5145antd\u7EC4\u4EF6props)
      "props": {
        "allowClear": true
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u867D\u7136\u8FD9\u91CC\u6211\u4EEC\u53EA\u4EE5 json \u683C\u5F0F\u4E3A\u4F8B\uFF0C\u4F46 javascript object \u4F5C\u4E3A\u5165\u53C2\u5B8C\u5168\u53EF\u4EE5\u3002")))),n.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027\uFF08\u5171\u901A\u7684\uFF09"},n.a.createElement(r.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027\uFF08\u5171\u901A\u7684\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027\uFF08\u5171\u901A\u7684\uFF09"),n.a.createElement("p",null,"\u6240\u6709\u8868\u5355\u539F\u7D20\u4F1A\u7528\u5230\u7684\u5C5E\u6027\u3002\u4ECE FormRender \u5185\u90E8\u5B9E\u73B0\u7684\u89D2\u5EA6\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"enum")," \u548C ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u51B3\u5B9A\u4E86\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u5177\u4F53\u5224\u65AD\u89C4\u5219\u89C1",n.a.createElement(r.AnchorLink,{to:"/form-render/advanced/widget#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6"},"\u5185\u7F6E\u7EC4\u4EF6")),n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"min"),", ",n.a.createElement("code",null,"max"),", ",n.a.createElement("code",null,"required")," \u548C ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\u7528\u4E8E\u505A\u6821\u9A8C\u5224\u65AD"),n.a.createElement("li",null,n.a.createElement("code",null,"props")," \u5B57\u6BB5\u7528\u4E8E\u8865\u5145\u7EC4\u4EF6\u652F\u6301\u7684\u66F4\u4E3A\u7EC6\u81F4\u7684\u5C5E\u6027")),n.a.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u5404\u79CD\u201C\u57FA\u7840\u5C5E\u6027\u201D\u7684\u6837\u4F8B\u5982\u4E0B\uFF1A"),n.a.createElement(P.a,{code:`export const basic = {
  displayType: 'row',
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
};`,lang:"js"})),n.a.createElement(Oe.default,h.default["schema-demo"].previewerProps,n.a.createElement(Ee,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h4",{id:"title"},n.a.createElement(r.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"title"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,'\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F\uFF0C\u4F5C\u4E3A label \u5C55\u793A\uFF0C\u6CE8\u610F title \u4E3A""\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D')),n.a.createElement("h4",{id:"description"},n.a.createElement(r.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"description"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E38\u5C06\u586B\u5199\u6CE8\u610F\u70B9\u653E\u5165\u6B64\u53C2\u6570")),n.a.createElement("h4",{id:"type"},n.a.createElement(r.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"type"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'string'"),", ",n.a.createElement("code",null,"'number'"),", ",n.a.createElement("code",null,"'boolean'"),", ",n.a.createElement("code",null,"'array'"),", ",n.a.createElement("code",null,"'object'"),", ",n.a.createElement("code",null,"'range'"),", ",n.a.createElement("code",null,"'html'"),"]"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5143\u7D20\u7684\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E")),n.a.createElement("h4",{id:"format"},n.a.createElement(r.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"format"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'image'"),", ",n.a.createElement("code",null,"'textarea'"),", ",n.a.createElement("code",null,"'color'"),", ",n.a.createElement("code",null,"'email'"),", ",n.a.createElement("code",null,"'url'"),", ",n.a.createElement("code",null,"'dateTime'"),", ",n.a.createElement("code",null,"'date'"),", ",n.a.createElement("code",null,"'time'"),", ",n.a.createElement("code",null,"'upload'"),"]")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"),n.a.createElement(P.a,{code:`// \u9ED8\u8BA4 input
"input": {
  "title": "\u7B80\u5355\u8F93\u5165\u6846",
  "type": "string",
}
// textarea
"textarea": {
  "title": "\u7B80\u5355\u6587\u672C\u7F16\u8F91\u6846",
  "type": "string",
  "format": "textarea"
}
// \u989C\u8272\u7EC4\u4EF6
"color": {
  "title": "\u989C\u8272\u9009\u62E9",
  "type": "string",
  "format": "color"
}
// \u65E5\u671F\u7EC4\u4EF6
"date": {
  "title": "\u65E5\u671F\u9009\u62E9",
  "type": "string",
  "format": "date" // "dateTime"
}
// \u65F6\u95F4\u7EC4\u4EF6
"time": {
  "title": "\u65F6\u95F4\u9009\u62E9",
  "type": "string",
  "format": "time"
}
// \u56FE\u7247\u94FE\u63A5\u7EC4\u4EF6
"image": {
  "title": "\u56FE\u7247\u5C55\u793A",
  "type": "string",
  "format": "image"
}`,lang:"json"}))),n.a.createElement("h4",{id:"default"},n.a.createElement(r.AnchorLink,{to:"#default","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"default"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aany")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\uFF0C\u6CE8\u610F\u9ED8\u8BA4\u7684\u5BF9\u8C61\u7EC4\u4EF6\u4F7F\u7528 default \u65E0\u6548\uFF08\u5176\u503C\u4F1A\u7531\u5B50\u5143\u7D20\u503C\u51B3\u5B9A\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B\u5305\u62EC array \u90FD\u53EF\u4EE5\u4F7F\u7528 default\uFF1A"),n.a.createElement(P.a,{code:`"list": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "x": {
        "type": "string",
      }
    }
  },
  "default": [{ "x": "a" }, { "x": "b" }]
}`,lang:"json"}))),n.a.createElement("h4",{id:"required"},n.a.createElement(r.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"required"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B")),n.a.createElement("h4",{id:"placeholder"},n.a.createElement(r.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"placeholder"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1AInput \u7B49\u5143\u7D20\u7684 placeholder\u3002\u8FD9\u4E2A\u5C5E\u6027\u592A\u5E38\u7528\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\uFF0C\u4F46 80%\u4EE5\u4E0A\u90FD\u6709\uFF0C\u6240\u4EE5\u51B3\u5B9A\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D")),n.a.createElement("h4",{id:"bind"},n.a.createElement(r.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"bind"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | string[] | false"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",n.a.createElement(r.Link,{to:"/form-render/advanced/form-methods"},"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D")," \u7684\u4F8B 3"),n.a.createElement("li",null,"\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 bind: ",n.a.createElement("code",null,"false")," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0"),n.a.createElement("li",null,"\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09")),n.a.createElement("h4",{id:"min"},n.a.createElement(r.AnchorLink,{to:"#min","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"min"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5C0F\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5C0F\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5C0F\u503C")),n.a.createElement("h4",{id:"max"},n.a.createElement(r.AnchorLink,{to:"#max","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"max"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5927\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5927\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5927\u503C")),n.a.createElement("h4",{id:"disabled-0x-\u7248\u672C-uidisabled"},n.a.createElement(r.AnchorLink,{to:"#disabled-0x-\u7248\u672C-uidisabled","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"disabled (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:disabled"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001")),n.a.createElement("h4",{id:"readonly-0x-\u7248\u672C-uireadonly"},n.a.createElement(r.AnchorLink,{to:"#readonly-0x-\u7248\u672C-uireadonly","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnly (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:readonly"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001")),n.a.createElement("h4",{id:"hidden-0x-\u7248\u672C-uihidden"},n.a.createElement(r.AnchorLink,{to:"#hidden-0x-\u7248\u672C-uihidden","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"hidden (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:hidden"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001")),n.a.createElement("h4",{id:"displaytype-0x-\u7248\u672C-uidisplaytype"},n.a.createElement(r.AnchorLink,{to:"#displaytype-0x-\u7248\u672C-uidisplaytype","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"displayType (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:displayType"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"'row'")," | ",n.a.createElement("code",null,"'column'")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1ALabel \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A")),n.a.createElement("h4",{id:"width-0x-\u7248\u672C-uiwidth"},n.a.createElement(r.AnchorLink,{to:"#width-0x-\u7248\u672C-uiwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"width (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:width"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 '20%'")),n.a.createElement("h4",{id:"labelwidth-0x-\u7248\u672C-uilabelwidth"},n.a.createElement(r.AnchorLink,{to:"#labelwidth-0x-\u7248\u672C-uilabelwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"labelWidth (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:labelWidth"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Anumber | string"),n.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A110"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Alabel \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528'20%'/'2rem'\u7B49")),n.a.createElement("h4",{id:"widget-0x-\u7248\u672C-uiwidget"},n.a.createElement(r.AnchorLink,{to:"#widget-0x-\u7248\u672C-uiwidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"widget (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:widget"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u5E38\u7528\u8BED\u6307\u660E\u4F7F\u7528\u67D0\u4E2A\u201C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u201D\u3002\u6CE8\u610F\u4EE5\u4E0B\u8FD9\u4E9B\u5185\u7F6E\u7EC4\u4EF6\u6CA1\u6709\u81EA\u7136\u5339\u914D\u7684 schema\uFF0C\u4E5F\u5FC5\u987B\u7528 widget \u5B57\u6BB5\u6307\u660E\uFF1A widget:slider \u6ED1\u52A8\u8F93\u5165\u6761 widget:rate \u4E94\u661F\u8BC4\u5206 widget:cascader \u7EA7\u8054\u9009\u62E9 widget:treeSelect \u6811\u5F62\u9009\u62E9 \u8BE6\u7EC6\u7684\u5982\u4F55\u4F7F\u7528 ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u548C ",n.a.createElement("code",null,"widgets")," props \u6765\u505A\u5B9A\u5236\u5316\u8868\u5355\u6E32\u67D3\uFF0C\u8BF7\u53C2\u89C1",n.a.createElement(r.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"))),n.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027\uFF08\u975E\u5171\u901A\u7684\uFF09"},n.a.createElement(r.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027\uFF08\u975E\u5171\u901A\u7684\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027\uFF08\u975E\u5171\u901A\u7684\uFF09"),n.a.createElement("p",null,"\u4EE5\u4E0B\u662F\u7279\u5B9A\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684\u57FA\u7840\u5C5E\u6027\uFF0C\u5E76\u975E\u6240\u6709\u7EC4\u4EF6\u901A\u7528\u3002"),n.a.createElement("h3",{id:"\u5BF9\u8C61"},n.a.createElement(r.AnchorLink,{to:"#\u5BF9\u8C61","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5BF9\u8C61"),n.a.createElement("p",null,n.a.createElement("code",null,"properties")," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\uFF1A"),n.a.createElement(P.a,{code:`{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "\u95E8\u7968\u6570",
      "type": "number"
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"\u5217\u8868"},n.a.createElement(r.AnchorLink,{to:"#\u5217\u8868","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5217\u8868"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"items"),"\uFF1A\u7528\u4E8E\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002item \u4E00\u822C\u662F\u5BF9\u8C61"),n.a.createElement("li",null,n.a.createElement("code",null,"min"),"\uFF1A\u6700\u5C11\u6570\u7EC4\u9879\u4E3A\u51E0\u9879"),n.a.createElement("li",null,n.a.createElement("code",null,"max"),"\uFF1A\u6700\u591A\u6570\u7EC4\u9879\u4E3A\u51E0\u9879")),n.a.createElement("p",null,"\u5217\u8868\u7684\u5C55\u793A\u6709\u56DB\u79CD\u6A21\u5F0F\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u9ED8\u8BA4\u4F7F\u7528 widget: ",n.a.createElement("code",null,"'list0'"),"\uFF0C\u5361\u7247 list \u7684\u5C55\u793A\uFF0C\u9002\u5B9C\u6709\u590D\u6742\u7ED3\u6784\uFF0C\u4F46 item \u6570\u91CF\u4E0D\u5927\u7684\u573A\u666F"),n.a.createElement("li",null,"\u5982\u679C\u6BCF\u4E2A item \u6570\u636E 1-2 \u6761\uFF0C\u4E14\u6CA1\u6709\u590D\u6742\u7ED3\u6784\uFF08\u4F8B\u5982\u5BF9\u8C61\u3001\u5217\u8868\uFF09\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: ",n.a.createElement("code",null,"'list1'")),n.a.createElement("li",null,"\u5982\u679C\u6BCF\u4E2A item \u6570\u636E 3-5 \u6761\uFF0C\u4E14\u6CA1\u6709\u590D\u6742\u7ED3\u6784\uFF08\u4F8B\u5982\u5BF9\u8C61\u3001\u5217\u8868\uFF09\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: ",n.a.createElement("code",null,"'list2'")),n.a.createElement("li",null,"\u5982\u679C\u6BCF\u4E2A\u5404 item \u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: ",n.a.createElement("code",null,"'list3'"))),n.a.createElement(P.a,{code:`{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "min": 1,
  "max": 3,
  "widget": "list0",
  "items": {
    "type": "object",
    "properties": {
      "tickets": {
        "title": "\u95E8\u7968\u6570",
        "type": "number"
      }
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"\u9009\u62E9\u7C7B\u7EC4\u4EF6"},n.a.createElement(r.AnchorLink,{to:"#\u9009\u62E9\u7C7B\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u9009\u62E9\u7C7B\u7EC4\u4EF6"),n.a.createElement("h4",{id:"enum"},n.a.createElement(r.AnchorLink,{to:"#enum","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"enum"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u503C")),n.a.createElement("h4",{id:"enumnames"},n.a.createElement(r.AnchorLink,{to:"#enumnames","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"enumNames"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u7684\u6587\u6848")),n.a.createElement("p",null,"\u6CE8: \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F undefined"),n.a.createElement(P.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}
// \u591A\u9009
{
  "title": "\u591A\u9009",
  "type": "array",
  "items": {
    "type": "string"
  },
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"]
}`,lang:"json"}),n.a.createElement("h3",{id:"range-\u7EC4\u4EF6"},n.a.createElement(r.AnchorLink,{to:"#range-\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Range \u7EC4\u4EF6"),n.a.createElement("p",null,"\u957F\u5EA6\u4E3A 2 \u7684 array\uFF0C\u76EE\u524D\u652F\u6301\u7684\u7EC4\u4EF6\u4E3A\u65F6\u95F4\u8303\u56F4"),n.a.createElement(P.a,{code:`{
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"json"}),n.a.createElement("h3",{id:"\u6587\u672C\u7EC4\u4EF6"},n.a.createElement(r.AnchorLink,{to:"#\u6587\u672C\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6587\u672C\u7EC4\u4EF6"),n.a.createElement("p",null,"\u53EA\u8981\u6CE8\u660E",n.a.createElement("code",null,'type: "html"'),", FR \u652F\u6301 html \u5143\u7D20\u7684\u6E32\u67D3\uFF0C\u6700\u5E38\u7528\u7684\u662F\u7EAF\u6587\u672C, \u5982\u4E0B\u4F8B\uFF1A"),n.a.createElement(P.a,{code:`"html": {
  "title": "\u7EAF\u5B57\u7B26\u4E32",
  "type": "html",
  "default": "hello world"
}`,lang:"json"}),n.a.createElement("h2",{id:"rules\uFF08\u6821\u9A8C\u89C4\u5219\uFF09"},n.a.createElement(r.AnchorLink,{to:"#rules\uFF08\u6821\u9A8C\u89C4\u5219\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"rules\uFF08\u6821\u9A8C\u89C4\u5219\uFF09"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"FormRender v1.x \u5F00\u59CB\uFF0C\u6821\u9A8C\u7684\u652F\u6301\u5F02\u6B65\u6821\u9A8C\u89C4\u5219\uFF0C\u652F\u6301\u7684\u89C4\u5219\u4E5F\u6269\u5C55\u5230 antd form \u6240\u6709\u7684 rules\u3002antd \u5728\u5E95\u5C42\u4F7F\u7528\u4E86 ",n.a.createElement("code",null,"async-validator"),"\uFF0C\u8FD9\u540C\u65F6\u662F FormRender \u7684\u4F9D\u8D56\uFF0C\u6240\u4EE5\u6240\u6709\u7B26\u5408",n.a.createElement(r.Link,{to:"https://github.com/yiminghe/async-validator#type"},n.a.createElement("code",null,"async-validator"),"\u6587\u6863")," \u7684\u89C4\u5219\u90FD\u9002\u7528\u4E8E FormRender\uFF0C\u4F8B\u5982"),n.a.createElement(P.a,{code:`"zip": {
  "title": "zip code",
  "type": "string",
  "rules": [{ "len": 8, "message": "invalid zip" }]
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,"\u4F5C\u4E3A FormRender \u4E66\u5199\u7684\u7279\u522B\u89C4\u5219\uFF0C\u7531\u4E8E\u4EE5\u4E0B\u4E2A\u5B57\u6BB5\u540C\u65F6\u6D89\u53CA\u5230\u4E86\u5C55\u793A\u548C\u6821\u9A8C\uFF0C\u6240\u4EE5\u5DF2\u7ECF\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u4E2D\uFF0C\u800C\u4E0D\u9700\u8981\u5728 rules \u4E2D\u7279\u522B\u6CE8\u660E"))),n.a.createElement(P.a,{code:`type
format
min
max
required`,lang:"text"}),n.a.createElement("ol",{start:3},n.a.createElement("li",null,"\u5982\u679C\u4F60\u60F3\u5B9A\u5236\u5BF9\u5E94\u5B57\u6BB5\u7684\u6821\u9A8C\u5C55\u793A\u6587\u6848\uFF0C\u8BF7\u540C\u65F6\u4E66\u5199\u57FA\u7840\u5C5E\u6027\u548C rules\uFF1A")),n.a.createElement(P.a,{code:`"zip": {
  "title": "zip code",
  "type": "string",
  "required": true,
  "rules": [{ "len": 8, "message": "invalid zip"  },{ "required": true, "message": "zip is required"  }]
}`,lang:"json"}),n.a.createElement("h2",{id:"props"},n.a.createElement(r.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"props"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aobject")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 props \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002props \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 props \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982")),n.a.createElement(P.a,{code:`url: {
  title: "\u7F51\u5740",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}`,lang:"js"}),n.a.createElement("ol",{start:2},n.a.createElement("li",null,n.a.createElement("p",null,"\u4E00\u4E9B\u5185\u7F6E\u7684 widget \u7EC4\u4EF6\u662F\u7531\u591A\u4E2A\uFF08\u6216\u8005\u590D\u6742\u7ED3\u6784\u7684\uFF09\u81EA\u7136\u7EC4\u4EF6\u7EC4\u6210\u7684\uFF0C\u6B64\u65F6\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u81EA\u7136\u7EC4\u4EF6\u5F00\u4E86\u4E00\u4E2A props \u5165\u53E3\uFF0C\u4F8B\u5982 list \u7EC4\u4EF6\u6709 props \u548C itemProps \u4E24\u4E2A\u5C5E\u6027\uFF0C\u652F\u6301\u7528\u6237\u5BF9 list \u672C\u8EAB\u4EE5\u53CA\u6BCF\u4E2A item \u7684\u5B9A\u5236\u5316\u5C55\u793A & \u529F\u80FD\u9700\u6C42\u3002\u6240\u6709\u5185\u7F6E\u7684 props \u89C1\u4E0B\u9762\u5217\u8868")),n.a.createElement("li",null,n.a.createElement("p",null,"\u5F53\u7528\u6237\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u662F\u590D\u5408\u7EC4\u4EF6\uFF08\u7531\u591A\u4E2A\u81EA\u7136\u7EC4\u4EF6\u7EC4\u5408\u800C\u6210\uFF09\u65F6\uFF0C\u63A8\u8350\u505A\u6CD5\u662F props \u4E2D\u653E\u7F6E\u4E00\u4E9B\u5168\u5C40\u9700\u8981\u4F7F\u7528\u7684 props\uFF0C\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u800C\u5176\u4E2D\u5355\u4E2A\u5143\u7D20\u7684\u5B9A\u5236 props \u4F7F\u7528 props1\uFF0Cprops2\uFF0C... \u8FD9\u6837\u7684\u547D\u540D\u3002\u51E1\u662F\u5305\u542B props\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09\u7684 schema \u7684 key \u503C\uFF0C\u90FD\u4F1A\u539F\u6837\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4F8B\u5982"),n.a.createElement(P.a,{code:`percentInput: {
    title: "\u767E\u5206\u6BD4\u8F93\u5165",
    type: "number",
    props: {
      showInput: false
    },
    inputProps: {
      suffix: '%'
    },
    percentProps: {
      step: 10
    }
  }`,lang:"js"}))))),n.a.createElement("ol",{start:3},n.a.createElement("li",null,n.a.createElement("p",null,"\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 props \u4E3A"),n.a.createElement(P.a,{code:`{
  type: 'number',
  showInput: false,
  inputProps: {
    suffix: '%'
  },
  percentProps: {
    step: 10
  }
}`,lang:"js"}))),n.a.createElement("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6-props"},n.a.createElement(r.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6 props"),n.a.createElement("h3",{id:"list-\u5217\u8868"},n.a.createElement(r.AnchorLink,{to:"#list-\u5217\u8868","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"list \u5217\u8868"),n.a.createElement("p",null,n.a.createElement("strong",null,"props")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"props"),n.a.createElement("th",{align:"center"},"\u7C7B\u578B"),n.a.createElement("th",{align:"center"},"\u8BF4\u660E"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"hideTitle"),n.a.createElement("td",{align:"center"},"array"),n.a.createElement("td",{align:"center"},"\u53EA\u652F\u6301\u201Clist1\u201D\uFF0C\u9690\u85CF title\uFF0C\u5C55\u793A\u66F4\u7D27\u51D1")),n.a.createElement("tr",null,n.a.createElement("td",null,"buttons"),n.a.createElement("td",{align:"center"},"array"),n.a.createElement("td",{align:"center"},"\u4E0B\u8BE6 \uFF08\u6CE8 1\uFF09")))),n.a.createElement("p",null,n.a.createElement("strong",null,"itemProps")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"props"),n.a.createElement("th",{align:"center"},"\u7C7B\u578B"),n.a.createElement("th",{align:"center"},"\u8BF4\u660E"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"buttons"),n.a.createElement("td",{align:"center"},"array"),n.a.createElement("td",{align:"center"},"\u4E0B\u8BE6 \uFF08\u6CE8 2\uFF09")))),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6CE8 1\uFF1A")),n.a.createElement("p",null,"\u5217\u8868\u9ED8\u8BA4\u53EA\u5C55\u793A\u201C\u65B0\u589E\u4E00\u6761\u201D\u6309\u94AE\u3002",n.a.createElement("code",null,"buttons")," \u7528\u4E8E\u6DFB\u52A0\u66F4\u591A\u5217\u8868\u64CD\u4F5C\u6309\u94AE"),n.a.createElement(P.a,{code:`"arrDemo": {
  ...
  "props": {
    "buttons": [
      {
        "text": "Excel\u5BFC\u5165",
        "icon": "copy",
        "callback": "someCallback"
      }
    ]
  }
}`,lang:"json"}),n.a.createElement("p",null,"FormRender \u4F1A\u5230 ",n.a.createElement("code",null,"window.someCallback")," \u4E0A\u5BFB\u627E\u56DE\u8C03\u51FD\u6570\uFF0C\u6B64\u56DE\u8C03\u51FD\u6570\u53EF\u63A5\u53D7\u53C2\u6570 ",n.a.createElement("code",null,"value"),"\u548C ",n.a.createElement("code",null,"schema"),"\u3002\u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u65B0\u7684\u5217\u8868\u503C"),n.a.createElement(P.a,{code:`// value: \u6574\u4E2A\u6570\u7EC4\u7684\u503C\uFF0ConChange: \u4F20\u5165\u6539\u53D8\u540E\u7684\u6570\u7EC4\u503C\uFF0C\u89E6\u53D1state\u66F4\u65B0
// \u4F7F\u7528Object\u5165\u53C2\uFF0C\u4E3A\u4E86\u5C06\u6765\u597D\u6269\u5C55
window.someCallback = ({ value, schema }) => {
  return [];
};`,lang:"js"}),n.a.createElement("p",null,"\u5982\u4E0A\u7684 someCallback \u4F1A\u6E05\u7A7A\u6574\u4E2A\u5217\u8868\u3002"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6CE8 2\uFF1A")),n.a.createElement("p",null,"itemProps.buttons \u7528\u4E8E\u6269\u5C55\u5217\u8868\u91CC\u6BCF\u4E2A item \u7684\u66F4\u591A\u64CD\u4F5C"),n.a.createElement(P.a,{code:`"arrDemo": {
  ...
  "itemProps": {
    "buttons": [
      {
        "text": "\u590D\u5236",
        "icon": "copy",
        "callback": "copyMe"
      }
    ]
  }
}`,lang:"json"}),n.a.createElement("p",null,"\u7528\u6CD5\u76F8\u540C, FormRender \u4F1A\u5C1D\u8BD5\u5728\u70B9\u51FB\u590D\u5236\u6309\u94AE\u65F6\u6267\u884C ",n.a.createElement("code",null,"window.copyMe"),"\u3002",n.a.createElement("code",null,"window.copyMe"),"\u7684\u5165\u53C2\u4E3A value, index, schema \uFF0C\u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u65B0\u7684\u5217\u8868\u503C"),n.a.createElement(P.a,{code:`// \u6CE8\u610F value \u662F\u6574\u4E2A\u5217\u8868\u7684 value
window.copyMe = ({ value, index, schema }) => {
  const item = value[index];
  value.splice(index, 0, item);
  return value;
};`,lang:"js"}),n.a.createElement("h3",{id:"object-\u5BF9\u8C61"},n.a.createElement(r.AnchorLink,{to:"#object-\u5BF9\u8C61","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"object \u5BF9\u8C61"),n.a.createElement("p",null,"props"),n.a.createElement("p",null,"\u76EE\u524D\u8FD8\u6CA1\u6709\uFF0C\u672A\u6765\u4F1A\u6269\u5C55"),n.a.createElement("h3",{id:"upload-\u4E0A\u4F20"},n.a.createElement(r.AnchorLink,{to:"#upload-\u4E0A\u4F20","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"upload \u4E0A\u4F20"),n.a.createElement("p",null,"props"),n.a.createElement("p",null,"upload \u7EC4\u4EF6\u7684\u4E3B\u4F53 props\uFF0C\u53C2\u8003 ",n.a.createElement(r.Link,{to:"https://ant.design/components/upload/"},"antd/upload \u6587\u6863")),n.a.createElement("p",null,"buttonProps"),n.a.createElement("p",null,"\u4E0A\u4F20\u6309\u94AE Button \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 antd/button"),n.a.createElement("h3",{id:"color-\u989C\u8272\u9009\u62E9"},n.a.createElement(r.AnchorLink,{to:"#color-\u989C\u8272\u9009\u62E9","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"color \u989C\u8272\u9009\u62E9"),n.a.createElement("p",null,"props"),n.a.createElement("p",null,"colorPicker \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003",n.a.createElement(r.Link,{to:"https://www.npmjs.com/package/rc-color-picker"},"rc-color-picker \u6587\u6863")),n.a.createElement("p",null,"inputProps"),n.a.createElement("p",null,"\u8F93\u5165\u6846 input \u7684 props\uFF0C\u53C2\u8003 antd/input"),n.a.createElement("h3",{id:"slider-\u62D6\u52A8\u9009\u62E9\u6570\u5B57"},n.a.createElement(r.AnchorLink,{to:"#slider-\u62D6\u52A8\u9009\u62E9\u6570\u5B57","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"slider \u62D6\u52A8\u9009\u62E9\u6570\u5B57"),n.a.createElement("p",null,"props"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"slider \u7EC4\u4EF6\u7684\u4E3B\u4F53 props\uFF0C\u652F\u6301\u6240\u6709 slider \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 ",n.a.createElement(r.Link,{to:"https://ant.design/components/slider/"},"antd/slider \u6587\u6863"))),n.a.createElement("li",null,n.a.createElement("p",null,"\u8FD8\u652F\u6301",n.a.createElement("code",null,"hideInput"),", \u9ED8\u8BA4",n.a.createElement("code",null,"false"),"\uFF0C\u7528\u4E8E\u63A7\u5236\u662F\u5426\u5C55\u793A Input"))),n.a.createElement("p",null,"inputProps"),n.a.createElement("p",null,"\u7528\u4E8E\u63A7\u5236 input \u5C55\u793A\u7684 props\uFF0C\u652F\u6301\u6240\u6709 input \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 ",n.a.createElement(r.Link,{to:"https://ant.design/components/input/"},"antd/input \u6587\u6863")))))}},JjdP:function(we,ye,e){"use strict";e.r(ye);var C=e("9og8"),n=e("WmNS"),r=e.n(n),R=e("LtsZ"),Oe=`import React, { useRef } from 'react';
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

export default Demo;`,P=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,h=`export const basic = {
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
};`,Ee=`import React from 'react';
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

export default Root;`,Ke=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,ze=`{
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

export default SearchInput;`,Ce=`import React from 'react';
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

export default Demo;`,be=`/* PrismJS 1.16.0
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
}`,Ae=`.markdown p {
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
}`,Ve=`import React from 'react';
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

export default Demo;`,ge=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Je=`import React, { useState, useRef } from 'react';
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

export default Demo;`,T=`import React from 'react';
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

export default Demo;`,Ue=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Ge=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Xe=ye.default={"guide-card":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("3PQu"),a=e("K+nK"),s.t0=a,s.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return s.t1=s.sent,c=(0,s.t0)(s.t1),s.t2=i,s.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return s.t3=s.sent,o=(0,s.t2)(s.t3),s.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return p=s.sent,t=function(){var D=(0,o.useState)("Line"),d=(0,c.default)(D,2),I=d[0],y=d[1],u={Line:p.Line,Column:p.Column,PivotTable:p.PivotTable}[I];return o.default.createElement("div",null,o.default.createElement("div",{style:{marginBottom:10}},o.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return y("Line")}},"\u6298\u7EBF\u56FE"),o.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return y("Column")}},"\u67F1\u72B6\u56FE"),o.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return y("PivotTable")}},"\u4EA4\u53C9\u8868")),o.default.createElement(u,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},s.abrupt("return",t);case 17:case"end":return s.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e("K+nK"),t.t0=i,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=t.sent,o=function(){return a.default.createElement(c.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(f,D,d){return a.default.createElement("div",null,a.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),a.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(D).length]}},f),a.default.createElement("p",null,JSON.stringify(D)),a.default.createElement("p",null,JSON.stringify(d)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",o);case 11:case"end":return t.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("3PQu"),a=e("K+nK"),s.t0=a,s.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return s.t1=s.sent,c=(0,s.t0)(s.t1),s.t2=i,s.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return s.t3=s.sent,o=(0,s.t2)(s.t3),s.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return p=s.sent,t=function(){var D=(0,o.useState)(!1),d=(0,c.default)(D,2),I=d[0],y=d[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",o.default.createElement("input",{type:"checkbox",value:I,onChange:function(){return y(!I)}})),o.default.createElement(p.PivotTable,{leftExpandable:I,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},s.abrupt("return",t);case 17:case"end":return s.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f,D,d,I,y;return r.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return i=e("3PQu"),a=e("K+nK"),F.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return F.t0=a,F.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return F.t1=F.sent,c=(0,F.t0)(F.t1),F.t2=a,F.next=12,e.e(59).then(e.bind(null,"fWQN"));case 12:return F.t3=F.sent,o=(0,F.t2)(F.t3),F.t4=a,F.next=17,e.e(60).then(e.bind(null,"mtLc"));case 17:return F.t5=F.sent,p=(0,F.t4)(F.t5),F.t6=a,F.next=22,e.e(62).then(e.bind(null,"yKVA"));case 22:return F.t7=F.sent,t=(0,F.t6)(F.t7),F.t8=a,F.next=27,e.e(56).then(e.bind(null,"879j"));case 27:return F.t9=F.sent,l=(0,F.t8)(F.t9),F.t10=a,F.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return F.t11=F.sent,s=(0,F.t10)(F.t11),F.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 36:return f=F.sent,F.t12=i,F.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return F.t13=F.sent,D=(0,F.t12)(F.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(V){(0,t.default)(J,V);var k=(0,l.default)(J);function J(){return(0,o.default)(this,J),k.apply(this,arguments)}return(0,p.default)(J,[{key:"render",value:function(){var H=this.props.form;return s.default.createElement("div",null,s.default.createElement(D.default,{form:H,schema:d}),s.default.createElement(c.default,{type:"primary",onClick:H.submit},"\u63D0\u4EA4"))}}]),J}(s.default.Component),y=(0,D.connectForm)(I),F.abrupt("return",y);case 46:case"end":return F.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f;return r.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return i=e("3PQu"),a=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=a,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,c=(0,d.t0)(d.t1),d.t2=a,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,o=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 16:return p=d.sent,d.t4=i,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,t=(0,d.t4)(d.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var y=(0,t.useForm)();return o.default.createElement("div",null,o.default.createElement(t.default,{form:y,schema:l}),o.default.createElement(c.default,{type:"primary",onClick:y.submit},"\u63D0\u4EA4"))},f=s,d.abrupt("return",f);case 26:case"end":return d.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f;return r.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return i=e("3PQu"),a=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=a,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,c=(0,d.t0)(d.t1),d.t2=a,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,o=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 16:return p=d.sent,d.t4=i,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,t=(0,d.t4)(d.t5),l={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},s=function(){var y=(0,t.useForm)(),u=function(V,k){k.length>0?alert("errors:"+JSON.stringify(k)):alert("formData:"+JSON.stringify(V,null,2))};return o.default.createElement("div",null,o.default.createElement(t.default,{form:y,schema:l,onFinish:u}),o.default.createElement(c.default,{type:"primary",onClick:y.submit},"\u63D0\u4EA4"))},f=s,d.abrupt("return",f);case 26:case"end":return d.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l;return r.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return t=function(){var d=(0,o.useForm)(),I=function(u,F){F.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(F))):alert(JSON.stringify(u))};return c.default.createElement("div",null,c.default.createElement(o.default,{form:d,schema:p,onFinish:I}),c.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},i=e("3PQu"),a=e("K+nK"),f.t0=a,f.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return f.t1=f.sent,c=(0,f.t0)(f.t1),f.t2=i,f.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return f.t3=f.sent,o=(0,f.t2)(f.t3),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},l=t,f.abrupt("return",l);case 16:case"end":return f.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p;return r.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("K+nK"),l.t0=i,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,a=(0,l.t0)(l.t1),l.t2=i,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,c=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return o=l.sent,p=function(){return a.default.createElement(c.default,{schema:o.basic})},l.abrupt("return",p);case 16:case"end":return l.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:P},"json/schema.js":{import:"./json/schema",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p;return r.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("K+nK"),l.t0=i,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,a=(0,l.t0)(l.t1),l.t2=i,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,c=(0,l.t2)(l.t3),o=function(f){return{type:"object",displayType:f,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},p=function(){return a.default.createElement("div",null,a.default.createElement("h2",null,"display: row"),a.default.createElement(c.default,{schema:o("row")}),a.default.createElement("h2",null,"display: column"),a.default.createElement(c.default,{schema:o("column")}))},l.abrupt("return",p);case 14:case"end":return l.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Ee}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p;return r.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("K+nK"),l.t0=i,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,a=(0,l.t0)(l.t1),l.t2=i,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,c=(0,l.t2)(l.t3),o={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},p=function(){return a.default.createElement(c.default,{schema:o})},l.abrupt("return",p);case 14:case"end":return l.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ee}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p;return r.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("K+nK"),l.t0=i,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,a=(0,l.t0)(l.t1),l.t2=i,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,c=(0,l.t2)(l.t3),o={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},p=function(){return a.default.createElement(c.default,{readOnly:!0,schema:o})},l.abrupt("return",p);case 14:case"end":return l.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ee}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p;return r.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("K+nK"),l.t0=i,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,a=(0,l.t0)(l.t1),l.t2=i,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,c=(0,l.t2)(l.t3),o={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},p=function(){return a.default.createElement(c.default,{labelWidth:"200",schema:o})},l.abrupt("return",p);case 14:case"end":return l.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ee}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),o={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},p=function(){return a.default.createElement(c.default,{schema:o})},t=p,s.abrupt("return",t);case 15:case"end":return s.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ee}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),o={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},p=function(){return a.default.createElement(c.default,{schema:o})},t=p,s.abrupt("return",t);case 15:case"end":return s.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ee}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),o={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},p=function(){return a.default.createElement(c.default,{schema:o})},t=p,s.abrupt("return",t);case 15:case"end":return s.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ee}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),o={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},p=function(){return a.default.createElement(c.default,{schema:o})},t=p,s.abrupt("return",t);case 15:case"end":return s.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ee}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f,D,d,I;return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=e("3PQu"),a=e("K+nK"),u.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return u.t0=a,u.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return u.t1=u.sent,c=(0,u.t0)(u.t1),u.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return u.t2=a,u.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return u.t3=u.sent,o=(0,u.t2)(u.t3),u.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return u.t4=a,u.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return u.t5=u.sent,p=(0,u.t4)(u.t5),u.t6=a,u.next=26,Promise.resolve().then(e.bind(null,"tJVT"));case 26:return u.t7=u.sent,t=(0,u.t6)(u.t7),u.t8=i,u.next=31,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 31:return u.t9=u.sent,l=(0,u.t8)(u.t9),u.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 35:return s=u.sent,u.t10=i,u.next=39,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 39:return u.t11=u.sent,f=(0,u.t10)(u.t11),u.next=43,e.e(15).then(e.bind(null,"OH0R"));case 43:return D=u.sent,d=function(){var V=(0,f.useForm)(),k=(0,l.useState)({}),J=(0,t.default)(k,2),_=J[0],H=J[1],oe=function(){(0,D.fakeApi)("xxx/getForm").then(function(m){V.setValues({input1:"hello world",select1:"c"})})};(0,l.useEffect)(function(){(0,D.delay)(1e3).then(function(Ne){H({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var fe=function(m,B){B.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(b){return b.name}))):(0,D.fakeApi)("xxx/submit",m).then(function(b){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return l.default.createElement("div",{style:{width:"400px"}},l.default.createElement(f.default,{form:V,schema:_,onFinish:fe}),l.default.createElement(c.default,null,l.default.createElement(o.default,{onClick:oe},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),l.default.createElement(o.default,{type:"primary",onClick:V.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},I=d,u.abrupt("return",I);case 47:case"end":return u.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f,D,d,I;return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=e("3PQu"),a=e("K+nK"),u.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return u.t0=a,u.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return u.t1=u.sent,c=(0,u.t0)(u.t1),u.t2=a,u.next=12,Promise.resolve().then(e.bind(null,"PpiC"));case 12:return u.t3=u.sent,o=(0,u.t2)(u.t3),u.next=16,e.e(14).then(e.t.bind(null,"tL+A",7));case 16:return u.t4=a,u.next=19,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 19:return u.t5=u.sent,p=(0,u.t4)(u.t5),u.t6=a,u.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return u.t7=u.sent,t=(0,u.t6)(u.t7),u.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 28:return l=u.sent,u.t8=i,u.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return u.t9=u.sent,s=(0,u.t8)(u.t9),u.next=36,e.e(15).then(e.bind(null,"OH0R"));case 36:return f=u.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var V=(0,s.useForm)(),k=function(H,oe){oe.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(oe.map(function(fe){return fe.name}))):(0,f.fakeApi)("xxx/submit",H).then(function(fe){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},J=function(H){var oe=H.data,fe=H.errors,Ne=H.schema,m=(0,o.default)(H,["data","errors","schema"]);return(0,f.fakeApi)("xxx/validation").then(function(B){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return t.default.createElement("div",{style:{width:"400px"}},t.default.createElement(s.default,{form:V,schema:D,beforeFinish:J,onFinish:k}),t.default.createElement(c.default,{type:"primary",onClick:V.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},I=d,u.abrupt("return",I);case 41:case"end":return u.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f,D,d,I;return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=e("3PQu"),a=e("K+nK"),u.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return u.t0=a,u.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return u.t1=u.sent,c=(0,u.t0)(u.t1),u.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return u.t2=a,u.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return u.t3=u.sent,o=(0,u.t2)(u.t3),u.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return u.t4=a,u.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return u.t5=u.sent,p=(0,u.t4)(u.t5),u.t6=a,u.next=26,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 26:return u.t7=u.sent,t=(0,u.t6)(u.t7),u.next=30,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 30:return l=u.sent,u.t8=i,u.next=34,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 34:return u.t9=u.sent,s=(0,u.t8)(u.t9),u.next=38,e.e(15).then(e.bind(null,"OH0R"));case 38:return f=u.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var V=(0,s.useForm)(),k=function(H,oe){oe.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(oe.map(function(fe){return fe.name}))):(0,f.fakeApi)("xxx/submit",H).then(function(fe){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},J=function(){(0,f.fakeApi)("xxx/getForm").then(function(H){V.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return t.default.createElement("div",{style:{width:"400px"}},t.default.createElement(s.default,{form:V,schema:D,onFinish:k}),t.default.createElement(c.default,null,t.default.createElement(o.default,{onClick:J},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),t.default.createElement(o.default,{type:"primary",onClick:V.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},I=d,u.abrupt("return",I);case 43:case"end":return u.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f,D,d;return r.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return i=e("3PQu"),a=e("K+nK"),y.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return y.t0=a,y.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return y.t1=y.sent,c=(0,y.t0)(y.t1),y.next=11,e.e(14).then(e.t.bind(null,"tL+A",7));case 11:return y.t2=a,y.next=14,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 14:return y.t3=y.sent,o=(0,y.t2)(y.t3),y.t4=i,y.next=19,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 19:return y.t5=y.sent,p=(0,y.t4)(y.t5),y.next=23,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 23:return t=y.sent,y.t6=i,y.next=27,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 27:return y.t7=y.sent,l=(0,y.t6)(y.t7),y.next=31,e.e(15).then(e.bind(null,"OH0R"));case 31:return s=y.sent,f={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},D=function(){var F=(0,l.useForm)(),V={"#":function(H){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",H)},input1:function(H){H.length>2?F.setSchemaByPath("obj1.select1",function(oe){var fe=oe.enumNames;return{enumNames:fe.map(function(Ne){return Ne+"a"})}}):F.setSchemaByPath("obj1.select1",{enumNames:["\u65E9","\u4E2D","\u665A"]})}},k=function(){F.setSchemaByPath("obj1.select1",{enumNames:["\u65E92","\u4E2D2","\u665A3"]})},J=function(H,oe){oe.length>0?o.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(oe.map(function(fe){return fe.name}))):o.default.info(JSON.stringify(H))};return p.default.createElement("div",{style:{width:"400px"}},p.default.createElement(l.default,{form:F,schema:f,watch:V,onMount:k,onFinish:J}),p.default.createElement(c.default,{type:"primary",onClick:F.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=D,y.abrupt("return",d);case 36:case"end":return y.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l;return r.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return i=e("3PQu"),a=e("K+nK"),f.t0=a,f.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return f.t1=f.sent,c=(0,f.t0)(f.t1),f.t2=i,f.next=10,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 10:return f.t3=f.sent,o=(0,f.t2)(f.t3),p={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},t=function(){var d=(0,o.useForm)();return c.default.createElement(o.default,{form:d,schema:p})},l=t,f.abrupt("return",l);case 16:case"end":return f.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p;return r.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=e("K+nK"),l.t0=i,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,a=(0,l.t0)(l.t1),l.t2=i,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,c=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return o=l.sent,p=function(){return a.default.createElement(c.default,{schema:o.expression})},l.abrupt("return",p);case 16:case"end":return l.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:P},"json/schema.js":{import:"./json/schema",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s;return r.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return i=e("3PQu"),D.t0=i,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,a=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 8:return c=D.sent,D.t2=i,D.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return D.t3=D.sent,o=(0,D.t2)(D.t3),p=function(I){return new Promise(function(y){return setTimeout(y,I)})},t={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},l=function(){var I=(0,o.useForm)(),y=function(){I.setValues({input1:"hello world"}),p(3e3).then(function(F){I.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return a.default.createElement(o.default,{form:I,schema:t,onMount:y})},s=l,D.abrupt("return",s);case 19:case"end":return D.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l;return r.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return i=e("3PQu"),f.t0=i,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,a=(0,f.t0)(f.t1),f.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 8:return c=f.sent,f.t2=i,f.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return f.t3=f.sent,o=(0,f.t2)(f.t3),p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},t=function(){var d=(0,o.useForm)(),I={"#":function(u){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",u)},input1:function(u){d.setValueByPath("input2",u)}};return a.default.createElement(o.default,{form:d,schema:p,watch:I})},l=t,f.abrupt("return",l);case 18:case"end":return f.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f;return r.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return i=e("3PQu"),a=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=a,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,c=(0,d.t0)(d.t1),d.t2=i,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,o=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 16:return p=d.sent,d.t4=i,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,t=(0,d.t4)(d.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},s=function(){var y=(0,t.useForm)(),u=function(k,J){J.length>0?alert("errorFields:"+JSON.stringify(J)):alert("formData:"+JSON.stringify(k,null,2))},F={input1:function(k){k.length>2?y.setSchemaByPath("obj1.select",function(J){var _=J.enumNames;return{enumNames:_.map(function(H){return H+"a"})}}):y.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return o.default.createElement("div",null,o.default.createElement(t.default,{form:y,schema:l,onFinish:u,watch:F}),o.default.createElement(c.default,{type:"",style:{marginRight:8},onClick:function(){return y.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),o.default.createElement(c.default,{type:"primary",onClick:y.submit},"\u63D0\u4EA4"))},f=s,d.abrupt("return",f);case 26:case"end":return d.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f,D,d,I;return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=e("3PQu"),a=e("K+nK"),u.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return u.t0=a,u.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return u.t1=u.sent,c=(0,u.t0)(u.t1),u.next=11,Promise.all([e.e(3),e.e(57)]).then(e.t.bind(null,"cUip",7));case 11:return u.t2=a,u.next=14,Promise.all([e.e(0),e.e(55),e.e(58)]).then(e.t.bind(null,"iJl9",7));case 14:return u.t3=u.sent,o=(0,u.t2)(u.t3),u.t4=a,u.next=19,e.e(61).then(e.bind(null,"0Owb"));case 19:return u.t5=u.sent,p=(0,u.t4)(u.t5),u.t6=i,u.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return u.t7=u.sent,t=(0,u.t6)(u.t7),u.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(9),e.e(10)]).then(e.bind(null,"gdfu"));case 28:return l=u.sent,u.t8=i,u.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return u.t9=u.sent,s=(0,u.t8)(u.t9),f={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(V){return t.default.createElement(o.default,(0,p.default)({addonBefore:"http://",addonAfter:".com"},V))},d=function(){var V=(0,s.useForm)(),k=function(){};return t.default.createElement("div",null,t.default.createElement(s.default,{form:V,schema:f,widgets:{site:D},onFinish:function(_){return alert(JSON.stringify(_,null,2))}}),t.default.createElement(c.default,{type:"primary",onClick:V.submit},"\u63D0\u4EA4"))},I=d,u.abrupt("return",I);case 39:case"end":return u.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"docs-playground":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:an},"main.js":{import:"./main",content:Ke},"json/simplest.json":{import:"./json/simplest.json",content:ze},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Pe},"monaco/index.js":{import:"./monaco",content:Ce},"theme.css":{import:"./theme.css",content:be},"index.css":{import:"./index.css",content:Ae}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{tsx:Ve}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t,l,s,f;return r.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return i=e("K+nK"),d.t0=i,d.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return d.t1=d.sent,a=(0,d.t0)(d.t1),d.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(54)]).then(e.bind(null,"P2DI"));case 8:for(c=d.sent,o=[],p=0;p<6;p++)o.push({id:p.toString(),title:"\u6807\u9898".concat(p+1),created_at:new Date().getTime()});return t={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(y,u){return a.default.createElement("a",{onClick:function(){return alert(y.title)}},"\u7F16\u8F91")}}],s=function(){var y=function(){return{rows:o,total:o.length}};return a.default.createElement(c.TableProvider,null,a.default.createElement(c.Search,{schema:t,api:y}),a.default.createElement(c.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},f=s,d.abrupt("return",f);case 16:case"end":return d.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){var i,a,c,o,p,t;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=e("K+nK"),s.t0=i,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=i,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(53)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),o={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},p=function(){return a.default.createElement("div",{style:{height:"80vh"}},a.default.createElement(c.default,{defaultValue:o}))},t=p,s.abrupt("return",t);case 15:case"end":return s.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:ge}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:Je}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:T}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(R.dynamic)({loader:function(){var g=Object(C.a)(r.a.mark(function E(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},E)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:Ue},"index.less":{import:"./index.less",content:Ge}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.6"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(we,ye,e){},Zs1V:function(we){we.exports=JSON.parse("{}")},k3GJ:function(we,ye,e){"use strict";e.r(ye),e.d(ye,"TabPane",function(){return k});var C=e("wx14"),n=e("rePB"),r=e("ODXe"),R=e("U8pU"),Oe=e("Ff2n"),P=e("VTBJ"),h=e("q1tI"),Ee=e("TSYQ"),pe=e.n(Ee),an=e("Zm9Q"),Ke=e("5Z9U"),ze=e("6cGi"),Pe=e("KQm4"),Ce=e("wgJM"),be=e("t23M");function Ae(m){var B=Object(h.useRef)(),b=Object(h.useRef)(!1);function O(){for(var j=arguments.length,A=new Array(j),L=0;L<j;L++)A[L]=arguments[L];b.current||(Ce.a.cancel(B.current),B.current=Object(Ce.a)(function(){m.apply(void 0,A)}))}return Object(h.useEffect)(function(){return function(){b.current=!0,Ce.a.cancel(B.current)}},[]),O}function Ve(m){var B=Object(h.useRef)([]),b=Object(h.useState)({}),O=Object(r.a)(b,2),j=O[1],A=Object(h.useRef)(typeof m=="function"?m():m),L=Ae(function(){var S=A.current;B.current.forEach(function(Q){S=Q(S)}),B.current=[],A.current=S,j({})});function M(S){B.current.push(S),L()}return[A.current,M]}var ge=e("4IlW");function Je(m,B){var b,O=m.prefixCls,j=m.id,A=m.active,L=m.rtl,M=m.tab,S=M.key,Q=M.tab,W=M.disabled,$=M.closeIcon,X=m.tabBarGutter,re=m.tabPosition,ee=m.closable,U=m.renderWrapper,he=m.removeAriaLabel,ie=m.editable,de=m.onClick,me=m.onRemove,ue=m.onFocus,se="".concat(O,"-tab");h.useEffect(function(){return me},[]);var q={};re==="top"||re==="bottom"?q[L?"marginLeft":"marginRight"]=X:q.marginBottom=X;var Fe=ie&&ee!==!1&&!W;function ne(w){W||de(w)}function Y(w){w.preventDefault(),w.stopPropagation(),ie.onEdit("remove",{key:S,event:w})}var G=h.createElement("div",{key:S,ref:B,className:pe()(se,(b={},Object(n.a)(b,"".concat(se,"-with-remove"),Fe),Object(n.a)(b,"".concat(se,"-active"),A),Object(n.a)(b,"".concat(se,"-disabled"),W),b)),style:q,onClick:ne},h.createElement("div",{role:"tab","aria-selected":A,id:j&&"".concat(j,"-tab-").concat(S),className:"".concat(se,"-btn"),"aria-controls":j&&"".concat(j,"-panel-").concat(S),"aria-disabled":W,tabIndex:W?null:0,onClick:function(N){N.stopPropagation(),ne(N)},onKeyDown:function(N){[ge.a.SPACE,ge.a.ENTER].includes(N.which)&&(N.preventDefault(),ne(N))},onFocus:ue},Q),Fe&&h.createElement("button",{type:"button","aria-label":he||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(N){N.stopPropagation(),Y(N)}},$||ie.removeIcon||"\xD7"));return U&&(G=U(G)),G}var T=h.forwardRef(Je),Ue={width:0,height:0,left:0,top:0};function Ge(m,B,b){return Object(h.useMemo)(function(){for(var O,j=new Map,A=B.get((O=m[0])===null||O===void 0?void 0:O.key)||Ue,L=A.left+A.width,M=0;M<m.length;M+=1){var S=m[M].key,Q=B.get(S);if(!Q){var W;Q=B.get((W=m[M-1])===null||W===void 0?void 0:W.key)||Ue}var $=j.get(S)||Object(P.a)({},Q);$.right=L-$.left-$.width,j.set(S,$)}return j},[m.map(function(O){return O.key}).join("_"),B,b])}var Xe={width:0,height:0,left:0,top:0,right:0};function g(m,B,b,O,j){var A=j.tabs,L=j.tabPosition,M=j.rtl,S,Q,W;["top","bottom"].includes(L)?(S="width",Q=M?"right":"left",W=Math.abs(B.left)):(S="height",Q="top",W=-B.top);var $=B[S],X=b[S],re=O[S],ee=$;return X+re>$&&(ee=$-re),Object(h.useMemo)(function(){if(!A.length)return[0,0];for(var U=A.length,he=U,ie=0;ie<U;ie+=1){var de=m.get(A[ie].key)||Xe;if(de[Q]+de[S]>W+ee){he=ie-1;break}}for(var me=0,ue=U-1;ue>=0;ue-=1){var se=m.get(A[ue].key)||Xe;if(se[Q]<W){me=ue+1;break}}return[me,he]},[m,W,ee,L,A.map(function(U){return U.key}).join("_"),M])}var v=e("1j5w"),E=e("eDIo");function i(m,B){var b=m.prefixCls,O=m.editable,j=m.locale,A=m.style;return!O||O.showAdd===!1?null:h.createElement("button",{ref:B,type:"button",className:"".concat(b,"-nav-add"),style:A,"aria-label":(j==null?void 0:j.addAriaLabel)||"Add tab",onClick:function(M){O.onEdit("add",{event:M})}},O.addIcon||"+")}var a=h.forwardRef(i);function c(m,B){var b=m.prefixCls,O=m.id,j=m.tabs,A=m.locale,L=m.mobile,M=m.moreIcon,S=M===void 0?"More":M,Q=m.moreTransitionName,W=m.style,$=m.className,X=m.editable,re=m.tabBarGutter,ee=m.rtl,U=m.onTabClick,he=Object(h.useState)(!1),ie=Object(r.a)(he,2),de=ie[0],me=ie[1],ue=Object(h.useState)(null),se=Object(r.a)(ue,2),q=se[0],Fe=se[1],ne="".concat(O,"-more-popup"),Y="".concat(b,"-dropdown"),G=q!==null?"".concat(ne,"-").concat(q):null,w=A==null?void 0:A.dropdownAriaLabel,N=h.createElement(v.default,{onClick:function(le){var Be=le.key,De=le.domEvent;U(Be,De),me(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":G,selectedKeys:[q],"aria-label":w!==void 0?w:"expanded dropdown"},j.map(function(x){return h.createElement(v.MenuItem,{key:x.key,id:"".concat(ne,"-").concat(x.key),role:"option","aria-controls":O&&"".concat(O,"-panel-").concat(x.key),disabled:x.disabled},x.tab)}));function Z(x){for(var le=j.filter(function(Le){return!Le.disabled}),Be=le.findIndex(function(Le){return Le.key===q})||0,De=le.length,Ie=0;Ie<De;Ie+=1){Be=(Be+x+De)%De;var je=le[Be];if(!je.disabled){Fe(je.key);return}}}function te(x){var le=x.which;if(!de){[ge.a.DOWN,ge.a.SPACE,ge.a.ENTER].includes(le)&&(me(!0),x.preventDefault());return}switch(le){case ge.a.UP:Z(-1),x.preventDefault();break;case ge.a.DOWN:Z(1),x.preventDefault();break;case ge.a.ESC:me(!1);break;case ge.a.SPACE:case ge.a.ENTER:q!==null&&U(q,x);break}}Object(h.useEffect)(function(){var x=document.getElementById(G);x&&x.scrollIntoView&&x.scrollIntoView(!1)},[q]),Object(h.useEffect)(function(){de||Fe(null)},[de]);var ae=Object(n.a)({},ee?"marginLeft":"marginRight",re);j.length||(ae.visibility="hidden",ae.order=1);var Te=pe()(Object(n.a)({},"".concat(Y,"-rtl"),ee)),We=L?null:h.createElement(E.default,{prefixCls:Y,overlay:N,trigger:["hover"],visible:de,transitionName:Q,onVisibleChange:me,overlayClassName:Te,mouseEnterDelay:.1,mouseLeaveDelay:.1},h.createElement("button",{type:"button",className:"".concat(b,"-nav-more"),style:ae,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(O,"-more"),"aria-expanded":de,onKeyDown:te},S));return h.createElement("div",{className:pe()("".concat(b,"-nav-operations"),$),style:W,ref:B},We,h.createElement(a,{prefixCls:b,locale:A,editable:X}))}var o=h.forwardRef(c),p=Object(h.createContext)(null),t=.1,l=.01,s=20,f=Math.pow(.995,s);function D(m,B){var b=Object(h.useState)(),O=Object(r.a)(b,2),j=O[0],A=O[1],L=Object(h.useState)(0),M=Object(r.a)(L,2),S=M[0],Q=M[1],W=Object(h.useState)(0),$=Object(r.a)(W,2),X=$[0],re=$[1],ee=Object(h.useState)(),U=Object(r.a)(ee,2),he=U[0],ie=U[1],de=Object(h.useRef)();function me(Y){var G=Y.touches[0],w=G.screenX,N=G.screenY;A({x:w,y:N}),window.clearInterval(de.current)}function ue(Y){if(!!j){Y.preventDefault();var G=Y.touches[0],w=G.screenX,N=G.screenY;A({x:w,y:N});var Z=w-j.x,te=N-j.y;B(Z,te);var ae=Date.now();Q(ae),re(ae-S),ie({x:Z,y:te})}}function se(){if(!!j&&(A(null),ie(null),he)){var Y=he.x/X,G=he.y/X,w=Math.abs(Y),N=Math.abs(G);if(Math.max(w,N)<t)return;var Z=Y,te=G;de.current=window.setInterval(function(){if(Math.abs(Z)<l&&Math.abs(te)<l){window.clearInterval(de.current);return}Z*=f,te*=f,B(Z*s,te*s)},s)}}var q=Object(h.useRef)();function Fe(Y){var G=Y.deltaX,w=Y.deltaY,N=0,Z=Math.abs(G),te=Math.abs(w);Z===te?N=q.current==="x"?G:w:Z>te?(N=G,q.current="x"):(N=w,q.current="y"),B(-N,-N)&&Y.preventDefault()}var ne=Object(h.useRef)(null);ne.current={onTouchStart:me,onTouchMove:ue,onTouchEnd:se,onWheel:Fe},h.useEffect(function(){function Y(Z){ne.current.onTouchStart(Z)}function G(Z){ne.current.onTouchMove(Z)}function w(Z){ne.current.onTouchEnd(Z)}function N(Z){ne.current.onWheel(Z)}return document.addEventListener("touchmove",G,{passive:!1}),document.addEventListener("touchend",w,{passive:!1}),m.current.addEventListener("touchstart",Y,{passive:!1}),m.current.addEventListener("wheel",N),function(){document.removeEventListener("touchmove",G),document.removeEventListener("touchend",w)}},[])}function d(){var m=Object(h.useRef)(new Map);function B(O){return m.current.has(O)||m.current.set(O,h.createRef()),m.current.get(O)}function b(O){m.current.delete(O)}return[B,b]}function I(m,B){var b=h.useRef(m),O=h.useState({}),j=Object(r.a)(O,2),A=j[1];function L(M){var S=typeof M=="function"?M(b.current):M;S!==b.current&&B(S,b.current),b.current=S,A({})}return[b.current,L]}var y=function(B){var b=B.position,O=B.prefixCls,j=B.extra;if(!j)return null;var A,L=j;return b==="right"&&(A=L.right||!L.left&&L||null),b==="left"&&(A=L.left||null),A?h.createElement("div",{className:"".concat(O,"-extra-content")},A):null};function u(m,B){var b,O=h.useContext(p),j=O.prefixCls,A=O.tabs,L=m.className,M=m.style,S=m.id,Q=m.animated,W=m.activeKey,$=m.rtl,X=m.extra,re=m.editable,ee=m.locale,U=m.tabPosition,he=m.tabBarGutter,ie=m.children,de=m.onTabClick,me=m.onTabScroll,ue=Object(h.useRef)(),se=Object(h.useRef)(),q=Object(h.useRef)(),Fe=Object(h.useRef)(),ne=d(),Y=Object(r.a)(ne,2),G=Y[0],w=Y[1],N=U==="top"||U==="bottom",Z=I(0,function(z,K){N&&me&&me({direction:z>K?"left":"right"})}),te=Object(r.a)(Z,2),ae=te[0],Te=te[1],We=I(0,function(z,K){!N&&me&&me({direction:z>K?"top":"bottom"})}),x=Object(r.a)(We,2),le=x[0],Be=x[1],De=Object(h.useState)(0),Ie=Object(r.a)(De,2),je=Ie[0],Le=Ie[1],rn=Object(h.useState)(0),un=Object(r.a)(rn,2),Ye=un[0],sn=un[1],pn=Object(h.useState)(0),ln=Object(r.a)(pn,2),Ze=ln[0],fn=ln[1],on=Object(h.useState)(0),He=Object(r.a)(on,2),dn=He[0],ce=He[1],$e=Object(h.useState)(null),mn=Object(r.a)($e,2),Se=mn[0],Yn=mn[1],Zn=Object(h.useState)(null),Bn=Object(r.a)(Zn,2),Qe=Bn[0],xn=Bn[1],kn=Object(h.useState)(0),Dn=Object(r.a)(kn,2),qn=Dn[0],_n=Dn[1],et=Object(h.useState)(0),jn=Object(r.a)(et,2),nt=jn[0],tt=jn[1],at=Ve(new Map),Rn=Object(r.a)(at,2),rt=Rn[0],ut=Rn[1],cn=Ge(A,rt,je),Sn="".concat(j,"-nav-operations-hidden"),xe=0,ke=0;N?$?(xe=0,ke=Math.max(0,je-Se)):(xe=Math.min(0,Se-je),ke=0):(xe=Math.min(0,Qe-Ye),ke=0);function hn(z){return z<xe?xe:z>ke?ke:z}var On=Object(h.useRef)(),st=Object(h.useState)(),Pn=Object(r.a)(st,2),vn=Pn[0],Nn=Pn[1];function En(){Nn(Date.now())}function gn(){window.clearTimeout(On.current)}D(ue,function(z,K){function ve(Re,_e){Re(function(en){var nn=hn(en+_e);return nn})}if(N){if(Se>=je)return!1;ve(Te,z)}else{if(Qe>=Ye)return!1;ve(Be,K)}return gn(),En(),!0}),Object(h.useEffect)(function(){return gn(),vn&&(On.current=window.setTimeout(function(){Nn(0)},100)),gn},[vn]);function Tn(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:W,K=cn.get(z)||{width:0,height:0,left:0,right:0,top:0};if(N){var ve=ae;$?K.right<ae?ve=K.right:K.right+K.width>ae+Se&&(ve=K.right+K.width-Se):K.left<-ae?ve=-K.left:K.left+K.width>-ae+Se&&(ve=-(K.left+K.width-Se)),Be(0),Te(hn(ve))}else{var Re=le;K.top<-le?Re=-K.top:K.top+K.height>-le+Qe&&(Re=-(K.top+K.height-Qe)),Te(0),Be(hn(Re))}}var lt=g(cn,{width:Se,height:Qe,left:ae,top:le},{width:Ze,height:dn},{width:qn,height:nt},Object(P.a)(Object(P.a)({},m),{},{tabs:A})),In=Object(r.a)(lt,2),ot=In[0],it=In[1],dt=A.map(function(z){var K=z.key;return h.createElement(T,{id:S,prefixCls:j,key:K,rtl:$,tab:z,closable:z.closable,editable:re,active:K===W,tabPosition:U,tabBarGutter:he,renderWrapper:ie,removeAriaLabel:ee==null?void 0:ee.removeAriaLabel,ref:G(K),onClick:function(Re){de(K,Re)},onRemove:function(){w(K)},onFocus:function(){Tn(K),En(),$||(ue.current.scrollLeft=0),ue.current.scrollTop=0}})}),Fn=Ae(function(){var z,K,ve,Re,_e,en,nn,bn,An,vt=((z=ue.current)===null||z===void 0?void 0:z.offsetWidth)||0,Et=((K=ue.current)===null||K===void 0?void 0:K.offsetHeight)||0,Vn=((ve=Fe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,Jn=((Re=Fe.current)===null||Re===void 0?void 0:Re.offsetHeight)||0,gt=((_e=q.current)===null||_e===void 0?void 0:_e.offsetWidth)||0,Ft=((en=q.current)===null||en===void 0?void 0:en.offsetHeight)||0;Yn(vt),xn(Et),_n(Vn),tt(Jn);var Un=(((nn=se.current)===null||nn===void 0?void 0:nn.offsetWidth)||0)-Vn,Gn=(((bn=se.current)===null||bn===void 0?void 0:bn.offsetHeight)||0)-Jn;Le(Un),sn(Gn);var Hn=(An=q.current)===null||An===void 0?void 0:An.className.includes(Sn);fn(Un-(Hn?0:gt)),ce(Gn-(Hn?0:Ft)),ut(function(){var Qn=new Map;return A.forEach(function(yt){var Xn=yt.key,tn=G(Xn).current;tn&&Qn.set(Xn,{width:tn.offsetWidth,height:tn.offsetHeight,left:tn.offsetLeft,top:tn.offsetTop})}),Qn})}),mt=A.slice(0,ot),ct=A.slice(it+1),Ln=[].concat(Object(Pe.a)(mt),Object(Pe.a)(ct)),pt=Object(h.useState)(),Mn=Object(r.a)(pt,2),ft=Mn[0],ht=Mn[1],Me=cn.get(W),Kn=Object(h.useRef)();function Wn(){Ce.a.cancel(Kn.current)}Object(h.useEffect)(function(){var z={};return Me&&(N?($?z.right=Me.right:z.left=Me.left,z.width=Me.width):(z.top=Me.top,z.height=Me.height)),Wn(),Kn.current=Object(Ce.a)(function(){ht(z)}),Wn},[Me,N,$]),Object(h.useEffect)(function(){Tn()},[W,Me,cn,N]),Object(h.useEffect)(function(){Fn()},[$,he,W,A.map(function(z){return z.key}).join("_")]);var $n=!!Ln.length,qe="".concat(j,"-nav-wrap"),yn,Cn,wn,zn;return N?$?(Cn=ae>0,yn=ae+Se<je):(yn=ae<0,Cn=-ae+Se<je):(wn=le<0,zn=-le+Qe<Ye),h.createElement("div",{ref:B,role:"tablist",className:pe()("".concat(j,"-nav"),L),style:M,onKeyDown:function(){En()}},h.createElement(y,{position:"left",extra:X,prefixCls:j}),h.createElement(be.default,{onResize:Fn},h.createElement("div",{className:pe()(qe,(b={},Object(n.a)(b,"".concat(qe,"-ping-left"),yn),Object(n.a)(b,"".concat(qe,"-ping-right"),Cn),Object(n.a)(b,"".concat(qe,"-ping-top"),wn),Object(n.a)(b,"".concat(qe,"-ping-bottom"),zn),b)),ref:ue},h.createElement(be.default,{onResize:Fn},h.createElement("div",{ref:se,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(ae,"px, ").concat(le,"px)"),transition:vn?"none":void 0}},dt,h.createElement(a,{ref:Fe,prefixCls:j,locale:ee,editable:re,style:{visibility:$n?"hidden":null}}),h.createElement("div",{className:pe()("".concat(j,"-ink-bar"),Object(n.a)({},"".concat(j,"-ink-bar-animated"),Q.inkBar)),style:ft}))))),h.createElement(o,Object(C.a)({},m,{ref:q,prefixCls:j,tabs:Ln,className:!$n&&Sn})),h.createElement(y,{position:"right",extra:X,prefixCls:j}))}var F=h.forwardRef(u);function V(m){var B=m.id,b=m.activeKey,O=m.animated,j=m.tabPosition,A=m.rtl,L=m.destroyInactiveTabPane,M=h.useContext(p),S=M.prefixCls,Q=M.tabs,W=O.tabPane,$=Q.findIndex(function(X){return X.key===b});return h.createElement("div",{className:pe()("".concat(S,"-content-holder"))},h.createElement("div",{className:pe()("".concat(S,"-content"),"".concat(S,"-content-").concat(j),Object(n.a)({},"".concat(S,"-content-animated"),W)),style:$&&W?Object(n.a)({},A?"marginRight":"marginLeft","-".concat($,"00%")):null},Q.map(function(X){return h.cloneElement(X.node,{key:X.key,prefixCls:S,tabKey:X.key,id:B,animated:W,active:X.key===b,destroyInactiveTabPane:L})})))}function k(m){var B=m.prefixCls,b=m.forceRender,O=m.className,j=m.style,A=m.id,L=m.active,M=m.animated,S=m.destroyInactiveTabPane,Q=m.tabKey,W=m.children,$=h.useState(b),X=Object(r.a)($,2),re=X[0],ee=X[1];h.useEffect(function(){L?ee(!0):S&&ee(!1)},[L,S]);var U={};return L||(M?(U.visibility="hidden",U.height=0,U.overflowY="hidden"):U.display="none"),h.createElement("div",{id:A&&"".concat(A,"-panel-").concat(Q),role:"tabpanel",tabIndex:L?0:-1,"aria-labelledby":A&&"".concat(A,"-tab-").concat(Q),"aria-hidden":!L,style:Object(P.a)(Object(P.a)({},U),j),className:pe()("".concat(B,"-tabpane"),L&&"".concat(B,"-tabpane-active"),O)},(L||re||b)&&W)}var J=0;function _(m){return Object(an.a)(m).map(function(B){if(h.isValidElement(B)){var b=B.key!==void 0?String(B.key):void 0;return Object(P.a)(Object(P.a)({key:b},B.props),{},{node:B})}return null}).filter(function(B){return B})}function H(m,B){var b,O=m.id,j=m.prefixCls,A=j===void 0?"rc-tabs":j,L=m.className,M=m.children,S=m.direction,Q=m.activeKey,W=m.defaultActiveKey,$=m.editable,X=m.animated,re=X===void 0?{inkBar:!0,tabPane:!1}:X,ee=m.tabPosition,U=ee===void 0?"top":ee,he=m.tabBarGutter,ie=m.tabBarStyle,de=m.tabBarExtraContent,me=m.locale,ue=m.moreIcon,se=m.moreTransitionName,q=m.destroyInactiveTabPane,Fe=m.renderTabBar,ne=m.onChange,Y=m.onTabClick,G=m.onTabScroll,w=Object(Oe.a)(m,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),N=_(M),Z=S==="rtl",te;re===!1?te={inkBar:!1,tabPane:!1}:re===!0?te={inkBar:!0,tabPane:!0}:te=Object(P.a)({inkBar:!0,tabPane:!1},Object(R.a)(re)==="object"?re:{});var ae=Object(h.useState)(!1),Te=Object(r.a)(ae,2),We=Te[0],x=Te[1];Object(h.useEffect)(function(){x(Object(Ke.a)())},[]);var le=Object(ze.a)(function(){var ce;return(ce=N[0])===null||ce===void 0?void 0:ce.key},{value:Q,defaultValue:W}),Be=Object(r.a)(le,2),De=Be[0],Ie=Be[1],je=Object(h.useState)(function(){return N.findIndex(function(ce){return ce.key===De})}),Le=Object(r.a)(je,2),rn=Le[0],un=Le[1];Object(h.useEffect)(function(){var ce=N.findIndex(function(mn){return mn.key===De});if(ce===-1){var $e;ce=Math.max(0,Math.min(rn,N.length-1)),Ie(($e=N[ce])===null||$e===void 0?void 0:$e.key)}un(ce)},[N.map(function(ce){return ce.key}).join("_"),De,rn]);var Ye=Object(ze.a)(null,{value:O}),sn=Object(r.a)(Ye,2),pn=sn[0],ln=sn[1],Ze=U;We&&!["left","right"].includes(U)&&(Ze="top"),Object(h.useEffect)(function(){O||(ln("rc-tabs-".concat(J)),J+=1)},[]);function fn(ce,$e){Y==null||Y(ce,$e),Ie(ce),ne==null||ne(ce)}var on={id:pn,activeKey:De,animated:te,tabPosition:Ze,rtl:Z,mobile:We},He,dn=Object(P.a)(Object(P.a)({},on),{},{editable:$,locale:me,moreIcon:ue,moreTransitionName:se,tabBarGutter:he,onTabClick:fn,onTabScroll:G,extra:de,style:ie,panes:M});return Fe?He=Fe(dn,F):He=h.createElement(F,dn),h.createElement(p.Provider,{value:{tabs:N,prefixCls:A}},h.createElement("div",Object(C.a)({ref:B,id:O,className:pe()(A,"".concat(A,"-").concat(Ze),(b={},Object(n.a)(b,"".concat(A,"-mobile"),We),Object(n.a)(b,"".concat(A,"-editable"),$),Object(n.a)(b,"".concat(A,"-rtl"),Z),b),L)},w),He,h.createElement(V,Object(C.a)({destroyInactiveTabPane:q},on,{animated:te}))))}var oe=h.forwardRef(H);oe.TabPane=k;var fe=oe,Ne=ye.default=fe}}]);
