(this.webpackJsonpmedicalweb=this.webpackJsonpmedicalweb||[]).push([[0],{203:function(e,t,a){e.exports=a(415)},415:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),c=(a(153),a(76)),l=(a(154),a(31)),m=(a(209),a(89)),o=a(104),s=a(47),g=a.p+"static/media/logo.f2a7f2f9.png";var d=function(){return i.a.createElement(o.b,{to:"/"},i.a.createElement("img",{src:g,width:"130",height:"40",style:{marginLeft:10,marginBottom:5}}))},u=(a(416),a(58)),h=a(74),p=a.n(h),E=a(105),f=a(125),w=a(106),b=a.n(w);var y=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/info").then((function(e){2e4===e.data.code?r(e.data.cb):notification.error({message:"Error",description:"",duration:2})})).catch((function(e){notification.error({message:e,description:"",duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),i.a.createElement(u.a,{dataSource:a,rowKey:"_id",scroll:{scrollToFirstRowOnChange:!0},pagination:{simple:!0,total:a.length,pageSize:20},expandable:{expandedRowRender:function(e){return i.a.createElement("p",{style:{margin:0}},"\u8054\u7cfb\u4eba\u7559\u8a00\uff1a".concat(e.msg))}}},i.a.createElement(u.a.Column,{title:"\u516c\u53f8\u540d\u79f0",dataIndex:"company"}),i.a.createElement(u.a.Column,{title:"\u8054\u7cfb\u4eba\u59d3\u540d",dataIndex:"name"}),i.a.createElement(u.a.Column,{title:"\u8054\u7cfb\u4eba\u7535\u8bdd",dataIndex:"phone"}),i.a.createElement(u.a.Column,{title:"\u8054\u7cfb\u4eba\u90ae\u7bb1",dataIndex:"email"}),i.a.createElement(u.a.Column,{title:"\u63d0\u4ea4\u65e5\u671f\u65f6\u95f4",dataIndex:"date"}))},x=(a(309),a(196)),v=(a(311),a(200)),j=(a(50),a(12)),C=a.p+"static/media/img_1.85a6b643.jpg",k=a.p+"static/media/img_2.a895d0ea.jpg",_=a.p+"static/media/img_3.1f538e19.jpg",S=a.p+"static/media/img_4.64fad87b.jpg",I=a.p+"static/media/img_5.44775f9a.jpg",O=a.p+"static/media/img_6.3c495af7.jpg",A=a.p+"static/media/img_7.69783530.jpg",T=a.p+"static/media/img_8.cd37e5e2.jpeg",P=a.p+"static/media/img_9.12bc9fae.jpg",R=a.p+"static/media/img_10.dd8af442.jpg",W=a.p+"static/media/img_11.e43453f1.jpg",F=a.p+"static/media/img_12.8b5fd372.jpg",q=a.p+"static/media/img_13.038c53dc.jpg",B=a.p+"static/media/img_14.3098f2d9.jpg",z=a.p+"static/media/img_15.dc8a150a.jpg",L=a.p+"static/media/img_16.6714d0f2.jpg",N=a.p+"static/media/img_17.aea75ae3.jpg",U=a.p+"static/media/img_18.b2de2f8d.jpg",D=a.p+"static/media/img_19.79fa379b.jpg",G=a.p+"static/media/img_20.c2d39bb5.jpg",H=(a(313),a(49)),J=(a(315),a(77)),K=(a(317),a(128));var M=function(){var e=function(){var e=Object(E.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/info",{company:t.company,name:t.name,phone:t.phone,email:t.email,msg:t.msg}).then((function(e){2e4===e.data.code?(K.a.success({message:"Success",description:"",duration:2}),setTimeout((function(){window.location.reload()}),2e3)):K.a.error({message:"Error",description:"",duration:2})})).catch((function(e){K.a.error({message:e,description:"",duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(i.a.createElement(H.a,{onFinish:e},i.a.createElement(H.a.Item,{name:"company",rules:[{type:"string",required:!0,message:"Please enter company name"},{min:1,max:50,message:"Company name is 1-50 characters long"}]},i.a.createElement(J.a,{placeholder:"Company name",allowClear:!0})),i.a.createElement(H.a.Item,{name:"name",rules:[{type:"string",required:!0,message:"Please enter contact name"},{min:1,max:30,message:"Contact name is 1-30 characters long"}]},i.a.createElement(J.a,{placeholder:"Contact name",allowClear:!0})),i.a.createElement(H.a.Item,{name:"phone",rules:[{type:"string",required:!0,message:"Please enter the contact number"},{min:1,max:30,message:"Contact phone length is 1-30 characters"}]},i.a.createElement(J.a,{placeholder:"Contact phone",allowClear:!0})),i.a.createElement(H.a.Item,{name:"email",rules:[{type:"email",required:!0,message:"Please enter contact email"}]},i.a.createElement(J.a,{placeholder:"Contact email",allowClear:!0})),i.a.createElement(H.a.Item,{name:"msg",rules:[{type:"string",required:!0,message:"Please leave a message"},{min:1,max:200,message:"Message length is 1-200 characters"}]},i.a.createElement(J.a.TextArea,{placeholder:"Leave a message",allowClear:!0,autoSize:!0})),i.a.createElement(H.a.Item,null,i.a.createElement(j.a,{type:"primary",block:!0,htmlType:"submit"},"Submission"))))},Y=a.p+"static/media/KD logo & ISO logo &JAS .9ea228f2.jpg";var $=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],r=t[1];return(i.a.createElement(c.a,{style:{paddingTop:10},align:"middle",justify:"center"},i.a.createElement(c.a,null,i.a.createElement(l.a,{style:{paddingBottom:10}},i.a.createElement(j.a,{type:"danger",size:"large",onClick:function(){return r(!0)}},"Please fill in your contact information"),i.a.createElement(v.a,{visible:a,footer:null,onCancel:function(){return r(!1)}},i.a.createElement(c.a,{type:"flex",justify:"center",align:"middle"},i.a.createElement(l.a,{xs:24,sm:24,md:24,lg:16,xl:16,xxl:16},i.a.createElement(M,null)))))),i.a.createElement(l.a,{span:22},i.a.createElement(x.a,{autoplay:!0},i.a.createElement("img",{src:C,width:"100%",height:"100%"}),i.a.createElement("img",{src:k,width:"100%",height:"100%"}),i.a.createElement("img",{src:_,width:"100%",height:"100%"}),i.a.createElement("img",{src:S,width:"100%",height:"100%"}),i.a.createElement("img",{src:I,width:"100%",height:"100%"}),i.a.createElement("img",{src:O,width:"100%",height:"100%"}),i.a.createElement("img",{src:A,width:"100%",height:"100%"}),i.a.createElement("img",{src:T,width:"100%",height:"100%"}),i.a.createElement("img",{src:P,width:"100%",height:"100%"}),i.a.createElement("img",{src:R,width:"100%",height:"100%"}),i.a.createElement("img",{src:W,width:"100%",height:"100%"}),i.a.createElement("img",{src:F,width:"100%",height:"100%"}),i.a.createElement("img",{src:q,width:"100%",height:"100%"}),i.a.createElement("img",{src:B,width:"100%",height:"100%"}),i.a.createElement("img",{src:z,width:"100%",height:"100%"}),i.a.createElement("img",{src:L,width:"100%",height:"100%"}),i.a.createElement("img",{src:N,width:"100%",height:"100%"}),i.a.createElement("img",{src:U,width:"100%",height:"100%"}),i.a.createElement("img",{src:D,width:"100%",height:"100%"}),i.a.createElement("img",{src:G,width:"100%",height:"100%"}))),i.a.createElement(l.a,{span:22},i.a.createElement("div",{style:{textAlign:"center",margin:"auto"}},i.a.createElement("b",{style:{fontSize:32}},"International Partners"))),i.a.createElement(l.a,null,i.a.createElement("img",{src:Y,width:"100%",height:"100%"}))))},Q=(a(409),a(198));var V=function(){return i.a.createElement(Q.a,{visibilityHeight:200})},X=(a(411),a(201));var Z=function(){return i.a.createElement(X.a,{status:"404",title:"404",subTitle:"This page is not exist",extra:i.a.createElement(j.a,{type:"primary",href:"/"},"Back Home")})},ee=function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,{style:{width:"100%",height:"100%"}},i.a.createElement(m.a.Header,{style:{background:"black",margin:0,padding:0}},i.a.createElement(d,null)),i.a.createElement(m.a.Content,{style:{margin:0,padding:0,background:"#fff",height:"100%",width:"100%"}},i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/admin",component:y}),i.a.createElement(s.a,{exact:!0,path:"/",component:$}),i.a.createElement(s.a,{component:Z}))),i.a.createElement(m.a.Footer,{style:{textAlign:"center"}},i.a.createElement(c.a,null,i.a.createElement(l.a,{xs:24,sm:24,md:24,lg:8,xl:8,xxl:8},i.a.createElement("b",null,"E-mail:"),i.a.createElement("span",null,"adinno@adinno.org"),i.a.createElement("br",null),i.a.createElement("b",null,"Tel/Fax:"),i.a.createElement("span",null,"+86-21-55229560"),i.a.createElement("br",null),i.a.createElement("b",null,"Mobile/WhatsApp:"),i.a.createElement("span",null,"+86-13901631040")),i.a.createElement(l.a,{xs:24,sm:24,md:24,lg:8,xl:8,xxl:8},i.a.createElement("b",null,"Twitter:"),i.a.createElement("span",null,"@GORDONGU3"),i.a.createElement("br",null),i.a.createElement("b",null,"Facebook:"),i.a.createElement("span",null,"Gordon.gu.96")),i.a.createElement(l.a,{xs:24,sm:24,md:24,lg:8,xl:8,xxl:8},i.a.createElement("b",null,"Address:"),i.a.createElement("span",null,"Room 13F No.578 Yingkou Road, Yangpu District, Shanghai,China")))),i.a.createElement(V,null)))},te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(r.render)(i.a.createElement(ee,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(t,e)}))}}()}},[[203,1,2]]]);
//# sourceMappingURL=main.c8060950.chunk.js.map