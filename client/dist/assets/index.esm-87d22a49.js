import{b as n,B as h,S as b,R as l}from"./index-d3b06103.js";import{T as x,C as y}from"./Table-4da1d017.js";import{M as w}from"./ModalDialog-1b8aa38f.js";n(x)`
  overflow: auto;
  border-radius: 20px;
  table-layout:auto;
  tbody {
    overflow: auto;
    width: 100%;
    min-width: 925px;
  }

  th,
  td {

    padding: 5px;
  }

  th {
    background-color: ${({theme:t})=>t.palette.primary.main};
    color: ${({theme:t})=>t.palette.background.default};
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;n(h)`
  color: ${({theme:t})=>t.palette.background.default};
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${({theme:t})=>t.palette.primary.main};

  &:hover {
    background-color: ${({theme:t})=>t.palette.primary.dark};
  }
`;const T=n("div")`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  .card-footer {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .this-btn {
      @media (max-width: 390px) {
        flex-direction: column;
      }
    }
  }
`,j=n(b)`
  height: 100%;
  border: 1px solid ${({theme:t})=>t.palette.neutral.softActiveColor};
  background-color: white;
  color:black;
  border-radius: 15px;  
  margin-top: 10px;
  padding: 20px;

`,S=n("thead")`
tr {
  th {
    position: sticky;
    left: 0;
    z-index: 2 !important;
    text-align: center;
    padding: 10px;
    border: none !important;
    background-color: white;
    color:black;


  }
  td {
    z-index: 1 !important;
    background-color: white;

    color:black;

  }
}
`,_=n("tbody")`
 img {
    display: flex;
    align-items: center;
  }
  tr {
    align-items: center;
    justify-content: center;
    th {
      position: sticky;
      left: 0;
      padding: 10px;
      align-items: center;
      text-align: center;
      vertical-align: middle;
      font-weight: 500;
        background-color: white;
        color:black;

    }
  }
`;n(y)`
  // Add your styles for Checkbox here
`;n(w)`
  // Add your styles for ModalDialog here
`;n("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=l.createContext&&l.createContext(g),i=globalThis&&globalThis.__assign||function(){return i=Object.assign||function(t){for(var r,e=1,a=arguments.length;e<a;e++){r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},i.apply(this,arguments)},v=globalThis&&globalThis.__rest||function(t,r){var e={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(e[a[o]]=t[a[o]]);return e};function p(t){return t&&t.map(function(r,e){return l.createElement(r.tag,i({key:e},r.attr),p(r.child))})}function m(t){return function(r){return l.createElement(k,i({attr:i({},t.attr)},r),p(t.child))}}function k(t){var r=function(e){var a=t.attr,o=t.size,s=t.title,f=v(t,["attr","size","title"]),d=o||e.size||"1em",c;return e.className&&(c=e.className),t.className&&(c=(c?c+" ":"")+t.className),l.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,f,{className:c,style:i(i({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),t.children)};return u!==void 0?l.createElement(u.Consumer,null,function(e){return r(e)}):r(g)}function E(t){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"}}]})(t)}function N(t){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M8.2 751.4c0 8.6 3.4 17.401 10 24.001 13.2 13.2 34.8 13.2 48 0l451.8-451.8 445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"}}]})(t)}export{T as H,E as S,j as T,S as a,_ as b,N as c};
