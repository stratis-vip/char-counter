(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(12),a(13),a(1)),i=(a(14),function(e){var t,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(e.ready),s=Object(o.a)(u,2),m=s[0],b=s[1],v=e.title,g=e.limit,h=e.limitUp,f=e.id;return r.a.createElement("div",{className:"box"},r.a.createElement("h2",null,v),r.a.createElement("textarea",{id:f&&"box",className:(t=m,t?"green":"red"),cols:60,rows:5,value:c,onChange:function(e){var t=e.target.value;i(t),t.length>=g?h?t.length<h?b(!0):b(!1):b(!0):b(!1)}}),r.a.createElement("input",{value:c.length,readOnly:!0}))}),u=a(6),s=(a(15),function(){var e=Object(n.useState)(void 0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],m=i[1],b=Object(n.useState)(""),v=Object(o.a)(b,2),g=v[0],h=v[1],f=Object(n.useState)(!1),d=Object(o.a)(f,2),E=d[0],O=d[1];Object(n.useEffect)((function(){if(!a){var e=localStorage.getItem("hobbies");if(e)return l(JSON.parse(e).sort());localStorage.setItem("hobbies",JSON.stringify([])),l([])}}),[a]);var p;return r.a.createElement("div",null,r.a.createElement("h2",null,"Hobbies"),r.a.createElement("div",{className:"hob"},r.a.createElement("div",{className:"left"},a&&a[0]&&r.a.createElement("select",{onChange:function(e){var t=g+(""===g?"":", ")+e.currentTarget.value;h(t),t.length>=20&&O(!0)}},a?0===a.length?null:a.map((function(e,t){return r.a.createElement("option",{key:t},e)})):null),r.a.createElement("input",{value:s,onChange:function(e){m(e.target.value)}}),r.a.createElement("button",{onClick:function(){if(a&&s.length>0)if(a.includes(s))alert("exists");else{var e=[].concat(Object(u.a)(a),[s]).sort();localStorage.setItem("hobbies",JSON.stringify(e)),l(void 0),m("")}}},"\u03a0\u03c1\u03cc\u03c3\u03b8\u03b5\u03c3\u03b7 \u03a7\u03cc\u03bc\u03c0\u03b9")),r.a.createElement("textarea",{className:(p=E,p?"green":"red"),cols:40,rows:5,value:g,onChange:function(e){var t=e.target.value;h(t),t.length>=20?O(!0):O(!1)}})))});var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,{title:"about me",ready:!1,limit:220}),r.a.createElement(i,{title:"about you",ready:!1,limit:220}),r.a.createElement(s,null),r.a.createElement(i,{title:"search",ready:!1,limit:20,limitUp:60}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.71c9506c.chunk.js.map