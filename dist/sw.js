if(!self.define){let e,i={};const n=(n,f)=>(n=new URL(n+".js",f).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const c=e=>n(e,a),o={module:{uri:a},exports:r,require:c};i[a]=Promise.all(f.map((e=>o[e]||c(e)))).then((e=>(s(...e),r)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-icon-180.png",revision:"11ec54c1925986a6cb9c58bfec5084fd"},{url:"apple-touch-icon.png",revision:"66a5772939cc9e05f9469ae11fe3ef48"},{url:"assets/index-b75a8fc8.css",revision:null},{url:"assets/index-df043a03.js",revision:null},{url:"favicon-16x16.png",revision:"406537d218ad1efeece6ea53f0f29513"},{url:"favicon-32x32.png",revision:"fbef67333b2ada7d71c033e173e59fc1"},{url:"favicon.ico",revision:"ffa82b35fe2475b53498a93d14d59779"},{url:"index.html",revision:"4993370e2f7f593a326d08395adfca4c"},{url:"logo.svg",revision:"b8789d233cce65d588a825660c723d00"},{url:"manifest-icon-192.maskable.png",revision:"987c9ae77838e2e2fdefbd2cd99da30a"},{url:"manifest-icon-512.maskable.png",revision:"365fcba556e066df211b2e49fe88fe89"},{url:"mstile-150x150.png",revision:"f309b31457fd6a3abc3b3c60a4eef458"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"safari-pinned-tab.svg",revision:"2c60eda75bb393f1730f45752f07ac89"},{url:"favicon.ico",revision:"ffa82b35fe2475b53498a93d14d59779"},{url:"apple-touch-icon.png",revision:"66a5772939cc9e05f9469ae11fe3ef48"},{url:"safari-pinned-tab.svg",revision:"2c60eda75bb393f1730f45752f07ac89"},{url:"manifest-icon-192.maskable.png",revision:"987c9ae77838e2e2fdefbd2cd99da30a"},{url:"manifest-icon-512.maskable.png",revision:"365fcba556e066df211b2e49fe88fe89"},{url:"manifest.webmanifest",revision:"e7c661a22d1966427e7961ec235484fe"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
