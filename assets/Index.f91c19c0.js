import{f as V,g as b,u as L,h as M,w as B,r as _,o as c,j as f,k as r,l as m,n as F,m as u,p as d,F as C,q,s as j,t as x,E as H,a as E,v as w,x as O,y as P,z as G}from"./vendor.4aa86fef.js";import{r as T,_ as J,a as K}from"./index.017e6e42.js";const A=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],h=(()=>{const e=A[0],n={};for(const t of A)if((t==null?void 0:t[1])in document){for(const[l,a]of t.entries())n[e[l]]=a;return n}return!1})(),R={change:h.fullscreenchange,error:h.fullscreenerror};let i={request(e=document.documentElement,n){return new Promise((t,o)=>{const l=()=>{i.off("change",l),t()};i.on("change",l);const a=e[h.requestFullscreen](n);a instanceof Promise&&a.then(l).catch(o)})},exit(){return new Promise((e,n)=>{if(!i.isFullscreen){e();return}const t=()=>{i.off("change",t),e()};i.on("change",t);const o=document[h.exitFullscreen]();o instanceof Promise&&o.then(t).catch(n)})},toggle(e,n){return i.isFullscreen?i.exit():i.request(e,n)},onchange(e){i.on("change",e)},onerror(e){i.on("error",e)},on(e,n){const t=R[e];t&&document.addEventListener(t,n,!1)},off(e,n){const t=R[e];t&&document.removeEventListener(t,n,!1)},raw:h};Object.defineProperties(i,{isFullscreen:{get:()=>Boolean(document[h.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return(e=document[h.fullscreenElement])!=null?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[h.fullscreenEnabled])}});h||(i={isEnabled:!1});var D=i;const z=V({id:"menu",state(){return{isCollapse:!1,tagList:[{path:"/",name:"\u9996\u9875",canClose:!1}]}},actions:{toggleMenu(){this.isCollapse=!this.isCollapse},addTagList(e){this.tagList.push(e)},removeTag(e,n){this.tagList.splice(e,1),n&&(this.tagList[e]?T.push(this.tagList[e].path):T.push(this.tagList[e-1].path))}}});const Q={class:"header-bread"},U={class:"bread-text"},W={class:"bread-info"},X={class:"el-dropdown-link"},Y=x(" Admin "),Z=x("Login Out"),ee=b({setup(e){const n=L(),t=z(),o=M([]),l=()=>{o.value=n.matched.map(s=>({path:s.path,name:s.meta.name}))};l(),B(n,()=>{l()});const a=()=>{if(!D.isEnabled){H.warning("\u6682\u4E0D\u4E0D\u652F\u6301\u5168\u5C4F");return}D.toggle()};return(s,p)=>{const v=_("el-breadcrumb-item"),g=_("el-breadcrumb"),$=_("el-icon"),S=_("el-dropdown-item"),N=_("el-dropdown-menu"),I=_("el-dropdown");return c(),f("div",Q,[r("div",U,[r("i",{onClick:p[0]||(p[0]=(...k)=>m(t).toggleMenu&&m(t).toggleMenu(...k)),class:F(`font-20 m-r-10 iconfont ${m(t).isCollapse?"icon-zhankaicaidan":"icon-shouqicaidan"}`)},null,2),u(g,null,{default:d(()=>[(c(!0),f(C,null,q(o.value,k=>(c(),E(v,{to:k.path,key:k.name},{default:d(()=>[x(w(k.name),1)]),_:2},1032,["to"]))),128))]),_:1})]),r("div",W,[r("i",{class:"iconfont icon-quanping m-r-10 pointer",onClick:a}),u(I,null,{dropdown:d(()=>[u(N,null,{default:d(()=>[u(S,null,{default:d(()=>[Z]),_:1})]),_:1})]),default:d(()=>[r("span",X,[Y,u($,{class:"el-icon--right"},{default:d(()=>[u(m(j))]),_:1})])]),_:1})])])}}});var te=J(ee,[["__scopeId","data-v-57f5cdd4"]]);const ne={class:"header-tags"},se=["onClick"],oe=["onClick"],le=b({setup(e){const n=z(),t=L(),o=s=>{if(s.meta.isHidden)return!1;const p={path:s.fullPath,name:s.meta.name,canClose:!0};return n.tagList.some(v=>v.name===p.name)?!1:(n.addTagList(p),!0)};B(t,()=>{o(t)}),o(t);const l=(s,p)=>{n.removeTag(s,p)},a=s=>s.name===t.meta.name;return(s,p)=>{const v=_("router-link");return c(),f("div",ne,[r("ul",null,[(c(!0),f(C,null,q(m(n).tagList,(g,$)=>(c(),E(v,{key:g.name,custom:"",to:g.path},{default:d(({navigate:S})=>[r("li",{onClick:S,class:F({current:a(g)})},[r("span",null,w(g.name),1),g.canClose?(c(),f("i",{key:0,onClick:O(N=>l($,a(g)),["stop"]),class:"iconfont icon-close m-l-4"},null,8,oe)):P("",!0)],10,se)]),_:2},1032,["to"]))),128))])])}}}),re={class:"layout-header"},ce=b({setup(e){return(n,t)=>(c(),f("div",re,[u(te),u(le)]))}});var ae="/assets/logo.03d6d6da.png";const y="\u7BA1\u7406\u7CFB\u7EDF",ue=b({props:["routes"],setup(e){return(n,t)=>{const o=_("MenuItem",!0),l=_("el-sub-menu"),a=_("el-menu-item");return c(!0),f(C,null,q(e.routes,s=>(c(),f(C,{key:s.path},[s.children&&!s.meta.isHidden?(c(),E(l,{key:0,index:s.path},{title:d(()=>[r("i",{class:F(`iconfont m-r-6 ${s.meta.icon}`)},null,2),r("span",null,w(s.meta.name),1)]),default:d(()=>[u(o,{routes:s.children},null,8,["routes"])]),_:2},1032,["index"])):!s.children&&!s.meta.isHidden?(c(),E(a,{key:1,index:s.path,route:s.path},{title:d(()=>[x(w(s.meta.name),1)]),default:d(()=>[r("i",{class:F(`iconfont m-r-6 ${s.meta.icon}`)},null,2)]),_:2},1032,["index","route"])):P("",!0)],64))),128)}}}),ie={class:"project-name"},de=["alt","title"],_e={key:0,class:"m-l-10"},me={class:"project-menu"},fe=b({setup(e){const n=M(K),t=M(""),o=L(),l=z(),a=()=>{t.value=o.fullPath};return G(()=>{a()}),B(o,()=>{a()}),(s,p)=>{const v=_("el-menu");return c(),f("div",{class:F(["layout-menu",m(l).isCollapse?"w-64":"w-200"])},[r("div",ie,[r("img",{class:"logo",src:ae,alt:m(y),title:m(y)},null,8,de),m(l).isCollapse?P("",!0):(c(),f("span",_e,w(m(y)),1))]),r("div",me,[u(v,{class:"el-sidebar-menu",router:"",collapse:m(l).isCollapse,"default-active":t.value,"active-text-color":"#ffd04b","background-color":"#545c64","text-color":"#fff"},{default:d(()=>[u(ue,{routes:n.value[0].children},null,8,["routes"])]),_:1},8,["collapse","default-active"])])],2)}}}),pe={class:"layout-section"},he={class:"layout-article"},ge={class:"layout-content"},ke=b({setup(e){return(n,t)=>{const o=_("router-view");return c(),f("div",pe,[u(fe),r("div",he,[u(ce),r("div",ge,[u(o)])])])}}});export{ke as default};
