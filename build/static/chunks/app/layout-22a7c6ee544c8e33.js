(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2746:function(e,t,n){Promise.resolve().then(n.t.bind(n,5697,23))},6801:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'.concat(e.props["data-href"],'"]')))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let n=t.title?t.title[0]:null,a="";if(n){let{children:e}=n.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{(function(e,t){let n=document.getElementsByTagName("head")[0],a=n.querySelector("meta[name=next-head-count]"),o=Number(a.content),i=[];for(let t=0,n=a.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&i.push(n)}let d=t.map(r).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(l(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),d.forEach(e=>n.insertBefore(e,a)),a.content=(o-i.length+d.length).toString()})(e,t[e]||[])})}}},t.isEqualNode=l,t.DOMAttributeNames=void 0;let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function r(e){let{type:t,props:r}=e,l=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let a=n[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?l[a]=!!r[e]:l.setAttribute(a,r[e])}let{children:a,dangerouslySetInnerHTML:o}=r;return o?l.innerHTML=o.__html||"":a&&(l.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),l}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}t.DOMAttributeNames=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2072:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cancelIdleCallback=t.requestIdleCallback=void 0;let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};t.requestIdleCallback=n;let r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};t.cancelIdleCallback=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5697:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleClientScriptLoad=h,t.initScriptLoader=function(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}()},t.default=void 0;var r=n(5996).Z,l=n(8644).Z,a=n(9536).Z,o=n(872).Z,i=l(n(8431)),u=a(n(6006)),d=n(6275),c=n(6801),s=n(2072);let f=new Map,p=new Set,y=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],b=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:o="",strategy:i="afterInteractive",onError:u}=e,d=n||t;if(d&&p.has(d))return;if(f.has(t)){p.add(d),f.get(t).then(r,u);return}let s=()=>{l&&l(),p.add(d)},b=document.createElement("script"),h=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),r&&r.call(this,t),s()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(a?(b.innerHTML=a.__html||"",s()):o?(b.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",s()):t&&(b.src=t,f.set(t,h)),Object.entries(e))){if(void 0===r||y.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();b.setAttribute(e,r)}"worker"===i&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",i),document.body.appendChild(b)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{s.requestIdleCallback(()=>b(e))}):b(e)}function m(e){let{id:t,src:n="",onLoad:l=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:f}=e,y=o(e,["id","src","onLoad","onReady","strategy","onError"]),{updateScripts:h,scripts:m,getIsSsr:_,appDir:v,nonce:g}=u.useContext(d.HeadManagerContext),E=u.useRef(!1);u.useEffect(()=>{let e=t||n;E.current||(a&&e&&p.has(e)&&a(),E.current=!0)},[a,t,n]);let M=u.useRef(!1);if(u.useEffect(()=>{!M.current&&("afterInteractive"===c?b(e):"lazyOnload"===c&&("complete"===document.readyState?s.requestIdleCallback(()=>b(e)):window.addEventListener("load",()=>{s.requestIdleCallback(()=>b(e))})),M.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(h?(m[c]=(m[c]||[]).concat([r({id:t,src:n,onLoad:l,onReady:a,onError:f},y)]),h(m)):_&&_()?p.add(t||n):_&&!_()&&b(e)),v){if("beforeInteractive"===c)return n?(i.default.preload(n,y.integrity?{as:"script",integrity:y.integrity}:{as:"script"}),u.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push(".concat(JSON.stringify([n]),")")}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),u.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push(".concat(JSON.stringify([0,r({},y)]),")")}}));"afterInteractive"===c&&n&&i.default.preload(n,y.integrity?{as:"script",integrity:y.integrity}:{as:"script"})}return null}Object.defineProperty(m,"__nextScript",{value:!0}),t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[455,744],function(){return e(e.s=2746)}),_N_E=e.O()}]);