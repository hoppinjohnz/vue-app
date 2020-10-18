(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],m=0,p=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="vue-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"1dd9":function(e,t,n){},"38f6":function(e,t,n){"use strict";var r=n("1dd9"),o=n.n(r);o.a},5272:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"small-container",attrs:{id:"app"}},[n("hello-world",{attrs:{msg:"Hi John!"}}),n("h1",[e._v("Employees")]),n("employee-form",{on:{"add:employee":e.addEmployee}}),n("employee-table",{attrs:{tableEmployees:this.dataEmployees},on:{"delete:employee":e.deleteEmployee,"edit:employee":e.editEmployee}})],1)},a=[],i=(n("99af"),n("4de4"),n("d81d"),n("d3b7"),n("2909")),s=(n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},c=[],u={name:"HelloWorld",props:{msg:String}},m=u,p=(n("5d06"),n("2877")),d=Object(p["a"])(m,l,c,!1,null,"43f48a4c",null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-table"}},[this.tableEmployees.length<1?n("p",{staticClass:"empty-table"},[e._v("No employees")]):n("table",[e._m(0),n("tbody",e._l(e.tableEmployees,(function(t){return n("tr",{key:t.id},[e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"e.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]):n("td",[e._v(e._s(t.name))]),e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"e.email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(n){n.target.composing||e.$set(t,"email",n.target.value)}}})]):n("td",[e._v(e._s(t.email))]),e.editing===t.id?n("td",[n("button",{on:{click:function(n){return e.editEmployee(t)}}},[e._v("Save")]),n("button",{staticClass:"muted-button",on:{click:function(n){return e.cancelEmployee(t)}}},[e._v("Cancel")])]):n("td",[n("button",{on:{click:function(n){return e.enterEditing(t)}}},[e._v("Edit")]),n("button",{on:{click:function(n){return e.$emit("delete:employee",t.id)}}},[e._v("Delete")])])])})),0)])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Employee name")]),n("th",[e._v("Employee email")]),n("th",[e._v("Actions")])])])}],v=(n("b0c0"),{name:"employee-table",props:{tableEmployees:Array},data:function(){return{editing:null,cachedEmployee:null}},methods:{enterEditing:function(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},editEmployee:function(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e),this.editing=null)},cancelEmployee:function(e){Object.assign(e,this.cachedEmployee),this.editing=null}}}),b=v,E=Object(p["a"])(b,h,y,!1,null,"2524bf8d",null),g=E.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-form"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("label",[e._v("Employee name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.formEmployee.name,expression:"formEmployee.name"}],ref:"first",class:{"has-error":e.submitting&&e.invalidName},attrs:{type:"text"},domProps:{value:e.formEmployee.name},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.formEmployee,"name",t.target.value)}}}),n("label",[e._v("Employee Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.formEmployee.email,expression:"formEmployee.email"}],class:{"has-error":e.submitting&&e.invalidEmail},attrs:{type:"text"},domProps:{value:e.formEmployee.email},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.formEmployee,"email",t.target.value)}}}),e.error&&e.submitting?n("p",{staticClass:"error-message"},[e._v("❗Please fill out all required fields")]):e._e(),e.success?n("p",{staticClass:"success-message"},[e._v("✅ Employee successfully added")]):e._e(),n("button",[e._v("Add Employee")])])])},x=[],j={name:"employee-form",data:function(){return{submitting:!1,error:!1,success:!1,formEmployee:{name:"",email:""}}},methods:{handleSubmit:function(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.formEmployee),this.$refs.first.focus(),this.success=!0,this.formEmployee={name:"",email:""},this.error=!1,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}},computed:{invalidName:function(){return""===this.formEmployee.name},invalidEmail:function(){return""===this.formEmployee.email}}},w=j,O=(n("38f6"),Object(p["a"])(w,_,x,!1,null,"7e81ad06",null)),k=O.exports,S={name:"app",components:{HelloWorld:f,EmployeeTable:g,EmployeeForm:k},data:function(){return{dataEmployees:[]}},mounted:function(){this.getEmployees()},methods:{getEmployees:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.dataEmployees=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},addEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=n.sent,n.next=6,r.json();case 6:o=n.sent,t.dataEmployees=[].concat(Object(i["a"])(t.dataEmployees),[o]),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},deleteEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"DELETE"});case 3:t.dataEmployees=t.dataEmployees.filter((function(t){return t.id!==e})),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},editEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.id,n.prev=1,n.next=4,fetch("https://jsonplaceholder.typicode.com/users/".concat(r),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:return o=n.sent,n.next=7,o.json();case 7:a=n.sent,t.dataEmployees=t.dataEmployees.map((function(e){return e.id===r?a:e})),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()}}},P=S,$=(n("034f"),Object(p["a"])(P,o,a,!1,null,null,null)),N=$.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(N)}}).$mount("#app")},"5d06":function(e,t,n){"use strict";var r=n("5272"),o=n.n(r);o.a},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.9561dac2.js.map