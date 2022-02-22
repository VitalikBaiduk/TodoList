(this.webpackJsonptodo16v2=this.webpackJsonptodo16v2||[]).push([[0],{124:function(t,e,a){},125:function(t,e,a){},150:function(t,e,a){"use strict";a.r(e);var n,i,o=a(0),s=a.n(o),c=a(32),r=a.n(c),d=(a(124),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,216)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;a(t),n(t),i(t),o(t),s(t)}))}),l=(a(125),a(19)),u=a(25),j=a(15),b=a(96),f=a.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"cb4e4b82-6baf-407e-8a88-0e6356d76e2c"}}),h=function(){return f.get("todo-lists")},O=function(t){return f.post("todo-lists",{title:t})},p=function(t){return f.delete("todo-lists/".concat(t))},m=function(t,e){return f.put("todo-lists/".concat(t),{title:e})},g=function(t){return f.get("todo-lists/".concat(t,"/tasks"))},v=function(t,e){return f.delete("todo-lists/".concat(t,"/tasks/").concat(e))},x=function(t,e){return f.post("todo-lists/".concat(t,"/tasks"),{title:e})},k=function(t,e,a){return f.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},C=function(t){return f.post("/auth/login",t)},T=function(){return f.get("/auth/me")},y=function(){return f.delete("/auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var I=function(t,e){t.messages.length?e(R({error:t.messages[0]})):e(R({error:"Some error occurred}"})),e(D({status:"failed"}))},A=function(t,e){e(R({error:t.message?t.message:"Some error occurred"})),e(D({status:"failed"}))},w=a(34),S=Object(w.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),F=S.reducer,L=S.actions.setIsLoggedInAC,E=Object(w.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppErrorAC:function(t,e){t.error=e.payload.error},setAppStatusAC:function(t,e){t.status=e.payload.status},setIsInitialized:function(t){t.isInitialized=!0}}}),P=E.reducer,R=E.actions.setAppErrorAC,D=E.actions.setAppStatusAC,N=E.actions.setIsInitialized,M=Object(w.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift.apply(t,[Object(u.a)(Object(u.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(j.a)(t)))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),z=M.reducer,q=M.actions,B=q.removeTodolistAC,H=q.addTodolistAC,U=q.changeTodolistTitleAC,Z=q.changeTodolistFilterAC,J=q.changeTodolistEntityStatusAC,K=q.setTodolistsAC,_=Object(w.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.task.id].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(u.a)(Object(u.a)({},a[n]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:function(t){t.addCase(H,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(B,(function(t,e){delete t[e.payload.id]})),t.addCase(K,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}}),V=_.reducer,Y=_.actions,$=Y.removeTaskAC,G=Y.addTaskAC,Q=Y.updateTaskAC,W=Y.setTasksAC,X=function(t,e,a){return function(n,i){var o=i().tasks[a].find((function(e){return e.id===t}));if(o){var s=Object(u.a)({deadline:o.deadline,description:o.description,priority:o.priority,startDate:o.startDate,title:o.title,status:o.status},e);k(a,t,s).then((function(i){if(0===i.data.resultCode){var o=Q({taskId:t,model:e,todolistId:a});n(o)}else I(i.data,n)})).catch((function(t){A(t,n)}))}else console.warn("task not found in the state")}},tt=a(204),et=a(212),at=a(13),nt=a(197),it=a(205),ot=a(193),st=a(1),ct=s.a.memo((function(t){var e=t.addItem,a=t.disabled,n=void 0!==a&&a;console.log("AddItemForm called");var i=Object(o.useState)(""),s=Object(at.a)(i,2),c=s[0],r=s[1],d=Object(o.useState)(null),l=Object(at.a)(d,2),u=l[0],j=l[1],b=function(){""!==c.trim()?(e(c),r("")):j("Title is required")};return Object(st.jsxs)("div",{children:[Object(st.jsx)(nt.a,{variant:"outlined",disabled:n,error:!!u,value:c,onChange:function(t){r(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(st.jsx)(it.a,{color:"primary",onClick:b,disabled:n,children:Object(st.jsx)(ot.a,{})})]})})),rt=a(105),dt=s.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),a=Object(at.a)(e,2),n=a[0],i=a[1],s=Object(o.useState)(t.value),c=Object(at.a)(s,2),r=c[0],d=c[1];return n?Object(st.jsx)(nt.a,{value:r,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(r)}}):Object(st.jsx)("span",{onDoubleClick:function(){i(!0),d(t.value)},children:t.value})})),lt=a(206),ut=a(194),jt=a(199),bt=s.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(o.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?n.Completed:n.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(st.jsxs)("div",{className:t.task.status===n.Completed?"is-done":"",children:[Object(st.jsx)(jt.a,{checked:t.task.status===n.Completed,color:"primary",onChange:a}),Object(st.jsx)(dt,{value:t.task.title,onChange:i}),Object(st.jsx)(it.a,{onClick:e,children:Object(st.jsx)(ut.a,{})})]},t.task.id)})),ft=s.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(rt.a)(t,["demo"]);console.log("Todolist called");var s=Object(l.b)();Object(o.useEffect)((function(){if(!a){var t,e=(t=i.todolist.id,function(e){e(D({status:"loading"})),g(t).then((function(a){var n=a.data.items;e(W({tasks:n,todolistId:t})),e(D({status:"succeeded"}))}))});s(e)}}),[]);var c=Object(o.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),r=Object(o.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),d=Object(o.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(o.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(o.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===n.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===n.Completed}))),Object(st.jsxs)("div",{children:[Object(st.jsxs)("h3",{children:[Object(st.jsx)(dt,{value:i.todolist.title,onChange:r}),Object(st.jsx)(it.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(st.jsx)(ut.a,{})})]}),Object(st.jsx)(ct,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),Object(st.jsx)("div",{children:b.map((function(t){return Object(st.jsx)(bt,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(st.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(st.jsx)(lt.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:d,color:"inherit",children:"All"}),Object(st.jsx)(lt.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(st.jsx)(lt.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),ht=a(14),Ot=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(l.c)((function(t){return t.todolists})),i=Object(l.c)((function(t){return t.tasks})),s=Object(l.b)(),c=Object(l.c)((function(t){return t.authReducer.isLoggedIn}));Object(o.useEffect)((function(){if(!a&&c){var t=function(t){t(D({status:"loading"})),h().then((function(e){t(K({todolists:e.data})),t(D({status:"succeeded"}))}))};s(t)}}),[]);var r=Object(o.useCallback)((function(t,e){var a=function(t,e){return function(a){v(e,t).then((function(n){var i=$({taskId:t,todolistId:e});a(i)}))}}(t,e);s(a)}),[]),d=Object(o.useCallback)((function(t,e){var a=function(t,e){return function(a){a(D({status:"loading"})),x(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,n=G({task:e});a(n),a(D({status:"succeeded"}))}else I(t.data,a)})).catch((function(t){A(t,a)}))}}(t,e);s(a)}),[]),u=Object(o.useCallback)((function(t,e,a){var n=X(t,{status:e},a);s(n)}),[]),j=Object(o.useCallback)((function(t,e,a){var n=X(t,{title:e},a);s(n)}),[]),b=Object(o.useCallback)((function(t,e){var a=Z({id:e,filter:t});s(a)}),[]),f=Object(o.useCallback)((function(t){var e,a=(e=t,function(t){t(D({status:"loading"})),t(J({id:e,status:"loading"})),p(e).then((function(a){t(B({id:e})),t(D({status:"succeeded"}))}))});s(a)}),[]),g=Object(o.useCallback)((function(t,e){var a=function(t,e){return function(a){m(t,e).then((function(n){a(U({id:t,title:e}))}))}}(t,e);s(a)}),[]),k=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(D({status:"loading"})),O(t).then((function(t){e(H({todolist:t.data.data.item})),e(D({status:"succeeded"}))}))}}(t);s(e)}),[s]);return c?Object(st.jsxs)(st.Fragment,{children:[Object(st.jsx)(tt.a,{container:!0,style:{padding:"20px"},children:Object(st.jsx)(ct,{addItem:k})}),Object(st.jsx)(tt.a,{container:!0,spacing:3,children:n.map((function(t){var e=i[t.id];return Object(st.jsx)(tt.a,{item:!0,children:Object(st.jsx)(et.a,{style:{padding:"10px"},children:Object(st.jsx)(ft,{todolist:t,tasks:e,removeTask:r,changeFilter:b,addTask:d,changeTaskStatus:u,removeTodolist:f,changeTaskTitle:j,changeTodolistTitle:g,demo:a})})},t.id)}))})]}):Object(st.jsx)(ht.a,{to:"login"})},pt=a(208),mt=a(209),gt=a(207),vt=a(211),xt=a(210),kt=a(196),Ct=a(201),Tt=a(200),yt=s.a.forwardRef((function(t,e){return Object(st.jsx)(Tt.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function It(){var t=Object(l.c)((function(t){return t.app.error})),e=Object(l.b)(),a=function(t,a){"clickaway"!==a&&e(R({error:null}))};return Object(st.jsx)(Ct.a,{open:null!==t,autoHideDuration:6e3,onClose:a,children:Object(st.jsx)(yt,{onClose:a,severity:"error",sx:{width:"100%"},children:t})})}var At=a(202),wt=a(214),St=a(213),Ft=a(191),Lt=a(104),Et=function(){var t=Object(l.c)((function(t){return t.authReducer.isLoggedIn})),e=Object(l.b)(),a=Object(Lt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Invalid password address"):e.password="Required",e},onSubmit:function(t){var n;e((n=t,function(t){t(D({status:"loading"})),C(n).then((function(e){0===e.data.resultCode?(t(L({value:!0})),t(D({status:"idle"}))):I(e.data,t)})).catch((function(e){A(e,t)}))})),a.resetForm()}});return t?Object(st.jsx)(ht.a,{to:"/"}):Object(st.jsx)(tt.a,{container:!0,justifyContent:"center",children:Object(st.jsx)(tt.a,{item:!0,justifyContent:"center",children:Object(st.jsx)("form",{onSubmit:a.handleSubmit,children:Object(st.jsxs)(At.a,{children:[Object(st.jsxs)(Ft.a,{children:[Object(st.jsxs)("p",{children:["To log in get registered",Object(st.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(st.jsx)("p",{children:"or use common test account credentials:"}),Object(st.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(st.jsx)("p",{children:"Password: free"})]}),Object(st.jsxs)(St.a,{children:[Object(st.jsx)(nt.a,Object(u.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email&&Object(st.jsxs)("div",{style:{color:"red"},children:[" ",a.errors.email]}),Object(st.jsx)(nt.a,Object(u.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password&&Object(st.jsxs)("div",{style:{color:"red"},children:[" ",a.errors.email]}),Object(st.jsx)(wt.a,{label:"Remember me",control:Object(st.jsx)(jt.a,{}),name:"rememberMe",checked:a.values.rememberMe,onChange:a.handleChange}),Object(st.jsx)(lt.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},Pt=a(215);var Rt=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(l.b)();Object(o.useEffect)((function(){n((function(t){T().then((function(e){0===e.data.resultCode&&t(L({value:!0}))})).finally((function(){t(N())}))}))}),[]);var i=Object(l.c)((function(t){return t.authReducer.isLoggedIn})),s=Object(l.c)((function(t){return t.app.status}));return Object(l.c)((function(t){return t.app.isInitialized}))?Object(st.jsxs)("div",{className:"App",children:[Object(st.jsx)(It,{}),Object(st.jsxs)(pt.a,{position:"static",children:[Object(st.jsxs)(mt.a,{children:[Object(st.jsx)(it.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(st.jsx)(kt.a,{})}),Object(st.jsx)(gt.a,{variant:"h6",children:"News"}),i&&Object(st.jsx)(lt.a,{color:"inherit",onClick:function(){n((function(t){t(D({status:"loading"})),y().then((function(e){0===e.data.resultCode?(t(L({value:!1})),t(D({status:"idle"}))):I(e.data,t)})).catch((function(e){A(e,t)}))}))},children:"Logout"})]}),"loading"===s&&Object(st.jsx)(xt.a,{})]}),Object(st.jsx)(vt.a,{fixed:!0,children:Object(st.jsxs)(ht.d,{children:[Object(st.jsx)(ht.b,{path:"/",element:Object(st.jsx)(Ot,{demo:a})}),Object(st.jsx)(ht.b,{path:"login",element:Object(st.jsx)(Et,{})}),Object(st.jsx)(ht.b,{path:"*",element:Object(st.jsx)(ht.a,{to:"login"})})]})})]}):Object(st.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(st.jsx)(Pt.a,{})})},Dt=a(103),Nt=a(102),Mt=Object(Dt.a)({tasks:V,todolists:z,app:P,authReducer:F}),zt=Object(w.a)({reducer:Mt,middleware:function(t){return t().prepend(Nt.a)}});window.store=zt;var qt=a(53);r.a.render(Object(st.jsxs)(qt.a,{children:[Object(st.jsx)(s.a.StrictMode,{children:Object(st.jsx)(l.a,{store:zt,children:Object(st.jsx)(Rt,{})})}),","]}),document.getElementById("root")),d()}},[[150,1,2]]]);
//# sourceMappingURL=main.3254b5dd.chunk.js.map