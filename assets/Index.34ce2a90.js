import{f as H,g as v,u as L,h as M,w as q,r as m,o as c,j as f,k as r,l as _,n as w,m as u,p as d,F as C,q as B,a as E,s as x,t as F,v as O,E as G,x as J,y as P,z as K}from"./vendor.cb7124ed.js";import{r as R,a as T,_ as Q,b as U}from"./index.caa1f451.js";import{s as y}from"./settings.15394f79.js";const A=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],h=(()=>{const e=A[0],n={};for(const t of A)if((t==null?void 0:t[1])in document){for(const[l,a]of t.entries())n[e[l]]=a;return n}return!1})(),D={change:h.fullscreenchange,error:h.fullscreenerror};let i={request(e=document.documentElement,n){return new Promise((t,o)=>{const l=()=>{i.off("change",l),t()};i.on("change",l);const a=e[h.requestFullscreen](n);a instanceof Promise&&a.then(l).catch(o)})},exit(){return new Promise((e,n)=>{if(!i.isFullscreen){e();return}const t=()=>{i.off("change",t),e()};i.on("change",t);const o=document[h.exitFullscreen]();o instanceof Promise&&o.then(t).catch(n)})},toggle(e,n){return i.isFullscreen?i.exit():i.request(e,n)},onchange(e){i.on("change",e)},onerror(e){i.on("error",e)},on(e,n){const t=D[e];t&&document.addEventListener(t,n,!1)},off(e,n){const t=D[e];t&&document.removeEventListener(t,n,!1)},raw:h};Object.defineProperties(i,{isFullscreen:{get:()=>Boolean(document[h.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return(e=document[h.fullscreenElement])!=null?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[h.fullscreenEnabled])}});h||(i={isEnabled:!1});var I=i,V;const W={path:R[0].path,name:(V=R[0].meta)==null?void 0:V.name,canClose:!1},z=H({id:"menu",state(){return{isCollapse:!1,tagList:[W]}},actions:{toggleMenu(){this.isCollapse=!this.isCollapse},addTagList(e){this.tagList.push(e)},removeTag(e,n){this.tagList.splice(e,1),n&&(this.tagList[e]?T.push(this.tagList[e].path):T.push(this.tagList[e-1].path))}}});const X={class:"header-bread"},Y={class:"bread-text"},Z={class:"bread-info"},ee={class:"el-dropdown-link"},te=x(" Admin "),ne=x("Login Out"),se=v({setup(e){const n=L(),t=z(),o=M([]),l=()=>{o.value=n.matched.map(s=>({path:s.path,name:s.meta.name}))};l(),q(n,()=>{l()});const a=()=>{if(!I.isEnabled){G.warning("\u6682\u4E0D\u4E0D\u652F\u6301\u5168\u5C4F");return}I.toggle()};return(s,p)=>{const b=m("el-breadcrumb-item"),g=m("el-breadcrumb"),$=m("el-icon"),S=m("el-dropdown-item"),N=m("el-dropdown-menu"),j=m("el-dropdown");return c(),f("div",X,[r("div",Y,[r("i",{onClick:p[0]||(p[0]=(...k)=>_(t).toggleMenu&&_(t).toggleMenu(...k)),class:w(`font-20 m-r-10 iconfont ${_(t).isCollapse?"icon-zhankaicaidan":"icon-shouqicaidan"}`)},null,2),u(g,null,{default:d(()=>[(c(!0),f(C,null,B(o.value,k=>(c(),E(b,{to:k.path,key:k.name},{default:d(()=>[x(F(k.name),1)]),_:2},1032,["to"]))),128))]),_:1})]),r("div",Z,[r("i",{class:"iconfont icon-quanping m-r-10 pointer",onClick:a}),u(j,null,{dropdown:d(()=>[u(N,null,{default:d(()=>[u(S,null,{default:d(()=>[ne]),_:1})]),_:1})]),default:d(()=>[r("span",ee,[te,u($,{class:"el-icon--right"},{default:d(()=>[u(_(O))]),_:1})])]),_:1})])])}}});var oe=Q(se,[["__scopeId","data-v-57f5cdd4"]]);const le={class:"header-tags"},re=["onClick"],ce=["onClick"],ae=v({setup(e){const n=z(),t=L(),o=s=>{if(s.meta.isHidden)return!1;const p={path:s.fullPath,name:s.meta.name,canClose:!0};return n.tagList.some(b=>b.name===p.name)?!1:(n.addTagList(p),!0)};q(t,()=>{o(t)}),o(t);const l=(s,p)=>{n.removeTag(s,p)},a=s=>s.name===t.meta.name;return(s,p)=>{const b=m("router-link");return c(),f("div",le,[r("ul",null,[(c(!0),f(C,null,B(_(n).tagList,(g,$)=>(c(),E(b,{key:g.name,custom:"",to:g.path},{default:d(({navigate:S})=>[r("li",{onClick:S,class:w({current:a(g)})},[r("span",null,F(g.name),1),g.canClose?(c(),f("i",{key:0,onClick:J(N=>l($,a(g)),["stop"]),class:"iconfont icon-close m-l-4"},null,8,ce)):P("",!0)],10,re)]),_:2},1032,["to"]))),128))])])}}}),ue={class:"layout-header"},ie=v({setup(e){return(n,t)=>(c(),f("div",ue,[u(oe),u(ae)]))}});var de="/assets/logo.03d6d6da.png";const me=v({props:["routes"],setup(e){return(n,t)=>{const o=m("MenuItem",!0),l=m("el-sub-menu"),a=m("el-menu-item");return c(!0),f(C,null,B(e.routes,s=>(c(),f(C,{key:s.path},[s.children&&!s.meta.isHidden?(c(),E(l,{key:0,index:s.path},{title:d(()=>[r("i",{class:w(`iconfont m-r-6 ${s.meta.icon}`)},null,2),r("span",null,F(s.meta.name),1)]),default:d(()=>[u(o,{routes:s.children},null,8,["routes"])]),_:2},1032,["index"])):!s.children&&!s.meta.isHidden?(c(),E(a,{key:1,index:s.path,route:s.path},{title:d(()=>[x(F(s.meta.name),1)]),default:d(()=>[r("i",{class:w(`iconfont m-r-6 ${s.meta.icon}`)},null,2)]),_:2},1032,["index","route"])):P("",!0)],64))),128)}}}),_e={class:"project-name"},fe=["alt","title"],pe={key:0,class:"m-l-10"},he={class:"project-menu"},ge=v({setup(e){const n=M(U),t=M(""),o=L(),l=z(),a=()=>{t.value=o.fullPath};return K(()=>{a()}),q(o,()=>{a()}),(s,p)=>{const b=m("el-menu");return c(),f("div",{class:w(["layout-menu",_(l).isCollapse?"w-64":"w-200"])},[r("div",_e,[r("img",{class:"logo",src:de,alt:_(y),title:_(y)},null,8,fe),_(l).isCollapse?P("",!0):(c(),f("span",pe,F(_(y)),1))]),r("div",he,[u(b,{class:"el-sidebar-menu",router:"",collapse:_(l).isCollapse,"default-active":t.value,"active-text-color":"#ffd04b","background-color":"#545c64","text-color":"#fff"},{default:d(()=>[u(me,{routes:n.value[0].children},null,8,["routes"])]),_:1},8,["collapse","default-active"])])],2)}}}),be={class:"layout-section"},ve={class:"layout-article"},ke={class:"layout-content"},Ee=v({setup(e){return(n,t)=>{const o=m("router-view");return c(),f("div",be,[u(ge),r("div",ve,[u(ie),r("div",ke,[u(o)])])])}}});export{Ee as default};