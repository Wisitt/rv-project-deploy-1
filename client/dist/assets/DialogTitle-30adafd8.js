import{G as b,J as P,K as _,_ as s,r as i,W as $,X as R,Y as z,j,ad as g,Z as M}from"./index-d3b06103.js";import{c as U}from"./cardOverflowClasses-8f8d0f9f.js";import{a as I,b as J}from"./ModalDialog-1b8aa38f.js";function W(l){return b("MuiDialogTitle",l)}P("MuiDialogTitle",["root","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);const B=["component","children","variant","color","level","slots","slotProps"],E=l=>{const{level:o,color:e,variant:t}=l,r={root:["root",o,e&&`color${g(e)}`,t&&`variant${g(t)}`]};return M(r,W,{})},H=_("h2",{name:"JoyDialogTitle",slot:"Root",overridesResolver:(l,o)=>o.root})(({theme:l,ownerState:o})=>{var e,t;const r=o.level!=="inherit"?(e=l.typography[o.level])==null?void 0:e.lineHeight:"1";return s({"--Icon-fontSize":`calc(1em * ${r})`},o.color&&{"--Icon-color":"currentColor"},{display:"flex",gap:"clamp(4px, 0.375em, 0.75rem)",margin:"var(--unstable_DialogTitle-margin, 0px)"},o.level&&o.level!=="inherit"&&l.typography[o.level],{color:"inherit"},o.variant&&s({borderRadius:l.vars.radius.xs,paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},(t=l.variants[o.variant])==null?void 0:t[o.color]),{[`.${U.root} > &`]:{"--unstable_DialogTitle-margin":"var(--Card-padding) 0"}})}),L={sm:"title-md",md:"title-lg",lg:"h4"},N=i.forwardRef(function(o,e){const t=$({props:o,name:"JoyDialogTitle"}),r=i.useContext(I),n=i.useContext(J),{component:c="h2",children:m,variant:d,color:a,level:v=L[r||"md"],slots:u={},slotProps:y={}}=t,h=R(t,B),x=o.color||(d?a??"neutral":a),D=s({},h,{component:c,slots:u,slotProps:y}),p=s({},t,{component:c,color:x,variant:d,level:v}),C=E(p),[T,f]=z("root",{ref:e,className:C.root,elementType:H,externalForwardedProps:D,ownerState:p,additionalProps:{id:n==null?void 0:n.labelledBy}});return j.jsx(T,s({},f,{children:m}))}),G=N;export{G as D};