import{r as l,a1 as A,G as le,d as x,T as ae,j as e,B as T,S as ye,p as Ce}from"./index-bd07fbd0.js";import{R as I}from"./RoomService-c8fe411e.js";import{d as we,a as _e,D as Se}from"./WarningRounded-425b6d8a.js";import{O as L,H as ve,a as Te,T as ke,b as De,c as y,C as Fe}from"./Pagination-e67015c6.js";import{G as oe}from"./Grid-cc899c58.js";import{F as ne,D as Re,a as Ee}from"./DialogActions-cb15ede7.js";import{S as re}from"./Select-9b9debbb.js";import{T as Ae,C as de}from"./Table-8b23f94b.js";import{M as Ie}from"./Modal-47ea7b4d.js";import{M as Ne}from"./ModalDialog-cb89a8c8.js";import{D as Pe}from"./DialogTitle-138756e8.js";import"./createSvgIcon-d571b62c.js";import"./styled-ee573952.js";import"./ownerWindow-ac4bdde2.js";import"./useControlled-138fc601.js";import"./useEventCallback-469884d9.js";import"./FormControlContext-cf683adc.js";import"./cardOverflowClasses-6b415049.js";const Be=()=>{const[c,k]=l.useState(null),[m,i]=l.useState([]),[W,C]=l.useState(!1),[w,D]=l.useState([]),[M,F]=l.useState([]),[O,_]=l.useState(!1),[U,N]=l.useState(1),[H,G]=l.useState(5),[X,P]=l.useState([]),[Y,q]=l.useState([]),[J,K]=l.useState([]),[Q,V]=l.useState([]),[R,S]=l.useState(""),[g,B]=l.useState(""),[p,v]=l.useState(""),[E,Z]=l.useState(!1),[h,b]=l.useState({class_id:"",subject_id:"",day_of_week:"",start_time:"",end_time:""}),[f,ee]=l.useState(null),[$,te]=l.useState([]),t=s=>{const{name:a,value:se}=s.target;b(je=>({...je,[a]:se}))},r=async()=>{try{const s=await A.get("/admin/user/getteacherid");P(s.data)}catch(s){console.error("Error fetching teacher IDs:",s)}},d=(s,a)=>{S(a||"")},o=(s,a)=>{B(a||"")},u=(s,a)=>{v(a||"")},n=async()=>{if(R)try{const s=await A.get(`/admin/room/getroomnumber/${R}`);console.log("Room Numbers Response:",s.data),q(s.data)}catch(s){console.error("Error fetching room numbers:",s)}};l.useEffect(()=>{(async()=>{try{const a=await A.get("/admin/room/getroomlevel");K(a.data.roomlevel)}catch(a){console.error("Error fetching room types:",a)}})()},[]);const j=async()=>{try{if(console.log("Selected User ID:",g),g){const s=await I.getClassSchedule(g);console.log("Class schedule response:",s),D(s)}}catch(s){console.error("Error fetching class schedule or room numbers:",s)}},be=async()=>{try{if(console.log("Selected Room ID:",p),p){const s=await I.getClassScheduleRoom(p);console.log("Class schedule response:",s),F(s)}}catch(s){console.error("Error fetching class schedule:",s)}};l.useEffect(()=>{r(),fe(),j()},[]);const fe=async()=>{try{const s=await A.get(`/admin/room/getroomnumber/${f}`);V(s.data)}catch(s){console.error("Error fetching room levels:",s)}};return l.useEffect(()=>{f&&(async()=>{if(f)try{const a=await A.get(`/admin/room/getroomnumber/${f}`);te(a.data)}catch(a){console.error("Error fetching room numbers:",a)}})()},[f]),{page:U,rowsPerPage:H,timetableData:w,teacherIds:X,selectedUserId:g,selectedRoomId:p,selectAll:E,editClass:h,deleteDialogOpen:W,selectedItems:m,editDialogOpen:O,availableFloorsApi:J,setEditClass:b,handleUserIdChange:o,handleFetchClassSchedule:j,handleSelectAll:()=>{Z(!E),i(E?[]:w.map(s=>s.reservation_id))},setSelectedItems:i,handleDeleteConfirmed:async()=>{try{if(c!==null){await I.deleteClass(c);const s=w.filter(a=>a.reservation_id!==c);D(s),k(null),le.success("Class deleted successfully")}else{await Promise.all(m.map(async a=>I.deleteClass(a)));const s=w.filter(a=>!m.includes(a.reservation_id));D(s),i([]),le.success("Class deleted successfully")}j(),C(!1)}catch(s){console.error("Error deleting class:",s)}},handleCheckboxChange:s=>{i(a=>a.includes(s)?a.filter(se=>se!==s):[...a,s])},handleEditConfirmed:async()=>{if(h){try{const s={id:"",class_id:"",reservation_id:"",subject_name:"",fullname:"",room_number:"",day_of_week:h.day_of_week,start_time:h.start_time,end_time:h.end_time,subject_id:h.subject_id},a=await I.updateClass(h.class_id,s);a.status===200?(console.log("Subject updated successfully:",a.data),b({class_id:"",subject_id:"",day_of_week:"",start_time:"",end_time:""})):console.error("Failed to update subject:",a.data)}catch(s){console.error("Error updating subject:",s)}await j(),_(!1)}},handleDelete:async s=>{j(),k(s),C(!0)},handleDeleteAll:()=>{C(!0)},handleEdit:s=>{b(s),_(!0)},setEditDialogOpen:_,handleCloseEditDialog:()=>{b({class_id:"",subject_id:"",day_of_week:"",start_time:"",end_time:""}),_(!1)},handleCloseDeleteDialog:()=>{C(!1)},handleChangePage:async s=>{N(s),await j()},handleChangeRowsPerPage:s=>{G(s),N(1),j()},handleInputEditChangeClass:t,handleRoomNumberChange:u,timetableDataRoom:M,roomnumber:$,setSelectedFloor:ee,handleFetchClassScheduleRoom:be,roomLevels:Q,selectedRoomLevel:R,handleRoomLevelChange:d,roomNumbers:Y,handleFetchRoomNumbers:n}},ce=x("div")`
  margin: 20px auto;
  text-align: center;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.2px);
  -webkit-backdrop-filter: blur(1.2px);
  border: 1px solid ${({theme:c})=>c.palette.neutral.softActiveColor};

`,ie=x("div")`
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
`,he=x(ae)`
  margin-top:10px;
  font-size: 20px;
  color: ${({theme:c})=>c.palette.pf.color};
`,xe=x("table")`
  border-collapse: collapse;
  width: 100%;
  border-radius: 16px;
`,ue=x("th")`
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
  ${c=>c.day==="Sunday"&&`
  &:first-child {
    border-bottom-left-radius: 16px;
  }
