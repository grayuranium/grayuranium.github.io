if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const s=e=>c(e,r),f={module:{uri:r},exports:n,require:s};i[r]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(d(...e),n)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1fa6ed4fd6e88e40fbe124b1258293c1"},{url:"about/index.html",revision:"647ec36acd7af8b0d276b523a3157b8b"},{url:"archives/2023/03/index.html",revision:"3ab5fdf1e96f2fcc2c3d563b34097167"},{url:"archives/2023/index.html",revision:"770414f92afaad6a4ba8fded15e2c575"},{url:"archives/index.html",revision:"45cf21aca2e7c7a87bb1a9e7c11054a0"},{url:"books/index.html",revision:"78a45c2132c6616cbf862256dd1de00e"},{url:"categories/index.html",revision:"811f9ca6b24549e164c688478228c3d9"},{url:"categories/博客配置/index.html",revision:"486730d93c7eb46fe686e7fce016b844"},{url:"css/center-atom.css",revision:"881b7fc50f795fce64dfaeb531ae1b63"},{url:"css/index.css",revision:"c755e3cfab443cd7f6d4ef7d75832bf4"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/delicacy/index.html",revision:"89534c97d06802ba15b6798bd06d400d"},{url:"gallery/family/index.html",revision:"7f54ceedeb9ae5d36d36b1da550cb864"},{url:"gallery/friends/index.html",revision:"4c4721864e13d3d1fcadfda196396b0e"},{url:"gallery/girlfriend/index.html",revision:"33a4957a4369cfcd69919a65dadeb6ce"},{url:"gallery/index.html",revision:"4c28f8744340568ba50a1524c14156b9"},{url:"gallery/landscape/index.html",revision:"7df677b9192eb5703580a7744d056e0d"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"46af1211aaa3c0297df1d0674fa746ba"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"0c6b47aa6f5e104f7ecec4c665708265"},{url:"movies/index.html",revision:"3a4cab33e5bbfb9d9b4cbd30af9d68a9"},{url:"music/index.html",revision:"b10a37f7325167c5b76edc7cee82e7f4"},{url:"posts/446cf1e7/index.html",revision:"4874c112705a52521e8038e9be267e8f"},{url:"posts/f02d01d6/index.html",revision:"29ff29b5a1945271839cff4fa0cf9f94"},{url:"public/service-worker.js",revision:"aeb110e5e1b800ee85fb2fbdd8554e13"},{url:"public/workbox-e6f6f810.js",revision:"b1785843ae9b976c15c7c614ef1ee81a"},{url:"pwa/icons8-genie-128(-xhdpi).png",revision:"97a1b4cb48f4ad6918b7e930cf9b6390"},{url:"pwa/icons8-genie-144.png",revision:"6e010ea069ed69b4e987e9fb0e1e8785"},{url:"pwa/icons8-genie-192(-xxhdpi).png",revision:"11cec7c135cc5328c25def1e274c3db5"},{url:"pwa/icons8-genie-256(-xxxhdpi).png",revision:"45570b1d634df4c51e4eb14fa26ccfba"},{url:"pwa/icons8-genie-36.png",revision:"15eadddf7192580eca60daf39576fc7c"},{url:"pwa/icons8-genie-48(-ldpi).png",revision:"cfb96ab140daaa070fe13ba253c1fc05"},{url:"pwa/icons8-genie-512.png",revision:"1cd8fc9b41a34f24c3cd191ddf5064de"},{url:"pwa/icons8-genie-64(-mdpi).png",revision:"12ebd8cb7901c7abc02bfd2f98a5e799"},{url:"pwa/icons8-genie-72.png",revision:"374c5e2446ee0fe979a102929816ae77"},{url:"pwa/icons8-genie-96(-hdpi).png",revision:"565fad1c7c9e524383641a845d26376e"},{url:"pwa/icons8-genie-arcade-152.png",revision:"bf776aec2255cd6f97d1f0b3a8842f1b"},{url:"pwa/icons8-genie-arcade-16.png",revision:"82bfcc399d84af2af3ced8d78843598a"},{url:"pwa/icons8-genie-arcade-180.png",revision:"eae63d40f4206075c11d4ea026b06459"},{url:"pwa/icons8-genie-arcade-32.png",revision:"29eb66514a8d5cd67a58e96024c79f2a"},{url:"qrcode/alipay_min.webp",revision:"2febf4d250ecf1d3d95bf1b97198efcc"},{url:"qrcode/wechat_min.webp",revision:"cbb9eabdd9733052b53a9b620693551a"},{url:"tags/blog/index.html",revision:"09f8413841c09055340d51f5e9558653"},{url:"tags/bug/index.html",revision:"d1bf8956447d81c0b87ffe1e349c49b6"},{url:"tags/hexo/index.html",revision:"942b2948519382a7dc6c1bb845eaf30d"},{url:"tags/index.html",revision:"496b23ebb4f431235f17caead11f20a1"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
