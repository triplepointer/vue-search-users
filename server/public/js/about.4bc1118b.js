(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1511:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-3"},[r("figure",[r("img",{staticClass:"avatar",attrs:{src:t.userData.img}})])]),r("div",{staticClass:"col-lg-9 description"},[r("p",[t._v("Имя: "+t._s(t.userData.name))]),r("p",[t._v("Телефон: "+t._s(t.userData.phone))]),r("p",[t._v("Email: "+t._s(t.userData.email))]),r("p",[t._v("Дата рождения: "+t._s(t.userData.birth))])])])])])},a=[],s=r("a34a"),c=r.n(s),i=r("2f62");function o(t,e,r,n,a,s,c){try{var i=t[s](c),o=i.value}catch(u){return void r(u)}i.done?e(o):Promise.resolve(o).then(n,a)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function c(t){o(s,n,a,c,i,"next",t)}function i(t){o(s,n,a,c,i,"throw",t)}c(void 0)}))}}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b={name:"User",computed:p({},Object(i["c"])(["getUserById"])),data:function(){return{userData:{}}},created:function(){var t=this;return u(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.userData),e.next=3,t.getUserById(t.$route.params.id);case 3:t.userData=e.sent,console.log(t.userData),t.userData=t.userData[0];case 6:case"end":return e.stop()}}),e)})))()}},v=b,d=(r("db8b"),r("2877")),O=Object(d["a"])(v,n,a,!1,null,null,null);e["default"]=O.exports},a553:function(t,e,r){},db8b:function(t,e,r){"use strict";r("a553")}}]);
//# sourceMappingURL=about.4bc1118b.js.map