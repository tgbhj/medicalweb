if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,c,d)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return a;case"module":return s;default:return e(i)}})).then(e=>{const i=d(...e);return a.default||(a.default=i),a})}))}}define("./service-worker.js",["./workbox-c53a4ca0"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"699447ee23e30d24265e01588491ad79"},{url:"/static/css/2.764d1e47.chunk.css",revision:"bc883200513738d800f9810d695133c3"},{url:"/static/js/2.e68124ff.chunk.js",revision:"799eee016d54f21023c38a5f2a6bfacd"},{url:"/static/js/2.e68124ff.chunk.js.LICENSE.txt",revision:"176c1a1a28b19c611d9701905d8d60b7"},{url:"/static/js/main.54b23046.chunk.js",revision:"4f25c689ac4ebf2cd38838169647dc2a"},{url:"/static/js/runtime-main.1cabf0f6.js",revision:"c6f74e18401bde0ba3aa068b916f73ab"},{url:"/static/media/KD logo & ISO logo &JAS .9ea228f2.jpg",revision:"08d83d8f7f94e643b0bfc8a3b731861d"},{url:"/static/media/image01.d2e8d557.jpg",revision:"e84106a2eba5ff1ef433385298abce05"},{url:"/static/media/image02.3bf01163.jpg",revision:"826c5cf37c609a5586cb98d04b4f4991"},{url:"/static/media/image03.2f661fdc.jpg",revision:"a0fa6ed0000c3c19adcb4cc4cfa11d04"},{url:"/static/media/image04.1c37a45b.jpg",revision:"64e7cbf660131041d9f5bf1fa312e60a"},{url:"/static/media/image05.590d146c.jpg",revision:"07c2658140ef7f7d3b17466566b4545a"},{url:"/static/media/image06.a7df56b3.jpg",revision:"ec52eb116f1097092dfeb347a20f5271"},{url:"/static/media/image07.45ca7c9b.jpg",revision:"f6077f0cc7ecace3519b4387b5408f38"},{url:"/static/media/image08.23531a0f.jpg",revision:"cf1367e398b04e41cab55b1a0ac923a2"},{url:"/static/media/image09.dceb43a3.jpg",revision:"2c0bb472e08d07a87145e5e735fc3ede"},{url:"/static/media/image10.2d7c4a14.jpg",revision:"f199a8f4209217277104cadd8660b8a4"},{url:"/static/media/image11.4778525a.jpg",revision:"45a8bdc7a133f0edc3ecde21de998b5c"},{url:"/static/media/image12.78a5609e.jpg",revision:"2624fa3678b4d27d369b9a7928d90fb8"},{url:"/static/media/image13.9991a52a.jpg",revision:"b528381e8dd81262fc74fd49a727a418"},{url:"/static/media/image14.8077cbbe.jpg",revision:"8a13383247fc96badb42666092cea1e1"},{url:"/static/media/image15.c353ea9d.jpg",revision:"62ad042982a402e0cf76dd3db4610c88"},{url:"/static/media/image16.ac09e1a1.jpg",revision:"f59cb51148b4c21c433ddf2e6393ae31"},{url:"/static/media/image17.1926e574.jpg",revision:"ca57d8e81e74d4138318bd02d6c5085c"},{url:"/static/media/image18.773e2af4.jpg",revision:"07168b5c3c0a2f1289793a404e9d4e06"},{url:"/static/media/image19.4f09f516.jpg",revision:"3c5802854927bb66e20f1a1bd61c251d"},{url:"/static/media/image20.99feeb51.jpg",revision:"3d2d63c9c440d5b7d9869632d57068cb"},{url:"/static/media/image21.389bb435.jpg",revision:"e30685eaac9555417f2bda006c367bff"},{url:"/static/media/image22.c64db39d.jpg",revision:"ee286f2d282fb95471e8e4e4fcf2944a"},{url:"/static/media/image23.48e3ad7f.jpg",revision:"320ab520bf33b9b0a886b1a40abd25a9"},{url:"/static/media/image24.dda29cb2.jpg",revision:"631b4359f156fbf67ae7e30531648906"},{url:"/static/media/image25.35bfe072.jpg",revision:"0dee060b9e076a117d7a90cf0f19f152"},{url:"/static/media/image26.0c2ad7ba.jpg",revision:"2b3f96e19f5a4dbc6ede33d6c2def9e1"},{url:"/static/media/image27.fe23e42f.jpg",revision:"13592398e225117a6605324a58c5e52c"},{url:"/static/media/image28.c12cf76c.jpg",revision:"28b60590f21e0e481e3f68915ed611d4"},{url:"/static/media/image29.ebd48875.jpg",revision:"217139341213d49508fd4f345f304e63"},{url:"/static/media/image30.eabeaf77.jpg",revision:"3566be925abd5360c169ba5849887d8d"},{url:"/static/media/image31.b65beaa3.jpg",revision:"077403dbd39307d6a7398bd183b1229e"},{url:"/static/media/image32.10b34425.jpg",revision:"1d1964d33fbe2a3f34a5eabc2924e71c"},{url:"/static/media/logo.f2a7f2f9.png",revision:"df36cca5cdd304fe95575f20bb8995bb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
