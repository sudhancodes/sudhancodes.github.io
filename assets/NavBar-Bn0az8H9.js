import{r as i,o as l,c as o,a as t,F as f,b as m,n as d,t as u}from"./index-pgscwiPb.js";const h={class:"flex justify-between items-center p-6 bg-opacity-50 relative z-20"},x={class:"md:hidden z-30"},p={key:0,class:"text-5xl"},v={key:1,class:"text-5xl"},b={class:"flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"},g=["href","onClick"],w={__name:"NavBar",setup(k){const r=i([{name:"Services",href:"#services"},{name:"About Me",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}]),s=i(!1),c=a=>{s.value=!1;const e=document.querySelector(a);e&&e.scrollIntoView({behavior:"smooth"})};return(a,e)=>(l(),o("header",h,[e[3]||(e[3]=t("div",{class:"text-white text-3xl font-bold"},"PORTFOLIO",-1)),t("div",x,[t("button",{type:"button",class:"block focus:outline-none",onClick:e[0]||(e[0]=n=>s.value=!s.value)},[s.value?(l(),o("span",p,e[1]||(e[1]=[t("img",{src:"https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png",alt:"close",width:"50",height:"50"},null,-1)]))):(l(),o("span",v,e[2]||(e[2]=[t("img",{src:"https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png",alt:"menu",width:"50",height:"50"},null,-1)])))])]),t("nav",{class:d(["fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row",s.value?"block":"hidden"])},[t("ul",b,[(l(!0),o(f,null,m(r.value,n=>(l(),o("li",{key:n.name},[t("a",{href:n.href,class:"block text-white transition hover:text-primary ease-linear text-2xl md:text-lg",onClick:y=>c(n.href)},u(n.name),9,g)]))),128))])],2)]))}};export{w as default};
