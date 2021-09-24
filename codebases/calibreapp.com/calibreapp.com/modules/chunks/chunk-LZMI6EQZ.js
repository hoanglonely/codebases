import{a as ae,b as de}from"./chunk-2H33SDBN.js";import{c as le}from"./chunk-7WG3MLL3.js";import{b as te,c as ie,d as re,e as ne}from"./chunk-DQSCGVX4.js";import{c as x,e as b,f as se,h as E,i as C}from"./chunk-ECKCXZDJ.js";import{f as oe}from"./chunk-EWS3NXQH.js";import{d as u,i as S}from"./chunk-AQDAG4C2.js";import{b as j,c as Z,d as $,e as R,f as ee}from"./chunk-TT3E6PQD.js";import{i as L}from"./chunk-WNVFIGRJ.js";import{b as Y}from"./chunk-JXNVBN57.js";import{b as D,c as f}from"./chunk-FJD4SS3V.js";import{a as W}from"./chunk-M5TAP4VX.js";import{b as X,d as p}from"./chunk-CL7MNENB.js";import{a as l,b as F,c as K,f as z,i as J}from"./chunk-ORNWO27Z.js";var e=z(J());var s=z(J());var Ie=r=>{if(!r)return"No longer present";let i=ne(r),d=new Date;return d.setHours(0),d.setMinutes(0),d.setSeconds(0),i>=d?"Today":re(ie(new Date,90),i)?"No longer present":`${te(i)} ago`},ye=({loading:r,thirdParties:i,blockedThirdParties:d,onUpdate:v})=>s.default.createElement(s.default.Fragment,null,r?s.default.createElement(oe,{p:0,label:"Third Party"}):!i.length||s.default.createElement(ee,{bleed:0},s.default.createElement("thead",null,s.default.createElement(j,null,s.default.createElement($,null,"Third party"),s.default.createElement($,{textAlign:"right"},"Last detected"))),s.default.createElement(R,null,i.map(({thirdParty:a,lastSeen:n},B)=>s.default.createElement(j,{key:B},s.default.createElement(Z,{px:null,pr:3,colSpan:2,py:"15px"},s.default.createElement(C,{id:a.name,name:a.name,defaultChecked:(d||[]).find(w=>w.name===a.name),value:a.name,onChange:()=>v(a)},s.default.createElement(D,{as:"span",width:1},s.default.createElement(f,{as:"span",flex:1,"data-qa":`thirdParty:${a.name}`},a.name),s.default.createElement(f,{as:"span"},Ie(n)))))))))),pe=ye;var Pe=r=>{let i=8;return r<1e5?`${(r*i/1e3).toFixed(2)} Kbps`:`${(r*i/1e6).toFixed(2)} Mbps`},G=Pe;var me=w=>{var _=w,{orgId:r,siteId:i,onSave:d,onCancel:v,saving:a,loading:n}=_,B=K(_,["orgId","siteId","onSave","onCancel","saving","loading"]);let fe=X(),[c,h]=(0,e.useState)(B),T=o=>{let t=l(l({},c),o);h(t)};(0,e.useEffect)(()=>{h(B)},[n]);let{name:q,device:M,connection:V,jsIsDisabled:I,adBlockerIsEnabled:y,headers:A,cookies:H,blockedThirdParties:k}=c,ue=o=>{o.preventDefault(),d({name:q,device:M,connection:V,jsIsDisabled:I,adBlockerIsEnabled:y,headers:A,cookies:H,blockedThirdParties:k.map(({name:t})=>({name:t}))})},be=o=>{let t=Object.assign([],k);k.find(m=>m.name===o.name)?t=k.filter(m=>m.name!==o.name):t.push(o),h(F(l({},c),{blockedThirdParties:t}))},{loading:N,data:ce}=W(le,{variables:{orgId:r,siteId:i}}),{devices:he={},connections:Te=[],organisation:ke}=ce||{},{site:ge}=ke||{},{siteThirdParties:xe,headers:Ce,cookies:Be}=ge||{},{edges:Fe}=xe||{},U=(Fe||[]).map(o=>l({},o.node)),{enumValues:De}=he||{},Se=(De||[]).map(({description:o,name:t})=>({label:fe.formatMessage({id:`device.${t}.title`,defaultMessage:o}),value:t}))||[],ve=Te.slice().sort((o,t)=>o.download-t.download).map(({id:o,title:t,latency:m,download:O,upload:Q})=>{let P=`${t}`,g=[];return m&&g.push(`Latency: ${m}ms`),O&&g.push(`Downstream: ${G(O)}`),Q&&g.push(`Upstream: ${G(Q)}`),g.length&&(P=P+` (${g.join(", ")})`),{label:P,value:o}})||[];return e.default.createElement("form",{onSubmit:ue},e.default.createElement(u,{p:0,px:4},e.default.createElement(x,{mb:0},e.default.createElement(b,{label:"Name"},e.default.createElement(se,{name:"profile_name",defaultValue:q,required:!0,maxLength:120,onChange:o=>T({name:o}),placeholder:"Mobile with fast connection",loading:n})),e.default.createElement(b,{label:"Device emulation"},e.default.createElement(E,{name:"profile_device",defaultValue:M,options:Se,onChange:o=>T({device:o}),loading:n||N}))),e.default.createElement(x,{mb:0},e.default.createElement(b,{label:"Connection speed",span:2},e.default.createElement(E,{name:"profile_connection",defaultValue:V,options:ve,onChange:o=>T({connection:o}),loading:n||N}))),e.default.createElement(x,{mb:0},e.default.createElement(b,{mb:"15px"},e.default.createElement(C,{id:"profile_jsIsDisabled",name:"profile_jsIsDisabled",defaultChecked:I,value:"javascript",onChange:()=>T({jsIsDisabled:!I})},e.default.createElement("span",{"data-qa":"jsIsDisabled"},e.default.createElement(p,{id:"testProfile.jsIsDisabled.action"}))))),e.default.createElement(x,{mb:0},e.default.createElement(b,null,e.default.createElement(C,{id:"profile_adBlockerIsEnabled",name:"profile_adBlockerIsEnabled",defaultChecked:y,value:"adBlockerIsEnabled",onChange:()=>T({adBlockerIsEnabled:!y})},e.default.createElement("span",{"data-qa":"adBlockerIsEnabled"},e.default.createElement(p,{id:"testProfile.adblocker.action"})))))),e.default.createElement(u,null,e.default.createElement(S,{id:"site.settings.profiles.headers",mb:0}),e.default.createElement(ae,{loading:n,parentHeaders:Ce,headers:A,onUpdate:o=>h(F(l({},c),{headers:o})),buttonVariant:"tertiary"})),e.default.createElement(u,null,e.default.createElement(S,{id:"site.settings.profiles.cookies",mb:0}),e.default.createElement(de,{loading:n,parentCookies:Be,cookies:H,onUpdate:o=>h(F(l({},c),{cookies:o})),buttonVariant:"tertiary"})),e.default.createElement(u,{borderBottom:"none"},e.default.createElement(S,{id:"site.settings.profiles.thirdParties.lockup"},e.default.createElement(Y,null,n?" ":U.length&&e.default.createElement(p,{id:"site.settings.profiles.thirdParties.description"})||e.default.createElement(p,{id:"site.settings.profiles.thirdParties.empty"}))),e.default.createElement(pe,{loading:n,thirdParties:U,blockedThirdParties:k,onUpdate:be})),e.default.createElement(u,null,e.default.createElement(D,null,e.default.createElement(f,{order:2},e.default.createElement(L,{disabled:a,type:"submit"},e.default.createElement(p,{id:"site.settings.profiles.actions.save"}))),e.default.createElement(f,{mr:2,order:1},e.default.createElement(L,{type:"button","data-testid":"pages-settings-cancel",onClick:v,variant:"tertiary"},e.default.createElement(p,{id:"site.actions.cancel"}))))))};me.defaultProps={jsIsDisabled:!1,adBlockerIsEnabled:!1,headers:[],cookies:[],blockedThirdParties:[]};var We=me;export{We as a};
//# sourceMappingURL=chunk-LZMI6EQZ.js.map
