import{r as a,U as b,u as R,j as e,C as N}from"./index-d3b06103.js";import{c as C}from"./react-41c6f046.js";import{H as P,T as _,a as D,b as w,S as v,c as y}from"./index.esm-87d22a49.js";import{T as S}from"./Table-4da1d017.js";import{C as m}from"./Chip-61747c2a.js";import"./ModalDialog-1b8aa38f.js";import"./useControlled-c0ad3f19.js";const A=()=>{const[r,x]=a.useState([]),[l,j]=a.useState(1),[o,c]=a.useState(5),i=a.useCallback(async()=>{const n=await b.getReservationListUser({page:l,pageSize:o});return x(n),n.data},[l,o]);return a.useEffect(()=>{},[i]),{reservation:r,page:l,rowsPerPage:o,handleChangePage:async n=>{j(n),await i()},handleChangeRowsPerPage:n=>{c(n),j(1),i()},fetchReservationList:i}};const k=C(r=>e.jsx("div",{className:"py-24 sm:py-32 md:py-40 relative d-flex justify-center align-items-center",style:r.v0,children:r.v1}),{name:"ReservationStatus_1",portals:["v1"]}),I=()=>{const{reservation:r,fetchReservationList:x}=A();a.useEffect(()=>{x()},[x]);const[l,j]=a.useState({}),{mode:o}=R(),[c,i]=a.useState([]),p=t=>{i(s=>s.includes(t)?s.filter(d=>d!==t):[...s,t]),j(s=>({...s,[t]:!s[t]}))},g=(t,s)=>{const d=(r==null?void 0:r.filter(h=>h.reservation_status===t))||[];return e.jsxs(e.Fragment,{children:[d.length>0?e.jsx("tr",{className:`text-center ${c.includes(t)?"expanded":""}`,children:e.jsx("th",{colSpan:7,className:"cursor-pointer",children:e.jsxs("div",{className:"d-flex justify-content-between p-3",style:{border:"1px solid",padding:5,borderRadius:"15px"},onClick:()=>p(t),children:[e.jsxs("div",{className:"d-flex gap-4 align-items-center",children:[e.jsx("span",{children:c.includes(t)?e.jsx(v,{}):e.jsx(y,{})}),e.jsx(m,{color:s,variant:"solid",children:t})]}),e.jsxs("span",{className:"text-success fw-bold",children:["Found Data ",t]})]})})},t):e.jsx("tr",{className:"text-center",children:e.jsx("th",{colSpan:7,className:"cursor-no-drop",children:e.jsxs("div",{className:"d-flex justify-content-between p-3",style:{border:"1px solid",padding:5,borderRadius:"15px"},children:[e.jsxs("div",{className:"d-flex gap-4 align-items-center",children:[e.jsx("span",{children:c.includes(t)?e.jsx(v,{}):e.jsx(y,{})}),e.jsx(m,{color:s,variant:"solid",children:t})]}),e.jsxs("span",{className:"text-danger fw-bold",children:["No data for ",t]})]})})},t),l[t]&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx(S,{children:e.jsx(w,{children:d.map((h,u)=>n(h,u))})})})})]})},n=(t,s)=>e.jsxs("tr",{className:"text-center",children:[e.jsx("th",{style:{width:100},children:s+1}),e.jsx("th",{style:{width:100},children:t.room_number}),e.jsx("th",{style:{width:100},children:t.reservation_reason}),e.jsx("th",{style:{width:100},children:e.jsx(m,{color:t.reservation_status.toString()==="Cancel"?"danger":t.reservation_status.toString()==="In progress"?"warning":"success",variant:"solid",size:"lg",children:t.reservation_status})}),e.jsx("th",{style:{width:100},children:f(t.reservation_date)}),e.jsx("th",{style:{width:100},children:t.start_time}),e.jsx("th",{style:{width:100},children:t.end_time})]},t.id||s),f=t=>{const s=new Date(t),d=s.getFullYear(),h=(s.getMonth()+1).toString().padStart(2,"0");return`${s.getDate().toString().padStart(2,"0")}/${h}/${d}`};return e.jsx(k,{v0:{width:"100%",height:"100vh",position:"relative",maxHeight:"calc(100vh - 0  px)",overflowY:"auto",...o==="dark"?{background:"linear-gradient(to bottom, #020420, #0F172A)"}:{background:"linear-gradient(to bottom, #AA96DA, #6962AD)"},padding:5},v1:e.jsx(N,{children:e.jsx(P,{children:e.jsx(_,{style:{overflowX:"auto",width:"100%",height:"100%",maxHeight:500,minWidth:650,padding:5},children:e.jsxs(S,{className:"table mb-0",borderAxis:"bothBetween",stickyHeader:!0,children:[e.jsxs(D,{children:[e.jsxs("tr",{children:[e.jsx("th",{style:{width:150},children:"No"}),e.jsx("th",{style:{width:150},children:"Room"}),e.jsx("th",{style:{width:150},children:"Detail"}),e.jsx("th",{style:{width:150},children:"Status"}),e.jsx("th",{style:{width:150},children:"Reservation Date"}),e.jsx("th",{style:{width:150},children:"Start time"}),e.jsx("th",{style:{width:150},children:"End time"})]}),e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{})]})]}),e.jsxs(w,{sx:{width:"100%",minWidth:650},children:[g("Success","success"),g("In progress","warning"),g("Cancel","danger")]})]})})})})})};export{I as default};