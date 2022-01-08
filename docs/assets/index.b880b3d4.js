const $=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};$();const C=["globalThis","Infinity","NaN","undefined","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","AggregateError","Array","ArrayBuffer","BigInt","BigInt64Array","BigUint64Array","Boolean","DataView","Date","Error","EvalError","FinalizationRegistry","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","Proxy","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","Symbol","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakRef","WeakSet","Atomics","JSON","Math","Reflect","console"],v=window,x={debug:!1,shims:[]},{apply:D}=Function.prototype;var k;const P=((k=v.Reflect)==null?void 0:k.apply)||function(t,e,n){return D.call(t,e,n)};function A(t,e,n){if(typeof e=="function")return q(t,e,n);if(typeof e=="object"&&e)throw new t.intrinsics.TypeError("value must be primitive or callable");return e}const G="return "+z.toString();function q(t,e,n){return t.intrinsics.Function("params",G)([t,e,n,A,P,R])}function z(){const[t,e,n,s,r,o]=params;try{const u=arguments,p=[];for(let l=0,{length:c}=u;l<c;++l){const h=s(n,u[l],t);p.push(h)}const f=r(e,n.globalObject,p);return s(t,f,n)}catch(u){o(u,t)}}function R(t,{intrinsics:e}){throw x.debug&&(console.log("[DEBUG]"),console.error(t)),typeof t=="object"&&t?t.name==="SyntaxError"?new e.SyntaxError(t.message):new e.TypeError("Cross-Realm Error: "+t.name+": "+t.message):new e.TypeError("Cross-Realm Error: "+t)}let{assign:F,keys:J}=Object;F||(F=function(t){const e=arguments;for(let n=1,{length:s}=e;n<s;++n)for(const r of J(e[n]))t[r]=e[n][r];return t});const K=v.URL||v.webkitURL,H="("+Y.toString()+")",Q=v.FinalizationRegistry?({intrinsics:t},e,n)=>{new t.FinalizationRegistry(r=>{r.parentNode.removeChild(r)}).register(e,n)}:()=>{};function X(t,e,n){const{document:s}=t.intrinsics,r=s.createElement("iframe");r.name="ShadowRealm",s.head.appendChild(r);for(const u of e.shared.shims){const p=s.createElement("script");p.src=u,r.contentDocument.head.appendChild(p)}const o=r.contentWindow.eval(H)(e);return Q(o,n,r),o}function Y({defineShadowRealm:t,ESModule:e,assign:n,globalReservedProperties:s,safeApply:r,dynamicImportPattern:o,dynamicImportReplacer:u}){var O;const p=window,{Object:f,String:l}=p,{defineProperty:c,getOwnPropertyNames:h}=f,{replace:d}=l.prototype,a={},m={};for(const i of h(p)){a[i]=p[i];const g=s.indexOf(i)!==-1,y=f.getOwnPropertyDescriptor(p,i);i==="eval"?B():g&&c(m,i,y),y.configurable?delete p[i]:y.writable?p[i]=void 0:g||c(m,i,{value:void 0})}((O=a.Symbol)==null?void 0:O.unscopables)&&c(m,a.Symbol.unscopables,{value:f.seal(f.create(null))});for(const i of h(a.EventTarget.prototype))i!=="constructor"&&c(m,i,{value:void 0});m.globalThis=m,m.Function=V();const w={intrinsics:a,globalObject:m};t(m,w);const S=new e(w);return w.esm=S,c(m,"__from",{value:i=>S.get(i)}),c(m,"__export",{set:i=>n(S.exports,i)}),c(m,"__default",{set:i=>S.exports.default=i}),c(m,"__import",{value:i=>S.import(i)}),w;function B(){let i=!1;const g=N();c(m,"eval",{get(){return i?(i=!1,a.eval):g},set(y){y===a&&(i=!0)}})}function N(){const i=a.Function("with(this)return eval(arguments[0])");return{eval(g){return g=r(d,'"use strict";undefined;'+g,[o,u]),m.eval=a,r(i,m,[g])}}.eval}function V(){const i=a.Function,{toString:g}=i;function y(){const L=r(i,null,arguments);let E=r(g,L,[]);E=r(d,E,[o,u]);const M=i('with(this)return function(){"use strict";return '+E+"}"),T=r(M,m,[])();return function(){return r(T,this===p?void 0:this,arguments)}}return y.prototype=i.prototype,i.prototype.constructor=y,y}}const b=[],_=[],U=/\bimport\s*(\(|\/[/*])/g,j=t=>"__"+t,I=/([^\s,]+)\s+as\s+([^\s,]+)/g,Z=[{p:/\bexport\s+((var|let|const)\s+([^;]+)|(async\s+)?function(\s+|\s*\*\s*)([^\s(]+)|class\s+([^\s{]+))/g,r(t,e,n,s,r,o,u,p){if(n){for(const f of s.split(","))f.replace(/^\s*([^\s={}:]+)\s*($|=|})|[:{]\s*([^\s={}:]+)\s*($|=|})/,(l,c,h,d)=>(_.push(c||d),l));return e}else return u?"__export={"+u+":"+u+"};"+e:(_.push(p),e)}},{p:/\bexport\s+default\s+((async\s+)?function(\s+|\s*\*\s*)([^\s(]+)|class\s+([^\s{]+))?/g,r(t,e,n,s,r,o){return r?"__default="+r+";"+e:o?(_.push(o),e):t.replace(/export\s+default/,"__default=")}},{p:/\bexport\s*(\*\s*(as\s+(\S+)\s+)?from\s*('[^']+'|"[^"]+"|`[^`]+`)|{([^}]+)}(\s*from\s*('[^']+'|"[^"]+"|`[^`]+`))?)/g,r(t,e,n,s,r,o,u,p){if(r)return b.push(r),s?"__export={"+s+":__from("+r+")}":"__export=__from("+r+")";if(p){b.push(p);const l=[];let c=!1;const h=o.replace(/([^\s,]+)(\s*,|\s+as\s+([^\s,]+))?/g,(d,a,m,w)=>w?(l.push(w),a+":"+w):a==="default"?(c=!0,""):(l.push(a),d));return c&&l.push("default:__from("+p+").default"),";(function(){const{"+h+"}=__from("+p+");__export={"+l.join()+"}}())"}const f=o.replace(I,"$2:$1");return"__export={"+f+"}"}},{p:/\bimport\b(\s*('[^']+'|"[^"]+"|`[^`]+`)|(\s*{([^}]+)}\s*|\s*\*\s*as\s+(\S+)\s+|\s+([^\s,]+)\s*(,\s*{([^}]+)}\s*|,\s*\*\s*as\s+(\S+)\s+)?)\bfrom\s*('[^']+'|"[^"]+"|`[^`]+`))/g,r(t,e,n,s,r,o,u,p,f,l,c){if(n)return b.push(n),"__from("+n+")";if(b.push(c),r){const h=r.replace(I,"$1:$2");return"const{"+h+"}=__from("+c+")"}else{if(o)return"var "+o+"=__from("+c+")";if(u)if(f){const h=f.replace(I,"$1:$2");return"const{"+h+"}=__from("+c+"),"+u+"=__from("+c+").default"}else return l?"var "+l+"=__from("+c+"),"+u+"="+l+".default":"var "+u+"=__from("+c+").default"}}},{p:/\bimport\.meta\b/g,r:"__meta"},{p:U,r:j}];class ee{constructor(e){this.cache={},this.realmRec=e}get(e){if(this.cache[e])return this.cache[e].exports;throw new this.realmRec.intrinsics.Error("Module does not exist")}import(e,n=this.realmRec){const{href:s}=new K(e+"",location.href),{Promise:r}=n.intrinsics;let o=this.cache[s];return o||(o=this.cache[s]={}),o.exports?r.resolve(o.exports):new r((u,p)=>{o.promise=fetch(s,{credentials:"same-origin"}).then(f=>f.text().then(l=>{const[c,h]=this.transform(l),d=[];for(let a of h){a=a.substring(1,a.length-1);const m=this.cache[a]||{};d.push(m.exports||m.promise||this.import(a))}return r.all(d).then(()=>'var __meta={url:"'+f.url+'"};'+c)})).then(f=>{var c;x.debug&&console.log("[DEBUG]",s,`
`+f);const l=Object.create(null);((c=v.Symbol)==null?void 0:c.toStringTag)&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),this.exports=l,this.realmRec.globalObject.eval(f),this.exports=void 0,u(l),o.exports=l,delete o.promise}).catch(f=>{try{R(f,n)}catch(l){p(l)}})})}transform(e){_.length=0,b.length=0;for(const{p:n,r:s}of Z)e=e.replace(n,s);if(_.length){for(let n=_.length-1;n>=0;--n)_[n]+=":"+_[n];e+=";__export={"+_.join()+"}"}return[e,b.slice()]}}function W(t,e){Object.defineProperty(t,"ShadowRealm",{configurable:!0,writable:!0,value:te(t,e)})}function te(t,e){if(!e){const n={document:t.document};for(const s of C)t[s]&&(n[s]=t[s]);e={intrinsics:n,globalObject:t}}return oe(e)}const re="("+se.toString()+")",ne={createRealmRecord:X,dynamicImportPattern:U,dynamicImportReplacer:j,getWrappedValue:A,defineShadowRealm:W,ESModule:ee,assign:F,globalReservedProperties:C,safeApply:P,wrapError:R,shared:x};function oe(t){return t.intrinsics.eval(re)(t,ne)}function se(t,e){const{TypeError:n,Object:{defineProperty:s},Promise:{prototype:{then:r}},String:o,Symbol:u}=t.intrinsics,{replace:p}=o.prototype,f=function d(){if(!(this instanceof d))throw new n("Constructor requires a new operator");const a=e.createRealmRecord(t,e,this);s(this,"__realm",{value:a})};t.intrinsics.top||(s(f,"__debug",{get:()=>e.shared.debug,set:d=>e.shared.debug=d}),s(f,"__shims",{get:()=>e.shared.shims,set:d=>e.shared.shims=d}));function l(d){if(typeof d!="string")throw new n("evaluate expects a string");d=e.safeApply(p,d,[e.dynamicImportPattern,e.dynamicImportReplacer]);try{const a=this.__realm.globalObject.eval(d);return e.getWrappedValue(t,a,this.__realm)}catch(a){e.wrapError(a,t)}}function c(d,a){return d=o(d),a=o(a),e.safeApply(r,this.__realm.esm.import(d,t),[m=>{if(!(a in m))throw new n('"'+d+'" has no export named "'+a+'"');return e.getWrappedValue(t,m[a],this.__realm)}])}const{prototype:h}=f;return s(h,"evaluate",{configurable:!0,writable:!0,value:l}),s(h,"importValue",{configurable:!0,writable:!0,value:c}),(u==null?void 0:u.toStringTag)&&s(h,u.toStringTag,{configurable:!0,value:"ShadowRealm"}),f}v.ShadowRealm||W(v);const ae=`
class ShadowRealm {
    constructor();
    evaluate(sourceText: string): Primitive | Function;
    importValue(specifier: string, bindingName: string): Promise<Primitive | Function>;
}

`;setTimeout(()=>{const t=document.querySelector(".code");t.textContent=ae});
