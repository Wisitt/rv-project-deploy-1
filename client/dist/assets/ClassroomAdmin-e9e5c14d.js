import{r as n,a7 as G,F as H,b as x,T as Y,j as e,B as k,S as J,o as K}from"./index-d3b06103.js";import{R as F}from"./RoomService-1dafd3c6.js";import{d as Q,a as V,D as Z}from"./WarningRounded-5f4a2c99.js";import{H as ee,a as te,T as se,b as ae,c as b,C as re}from"./Pagination-f3ae1c4f.js";import{S as le,O as U}from"./Select-ca67cd63.js";import{T as ne,C as L}from"./Table-4da1d017.js";import{M as de,D as oe,a as ie}from"./DialogActions-313f809b.js";import{M as ce}from"./ModalDialog-1b8aa38f.js";import{D as he}from"./DialogTitle-30adafd8.js";import"./createSvgIcon-5dd918b6.js";import"./styled-cc5b2fa7.js";import"./ownerWindow-427e1a7c.js";import"./useControlled-c0ad3f19.js";import"./useEventCallback-0e03fb6b.js";import"./cardOverflowClasses-8f8d0f9f.js";const xe=()=>{const[d,_]=n.useState(null),[i,f]=n.useState([]),[A,m]=n.useState(!1),[j,p]=n.useState([]),[E,C]=n.useState(!1),[P,D]=n.useState(1),[I,B]=n.useState(5),[N,S]=n.useState([]),[T,R]=n.useState(""),[y,z]=n.useState(!1),[c,g]=n.useState({class_id:"",subject_id:"",day_of_week:"",start_time:"",end_time:""}),w=s=>{const{name:l,value:W}=s.target;g(q=>({...q,[l]:W}))},M=async()=>{try{const s=await G.get("/admin/user/getteacherid");S(s.data)}catch(s){console.error("Error fetching teacher IDs:",s)}},O=(s,l)=>{R(l||"")},h=()=>{T&&F.getClassSchedule(T).then(s=>{p(s)}).catch(s=>{console.error("Error fetching class schedule:",s)})};return n.useEffect(()=>{M(),h()},[]),{page:P,rowsPerPage:I,timetableData:j,teacherIds:N,selectedUserId:T,selectAll:y,editClass:c,deleteDialogOpen:A,selectedItems:i,editDialogOpen:E,setEditClass:g,handleUserIdChange:O,handleFetchClassSchedule:h,handleSelectAll:()=>{z(!y),f(y?[]:j.map(s=>s.reservation_id))},setSelectedItems:f,handleDeleteConfirmed:async()=>{try{if(d!==null){await F.deleteClass(d);const s=j.filter(l=>l.reservation_id!==d);p(s),_(null),H.success("Class deleted successfully")}else{await Promise.all(i.map(async l=>F.deleteClass(l)));const s=j.filter(l=>!i.includes(l.reservation_id));p(s),f([]),H.success("Class deleted successfully")}h(),m(!1)}catch(s){console.error("Error deleting class:",s)}},handleCheckboxChange:s=>{f(l=>l.includes(s)?l.filter(W=>W!==s):[...l,s])},handleEditConfirmed:async()=>{if(c){try{const s={id:"",class_id:"",reservation_id:"",subject_name:"",fullname:"",room_number:"",day_of_week:c.day_of_week,start_time:c.start_time,end_time:c.end_time,subject_id:c.subject_id},l=await F.updateClass(c.class_id,s);l.status===200?(console.log("Subject updated successfully:",l.data),g({class_id:"",subject_id:"",day_of_week:"",start_time:"",end_time:""})):console.error("Failed to update subject:",l.data)}catch(s){console.error("Error updating subject:",s)}await h(),C(!1)}},handleDelete:async s=>{h(),_(s),m(!0)},handleDeleteAll:()=>{m(!0)},handleEdit:s=>{g(s),C(!0)},setEditDialogOpen:C,handleCloseEditDialog:()=>{g({class_id:"",subject_id:"",day_of_week:"",start_time:"",end_time:""}),C(!1)},handleCloseDeleteDialog:()=>{m(!1)},handleChangePage:async s=>{D(s),await h()},handleChangeRowsPerPage:s=>{B(s),D(1),h()},handleInputEditChangeClass:w}},ue=x("div")`
  margin: 20px auto;
  text-align: center;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.2px);
  -webkit-backdrop-filter: blur(1.2px);
  border: 1px solid rgba(255, 255, 255, 0.01);
`,pe=x("div")`
  margin:10px;
  margin-top:0px;
  text-align: center;
  width: 98%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.2px);
  -webkit-backdrop-filter: blur(1.2px);
  border: 1px solid rgba(255, 255, 255, 0.01);
`,ge=x(Y)`
  margin-top:10px;
  font-size: 20px;
  color: ${({theme:d})=>d.palette.pf.color};
`,be=x("table")`
  border-collapse: collapse;
  width: 100%;
  border-radius: 16px;
`,fe=x("th")`
  color: black;
  height: 50px;
  text-align: center;
  background-color: #f2f2f2;
  border-top-left-radius: 16px;
  
`,me=x("td")`
  color: black;
  border: 1px solid black;
  border-left: none;
  border-bottom: none;
  ${d=>d.day==="Sunday"&&`
  &:first-child {
    border-bottom-left-radius: 16px;
  }
