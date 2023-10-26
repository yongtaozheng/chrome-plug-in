(function(){"use strict";var t={6199:function(t,e,n){var o=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},a=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"book-mark-panel"},[e("h1",[t._v("Chrome书签管理")]),e("div",{staticClass:"book-mark-panel-input row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gitInfo.token,expression:"gitInfo.token"}],attrs:{id:"token",type:"text",placeholder:"请输入token"},domProps:{value:t.gitInfo.token},on:{change:t.dataChange,input:function(e){e.target.composing||t.$set(t.gitInfo,"token",e.target.value)}}}),e("a",{attrs:{href:"https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoStargazers?ex=no",target:"_blank"}},[t._v("前往获取")])]),e("div",{staticClass:"book-mark-panel-input row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gitInfo.owner,expression:"gitInfo.owner"}],attrs:{id:"owner",type:"text",placeholder:"请输入仓库所属空间地址"},domProps:{value:t.gitInfo.owner},on:{change:t.dataChange,input:function(e){e.target.composing||t.$set(t.gitInfo,"owner",e.target.value)}}})]),e("div",{staticClass:"book-mark-panel-input row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gitInfo.repo,expression:"gitInfo.repo"}],attrs:{id:"repo",type:"text",placeholder:"请输入仓库路径"},domProps:{value:t.gitInfo.repo},on:{change:t.dataChange,input:function(e){e.target.composing||t.$set(t.gitInfo,"repo",e.target.value)}}})]),e("div",{staticClass:"book-mark-panel-input row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gitInfo.filePath,expression:"gitInfo.filePath"}],attrs:{id:"filePath",type:"text",placeholder:"请输入书签文件路径"},domProps:{value:t.gitInfo.filePath},on:{change:t.dataChange,input:function(e){e.target.composing||t.$set(t.gitInfo,"filePath",e.target.value)}}})]),e("div",{staticClass:"book-mark-panel-btn row"},[e("button",{staticClass:"btn",attrs:{id:"saveBookmarks"},on:{click:function(e){return t.saveBookmarks(!0)}}},[t._v(" 覆盖保存 ")]),e("button",{staticClass:"btn",attrs:{id:"saveBookmarks"},on:{click:function(e){return t.saveBookmarks(!1)}}},[t._v(" 合并保存 ")]),e("button",{staticClass:"btn",attrs:{id:"getBookmarks"},on:{click:function(e){return t.getBookmarks(!0)}}},[t._v(" 覆盖获取 ")]),e("button",{staticClass:"btn",attrs:{id:"getBookmarks"},on:{click:function(e){return t.getBookmarks(!1)}}},[t._v(" 合并获取 ")])]),t._m(0)])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"book-mark-panel-tip"},[e("div",[t._v("覆盖保存：将本地书签覆盖保存到gitee")]),e("div",[t._v("合并保存：将本地书签与gitee上的书签数据合并后保存到gitee")]),e("div",[t._v("覆盖获取：使用gitee上的书签数据来替换本地的书签数据")]),e("div",[t._v(" 合并获取：获取gitee上的书签数据并与本地书签数据合并后替换本地的书签数据 ")])])}];n(560);const c=window.chrome,d=t=>{c.tabs.query({active:!0,currentWindow:!0},(function(e){c.tabs.sendMessage(e[0].id,t,(function(t){alert("收到回复："+t.state)}))}))},l=()=>new Promise((t=>{c.bookmarks.getTree((function(e){t(e)}))}));function u(t){function e(t,n){for(const o of t)o.children?c.bookmarks.create({parentId:n,title:o.title},(function(t){e(o.children,t.id)})):c.bookmarks.create({parentId:n,title:o.title,url:o.url})}e(t[0].children,"1")}function h(t){function e(t){for(const n of t)n.children&&e(n.children),c.bookmarks.removeTree(n.id)}e(t)}function f(t,e){const n={id:"0",title:"",children:[]};function o(t,e){return t.children.find((t=>t.title===e.title&&t.url===e.url))}function r(t,e){e.forEach((e=>{const n=o(t,e);n?(e.children&&r(n,e.children),Object.keys(e).forEach((t=>{"children"!==t&&"id"!==t&&(n[t]=e[t])}))):t.children.push({...e})}))}function a(t,e){return t.children&&!e.children?-1:!t.children&&e.children?1:0}function i(t){t.children&&(t.children.sort(a),t.children.forEach((t=>{i(t)})))}return[t[0].children,e[0].children].forEach((t=>{r(n,t)})),i(n),[n]}n(3429),n(4224),n(1121),n(7133);async function p(t){const e=atob(t),n=new TextDecoder,o=n.decode(new Uint8Array([...e].map((t=>t.charCodeAt(0)))));return JSON.parse(o)}async function m(t,e){const n=await fetch(t,{headers:{Authorization:"token "+e}}),o=await n.json();return o}async function g(t,e,n,o){const r={access_token:e,content:n,message:"书签更新",sha:o},a=await fetch(t,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"token "+e},body:JSON.stringify(r)});a.ok?alert("已上传书签数据"):alert("上传书签数据失败")}async function b(t,e,n){const o=t.token,r="https://gitee.com/api/v5/repos/"+t.owner+"/"+t.repo+"/contents/"+t.filePath;try{const t=await m(r,o),a=t.content||"";if(!n){const t=await p(a);e=f(t,e)}e=JSON.stringify(e);const i=new TextEncoder,s=i.encode(e),c=btoa(String.fromCharCode.apply(null,new Uint8Array(s)));await g(r,o,c,t.sha)}catch(a){alert("An error occurred:",a)}}async function v(t){const e=t.token,n="https://gitee.com/api/v5/repos/"+t.owner+"/"+t.repo+"/contents/"+t.filePath,o=await m(n,e),r=o.content||"",a=atob(r),i=new TextDecoder,s=i.decode(new Uint8Array([...a].map((t=>t.charCodeAt(0)))));return JSON.parse(s)}class w{constructor(t,e){this.databaseName=t,this.storeName=e,this.db=null}open(){return new Promise(((t,e)=>{const n=window.indexedDB.open(this.databaseName);n.onerror=()=>{e(new Error("Failed to open database"))},n.onsuccess=()=>{this.db=n.result,t()},n.onupgradeneeded=t=>{this.db=t.target.result,this.db.objectStoreNames.contains(this.storeName)||this.db.createObjectStore(this.storeName,{keyPath:"id",autoIncrement:!0})}}))}createDatabase(){return new Promise(((t,e)=>{const n=window.indexedDB.open(this.databaseName);n.onerror=()=>{e(new Error("Failed to create database"))},n.onsuccess=()=>{this.db=n.result,this.db.close(),t()},n.onupgradeneeded=e=>{this.db=e.target.result,this.db.objectStoreNames.contains(this.storeName)||this.db.createObjectStore(this.storeName,{keyPath:"id",autoIncrement:!0}),this.db.close(),t()}}))}close(){this.db&&(this.db.close(),this.db=null)}add(t){return new Promise(((e,n)=>{const o=this.db.transaction(this.storeName,"readwrite"),r=o.objectStore(this.storeName),a=r.add(t);a.onsuccess=()=>{e(a.result)},a.onerror=()=>{n(new Error("Failed to add data"))}}))}getAll(){return new Promise(((t,e)=>{const n=this.db.transaction(this.storeName,"readonly"),o=n.objectStore(this.storeName),r=o.getAll();r.onsuccess=()=>{t(r.result)},r.onerror=()=>{e(new Error("Failed to get data"))}}))}getById(t){return new Promise(((e,n)=>{const o=this.db.transaction(this.storeName,"readonly"),r=o.objectStore(this.storeName),a=r.get(t);a.onsuccess=()=>{e(a.result)},a.onerror=()=>{n(new Error("Failed to get data"))}}))}delete(t){return new Promise(((e,n)=>{const o=this.db.transaction(this.storeName,"readwrite"),r=o.objectStore(this.storeName),a=r.delete(t);a.onsuccess=()=>{e()},a.onerror=()=>{n(new Error("Failed to delete data"))}}))}update(t,e){return new Promise(((n,o)=>{const r=this.db.transaction(this.storeName,"readwrite"),a=r.objectStore(this.storeName),i=a.get(t);i.onsuccess=()=>{const r=i.result;if(r){const t={...r,...e},i=a.put(t);i.onsuccess=()=>{n(t)},i.onerror=()=>{o(new Error("Failed to update data"))}}else{const r=a.add({...e,id:t});r.onsuccess=()=>{n({...e,id:t})},r.onerror=()=>{o(new Error("Failed to add data"))}}},i.onerror=()=>{o(new Error("Failed to get data"))}}))}}var k={name:"HelloWorld",data(){return{gitInfo:{token:"",owner:"",repo:"",filePath:""},indexedDB:null}},created(){const t=new w("gitInfoDb","gitInfo");this.indexedDB=t,t.createDatabase().then((()=>(console.log("Database created successfully or already exists"),t.open()))).then((async()=>{const e=await t.getById("data")||this.gitInfo;this.gitInfo=e})).catch((t=>{console.error("Failed to create or open database:",t)}))},mounted(){},methods:{dataChange(){this.indexedDB.update("data",this.gitInfo)},sendData(){const t={action:"hello",data:this.gitInfo.token};d(t)},async saveBookmarks(t){const e=await l();b(this.gitInfo,e,t)},async getBookmarks(t){const e=await v(this.gitInfo),n=await l(t);let o=e;t||(o=f(e,n)),h(n),u([o[0].children[0]])}}},y=k,I=n(1001),N=(0,I.Z)(y,i,s,!1,null,"32a5419c",null),P=N.exports,x={name:"App",components:{HelloWorld:P}},C=x,_=(0,I.Z)(C,r,a,!1,null,null,null),O=_.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(O)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],c=o[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(e&&e(o);d<i.length;d++)a=i[d],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6199)}));o=n.O(o)})();