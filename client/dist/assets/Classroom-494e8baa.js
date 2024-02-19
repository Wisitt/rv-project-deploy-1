import{b as o,T as S,r as l,u as F,j as e,U as C}from"./index-d3b06103.js";const v=o("div")`
  margin: 20px auto;
  text-align: center;
  width: 85%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.2px);
  -webkit-backdrop-filter: blur(1.2px);
  border: 1px solid rgba(255, 255, 255, 0.01);
`,E=o("div")`
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
`,A=o(S)`
  font-size: 14px;
  color: ${({theme:t})=>t.palette.pf.color};
`,D=o("table")`
  border-collapse: collapse;
  width: 100%;
  border-radius: 16px;
`,_=o("th")`
  color: black;
  height: 50px;
  text-align: center;
  background-color: #f2f2f2;
  border-top-left-radius: 16px;
  
`,B=o("td")`
  color: black;
  border: 1px solid black;
  border-left: none;
  border-bottom: none;
  ${t=>t.day==="Sunday"&&`
  &:first-child {
    border-bottom-left-radius: 16px;
  }
`}

  text-align: center;
  width: 100px;
  background: ${({day:t})=>{switch(t){case"Monday":return"linear-gradient(to right, #DCFFB7, #FFEAA7)";case"Tuesday":return"linear-gradient(to right, #FF90BC, #FFC0D9)";case"Wednesday":return"linear-gradient(to right, #BFEA7C, #9BCF53)";case"Thursday":return"linear-gradient(to right, #ffcc99, #FFA07A)";case"Friday":return"linear-gradient(to right, #87CEEB, #40A2D8)";case"Saturday":return"linear-gradient(to right, #b06ae6, #C499F3)";case"Sunday":return"linear-gradient(to right, #EF6262, #FF8989)";default:return"linear-gradient(to right, #f2f2f2, #d9d9d9)"}}};
  @media (max-width: 600px) {
    width: 70px; // Adjust width for smaller screens
  }
`,z=o("td")`
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
`,N=o("div")`
  overflow-x: auto;
  
`,W=o("th")`
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
  
`,M=()=>{const t="08:00:00",i="18:00:00",s=[];let r=t;for(;r<i;)s.push({start:r,end:c(r)}),r=c(r);return s},$=()=>{const t="08:00:00",i="18:00:00",s=[];let r=t;for(;r<i;)s.push({start:r.slice(0,5),end:c(r).slice(0,5)}),r=c(r);return s},c=t=>{const[i,s,r]=t.split(":").map(Number);return new Date(0,0,0,i,s,r+60*60).toTimeString().slice(0,8)},L=()=>{const[t,i]=l.useState([]),[s,r]=l.useState({Monday:"#FFFF99",Tuesday:"#FFC0CB",Wednesday:"#99ff99",Thursday:"#ffcc99",Friday:"#87CEEB",Saturday:"#b06ae6",Sunday:"#ff6978"}),u=M(),g=$(),y=()=>{const n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];return e.jsx(e.Fragment,{children:n.map(a=>e.jsxs("tr",{children:[e.jsx(B,{day:a,style:{height:"50px",padding:"10px"},children:e.jsx("b",{children:a})},a),u.map(p=>{const b=t.filter(d=>d.day_of_week===a&&d.start_time===p.start),f=b.length;return e.jsx(z,{colSpan:f>0?f:1,children:b.map(d=>e.jsxs("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{width:"100%",height:"100%",backgroundColor:s[d.day_of_week],textAlign:"center",padding:5},children:[e.jsx("div",{style:{width:"120px"},children:e.jsxs("span",{className:"text-dark fw-bold",style:{fontSize:"12px"},children:["วิชา : ",d.subject_name]})}),e.jsx("div",{style:{width:"120px"},children:e.jsxs("span",{className:"text-dark fw-bold",style:{fontSize:"12px"},children:["ห้อง : ",d.room_number]})})]},d.reservation_id))},`${a}-${p.start}`)})]},a))})};l.useEffect(()=>{(async()=>{try{const a=await C.getClassSchedule();i(Array.isArray(a)?a:[a])}catch(a){console.error("Error fetching schedule:",a)}})()},[]),l.useEffect(()=>{const n={...s};t.forEach(a=>{n[a.day_of_week]=w(a.day_of_week)}),r(n)},[t]);const w=n=>{switch(n){case"Monday":return"#FFFF99";case"Tuesday":return"#FFC0CB";case"Wednesday":return"#99ff99";case"Thursday":return"#ffcc99";case"Friday":return"#87CEEB";case"Saturday":return"#b06ae6";case"Sunday":return"#ff6978";default:return"#f2f2f2"}},{mode:x}=F(),m=x==="dark",h=new Date,j=h.toLocaleString("en-US",{month:"long"}),T=h.toLocaleString("en-US",{weekday:"long"}),k=h.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"});return e.jsx("div",{className:"py-24 sm:py-32 md:py-40 relative d-flex justify-center align-items-center",style:{width:"100%",height:"100vh",position:"relative",maxHeight:"calc(100vh - 0px)",overflowY:"auto",...x==="dark"?{background:"linear-gradient(to bottom, #020420, #0F172A)"}:{background:"linear-gradient(to bottom, #AA96DA, #6962AD)"},padding:1},children:e.jsx("div",{className:"container pt-5",children:e.jsxs(v,{children:[e.jsxs(A,{children:[e.jsx("img",{src:m?"https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Woman%20Teacher%20Dark%20Skin%20Tone.png":"https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Woman%20Teacher%20Light%20Skin%20Tone.png",alt:m?"Dark Emoji":"Light Emoji",width:"100",height:"100",style:{borderRadius:"50%",position:"relative",top:0,left:"47%"}}),e.jsxs("div",{style:{position:"absolute",top:-10,left:10},children:[e.jsx("div",{className:"mt-3",children:e.jsxs("div",{className:"d-flex justify-content-center",children:[e.jsx("b",{className:"fs-6",children:"Today"}),e.jsx("img",{src:"https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Tear%20Off%20Calendar.webp",alt:"Tear Off Calendar",width:"25",height:"25"})]})}),e.jsxs("div",{style:{fontSize:"12px"},children:["Month: ",j]}),e.jsxs("div",{style:{fontSize:"12px"},children:["Day: ",T]}),e.jsxs("div",{style:{fontSize:"12px"},children:["Time: ",k]})]})]}),e.jsx(E,{children:e.jsx(N,{children:e.jsxs(D,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(_,{children:e.jsx("b",{children:"Day/Period"})}),g.map(n=>e.jsx(W,{children:e.jsx("b",{children:`${n.start} - ${n.end}`})},n.start))]})}),e.jsx("tbody",{children:y()})]})})})]})})})};export{L as default};