`}

  text-align: center;
  width: 100px;
  background: ${({day:d})=>{switch(d){case"Monday":return"linear-gradient(to right, #DCFFB7, #FFEAA7)";case"Tuesday":return"linear-gradient(to right, #FF90BC, #FFC0D9)";case"Wednesday":return"linear-gradient(to right, #BFEA7C, #9BCF53)";case"Thursday":return"linear-gradient(to right, #ffcc99, #FFA07A)";case"Friday":return"linear-gradient(to right, #87CEEB, #40A2D8)";case"Saturday":return"linear-gradient(to right, #b06ae6, #C499F3)";case"Sunday":return"linear-gradient(to right, #EF6262, #FF8989)";default:return"linear-gradient(to right, #f2f2f2, #d9d9d9)"}}};
  @media (max-width: 600px) {
    width: 70px; // Adjust width for smaller screens
  }
`,je=x("td")`
  color: black;
  border: 1px solid black;
  border-bottom: none;
  border-left: none;
  &:last-child {
    border-right: none;
  }
  text-align: center;
  width: 120px;
  background-color: #fff;

  @media (max-width: 600px) {
    width: 120px;
  }

  &:hover {
    transform: scale(1.3);
    border-radius:10px;
    z-index:2;
  }
`,X=x("div")`
  overflow-x: auto;
  
`,Ce=x("th")`
  color: black;
  border-left: 1px solid black;
  border-bottom: none;
  height: 50px;
  text-align: center;
  background-color: #f2f2f2;
  font-size: 12px;
  &:last-child {
    border-top-right-radius: 16px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
  
`,We=()=>{const{page:d,rowsPerPage:_,timetableData:i,teacherIds:f,selectedUserId:A,selectAll:m,deleteDialogOpen:j,selectedItems:p,handleUserIdChange:E,handleFetchClassSchedule:C,handleSelectAll:P,handleDeleteConfirmed:D,handleCheckboxChange:I,handleDelete:B,handleDeleteAll:N,handleCloseDeleteDialog:S,handleChangePage:T,handleChangeRowsPerPage:R}=xe(),[y,z]=n.useState({Monday:"#FFFF99",Tuesday:"#FFC0CB",Wednesday:"#99ff99",Thursday:"#ffcc99",Friday:"#87CEEB",Saturday:"#b06ae6",Sunday:"#ff6978"}),c=()=>{const t="08:00:00",a="18:00:00",o=[];let r=t;for(;r<a;)o.push({start:r,end:w(r)}),r=w(r);return o},g=()=>{const t="08:00:00",a="18:00:00",o=[];let r=t;for(;r<a;)o.push({start:r.slice(0,5),end:w(r).slice(0,5)}),r=w(r);return o},w=t=>{const[a,o,r]=t.split(":").map(Number);return new Date(0,0,0,a,o,r+60*60).toTimeString().slice(0,8)},M=c(),O=g(),h=()=>{const t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];return e.jsx(e.Fragment,{children:t.map(a=>e.jsxs("tr",{children:[e.jsx(me,{day:a,style:{height:"50px",padding:"10px"},children:e.jsx("b",{children:a})},a),M.map(o=>{const r=i.filter(u=>u.day_of_week===a&&u.start_time===o.start),v=r.length;return e.jsx(je,{colSpan:v>0?v:1,children:r.map(u=>e.jsxs("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{width:"100%",height:"100%",backgroundColor:y[u.day_of_week],textAlign:"center",padding:5},children:[e.jsx("div",{style:{width:"120px"},children:e.jsxs("span",{className:"text-dark fw-bold",style:{fontSize:"12px"},children:["วิชา : ",u.subject_name]})}),e.jsx("div",{style:{width:"120px"},children:e.jsxs("span",{className:"text-dark fw-bold",style:{fontSize:"12px"},children:["ห้อง : ",u.room_number]})})]},u.reservation_id))},`${a}-${o.start}`)})]},a))})};n.useEffect(()=>{const t={...y};i.forEach(a=>{t[a.day_of_week]=$(a.day_of_week)}),z(t)},[i]);const $=t=>{switch(t){case"Monday":return"#FFFF99";case"Tuesday":return"#FFC0CB";case"Wednesday":return"#99ff99";case"Thursday":return"#ffcc99";case"Friday":return"#87CEEB";case"Saturday":return"#b06ae6";case"Sunday":return"#ff6978";default:return"#f2f2f2"}};return e.jsxs(e.Fragment,{children:[e.jsxs(ue,{children:[e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:10},children:[e.jsx(ge,{children:i.length>0?i[0].fullname:"-"}),e.jsxs("div",{style:{width:"100%",marginBottom:10},className:"d-flex justify-center align-items-center gap-4",children:[e.jsx(Y,{level:"title-md",children:"Select User: "}),e.jsxs(le,{value:A,onChange:E,variant:"solid",color:"primary",children:[e.jsx(U,{value:"",disabled:!0,children:"Select a teacher"}),f.map(t=>e.jsx(U,{value:t.id,children:t.firstname},t==null?void 0:t.id))]}),e.jsx(k,{onClick:C,children:"Fetch Class Schedule"})]})]}),e.jsx(X,{children:e.jsx(pe,{children:e.jsx(X,{children:e.jsxs(be,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(fe,{children:e.jsx("b",{children:"Day/Period"})}),O.map(t=>e.jsx(Ce,{children:e.jsx("b",{children:`${t.start} - ${t.end}`})},t.start))]})}),e.jsx("tbody",{children:h()})]})})})})]}),e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsxs(J,{sx:{"--TableCell-height":"40px","--TableHeader-height":"calc(1 * var(--TableCell-height))","--Table-firstColumnWidth":"80px","--Table-lastColumnWidth":"144px","--TableRow-stripeBackground":"rgba(0 0 0 / 0.04)","--TableRow-hoverBackground":"rgba(0 0 0 / 0.08)",height:370,overflow:"auto",backgroundColor:"nav.bg"},children:[e.jsxs(ne,{className:"table mb-0",borderAxis:"bothBetween",stickyHeader:!0,hoverRow:!0,sx:{"--Table-headerUnderlineThickness":"1px","--TableCell-paddingX":"10px","--TableCell-paddingY":"7px","& tr > *:first-of-type":{position:"sticky",zIndex:1,left:0,boxShadow:"1px 0 var(--TableCell-borderColor)"},"& tr > *:last-child":{position:"sticky",right:0,bgcolor:"var(--TableCell-headBackground)"}},children:[e.jsxs(se,{children:[e.jsxs("tr",{children:[e.jsx("th",{style:{width:100},children:"No"}),e.jsx("th",{style:{width:100},children:"Class Id"}),e.jsx("th",{style:{width:100},children:"Name"}),e.jsx("th",{style:{width:100},children:"Room"}),e.jsx("th",{style:{width:150},children:"Teacher"}),e.jsx("th",{style:{width:100},children:"Day"}),e.jsx("th",{style:{width:100},children:"Start Time"}),e.jsx("th",{style:{width:100},children:"End Time"}),e.jsx("th",{style:{width:100},children:"Select"}),e.jsx("th",{style:{width:100},children:"Action"})]}),e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{children:e.jsx(L,{checked:m,onChange:P,color:"primary",disabled:!1,size:"md"},"selectAllCheckbox")}),e.jsx("th",{})]})]}),e.jsx(ae,{children:i.map((t,a)=>e.jsxs("tr",{className:"text-center",children:[e.jsx("th",{children:(d-1)*_+a+1}),e.jsx("th",{children:e.jsx(b,{title:t.reservation_id,arrow:!0,children:e.jsx("span",{children:t.reservation_id})})}),e.jsx("th",{children:e.jsx(b,{title:t.subject_name,arrow:!0,children:e.jsx("span",{children:t.subject_name})})}),e.jsx("th",{children:e.jsx(b,{title:t.room_number,arrow:!0,children:e.jsx("span",{children:t.room_number})})}),e.jsx("th",{children:e.jsx(b,{title:t.fullname,arrow:!0,children:e.jsx("span",{children:t.fullname})})}),e.jsx("th",{children:e.jsx(b,{title:t.day_of_week,arrow:!0,children:e.jsx("span",{children:t.day_of_week})})}),e.jsx("th",{children:e.jsx(b,{title:t.start_time,arrow:!0,children:e.jsx("span",{children:t.start_time})})}),e.jsx("th",{children:e.jsx(b,{title:t.end_time,arrow:!0,children:e.jsx("span",{children:t.end_time})})}),e.jsx("th",{children:e.jsx(L,{checked:p.includes(t.reservation_id),onChange:()=>I(t.reservation_id),color:"primary",disabled:!1,size:"md"})}),e.jsx("th",{children:e.jsx(K,{sx:{display:"flex",gap:1,justifyContent:"center",alignItems:"center"},children:e.jsx(k,{color:"danger",variant:"solid",endDecorator:e.jsx(Q,{}),onClick:()=>B(t.reservation_id),className:"delete",children:"Delete"})})})]},(t==null?void 0:t.id)||a))})]}),e.jsx(de,{open:j,onClose:S,children:e.jsxs(ce,{variant:"outlined",role:"alertdialog",color:"danger",sx:{borderWidth:"3px"},children:[e.jsxs(he,{color:"danger",variant:"plain",level:"body-lg",children:[e.jsx(V,{}),"Confirmation"]}),e.jsx(Z,{}),e.jsx(oe,{children:p.length>1?"Are you sure you want to delete all selected subjects?":"Are you sure you want to delete the selected subject?"}),e.jsxs(ie,{children:[e.jsx(k,{variant:"solid",color:"neutral",onClick:S,children:"Cancel"}),e.jsx(k,{variant:"solid",color:"danger",onClick:D,children:"Confirm Delete"})]})]})})]}),e.jsx("div",{className:"pagination-container",children:e.jsx(re,{count:100,page:d,rowsPerPage:_,onPageChange:T,onRowsPerPageChange:R})})]}),e.jsx("div",{className:"card-footer",children:e.jsx("div",{className:"this-btn d-flex justify-center align-center gap-2",children:e.jsx(k,{sx:{width:"150px",padding:"15px !important",":hover":{boxShadow:"0 1px 20px 1px #A04C4C",border:"1px solid #A04C4C"}},id:"delete",color:"danger",variant:"solid",className:"text-red p-2",onClick:N,disabled:p.length===0,children:"Delete All"})})})]})]})};export{We as default};
