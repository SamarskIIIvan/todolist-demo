(this["webpackJsonptodolist-25.10.21"]=this["webpackJsonptodolist-25.10.21"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(7),a=n.n(r),s=(n(12),n(6)),l=n(2),o=(n(13),n(0));function u(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),u=s[0],d=s[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{value:i,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(t){d(null),13===t.charCode&&(e.addTask(i),r(""))},className:u?"error":'"'}),Object(o.jsx)("button",{onClick:function(){""!==i.trim()?(e.addTask(i.trim()),r("")):d("Title is required")},children:"+"}),u&&Object(o.jsx)("div",{className:"error-message",children:u})]}),Object(o.jsx)("ul",{children:e.tasks.map((function(t){return Object(o.jsxs)("li",{className:t.isDone?"is-Done":"",children:[Object(o.jsx)("input",{type:"checkbox",onChange:function(n){e.changeStatus(t.id,n.currentTarget.checked)},checked:t.isDone}),Object(o.jsx)("span",{children:t.title}),Object(o.jsx)("button",{onClick:function(){return e.deleteTask(t.id)},children:"x"})]},t.id)}))}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return e.changeFilter("all")},className:"all"===e.filter?"active-filter":"",children:"All"}),Object(o.jsx)("button",{onClick:function(){return e.changeFilter("active")},className:"active"===e.filter?"active-filter":"",children:"Active"}),Object(o.jsx)("button",{onClick:function(){return e.changeFilter("completed")},className:"completed"===e.filter?"active-filter":"",children:"Completed"})]})]})}var d=n(17);var j=function(){var e=Object(c.useState)([{id:Object(d.a)(),title:"css",isDone:!1},{id:Object(d.a)(),title:"html",isDone:!1},{id:Object(d.a)(),title:"javaScript",isDone:!1},{id:Object(d.a)(),title:"react",isDone:!1},{id:Object(d.a)(),title:"redux",isDone:!1},{id:Object(d.a)(),title:"typeScript",isDone:!1}]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)("all"),a=Object(l.a)(r,2),j=a[0],b=a[1],f=n;return"completed"===j&&(f=n.filter((function(e){return!0===e.isDone}))),"active"===j&&(f=n.filter((function(e){return!1===e.isDone}))),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(u,{title:"What to learn",tasks:f,deleteTask:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)},changeFilter:function(e){b(e)},addTask:function(e){var t=[{id:Object(d.a)(),title:e,isDone:!1}].concat(Object(s.a)(n));i(t)},changeStatus:function(e,t){var c=n.find((function(t){return t.id===e}));c&&(c.isDone=t),i(Object(s.a)(n))},filter:j})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.79e20736.chunk.js.map