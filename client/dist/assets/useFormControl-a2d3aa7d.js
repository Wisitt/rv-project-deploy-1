import{R as K,r as a,_ as X,Y as te,b as T,j as k,a6 as be,b6 as ne,a5 as Ie,a8 as ce,aE as Oe,$ as Ue}from"./index-bf31e2d2.js";import{s as oe,u as ge}from"./styled-29c24c9b.js";import{u as H}from"./useEventCallback-2c56e4b6.js";function Z(e,o){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,t){return l.__proto__=t,l},Z(e,o)}function ze(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,Z(e,o)}const pe=K.createContext(null);function Ye(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e,o){var s=function(n){return o&&a.isValidElement(n)?o(n):n},l=Object.create(null);return e&&a.Children.map(e,function(t){return t}).forEach(function(t){l[t.key]=s(t)}),l}function Ke(e,o){e=e||{},o=o||{};function s(d){return d in o?o[d]:e[d]}var l=Object.create(null),t=[];for(var n in e)n in o?t.length&&(l[n]=t,t=[]):t.push(n);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=s(p)}c[u]=s(u)}for(i=0;i<t.length;i++)c[t[i]]=s(t[i]);return c}function L(e,o,s){return s[o]!=null?s[o]:e.props[o]}function Xe(e,o){return ie(e.children,function(s){return a.cloneElement(s,{onExited:o.bind(null,s),in:!0,appear:L(s,"appear",e),enter:L(s,"enter",e),exit:L(s,"exit",e)})})}function Ae(e,o,s){var l=ie(e.children),t=Ke(o,l);return Object.keys(t).forEach(function(n){var i=t[n];if(a.isValidElement(i)){var c=n in o,u=n in l,p=o[n],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?t[n]=a.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:L(i,"exit",e),enter:L(i,"enter",e)}):!u&&c&&!d?t[n]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(t[n]=a.cloneElement(i,{onExited:s.bind(null,i),in:p.props.in,exit:L(i,"exit",e),enter:L(i,"enter",e)}))}}),t}var We=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},He={component:"div",childFactory:function(o){return o}},re=function(e){ze(o,e);function o(l,t){var n;n=e.call(this,l,t)||this;var i=n.handleExited.bind(Ye(n));return n.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},n}var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(t,n){var i=n.children,c=n.handleExited,u=n.firstRender;return{children:u?Xe(t,c):Ae(t,i,c),firstRender:!1}},s.handleExited=function(t,n){var i=ie(this.props.children);t.key in i||(t.props.onExited&&t.props.onExited(n),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[t.key],{children:u}}))},s.render=function(){var t=this.props,n=t.component,i=t.childFactory,c=te(t,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,n===null?K.createElement(pe.Provider,{value:u},p):K.createElement(pe.Provider,{value:u},K.createElement(n,c,p))},o}(K.Component);re.propTypes={};re.defaultProps=He;const Ge=re;function qe(e){const{className:o,classes:s,pulsate:l=!1,rippleX:t,rippleY:n,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=T(o,s.ripple,s.rippleVisible,l&&s.ripplePulsate),E={width:i,height:i,top:-(i/2)+n,left:-(i/2)+t},h=T(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),k.jsx("span",{className:b,style:E,children:k.jsx("span",{className:h})})}const Je=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Je,Qe=["center","classes","className"];let G=e=>e,fe,de,he,me;const ee=550,Ze=80,et=ne(fe||(fe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=ne(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),nt=ne(he||(he=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ot=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=oe(qe,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,et,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,nt,({theme:e})=>e.transitions.easing.easeInOut),rt=a.forwardRef(function(o,s){const l=ge({props:o,name:"MuiTouchRipple"}),{center:t=!1,classes:n={},className:i}=l,c=te(l,Qe),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),E=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{E.current&&clearTimeout(E.current)},[]);const I=a.useCallback(f=>{const{pulsate:y,rippleX:x,rippleY:w,rippleSize:N,cb:U}=f;p(M=>[...M,k.jsx(it,{classes:{ripple:T(n.ripple,m.ripple),rippleVisible:T(n.rippleVisible,m.rippleVisible),ripplePulsate:T(n.ripplePulsate,m.ripplePulsate),child:T(n.child,m.child),childLeaving:T(n.childLeaving,m.childLeaving),childPulsate:T(n.childPulsate,m.childPulsate)},timeout:ee,pulsate:y,rippleX:x,rippleY:w,rippleSize:N},d.current)]),d.current+=1,g.current=U},[n]),_=a.useCallback((f={},y={},x=()=>{})=>{const{pulsate:w=!1,center:N=t||y.pulsate,fakeElement:U=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=U?null:R.current,B=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let P,S,$;if(N||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)P=Math.round(B.width/2),S=Math.round(B.height/2);else{const{clientX:D,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;P=Math.round(D-B.left),S=Math.round(v-B.top)}if(N)$=Math.sqrt((2*B.width**2+B.height**2)/3),$%2===0&&($+=1);else{const D=Math.max(Math.abs((M?M.clientWidth:0)-P),P)*2+2,v=Math.max(Math.abs((M?M.clientHeight:0)-S),S)*2+2;$=Math.sqrt(D**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{I({pulsate:w,rippleX:P,rippleY:S,rippleSize:$,cb:x})},E.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Ze)):I({pulsate:w,rippleX:P,rippleY:S,rippleSize:$,cb:x})},[t,I]),O=a.useCallback(()=>{_({},{pulsate:!0})},[_]),j=a.useCallback((f,y)=>{if(clearTimeout(E.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,E.current=setTimeout(()=>{j(f,y)});return}h.current=null,p(x=>x.length>0?x.slice(1):x),g.current=y},[]);return a.useImperativeHandle(s,()=>({pulsate:O,start:_,stop:j}),[O,_,j]),k.jsx(ot,X({className:T(m.root,n.root,i),ref:R},c,{children:k.jsx(Ge,{component:null,exit:!0,children:u})}))}),st=rt;function at(e){return Ie("MuiButtonBase",e)}const lt=be("MuiButtonBase",["root","disabled","focusVisible"]),ut=lt,ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:o,focusVisible:s,focusVisibleClassName:l,classes:t}=e,i=Ue({root:["root",o&&"disabled",s&&"focusVisible"]},at,t);return s&&l&&(i.root+=` ${l}`),i},ft=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(o,s){const l=ge({props:o,name:"MuiButtonBase"}),{action:t,centerRipple:n=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:E="a",onBlur:h,onClick:R,onContextMenu:I,onDragLeave:_,onFocus:O,onFocusVisible:j,onKeyDown:f,onKeyUp:y,onMouseDown:x,onMouseLeave:w,onMouseUp:N,onTouchEnd:U,onTouchMove:M,onTouchStart:B,tabIndex:P=0,TouchRippleProps:S,touchRippleRef:$,type:D}=l,v=te(l,ct),z=a.useRef(null),C=a.useRef(null),Re=ce(C,$),{isFocusVisibleRef:se,onFocus:ye,onBlur:xe,ref:Me}=Oe(),[F,A]=a.useState(!1);p&&F&&A(!1),a.useImperativeHandle(t,()=>({focusVisible:()=>{A(!0),z.current.focus()}}),[]);const[q,Ce]=a.useState(!1);a.useEffect(()=>{Ce(!0)},[]);const Te=q&&!d&&!p;a.useEffect(()=>{F&&b&&!d&&q&&C.current.pulsate()},[d,b,F,q]);function V(r,le,Ne=g){return H(ue=>(le&&le(ue),!Ne&&C.current&&C.current[r](ue),!0))}const Ee=V("start",x),Pe=V("stop",I),ve=V("stop",_),Ve=V("stop",N),Be=V("stop",r=>{F&&r.preventDefault(),w&&w(r)}),Se=V("start",B),$e=V("stop",U),we=V("stop",M),De=V("stop",r=>{xe(r),se.current===!1&&A(!1),h&&h(r)},!1),Fe=H(r=>{z.current||(z.current=r.currentTarget),ye(r),se.current===!0&&(A(!0),j&&j(r)),O&&O(r)}),J=()=>{const r=z.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=a.useRef(!1),Le=H(r=>{b&&!Q.current&&F&&C.current&&r.key===" "&&(Q.current=!0,C.current.stop(r,()=>{C.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),f&&f(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),ke=H(r=>{b&&r.key===" "&&C.current&&F&&!r.defaultPrevented&&(Q.current=!1,C.current.stop(r,()=>{C.current.pulsate(r)})),y&&y(r),R&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&R(r)});let W=u;W==="button"&&(v.href||v.to)&&(W=E);const Y={};W==="button"?(Y.type=D===void 0?"button":D,Y.disabled=p):(!v.href&&!v.to&&(Y.role="button"),p&&(Y["aria-disabled"]=p));const _e=ce(s,Me,z),ae=X({},l,{centerRipple:n,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:P,focusVisible:F}),je=pt(ae);return k.jsxs(ft,X({as:W,className:T(je.root,c),ownerState:ae,onBlur:De,onClick:R,onContextMenu:Pe,onFocus:Fe,onKeyDown:Le,onKeyUp:ke,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:$e,onTouchMove:we,onTouchStart:Se,ref:_e,tabIndex:p?-1:P,type:D},Y,v,{children:[i,Te?k.jsx(st,X({ref:Re,center:n},S)):null]}))}),xt=dt,ht=a.createContext(void 0),mt=ht;function Mt(){return a.useContext(mt)}export{xt as B,mt as F,Ge as T,ze as _,pe as a,Mt as u};
