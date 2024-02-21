import{J as Ze,K as qe,P as he,_ as h,r as n,X as Ge,Y as Qe,ab as eo,aE as oo,a8 as W,b as to,Z as me,j as p,aI as ro,af as M,$ as ao,d as m,B as U,S as ge,y as no,T as A}from"./index-bd07fbd0.js";import{u as so}from"./useControlled-138fc601.js";import{u as io}from"./useEventCallback-469884d9.js";import{T as lo}from"./Table-8b23f94b.js";import{O as xe,S as co}from"./Select-9b9debbb.js";function po(e){return Ze("MuiTooltip",e)}qe("MuiTooltip",["root","tooltipArrow","arrow","touch","placementLeft","placementRight","placementTop","placementBottom","colorPrimary","colorDanger","colorNeutral","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);const uo=["children","className","component","arrow","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","disablePortal","direction","keepMounted","modifiers","placement","title","color","variant","size","slots","slotProps"],mo=e=>{const{arrow:o,variant:a,color:i,size:s,placement:r,touch:g}=e,f={root:["root",o&&"tooltipArrow",g&&"touch",s&&`size${M(s)}`,i&&`color${M(i)}`,a&&`variant${M(a)}`,`tooltipPlacement${M(r.split("-")[0])}`],arrow:["arrow"]};return ao(f,po,{})},fo=he("div",{name:"JoyTooltip",slot:"Root",overridesResolver:(e,o)=>o.root})(({ownerState:e,theme:o})=>{var a,i,s;const r=(a=o.variants[e.variant])==null?void 0:a[e.color];return h({},e.size==="sm"&&{"--Icon-fontSize":o.vars.fontSize.md,"--Tooltip-arrowSize":"8px",padding:o.spacing(.25,.625)},e.size==="md"&&{"--Icon-fontSize":o.vars.fontSize.lg,"--Tooltip-arrowSize":"10px",padding:o.spacing(.5,.75)},e.size==="lg"&&{"--Icon-fontSize":o.vars.fontSize.xl,"--Tooltip-arrowSize":"12px",padding:o.spacing(.75,1)},{zIndex:o.vars.zIndex.tooltip,borderRadius:o.vars.radius.sm,boxShadow:o.shadow.sm,wordWrap:"break-word",position:"relative"},e.disableInteractive&&{pointerEvents:"none"},o.typography[`body-${{sm:"xs",md:"sm",lg:"md"}[e.size]}`],r,!r.backgroundColor&&{backgroundColor:o.vars.palette.background.surface},{"&::before":{content:'""',display:"block",position:"absolute",width:(i=e.placement)!=null&&i.match(/(top|bottom)/)?"100%":"calc(10px + var(--variant-borderWidth, 0px))",height:(s=e.placement)!=null&&s.match(/(top|bottom)/)?"calc(10px + var(--variant-borderWidth, 0px))":"100%"},'&[data-popper-placement*="bottom"]::before':{top:0,left:0,transform:"translateY(-100%)"},'&[data-popper-placement*="left"]::before':{top:0,right:0,transform:"translateX(100%)"},'&[data-popper-placement*="right"]::before':{top:0,left:0,transform:"translateX(-100%)"},'&[data-popper-placement*="top"]::before':{bottom:0,left:0,transform:"translateY(100%)"}})}),bo=he("span",{name:"JoyTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e,ownerState:o})=>{var a,i,s;const r=(a=e.variants[o.variant])==null?void 0:a[o.color];return{"--unstable_Tooltip-arrowRotation":0,width:"var(--Tooltip-arrowSize)",height:"var(--Tooltip-arrowSize)",boxSizing:"border-box","&:before":{content:'""',display:"block",position:"absolute",width:0,height:0,border:"calc(var(--Tooltip-arrowSize) / 2) solid",borderLeftColor:"transparent",borderBottomColor:"transparent",borderTopColor:(i=r==null?void 0:r.backgroundColor)!=null?i:e.vars.palette.background.surface,borderRightColor:(s=r==null?void 0:r.backgroundColor)!=null?s:e.vars.palette.background.surface,borderRadius:"0px 2px 0px 0px",boxShadow:`var(--variant-borderWidth, 0px) calc(-1 * var(--variant-borderWidth, 0px)) 0px 0px ${r.borderColor}`,transformOrigin:"center center",transform:"rotate(calc(-45deg + 90deg * var(--unstable_Tooltip-arrowRotation)))"},'[data-popper-placement*="bottom"] &':{top:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="top"] &':{"--unstable_Tooltip-arrowRotation":2,bottom:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="left"] &':{"--unstable_Tooltip-arrowRotation":1,right:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"},'[data-popper-placement*="right"] &':{"--unstable_Tooltip-arrowRotation":3,left:"calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"}}});let E=!1,k=null,S={x:0,y:0};function fe(e,o){return a=>{o&&o(a),e(a)}}function be(e,o){return a=>{o&&o(a),e(a)}}const ho=n.forwardRef(function(o,a){var i;const s=Ge({props:o,name:"JoyTooltip"}),{children:r,className:g,component:f,arrow:l=!1,describeChild:I=!1,disableFocusListener:ve=!1,disableHoverListener:V=!1,disableInteractive:Te=!1,disableTouchListener:ye=!1,enterDelay:H=100,enterNextDelay:J=0,enterTouchDelay:we=700,followCursor:j=!1,id:ke,leaveDelay:X=0,leaveTouchDelay:Se=1500,onClose:Y,onOpen:K,open:Ce,disablePortal:ze,direction:Re,keepMounted:$e,modifiers:Z,placement:q="bottom",title:x,color:Pe="neutral",variant:Me="solid",size:Ee="md",slots:Ie={},slotProps:je={}}=s,G=Qe(s,uo),[v,Q]=n.useState(),[L,Le]=n.useState(null),C=n.useRef(!1),O=Te||j,z=n.useRef(),R=n.useRef(),b=n.useRef(),ee=n.useRef(),[Oe,oe]=so({controlled:Ce,default:!1,name:"Tooltip",state:"open"});let d=Oe;const F=eo(ke),T=n.useRef(),$=n.useCallback(()=>{T.current!==void 0&&(document.body.style.WebkitUserSelect=T.current,T.current=void 0),clearTimeout(ee.current)},[]);n.useEffect(()=>()=>{clearTimeout(z.current),clearTimeout(R.current),clearTimeout(b.current),$()},[$]);const te=t=>{k&&clearTimeout(k),E=!0,oe(!0),K&&!d&&K(t)},P=io(t=>{k&&clearTimeout(k),k=setTimeout(()=>{E=!1},800+X),oe(!1),Y&&d&&Y(t),clearTimeout(z.current),z.current=setTimeout(()=>{C.current=!1},150)}),_=t=>{C.current&&t.type!=="touchstart"||(v&&v.removeAttribute("title"),clearTimeout(R.current),clearTimeout(b.current),H||E&&J?R.current=setTimeout(()=>{te(t)},E?J:H):te(t))},re=t=>{clearTimeout(R.current),clearTimeout(b.current),b.current=setTimeout(()=>{P(t)},X)},{isFocusVisibleRef:ae,onBlur:Fe,onFocus:_e,ref:De}=oo(),[,ne]=n.useState(!1),se=t=>{Fe(t),ae.current===!1&&(ne(!1),re(t))},ie=t=>{v||Q(t.currentTarget),_e(t),ae.current===!0&&(ne(!0),_(t))},le=t=>{C.current=!0;const u=r.props;u.onTouchStart&&u.onTouchStart(t)},ce=_,pe=re,Be=t=>{le(t),clearTimeout(b.current),clearTimeout(z.current),$(),T.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ee.current=setTimeout(()=>{document.body.style.WebkitUserSelect=T.current,_(t)},we)},Ne=t=>{r.props.onTouchEnd&&r.props.onTouchEnd(t),$(),clearTimeout(b.current),b.current=setTimeout(()=>{P(t)},Se)};n.useEffect(()=>{if(!d)return;function t(u){(u.key==="Escape"||u.key==="Esc")&&P(u)}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[P,d]);const We=W(Q,a),Ae=W(De,We),Ue=W(r.ref,Ae);typeof x!="number"&&!x&&(d=!1);const D=n.useRef(null),Ve=t=>{const u=r.props;u.onMouseMove&&u.onMouseMove(t),S={x:t.clientX,y:t.clientY},D.current&&D.current.update()},y={},B=typeof x=="string";I?(y.title=!d&&B&&!V?x:null,y["aria-describedby"]=d?F:null):(y["aria-label"]=B?x:null,y["aria-labelledby"]=d&&!B?F:null);const c=h({},y,G,{component:f},r.props,{className:to(g,r.props.className),onTouchStart:le,ref:Ue},j?{onMouseMove:Ve}:{}),w={};ye||(c.onTouchStart=Be,c.onTouchEnd=Ne),V||(c.onMouseOver=fe(ce,c.onMouseOver),c.onMouseLeave=fe(pe,c.onMouseLeave),O||(w.onMouseOver=ce,w.onMouseLeave=pe)),ve||(c.onFocus=be(ie,c.onFocus),c.onBlur=be(se,c.onBlur),O||(w.onFocus=ie,w.onBlur=se));const N=h({},s,{arrow:l,disableInteractive:O,placement:q,touch:C.current,color:Pe,variant:Me,size:Ee}),de=mo(N),ue=h({},G,{component:f,slots:Ie,slotProps:je}),He=n.useMemo(()=>[{name:"arrow",enabled:!!L,options:{element:L,padding:6}},{name:"offset",options:{offset:[0,10]}},...Z||[]],[L,Z]),[Je,Xe]=me("root",{additionalProps:h({id:F,popperRef:D,placement:q,anchorEl:j?{getBoundingClientRect:()=>({top:S.y,left:S.x,right:S.x,bottom:S.y,width:0,height:0})}:v,open:v?d:!1,disablePortal:ze,keepMounted:$e,direction:Re,modifiers:He},w),ref:null,className:de.root,elementType:fo,externalForwardedProps:ue,ownerState:N}),[Ye,Ke]=me("arrow",{ref:Le,className:de.arrow,elementType:bo,externalForwardedProps:ue,ownerState:N});return p.jsxs(n.Fragment,{children:[n.isValidElement(r)&&n.cloneElement(r,c),p.jsxs(Je,h({},Xe,!((i=s.slots)!=null&&i.root)&&{as:ro,slots:{root:f||"div"}},{children:[x,l?p.jsx(Ye,h({},Ke)):null]}))]})}),wo=ho;m(lo)`
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
`;m(U)`
  color: ${({theme:e})=>e.palette.background.default};
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  background-color: ${({theme:e})=>e.palette.primary.main};

  &:hover {
    background-color: ${({theme:e})=>e.palette.primary.dark};
  }
`;const ko=m("div")`
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
`,So=m(ge)`
  height: 100%;
  border: 1px solid ${({theme:e})=>e.palette.neutral.softActiveColor};
  background-color: ${({theme:e})=>e.palette.main.bg};
  border-radius: 15px;  
  margin-top: 10px;
  padding: 20px;

`,Co=m("thead")`
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
`,zo=m("tbody")`
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
`,Ro=m(xe)`
    color: ${({theme:e})=>e.palette.pf.color};
    background-color: ${({theme:e})=>e.palette.background.backdrop};
`,$o=m("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`,Po=m(ge)`
    border-radius: 12px;
    color: ${({theme:e})=>e.palette.common.white};
    border-color: ${({theme:e})=>e.palette.common.white};
    background-color: ${({theme:e})=>e.palette.background.backdrop};

    width: 200px;
    height: 38px;

    .MuiInputBase-root {
        border-radius: 12px;
        height: 38px;
        color: ${({theme:e})=>e.palette.pf.color};
    }
    
    .MuiSvgIcon-root {
        // background-image: url('https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Tear-Off%20Calendar.png');
        background-size: cover;
        width: 25px;
        height: 25px;
        path {
            display: none;
        }
    }
`,Mo=({count:e,page:o,rowsPerPage:a,onPageChange:i,onRowsPerPageChange:s})=>{const r=Math.ceil(e/a),g=l=>{l>=1&&l<=r&&i(l)},f=l=>{s(l)};return p.jsxs(no,{direction:{xs:"column",sm:"row"},spacing:{xs:1,sm:2,md:4},alignItems:"center",sx:{marginTop:2},children:[p.jsxs(A,{children:["Page ",o," of ",r]}),p.jsx(U,{variant:"solid",color:"primary",onClick:()=>g(o-1),disabled:o===1,children:"Previous"}),p.jsx(U,{variant:"solid",color:"primary",onClick:()=>g(o+1),disabled:o===r,children:"Next"}),p.jsx(A,{children:"Rows per page:"}),p.jsx(co,{value:a,onChange:(l,I)=>f(I),children:[5,10,25,50,100].map(l=>p.jsx(xe,{value:l,children:p.jsx(A,{children:l})},l))})]})};export{Mo as C,Po as D,ko as H,Ro as O,Co as T,$o as V,So as a,zo as b,wo as c};
