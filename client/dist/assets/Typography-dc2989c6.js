import{$ as b,a0 as B,ad as u,_ as s,r as W,ag as C,X as M,j as R,c as P,Z as j}from"./index-d3b06103.js";import{s as U,u as _}from"./styled-cc5b2fa7.js";function $(t){return b("MuiTypography",t)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const N=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=t=>{const{align:a,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:p}=t,e={root:["root",o,t.align!=="inherit"&&`align${u(a)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return j(e,$,p)},L=U("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${u(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>s({margin:0},a.variant==="inherit"&&{font:"inherit"},a.variant!=="inherit"&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=t=>z[t]||t,D=W.forwardRef(function(a,r){const n=_({props:a,name:"MuiTypography"}),i=A(n.color),o=C(s({},n,{color:i})),{align:p="inherit",className:e,component:g,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:h="body1",variantMapping:c=y}=o,x=M(o,N),m=s({},o,{align:p,color:i,className:e,component:g,gutterBottom:d,noWrap:f,paragraph:l,variant:h,variantMapping:c}),v=g||(l?"p":c[h]||y[h])||"span",T=E(m);return R.jsx(L,s({as:v,ref:r,ownerState:m,className:P(T.root,e)},x))}),V=D;export{V as T};