import{c as v,r as m,o as f,a as d,N as a,b as y,d as E,e as b,i as g}from"./vendor.4aa86fef.js";const L=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};L();const P=v(),O="modulepreload",u={},w="/",i=function(s,o){return!o||o.length===0?s():Promise.all(o.map(t=>{if(t=`${w}${t}`,t in u)return;u[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":O,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((p,h)=>{n.addEventListener("load",p),n.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())};var _=(c,s)=>{const o=c.__vccOpts||c;for(const[t,e]of s)o[t]=e;return o};const R={};function $(c,s){const o=m("router-view");return f(),d(o)}var k=_(R,[["render",$]]);const A=[{path:"/",component:()=>i(()=>import("./Index.f91c19c0.js"),["assets/Index.f91c19c0.js","assets/Index.28de74ce.css","assets/vendor.4aa86fef.js"]),meta:{name:"\u9996\u9875"},children:[{path:"/",component:()=>i(()=>import("./Index.aeebae0c.js"),["assets/Index.aeebae0c.js","assets/vendor.4aa86fef.js"]),meta:{icon:"icon-home2",name:"\u9996\u9875"}},{path:"/table",component:k,redirect:"/table/all",meta:{icon:"icon-table",name:"\u8868\u683C"},children:[{path:"/table/all",component:()=>i(()=>import("./All.74b36c01.js"),["assets/All.74b36c01.js","assets/vendor.4aa86fef.js"]),meta:{icon:"icon-table",name:"\u5168\u90E8"}},{path:"/table/list",component:()=>i(()=>import("./All.74b36c01.js"),["assets/All.74b36c01.js","assets/vendor.4aa86fef.js"]),meta:{icon:"icon-table",name:"\u5217\u8868"}}]}]}],x=[{path:"/:w+",redirect:"/"}];a.configure({showSpinner:!1});const S=[...A,...x],l=y({history:E("/"),routes:S});l.beforeEach(()=>{a.start()});l.afterEach(()=>{a.done()});const C={};function I(c,s){const o=m("router-view");return f(),d(o)}var N=_(C,[["render",I]]);b(N).use(l).use(P).use(g).mount("#app");export{_,A as a,l as r};
