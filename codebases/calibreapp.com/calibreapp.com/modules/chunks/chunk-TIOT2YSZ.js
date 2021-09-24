import{e as n,f as h,h as m}from"./chunk-ECKCXZDJ.js";import{a as o,c as b,f as g,i as v}from"./chunk-ORNWO27Z.js";var d=g(v());var c=T=>{var p=T,{loading:l,locations:t,location:s,onChange:r}=p,u=b(p,["loading","locations","location","onChange"]);return d.default.createElement(n,o({"data-testid":"agent-settings-location",label:"Test location"},u),d.default.createElement(m,{name:"agent_settings_location",options:(t||[]).map(i=>({label:`${i.emoji} ${i.name}`,value:i.tag})),defaultValue:s,onChange:i=>r({location:i}),loading:l||!t}))},C=c;var a=g(v());var f=l=>{let t=new Date;return t.setHours(l),t.getUTCHours()},e=f;var _=l=>a.default.createElement(n,{labelid:"site.settings.agent.hour.label",helpid:"site.settings.agent.hour.help"},a.default.createElement(h,o({type:"number",min:"1",max:"168"},l))),y=l=>{let t=Intl.DateTimeFormat().resolvedOptions().timeZone;return a.default.createElement(n,{labelid:"site.settings.agent.time.label",help:`The time is localised to ${t} timezone.`},a.default.createElement(m,o({options:[{label:"Midnight",value:e(0)},{label:"1am",value:e(1)},{label:"2am",value:e(2)},{label:"3am",value:e(3)},{label:"4am",value:e(4)},{label:"5am",value:e(5)},{label:"6am",value:e(6)},{label:"7am",value:e(7)},{label:"8am",value:e(8)},{label:"9am",value:e(9)},{label:"10am",value:e(10)},{label:"11am",value:e(11)},{label:"12pm",value:e(12)},{label:"1pm",value:e(13)},{label:"2pm",value:e(14)},{label:"3pm",value:e(15)},{label:"4pm",value:e(16)},{label:"5pm",value:e(17)},{label:"6pm",value:e(18)},{label:"7pm",value:e(19)},{label:"8pm",value:e(20)},{label:"9pm",value:e(21)},{label:"10pm",value:e(22)},{label:"11pm",value:e(23)}]},l)))},F=({scheduleInterval:l,scheduleAnchor:t,onChange:s,loading:r})=>a.default.createElement(a.default.Fragment,null,a.default.createElement(n,{"data-testid":"agent-settings-schedule",labelid:"site.settings.agent.schedule.label",helpid:"site.settings.agent.schedule.help"},a.default.createElement(m,{"data-testid":"agent-settings-schedule-interval",name:"agent_settings_schedule_interval",options:[{label:"Off",value:"off"},{label:"Daily",value:"daily"},{label:"Every X Hours",value:"every_x_hours"},{label:"Hourly",value:"hourly"}],defaultValue:l,onChange:u=>s({scheduleInterval:u}),loading:r})),l=="every_x_hours"&&a.default.createElement(_,{"data-testid":"agent-settings-schedule-hour",name:"agent_settings_schedule_anchor",defaultValue:t,onChange:u=>s({scheduleAnchor:parseInt(u,10)})}),l=="daily"&&a.default.createElement(y,{"data-testid":"agent-settings-schedule-time",name:"agent_settings_schedule_anchor",defaultValue:t,onChange:u=>s({scheduleAnchor:parseInt(u,10)})})),U=F;export{C as a,U as b};
//# sourceMappingURL=chunk-TIOT2YSZ.js.map
