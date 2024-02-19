import{$ as en,a0 as tn,_ as F,r as R,X as nn,j as h,c as an,ad as ce,Z as rn,a1 as Yn,R as lt,d as Un,b0 as It,b1 as Bn,F as xe,b2 as Wn,b3 as Hn}from"./index-d3b06103.js";import{P as g}from"./index-f6e3671f.js";import{s as ft,r as on,u as Xn}from"./styled-cc5b2fa7.js";import{B as Gn,u as Vn}from"./useFormControl-81508b3d.js";import{u as qn}from"./useControlled-c0ad3f19.js";import{c as ct}from"./createSvgIcon-5dd918b6.js";import"./useEventCallback-0e03fb6b.js";function Kn(e){return en("PrivateSwitchBase",e)}tn("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Qn=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Zn=e=>{const{classes:t,checked:n,disabled:a,edge:r}=e,i={root:["root",n&&"checked",a&&"disabled",r&&`edge${ce(r)}`],input:["input"]};return rn(i,Kn,t)},Jn=ft(Gn)(({ownerState:e})=>F({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ea=ft("input",{shouldForwardProp:on})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ta=R.forwardRef(function(t,n){const{autoFocus:a,checked:r,checkedIcon:i,className:o,defaultChecked:s,disabled:l,disableFocusRipple:c=!1,edge:f=!1,icon:u,id:v,inputProps:p,inputRef:b,name:x,onBlur:y,onChange:S,onFocus:k,readOnly:I,required:E=!1,tabIndex:O,type:_,value:j}=t,ie=nn(t,Qn),[T,$e]=qn({controlled:r,default:!!s,name:"SwitchBase",state:"checked"}),B=Vn(),Rn=z=>{k&&k(z),B&&B.onFocus&&B.onFocus(z)},Fn=z=>{y&&y(z),B&&B.onBlur&&B.onBlur(z)},Dn=z=>{if(z.nativeEvent.defaultPrevented)return;const Ct=z.target.checked;$e(Ct),S&&S(z,Ct)};let oe=l;B&&typeof oe>"u"&&(oe=B.disabled);const $n=_==="checkbox"||_==="radio",Ye=F({},t,{checked:T,disabled:oe,disableFocusRipple:c,edge:f}),St=Zn(Ye);return h.jsxs(Jn,F({component:"span",className:an(St.root,o),centerRipple:!0,focusRipple:!c,disabled:oe,tabIndex:null,role:void 0,onFocus:Rn,onBlur:Fn,ownerState:Ye,ref:n},ie,{children:[h.jsx(ea,F({autoFocus:a,checked:r,defaultChecked:s,className:St.input,disabled:oe,id:$n?v:void 0,name:x,onChange:Dn,readOnly:I,ref:b,required:E,ownerState:Ye,tabIndex:O,type:_},_==="checkbox"&&j===void 0?{}:{value:j},p)),T?i:u]}))}),na=ta,aa=ct(h.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ra=ct(h.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ia=ct(h.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function oa(e){return en("MuiCheckbox",e)}const sa=tn("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Ue=sa,la=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],fa=e=>{const{classes:t,indeterminate:n,color:a,size:r}=e,i={root:["root",n&&"indeterminate",`color${ce(a)}`,`size${ce(r)}`]},o=rn(i,oa,t);return F({},t,o)},ca=ft(na,{shouldForwardProp:e=>on(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,t[`size${ce(n.size)}`],n.color!=="default"&&t[`color${ce(n.color)}`]]}})(({theme:e,ownerState:t})=>F({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Yn(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${Ue.checked}, &.${Ue.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Ue.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ua=h.jsx(ra,{}),ma=h.jsx(aa,{}),da=h.jsx(ia,{}),va=R.forwardRef(function(t,n){var a,r;const i=Xn({props:t,name:"MuiCheckbox"}),{checkedIcon:o=ua,color:s="primary",icon:l=ma,indeterminate:c=!1,indeterminateIcon:f=da,inputProps:u,size:v="medium",className:p}=i,b=nn(i,la),x=c?f:l,y=c?f:o,S=F({},i,{color:s,indeterminate:c,size:v}),k=fa(S);return h.jsx(ca,F({type:"checkbox",inputProps:F({"data-indeterminate":c},u),icon:R.cloneElement(x,{fontSize:(a=x.props.fontSize)!=null?a:v}),checkedIcon:R.cloneElement(y,{fontSize:(r=y.props.fontSize)!=null?r:v}),ownerState:S,ref:n,className:an(k.root,p)},b,{classes:k}))}),pa=va;function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ot(Object(n),!0).forEach(function(a){P(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Te(e){"@babel/helpers - typeof";return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Te(e)}function ba(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ga(e,t,n){return t&&Pt(e.prototype,t),n&&Pt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ut(e,t){return ya(e)||ka(e,t)||sn(e,t)||Aa()}function be(e){return ha(e)||xa(e)||sn(e)||wa()}function ha(e){if(Array.isArray(e))return Ve(e)}function ya(e){if(Array.isArray(e))return e}function xa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ka(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function sn(e,t){if(e){if(typeof e=="string")return Ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ve(e,t)}}function Ve(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function wa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Aa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Et=function(){},mt={},ln={},fn=null,cn={mark:Et,measure:Et};try{typeof window<"u"&&(mt=window),typeof document<"u"&&(ln=document),typeof MutationObserver<"u"&&(fn=MutationObserver),typeof performance<"u"&&(cn=performance)}catch{}var Sa=mt.navigator||{},Nt=Sa.userAgent,_t=Nt===void 0?"":Nt,X=mt,A=ln,Tt=fn,ke=cn;X.document;var U=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",un=~_t.indexOf("MSIE")||~_t.indexOf("Trident/"),we,Ae,Se,Ce,Ie,D="___FONT_AWESOME___",qe=16,mn="fa",dn="svg-inline--fa",Q="data-fa-i2svg",Ke="data-fa-pseudo-element",Ca="data-fa-pseudo-element-pending",dt="data-prefix",vt="data-icon",Mt="fontawesome-i2svg",Ia="async",Oa=["HTML","HEAD","STYLE","SCRIPT"],vn=function(){try{return!0}catch{return!1}}(),w="classic",C="sharp",pt=[w,C];function ge(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[w]}})}var ue=ge((we={},P(we,w,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),P(we,C,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),we)),me=ge((Ae={},P(Ae,w,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(Ae,C,{solid:"fass",regular:"fasr",light:"fasl"}),Ae)),de=ge((Se={},P(Se,w,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(Se,C,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Se)),Pa=ge((Ce={},P(Ce,w,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(Ce,C,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ce)),Ea=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,pn="fa-layers-text",Na=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_a=ge((Ie={},P(Ie,w,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(Ie,C,{900:"fass",400:"fasr",300:"fasl"}),Ie)),bn=[1,2,3,4,5,6,7,8,9,10],Ta=bn.concat([11,12,13,14,15,16,17,18,19,20]),Ma=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ve=new Set;Object.keys(me[w]).map(ve.add.bind(ve));Object.keys(me[C]).map(ve.add.bind(ve));var ja=[].concat(pt,be(ve),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(bn.map(function(e){return"".concat(e,"x")})).concat(Ta.map(function(e){return"w-".concat(e)})),le=X.FontAwesomeConfig||{};function La(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function za(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var Ra=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ra.forEach(function(e){var t=ut(e,2),n=t[0],a=t[1],r=za(La(n));r!=null&&(le[a]=r)})}var gn={styleDefault:"solid",familyDefault:"classic",cssPrefix:mn,replacementClass:dn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};le.familyPrefix&&(le.cssPrefix=le.familyPrefix);var ae=m(m({},gn),le);ae.autoReplaceSvg||(ae.observeMutations=!1);var d={};Object.keys(gn).forEach(function(e){Object.defineProperty(d,e,{enumerable:!0,set:function(n){ae[e]=n,fe.forEach(function(a){return a(d)})},get:function(){return ae[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){ae.cssPrefix=t,fe.forEach(function(n){return n(d)})},get:function(){return ae.cssPrefix}});X.FontAwesomeConfig=d;var fe=[];function Fa(e){return fe.push(e),function(){fe.splice(fe.indexOf(e),1)}}var W=qe,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Da(e){if(!(!e||!U)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=A.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return A.head.insertBefore(t,a),e}}var $a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pe(){for(var e=12,t="";e-- >0;)t+=$a[Math.random()*62|0];return t}function re(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function bt(e){return e.classList?re(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function hn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ya(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(hn(e[n]),'" ')},"").trim()}function ze(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gt(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function Ua(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Ba(e){var t=e.transform,n=e.width,a=n===void 0?qe:n,r=e.height,i=r===void 0?qe:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&un?l+="translate(".concat(t.x/W-a/2,"em, ").concat(t.y/W-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/W,"em), calc(-50% + ").concat(t.y/W,"em)) "):l+="translate(".concat(t.x/W,"em, ").concat(t.y/W,"em) "),l+="scale(".concat(t.size/W*(t.flipX?-1:1),", ").concat(t.size/W*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function yn(){var e=mn,t=dn,n=d.cssPrefix,a=d.replacementClass,r=Wa;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var jt=!1;function Be(){d.autoAddCss&&!jt&&(Da(yn()),jt=!0)}var Ha={mixout:function(){return{dom:{css:yn,insertCss:Be}}},hooks:function(){return{beforeDOMElementCreation:function(){Be()},beforeI2svg:function(){Be()}}}},$=X||{};$[D]||($[D]={});$[D].styles||($[D].styles={});$[D].hooks||($[D].hooks={});$[D].shims||($[D].shims=[]);var M=$[D],xn=[],Xa=function e(){A.removeEventListener("DOMContentLoaded",e),Me=1,xn.map(function(t){return t()})},Me=!1;U&&(Me=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Me||A.addEventListener("DOMContentLoaded",Xa));function Ga(e){U&&(Me?setTimeout(e,0):xn.push(e))}function he(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?hn(e):"<".concat(t," ").concat(Ya(a),">").concat(i.map(he).join(""),"</").concat(t,">")}function Lt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Va=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},We=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Va(n,r):n,l,c,f;for(a===void 0?(l=1,f=t[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function qa(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Qe(e){var t=qa(e);return t.length===1?t[0].toString(16):null}function Ka(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function zt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ze(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=zt(t);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(e,zt(t)):M.styles[e]=m(m({},M.styles[e]||{}),i),e==="fas"&&Ze("fa",t)}var Oe,Pe,Ee,J=M.styles,Qa=M.shims,Za=(Oe={},P(Oe,w,Object.values(de[w])),P(Oe,C,Object.values(de[C])),Oe),ht=null,kn={},wn={},An={},Sn={},Cn={},Ja=(Pe={},P(Pe,w,Object.keys(ue[w])),P(Pe,C,Object.keys(ue[C])),Pe);function er(e){return~ja.indexOf(e)}function tr(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!er(r)?r:null}var In=function(){var t=function(i){return We(J,function(o,s,l){return o[l]=We(s,i,{}),o},{})};kn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),wn=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Cn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in J||d.autoFetchSvg,a=We(Qa,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});An=a.names,Sn=a.unicodes,ht=Re(d.styleDefault,{family:d.familyDefault})};Fa(function(e){ht=Re(e.styleDefault,{family:d.familyDefault})});In();function yt(e,t){return(kn[e]||{})[t]}function nr(e,t){return(wn[e]||{})[t]}function K(e,t){return(Cn[e]||{})[t]}function On(e){return An[e]||{prefix:null,iconName:null}}function ar(e){var t=Sn[e],n=yt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function G(){return ht}var xt=function(){return{prefix:null,iconName:null,rest:[]}};function Re(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?w:n,r=ue[a][e],i=me[a][e]||me[a][r],o=e in M.styles?e:null;return i||o||null}var Rt=(Ee={},P(Ee,w,Object.keys(de[w])),P(Ee,C,Object.keys(de[C])),Ee);function Fe(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},P(t,w,"".concat(d.cssPrefix,"-").concat(w)),P(t,C,"".concat(d.cssPrefix,"-").concat(C)),t),o=null,s=w;(e.includes(i[w])||e.some(function(c){return Rt[w].includes(c)}))&&(s=w),(e.includes(i[C])||e.some(function(c){return Rt[C].includes(c)}))&&(s=C);var l=e.reduce(function(c,f){var u=tr(d.cssPrefix,f);if(J[f]?(f=Za[s].includes(f)?Pa[s][f]:f,o=f,c.prefix=f):Ja[s].indexOf(f)>-1?(o=f,c.prefix=Re(f,{family:s})):u?c.iconName=u:f!==d.replacementClass&&f!==i[w]&&f!==i[C]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var v=o==="fa"?On(c.iconName):{},p=K(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||p||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},xt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===C&&(J.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=K(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=G()||"fas"),l}var rr=function(){function e(){ba(this,e),this.definitions={}}return ga(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Ze(s,o[s]);var l=de[w][s];l&&Ze(l,o[s]),In()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),e}(),Ft=[],ee={},ne={},ir=Object.keys(ne);function or(e,t){var n=t.mixoutsTo;return Ft=e,ee={},Object.keys(ne).forEach(function(a){ir.indexOf(a)===-1&&delete ne[a]}),Ft.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Te(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ee[o]||(ee[o]=[]),ee[o].push(i[o])})}a.provides&&a.provides(ne)}),n}function Je(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ee[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=ee[e]||[];r.forEach(function(i){i.apply(null,n)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ne[e]?ne[e].apply(null,t):void 0}function et(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||G();if(t)return t=K(n,t)||t,Lt(Pn.definitions,n,t)||Lt(M.styles,n,t)}var Pn=new rr,sr=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Z("noAuto")},lr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(Z("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ga(function(){cr({autoReplaceSvgRoot:n}),Z("watch",t)})}},fr={icon:function(t){if(t===null)return null;if(Te(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Re(t[0]);return{prefix:a,iconName:K(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Ea))){var r=Fe(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=G();return{prefix:i,iconName:K(i,t)||t}}}},N={noAuto:sr,config:d,dom:lr,parse:fr,library:Pn,findIconDefinition:et,toHtml:he},cr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?A:n;(Object.keys(M.styles).length>0||d.autoFetchSvg)&&U&&d.autoReplaceSvg&&N.dom.i2svg({node:a})};function De(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return he(a)})}}),Object.defineProperty(e,"node",{get:function(){if(U){var a=A.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function ur(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(gt(o)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=ze(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function mr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function kt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,u=e.extra,v=e.watchable,p=v===void 0?!1:v,b=a.found?a:n,x=b.width,y=b.height,S=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(T){return u.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(u.classes).join(" "),I={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(y)})},E=S&&!~u.classes.indexOf("fa-fw")?{width:"".concat(x/y*16*.0625,"em")}:{};p&&(I.attributes[Q]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(f||pe())},children:[l]}),delete I.attributes.title);var O=m(m({},I),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:m(m({},E),u.styles)}),_=a.found&&n.found?Y("generateAbstractMask",O)||{children:[],attributes:{}}:Y("generateAbstractIcon",O)||{children:[],attributes:{}},j=_.children,ie=_.attributes;return O.children=j,O.attributes=ie,s?mr(O):ur(O)}function Dt(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Q]="");var f=m({},o.styles);gt(r)&&(f.transform=Ba({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var u=ze(f);u.length>0&&(c.style=u);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function dr(e){var t=e.content,n=e.title,a=e.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ze(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var He=M.styles;function tt(e){var t=e[0],n=e[1],a=e.slice(4),r=ut(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var vr={found:!1,width:512,height:512};function pr(e,t){!vn&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nt(e,t){var n=t;return t==="fa"&&d.styleDefault!==null&&(t=G()),new Promise(function(a,r){if(Y("missingIconAbstract"),n==="fa"){var i=On(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&He[t]&&He[t][e]){var o=He[t][e];return a(tt(o))}pr(e,t),a(m(m({},vr),{},{icon:d.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var $t=function(){},at=d.measurePerformance&&ke&&ke.mark&&ke.measure?ke:{mark:$t,measure:$t},se='FA "6.4.2"',br=function(t){return at.mark("".concat(se," ").concat(t," begins")),function(){return En(t)}},En=function(t){at.mark("".concat(se," ").concat(t," ends")),at.measure("".concat(se," ").concat(t),"".concat(se," ").concat(t," begins"),"".concat(se," ").concat(t," ends"))},wt={begin:br,end:En},Ne=function(){};function Yt(e){var t=e.getAttribute?e.getAttribute(Q):null;return typeof t=="string"}function gr(e){var t=e.getAttribute?e.getAttribute(dt):null,n=e.getAttribute?e.getAttribute(vt):null;return t&&n}function hr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function yr(){if(d.autoReplaceSvg===!0)return _e.replace;var e=_e[d.autoReplaceSvg];return e||_e.replace}function xr(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function kr(e){return A.createElement(e)}function Nn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?xr:kr:n;if(typeof e=="string")return A.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Nn(o,{ceFn:a}))}),r}function wr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _e={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Nn(r),n)}),n.getAttribute(Q)===null&&d.keepOriginalSource){var a=A.createComment(wr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~bt(n).indexOf(d.replacementClass))return _e.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return he(s)}).join(`
`);n.setAttribute(Q,""),n.innerHTML=o}};function Ut(e){e()}function _n(e,t){var n=typeof t=="function"?t:Ne;if(e.length===0)n();else{var a=Ut;d.mutateApproach===Ia&&(a=X.requestAnimationFrame||Ut),a(function(){var r=yr(),i=wt.begin("mutate");e.map(r),i(),n()})}}var At=!1;function Tn(){At=!0}function rt(){At=!1}var je=null;function Bt(e){if(Tt&&d.observeMutations){var t=e.treeCallback,n=t===void 0?Ne:t,a=e.nodeCallback,r=a===void 0?Ne:a,i=e.pseudoElementsCallback,o=i===void 0?Ne:i,s=e.observeMutationsRoot,l=s===void 0?A:s;je=new Tt(function(c){if(!At){var f=G();re(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Yt(u.addedNodes[0])&&(d.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Yt(u.target)&&~Ma.indexOf(u.attributeName))if(u.attributeName==="class"&&gr(u.target)){var v=Fe(bt(u.target)),p=v.prefix,b=v.iconName;u.target.setAttribute(dt,p||f),b&&u.target.setAttribute(vt,b)}else hr(u.target)&&r(u.target)})}}),U&&je.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ar(){je&&je.disconnect()}function Sr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Cr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Fe(bt(e));return r.prefix||(r.prefix=G()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=nr(r.prefix,e.innerText)||yt(r.prefix,Qe(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ir(e){var t=re(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||pe()):(t["aria-hidden"]="true",t.focusable="false")),t}function Or(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Cr(e),a=n.iconName,r=n.prefix,i=n.rest,o=Ir(e),s=Je("parseNodeAttributes",{},e),l=t.styleParser?Sr(e):[];return m({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Pr=M.styles;function Mn(e){var t=d.autoReplaceSvg==="nest"?Wt(e,{styleParser:!1}):Wt(e);return~t.extra.classes.indexOf(pn)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}var V=new Set;pt.map(function(e){V.add("fa-".concat(e))});Object.keys(ue[w]).map(V.add.bind(V));Object.keys(ue[C]).map(V.add.bind(V));V=be(V);function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var n=A.documentElement.classList,a=function(u){return n.add("".concat(Mt,"-").concat(u))},r=function(u){return n.remove("".concat(Mt,"-").concat(u))},i=d.autoFetchSvg?V:pt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Pr));i.includes("fa")||i.push("fa");var o=[".".concat(pn,":not([").concat(Q,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=re(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=wt.begin("onTree"),c=s.reduce(function(f,u){try{var v=Mn(u);v&&f.push(v)}catch(p){vn||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(v){_n(v,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(v){l(),u(v)})})}function Er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mn(e).then(function(n){n&&_n([n],t)})}function Nr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:et(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:et(r||{})),e(a,m(m({},n),{},{mask:r}))}}var _r=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,v=u===void 0?null:u,p=n.titleId,b=p===void 0?null:p,x=n.classes,y=x===void 0?[]:x,S=n.attributes,k=S===void 0?{}:S,I=n.styles,E=I===void 0?{}:I;if(t){var O=t.prefix,_=t.iconName,j=t.icon;return De(m({type:"icon"},t),function(){return Z("beforeDOMElementCreation",{iconDefinition:t,params:n}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(b||pe()):(k["aria-hidden"]="true",k.focusable="false")),kt({icons:{main:tt(j),mask:l?tt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:_,transform:m(m({},L),r),symbol:o,title:v,maskId:f,titleId:b,extra:{attributes:k,styles:E,classes:y}})})}},Tr={mixout:function(){return{icon:Nr(_r)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ht,n.nodeCallback=Er,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?A:a,i=n.callback,o=i===void 0?function(){}:i;return Ht(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,u=a.maskId,v=a.extra;return new Promise(function(p,b){Promise.all([nt(r,s),f.iconName?nt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var y=ut(x,2),S=y[0],k=y[1];p([n,kt({icons:{main:S,mask:k},prefix:s,iconName:r,transform:l,symbol:c,maskId:u,title:i,titleId:o,extra:v,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ze(s);l.length>0&&(r.style=l);var c;return gt(o)&&(c=Y("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Mr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return De({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(be(i)).join(" ")},children:o}]})}}}},jr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,u=f===void 0?{}:f;return De({type:"counter",content:n},function(){return Z("beforeDOMElementCreation",{content:n,params:a}),dr({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(be(s))}})})}}}},Lr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,u=f===void 0?{}:f,v=a.styles,p=v===void 0?{}:v;return De({type:"text",content:n},function(){return Z("beforeDOMElementCreation",{content:n,params:a}),Dt({content:n,transform:m(m({},L),i),title:s,extra:{attributes:u,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(be(c))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(un){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Dt({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},zr=new RegExp('"',"ug"),Xt=[1105920,1112319];function Rr(e){var t=e.replace(zr,""),n=Ka(t,0),a=n>=Xt[0]&&n<=Xt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Qe(r?t[0]:t),isSecondary:a||r}}function Gt(e,t){var n="".concat(Ca).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=re(e.children),o=i.filter(function(j){return j.getAttribute(Ke)===t})[0],s=X.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Na),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?C:w,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?me[v][l[2].toLowerCase()]:_a[v][c],b=Rr(u),x=b.value,y=b.isSecondary,S=l[0].startsWith("FontAwesome"),k=yt(p,x),I=k;if(S){var E=ar(x);E.iconName&&E.prefix&&(k=E.iconName,p=E.prefix)}if(k&&!y&&(!o||o.getAttribute(dt)!==p||o.getAttribute(vt)!==I)){e.setAttribute(n,I),o&&e.removeChild(o);var O=Or(),_=O.extra;_.attributes[Ke]=t,nt(k,p).then(function(j){var ie=kt(m(m({},O),{},{icons:{main:j,mask:xt()},prefix:p,iconName:I,extra:_,watchable:!0})),T=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=ie.map(function($e){return he($e)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Fr(e){return Promise.all([Gt(e,"::before"),Gt(e,"::after")])}function Dr(e){return e.parentNode!==document.head&&!~Oa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ke)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Vt(e){if(U)return new Promise(function(t,n){var a=re(e.querySelectorAll("*")).filter(Dr).map(Fr),r=wt.begin("searchPseudoElements");Tn(),Promise.all(a).then(function(){r(),rt(),t()}).catch(function(){r(),rt(),n()})})}var $r={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Vt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?A:a;d.searchPseudoElements&&Vt(r)}}},qt=!1,Yr={mixout:function(){return{dom:{unwatch:function(){Tn(),qt=!0}}}},hooks:function(){return{bootstrap:function(){Bt(Je("mutationObserverCallbacks",{}))},noAuto:function(){Ar()},watch:function(n){var a=n.observeMutationsRoot;qt?rt():Bt(Je("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Kt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Ur={mixout:function(){return{parse:{transform:function(n){return Kt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Kt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:v};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),p.path)}]}]}}}},Xe={x:0,y:0,width:"100%",height:"100%"};function Qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Br(e){return e.tag==="g"?e.children:[e]}var Wr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Fe(r.split(" ").map(function(o){return o.trim()})):xt();return i.prefix||(i.prefix=G()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,u=o.width,v=o.icon,p=Ua({transform:l,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:m(m({},Xe),{},{fill:"white"})},x=f.children?{children:f.children.map(Qt)}:{},y={tag:"g",attributes:m({},p.inner),children:[Qt(m({tag:f.tag,attributes:m(m({},f.attributes),p.path)},x))]},S={tag:"g",attributes:m({},p.outer),children:[y]},k="mask-".concat(s||pe()),I="clip-".concat(s||pe()),E={tag:"mask",attributes:m(m({},Xe),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,S]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Br(v)},E]};return a.push(O,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(k,")")},Xe)}),{children:a,attributes:r}}}},Hr={provides:function(t){var n=!1;X.matchMedia&&(n=X.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Xr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Gr=[Ha,Tr,Mr,jr,Lr,$r,Yr,Ur,Wr,Hr,Xr];or(Gr,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var it=N.parse;N.findIconDefinition;N.toHtml;var Vr=N.icon;N.layer;N.text;N.counter;function Zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zt(Object(n),!0).forEach(function(a){te(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Le(e){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Kr(e,t){if(e==null)return{};var n=qr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function ot(e){return Qr(e)||Zr(e)||Jr(e)||ei()}function Qr(e){if(Array.isArray(e))return st(e)}function Zr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jr(e,t){if(e){if(typeof e=="string")return st(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return st(e,t)}}function st(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ei(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ti(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,u=e.pulse,v=e.fixedWidth,p=e.inverse,b=e.border,x=e.listItem,y=e.flip,S=e.size,k=e.rotation,I=e.pull,E=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":v,"fa-inverse":p,"fa-border":b,"fa-li":x,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},te(t,"fa-".concat(S),typeof S<"u"&&S!==null),te(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),te(t,"fa-pull-".concat(I),typeof I<"u"&&I!==null),te(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(O){return E[O]?O:null}).filter(function(O){return O})}function ni(e){return e=e-0,e===e}function jn(e){return ni(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ai=["style"];function ri(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ii(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=jn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[ri(r)]=i:t[r]=i,t},{})}function Ln(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return Ln(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=ii(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[jn(c)]=f}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Kr(n,ai);return r.attrs.style=H(H({},r.attrs.style),o),e.apply(void 0,[t.tag,H(H({},r.attrs),s)].concat(ot(a)))}var zn=!1;try{zn=!0}catch{}function oi(){if(!zn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jt(e){if(e&&Le(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(it.icon)return it.icon(e);if(e===null)return null;if(e&&Le(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ge(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?te({},e,t):{}}var ye=lt.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,c=Jt(n),f=Ge("classes",[].concat(ot(ti(e)),ot(i.split(" ")))),u=Ge("transform",typeof e.transform=="string"?it.transform(e.transform):e.transform),v=Ge("mask",Jt(a)),p=Vr(c,H(H(H(H({},f),u),v),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!p)return oi("Could not find icon",c),null;var b=p.abstract,x={ref:t};return Object.keys(e).forEach(function(y){ye.defaultProps.hasOwnProperty(y)||(x[y]=e[y])}),si(b[0],x)});ye.displayName="FontAwesomeIcon";ye.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};ye.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var si=Ln.bind(null,lt.createElement),li={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},fi={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};const ci="/assets/rmutp-logo-f00aa999.png",ui=Hn.apiUrl,yi=()=>{const e=Un(),[t,n]=R.useState(!1),[a,r]=R.useState({pin:"",citizen_id:"",rememberMe:!1}),[i,o]=R.useState({username:"",password:"",general:""}),[s,l]=R.useState(!1),c=()=>{l(b=>!b)},f=()=>{o({username:"",password:"",general:""})},u=b=>{r({...a,[b.target.name]:b.target.value}),f()},v=b=>{r({...a,rememberMe:b.target.checked})},p=async()=>{f();try{if(!a.pin.trim()||!a.citizen_id.trim()){a.pin.trim()||xe.error("ID Student is required"),a.citizen_id.trim()||xe.error("ID Card is required"),o({username:a.pin.trim()?"":"ID Student is required",password:a.citizen_id.trim()?"":"ID Card is required",general:"Username and password are required"}),n(!1);return}const b=await Wn.post(`${ui}/auth/login`,a);if(b.status===200&&b.data&&b.data.token){n(!0);const{token:x,account_role:y,account_type:S}=b.data;localStorage.setItem("token",x),localStorage.setItem("role",y),localStorage.setItem("type",S),a.rememberMe&&a.pin.trim()&&a.citizen_id.trim()?(localStorage.setItem("username",a.pin),localStorage.setItem("password",a.citizen_id)):(localStorage.removeItem("username"),localStorage.removeItem("password")),xe.success("Login Success"),setTimeout(()=>{n(!1),e(y==="admin"?"/admin/dashboard":"/user")},1e3)}else n(!1),o(x=>({...x,general:"Invalid username or password"}))}catch(b){console.error("Login failed:",b),xe.error("Invalid username or password"),n(!1),o({username:"",password:"",general:"Authentication failed. Please try again."})}};return R.useEffect(()=>{const b=localStorage.getItem("username"),x=localStorage.getItem("password");b&&x&&r(y=>({...y,pin:b,citizen_id:x,rememberMe:!0}))},[]),h.jsxs(lt.Fragment,{children:[!t&&h.jsxs("div",{className:"login-form",children:[h.jsxs("div",{className:"login-logo text-center text-3xl font-semibold mb-6 text-gray-800 text-white",children:[h.jsx("img",{src:ci,alt:""}),h.jsx("h1",{children:"Room Reservation System at RMUTP"})]}),h.jsxs("div",{className:"login-form-container",children:[h.jsx("h1",{className:"text-center text-3xl font-semibold mb-3 mt-4 text-gray-800",children:"Login"}),h.jsxs("div",{className:`input-login login-username ${i.username?"error":""}`,children:[h.jsx("label",{className:"text-sm text-gray-600",children:"ID Student"}),h.jsx("div",{className:"username-toggle-left",children:h.jsx(It,{icon:"ph:student-fill",style:{color:"#D0A2F7"}})}),h.jsx("input",{"data-cy":"input-idStudent",id:"input-username",type:"text",name:"pin",value:a.pin,onChange:u,placeholder:"ID Student",className:`input-field ${i.username?"error":""}`}),i.username&&h.jsx("p",{className:"error-message",children:i.username})]}),h.jsxs("div",{className:`input-login login-password ${i.username?"error":""}`,children:[h.jsx("label",{className:"text-sm text-gray-600",children:"ID Card"}),h.jsx("div",{className:"password-toggle-left",children:h.jsx(It,{icon:"la:id-card-solid",style:{color:"#D0A2F7"}})}),h.jsx("input",{"data-cy":"input-idCard",id:"input-pass",type:s?"text":"password",name:"citizen_id",value:a.citizen_id,onChange:u,placeholder:"ID Card",className:`input-field ${i.password?"error":""}`}),h.jsx("div",{className:"password-toggle",onClick:c,children:h.jsx(ye,{icon:s?fi:li})}),i.password&&h.jsx("p",{className:"error-message",children:i.password}),i.general&&h.jsx("p",{className:"error-message mt-2",children:i.general})]}),h.jsxs("div",{className:"remember-me",children:[h.jsx(pa,{id:"rememberMe",checked:a.rememberMe,onChange:v,defaultChecked:!0,style:{color:"#D0A2F7"}}),h.jsx("label",{children:"Remember Me"})]}),h.jsx("button",{"data-cy":"login-btn",onClick:p,className:"login-button",children:"Login"})]})]}),t&&h.jsx(Bn,{})]})};export{yi as default};