`}

  text-align: center;
  width: 100px;
  background: ${({day:c})=>{switch(c){case"Monday":return"linear-gradient(to right, #DCFFB7, #FFEAA7)";case"Tuesday":return"linear-gradient(to right, #FF90BC, #FFC0D9)";case"Wednesday":return"linear-gradient(to right, #BFEA7C, #9BCF53)";case"Thursday":return"linear-gradient(to right, #ffcc99, #FFA07A)";case"Friday":return"linear-gradient(to right, #87CEEB, #40A2D8)";case"Saturday":return"linear-gradient(to right, #b06ae6, #C499F3)";case"Sunday":return"linear-gradient(to right, #EF6262, #FF8989)";default:return"linear-gradient(to right, #f2f2f2, #d9d9d9)"}}};
  @media (max-width: 600px) {
    width: 70px; // Adjust width for smaller screens
  }
`,ge=x("td")`
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
`,z=x("div")`
  overflow-x: auto;
  
`,pe=x("th")`
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
  
`,xt=()=>{const{page:c,rowsPerPage:k,timetableDataRoom:m,timetableData:i,teacherIds:W,selectedUserId:C,selectedRoomId:w,selectAll:D,deleteDialogOpen:M,selectedItems:F,handleUserIdChange:O,handleFetchClassSchedule:_,handleSelectAll:U,handleDeleteConfirmed:N,handleCheckboxChange:H,handleDelete:G,handleDeleteAll:X,handleCloseDeleteDialog:P,handleChangePage:Y,handleChangeRowsPerPage:q,handleRoomNumberChange:J,roomnumber:K,setSelectedFloor:Q,availableFloorsApi:V,handleFetchClassScheduleRoom:R}=Be(),[S,g]=l.useState({Monday:"#FFFF99",Tuesday:"#FFC0CB",Wednesday:"#99ff99",Thursday:"#ffcc99",Friday:"#87CEEB",Saturday:"#b06ae6",Sunday:"#ff6978"}),B=()=>{const t="08:00:00",r="18:00:00",d=[];let o=t;for(;o<r;)d.push({start:o,end:v(o)}),o=v(o);return d},p=()=>{const t="08:00:00",r="18:00:00",d=[];let o=t;for(;o<r;)d.push({start:o.slice(0,5),end:v(o).slice(0,5)}),o=v(o);return d},v=t=>{const[r,d,o]=t.split(":").map(Number);return new Date(0,0,0,r,d,o+60*60).toTimeString().slice(0,8)},E=B(),Z=B(),h=p(),b=p(),f=()=>{const t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];return e.jsx(e.Fragment,{children:t.map(r=>e.jsxs("tr",{children:[e.jsx(me,{day:r,style:{height:"50px",padding:"10px"},children:e.jsx("b",{children:r})},r),E.map(d=>{const o=i.filter(n=>n.day_of_week===r&&n.start_time===d.start),u=o.length;return e.jsx(ge,{colSpan:u>0?u:1,children:o.map(n=>e.jsxs("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{width:"100%",height:"100%",backgroundColor:S[n.day_of_week],textAlign:"center",padding:5},children:[e.jsx("div",{style:{width:"120px"},children:e.jsxs("span",{className:"text-dark fw-bold",style:{fontSize:"12px"},children:["วิชา : ",n.subject_name]})}),e.jsx("div",{style:{width:"120px"},children:e.jsxs("span",{className:"text-dark fw-bold",style:{fontSize:"12px"},children:["ห้อง : ",n.room_number]})})]},n.reservation_id))},`${r}-${d.start}`)})]},r))})},ee=()=>{const t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];return e.jsx(e.Fragment,{children:t.map(r=>e.jsxs("tr",{children:[e.jsx(me,{day:r,style:{height:"50px",padding:"10px"},children:e.jsx("b",{children:r})},r),Z.map(d=>{const o=m.filter(n=>n.day_of_week===r&&n.start_time===d.start),u=o.length;return e.jsx(ge,{colSpan:u>0?u:1,children:o.map(n=>e.jsxs("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{width:"100%",height:"100%",backgroundColor:S[n.day_of_week],textAlign:"center",padding:5},children:[e.jsx("div",{style:{width:"120px"},children:e.jsxs("span",{className:"text-dark fw-bold",style:{fontSize:"12px"},children:["วิชา : ",n.subject_name]})}),e.jsx("div",{style:{width:"120px"},children:e.jsxs("span",{className:"text-dark fw-bold",style:{fontSize:"12px"},children:["ห้อง : ",n.room_number]})})]},n.reservation_id))},`${r}-${d.start}`)})]},r))})};l.useEffect(()=>{const t={...S};i.forEach(r=>{t[r.day_of_week]=$(r.day_of_week)}),g(t),console.log("test",i)},[i]),l.useEffect(()=>{const t={...S};m.forEach(r=>{t[r.day_of_week]=$(r.day_of_week)}),g(t),console.log("test",i)},[m]);const $=t=>{switch(t){case"Monday":return"#FFFF99";case"Tuesday":return"#FFC0CB";case"Wednesday":return"#99ff99";case"Thursday":return"#ffcc99";case"Friday":return"#87CEEB";case"Saturday":return"#b06ae6";case"Sunday":return"#ff6978";default:return"#f2f2f2"}},te=async t=>{t.target};return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:10},children:[e.jsx(he,{}),e.jsxs("div",{style:{width:"100%",marginBottom:10},className:"d-flex justify-center align-items-center gap-4",children:[e.jsx(ae,{level:"title-md",children:"Select User: "}),e.jsxs(oe,{children:[e.jsx(ne,{children:"ชั้น"}),e.jsx(re,{style:{width:"100%"},placeholder:"ชั้น",onChange:(t,r)=>{te({target:{name:"room_level",value:r}}),Q(r)},children:V.map(t=>e.jsx(L,{value:t,children:t},t))})]}),e.jsxs(oe,{children:[e.jsx(ne,{children:"ห้อง"}),e.jsx(re,{style:{width:"100%"},placeholder:"ห้อง",value:w,onChange:J,children:K.map(t=>e.jsx(L,{value:t.room_number,children:t.room_number},t==null?void 0:t.room_id))})]}),e.jsx(T,{onClick:R,children:"Fetch Class Schedule"})]})]}),e.jsx(z,{children:e.jsx(ie,{children:e.jsx(z,{children:e.jsxs(xe,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(ue,{children:e.jsx("b",{children:"Day/Period"})}),b.map(t=>e.jsx(pe,{children:e.jsx("b",{children:`${t.start} - ${t.end}`})},t.start))]})}),e.jsx("tbody",{children:ee()})]})})})})]}),e.jsxs(ce,{children:[e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:10},children:[e.jsx(he,{children:i.length>0?i[0].fullname:"-"}),e.jsxs("div",{style:{width:"100%",marginBottom:10},className:"d-flex justify-center align-items-center gap-4",children:[e.jsx(ae,{level:"title-md",children:"Select User: "}),e.jsxs(re,{value:C,onChange:O,variant:"outlined",color:"primary",children:[e.jsx(L,{value:"",disabled:!0,children:"Select a teacher"}),W.map(t=>e.jsx(L,{value:t.id,children:t.firstname},t==null?void 0:t.id))]}),e.jsx(T,{onClick:_,children:"Fetch Class Schedule"})]})]}),e.jsx(z,{children:e.jsx(ie,{children:e.jsx(z,{children:e.jsxs(xe,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(ue,{children:e.jsx("b",{children:"Day/Period"})}),h.map(t=>e.jsx(pe,{children:e.jsx("b",{children:`${t.start} - ${t.end}`})},t.start))]})}),e.jsx("tbody",{children:f()})]})})})})]}),e.jsxs(ve,{children:[e.jsxs(Te,{children:[e.jsxs(ye,{sx:{"--TableCell-height":"40px","--TableHeader-height":"calc(1 * var(--TableCell-height))","--Table-firstColumnWidth":"80px","--Table-lastColumnWidth":"144px","--TableRow-stripeBackground":"rgba(0 0 0 / 0.04)","--TableRow-hoverBackground":"rgba(0 0 0 / 0.08)",height:370,overflow:"auto",backgroundColor:"nav.bg"},children:[e.jsxs(Ae,{className:"table mb-0",borderAxis:"bothBetween",stickyHeader:!0,hoverRow:!0,sx:{"--Table-headerUnderlineThickness":"1px","--TableCell-paddingX":"10px","--TableCell-paddingY":"7px","& tr > *:first-of-type":{position:"sticky",zIndex:1,left:0,boxShadow:"1px 0 var(--TableCell-borderColor)"},"& tr > *:last-child":{position:"sticky",right:0,bgcolor:"var(--TableCell-headBackground)"}},children:[e.jsxs(ke,{children:[e.jsxs("tr",{children:[e.jsx("th",{style:{width:100},children:"No"}),e.jsx("th",{style:{width:100},children:"Class Id"}),e.jsx("th",{style:{width:100},children:"Name"}),e.jsx("th",{style:{width:100},children:"Room"}),e.jsx("th",{style:{width:150},children:"Teacher"}),e.jsx("th",{style:{width:100},children:"Day"}),e.jsx("th",{style:{width:100},children:"Start Time"}),e.jsx("th",{style:{width:100},children:"End Time"}),e.jsx("th",{style:{width:100},children:"Select"}),e.jsx("th",{style:{width:100},children:"Action"})]}),e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{children:e.jsx(de,{checked:D,onChange:U,color:"primary",disabled:!1,size:"md"},"selectAllCheckbox")}),e.jsx("th",{})]})]}),e.jsx(De,{children:i.map((t,r)=>e.jsxs("tr",{className:"text-center",children:[e.jsx("th",{children:(c-1)*k+r+1}),e.jsx("th",{children:e.jsx(y,{title:t.reservation_id,arrow:!0,children:e.jsx("span",{children:t.reservation_id})})}),e.jsx("th",{children:e.jsx(y,{title:t.subject_name,arrow:!0,children:e.jsx("span",{children:t.subject_name})})}),e.jsx("th",{children:e.jsx(y,{title:t.room_number,arrow:!0,children:e.jsx("span",{children:t.room_number})})}),e.jsx("th",{children:e.jsx(y,{title:t.fullname,arrow:!0,children:e.jsx("span",{children:t.fullname})})}),e.jsx("th",{children:e.jsx(y,{title:t.day_of_week,arrow:!0,children:e.jsx("span",{children:t.day_of_week})})}),e.jsx("th",{children:e.jsx(y,{title:t.start_time,arrow:!0,children:e.jsx("span",{children:t.start_time})})}),e.jsx("th",{children:e.jsx(y,{title:t.end_time,arrow:!0,children:e.jsx("span",{children:t.end_time})})}),e.jsx("th",{children:e.jsx(de,{checked:F.includes(t.reservation_id),onChange:()=>H(t.reservation_id),color:"primary",disabled:!1,size:"md"})}),e.jsx("th",{children:e.jsx(Ce,{sx:{display:"flex",gap:1,justifyContent:"center",alignItems:"center"},children:e.jsx(T,{color:"danger",variant:"solid",endDecorator:e.jsx(we,{}),onClick:()=>G(t.reservation_id),className:"delete",children:"Delete"})})})]},(t==null?void 0:t.id)||r))})]}),e.jsx(Ie,{open:M,onClose:P,children:e.jsxs(Ne,{variant:"outlined",role:"alertdialog",color:"danger",sx:{borderWidth:"3px"},children:[e.jsxs(Pe,{color:"danger",variant:"plain",level:"body-lg",children:[e.jsx(_e,{}),"Confirmation"]}),e.jsx(Se,{}),e.jsx(Re,{children:F.length>1?"Are you sure you want to delete all selected subjects?":"Are you sure you want to delete the selected subject?"}),e.jsxs(Ee,{children:[e.jsx(T,{variant:"solid",color:"neutral",onClick:P,children:"Cancel"}),e.jsx(T,{variant:"solid",color:"danger",onClick:N,children:"Confirm Delete"})]})]})})]}),e.jsx("div",{className:"pagination-container",children:e.jsx(Fe,{count:100,page:c,rowsPerPage:k,onPageChange:Y,onRowsPerPageChange:q})})]}),e.jsx("div",{className:"card-footer",children:e.jsx("div",{className:"this-btn d-flex justify-center align-center gap-2",children:e.jsx(T,{sx:{width:"150px",padding:"15px !important",":hover":{boxShadow:"0 1px 20px 1px #A04C4C",border:"1px solid #A04C4C"}},id:"delete",color:"danger",variant:"solid",className:"text-red p-2",onClick:X,disabled:F.length===0,children:"Delete All"})})})]})]})};export{xt as default};
