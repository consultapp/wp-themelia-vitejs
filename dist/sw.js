if(!self.define){let e,i={};const n=(n,f)=>(n=new URL(n+".js",f).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const a=e=>n(e,r),o={module:{uri:r},exports:c,require:a};i[r]=Promise.all(f.map((e=>o[e]||a(e)))).then((e=>(s(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-icon-180.png",revision:"11ec54c1925986a6cb9c58bfec5084fd"},{url:"apple-touch-icon.png",revision:"66a5772939cc9e05f9469ae11fe3ef48"},{url:"assets/index-4f444eb1.js",revision:null},{url:"assets/index-b75a8fc8.css",revision:null},{url:"favicon-16x16.png",revision:"406537d218ad1efeece6ea53f0f29513"},{url:"favicon-32x32.png",revision:"fbef67333b2ada7d71c033e173e59fc1"},{url:"favicon.ico",revision:"ffa82b35fe2475b53498a93d14d59779"},{url:"index.html",revision:"1e41f960b6897c9d19f4c93547f682a4"},{url:"logo.svg",revision:"b8789d233cce65d588a825660c723d00"},{url:"manifest-icon-192.maskable.png",revision:"987c9ae77838e2e2fdefbd2cd99da30a"},{url:"manifest-icon-512.maskable.png",revision:"365fcba556e066df211b2e49fe88fe89"},{url:"mstile-150x150.png",revision:"f309b31457fd6a3abc3b3c60a4eef458"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"safari-pinned-tab.svg",revision:"2c60eda75bb393f1730f45752f07ac89"},{url:"favicon.ico",revision:"ffa82b35fe2475b53498a93d14d59779"},{url:"apple-touch-icon.png",revision:"66a5772939cc9e05f9469ae11fe3ef48"},{url:"safari-pinned-tab.svg",revision:"2c60eda75bb393f1730f45752f07ac89"},{url:"manifest-icon-192.maskable.png",revision:"987c9ae77838e2e2fdefbd2cd99da30a"},{url:"manifest-icon-512.maskable.png",revision:"365fcba556e066df211b2e49fe88fe89"},{url:"manifest.webmanifest",revision:"13d173c077fbb728d8128e1a71f04cf2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
