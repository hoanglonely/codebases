import{a as lt,e as pt}from"./chunk-MJ3Q3BKQ.js";import{a as at}from"./chunk-KDFOZJXC.js";import{a as ot}from"./chunk-HVWSZP6M.js";import{b as nt,c as rt}from"./chunk-IHNDKV3B.js";import{a as et}from"./chunk-SJXFQYTK.js";import{a as _}from"./chunk-KCN7NYIH.js";import{a as Z}from"./chunk-YG5VU5UW.js";import"./chunk-CWNFCDZO.js";import{a as st}from"./chunk-2LV7R6US.js";import{a as it,b as mt}from"./chunk-JLSB3ZPE.js";import{a as tt}from"./chunk-TQDX6ACF.js";import{a as E}from"./chunk-IHTWZOQH.js";import"./chunk-OFY5O3WH.js";import"./chunk-WEIYGZZI.js";import"./chunk-H7BUDTAB.js";import{a as Y}from"./chunk-INK6RNBJ.js";import{b as X}from"./chunk-5AD3ZUGZ.js";import"./chunk-2OWL4LTV.js";import{a as V}from"./chunk-RZQ4QVPP.js";import{a as R}from"./chunk-UJ4RDOBF.js";import{d as M}from"./chunk-EWS3NXQH.js";import{j as O}from"./chunk-AQDAG4C2.js";import{a as W,b as C,c as B,d as D,e as j,f as J}from"./chunk-TT3E6PQD.js";import{a as Q,i as U}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import{b as L,c as N,e as w,f as h}from"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import{b as T,c as i}from"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as K}from"./chunk-I2CW5RII.js";import"./chunk-EHER635N.js";import"./chunk-D3V43LVN.js";import{a as z}from"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{b as H,d as r}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{a as y,b as G,f as I,i as $}from"./chunk-ORNWO27Z.js";var t=I($());var m=I($());var e=I($());var kt=({orgId:l,name:g,description:c,slug:s,sitesCount:p,members:x,membersCount:f,onRemove:d})=>{let[o,u]=st({triggerOnce:!1,rootMargin:"50% 0% 50%"});return e.default.createElement(C,{key:s,ref:o},u?e.default.createElement(e.default.Fragment,null,e.default.createElement(B,{py:"15px"},e.default.createElement(T,{alignItems:"center"},e.default.createElement(i,{alignItems:"center",flex:1,mr:3},e.default.createElement(h,null,e.default.createElement(w,{to:`/teams/${s}`},g)),e.default.createElement(L,{as:"div",level:"xs"},c)))),e.default.createElement(B,{py:"15px"},e.default.createElement(T,{alignItems:"center"},e.default.createElement(i,{alignItems:"center",flex:1,mr:3},e.default.createElement(L,{level:"sm"},p>0?e.default.createElement(e.default.Fragment,null,p," ",e.default.createElement(r,{id:`teams.sites.${p===1?"singular":"plural"}`})):e.default.createElement(r,{id:"teams.sites.zero"}))))),e.default.createElement(B,{py:"15px"},e.default.createElement(T,{alignItems:"center"},e.default.createElement(i,{alignItems:"center",flex:1,mr:3},e.default.createElement(T,{alignItems:"center"},e.default.createElement(i,{mr:2,minWidth:"100px"},e.default.createElement(L,{level:"sm"},f>0?e.default.createElement(e.default.Fragment,null,f," ",e.default.createElement(r,{id:`teams.members.${f===1?"singular":"plural"}`})):e.default.createElement(r,{id:"teams.members.zero"}))),e.default.createElement(i,{flex:1},e.default.createElement(at,{avatars:x.map(({user:a,invitationName:b})=>({name:(a==null?void 0:a.name)||b,url:a==null?void 0:a.avatar,variant:"secondary"}))})))))),e.default.createElement(B,{textAlign:"left",alignItems:"center"},e.default.createElement(nt,{label:"Edit",to:`/organisations/${l}/teams/${s}/edit`,mr:"15px"}),d&&e.default.createElement(e.default.Fragment,null,e.default.createElement(r,{id:"teams.prompts.remove",values:{team:g}},a=>e.default.createElement(rt,{"data-testid":`remove-${s}`,p:"0px",onClick:()=>{let b=g;prompt(a)===b&&d(s)}}))))):e.default.createElement(B,{colSpan:"5",py:"37px"}))},dt=kt;var St=({orgId:l,teams:g,onRemove:c})=>{let[s,p]=(0,m.useState)("name"),[x,f]=(0,m.useState)("asc"),d=g.slice().sort((o,u)=>{switch(s){case"sitesCount":case"membersCount":return mt(o[s],u[s],x);default:return it(o[s],u[s],x)}});return m.default.createElement(i,{pb:"60px","data-testid":"teams"},m.default.createElement(J,{bleed:0},m.default.createElement(W,null,m.default.createElement(C,null,["name","sitesCount","membersCount"].map((o,u)=>m.default.createElement(D,{key:o,py:"15px",width:u===1?"20%":"35%"},m.default.createElement(Q,{attribute:o,onUpdateSortBy:p,onUpdateSortDirection:f,sortBy:s,sortDirection:x},m.default.createElement(r,{id:`teams.attributes.${o}`})))),m.default.createElement(D,{width:"10%",textAlign:"left"},m.default.createElement(r,{id:"teams.attributes.actions"})))),(d==null?void 0:d.length)?m.default.createElement(j,null,d.map(o=>m.default.createElement(dt,y({key:o.slug,orgId:l,onRemove:c},o)))):null))},ft=St;var vt=({match:{params:{orgId:l}}})=>{let g=H(),{features:c}=K({orgId:l}),{feedback:s,setFeedback:p,clearFeedback:x}=et(),[f,d]=(0,t.useState)(!1),[o,u]=(0,t.useState)(null),[a,b]=(0,t.useState)(!1),[A,ut]=(0,t.useState)(!1),{loading:k,data:gt}=z(lt,{variables:{orgId:l},fetchPolicy:"cache-and-network",onError:n=>{p({type:"error",message:E(n),location:"teamsList"})},onCompleted:()=>{d(!0)}}),{organisation:xt}=gt||{},{name:q,teams:Tt,subscription:ct}=xt||{},{plan:{name:bt}}=ct||{plan:{}},[Bt]=V(pt,{onCompleted:({deleteTeam:n})=>{let v=a.filter(F=>F.slug!==n.slug);b(v),p({type:"success",location:"teamsList",message:t.default.createElement(r,{id:"teams.notifications.removeSuccess",values:{team:t.default.createElement(h,{color:"green400"},n.name)}})})},onError:n=>{p({type:"error",message:E(n),location:"teamsList"})}});(0,t.useEffect)(()=>{k||(b(Tt.map(n=>{var v,F,P;return G(y({},n),{sitesCount:(v=n.sitesList)==null?void 0:v.totalCount,membersCount:(F=n.membersCount)==null?void 0:F.totalCount,members:(((P=n.membersList)==null?void 0:P.edges)||[]).map(({node:ht})=>ht)})})),ut(o==null?void 0:o.length))},[k,o]);let yt=n=>{Bt({variables:{organisation:l,slug:n}})};if(k)return t.default.createElement(M,null);let S=(o==null?void 0:o.length)?Y(a,o,{keys:["name","description"]}):a||[];return t.default.createElement(t.default.Fragment,null,t.default.createElement(R,{id:"teams.title",breadcrumbs:[q]}),t.default.createElement(O,{variant:"button"},t.default.createElement(i,{flex:1,mb:[4,0]},t.default.createElement(ot,null,t.default.createElement(r,{id:"teams.heading",values:{organisation:q}}))),t.default.createElement(i,{pr:1,width:[1,"auto"]},t.default.createElement(U,{"data-testid":"addSite",to:`/organisations/${l}/teams/new`,disabled:!c.includes("multipleTeams")},t.default.createElement(r,{id:"teams.actions.add"})))),f?t.default.createElement(t.default.Fragment,null,t.default.createElement(T,{flexWrap:["wrap","nowrap"],alignItems:"center",justifyContent:"space-between",mx:4,mt:3},t.default.createElement(i,{flex:1,width:[1,"auto"]},t.default.createElement(N,{as:"h2",level:"sm",color:"grey400"},t.default.createElement(r,{id:`teams.summary.${A?"filtered":"teams"}`,values:{count:t.default.createElement(h,null,S.length," ",t.default.createElement(r,{id:`teams.summary.${S.length===1?"singular":"plural"}`}))}}))),t.default.createElement(i,{width:[1,"auto"],mt:[2,0]},t.default.createElement(X,{width:1,type:"search",onChange:n=>u((n==null?void 0:n.length)?n:null),placeholder:g.formatMessage({id:"teams.actions.search"}),loading:o&&k})))):t.default.createElement(M,null),(s==null?void 0:s.location)==="teamsList"?t.default.createElement(_,y({"data-qa":"teamsList",p:null,pt:4,px:4,pb:0,duration:0,onDismiss:()=>x()},s)):null,c.includes("multipleTeams")?null:t.default.createElement(i,{mt:4,mx:4},t.default.createElement(Z,{"data-qa":"noMultipleTeams",type:"warning"},t.default.createElement(r,{id:"teams.notifications.upgrade.description",values:{plan:bt}})," ",t.default.createElement(w,{to:`/organisations/${l}/billing/plans`},t.default.createElement(r,{id:"teams.notifications.upgrade.link"})))),f?(o==null?void 0:o.length)||S.length?t.default.createElement(i,{mx:4,mt:s.location==="teamsList"?3:"50px"},t.default.createElement(ft,{teams:S,orgId:l,onRemove:yt})):t.default.createElement(tt,{id:"teams",offset:190,offsets:[317,190]}):null)},re=vt;export{re as default};
//# sourceMappingURL=Teams-IS4X2CNG.js.map
