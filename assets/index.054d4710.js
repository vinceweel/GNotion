var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,c=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&l(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&l(e,a,t[a]);return e},o=(e,n)=>t(e,a(n)),i=(e,t)=>{var a={};for(var l in e)r.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&n)for(var l of n(e))t.indexOf(l)<0&&s.call(e,l)&&(a[l]=e[l]);return a};import{c as u,i as d,r as v,u as p,a as g,o as h,b as m,F as f,d as b,e as _,f as w,t as y,g as z,p as x,h as S,j as k,w as C,v as M,k as I,l as H,m as L,n as $,q,s as O,x as V,y as T,z as j,A as N,B,C as A,D,E,G,H as R}from"./vendor.e7bd3959.js";import{request as W}from"https://cdn.pika.dev/@octokit/request";import{graphql as P}from"https://cdn.skypack.dev/@octokit/graphql";const F="gnotion",U="0.0.1",J=(e="",t={})=>{const{onlylog:a=!1,name:n=F,version:r=U,color:s={text:"white",version:"#66666666",log:"#0084ffff",warn:"orange",error:"red",info:"gray"}}=t,l=(t="log",l=!0)=>{const c=`\n      font-family: sans-serif;\n      color: ${s.text};\n      display: inline-block;\n      line-height: 1.35;\n    `,o=[`%c ${n} %c ${r}`,`${c}\n        padding: 4px 4px 4px 8px;\n        border-radius: 2.6em 0 0 1.5em;\n        background: ${s[null!=t?t:"primary"]};\n      `,`${c}\n        padding: 4px 12px 4px 4px;\n        border-radius: 0 1.2em 2em 0;\n        background: ${s.version};\n      `];return l?console[a?"log":t].bind(window.console,...o,e&&`${e}:`.toUpperCase()):()=>{}};return{log:l("log",!1),warn:l("warn"),error:l("error"),info:l("info")}},Y=(e=0,t="px")=>{const a=d(e)?e:v(e);let n=p(a);const r=e=>null===t||!new RegExp("\\d$").test(`${e.value}`)||/^calc/.test(`${e.value}`)?e.value:`${e.value}${t}`;return[u((()=>r(a))),{calc:(e,t)=>{if("string"==typeof e){try{a.value=g(`calc(${e.replaceAll("$",`${r(a)}`)})`,t),n=p(a)}catch({message:s}){J("hook: use_unit_size").error(s)}return u((()=>r(a)))}return u((()=>`calc(${e()})`))},change:(e=0)=>{a.value=e,n=p(a)},toggle:e=>{a.value=(null!=e?e:a.value===n)?0:n}}]},X=(e=1)=>{const t=v(e);let a=p(t);return[t,{change:e=>{t.value=e,a=p(t)},toggle:e=>{t.value=(null!=e?e:t.value===a)?0:a}}]},Z={},K=b("path",{d:"M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z",opacity:".3"},null,-1),Q=b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"},null,-1);Z.render=function(e,t){return h(),m(f,null,[K,Q],64)};const ee={},te=b("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 10h3.13c.21.78.67 1.47 1.27 2H5v-2zm14 2h-4.4c.6-.53 1.06-1.22 1.27-2H19v2zm0-4h-5v1c0 1.07-.93 2-2 2s-2-.93-2-2V8H5V5h14v3zm-5 7v1c0 .47-.19.9-.48 1.25-.37.45-.92.75-1.52.75s-1.15-.3-1.52-.75c-.29-.35-.48-.78-.48-1.25v-1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-7zm-9 2h3.13c.02.09.06.17.09.25.24.68.65 1.28 1.18 1.75H5v-2zm14 2h-4.4c.54-.47.95-1.07 1.18-1.75.03-.08.07-.16.09-.25H19v2z"},null,-1),ae=b("path",{d:"M8.13 10H5v2h4.4c-.6-.53-1.06-1.22-1.27-2zm6.47 2H19v-2h-3.13c-.21.78-.67 1.47-1.27 2zm-6.38 5.25c-.03-.08-.06-.16-.09-.25H5v2h4.4c-.53-.47-.94-1.07-1.18-1.75zm7.65-.25c-.02.09-.06.17-.09.25-.23.68-.64 1.28-1.18 1.75H19v-2h-3.13z",opacity:".3"},null,-1);ee.render=function(e,t){return h(),m(f,null,[te,ae],64)};const ne={},re={d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"};ne.render=function(e,t){return h(),m("path",re)};const se={},le={xmlns:"http://www.w3.org/2000/svg",d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zM21 6h-7v5h7V6zm-1 2l-2.5 1.75L15 8V7l2.5 1.75L20 7v1zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z"};se.render=function(e,t){return h(),m("path",le)};const ce={},oe=b("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z",opacity:".3"},null,-1),ie=b("circle",{cx:"15.5",cy:"9.5",r:"1.5"},null,-1),ue=b("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},null,-1),de=b("circle",{cx:"8.5",cy:"9.5",r:"1.5"},null,-1),ve=b("path",{d:"M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"},null,-1);ce.render=function(e,t){return h(),m(f,null,[oe,ie,ue,de,ve],64)};const pe={},ge={xmlns:"http://www.w3.org/2000/svg",d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"};pe.render=function(e,t){return h(),m("path",ge)};const he={},me=b("path",{d:"M19 13h-2V7h-6V5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H4l.01 2.12C5.76 9.8 7 11.51 7 13.5c0 1.99-1.25 3.7-3 4.38V20h2.12c.68-1.75 2.39-3 4.38-3 1.99 0 3.7 1.25 4.38 3H17v-6h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z",opacity:".3"},null,-1),fe=b("path",{d:"M19 11V7c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5S8 3.62 8 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4c1.38 0 2.5-1.12 2.5-2.5S20.38 11 19 11zm0 3h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3-1.99 0-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5s.5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5z"},null,-1);he.render=function(e,t){return h(),m(f,null,[me,fe],64)};const be={},_e={d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"};be.render=function(e,t){return h(),m("path",_e)};const we={},ye={d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"};we.render=function(e,t){return h(),m("path",ye)};const ze={},xe={d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"};ze.render=function(e,t){return h(),m("path",xe)};const Se={},ke={xmlns:"http://www.w3.org/2000/svg",d:"M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"};Se.render=function(e,t){return h(),m("path",ke)};const Ce={},Me={d:"M12.01 4V1l-4 4 4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46c.78-1.23 1.24-2.69 1.24-4.26 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.25 7.74C4.47 8.97 4.01 10.43 4.01 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"};Ce.render=function(e,t){return h(),m("path",Me)};const Ie={},He={xmlns:"http://www.w3.org/2000/svg"},Le=b("g",null,[b("path",{d:"M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.65,19.35l-2.15-2.15V14h1v2.79l1.85,1.85 L18.65,19.35z"}),b("path",{d:"M11,12l-6-1.5V7.01l8.87,3.74c0.94-0.47,2-0.75,3.13-0.75c0.1,0,0.19,0.01,0.28,0.01L3,4v16l7-2.95c0-0.02,0-0.03,0-0.05 c0-0.8,0.14-1.56,0.39-2.28L5,16.99V13.5L11,12z"})],-1);Ie.render=function(e,t){return h(),m("g",He,[Le])};const $e={},qe={xmlns:"http://www.w3.org/2000/svg",d:"M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z"};$e.render=function(e,t){return h(),m("path",qe)};const Oe={},Ve={xmlns:"http://www.w3.org/2000/svg",d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"};Oe.render=function(e,t){return h(),m("path",Ve)};const Te={},je={xmlns:"http://www.w3.org/2000/svg",d:"M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"};Te.render=function(e,t){return h(),m("path",je)};const Ne={},Be={xmlns:"http://www.w3.org/2000/svg"},Ae=b("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"},null,-1);Ne.render=function(e,t){return h(),m("g",Be,[Ae])};var De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Account:Z,AllInbox:ee,ArrowBack:ne,ContactMail:se,Default:ce,ExpandLess:pe,Extension:he,Github:be,Menu:we,MoreVert:ze,Settings:Se,Sync:Ce,ScheduleSend:Ie,Send:$e,Done:Oe,Talk:Te,ArrowRight:Ne});var Ee=_(o(c({},{name:"Icon"}),{props:{name:{type:String,default:"default"},color:{type:String,default:"currentColor"},size:{type:[String,Number],default:24},width:[String,Number],height:[String,Number],rotate:{type:[String,Number],default:0},viewBoxSize:{type:[String,Number],default:24}},setup(e){const t=e;w((e=>({"29f36d38":p(i)})));const{name:a,size:n,width:r,height:s,rotate:l,viewBoxSize:c}=y(t),o=u((()=>De[x(a.value)])),[i]=Y(l,"deg");return(a,l)=>{var i,u;return h(),m("svg",{class:["Icon",[t.name]],xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${p(c)} ${p(c)}`,width:null!=(i=p(r))?i:p(n),height:null!=(u=p(s))?u:p(n)},[b("g",{fill:e.color},[(h(),m(z(p(o))))],8,["fill"])],10,["viewBox","width","height"])}}}));Ee.__scopeId="data-v-765e8c3e";const Ge=e=>t=>e?null===e.value||void 0===e.value?t:e:t,Re=(e,t)=>{for(const a of Object.keys(t))t[a]instanceof Object&&Object.assign(t[a],Re(e[a],t[a]));return Object.assign(e||{},t)},We=(e,t)=>globalThis.localStorage.setItem(e,"string"==typeof t?t:JSON.stringify(t)),Pe=e=>{return t=globalThis.localStorage.getItem(e),(a=()=>JSON.parse(t),e=>{try{return a()}catch(t){return e()}})((()=>t));var t,a};S("data-v-01c34fd6");const Fe={class:"Image"},Ue={class:"wrap __center -axis -cross"};k();var Je=_(o(c({},{name:"Image"}),{props:{src:{type:String,required:!1,default:""},mode:{type:[String,String,String,String],required:!1,default:"contain"},size:{type:[String,Number],required:!1,default:void 0},height:{type:[String,Number],required:!1,default:"auto"},width:{type:[String,Number],required:!1,default:"auto"},position:{type:String,required:!1,default:"center center"},alt:{type:String,required:!1,default:"image"},isImgTag:{type:Boolean,required:!1,default:!1}},setup(e){const t=e;w((t=>({b2ec625c:p(r),"58c90ebb":p(s),d10433e4:p(c),e6e9cfd8:e.position,e6e9cfd8:e.position,d10433e4:p(c),bc6b40b8:p(l)})));const a=y(t),n=Ge(a.size),[r]=Y(n(a.height)),[s]=Y(n(a.width)),l=u((()=>`url(${a.src.value})`)),c=a.mode;return(t,a)=>(h(),m("div",Fe,[b("div",Ue,[C(b("img",{class:"img",src:e.src,alt:e.alt},null,8,["src","alt"]),[[M,e.isImgTag]])])]))}}));Je.__scopeId="data-v-01c34fd6",S("data-v-ccd9f684");const Ye={class:"Avatar"},Xe={class:"wrap __center -axis -cross"};k();var Ze=_(o(c({},{name:"Avatar"}),{props:{url:{type:String,required:!1,default:""},size:{type:[String,Number],required:!1,default:48}},setup(e){const t=e;w((e=>({"93dc9f90":p(n),"93dc9f90":p(n),"93dc9f90":p(n)})));const a=y(t),[n]=Y(a.size),{t:r}=I.exports.useI18n();return(t,a)=>(h(),m("div",Ye,[b("div",Xe,[e.url?(h(),m(Je,{key:1,src:e.url,size:p(n),mode:"cover",alt:p(r)("avatar")},null,8,["src","size","alt"])):(h(),m(Ee,{key:0,name:"account",size:p(n)},null,8,["size"]))])]))}}));Ze.__scopeId="data-v-ccd9f684";const Ke=()=>[H(Pe("_gnotion_config"))],Qe=(e=!1)=>{const t=Pe("_gnotion_access_token"),[{authorization:{token:a}}]=Ke();return`Bearer ghp_${null!=t?t:a}`},et=(e=!1)=>{const t=v(e),a=e=>{t.value=null!=e?e:!t.value};return[t,{toggle:a,close:()=>a(!1),open:()=>a(!0)}]},[tt]=Y(8),[at]=Y(16),[nt]=Y(48),[rt]=et(!1),[{repository:{name:st,owner:lt}}]=Ke(),ct=()=>{const e={repo:st,owner:lt,headers:{authorization:Qe(!0)}};return{graphql:P.defaults(e),rest:W.defaults(e)}},ot=(e,t)=>[null],it=async()=>{try{return[null,Pe("_gnotion_access_token")]}catch(e){return[new Error(e)]}},ut=async({})=>[null,Pe("_gnotion_settings")];var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__:ot,accessToken:it,settings:ut}),vt=async({github:{graphql:e}},{username:t="vinceweel"})=>{try{const{user:a}=await e("\n          query user($login: String!) {\n            user(login: $login) {\n              id\n              fullname: name\n              email\n              description: bio\n              avatar: avatarUrl\n            }\n          }\n        ",{login:t});return a}catch(a){return new Error(a)}},pt=async({github:{rest:e}})=>{const t=await(a=e("GET /repos/{owner}/{repo}/issues"),n=[],a.then((({data:e})=>null!=e?e:n)));var a,n;return console.log(t),null==t?void 0:t.map((({id:e,title:t,comments:a,state:n,labels:r,updated_at:s,url:l,user:c})=>({id:e,title:t,comments:a,state:n,labels:r,updated:s,url:l,user:c})))},gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",user:vt,articles:pt});const ht=c(c({},dt),gt),mt={immediate:!0,params:{}},ft=(e,t={})=>{const{immediate:a,params:n,mock:r}=Re(mt,t),s=v(null),l=v(null),c=v(!1),o=ht[e],i=async(e=n)=>{c.value=!0;const t=await o({github:ct(),config:Ke(),settings:[H(Pe("_gnotion_settings"))]},e);if(c.value=!1,t instanceof Error)return l.value=t;s.value=t};return r||a&&null!==n&&i(n),[s,{refresh:i},{error:l,loading:c}]};var bt=_({props:{mock:{type:[Boolean,Object],default:rt.value},name:{type:String,required:!0},params:{type:Object,default:()=>({})},immediate:Boolean},setup(e){const t=e,{name:a,params:n,mock:r}=t,[s,{refresh:l},{loading:c,error:o}]=ft(a,{params:n,mock:r});return(e,t)=>L(e.$slots,"default",[p(s),{refresh:p(l)},{loading:p(c),error:p(o)}],void 0,!0)}});bt.__scopeId="data-v-0add110c";const _t=q("data-v-17e9497c");S("data-v-17e9497c");const wt={class:"DrawerOwner __center -axis"},yt={class:"info"},zt={class:"name"},xt={class:"email"};k();var St=_({setup:e=>(e,t)=>(h(),m(bt,{name:"user",params:{role:"owner"}},{default:_t((([e])=>{var t,a;return[b("div",wt,[b(Ze,{class:"avatar",url:null==e?void 0:e.avatar},null,8,["url"]),b("div",yt,[b("span",zt,$(null!=(t=null==e?void 0:e.fullname)?t:"Owner"),1),b("span",xt,$(null!=(a=null==e?void 0:e.email)?a:"user.name@github.io"),1)])])]})),_:1}))});St.__scopeId="data-v-17e9497c",S("data-v-6bb6736f");const kt={class:"Mask"};k();const[Ct,{toggle:Mt}]=X();var It=_({setup(e){w((e=>({"2b0e1860":e.maskVisibility,cc224558:p(t)})));const t=u((()=>["hidden","visible"][Ct.value]));return O((()=>{Mt(!0)})),(e,t)=>(h(),m("div",kt,[b("div",{class:"wrap",onClick:t[1]||(t[1]=()=>{return Mt(e=!0),void Bt(e);var e})})]))}});It.__scopeId="data-v-6bb6736f",S("data-v-20c09fcb");const Ht={class:"Drawer"},Lt={class:"wrap"};k();const[$t]=Y(240),[qt,{calc:Ot}]=Y(100,"%"),[Vt,{toggle:Tt}]=Y(256),[jt,{toggle:Nt}]=X(1),Bt=e=>{Tt(e),Nt(e),Mt(e)},At=u((()=>"0px"===Vt.value));var Dt=_({setup(e){w((e=>({"32347b34":p(a),"4cc64e19":p(t),ef92f48e:p(r),"9d3bcc5c":p(at),"4cc64e19":p(t),"6fb819a6":e.drawerOpacity,ef92f490:p(n)})));const t=$t,a=qt,n=Vt,r=Ot((()=>`${wa.value} + ${za.value?at.value:"0px"}`));return O((()=>Bt(!0))),(e,t)=>(h(),m("div",Ht,[b("div",Lt,[b(St)])]))}});Dt.__scopeId="data-v-20c09fcb";var Et=_(o(c({},{name:"Space"}),{props:{height:[String,Number],width:[String,Number]},setup(e){const t=y(e),[a]=Y(t.height),[n]=Y(t.width);return(e,t)=>(h(),m("div",{class:"Space",style:{height:p(a),width:p(n)}},null,4))}}));Et.__scopeId="data-v-9b8d7136";var Gt={search:"Search",avatar:"Avatar",guest:"Guest",settings:"Settings",send:"Send",repo_link:"Github Repo",login_github_tip:"Login from Github >>",discussion_editor_tip:"Want to Say Something ? ...",more_menu:"More Actions",no_description:"Not Found Description..."},Rt={search:"搜索",avatar:"头像",guest:"看客",settings:"设置",send:"发送",repo_link:"Github 仓库",login_github_tip:"通过 Github 登陆 >>",discussion_editor_tip:"不想说点啥么？……",more_menu:"更多操作",no_description:"没有内容描述..."};const Wt=v(navigator.language),Pt={legacy:!1,locale:Wt.value,fallbackWarn:!1,fallbackLocale:"en",messages:{en:Gt,zh:c(c({},Gt),Rt),"en-US":Gt,"zh-CN":c(c({},Gt),Rt)}},Ft=I.exports.createI18n(Pt);V.locale(Wt.value);var Ut=_({props:{input:{type:[String,Number],default:()=>Date.now()}},setup(e){const t=y(e),[{now:a}]=((e,t)=>{const a=v(""),n=()=>V(null==e?void 0:e.value,t);return T((()=>{const e=n();a.value=e.toNow()})),[{now:a},n()]})(t.input);return(e,t)=>(h(),m("span",null,$(p(a)),1))}});Ut.__scopeId="data-v-09ed971c",S("data-v-15dde629");const Jt={class:"LabelGroup __center -axis __unselect"},Yt={class:"label"};k();var Xt=_({props:{list:Array},setup(e){const t=e,{list:a}=y(t);return(e,t)=>(h(),m("nav",Jt,[(h(!0),m(f,null,j(p(a),(({name:e},t)=>(h(),m(f,{key:t},[b("a",Yt,$(e),1),b(Et,{width:"4"})],64)))),128))]))}});Xt.__scopeId="data-v-15dde629",S("data-v-48f6eef7");const Zt={class:"BrowserListItem"},Kt={class:"head"},Qt={class:"__unset title"},ea={class:"__center -axis foot"},ta=b("span",{class:"author"},"Author",-1);k();var aa=_({props:{data:{type:Object,requried:!0}},setup(e){const t=e,{data:a}=y(t),n=[{name:"article"},{name:"news"},{name:"novel"}];return(e,t)=>{var r,s;return h(),m("div",Zt,[b("header",Kt,[b("h3",Qt,$(null!=(s=null==(r=p(a))?void 0:r.title)?s:"Title Title Title Title Title"),1),b(Et,{height:"8"}),b(Xt,{list:n}),b(Et,{height:"8"}),b(Ee,{class:"arrow",name:"arrow_right"})]),b("footer",ea,[b(Ze,{class:"avatar",size:"22"}),b(Et,{width:"4"}),ta,b(Et),b(Ut,{class:"date",input:Ut.now()+1e5},null,8,["input"])])])}}});aa.__scopeId="data-v-48f6eef7";const na=q("data-v-32a9f062");S("data-v-32a9f062");const ra={class:"Browser"},sa={class:"wrap"};k();const[la,{toggle:ca}]=et(!1);var oa=_({setup:e=>(e,t)=>(h(),m("div",ra,[b("div",sa,[b(Et,{height:p(ba)},null,8,["height"]),b(bt,{name:"articles"},{default:na((([e])=>[(h(!0),m(f,null,j(e,((e,t)=>(h(),m(aa,{key:t,data:e},null,8,["data"])))),128)),b(Et,{height:"48"})])),_:1})])]))});oa.__scopeId="data-v-32a9f062",S("data-v-88898968");const ia={class:"__unset Button"},ua={class:"wrap __center -axis -cross"};k();var da=_(o(c({},{name:"Button"}),{props:{size:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1,default:"auto"},width:{type:[String,Number],required:!1,default:"auto"}},setup(e){const t=e;w((e=>({"23f14abe":p(r),"4a934d0c":p(s)})));const a=y(t),n=Ge(a.size),[r]=Y(n(a.height)),[s]=Y(n(a.width));return(e,t)=>(h(),m("button",ia,[b("div",ua,[L(e.$slots,"default",{},void 0,!0)])]))}}));da.__scopeId="data-v-88898968",S("data-v-59f544f2");const va={class:"Search"},pa={class:"wrap"};k();var ga=_({setup(e){const{t:t}=I.exports.useI18n();return(e,a)=>(h(),m("div",va,[b("div",pa,[L(e.$slots,"left",{},void 0,!0),b("input",{class:"__unset input",placeholder:p(t)("search")},null,8,["placeholder"])])]))}});ga.__scopeId="data-v-59f544f2";const ha=q("data-v-0d395c11");S("data-v-0d395c11");const ma={class:"FloatActionBar"},fa={class:"wrap __center -axis"};k();const[ba]=Y(56),[_a]=Y(100,"%"),[wa,{toggle:ya}]=Y(ba.value),za=u((()=>"0px"===wa.value));var xa=_({setup(e){w((e=>({"985b56b6":p(r),"7a3f0288":p(s),"985b56b6":p(r),"3a53da68":p(l),"39509bd5":p(a),"39509bd5":p(a),"39509bd5":p(a),"50043cc6":p(nt),"39509bd5":p(a),"39509bd5":p(a),"39509bd5":p(a),"39509bd5":p(a)})));const t=v(40),[a]=Y(t),[n]=Y(24),r=ba,s=_a,l=wa;return(e,a)=>(h(),m("div",ma,[b("div",fa,[b(da,{class:"action avatar"},{default:ha((()=>[b(Ze,{size:t.value},null,8,["size"])])),_:1}),b(da,{class:"action",onClick:a[1]||(a[1]=()=>p(ca)())},{default:ha((()=>[b(Ee,{name:"all_inbox",size:p(n)},null,8,["size"])])),_:1}),b(ga,{class:"search"},{left:ha((()=>[b(da,{class:"action drawer",onClick:a[2]||(a[2]=()=>p(Bt)())},{default:ha((()=>[b(Ee,{name:p(At)?"menu":"arrow_back",size:p(n)},null,8,["name","size"])])),_:1})])),_:1}),b(da,{class:"action"},{default:ha((()=>[b(Ee,{name:"sync",size:p(n)},null,8,["size"])])),_:1}),b(da,{class:"action"},{default:ha((()=>[b(Ee,{name:"more_vert",size:p(n)},null,8,["size"])])),_:1})])]))}});xa.__scopeId="data-v-0d395c11";const{error:Sa}=J("hook: scrolling"),ka={target:null,optimization:"throttle",throttle:{wait:300},debounce:{wait:200,immediate:!0}};S("data-v-6420c955");const Ca={class:"wrap"};k();const[Ma,...Ia]=((e={})=>{const t=Re(ka,e),{target:a,optimization:n}=t,r=i(t,["target","optimization"]),s=d(a)?a:v(a),l=H({scrollHeight:0,scrollWidth:0,height:0,width:0}),c=H({x:0,y:0}),o=H({x:0,y:0}),p=v(null),g=v([]),h=e=>{const{scrollTop:t=0,scrollLeft:a=0}=e.target;p.value=o.x!==a?"x":o.y!==t?"y":null,Object.assign(c,{x:"x"===p.value?a-o.x:c.x,y:"y"===p.value?t-o.y:c.y}),Object.assign(o,{x:a,y:t});const n=u((()=>g.value.filter((([e])=>"function"==typeof e))));if(n.value.length)for(const[r]of n.value)r(e)},m=()=>{if("debounce"===n){const{wait:e,immediate:t}=r.debounce;return((e,t,a=!0)=>{let n;return(...r)=>{void 0===n&&a&&e(...r),clearTimeout(n),n=setTimeout((()=>e(...r)),t)}})(h,e,t)}if("throttle"===n){const{wait:e}=r.throttle;return((e,t)=>{let a;return(...n)=>{void 0===a&&(a=setTimeout((()=>{e(...n),a=clearTimeout(a)}),t))}})(h,e)}return h},f=(e=s.value)=>{if(null===e)return Sa(`can not mount 'scroll' event listener for the target: "${e}"`);const{scrollHeight:t,scrollWidth:a,clientHeight:n,clientWidth:r}=e;Object.assign(l,{scrollHeight:t,scrollWidth:a,height:n,width:r}),e.addEventListener("scroll",m(),!1)};null!==s.value&&f();const b=(e,t=s.value)=>null==t?void 0:t.scrollTo(Re({top:0,left:0,behavior:"smooth"},e));return[{targetRef:s,targetMeta:l,axis:p,offset:o,distance:c},{mountListener:f,addListener:e=>{const t=Symbol(e.toString());return g.value.push([e,{symbol:t}]),t},removeListener:e=>{g.value=g.value.filter((([,{symbol:t}])=>t!==e))},scroll:b,scrollY:(e,t=!0)=>b({top:e,behavior:t?"smooth":"auto"}),scrollX:(e,t=!0)=>b({left:e,behavior:t?"smooth":"auto"})}]})({throttle:{wait:400}}),Ha=Ma,{targetRef:La}=Ha,$a=i(Ha,["targetRef"]),[{mountListener:qa,addListener:Oa,scrollY:Va}]=Ia,[,{isDown:Ta}]=(({distance:e,axis:t})=>{const a=u((()=>({x:e.x<0?"left":"right",y:e.y<0?"up":"down"}))),n=e=>null!==t.value&&a.value[t.value]===e;return[a,{isDirection:n,isDown:()=>n("down")}]})($a);var ja=_({setup(e){const t=La;return B(qa),A(T((()=>ya(Ta())))),(e,a)=>(h(),m("article",{class:"Reader",ref:t},[b("div",Ca,[b(Et,{height:p(ba)},null,8,["height"]),(h(),m(f,null,j(25,(e=>b("p",{key:e},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure."))),64))]),L(e.$slots,"bottom",{},void 0,!0)],512))}});ja.__scopeId="data-v-6420c955",S("data-v-4a330384");const Na={class:"Discussion"},Ba={class:"wrap"};k();var Aa=_({setup:e=>(e,t)=>(h(),m("div",Na,[b("div",Ba,[(h(),m(f,null,j(15,(e=>b("p",{key:e},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum reiciendis aperiam consectetur veniam dignissimos voluptate quibusdam atque ipsam quasi, ullam earum eligendi similique, neque soluta amet incidunt excepturi iure."))),64))])]))});Aa.__scopeId="data-v-4a330384";const Da=q("data-v-46982cc7");S("data-v-46982cc7");const Ea={class:"wrap __center -axis"},Ga=b("span",{class:"name"},"Guest",-1),Ra={class:"label"};k();const[Wa,{calc:Pa}]=Y(48),Fa=Pa((()=>`${wa.value} + ${tt.value}`));var Ua=_({setup(e){w((e=>({b8f15dba:p(a),"00013a4e":p(n)})));const t=Ka("y"),a=Wa,n=Fa,{t:r}=I.exports.useI18n();return(e,a)=>(h(),m("div",{class:["DiscussionEditorBar",{"-drop":p(t)}]},[b("div",Ea,[b(Ze,{size:"42"}),Ga,b(Et),p(t)?(h(),m(f,{key:1},[(h(),m(da,{key:0,class:"action"},{default:Da((()=>[b("span",Ra,$(p(r)("login_github_tip")),1),b(Ee,{name:"github"})])),_:1}))],64)):(h(),m(da,{key:0,class:"action",onClick:a[1]||(a[1]=()=>p(Qa)())},{default:Da((()=>[b(Ee,{name:"talk"})])),_:1}))])],2))}});Ua.__scopeId="data-v-46982cc7",S("data-v-bdb6cd48");const Ja={class:"wrap"};k();const[{targetRef:Ya,rectMeta:Xa},{observe:Za,isInter:Ka}]=(({offset:e,targetMeta:t})=>{const a=v(null),n=H({x:0,y:0}),r=u((()=>{const{height:e,width:a}=y(t),{x:r,y:s}=n;return{x:0<=r&&r<=a.value?r:null,y:0<=s&&s<=e.value?s:null}}));return[{targetRef:a,rectMeta:n,interRect:r},{observe:(t=a,r={immediate:!0})=>{const s=d(t)?p(t):t;N(e,(()=>{const{x:e,y:t}=s.getBoundingClientRect();Object.assign(n,{x:e,y:t})}),r)},isInter:e=>u((()=>!!r.value[e]))}]})($a),Qa=()=>{Va(Xa.y-globalThis.innerHeight/2)};var en=_({setup(e){w((e=>({c10e3c50:p(t),"35498e9c":p(Wa),"3e548000":p(Fa),"35498e9c":p(Wa),"35498e9c":p(Wa),b09150f0:p(a),b09150f0:p(a)})));const[t]=Y(4,"em"),[a]=Y(48,"px"),n=v(null);B((()=>Za(n)));const{t:r}=I.exports.useI18n();return(e,t)=>(h(),m("div",{class:"DiscussionEditor",ref:n},[b("div",Ja,[b("textarea",{class:"textarea __unset",placeholder:p(r)("discussion_editor_tip")},null,8,["placeholder"]),D("",!0)])],512))}});en.__scopeId="data-v-bdb6cd48";var tn=_(o(c({},{name:"GNotion"}),{setup:e=>(e,t)=>(h(),m(f,null,[b(xa),b(Dt),p(la)?(h(),m(oa,{key:0})):D("",!0),D("",!0),(h(),m(ja,{key:2},{bottom:E((()=>[b(Ua),b(en),b(Aa)])),_:1})),b(It)],64))}));const{GNotion:an}=globalThis,nn={parse:R.parse};const rn=(()=>{const e={runtime:nn};an.initCustom(e);const{config:t,settings:a}=an;return We("_gnotion_config",t),We("_gnotion_settings",a),G(tn)})();rn.use(Ft),rn.mount("#app");
