import{g as b,h as v,A as N,r as m,o as p,j as D,q as B,a as h,p as d,s as E,t as O,F,m as y,B as V,w as x,l as _,k as S}from"./vendor.6276c88c.js";import{g as U}from"./index.5aeb8298.js";const A=b({props:{fetchOptions:{type:[Function,Array],default:()=>[]},value:{type:String,default:"value"},label:{type:String,default:"label"}},setup(l){const e=l,n=v([]),t=async()=>{typeof e.fetchOptions=="function"?n.value=await e.fetchOptions():n.value=e.fetchOptions};return N(()=>{t()}),(a,u)=>{const o=m("el-option");return p(!0),D(F,null,B(n.value,s=>(p(),h(o,{key:s[e.value],value:s[e.value],label:s[e.label]},{default:d(()=>[E(O(s[e.label]),1)]),_:2},1032,["value","label"]))),128)}}}),T=b({props:{params:{type:Object}},setup(l){const e=v("");return(n,t)=>{var o,s,i;const a=m("el-select"),u=m("el-input");return((o=l.params)==null?void 0:o.type)==="select"?(p(),h(a,{key:0,modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value=r),placeholder:((s=l.params)==null?void 0:s.placeholder)||"\u8BF7\u9009\u62E9"},{default:d(()=>{var r;return[y(A,{"fetch-options":(r=l.params)==null?void 0:r.options},null,8,["fetch-options"])]}),_:1},8,["modelValue","placeholder"])):(p(),h(u,{key:1,modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value=r),placeholder:((i=l.params)==null?void 0:i.placeholder)||"\u8BF7\u8F93\u5165"},null,8,["modelValue","placeholder"]))}}}),P=b({props:{params:{type:Array,default:()=>[]},gutter:{type:Number,default:30},span:{type:Number,default:6},defaultData:{type:Object,default:()=>{}}},emits:["change","init"],setup(l,{expose:e,emit:n}){const t=l,a=V({});(()=>{t.params.forEach(f=>{a[f.key]=""})})(),n("init",a);let o;const s=()=>{clearTimeout(o),o=setTimeout(()=>{n("change",a)},500)};x(a,()=>{s()});const i=()=>{Object.keys(t.defaultData).forEach(f=>{a[f]=t.defaultData[f]})};i(),x(t.defaultData,()=>{i()});const r=v();return e({checkForm:()=>new Promise(f=>{var g;(g=r.value)==null||g.validate(k=>{k&&f(a)})})}),(f,g)=>{const k=m("el-form-item"),w=m("el-col"),R=m("el-row"),j=m("el-form");return p(),h(j,{model:_(a),"label-position":"top",ref_key:"formRef",ref:r},{default:d(()=>[y(R,{gutter:l.gutter},{default:d(()=>[(p(!0),D(F,null,B(l.params,c=>(p(),h(w,{key:c.label,span:l.span},{default:d(()=>[y(k,{label:c.label,rules:c==null?void 0:c.rules,prop:c.key},{default:d(()=>[y(T,{params:c,modelValue:_(a)[c.key],"onUpdate:modelValue":C=>_(a)[c.key]=C},null,8,["params","modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules","prop"])]),_:2},1032,["span"]))),128))]),_:1},8,["gutter"])]),_:1},8,["model"])}}}),q=[{key:"url",label:"url",type:"input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165url"}]},{key:"status",label:"\u53D1\u5E03\u72B6\u6001",type:"select",options:[{label:"\u5DF2\u53D1\u5E03",value:1},{label:"\u5FAE\u53D1\u5E03",value:2}]},{key:"tag",label:"\u6807\u7B7E",type:"select",options:async()=>await U().then(e=>e.list)}],M=b({setup(l){const e=V({}),n=u=>{Object.keys(u).forEach(o=>{e[o]=u[o]})},t=v(),a=()=>{t.value.checkForm().then(u=>{console.log(u)})};return(u,o)=>(p(),D(F,null,[E(O(_(e))+" ",1),y(P,{params:_(q),onChange:n,onInit:n,ref_key:"SearchRef",ref:t,"default-data":V({url:"xxx:xx"})},null,8,["params","default-data"]),S("button",{onClick:a},"submit")],64))}});export{M as default};
