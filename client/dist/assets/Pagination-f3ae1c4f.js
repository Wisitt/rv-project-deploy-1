import{G as Ye,J as Ke,K as be,_ as b,r as n,W as Ge,X as Ze,a5 as qe,aC as Qe,a2 as B,c as eo,Y as fe,j as p,aF as oo,ad as $,Z as to,b as f,B as U,S as ro,x as ao,T as A}from"./index-d3b06103.js";import{u as no}from"./useControlled-c0ad3f19.js";import{u as so}from"./useEventCallback-0e03fb6b.js";import{T as io,C as lo}from"./Table-4da1d017.js";import{M as co}from"./ModalDialog-1b8aa38f.js";import{S as po,O as uo}from"./Select-ca67cd63.js";function fo(e){return Ye("MuiTooltip",e)}Ke("MuiTooltip",["root","tooltipArrow","arrow","touch","placementLeft","placementRight","placementTop","placementBottom","colorPrimary","colorDanger","colorNeutral","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);const mo=["children","className","component","arrow","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","disablePortal","direction","keepMounted","modifiers","placement","title","color","variant","size","slots","slotProps"],ho=e=>{const{arrow:o,variant:a,color:i,size:s,placement:r,touch:v}=e,m={root:["root",o&&"tooltipArrow",v&&"touch",s&&`size${$(s)}`,i&&`color${$(i)}`,a&&`variant${$(a)}`,`tooltipPlacement${$(r.split("-")[0])}`],arrow:["arrow"]};return to(m,fo,{})},bo=be("div",{name:"JoyTooltip",slot:"Root",overridesResolver:(e,o)=>o.root})(({ownerState:e,theme:o})=>{var a,i,s;const r=(a=o.variants[e.variant])==null?void 0:a[e.color];return b({},e.size==="sm"&&{"--Icon-fontSize":o.vars.fontSize.md,"--Tooltip-arrowSize":"8px",padding:o.spacing(.25,.625)},e.size==="md"&&{"--Icon-fontSize":o.vars.fontSize.lg,"--Tooltip-arrowSize":"10px",padding:o.spacing(.5,.75)},e.size==="lg"&&{"--Icon-fontSize":o.vars.fontSize.xl,"--Tooltip-arrowSize":"12px",padding:o.spacing(.75,1)},{zIndex:o.vars.zIndex.tooltip,borderRadius:o.vars.radius.sm,boxShadow:o.shadow.sm,wordWrap:"break-word",position:"relative"},e.disableInteractive&&{pointerEvents:"none"},o.typography[`body-${{sm:"xs",md:"sm",lg:"md"}[e.size]}`],r,!r.backgroundColor&&{backgroundColor:o.vars.palette.background.surface},{"&::before":{content:'""',display:"block",position:"absolute",width:(i=e.placement)!=null&&i.match(/(top|bottom)/)?"100%":"calc(10px + var(--variant-borderWidth, 0px))",height:(s=e.placement)!=null&&s.match(/(top|bottom)/)?"calc(10px + var(--variant-borderWidth, 0px))":"100%"},'&[data-popper-placement*="bottom"]::before':{top:0,left:0,transform:"translateY(-100%)"},'&[data-popper-placement*="left"]::before':{top:0,right:0,transform:"translateX(100%)"},'&[data-popper-placement*="right"]::before':{top:0,left:0,transform:"translateX(-100%)"},'&[data-popper-placement*="top"]::before':{bottom:0,left:0,transform:"translateY(100%)"}})}),vo=be("span",{name:"JoyTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e,ownerState:o})=>{var a,i,s;const r=(a=e.variants[o.variant])==null?void 0:a[o.color];return{"--unstable_Tooltip-arrowRotation":0,width:"var(--Tooltip-arrowSize)",height:"var(--Tooltip-arrowSize)",boxSizing:"border-box","&:before":{content:'""',display:"block",position:"absolute",width:0,height:0,border:"calc(var(--Tooltip-arrowSize) / 2) solid",borderLeftColor:"transparent",borderBottomColor:"transparent",borderTopColor:(i=r==null?void 0:r.backgroundColor)!=null?i:e.vars.palette.background.surface,borderRightColor:(s=r==null?void 0:r.backgroundColor)!=null?s:e.vars.palette.background.surface,borderRadius:"0px 2px 0px 0px",boxShadow:`var(--variant-borderWidth, 0px) calc(-1 * var(--variant-borderWidth, 0px)) 0px 0px ${r.borderColor}`,transformOrigin:"center center",transform:"rotate(calc(-45deg + 90deg * var(--unstable_Tooltip-arrowRotation)))"},'[data-popper-placement*="bottom"] &':{top:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="top"] &':{"--unstable_Tooltip-arrowRotation":2,bottom:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="left"] &':{"--unstable_Tooltip-arrowRotation":1,right:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="right"] &':{"--unstable_Tooltip-arrowRotation":3,left:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"}}});let E=!1,S=null,C={x:0,y:0};function me(e,o){return a=>{o&&o(a),e(a)}}function he(e,o){return a=>{o&&o(a),e(a)}}const xo=n.forwardRef(function(o,a){var i;const s=Ge({props:o,name:"JoyTooltip"}),{children:r,className:v,component:m,arrow:l=!1,describeChild:L=!1,disableFocusListener:ve=!1,disableHoverListener:V=!1,disableInteractive:xe=!1,disableTouchListener:Te=!1,enterDelay:H=100,enterNextDelay:J=0,enterTouchDelay:ge=700,followCursor:F=!1,id:ye,leaveDelay:X=0,leaveTouchDelay:we=1500,onClose:Y,onOpen:K,open:Se,disablePortal:Ce,direction:ke,keepMounted:Re,modifiers:G,placement:Z="bottom",title:x,color:ze="neutral",variant:Me="solid",size:Pe="md",slots:$e={},slotProps:Ee={}}=s,q=Ze(s,mo),[T,Q]=n.useState(),[I,Le]=n.useState(null),k=n.useRef(!1),_=xe||F,R=n.useRef(),z=n.useRef(),h=n.useRef(),ee=n.useRef(),[Fe,oe]=no({controlled:Se,default:!1,name:"Tooltip",state:"open"});let d=Fe;const j=qe(ye),g=n.useRef(),M=n.useCallback(()=>{g.current!==void 0&&(document.body.style.WebkitUserSelect=g.current,g.current=void 0),clearTimeout(ee.current)},[]);n.useEffect(()=>()=>{clearTimeout(R.current),clearTimeout(z.current),clearTimeout(h.current),M()},[M]);const te=t=>{S&&clearTimeout(S),E=!0,oe(!0),K&&!d&&K(t)},P=so(t=>{S&&clearTimeout(S),S=setTimeout(()=>{E=!1},800+X),oe(!1),Y&&d&&Y(t),clearTimeout(R.current),R.current=setTimeout(()=>{k.current=!1},150)}),D=t=>{k.current&&t.type!=="touchstart"||(T&&T.removeAttribute("title"),clearTimeout(z.current),clearTimeout(h.current),H||E&&J?z.current=setTimeout(()=>{te(t)},E?J:H):te(t))},re=t=>{clearTimeout(z.current),clearTimeout(h.current),h.current=setTimeout(()=>{P(t)},X)},{isFocusVisibleRef:ae,onBlur:Ie,onFocus:_e,ref:je}=Qe(),[,ne]=n.useState(!1),se=t=>{Ie(t),ae.current===!1&&(ne(!1),re(t))},ie=t=>{T||Q(t.currentTarget),_e(t),ae.current===!0&&(ne(!0),D(t))},le=t=>{k.current=!0;const u=r.props;u.onTouchStart&&u.onTouchStart(t)},ce=D,pe=re,De=t=>{le(t),clearTimeout(h.current),clearTimeout(R.current),M(),g.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ee.current=setTimeout(()=>{document.body.style.WebkitUserSelect=g.current,D(t)},ge)},Oe=t=>{r.props.onTouchEnd&&r.props.onTouchEnd(t),M(),clearTimeout(h.current),h.current=setTimeout(()=>{P(t)},we)};n.useEffect(()=>{if(!d)return;function t(u){(u.key==="Escape"||u.key==="Esc")&&P(u)}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[P,d]);const Ne=B(Q,a),We=B(je,Ne),Be=B(r.ref,We);typeof x!="number"&&!x&&(d=!1);const O=n.useRef(null),Ae=t=>{const u=r.props;u.onMouseMove&&u.onMouseMove(t),C={x:t.clientX,y:t.clientY},O.current&&O.current.update()},y={},N=typeof x=="string";L?(y.title=!d&&N&&!V?x:null,y["aria-describedby"]=d?j:null):(y["aria-label"]=N?x:null,y["aria-labelledby"]=d&&!N?j:null);const c=b({},y,q,{component:m},r.props,{className:eo(v,r.props.className),onTouchStart:le,ref:Be},F?{onMouseMove:Ae}:{}),w={};Te||(c.onTouchStart=De,c.onTouchEnd=Oe),V||(c.onMouseOver=me(ce,c.onMouseOver),c.onMouseLeave=me(pe,c.onMouseLeave),_||(w.onMouseOver=ce,w.onMouseLeave=pe)),ve||(c.onFocus=he(ie,c.onFocus),c.onBlur=he(se,c.onBlur),_||(w.onFocus=ie,w.onBlur=se));const W=b({},s,{arrow:l,disableInteractive:_,placement:Z,touch:k.current,color:ze,variant:Me,size:Pe}),de=ho(W),ue=b({},q,{component:m,slots:$e,slotProps:Ee}),Ue=n.useMemo(()=>[{name:"arrow",enabled:!!I,options:{element:I,padding:6}},{name:"offset",options:{offset:[0,10]}},...G||[]],[I,G]),[Ve,He]=fe("root",{additionalProps:b({id:j,popperRef:O,placement:Z,anchorEl:F?{getBoundingClientRect:()=>({top:C.y,left:C.x,right:C.x,bottom:C.y,width:0,height:0})}:T,open:T?d:!1,disablePortal:Ce,keepMounted:Re,direction:ke,modifiers:Ue},w),ref:null,className:de.root,elementType:bo,externalForwardedProps:ue,ownerState:W}),[Je,Xe]=fe("arrow",{ref:Le,className:de.arrow,elementType:vo,externalForwardedProps:ue,ownerState:W});return p.jsxs(n.Fragment,{children:[n.isValidElement(r)&&n.cloneElement(r,c),p.jsxs(Ve,b({},He,!((i=s.slots)!=null&&i.root)&&{as:oo,slots:{root:m||"div"}},{children:[x,l?p.jsx(Je,b({},Xe)):null]}))]})}),ko=xo;f(io)`
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
    background-color: ${({theme:e})=>e.palette.primary.main};
    color: ${({theme:e})=>e.palette.background.default};
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;f(U)`
  color: ${({theme:e})=>e.palette.background.default};
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${({theme:e})=>e.palette.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.palette.primary.dark};
  }
`;const Ro=f("div")`
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
`,zo=f(ro)`
  height: 100%;
  border: 1px solid ${({theme:e})=>e.palette.neutral.softActiveColor};
  background-color: ${({theme:e})=>e.palette.main.bg};
  border-radius: 15px;  
  margin-top: 10px;
  padding: 20px;

`,Mo=f("thead")`
tr {
  th {
    position: sticky;
    left: 0;
    z-index: 2 !important;
    text-align: center;
    padding: 10px;
    border: none !important;

  }
  td {
    z-index: 1 !important;
  }
}
`,Po=f("tbody")`
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
    }
  }
`;f(lo)`
  // Add your styles for Checkbox here
`;f(co)`
  // Add your styles for ModalDialog here
`;const $o=f("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`,Eo=({count:e,page:o,rowsPerPage:a,onPageChange:i,onRowsPerPageChange:s})=>{const r=Math.ceil(e/a),v=l=>{l>=1&&l<=r&&i(l)},m=l=>{s(l)};return p.jsxs(ao,{direction:{xs:"column",sm:"row"},spacing:{xs:1,sm:2,md:4},alignItems:"center",sx:{marginTop:2},children:[p.jsxs(A,{children:["Page ",o," of ",r]}),p.jsx(U,{variant:"solid",color:"primary",onClick:()=>v(o-1),disabled:o===1,children:"Previous"}),p.jsx(U,{variant:"solid",color:"primary",onClick:()=>v(o+1),disabled:o===r,children:"Next"}),p.jsx(A,{children:"Rows per page:"}),p.jsx(po,{value:a,onChange:(l,L)=>m(L),children:[5,10,25,50,100].map(l=>p.jsx(uo,{value:l,children:p.jsx(A,{children:l})},l))})]})};export{Eo as C,Ro as H,Mo as T,$o as V,zo as a,Po as b,ko as c};
