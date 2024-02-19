import{a4 as K,g as Q,_ as i,r as a,c as H,X as k,a2 as T,a3 as $,az as F,j as R,a8 as Y,$ as Z,a0 as L,am as I,aA as ee,Z as z,a1 as W,aB as B}from"./index-d3b06103.js";import{d as te,s as oe,u as ne}from"./styled-cc5b2fa7.js";function Oe(){const e=K(te);return e[Q]||e}function se(e){return typeof e=="string"}function re(e,o,t){return e===void 0||se(e)?o:i({},o,{ownerState:i({},o.ownerState,t)})}const ae={disableDefaultClasses:!1},le=a.createContext(ae);function ie(e){const{disableDefaultClasses:o}=a.useContext(le);return t=>o?"":e(t)}function ce(e,o=[]){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!o.includes(n)).forEach(n=>{t[n]=e[n]}),t}function ue(e,o,t){return typeof e=="function"?e(o,t):e}function V(e){if(e===void 0)return{};const o={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&typeof e[t]=="function")).forEach(t=>{o[t]=e[t]}),o}function pe(e){const{getSlotProps:o,additionalProps:t,externalSlotProps:n,externalForwardedProps:s,className:r}=e;if(!o){const y=H(t==null?void 0:t.className,r,s==null?void 0:s.className,n==null?void 0:n.className),h=i({},t==null?void 0:t.style,s==null?void 0:s.style,n==null?void 0:n.style),v=i({},t,s,n);return y.length>0&&(v.className=y),Object.keys(h).length>0&&(v.style=h),{props:v,internalRef:void 0}}const c=ce(i({},s,n)),u=V(n),p=V(s),l=o(c),d=H(l==null?void 0:l.className,t==null?void 0:t.className,r,s==null?void 0:s.className,n==null?void 0:n.className),f=i({},l==null?void 0:l.style,t==null?void 0:t.style,s==null?void 0:s.style,n==null?void 0:n.style),m=i({},l,t,p,u);return d.length>0&&(m.className=d),Object.keys(f).length>0&&(m.style=f),{props:m,internalRef:l.ref}}const de=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function fe(e){var o;const{elementType:t,externalSlotProps:n,ownerState:s,skipResolvingSlotProps:r=!1}=e,c=k(e,de),u=r?{}:ue(n,s),{props:p,internalRef:l}=pe(i({},c,{externalSlotProps:u})),d=T(l,u==null?void 0:u.ref,(o=e.additionalProps)==null?void 0:o.ref);return re(t,i({},p,{ref:d}),s)}function ve(e){return typeof e=="function"?e():e}const me=a.forwardRef(function(o,t){const{children:n,container:s,disablePortal:r=!1}=o,[c,u]=a.useState(null),p=T(a.isValidElement(n)?n.ref:null,t);if($(()=>{r||u(ve(s)||document.body)},[s,r]),$(()=>{if(c&&!r)return F(t,c),()=>{F(t,null)}},[t,c,r]),r){if(a.isValidElement(n)){const l={ref:p};return a.cloneElement(n,l)}return R.jsx(a.Fragment,{children:n})}return R.jsx(a.Fragment,{children:c&&Y.createPortal(n,c)})});function Pe(e){return Z("MuiPopper",e)}L("MuiPopper",["root"]);const ye=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],he=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function xe(e,o){if(o==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function U(e){return typeof e=="function"?e():e}function Re(e){return e.nodeType!==void 0}const Ee=()=>z({root:["root"]},ie(Pe)),ge={},be=a.forwardRef(function(o,t){var n;const{anchorEl:s,children:r,direction:c,disablePortal:u,modifiers:p,open:l,placement:d,popperOptions:f,popperRef:m,slotProps:y={},slots:h={},TransitionProps:v}=o,O=k(o,ye),w=a.useRef(null),M=T(w,t),P=a.useRef(null),x=T(P,m),E=a.useRef(x);$(()=>{E.current=x},[x]),a.useImperativeHandle(m,()=>P.current,[]);const g=xe(d,c),[b,_]=a.useState(g),[C,S]=a.useState(U(s));a.useEffect(()=>{P.current&&P.current.forceUpdate()}),a.useEffect(()=>{s&&S(U(s))},[s]),$(()=>{if(!C||!l)return;const J=j=>{_(j.placement)};let N=[{name:"preventOverflow",options:{altBoundary:u}},{name:"flip",options:{altBoundary:u}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:j})=>{J(j)}}];p!=null&&(N=N.concat(p)),f&&f.modifiers!=null&&(N=N.concat(f.modifiers));const D=ee(C,w.current,i({placement:g},f,{modifiers:N}));return E.current(D),()=>{D.destroy(),E.current(null)}},[C,u,p,l,f,g]);const A={placement:b};v!==null&&(A.TransitionProps=v);const X=Ee(),q=(n=h.root)!=null?n:"div",G=fe({elementType:q,externalSlotProps:y.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:M},ownerState:o,className:X.root});return R.jsx(q,i({},G,{children:typeof r=="function"?r(A):r}))}),Me=a.forwardRef(function(o,t){const{anchorEl:n,children:s,container:r,direction:c="ltr",disablePortal:u=!1,keepMounted:p=!1,modifiers:l,open:d,placement:f="bottom",popperOptions:m=ge,popperRef:y,style:h,transition:v=!1,slotProps:O={},slots:w={}}=o,M=k(o,he),[P,x]=a.useState(!0),E=()=>{x(!1)},g=()=>{x(!0)};if(!p&&!d&&(!v||P))return null;let b;if(r)b=r;else if(n){const S=U(n);b=S&&Re(S)?I(S).body:I(null).body}const _=!d&&p&&(!v||P)?"none":void 0,C=v?{in:d,onEnter:E,onExited:g}:void 0;return R.jsx(me,{disablePortal:u,container:b,children:R.jsx(be,i({anchorEl:n,direction:c,disablePortal:u,modifiers:l,ref:t,open:v?!P:d,placement:f,popperOptions:m,popperRef:y,slotProps:O,slots:w},M,{style:i({position:"fixed",top:0,left:0,display:_},h),TransitionProps:C,children:s}))})});function Ce(e){return Z("MuiPaper",e)}L("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Se=["className","component","elevation","square","variant"],Ne=e=>{const{square:o,elevation:t,variant:n,classes:s}=e,r={root:["root",n,!o&&"rounded",n==="elevation"&&`elevation${t}`]};return z(r,Ce,s)},we=oe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,t.variant==="elevation"&&o[`elevation${t.elevation}`]]}})(({theme:e,ownerState:o})=>{var t;return i({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&i({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${W("#fff",B(o.elevation))}, ${W("#fff",B(o.elevation))})`},e.vars&&{backgroundImage:(t=e.vars.overlays)==null?void 0:t[o.elevation]}))}),Te=a.forwardRef(function(o,t){const n=ne({props:o,name:"MuiPaper"}),{className:s,component:r="div",elevation:c=1,square:u=!1,variant:p="elevation"}=n,l=k(n,Se),d=i({},n,{component:r,elevation:c,square:u,variant:p}),f=Ne(d);return R.jsx(we,i({as:r,ownerState:d,className:H(f.root,s),ref:t},l))}),_e=Te;export{_e as P,fe as a,Me as b,me as c,ce as e,se as i,ue as r,Oe as u};