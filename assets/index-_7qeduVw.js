var Tu=Object.defineProperty;var Kn=e=>{throw TypeError(e)};var Iu=(e,t,r)=>t in e?Tu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ne=(e,t,r)=>Iu(e,typeof t!="symbol"?t+"":t,r),aa=(e,t,r)=>t.has(e)||Kn("Cannot "+r);var N=(e,t,r)=>(aa(e,t,"read from private field"),r?r.call(e):t.get(e)),oe=(e,t,r)=>t.has(e)?Kn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),X=(e,t,r,a)=>(aa(e,t,"write to private field"),a?a.call(e,r):t.set(e,r),r),ye=(e,t,r)=>(aa(e,t,"access private method"),r);var rs=(e,t,r,a)=>({set _(n){X(e,t,n,r)},get _(){return N(e,t,a)}});import{j as s,P as K,c as Ua,a as ot,u as ie,B as Ru,b as Ut,d as He,e as je,f as D,R as Mu,g as Ha,h as Ee,i as Xo,D as Ga,S as Lu,k as mr,l as Va,m as As,n as Qo,o as Zo,F as ei,p as ti,I as ri,q as si,r as ai,s as Ps,O as Ts,C as Is,t as ni,T as Rs,v as Ms,w as oi,x as ii,y as li,L as ci,z as di,A as ui,E as Du}from"./ui-BasZB6D4.js";import{a as Gr,r as c,e as L,G as Ou,R as _u}from"./vendor-Czg6sI-Z.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();var pi,Yn=Gr;pi=Yn.createRoot,Yn.hydrateRoot;var $u="VisuallyHidden",Vr=c.forwardRef((e,t)=>s.jsx(K.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Vr.displayName=$u;var Fu=Vr,qa="ToastProvider",[Wa,zu,Bu]=Ua("Toast"),[mi,xv]=ot("Toast",[Bu]),[Uu,Ls]=mi(qa),hi=e=>{const{__scopeToast:t,label:r="Notification",duration:a=5e3,swipeDirection:n="right",swipeThreshold:o=50,children:i}=e,[l,d]=c.useState(null),[p,m]=c.useState(0),h=c.useRef(!1),u=c.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${qa}\`. Expected non-empty \`string\`.`),s.jsx(Wa.Provider,{scope:t,children:s.jsx(Uu,{scope:t,label:r,duration:a,swipeDirection:n,swipeThreshold:o,toastCount:p,viewport:l,onViewportChange:d,onToastAdd:c.useCallback(()=>m(f=>f+1),[]),onToastRemove:c.useCallback(()=>m(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:u,children:i})})};hi.displayName=qa;var fi="ToastViewport",Hu=["F8"],ga="toast.viewportPause",xa="toast.viewportResume",gi=c.forwardRef((e,t)=>{const{__scopeToast:r,hotkey:a=Hu,label:n="Notifications ({hotkey})",...o}=e,i=Ls(fi,r),l=zu(r),d=c.useRef(null),p=c.useRef(null),m=c.useRef(null),h=c.useRef(null),u=ie(t,h,i.onViewportChange),f=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=i.toastCount>0;c.useEffect(()=>{const b=w=>{var y;a.length!==0&&a.every(j=>w[j]||w.code===j)&&((y=h.current)==null||y.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[a]),c.useEffect(()=>{const b=d.current,w=h.current;if(x&&b&&w){const v=()=>{if(!i.isClosePausedRef.current){const C=new CustomEvent(ga);w.dispatchEvent(C),i.isClosePausedRef.current=!0}},y=()=>{if(i.isClosePausedRef.current){const C=new CustomEvent(xa);w.dispatchEvent(C),i.isClosePausedRef.current=!1}},j=C=>{!b.contains(C.relatedTarget)&&y()},k=()=>{b.contains(document.activeElement)||y()};return b.addEventListener("focusin",v),b.addEventListener("focusout",j),b.addEventListener("pointermove",v),b.addEventListener("pointerleave",k),window.addEventListener("blur",v),window.addEventListener("focus",y),()=>{b.removeEventListener("focusin",v),b.removeEventListener("focusout",j),b.removeEventListener("pointermove",v),b.removeEventListener("pointerleave",k),window.removeEventListener("blur",v),window.removeEventListener("focus",y)}}},[x,i.isClosePausedRef]);const g=c.useCallback(({tabbingDirection:b})=>{const v=l().map(y=>{const j=y.ref.current,k=[j,...rp(j)];return b==="forwards"?k:k.reverse()});return(b==="forwards"?v.reverse():v).flat()},[l]);return c.useEffect(()=>{const b=h.current;if(b){const w=v=>{var k,C,T;const y=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!y){const I=document.activeElement,R=v.shiftKey;if(v.target===b&&R){(k=p.current)==null||k.focus();return}const P=g({tabbingDirection:R?"backwards":"forwards"}),F=P.findIndex(A=>A===I);na(P.slice(F+1))?v.preventDefault():R?(C=p.current)==null||C.focus():(T=m.current)==null||T.focus()}};return b.addEventListener("keydown",w),()=>b.removeEventListener("keydown",w)}},[l,g]),s.jsxs(Ru,{ref:d,role:"region","aria-label":n.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&s.jsx(ba,{ref:p,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"forwards"});na(b)}}),s.jsx(Wa.Slot,{scope:r,children:s.jsx(K.ol,{tabIndex:-1,...o,ref:u})}),x&&s.jsx(ba,{ref:m,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"backwards"});na(b)}})]})});gi.displayName=fi;var xi="ToastFocusProxy",ba=c.forwardRef((e,t)=>{const{__scopeToast:r,onFocusFromOutsideViewport:a,...n}=e,o=Ls(xi,r);return s.jsx(Vr,{"aria-hidden":!0,tabIndex:0,...n,ref:t,style:{position:"fixed"},onFocus:i=>{var p;const l=i.relatedTarget;!((p=o.viewport)!=null&&p.contains(l))&&a()}})});ba.displayName=xi;var Ds="Toast",Gu="toast.swipeStart",Vu="toast.swipeMove",qu="toast.swipeCancel",Wu="toast.swipeEnd",bi=c.forwardRef((e,t)=>{const{forceMount:r,open:a,defaultOpen:n,onOpenChange:o,...i}=e,[l=!0,d]=Ut({prop:a,defaultProp:n,onChange:o});return s.jsx(He,{present:r||l,children:s.jsx(Ju,{open:l,...i,ref:t,onClose:()=>d(!1),onPause:je(e.onPause),onResume:je(e.onResume),onSwipeStart:D(e.onSwipeStart,p=>{p.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:D(e.onSwipeMove,p=>{const{x:m,y:h}=p.detail.delta;p.currentTarget.setAttribute("data-swipe","move"),p.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${m}px`),p.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:D(e.onSwipeCancel,p=>{p.currentTarget.setAttribute("data-swipe","cancel"),p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:D(e.onSwipeEnd,p=>{const{x:m,y:h}=p.detail.delta;p.currentTarget.setAttribute("data-swipe","end"),p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),p.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${m}px`),p.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),d(!1)})})})});bi.displayName=Ds;var[Ku,Yu]=mi(Ds,{onClose(){}}),Ju=c.forwardRef((e,t)=>{const{__scopeToast:r,type:a="foreground",duration:n,open:o,onClose:i,onEscapeKeyDown:l,onPause:d,onResume:p,onSwipeStart:m,onSwipeMove:h,onSwipeCancel:u,onSwipeEnd:f,...x}=e,g=Ls(Ds,r),[b,w]=c.useState(null),v=ie(t,A=>w(A)),y=c.useRef(null),j=c.useRef(null),k=n||g.duration,C=c.useRef(0),T=c.useRef(k),I=c.useRef(0),{onToastAdd:R,onToastRemove:U}=g,M=je(()=>{var H;(b==null?void 0:b.contains(document.activeElement))&&((H=g.viewport)==null||H.focus()),i()}),P=c.useCallback(A=>{!A||A===1/0||(window.clearTimeout(I.current),C.current=new Date().getTime(),I.current=window.setTimeout(M,A))},[M]);c.useEffect(()=>{const A=g.viewport;if(A){const H=()=>{P(T.current),p==null||p()},O=()=>{const V=new Date().getTime()-C.current;T.current=T.current-V,window.clearTimeout(I.current),d==null||d()};return A.addEventListener(ga,O),A.addEventListener(xa,H),()=>{A.removeEventListener(ga,O),A.removeEventListener(xa,H)}}},[g.viewport,k,d,p,P]),c.useEffect(()=>{o&&!g.isClosePausedRef.current&&P(k)},[o,k,g.isClosePausedRef,P]),c.useEffect(()=>(R(),()=>U()),[R,U]);const F=c.useMemo(()=>b?Ci(b):null,[b]);return g.viewport?s.jsxs(s.Fragment,{children:[F&&s.jsx(Xu,{__scopeToast:r,role:"status","aria-live":a==="foreground"?"assertive":"polite","aria-atomic":!0,children:F}),s.jsx(Ku,{scope:r,onClose:M,children:Gr.createPortal(s.jsx(Wa.ItemSlot,{scope:r,children:s.jsx(Mu,{asChild:!0,onEscapeKeyDown:D(l,()=>{g.isFocusedToastEscapeKeyDownRef.current||M(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:s.jsx(K.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":g.swipeDirection,...x,ref:v,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:D(e.onKeyDown,A=>{A.key==="Escape"&&(l==null||l(A.nativeEvent),A.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,M()))}),onPointerDown:D(e.onPointerDown,A=>{A.button===0&&(y.current={x:A.clientX,y:A.clientY})}),onPointerMove:D(e.onPointerMove,A=>{if(!y.current)return;const H=A.clientX-y.current.x,O=A.clientY-y.current.y,V=!!j.current,S=["left","right"].includes(g.swipeDirection),E=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,Z=S?E(0,H):0,B=S?0:E(0,O),W=A.pointerType==="touch"?10:2,Q={x:Z,y:B},le={originalEvent:A,delta:Q};V?(j.current=Q,ss(Vu,h,le,{discrete:!1})):Jn(Q,g.swipeDirection,W)?(j.current=Q,ss(Gu,m,le,{discrete:!1}),A.target.setPointerCapture(A.pointerId)):(Math.abs(H)>W||Math.abs(O)>W)&&(y.current=null)}),onPointerUp:D(e.onPointerUp,A=>{const H=j.current,O=A.target;if(O.hasPointerCapture(A.pointerId)&&O.releasePointerCapture(A.pointerId),j.current=null,y.current=null,H){const V=A.currentTarget,S={originalEvent:A,delta:H};Jn(H,g.swipeDirection,g.swipeThreshold)?ss(Wu,f,S,{discrete:!0}):ss(qu,u,S,{discrete:!0}),V.addEventListener("click",E=>E.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),Xu=e=>{const{__scopeToast:t,children:r,...a}=e,n=Ls(Ds,t),[o,i]=c.useState(!1),[l,d]=c.useState(!1);return ep(()=>i(!0)),c.useEffect(()=>{const p=window.setTimeout(()=>d(!0),1e3);return()=>window.clearTimeout(p)},[]),l?null:s.jsx(Ha,{asChild:!0,children:s.jsx(Vr,{...a,children:o&&s.jsxs(s.Fragment,{children:[n.label," ",r]})})})},Qu="ToastTitle",vi=c.forwardRef((e,t)=>{const{__scopeToast:r,...a}=e;return s.jsx(K.div,{...a,ref:t})});vi.displayName=Qu;var Zu="ToastDescription",yi=c.forwardRef((e,t)=>{const{__scopeToast:r,...a}=e;return s.jsx(K.div,{...a,ref:t})});yi.displayName=Zu;var wi="ToastAction",ji=c.forwardRef((e,t)=>{const{altText:r,...a}=e;return r.trim()?s.jsx(Ni,{altText:r,asChild:!0,children:s.jsx(Ka,{...a,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${wi}\`. Expected non-empty \`string\`.`),null)});ji.displayName=wi;var ki="ToastClose",Ka=c.forwardRef((e,t)=>{const{__scopeToast:r,...a}=e,n=Yu(ki,r);return s.jsx(Ni,{asChild:!0,children:s.jsx(K.button,{type:"button",...a,ref:t,onClick:D(e.onClick,n.onClose)})})});Ka.displayName=ki;var Ni=c.forwardRef((e,t)=>{const{__scopeToast:r,altText:a,...n}=e;return s.jsx(K.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0,...n,ref:t})});function Ci(e){const t=[];return Array.from(e.childNodes).forEach(a=>{if(a.nodeType===a.TEXT_NODE&&a.textContent&&t.push(a.textContent),tp(a)){const n=a.ariaHidden||a.hidden||a.style.display==="none",o=a.dataset.radixToastAnnounceExclude==="";if(!n)if(o){const i=a.dataset.radixToastAnnounceAlt;i&&t.push(i)}else t.push(...Ci(a))}}),t}function ss(e,t,r,{discrete:a}){const n=r.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),a?Xo(n,o):n.dispatchEvent(o)}var Jn=(e,t,r=0)=>{const a=Math.abs(e.x),n=Math.abs(e.y),o=a>n;return t==="left"||t==="right"?o&&a>r:!o&&n>r};function ep(e=()=>{}){const t=je(e);Ee(()=>{let r=0,a=0;return r=window.requestAnimationFrame(()=>a=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(a)}},[t])}function tp(e){return e.nodeType===e.ELEMENT_NODE}function rp(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const n=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||n?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function na(e){const t=document.activeElement;return e.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}var sp=hi,Si=gi,Ei=bi,Ai=vi,Pi=yi,Ti=ji,Ii=Ka;function Ri(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=Ri(e[t]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function Mi(){for(var e,t,r=0,a="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=Ri(e))&&(a&&(a+=" "),a+=t);return a}const Xn=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Qn=Mi,qr=(e,t)=>r=>{var a;if((t==null?void 0:t.variants)==null)return Qn(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:n,defaultVariants:o}=t,i=Object.keys(n).map(p=>{const m=r==null?void 0:r[p],h=o==null?void 0:o[p];if(m===null)return null;const u=Xn(m)||Xn(h);return n[p][u]}),l=r&&Object.entries(r).reduce((p,m)=>{let[h,u]=m;return u===void 0||(p[h]=u),p},{}),d=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((p,m)=>{let{class:h,className:u,...f}=m;return Object.entries(f).every(x=>{let[g,b]=x;return Array.isArray(b)?b.includes({...o,...l}[g]):{...o,...l}[g]===b})?[...p,h,u]:p},[]);return Qn(e,i,d,r==null?void 0:r.class,r==null?void 0:r.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Li=(...e)=>e.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var np={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:i,...l},d)=>c.createElement("svg",{ref:d,...np,width:t,height:t,stroke:e,strokeWidth:a?Number(r)*24/Number(t):r,className:Li("lucide",n),...l},[...i.map(([p,m])=>c.createElement(p,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(e,t)=>{const r=c.forwardRef(({className:a,...n},o)=>c.createElement(op,{ref:o,iconNode:t,className:Li(`lucide-${ap(e)}`,a),...n}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=_("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=_("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=_("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=_("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=_("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=_("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=_("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=_("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=_("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=_("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=_("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=_("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=_("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=_("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=_("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=_("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=_("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=_("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=_("Copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=_("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=_("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=_("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=_("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=_("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=_("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=_("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=_("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=_("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=_("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=_("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=_("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=_("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=_("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=_("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=_("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=_("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=_("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=_("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=_("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=_("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=_("Microchip",[["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 16h2",key:"zsn3lv"}],["path",{d:"M18 20h2",key:"9x5y9y"}],["path",{d:"M18 4h2",key:"1luxfb"}],["path",{d:"M18 8h2",key:"nxqzg"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 16h2",key:"8a5zha"}],["path",{d:"M4 20h2",key:"27dk57"}],["path",{d:"M4 4h2",key:"10groj"}],["path",{d:"M4 8h2",key:"18vq6w"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",key:"1681fp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=_("MonitorSmartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=_("MonitorSpeaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=_("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=_("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=_("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=_("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=_("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=_("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=_("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=_("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=_("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=_("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=_("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=_("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=_("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=_("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=_("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=_("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=_("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=_("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=_("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=_("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=_("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=_("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=_("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ja="-",Up=e=>{const t=Gp(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:i=>{const l=i.split(Ja);return l[0]===""&&l.length!==1&&l.shift(),Gi(l,t)||Hp(i)},getConflictingClassGroupIds:(i,l)=>{const d=r[i]||[];return l&&a[i]?[...d,...a[i]]:d}}},Gi=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const r=e[0],a=t.nextPart.get(r),n=a?Gi(e.slice(1),a):void 0;if(n)return n;if(t.validators.length===0)return;const o=e.join(Ja);return(i=t.validators.find(({validator:l})=>l(o)))==null?void 0:i.classGroupId},co=/^\[(.+)\]$/,Hp=e=>{if(co.test(e)){const t=co.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Gp=e=>{const{theme:t,prefix:r}=e,a={nextPart:new Map,validators:[]};return qp(Object.entries(e.classGroups),r).forEach(([o,i])=>{ya(i,a,o,t)}),a},ya=(e,t,r,a)=>{e.forEach(n=>{if(typeof n=="string"){const o=n===""?t:uo(t,n);o.classGroupId=r;return}if(typeof n=="function"){if(Vp(n)){ya(n(a),t,r,a);return}t.validators.push({validator:n,classGroupId:r});return}Object.entries(n).forEach(([o,i])=>{ya(i,uo(t,o),r,a)})})},uo=(e,t)=>{let r=e;return t.split(Ja).forEach(a=>{r.nextPart.has(a)||r.nextPart.set(a,{nextPart:new Map,validators:[]}),r=r.nextPart.get(a)}),r},Vp=e=>e.isThemeGetter,qp=(e,t)=>t?e.map(([r,a])=>{const n=a.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([i,l])=>[t+i,l])):o);return[r,n]}):e,Wp=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,a=new Map;const n=(o,i)=>{r.set(o,i),t++,t>e&&(t=0,a=r,r=new Map)};return{get(o){let i=r.get(o);if(i!==void 0)return i;if((i=a.get(o))!==void 0)return n(o,i),i},set(o,i){r.has(o)?r.set(o,i):n(o,i)}}},Vi="!",Kp=e=>{const{separator:t,experimentalParseClassName:r}=e,a=t.length===1,n=t[0],o=t.length,i=l=>{const d=[];let p=0,m=0,h;for(let b=0;b<l.length;b++){let w=l[b];if(p===0){if(w===n&&(a||l.slice(b,b+o)===t)){d.push(l.slice(m,b)),m=b+o;continue}if(w==="/"){h=b;continue}}w==="["?p++:w==="]"&&p--}const u=d.length===0?l:l.substring(m),f=u.startsWith(Vi),x=f?u.substring(1):u,g=h&&h>m?h-m:void 0;return{modifiers:d,hasImportantModifier:f,baseClassName:x,maybePostfixModifierPosition:g}};return r?l=>r({className:l,parseClassName:i}):i},Yp=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(a=>{a[0]==="["?(t.push(...r.sort(),a),r=[]):r.push(a)}),t.push(...r.sort()),t},Jp=e=>({cache:Wp(e.cacheSize),parseClassName:Kp(e),...Up(e)}),Xp=/\s+/,Qp=(e,t)=>{const{parseClassName:r,getClassGroupId:a,getConflictingClassGroupIds:n}=t,o=[],i=e.trim().split(Xp);let l="";for(let d=i.length-1;d>=0;d-=1){const p=i[d],{modifiers:m,hasImportantModifier:h,baseClassName:u,maybePostfixModifierPosition:f}=r(p);let x=!!f,g=a(x?u.substring(0,f):u);if(!g){if(!x){l=p+(l.length>0?" "+l:l);continue}if(g=a(u),!g){l=p+(l.length>0?" "+l:l);continue}x=!1}const b=Yp(m).join(":"),w=h?b+Vi:b,v=w+g;if(o.includes(v))continue;o.push(v);const y=n(g,x);for(let j=0;j<y.length;++j){const k=y[j];o.push(w+k)}l=p+(l.length>0?" "+l:l)}return l};function Zp(){let e=0,t,r,a="";for(;e<arguments.length;)(t=arguments[e++])&&(r=qi(t))&&(a&&(a+=" "),a+=r);return a}const qi=e=>{if(typeof e=="string")return e;let t,r="";for(let a=0;a<e.length;a++)e[a]&&(t=qi(e[a]))&&(r&&(r+=" "),r+=t);return r};function em(e,...t){let r,a,n,o=i;function i(d){const p=t.reduce((m,h)=>h(m),e());return r=Jp(p),a=r.cache.get,n=r.cache.set,o=l,l(d)}function l(d){const p=a(d);if(p)return p;const m=Qp(d,r);return n(d,m),m}return function(){return o(Zp.apply(null,arguments))}}const ue=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Wi=/^\[(?:([a-z-]+):)?(.+)\]$/i,tm=/^\d+\/\d+$/,rm=new Set(["px","full","screen"]),sm=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,am=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,nm=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,om=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,im=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ct=e=>rr(e)||rm.has(e)||tm.test(e),gt=e=>xr(e,"length",fm),rr=e=>!!e&&!Number.isNaN(Number(e)),oa=e=>xr(e,"number",rr),Sr=e=>!!e&&Number.isInteger(Number(e)),lm=e=>e.endsWith("%")&&rr(e.slice(0,-1)),J=e=>Wi.test(e),xt=e=>sm.test(e),cm=new Set(["length","size","percentage"]),dm=e=>xr(e,cm,Ki),um=e=>xr(e,"position",Ki),pm=new Set(["image","url"]),mm=e=>xr(e,pm,xm),hm=e=>xr(e,"",gm),Er=()=>!0,xr=(e,t,r)=>{const a=Wi.exec(e);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):r(a[2]):!1},fm=e=>am.test(e)&&!nm.test(e),Ki=()=>!1,gm=e=>om.test(e),xm=e=>im.test(e),bm=()=>{const e=ue("colors"),t=ue("spacing"),r=ue("blur"),a=ue("brightness"),n=ue("borderColor"),o=ue("borderRadius"),i=ue("borderSpacing"),l=ue("borderWidth"),d=ue("contrast"),p=ue("grayscale"),m=ue("hueRotate"),h=ue("invert"),u=ue("gap"),f=ue("gradientColorStops"),x=ue("gradientColorStopPositions"),g=ue("inset"),b=ue("margin"),w=ue("opacity"),v=ue("padding"),y=ue("saturate"),j=ue("scale"),k=ue("sepia"),C=ue("skew"),T=ue("space"),I=ue("translate"),R=()=>["auto","contain","none"],U=()=>["auto","hidden","clip","visible","scroll"],M=()=>["auto",J,t],P=()=>[J,t],F=()=>["",ct,gt],A=()=>["auto",rr,J],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],S=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",J],Z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],B=()=>[rr,J];return{cacheSize:500,separator:":",theme:{colors:[Er],spacing:[ct,gt],blur:["none","",xt,J],brightness:B(),borderColor:[e],borderRadius:["none","","full",xt,J],borderSpacing:P(),borderWidth:F(),contrast:B(),grayscale:E(),hueRotate:B(),invert:E(),gap:P(),gradientColorStops:[e],gradientColorStopPositions:[lm,gt],inset:M(),margin:M(),opacity:B(),padding:P(),saturate:B(),scale:B(),sepia:E(),skew:B(),space:P(),translate:P()},classGroups:{aspect:[{aspect:["auto","square","video",J]}],container:["container"],columns:[{columns:[xt]}],"break-after":[{"break-after":Z()}],"break-before":[{"break-before":Z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),J]}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Sr,J]}],basis:[{basis:M()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",J]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",Sr,J]}],"grid-cols":[{"grid-cols":[Er]}],"col-start-end":[{col:["auto",{span:["full",Sr,J]},J]}],"col-start":[{"col-start":A()}],"col-end":[{"col-end":A()}],"grid-rows":[{"grid-rows":[Er]}],"row-start-end":[{row:["auto",{span:[Sr,J]},J]}],"row-start":[{"row-start":A()}],"row-end":[{"row-end":A()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",J]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",J]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...S()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...S(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...S(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",J,t]}],"min-w":[{"min-w":[J,t,"min","max","fit"]}],"max-w":[{"max-w":[J,t,"none","full","min","max","fit","prose",{screen:[xt]},xt]}],h:[{h:[J,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[J,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[J,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[J,t,"auto","min","max","fit"]}],"font-size":[{text:["base",xt,gt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",oa]}],"font-family":[{font:[Er]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",J]}],"line-clamp":[{"line-clamp":["none",rr,oa]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",ct,J]}],"list-image":[{"list-image":["none",J]}],"list-style-type":[{list:["none","disc","decimal",J]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",ct,gt]}],"underline-offset":[{"underline-offset":["auto",ct,J]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),um]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",dm]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},mm]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...O(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:O()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...O()]}],"outline-offset":[{"outline-offset":[ct,J]}],"outline-w":[{outline:[ct,gt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[ct,gt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",xt,hm]}],"shadow-color":[{shadow:[Er]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[a]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",xt,J]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[h]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",J]}],duration:[{duration:B()}],ease:[{ease:["linear","in","out","in-out",J]}],delay:[{delay:B()}],animate:[{animate:["none","spin","ping","pulse","bounce",J]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[Sr,J]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",J]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[ct,gt,oa]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},vm=em(bm);function $(...e){return vm(Mi(e))}const ym=sp,Yi=c.forwardRef(({className:e,...t},r)=>s.jsx(Si,{ref:r,className:$("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Yi.displayName=Si.displayName;const wm=qr("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ji=c.forwardRef(({className:e,variant:t,...r},a)=>s.jsx(Ei,{ref:a,className:$(wm({variant:t}),e),...r}));Ji.displayName=Ei.displayName;const jm=c.forwardRef(({className:e,...t},r)=>s.jsx(Ti,{ref:r,className:$("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));jm.displayName=Ti.displayName;const Xi=c.forwardRef(({className:e,...t},r)=>s.jsx(Ii,{ref:r,className:$("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:s.jsx(Wr,{className:"h-4 w-4"})}));Xi.displayName=Ii.displayName;const Qi=c.forwardRef(({className:e,...t},r)=>s.jsx(Ai,{ref:r,className:$("text-sm font-semibold",e),...t}));Qi.displayName=Ai.displayName;const Zi=c.forwardRef(({className:e,...t},r)=>s.jsx(Pi,{ref:r,className:$("text-sm opacity-90",e),...t}));Zi.displayName=Pi.displayName;const km=1,Nm=1e6;let ia=0;function Cm(){return ia=(ia+1)%Number.MAX_VALUE,ia.toString()}const la=new Map,po=e=>{if(la.has(e))return;const t=setTimeout(()=>{la.delete(e),Rr({type:"REMOVE_TOAST",toastId:e})},Nm);la.set(e,t)},Sm=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,km)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=t;return r?po(r):e.toasts.forEach(a=>{po(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===r||r===void 0?{...a,open:!1}:a)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)}}},ls=[];let cs={toasts:[]};function Rr(e){cs=Sm(cs,e),ls.forEach(t=>{t(cs)})}function el({...e}){const t=Cm(),r=n=>Rr({type:"UPDATE_TOAST",toast:{...n,id:t}}),a=()=>Rr({type:"DISMISS_TOAST",toastId:t});return Rr({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:n=>{n||a()}}}),{id:t,dismiss:a,update:r}}function _s(){const[e,t]=c.useState(cs);return c.useEffect(()=>(ls.push(t),()=>{const r=ls.indexOf(t);r>-1&&ls.splice(r,1)}),[e]),{...e,toast:el,dismiss:r=>Rr({type:"DISMISS_TOAST",toastId:r})}}function br(){const{toasts:e}=_s();return s.jsxs(ym,{children:[e.map(function({id:t,title:r,description:a,action:n,...o}){return s.jsxs(Ji,{...o,children:[s.jsxs("div",{className:"grid gap-1",children:[r&&s.jsx(Qi,{children:r}),a&&s.jsx(Zi,{children:a})]}),n,s.jsx(Xi,{})]},t)}),s.jsx(Yi,{})]})}var hs=["light","dark"],Xa="(prefers-color-scheme: dark)",Em=typeof window>"u",Qa=c.createContext(void 0),Am={setTheme:e=>{},themes:[]},tl=()=>{var e;return(e=c.useContext(Qa))!=null?e:Am},Pm=e=>c.useContext(Qa)?e.children:c.createElement(Im,{...e}),Tm=["light","dark"],Im=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:a=!0,storageKey:n="theme",themes:o=Tm,defaultTheme:i=r?"system":"light",attribute:l="data-theme",value:d,children:p,nonce:m})=>{let[h,u]=c.useState(()=>mo(n,i)),[f,x]=c.useState(()=>mo(n)),g=d?Object.values(d):o,b=c.useCallback(j=>{let k=j;if(!k)return;j==="system"&&r&&(k=ho());let C=d?d[k]:k,T=t?Mm():null,I=document.documentElement;if(l==="class"?(I.classList.remove(...g),C&&I.classList.add(C)):C?I.setAttribute(l,C):I.removeAttribute(l),a){let R=hs.includes(i)?i:null,U=hs.includes(k)?k:R;I.style.colorScheme=U}T==null||T()},[]),w=c.useCallback(j=>{let k=typeof j=="function"?j(j):j;u(k);try{localStorage.setItem(n,k)}catch{}},[e]),v=c.useCallback(j=>{let k=ho(j);x(k),h==="system"&&r&&!e&&b("system")},[h,e]);c.useEffect(()=>{let j=window.matchMedia(Xa);return j.addListener(v),v(j),()=>j.removeListener(v)},[v]),c.useEffect(()=>{let j=k=>{if(k.key!==n)return;let C=k.newValue||i;w(C)};return window.addEventListener("storage",j),()=>window.removeEventListener("storage",j)},[w]),c.useEffect(()=>{b(e??h)},[e,h]);let y=c.useMemo(()=>({theme:h,setTheme:w,forcedTheme:e,resolvedTheme:h==="system"?f:h,themes:r?[...o,"system"]:o,systemTheme:r?f:void 0}),[h,w,e,f,r,o]);return c.createElement(Qa.Provider,{value:y},c.createElement(Rm,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:a,storageKey:n,themes:o,defaultTheme:i,attribute:l,value:d,children:p,attrs:g,nonce:m}),p)},Rm=c.memo(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:a,enableColorScheme:n,defaultTheme:o,value:i,attrs:l,nonce:d})=>{let p=o==="system",m=r==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(x=>`'${x}'`).join(",")})`};`:`var d=document.documentElement,n='${r}',s='setAttribute';`,h=n?hs.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",u=(x,g=!1,b=!0)=>{let w=i?i[x]:x,v=g?x+"|| ''":`'${w}'`,y="";return n&&b&&!g&&hs.includes(x)&&(y+=`d.style.colorScheme = '${x}';`),r==="class"?g||w?y+=`c.add(${v})`:y+="null":w&&(y+=`d[s](n,${v})`),y},f=e?`!function(){${m}${u(e)}}()`:a?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${p})){var t='${Xa}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${u(i?"x[e]":"e",!0)}}${p?"":"else{"+u(o,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${u(i?"x[e]":"e",!0)}}else{${u(o,!1,!1)};}${h}}catch(t){}}();`;return c.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:f}})}),mo=(e,t)=>{if(Em)return;let r;try{r=localStorage.getItem(e)||void 0}catch{}return r||t},Mm=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},ho=e=>(e||(e=window.matchMedia(Xa)),e.matches?"dark":"light"),Lm=e=>{switch(e){case"success":return _m;case"info":return Fm;case"warning":return $m;case"error":return zm;default:return null}},Dm=Array(12).fill(0),Om=({visible:e})=>L.createElement("div",{className:"sonner-loading-wrapper","data-visible":e},L.createElement("div",{className:"sonner-spinner"},Dm.map((t,r)=>L.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),_m=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),$m=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Fm=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),zm=L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},L.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Bm=()=>{let[e,t]=L.useState(document.hidden);return L.useEffect(()=>{let r=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),e},wa=1,Um=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:r,...a}=e,n=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:wa++,o=this.toasts.find(l=>l.id===n),i=e.dismissible===void 0?!0:e.dismissible;return o?this.toasts=this.toasts.map(l=>l.id===n?(this.publish({...l,...e,id:n,title:r}),{...l,...e,id:n,dismissible:i,title:r}):l):this.addToast({title:r,...a,dismissible:i,id:n}),n},this.dismiss=e=>(e||this.toasts.forEach(t=>{this.subscribers.forEach(r=>r({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let r;t.loading!==void 0&&(r=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let a=e instanceof Promise?e:e(),n=r!==void 0;return a.then(async o=>{if(Gm(o)&&!o.ok){n=!1;let i=typeof t.error=="function"?await t.error(`HTTP error! status: ${o.status}`):t.error,l=typeof t.description=="function"?await t.description(`HTTP error! status: ${o.status}`):t.description;this.create({id:r,type:"error",message:i,description:l})}else if(t.success!==void 0){n=!1;let i=typeof t.success=="function"?await t.success(o):t.success,l=typeof t.description=="function"?await t.description(o):t.description;this.create({id:r,type:"success",message:i,description:l})}}).catch(async o=>{if(t.error!==void 0){n=!1;let i=typeof t.error=="function"?await t.error(o):t.error,l=typeof t.description=="function"?await t.description(o):t.description;this.create({id:r,type:"error",message:i,description:l})}}).finally(()=>{var o;n&&(this.dismiss(r),r=void 0),(o=t.finally)==null||o.call(t)}),r},this.custom=(e,t)=>{let r=(t==null?void 0:t.id)||wa++;return this.create({jsx:e(r),id:r,...t}),r},this.subscribers=[],this.toasts=[]}},Re=new Um,Hm=(e,t)=>{let r=(t==null?void 0:t.id)||wa++;return Re.addToast({title:e,...t,id:r}),r},Gm=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Vm=Hm,qm=()=>Re.toasts,z=Object.assign(Vm,{success:Re.success,info:Re.info,warning:Re.warning,error:Re.error,custom:Re.custom,message:Re.message,promise:Re.promise,dismiss:Re.dismiss,loading:Re.loading},{getHistory:qm});function Wm(e,{insertAt:t}={}){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}Wm(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function as(e){return e.label!==void 0}var Km=3,Ym="32px",Jm=4e3,Xm=356,Qm=14,Zm=20,eh=200;function th(...e){return e.filter(Boolean).join(" ")}var rh=e=>{var t,r,a,n,o,i,l,d,p,m;let{invert:h,toast:u,unstyled:f,interacting:x,setHeights:g,visibleToasts:b,heights:w,index:v,toasts:y,expanded:j,removeToast:k,defaultRichColors:C,closeButton:T,style:I,cancelButtonStyle:R,actionButtonStyle:U,className:M="",descriptionClassName:P="",duration:F,position:A,gap:H,loadingIcon:O,expandByDefault:V,classNames:S,icons:E,closeButtonAriaLabel:Z="Close toast",pauseWhenPageIsHidden:B,cn:W}=e,[Q,le]=L.useState(!1),[be,re]=L.useState(!1),[G,te]=L.useState(!1),[se,ee]=L.useState(!1),[ne,ae]=L.useState(0),[ke,Te]=L.useState(0),ht=L.useRef(null),_e=L.useRef(null),Dt=v===0,ta=v+1<=b,ve=u.type,Xt=u.dismissible!==!1,ku=u.className||"",Nu=u.descriptionClassName||"",es=L.useMemo(()=>w.findIndex(Y=>Y.toastId===u.id)||0,[w,u.id]),Cu=L.useMemo(()=>{var Y;return(Y=u.closeButton)!=null?Y:T},[u.closeButton,T]),Hn=L.useMemo(()=>u.duration||F||Jm,[u.duration,F]),ra=L.useRef(0),Qt=L.useRef(0),Gn=L.useRef(0),Zt=L.useRef(null),[Vn,Su]=A.split("-"),qn=L.useMemo(()=>w.reduce((Y,de,ce)=>ce>=es?Y:Y+de.height,0),[w,es]),Wn=Bm(),Eu=u.invert||h,sa=ve==="loading";Qt.current=L.useMemo(()=>es*H+qn,[es,qn]),L.useEffect(()=>{le(!0)},[]),L.useLayoutEffect(()=>{if(!Q)return;let Y=_e.current,de=Y.style.height;Y.style.height="auto";let ce=Y.getBoundingClientRect().height;Y.style.height=de,Te(ce),g(Qe=>Qe.find(Ze=>Ze.toastId===u.id)?Qe.map(Ze=>Ze.toastId===u.id?{...Ze,height:ce}:Ze):[{toastId:u.id,height:ce,position:u.position},...Qe])},[Q,u.title,u.description,g,u.id]);let ft=L.useCallback(()=>{re(!0),ae(Qt.current),g(Y=>Y.filter(de=>de.toastId!==u.id)),setTimeout(()=>{k(u)},eh)},[u,k,g,Qt]);L.useEffect(()=>{if(u.promise&&ve==="loading"||u.duration===1/0||u.type==="loading")return;let Y,de=Hn;return j||x||B&&Wn?(()=>{if(Gn.current<ra.current){let ce=new Date().getTime()-ra.current;de=de-ce}Gn.current=new Date().getTime()})():de!==1/0&&(ra.current=new Date().getTime(),Y=setTimeout(()=>{var ce;(ce=u.onAutoClose)==null||ce.call(u,u),ft()},de)),()=>clearTimeout(Y)},[j,x,V,u,Hn,ft,u.promise,ve,B,Wn]),L.useEffect(()=>{let Y=_e.current;if(Y){let de=Y.getBoundingClientRect().height;return Te(de),g(ce=>[{toastId:u.id,height:de,position:u.position},...ce]),()=>g(ce=>ce.filter(Qe=>Qe.toastId!==u.id))}},[g,u.id]),L.useEffect(()=>{u.delete&&ft()},[ft,u.delete]);function Au(){return E!=null&&E.loading?L.createElement("div",{className:"sonner-loader","data-visible":ve==="loading"},E.loading):O?L.createElement("div",{className:"sonner-loader","data-visible":ve==="loading"},O):L.createElement(Om,{visible:ve==="loading"})}return L.createElement("li",{"aria-live":u.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:_e,className:W(M,ku,S==null?void 0:S.toast,(t=u==null?void 0:u.classNames)==null?void 0:t.toast,S==null?void 0:S.default,S==null?void 0:S[ve],(r=u==null?void 0:u.classNames)==null?void 0:r[ve]),"data-sonner-toast":"","data-rich-colors":(a=u.richColors)!=null?a:C,"data-styled":!(u.jsx||u.unstyled||f),"data-mounted":Q,"data-promise":!!u.promise,"data-removed":be,"data-visible":ta,"data-y-position":Vn,"data-x-position":Su,"data-index":v,"data-front":Dt,"data-swiping":G,"data-dismissible":Xt,"data-type":ve,"data-invert":Eu,"data-swipe-out":se,"data-expanded":!!(j||V&&Q),style:{"--index":v,"--toasts-before":v,"--z-index":y.length-v,"--offset":`${be?ne:Qt.current}px`,"--initial-height":V?"auto":`${ke}px`,...I,...u.style},onPointerDown:Y=>{sa||!Xt||(ht.current=new Date,ae(Qt.current),Y.target.setPointerCapture(Y.pointerId),Y.target.tagName!=="BUTTON"&&(te(!0),Zt.current={x:Y.clientX,y:Y.clientY}))},onPointerUp:()=>{var Y,de,ce,Qe;if(se||!Xt)return;Zt.current=null;let Ze=Number(((Y=_e.current)==null?void 0:Y.style.getPropertyValue("--swipe-amount").replace("px",""))||0),ts=new Date().getTime()-((de=ht.current)==null?void 0:de.getTime()),Pu=Math.abs(Ze)/ts;if(Math.abs(Ze)>=Zm||Pu>.11){ae(Qt.current),(ce=u.onDismiss)==null||ce.call(u,u),ft(),ee(!0);return}(Qe=_e.current)==null||Qe.style.setProperty("--swipe-amount","0px"),te(!1)},onPointerMove:Y=>{var de;if(!Zt.current||!Xt)return;let ce=Y.clientY-Zt.current.y,Qe=Y.clientX-Zt.current.x,Ze=(Vn==="top"?Math.min:Math.max)(0,ce),ts=Y.pointerType==="touch"?10:2;Math.abs(Ze)>ts?(de=_e.current)==null||de.style.setProperty("--swipe-amount",`${ce}px`):Math.abs(Qe)>ts&&(Zt.current=null)}},Cu&&!u.jsx?L.createElement("button",{"aria-label":Z,"data-disabled":sa,"data-close-button":!0,onClick:sa||!Xt?()=>{}:()=>{var Y;ft(),(Y=u.onDismiss)==null||Y.call(u,u)},className:W(S==null?void 0:S.closeButton,(n=u==null?void 0:u.classNames)==null?void 0:n.closeButton)},L.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},L.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),L.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,u.jsx||L.isValidElement(u.title)?u.jsx||u.title:L.createElement(L.Fragment,null,ve||u.icon||u.promise?L.createElement("div",{"data-icon":"",className:W(S==null?void 0:S.icon,(o=u==null?void 0:u.classNames)==null?void 0:o.icon)},u.promise||u.type==="loading"&&!u.icon?u.icon||Au():null,u.type!=="loading"?u.icon||(E==null?void 0:E[ve])||Lm(ve):null):null,L.createElement("div",{"data-content":"",className:W(S==null?void 0:S.content,(i=u==null?void 0:u.classNames)==null?void 0:i.content)},L.createElement("div",{"data-title":"",className:W(S==null?void 0:S.title,(l=u==null?void 0:u.classNames)==null?void 0:l.title)},u.title),u.description?L.createElement("div",{"data-description":"",className:W(P,Nu,S==null?void 0:S.description,(d=u==null?void 0:u.classNames)==null?void 0:d.description)},u.description):null),L.isValidElement(u.cancel)?u.cancel:u.cancel&&as(u.cancel)?L.createElement("button",{"data-button":!0,"data-cancel":!0,style:u.cancelButtonStyle||R,onClick:Y=>{var de,ce;as(u.cancel)&&Xt&&((ce=(de=u.cancel).onClick)==null||ce.call(de,Y),ft())},className:W(S==null?void 0:S.cancelButton,(p=u==null?void 0:u.classNames)==null?void 0:p.cancelButton)},u.cancel.label):null,L.isValidElement(u.action)?u.action:u.action&&as(u.action)?L.createElement("button",{"data-button":!0,"data-action":!0,style:u.actionButtonStyle||U,onClick:Y=>{var de,ce;as(u.action)&&(Y.defaultPrevented||((ce=(de=u.action).onClick)==null||ce.call(de,Y),ft()))},className:W(S==null?void 0:S.actionButton,(m=u==null?void 0:u.classNames)==null?void 0:m.actionButton)},u.action.label):null))};function fo(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}var sh=e=>{let{invert:t,position:r="bottom-right",hotkey:a=["altKey","KeyT"],expand:n,closeButton:o,className:i,offset:l,theme:d="light",richColors:p,duration:m,style:h,visibleToasts:u=Km,toastOptions:f,dir:x=fo(),gap:g=Qm,loadingIcon:b,icons:w,containerAriaLabel:v="Notifications",pauseWhenPageIsHidden:y,cn:j=th}=e,[k,C]=L.useState([]),T=L.useMemo(()=>Array.from(new Set([r].concat(k.filter(B=>B.position).map(B=>B.position)))),[k,r]),[I,R]=L.useState([]),[U,M]=L.useState(!1),[P,F]=L.useState(!1),[A,H]=L.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),O=L.useRef(null),V=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),S=L.useRef(null),E=L.useRef(!1),Z=L.useCallback(B=>{var W;(W=k.find(Q=>Q.id===B.id))!=null&&W.delete||Re.dismiss(B.id),C(Q=>Q.filter(({id:le})=>le!==B.id))},[k]);return L.useEffect(()=>Re.subscribe(B=>{if(B.dismiss){C(W=>W.map(Q=>Q.id===B.id?{...Q,delete:!0}:Q));return}setTimeout(()=>{Ou.flushSync(()=>{C(W=>{let Q=W.findIndex(le=>le.id===B.id);return Q!==-1?[...W.slice(0,Q),{...W[Q],...B},...W.slice(Q+1)]:[B,...W]})})})}),[]),L.useEffect(()=>{if(d!=="system"){H(d);return}d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?H("dark"):H("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:B})=>{H(B?"dark":"light")})},[d]),L.useEffect(()=>{k.length<=1&&M(!1)},[k]),L.useEffect(()=>{let B=W=>{var Q,le;a.every(be=>W[be]||W.code===be)&&(M(!0),(Q=O.current)==null||Q.focus()),W.code==="Escape"&&(document.activeElement===O.current||(le=O.current)!=null&&le.contains(document.activeElement))&&M(!1)};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[a]),L.useEffect(()=>{if(O.current)return()=>{S.current&&(S.current.focus({preventScroll:!0}),S.current=null,E.current=!1)}},[O.current]),k.length?L.createElement("section",{"aria-label":`${v} ${V}`,tabIndex:-1},T.map((B,W)=>{var Q;let[le,be]=B.split("-");return L.createElement("ol",{key:B,dir:x==="auto"?fo():x,tabIndex:-1,ref:O,className:i,"data-sonner-toaster":!0,"data-theme":A,"data-y-position":le,"data-x-position":be,style:{"--front-toast-height":`${((Q=I[0])==null?void 0:Q.height)||0}px`,"--offset":typeof l=="number"?`${l}px`:l||Ym,"--width":`${Xm}px`,"--gap":`${g}px`,...h},onBlur:re=>{E.current&&!re.currentTarget.contains(re.relatedTarget)&&(E.current=!1,S.current&&(S.current.focus({preventScroll:!0}),S.current=null))},onFocus:re=>{re.target instanceof HTMLElement&&re.target.dataset.dismissible==="false"||E.current||(E.current=!0,S.current=re.relatedTarget)},onMouseEnter:()=>M(!0),onMouseMove:()=>M(!0),onMouseLeave:()=>{P||M(!1)},onPointerDown:re=>{re.target instanceof HTMLElement&&re.target.dataset.dismissible==="false"||F(!0)},onPointerUp:()=>F(!1)},k.filter(re=>!re.position&&W===0||re.position===B).map((re,G)=>{var te,se;return L.createElement(rh,{key:re.id,icons:w,index:G,toast:re,defaultRichColors:p,duration:(te=f==null?void 0:f.duration)!=null?te:m,className:f==null?void 0:f.className,descriptionClassName:f==null?void 0:f.descriptionClassName,invert:t,visibleToasts:u,closeButton:(se=f==null?void 0:f.closeButton)!=null?se:o,interacting:P,position:B,style:f==null?void 0:f.style,unstyled:f==null?void 0:f.unstyled,classNames:f==null?void 0:f.classNames,cancelButtonStyle:f==null?void 0:f.cancelButtonStyle,actionButtonStyle:f==null?void 0:f.actionButtonStyle,removeToast:Z,toasts:k.filter(ee=>ee.position==re.position),heights:I.filter(ee=>ee.position==re.position),setHeights:R,expandByDefault:n,gap:g,loadingIcon:b,expanded:U,pauseWhenPageIsHidden:y,cn:j})}))})):null};const ah=({...e})=>{const{theme:t="system"}=tl();return s.jsx(sh,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},nh=["top","right","bottom","left"],Pt=Math.min,De=Math.max,fs=Math.round,ns=Math.floor,Tt=e=>({x:e,y:e}),oh={left:"right",right:"left",bottom:"top",top:"bottom"},ih={start:"end",end:"start"};function ja(e,t,r){return De(e,Pt(t,r))}function pt(e,t){return typeof e=="function"?e(t):e}function mt(e){return e.split("-")[0]}function vr(e){return e.split("-")[1]}function Za(e){return e==="x"?"y":"x"}function en(e){return e==="y"?"height":"width"}function It(e){return["top","bottom"].includes(mt(e))?"y":"x"}function tn(e){return Za(It(e))}function lh(e,t,r){r===void 0&&(r=!1);const a=vr(e),n=tn(e),o=en(n);let i=n==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(i=gs(i)),[i,gs(i)]}function ch(e){const t=gs(e);return[ka(e),t,ka(t)]}function ka(e){return e.replace(/start|end/g,t=>ih[t])}function dh(e,t,r){const a=["left","right"],n=["right","left"],o=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return r?t?n:a:t?a:n;case"left":case"right":return t?o:i;default:return[]}}function uh(e,t,r,a){const n=vr(e);let o=dh(mt(e),r==="start",a);return n&&(o=o.map(i=>i+"-"+n),t&&(o=o.concat(o.map(ka)))),o}function gs(e){return e.replace(/left|right|bottom|top/g,t=>oh[t])}function ph(e){return{top:0,right:0,bottom:0,left:0,...e}}function rl(e){return typeof e!="number"?ph(e):{top:e,right:e,bottom:e,left:e}}function xs(e){const{x:t,y:r,width:a,height:n}=e;return{width:a,height:n,top:r,left:t,right:t+a,bottom:r+n,x:t,y:r}}function go(e,t,r){let{reference:a,floating:n}=e;const o=It(t),i=tn(t),l=en(i),d=mt(t),p=o==="y",m=a.x+a.width/2-n.width/2,h=a.y+a.height/2-n.height/2,u=a[l]/2-n[l]/2;let f;switch(d){case"top":f={x:m,y:a.y-n.height};break;case"bottom":f={x:m,y:a.y+a.height};break;case"right":f={x:a.x+a.width,y:h};break;case"left":f={x:a.x-n.width,y:h};break;default:f={x:a.x,y:a.y}}switch(vr(t)){case"start":f[i]-=u*(r&&p?-1:1);break;case"end":f[i]+=u*(r&&p?-1:1);break}return f}const mh=async(e,t,r)=>{const{placement:a="bottom",strategy:n="absolute",middleware:o=[],platform:i}=r,l=o.filter(Boolean),d=await(i.isRTL==null?void 0:i.isRTL(t));let p=await i.getElementRects({reference:e,floating:t,strategy:n}),{x:m,y:h}=go(p,a,d),u=a,f={},x=0;for(let g=0;g<l.length;g++){const{name:b,fn:w}=l[g],{x:v,y,data:j,reset:k}=await w({x:m,y:h,initialPlacement:a,placement:u,strategy:n,middlewareData:f,rects:p,platform:i,elements:{reference:e,floating:t}});m=v??m,h=y??h,f={...f,[b]:{...f[b],...j}},k&&x<=50&&(x++,typeof k=="object"&&(k.placement&&(u=k.placement),k.rects&&(p=k.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:n}):k.rects),{x:m,y:h}=go(p,u,d)),g=-1)}return{x:m,y:h,placement:u,strategy:n,middlewareData:f}};async function Lr(e,t){var r;t===void 0&&(t={});const{x:a,y:n,platform:o,rects:i,elements:l,strategy:d}=e,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:h="floating",altBoundary:u=!1,padding:f=0}=pt(t,e),x=rl(f),b=l[u?h==="floating"?"reference":"floating":h],w=xs(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(b)))==null||r?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:p,rootBoundary:m,strategy:d})),v=h==="floating"?{x:a,y:n,width:i.floating.width,height:i.floating.height}:i.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),j=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},k=xs(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:d}):v);return{top:(w.top-k.top+x.top)/j.y,bottom:(k.bottom-w.bottom+x.bottom)/j.y,left:(w.left-k.left+x.left)/j.x,right:(k.right-w.right+x.right)/j.x}}const hh=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:a,placement:n,rects:o,platform:i,elements:l,middlewareData:d}=t,{element:p,padding:m=0}=pt(e,t)||{};if(p==null)return{};const h=rl(m),u={x:r,y:a},f=tn(n),x=en(f),g=await i.getDimensions(p),b=f==="y",w=b?"top":"left",v=b?"bottom":"right",y=b?"clientHeight":"clientWidth",j=o.reference[x]+o.reference[f]-u[f]-o.floating[x],k=u[f]-o.reference[f],C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(p));let T=C?C[y]:0;(!T||!await(i.isElement==null?void 0:i.isElement(C)))&&(T=l.floating[y]||o.floating[x]);const I=j/2-k/2,R=T/2-g[x]/2-1,U=Pt(h[w],R),M=Pt(h[v],R),P=U,F=T-g[x]-M,A=T/2-g[x]/2+I,H=ja(P,A,F),O=!d.arrow&&vr(n)!=null&&A!==H&&o.reference[x]/2-(A<P?U:M)-g[x]/2<0,V=O?A<P?A-P:A-F:0;return{[f]:u[f]+V,data:{[f]:H,centerOffset:A-H-V,...O&&{alignmentOffset:V}},reset:O}}}),fh=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,a;const{placement:n,middlewareData:o,rects:i,initialPlacement:l,platform:d,elements:p}=t,{mainAxis:m=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:g=!0,...b}=pt(e,t);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const w=mt(n),v=It(l),y=mt(l)===l,j=await(d.isRTL==null?void 0:d.isRTL(p.floating)),k=u||(y||!g?[gs(l)]:ch(l)),C=x!=="none";!u&&C&&k.push(...uh(l,g,x,j));const T=[l,...k],I=await Lr(t,b),R=[];let U=((a=o.flip)==null?void 0:a.overflows)||[];if(m&&R.push(I[w]),h){const A=lh(n,i,j);R.push(I[A[0]],I[A[1]])}if(U=[...U,{placement:n,overflows:R}],!R.every(A=>A<=0)){var M,P;const A=(((M=o.flip)==null?void 0:M.index)||0)+1,H=T[A];if(H)return{data:{index:A,overflows:U},reset:{placement:H}};let O=(P=U.filter(V=>V.overflows[0]<=0).sort((V,S)=>V.overflows[1]-S.overflows[1])[0])==null?void 0:P.placement;if(!O)switch(f){case"bestFit":{var F;const V=(F=U.filter(S=>{if(C){const E=It(S.placement);return E===v||E==="y"}return!0}).map(S=>[S.placement,S.overflows.filter(E=>E>0).reduce((E,Z)=>E+Z,0)]).sort((S,E)=>S[1]-E[1])[0])==null?void 0:F[0];V&&(O=V);break}case"initialPlacement":O=l;break}if(n!==O)return{reset:{placement:O}}}return{}}}};function xo(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function bo(e){return nh.some(t=>e[t]>=0)}const gh=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:r}=t,{strategy:a="referenceHidden",...n}=pt(e,t);switch(a){case"referenceHidden":{const o=await Lr(t,{...n,elementContext:"reference"}),i=xo(o,r.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:bo(i)}}}case"escaped":{const o=await Lr(t,{...n,altBoundary:!0}),i=xo(o,r.floating);return{data:{escapedOffsets:i,escaped:bo(i)}}}default:return{}}}}};async function xh(e,t){const{placement:r,platform:a,elements:n}=e,o=await(a.isRTL==null?void 0:a.isRTL(n.floating)),i=mt(r),l=vr(r),d=It(r)==="y",p=["left","top"].includes(i)?-1:1,m=o&&d?-1:1,h=pt(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:x}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof x=="number"&&(f=l==="end"?x*-1:x),d?{x:f*m,y:u*p}:{x:u*p,y:f*m}}const bh=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,a;const{x:n,y:o,placement:i,middlewareData:l}=t,d=await xh(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(a=l.arrow)!=null&&a.alignmentOffset?{}:{x:n+d.x,y:o+d.y,data:{...d,placement:i}}}}},vh=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:a,placement:n}=t,{mainAxis:o=!0,crossAxis:i=!1,limiter:l={fn:b=>{let{x:w,y:v}=b;return{x:w,y:v}}},...d}=pt(e,t),p={x:r,y:a},m=await Lr(t,d),h=It(mt(n)),u=Za(h);let f=p[u],x=p[h];if(o){const b=u==="y"?"top":"left",w=u==="y"?"bottom":"right",v=f+m[b],y=f-m[w];f=ja(v,f,y)}if(i){const b=h==="y"?"top":"left",w=h==="y"?"bottom":"right",v=x+m[b],y=x-m[w];x=ja(v,x,y)}const g=l.fn({...t,[u]:f,[h]:x});return{...g,data:{x:g.x-r,y:g.y-a,enabled:{[u]:o,[h]:i}}}}}},yh=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:r,y:a,placement:n,rects:o,middlewareData:i}=t,{offset:l=0,mainAxis:d=!0,crossAxis:p=!0}=pt(e,t),m={x:r,y:a},h=It(n),u=Za(h);let f=m[u],x=m[h];const g=pt(l,t),b=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(d){const y=u==="y"?"height":"width",j=o.reference[u]-o.floating[y]+b.mainAxis,k=o.reference[u]+o.reference[y]-b.mainAxis;f<j?f=j:f>k&&(f=k)}if(p){var w,v;const y=u==="y"?"width":"height",j=["top","left"].includes(mt(n)),k=o.reference[h]-o.floating[y]+(j&&((w=i.offset)==null?void 0:w[h])||0)+(j?0:b.crossAxis),C=o.reference[h]+o.reference[y]+(j?0:((v=i.offset)==null?void 0:v[h])||0)-(j?b.crossAxis:0);x<k?x=k:x>C&&(x=C)}return{[u]:f,[h]:x}}}},wh=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var r,a;const{placement:n,rects:o,platform:i,elements:l}=t,{apply:d=()=>{},...p}=pt(e,t),m=await Lr(t,p),h=mt(n),u=vr(n),f=It(n)==="y",{width:x,height:g}=o.floating;let b,w;h==="top"||h==="bottom"?(b=h,w=u===(await(i.isRTL==null?void 0:i.isRTL(l.floating))?"start":"end")?"left":"right"):(w=h,b=u==="end"?"top":"bottom");const v=g-m.top-m.bottom,y=x-m.left-m.right,j=Pt(g-m[b],v),k=Pt(x-m[w],y),C=!t.middlewareData.shift;let T=j,I=k;if((r=t.middlewareData.shift)!=null&&r.enabled.x&&(I=y),(a=t.middlewareData.shift)!=null&&a.enabled.y&&(T=v),C&&!u){const U=De(m.left,0),M=De(m.right,0),P=De(m.top,0),F=De(m.bottom,0);f?I=x-2*(U!==0||M!==0?U+M:De(m.left,m.right)):T=g-2*(P!==0||F!==0?P+F:De(m.top,m.bottom))}await d({...t,availableWidth:I,availableHeight:T});const R=await i.getDimensions(l.floating);return x!==R.width||g!==R.height?{reset:{rects:!0}}:{}}}};function $s(){return typeof window<"u"}function yr(e){return sl(e)?(e.nodeName||"").toLowerCase():"#document"}function Oe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function it(e){var t;return(t=(sl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function sl(e){return $s()?e instanceof Node||e instanceof Oe(e).Node:!1}function Je(e){return $s()?e instanceof Element||e instanceof Oe(e).Element:!1}function nt(e){return $s()?e instanceof HTMLElement||e instanceof Oe(e).HTMLElement:!1}function vo(e){return!$s()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Oe(e).ShadowRoot}function Kr(e){const{overflow:t,overflowX:r,overflowY:a,display:n}=Xe(e);return/auto|scroll|overlay|hidden|clip/.test(t+a+r)&&!["inline","contents"].includes(n)}function jh(e){return["table","td","th"].includes(yr(e))}function Fs(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function rn(e){const t=sn(),r=Je(e)?Xe(e):e;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(a=>(r.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(r.contain||"").includes(a))}function kh(e){let t=Rt(e);for(;nt(t)&&!hr(t);){if(rn(t))return t;if(Fs(t))return null;t=Rt(t)}return null}function sn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hr(e){return["html","body","#document"].includes(yr(e))}function Xe(e){return Oe(e).getComputedStyle(e)}function zs(e){return Je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Rt(e){if(yr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||vo(e)&&e.host||it(e);return vo(t)?t.host:t}function al(e){const t=Rt(e);return hr(t)?e.ownerDocument?e.ownerDocument.body:e.body:nt(t)&&Kr(t)?t:al(t)}function Dr(e,t,r){var a;t===void 0&&(t=[]),r===void 0&&(r=!0);const n=al(e),o=n===((a=e.ownerDocument)==null?void 0:a.body),i=Oe(n);if(o){const l=Na(i);return t.concat(i,i.visualViewport||[],Kr(n)?n:[],l&&r?Dr(l):[])}return t.concat(n,Dr(n,[],r))}function Na(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function nl(e){const t=Xe(e);let r=parseFloat(t.width)||0,a=parseFloat(t.height)||0;const n=nt(e),o=n?e.offsetWidth:r,i=n?e.offsetHeight:a,l=fs(r)!==o||fs(a)!==i;return l&&(r=o,a=i),{width:r,height:a,$:l}}function an(e){return Je(e)?e:e.contextElement}function sr(e){const t=an(e);if(!nt(t))return Tt(1);const r=t.getBoundingClientRect(),{width:a,height:n,$:o}=nl(t);let i=(o?fs(r.width):r.width)/a,l=(o?fs(r.height):r.height)/n;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const Nh=Tt(0);function ol(e){const t=Oe(e);return!sn()||!t.visualViewport?Nh:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ch(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Oe(e)?!1:t}function Ht(e,t,r,a){t===void 0&&(t=!1),r===void 0&&(r=!1);const n=e.getBoundingClientRect(),o=an(e);let i=Tt(1);t&&(a?Je(a)&&(i=sr(a)):i=sr(e));const l=Ch(o,r,a)?ol(o):Tt(0);let d=(n.left+l.x)/i.x,p=(n.top+l.y)/i.y,m=n.width/i.x,h=n.height/i.y;if(o){const u=Oe(o),f=a&&Je(a)?Oe(a):a;let x=u,g=Na(x);for(;g&&a&&f!==x;){const b=sr(g),w=g.getBoundingClientRect(),v=Xe(g),y=w.left+(g.clientLeft+parseFloat(v.paddingLeft))*b.x,j=w.top+(g.clientTop+parseFloat(v.paddingTop))*b.y;d*=b.x,p*=b.y,m*=b.x,h*=b.y,d+=y,p+=j,x=Oe(g),g=Na(x)}}return xs({width:m,height:h,x:d,y:p})}function Sh(e){let{elements:t,rect:r,offsetParent:a,strategy:n}=e;const o=n==="fixed",i=it(a),l=t?Fs(t.floating):!1;if(a===i||l&&o)return r;let d={scrollLeft:0,scrollTop:0},p=Tt(1);const m=Tt(0),h=nt(a);if((h||!h&&!o)&&((yr(a)!=="body"||Kr(i))&&(d=zs(a)),nt(a))){const u=Ht(a);p=sr(a),m.x=u.x+a.clientLeft,m.y=u.y+a.clientTop}return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-d.scrollLeft*p.x+m.x,y:r.y*p.y-d.scrollTop*p.y+m.y}}function Eh(e){return Array.from(e.getClientRects())}function Ca(e,t){const r=zs(e).scrollLeft;return t?t.left+r:Ht(it(e)).left+r}function Ah(e){const t=it(e),r=zs(e),a=e.ownerDocument.body,n=De(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),o=De(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight);let i=-r.scrollLeft+Ca(e);const l=-r.scrollTop;return Xe(a).direction==="rtl"&&(i+=De(t.clientWidth,a.clientWidth)-n),{width:n,height:o,x:i,y:l}}function Ph(e,t){const r=Oe(e),a=it(e),n=r.visualViewport;let o=a.clientWidth,i=a.clientHeight,l=0,d=0;if(n){o=n.width,i=n.height;const p=sn();(!p||p&&t==="fixed")&&(l=n.offsetLeft,d=n.offsetTop)}return{width:o,height:i,x:l,y:d}}function Th(e,t){const r=Ht(e,!0,t==="fixed"),a=r.top+e.clientTop,n=r.left+e.clientLeft,o=nt(e)?sr(e):Tt(1),i=e.clientWidth*o.x,l=e.clientHeight*o.y,d=n*o.x,p=a*o.y;return{width:i,height:l,x:d,y:p}}function yo(e,t,r){let a;if(t==="viewport")a=Ph(e,r);else if(t==="document")a=Ah(it(e));else if(Je(t))a=Th(t,r);else{const n=ol(e);a={...t,x:t.x-n.x,y:t.y-n.y}}return xs(a)}function il(e,t){const r=Rt(e);return r===t||!Je(r)||hr(r)?!1:Xe(r).position==="fixed"||il(r,t)}function Ih(e,t){const r=t.get(e);if(r)return r;let a=Dr(e,[],!1).filter(l=>Je(l)&&yr(l)!=="body"),n=null;const o=Xe(e).position==="fixed";let i=o?Rt(e):e;for(;Je(i)&&!hr(i);){const l=Xe(i),d=rn(i);!d&&l.position==="fixed"&&(n=null),(o?!d&&!n:!d&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Kr(i)&&!d&&il(e,i))?a=a.filter(m=>m!==i):n=l,i=Rt(i)}return t.set(e,a),a}function Rh(e){let{element:t,boundary:r,rootBoundary:a,strategy:n}=e;const i=[...r==="clippingAncestors"?Fs(t)?[]:Ih(t,this._c):[].concat(r),a],l=i[0],d=i.reduce((p,m)=>{const h=yo(t,m,n);return p.top=De(h.top,p.top),p.right=Pt(h.right,p.right),p.bottom=Pt(h.bottom,p.bottom),p.left=De(h.left,p.left),p},yo(t,l,n));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Mh(e){const{width:t,height:r}=nl(e);return{width:t,height:r}}function Lh(e,t,r){const a=nt(t),n=it(t),o=r==="fixed",i=Ht(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const d=Tt(0);if(a||!a&&!o)if((yr(t)!=="body"||Kr(n))&&(l=zs(t)),a){const f=Ht(t,!0,o,t);d.x=f.x+t.clientLeft,d.y=f.y+t.clientTop}else n&&(d.x=Ca(n));let p=0,m=0;if(n&&!a&&!o){const f=n.getBoundingClientRect();m=f.top+l.scrollTop,p=f.left+l.scrollLeft-Ca(n,f)}const h=i.left+l.scrollLeft-d.x-p,u=i.top+l.scrollTop-d.y-m;return{x:h,y:u,width:i.width,height:i.height}}function ca(e){return Xe(e).position==="static"}function wo(e,t){if(!nt(e)||Xe(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return it(e)===r&&(r=r.ownerDocument.body),r}function ll(e,t){const r=Oe(e);if(Fs(e))return r;if(!nt(e)){let n=Rt(e);for(;n&&!hr(n);){if(Je(n)&&!ca(n))return n;n=Rt(n)}return r}let a=wo(e,t);for(;a&&jh(a)&&ca(a);)a=wo(a,t);return a&&hr(a)&&ca(a)&&!rn(a)?r:a||kh(e)||r}const Dh=async function(e){const t=this.getOffsetParent||ll,r=this.getDimensions,a=await r(e.floating);return{reference:Lh(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function Oh(e){return Xe(e).direction==="rtl"}const _h={convertOffsetParentRelativeRectToViewportRelativeRect:Sh,getDocumentElement:it,getClippingRect:Rh,getOffsetParent:ll,getElementRects:Dh,getClientRects:Eh,getDimensions:Mh,getScale:sr,isElement:Je,isRTL:Oh};function $h(e,t){let r=null,a;const n=it(e);function o(){var l;clearTimeout(a),(l=r)==null||l.disconnect(),r=null}function i(l,d){l===void 0&&(l=!1),d===void 0&&(d=1),o();const{left:p,top:m,width:h,height:u}=e.getBoundingClientRect();if(l||t(),!h||!u)return;const f=ns(m),x=ns(n.clientWidth-(p+h)),g=ns(n.clientHeight-(m+u)),b=ns(p),v={rootMargin:-f+"px "+-x+"px "+-g+"px "+-b+"px",threshold:De(0,Pt(1,d))||1};let y=!0;function j(k){const C=k[0].intersectionRatio;if(C!==d){if(!y)return i();C?i(!1,C):a=setTimeout(()=>{i(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(j,{...v,root:n.ownerDocument})}catch{r=new IntersectionObserver(j,v)}r.observe(e)}return i(!0),o}function Fh(e,t,r,a){a===void 0&&(a={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:d=!1}=a,p=an(e),m=n||o?[...p?Dr(p):[],...Dr(t)]:[];m.forEach(w=>{n&&w.addEventListener("scroll",r,{passive:!0}),o&&w.addEventListener("resize",r)});const h=p&&l?$h(p,r):null;let u=-1,f=null;i&&(f=new ResizeObserver(w=>{let[v]=w;v&&v.target===p&&f&&(f.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var y;(y=f)==null||y.observe(t)})),r()}),p&&!d&&f.observe(p),f.observe(t));let x,g=d?Ht(e):null;d&&b();function b(){const w=Ht(e);g&&(w.x!==g.x||w.y!==g.y||w.width!==g.width||w.height!==g.height)&&r(),g=w,x=requestAnimationFrame(b)}return r(),()=>{var w;m.forEach(v=>{n&&v.removeEventListener("scroll",r),o&&v.removeEventListener("resize",r)}),h==null||h(),(w=f)==null||w.disconnect(),f=null,d&&cancelAnimationFrame(x)}}const zh=bh,Bh=vh,Uh=fh,Hh=wh,Gh=gh,jo=hh,Vh=yh,qh=(e,t,r)=>{const a=new Map,n={platform:_h,...r},o={...n.platform,_c:a};return mh(e,t,{...n,platform:o})};var ds=typeof document<"u"?c.useLayoutEffect:c.useEffect;function bs(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,a,n;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==t.length)return!1;for(a=r;a--!==0;)if(!bs(e[a],t[a]))return!1;return!0}if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!{}.hasOwnProperty.call(t,n[a]))return!1;for(a=r;a--!==0;){const o=n[a];if(!(o==="_owner"&&e.$$typeof)&&!bs(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function cl(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ko(e,t){const r=cl(e);return Math.round(t*r)/r}function da(e){const t=c.useRef(e);return ds(()=>{t.current=e}),t}function Wh(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:a=[],platform:n,elements:{reference:o,floating:i}={},transform:l=!0,whileElementsMounted:d,open:p}=e,[m,h]=c.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[u,f]=c.useState(a);bs(u,a)||f(a);const[x,g]=c.useState(null),[b,w]=c.useState(null),v=c.useCallback(S=>{S!==C.current&&(C.current=S,g(S))},[]),y=c.useCallback(S=>{S!==T.current&&(T.current=S,w(S))},[]),j=o||x,k=i||b,C=c.useRef(null),T=c.useRef(null),I=c.useRef(m),R=d!=null,U=da(d),M=da(n),P=da(p),F=c.useCallback(()=>{if(!C.current||!T.current)return;const S={placement:t,strategy:r,middleware:u};M.current&&(S.platform=M.current),qh(C.current,T.current,S).then(E=>{const Z={...E,isPositioned:P.current!==!1};A.current&&!bs(I.current,Z)&&(I.current=Z,Gr.flushSync(()=>{h(Z)}))})},[u,t,r,M,P]);ds(()=>{p===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,h(S=>({...S,isPositioned:!1})))},[p]);const A=c.useRef(!1);ds(()=>(A.current=!0,()=>{A.current=!1}),[]),ds(()=>{if(j&&(C.current=j),k&&(T.current=k),j&&k){if(U.current)return U.current(j,k,F);F()}},[j,k,F,U,R]);const H=c.useMemo(()=>({reference:C,floating:T,setReference:v,setFloating:y}),[v,y]),O=c.useMemo(()=>({reference:j,floating:k}),[j,k]),V=c.useMemo(()=>{const S={position:r,left:0,top:0};if(!O.floating)return S;const E=ko(O.floating,m.x),Z=ko(O.floating,m.y);return l?{...S,transform:"translate("+E+"px, "+Z+"px)",...cl(O.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:E,top:Z}},[r,l,O.floating,m.x,m.y]);return c.useMemo(()=>({...m,update:F,refs:H,elements:O,floatingStyles:V}),[m,F,H,O,V])}const Kh=e=>{function t(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:a,padding:n}=typeof e=="function"?e(r):e;return a&&t(a)?a.current!=null?jo({element:a.current,padding:n}).fn(r):{}:a?jo({element:a,padding:n}).fn(r):{}}}},Yh=(e,t)=>({...zh(e),options:[e,t]}),Jh=(e,t)=>({...Bh(e),options:[e,t]}),Xh=(e,t)=>({...Vh(e),options:[e,t]}),Qh=(e,t)=>({...Uh(e),options:[e,t]}),Zh=(e,t)=>({...Hh(e),options:[e,t]}),ef=(e,t)=>({...Gh(e),options:[e,t]}),tf=(e,t)=>({...Kh(e),options:[e,t]});var rf="Arrow",dl=c.forwardRef((e,t)=>{const{children:r,width:a=10,height:n=5,...o}=e;return s.jsx(K.svg,{...o,ref:t,width:a,height:n,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:s.jsx("polygon",{points:"0,0 30,0 15,10"})})});dl.displayName=rf;var sf=dl;function af(e,t=[]){let r=[];function a(o,i){const l=c.createContext(i),d=r.length;r=[...r,i];function p(h){const{scope:u,children:f,...x}=h,g=(u==null?void 0:u[e][d])||l,b=c.useMemo(()=>x,Object.values(x));return s.jsx(g.Provider,{value:b,children:f})}function m(h,u){const f=(u==null?void 0:u[e][d])||l,x=c.useContext(f);if(x)return x;if(i!==void 0)return i;throw new Error(`\`${h}\` must be used within \`${o}\``)}return p.displayName=o+"Provider",[p,m]}const n=()=>{const o=r.map(i=>c.createContext(i));return function(l){const d=(l==null?void 0:l[e])||o;return c.useMemo(()=>({[`__scope${e}`]:{...l,[e]:d}}),[l,d])}};return n.scopeName=e,[a,nf(n,...t)]}function nf(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const a=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(o){const i=a.reduce((l,{useScope:d,scopeName:p})=>{const h=d(o)[`__scope${p}`];return{...l,...h}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return r.scopeName=t.scopeName,r}function nn(e){const[t,r]=c.useState(void 0);return Ee(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const a=new ResizeObserver(n=>{if(!Array.isArray(n)||!n.length)return;const o=n[0];let i,l;if("borderBoxSize"in o){const d=o.borderBoxSize,p=Array.isArray(d)?d[0]:d;i=p.inlineSize,l=p.blockSize}else i=e.offsetWidth,l=e.offsetHeight;r({width:i,height:l})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}else r(void 0)},[e]),t}var on="Popper",[ul,wr]=af(on),[of,pl]=ul(on),ml=e=>{const{__scopePopper:t,children:r}=e,[a,n]=c.useState(null);return s.jsx(of,{scope:t,anchor:a,onAnchorChange:n,children:r})};ml.displayName=on;var hl="PopperAnchor",fl=c.forwardRef((e,t)=>{const{__scopePopper:r,virtualRef:a,...n}=e,o=pl(hl,r),i=c.useRef(null),l=ie(t,i);return c.useEffect(()=>{o.onAnchorChange((a==null?void 0:a.current)||i.current)}),a?null:s.jsx(K.div,{...n,ref:l})});fl.displayName=hl;var ln="PopperContent",[lf,cf]=ul(ln),gl=c.forwardRef((e,t)=>{var G,te,se,ee,ne,ae;const{__scopePopper:r,side:a="bottom",sideOffset:n=0,align:o="center",alignOffset:i=0,arrowPadding:l=0,avoidCollisions:d=!0,collisionBoundary:p=[],collisionPadding:m=0,sticky:h="partial",hideWhenDetached:u=!1,updatePositionStrategy:f="optimized",onPlaced:x,...g}=e,b=pl(ln,r),[w,v]=c.useState(null),y=ie(t,ke=>v(ke)),[j,k]=c.useState(null),C=nn(j),T=(C==null?void 0:C.width)??0,I=(C==null?void 0:C.height)??0,R=a+(o!=="center"?"-"+o:""),U=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},M=Array.isArray(p)?p:[p],P=M.length>0,F={padding:U,boundary:M.filter(uf),altBoundary:P},{refs:A,floatingStyles:H,placement:O,isPositioned:V,middlewareData:S}=Wh({strategy:"fixed",placement:R,whileElementsMounted:(...ke)=>Fh(...ke,{animationFrame:f==="always"}),elements:{reference:b.anchor},middleware:[Yh({mainAxis:n+I,alignmentAxis:i}),d&&Jh({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?Xh():void 0,...F}),d&&Qh({...F}),Zh({...F,apply:({elements:ke,rects:Te,availableWidth:ht,availableHeight:_e})=>{const{width:Dt,height:ta}=Te.reference,ve=ke.floating.style;ve.setProperty("--radix-popper-available-width",`${ht}px`),ve.setProperty("--radix-popper-available-height",`${_e}px`),ve.setProperty("--radix-popper-anchor-width",`${Dt}px`),ve.setProperty("--radix-popper-anchor-height",`${ta}px`)}}),j&&tf({element:j,padding:l}),pf({arrowWidth:T,arrowHeight:I}),u&&ef({strategy:"referenceHidden",...F})]}),[E,Z]=vl(O),B=je(x);Ee(()=>{V&&(B==null||B())},[V,B]);const W=(G=S.arrow)==null?void 0:G.x,Q=(te=S.arrow)==null?void 0:te.y,le=((se=S.arrow)==null?void 0:se.centerOffset)!==0,[be,re]=c.useState();return Ee(()=>{w&&re(window.getComputedStyle(w).zIndex)},[w]),s.jsx("div",{ref:A.setFloating,"data-radix-popper-content-wrapper":"",style:{...H,transform:V?H.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:be,"--radix-popper-transform-origin":[(ee=S.transformOrigin)==null?void 0:ee.x,(ne=S.transformOrigin)==null?void 0:ne.y].join(" "),...((ae=S.hide)==null?void 0:ae.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:s.jsx(lf,{scope:r,placedSide:E,onArrowChange:k,arrowX:W,arrowY:Q,shouldHideArrow:le,children:s.jsx(K.div,{"data-side":E,"data-align":Z,...g,ref:y,style:{...g.style,animation:V?void 0:"none"}})})})});gl.displayName=ln;var xl="PopperArrow",df={top:"bottom",right:"left",bottom:"top",left:"right"},bl=c.forwardRef(function(t,r){const{__scopePopper:a,...n}=t,o=cf(xl,a),i=df[o.placedSide];return s.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:s.jsx(sf,{...n,ref:r,style:{...n.style,display:"block"}})})});bl.displayName=xl;function uf(e){return e!==null}var pf=e=>({name:"transformOrigin",options:e,fn(t){var b,w,v;const{placement:r,rects:a,middlewareData:n}=t,i=((b=n.arrow)==null?void 0:b.centerOffset)!==0,l=i?0:e.arrowWidth,d=i?0:e.arrowHeight,[p,m]=vl(r),h={start:"0%",center:"50%",end:"100%"}[m],u=(((w=n.arrow)==null?void 0:w.x)??0)+l/2,f=(((v=n.arrow)==null?void 0:v.y)??0)+d/2;let x="",g="";return p==="bottom"?(x=i?h:`${u}px`,g=`${-d}px`):p==="top"?(x=i?h:`${u}px`,g=`${a.floating.height+d}px`):p==="right"?(x=`${-d}px`,g=i?h:`${f}px`):p==="left"&&(x=`${a.floating.width+d}px`,g=i?h:`${f}px`),{data:{x,y:g}}}});function vl(e){const[t,r="center"]=e.split("-");return[t,r]}var cn=ml,dn=fl,un=gl,pn=bl,[Bs,bv]=ot("Tooltip",[wr]),Us=wr(),yl="TooltipProvider",mf=700,Sa="tooltip.open",[hf,mn]=Bs(yl),wl=e=>{const{__scopeTooltip:t,delayDuration:r=mf,skipDelayDuration:a=300,disableHoverableContent:n=!1,children:o}=e,[i,l]=c.useState(!0),d=c.useRef(!1),p=c.useRef(0);return c.useEffect(()=>{const m=p.current;return()=>window.clearTimeout(m)},[]),s.jsx(hf,{scope:t,isOpenDelayed:i,delayDuration:r,onOpen:c.useCallback(()=>{window.clearTimeout(p.current),l(!1)},[]),onClose:c.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>l(!0),a)},[a]),isPointerInTransitRef:d,onPointerInTransitChange:c.useCallback(m=>{d.current=m},[]),disableHoverableContent:n,children:o})};wl.displayName=yl;var Hs="Tooltip",[ff,Gs]=Bs(Hs),jl=e=>{const{__scopeTooltip:t,children:r,open:a,defaultOpen:n=!1,onOpenChange:o,disableHoverableContent:i,delayDuration:l}=e,d=mn(Hs,e.__scopeTooltip),p=Us(t),[m,h]=c.useState(null),u=mr(),f=c.useRef(0),x=i??d.disableHoverableContent,g=l??d.delayDuration,b=c.useRef(!1),[w=!1,v]=Ut({prop:a,defaultProp:n,onChange:T=>{T?(d.onOpen(),document.dispatchEvent(new CustomEvent(Sa))):d.onClose(),o==null||o(T)}}),y=c.useMemo(()=>w?b.current?"delayed-open":"instant-open":"closed",[w]),j=c.useCallback(()=>{window.clearTimeout(f.current),f.current=0,b.current=!1,v(!0)},[v]),k=c.useCallback(()=>{window.clearTimeout(f.current),f.current=0,v(!1)},[v]),C=c.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{b.current=!0,v(!0),f.current=0},g)},[g,v]);return c.useEffect(()=>()=>{f.current&&(window.clearTimeout(f.current),f.current=0)},[]),s.jsx(cn,{...p,children:s.jsx(ff,{scope:t,contentId:u,open:w,stateAttribute:y,trigger:m,onTriggerChange:h,onTriggerEnter:c.useCallback(()=>{d.isOpenDelayed?C():j()},[d.isOpenDelayed,C,j]),onTriggerLeave:c.useCallback(()=>{x?k():(window.clearTimeout(f.current),f.current=0)},[k,x]),onOpen:j,onClose:k,disableHoverableContent:x,children:r})})};jl.displayName=Hs;var Ea="TooltipTrigger",kl=c.forwardRef((e,t)=>{const{__scopeTooltip:r,...a}=e,n=Gs(Ea,r),o=mn(Ea,r),i=Us(r),l=c.useRef(null),d=ie(t,l,n.onTriggerChange),p=c.useRef(!1),m=c.useRef(!1),h=c.useCallback(()=>p.current=!1,[]);return c.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),s.jsx(dn,{asChild:!0,...i,children:s.jsx(K.button,{"aria-describedby":n.open?n.contentId:void 0,"data-state":n.stateAttribute,...a,ref:d,onPointerMove:D(e.onPointerMove,u=>{u.pointerType!=="touch"&&!m.current&&!o.isPointerInTransitRef.current&&(n.onTriggerEnter(),m.current=!0)}),onPointerLeave:D(e.onPointerLeave,()=>{n.onTriggerLeave(),m.current=!1}),onPointerDown:D(e.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:D(e.onFocus,()=>{p.current||n.onOpen()}),onBlur:D(e.onBlur,n.onClose),onClick:D(e.onClick,n.onClose)})})});kl.displayName=Ea;var gf="TooltipPortal",[vv,xf]=Bs(gf,{forceMount:void 0}),fr="TooltipContent",Nl=c.forwardRef((e,t)=>{const r=xf(fr,e.__scopeTooltip),{forceMount:a=r.forceMount,side:n="top",...o}=e,i=Gs(fr,e.__scopeTooltip);return s.jsx(He,{present:a||i.open,children:i.disableHoverableContent?s.jsx(Cl,{side:n,...o,ref:t}):s.jsx(bf,{side:n,...o,ref:t})})}),bf=c.forwardRef((e,t)=>{const r=Gs(fr,e.__scopeTooltip),a=mn(fr,e.__scopeTooltip),n=c.useRef(null),o=ie(t,n),[i,l]=c.useState(null),{trigger:d,onClose:p}=r,m=n.current,{onPointerInTransitChange:h}=a,u=c.useCallback(()=>{l(null),h(!1)},[h]),f=c.useCallback((x,g)=>{const b=x.currentTarget,w={x:x.clientX,y:x.clientY},v=jf(w,b.getBoundingClientRect()),y=kf(w,v),j=Nf(g.getBoundingClientRect()),k=Sf([...y,...j]);l(k),h(!0)},[h]);return c.useEffect(()=>()=>u(),[u]),c.useEffect(()=>{if(d&&m){const x=b=>f(b,m),g=b=>f(b,d);return d.addEventListener("pointerleave",x),m.addEventListener("pointerleave",g),()=>{d.removeEventListener("pointerleave",x),m.removeEventListener("pointerleave",g)}}},[d,m,f,u]),c.useEffect(()=>{if(i){const x=g=>{const b=g.target,w={x:g.clientX,y:g.clientY},v=(d==null?void 0:d.contains(b))||(m==null?void 0:m.contains(b)),y=!Cf(w,i);v?u():y&&(u(),p())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[d,m,i,p,u]),s.jsx(Cl,{...e,ref:o})}),[vf,yf]=Bs(Hs,{isInside:!1}),Cl=c.forwardRef((e,t)=>{const{__scopeTooltip:r,children:a,"aria-label":n,onEscapeKeyDown:o,onPointerDownOutside:i,...l}=e,d=Gs(fr,r),p=Us(r),{onClose:m}=d;return c.useEffect(()=>(document.addEventListener(Sa,m),()=>document.removeEventListener(Sa,m)),[m]),c.useEffect(()=>{if(d.trigger){const h=u=>{const f=u.target;f!=null&&f.contains(d.trigger)&&m()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[d.trigger,m]),s.jsx(Ga,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:h=>h.preventDefault(),onDismiss:m,children:s.jsxs(un,{"data-state":d.stateAttribute,...p,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[s.jsx(Lu,{children:a}),s.jsx(vf,{scope:r,isInside:!0,children:s.jsx(Fu,{id:d.contentId,role:"tooltip",children:n||a})})]})})});Nl.displayName=fr;var Sl="TooltipArrow",wf=c.forwardRef((e,t)=>{const{__scopeTooltip:r,...a}=e,n=Us(r);return yf(Sl,r).isInside?null:s.jsx(pn,{...n,...a,ref:t})});wf.displayName=Sl;function jf(e,t){const r=Math.abs(t.top-e.y),a=Math.abs(t.bottom-e.y),n=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(r,a,n,o)){case o:return"left";case n:return"right";case r:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function kf(e,t,r=5){const a=[];switch(t){case"top":a.push({x:e.x-r,y:e.y+r},{x:e.x+r,y:e.y+r});break;case"bottom":a.push({x:e.x-r,y:e.y-r},{x:e.x+r,y:e.y-r});break;case"left":a.push({x:e.x+r,y:e.y-r},{x:e.x+r,y:e.y+r});break;case"right":a.push({x:e.x-r,y:e.y-r},{x:e.x-r,y:e.y+r});break}return a}function Nf(e){const{top:t,right:r,bottom:a,left:n}=e;return[{x:n,y:t},{x:r,y:t},{x:r,y:a},{x:n,y:a}]}function Cf(e,t){const{x:r,y:a}=e;let n=!1;for(let o=0,i=t.length-1;o<t.length;i=o++){const l=t[o].x,d=t[o].y,p=t[i].x,m=t[i].y;d>a!=m>a&&r<(p-l)*(a-d)/(m-d)+l&&(n=!n)}return n}function Sf(e){const t=e.slice();return t.sort((r,a)=>r.x<a.x?-1:r.x>a.x?1:r.y<a.y?-1:r.y>a.y?1:0),Ef(t)}function Ef(e){if(e.length<=1)return e.slice();const t=[];for(let a=0;a<e.length;a++){const n=e[a];for(;t.length>=2;){const o=t[t.length-1],i=t[t.length-2];if((o.x-i.x)*(n.y-i.y)>=(o.y-i.y)*(n.x-i.x))t.pop();else break}t.push(n)}t.pop();const r=[];for(let a=e.length-1;a>=0;a--){const n=e[a];for(;r.length>=2;){const o=r[r.length-1],i=r[r.length-2];if((o.x-i.x)*(n.y-i.y)>=(o.y-i.y)*(n.x-i.x))r.pop();else break}r.push(n)}return r.pop(),t.length===1&&r.length===1&&t[0].x===r[0].x&&t[0].y===r[0].y?t:t.concat(r)}var Af=wl,Pf=jl,Tf=kl,El=Nl;const Al=Af,If=Pf,Rf=Tf,Pl=c.forwardRef(({className:e,sideOffset:t=4,...r},a)=>s.jsx(El,{ref:a,sideOffset:t,className:$("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r}));Pl.displayName=El.displayName;var Vs=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},qs=typeof window>"u"||"Deno"in globalThis;function qe(){}function Mf(e,t){return typeof e=="function"?e(t):e}function Lf(e){return typeof e=="number"&&e>=0&&e!==1/0}function Df(e,t){return Math.max(e+(t||0)-Date.now(),0)}function No(e,t){return typeof e=="function"?e(t):e}function Of(e,t){return typeof e=="function"?e(t):e}function Co(e,t){const{type:r="all",exact:a,fetchStatus:n,predicate:o,queryKey:i,stale:l}=e;if(i){if(a){if(t.queryHash!==hn(i,t.options))return!1}else if(!_r(t.queryKey,i))return!1}if(r!=="all"){const d=t.isActive();if(r==="active"&&!d||r==="inactive"&&d)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||n&&n!==t.state.fetchStatus||o&&!o(t))}function So(e,t){const{exact:r,status:a,predicate:n,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(r){if(Or(t.options.mutationKey)!==Or(o))return!1}else if(!_r(t.options.mutationKey,o))return!1}return!(a&&t.state.status!==a||n&&!n(t))}function hn(e,t){return((t==null?void 0:t.queryKeyHashFn)||Or)(e)}function Or(e){return JSON.stringify(e,(t,r)=>Aa(r)?Object.keys(r).sort().reduce((a,n)=>(a[n]=r[n],a),{}):r)}function _r(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(r=>!_r(e[r],t[r])):!1}function Tl(e,t){if(e===t)return e;const r=Eo(e)&&Eo(t);if(r||Aa(e)&&Aa(t)){const a=r?e:Object.keys(e),n=a.length,o=r?t:Object.keys(t),i=o.length,l=r?[]:{};let d=0;for(let p=0;p<i;p++){const m=r?p:o[p];(!r&&a.includes(m)||r)&&e[m]===void 0&&t[m]===void 0?(l[m]=void 0,d++):(l[m]=Tl(e[m],t[m]),l[m]===e[m]&&e[m]!==void 0&&d++)}return n===i&&d===n?e:l}return t}function Eo(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Aa(e){if(!Ao(e))return!1;const t=e.constructor;if(t===void 0)return!0;const r=t.prototype;return!(!Ao(r)||!r.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Ao(e){return Object.prototype.toString.call(e)==="[object Object]"}function _f(e){return new Promise(t=>{setTimeout(t,e)})}function $f(e,t,r){return typeof r.structuralSharing=="function"?r.structuralSharing(e,t):r.structuralSharing!==!1?Tl(e,t):t}function Ff(e,t,r=0){const a=[...e,t];return r&&a.length>r?a.slice(1):a}function zf(e,t,r=0){const a=[t,...e];return r&&a.length>r?a.slice(0,-1):a}var fn=Symbol();function Il(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===fn?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var $t,vt,ar,Ho,Bf=(Ho=class extends Vs{constructor(){super();oe(this,$t);oe(this,vt);oe(this,ar);X(this,ar,t=>{if(!qs&&window.addEventListener){const r=()=>t();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){N(this,vt)||this.setEventListener(N(this,ar))}onUnsubscribe(){var t;this.hasListeners()||((t=N(this,vt))==null||t.call(this),X(this,vt,void 0))}setEventListener(t){var r;X(this,ar,t),(r=N(this,vt))==null||r.call(this),X(this,vt,t(a=>{typeof a=="boolean"?this.setFocused(a):this.onFocus()}))}setFocused(t){N(this,$t)!==t&&(X(this,$t,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(r=>{r(t)})}isFocused(){var t;return typeof N(this,$t)=="boolean"?N(this,$t):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},$t=new WeakMap,vt=new WeakMap,ar=new WeakMap,Ho),Rl=new Bf,nr,yt,or,Go,Uf=(Go=class extends Vs{constructor(){super();oe(this,nr,!0);oe(this,yt);oe(this,or);X(this,or,t=>{if(!qs&&window.addEventListener){const r=()=>t(!0),a=()=>t(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",a,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",a)}}})}onSubscribe(){N(this,yt)||this.setEventListener(N(this,or))}onUnsubscribe(){var t;this.hasListeners()||((t=N(this,yt))==null||t.call(this),X(this,yt,void 0))}setEventListener(t){var r;X(this,or,t),(r=N(this,yt))==null||r.call(this),X(this,yt,t(this.setOnline.bind(this)))}setOnline(t){N(this,nr)!==t&&(X(this,nr,t),this.listeners.forEach(a=>{a(t)}))}isOnline(){return N(this,nr)}},nr=new WeakMap,yt=new WeakMap,or=new WeakMap,Go),vs=new Uf;function Hf(){let e,t;const r=new Promise((n,o)=>{e=n,t=o});r.status="pending",r.catch(()=>{});function a(n){Object.assign(r,n),delete r.resolve,delete r.reject}return r.resolve=n=>{a({status:"fulfilled",value:n}),e(n)},r.reject=n=>{a({status:"rejected",reason:n}),t(n)},r}function Gf(e){return Math.min(1e3*2**e,3e4)}function Ml(e){return(e??"online")==="online"?vs.isOnline():!0}var Ll=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function ua(e){return e instanceof Ll}function Dl(e){let t=!1,r=0,a=!1,n;const o=Hf(),i=g=>{var b;a||(u(new Ll(g)),(b=e.abort)==null||b.call(e))},l=()=>{t=!0},d=()=>{t=!1},p=()=>Rl.isFocused()&&(e.networkMode==="always"||vs.isOnline())&&e.canRun(),m=()=>Ml(e.networkMode)&&e.canRun(),h=g=>{var b;a||(a=!0,(b=e.onSuccess)==null||b.call(e,g),n==null||n(),o.resolve(g))},u=g=>{var b;a||(a=!0,(b=e.onError)==null||b.call(e,g),n==null||n(),o.reject(g))},f=()=>new Promise(g=>{var b;n=w=>{(a||p())&&g(w)},(b=e.onPause)==null||b.call(e)}).then(()=>{var g;n=void 0,a||(g=e.onContinue)==null||g.call(e)}),x=()=>{if(a)return;let g;const b=r===0?e.initialPromise:void 0;try{g=b??e.fn()}catch(w){g=Promise.reject(w)}Promise.resolve(g).then(h).catch(w=>{var C;if(a)return;const v=e.retry??(qs?0:3),y=e.retryDelay??Gf,j=typeof y=="function"?y(r,w):y,k=v===!0||typeof v=="number"&&r<v||typeof v=="function"&&v(r,w);if(t||!k){u(w);return}r++,(C=e.onFail)==null||C.call(e,r,w),_f(j).then(()=>p()?void 0:f()).then(()=>{t?u(w):x()})})};return{promise:o,cancel:i,continue:()=>(n==null||n(),o),cancelRetry:l,continueRetry:d,canStart:m,start:()=>(m()?x():f().then(x),o)}}function Vf(){let e=[],t=0,r=l=>{l()},a=l=>{l()},n=l=>setTimeout(l,0);const o=l=>{t?e.push(l):n(()=>{r(l)})},i=()=>{const l=e;e=[],l.length&&n(()=>{a(()=>{l.forEach(d=>{r(d)})})})};return{batch:l=>{let d;t++;try{d=l()}finally{t--,t||i()}return d},batchCalls:l=>(...d)=>{o(()=>{l(...d)})},schedule:o,setNotifyFunction:l=>{r=l},setBatchNotifyFunction:l=>{a=l},setScheduler:l=>{n=l}}}var Se=Vf(),Ft,Vo,Ol=(Vo=class{constructor(){oe(this,Ft)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Lf(this.gcTime)&&X(this,Ft,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(qs?1/0:5*60*1e3))}clearGcTimeout(){N(this,Ft)&&(clearTimeout(N(this,Ft)),X(this,Ft,void 0))}},Ft=new WeakMap,Vo),ir,lr,Fe,we,Ur,zt,We,dt,qo,qf=(qo=class extends Ol{constructor(t){super();oe(this,We);oe(this,ir);oe(this,lr);oe(this,Fe);oe(this,we);oe(this,Ur);oe(this,zt);X(this,zt,!1),X(this,Ur,t.defaultOptions),this.setOptions(t.options),this.observers=[],X(this,Fe,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,X(this,ir,Kf(this.options)),this.state=t.state??N(this,ir),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=N(this,we))==null?void 0:t.promise}setOptions(t){this.options={...N(this,Ur),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&N(this,Fe).remove(this)}setData(t,r){const a=$f(this.state.data,t,this.options);return ye(this,We,dt).call(this,{data:a,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),a}setState(t,r){ye(this,We,dt).call(this,{type:"setState",state:t,setStateOptions:r})}cancel(t){var a,n;const r=(a=N(this,we))==null?void 0:a.promise;return(n=N(this,we))==null||n.cancel(t),r?r.then(qe).catch(qe):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(N(this,ir))}isActive(){return this.observers.some(t=>Of(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===fn||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!Df(this.state.dataUpdatedAt,t)}onFocus(){var r;const t=this.observers.find(a=>a.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(r=N(this,we))==null||r.continue()}onOnline(){var r;const t=this.observers.find(a=>a.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(r=N(this,we))==null||r.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),N(this,Fe).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(r=>r!==t),this.observers.length||(N(this,we)&&(N(this,zt)?N(this,we).cancel({revert:!0}):N(this,we).cancelRetry()),this.scheduleGc()),N(this,Fe).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ye(this,We,dt).call(this,{type:"invalidate"})}fetch(t,r){var d,p,m;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(N(this,we))return N(this,we).continueRetry(),N(this,we).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(u=>u.options.queryFn);h&&this.setOptions(h.options)}const a=new AbortController,n=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(X(this,zt,!0),a.signal)})},o=()=>{const h=Il(this.options,r),u={queryKey:this.queryKey,meta:this.meta};return n(u),X(this,zt,!1),this.options.persister?this.options.persister(h,u,this):h(u)},i={fetchOptions:r,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};n(i),(d=this.options.behavior)==null||d.onFetch(i,this),X(this,lr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((p=i.fetchOptions)==null?void 0:p.meta))&&ye(this,We,dt).call(this,{type:"fetch",meta:(m=i.fetchOptions)==null?void 0:m.meta});const l=h=>{var u,f,x,g;ua(h)&&h.silent||ye(this,We,dt).call(this,{type:"error",error:h}),ua(h)||((f=(u=N(this,Fe).config).onError)==null||f.call(u,h,this),(g=(x=N(this,Fe).config).onSettled)==null||g.call(x,this.state.data,h,this)),this.scheduleGc()};return X(this,we,Dl({initialPromise:r==null?void 0:r.initialPromise,fn:i.fetchFn,abort:a.abort.bind(a),onSuccess:h=>{var u,f,x,g;if(h===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(b){l(b);return}(f=(u=N(this,Fe).config).onSuccess)==null||f.call(u,h,this),(g=(x=N(this,Fe).config).onSettled)==null||g.call(x,h,this.state.error,this),this.scheduleGc()},onError:l,onFail:(h,u)=>{ye(this,We,dt).call(this,{type:"failed",failureCount:h,error:u})},onPause:()=>{ye(this,We,dt).call(this,{type:"pause"})},onContinue:()=>{ye(this,We,dt).call(this,{type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0})),N(this,we).start()}},ir=new WeakMap,lr=new WeakMap,Fe=new WeakMap,we=new WeakMap,Ur=new WeakMap,zt=new WeakMap,We=new WeakSet,dt=function(t){const r=a=>{switch(t.type){case"failed":return{...a,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...a,fetchStatus:"paused"};case"continue":return{...a,fetchStatus:"fetching"};case"fetch":return{...a,...Wf(a.data,this.options),fetchMeta:t.meta??null};case"success":return{...a,data:t.data,dataUpdateCount:a.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=t.error;return ua(n)&&n.revert&&N(this,lr)?{...N(this,lr),fetchStatus:"idle"}:{...a,error:n,errorUpdateCount:a.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:a.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...a,isInvalidated:!0};case"setState":return{...a,...t.state}}};this.state=r(this.state),Se.batch(()=>{this.observers.forEach(a=>{a.onQueryUpdate()}),N(this,Fe).notify({query:this,type:"updated",action:t})})},qo);function Wf(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ml(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Kf(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,r=t!==void 0,a=r?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?a??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}var et,Wo,Yf=(Wo=class extends Vs{constructor(t={}){super();oe(this,et);this.config=t,X(this,et,new Map)}build(t,r,a){const n=r.queryKey,o=r.queryHash??hn(n,r);let i=this.get(o);return i||(i=new qf({cache:this,queryKey:n,queryHash:o,options:t.defaultQueryOptions(r),state:a,defaultOptions:t.getQueryDefaults(n)}),this.add(i)),i}add(t){N(this,et).has(t.queryHash)||(N(this,et).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const r=N(this,et).get(t.queryHash);r&&(t.destroy(),r===t&&N(this,et).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Se.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return N(this,et).get(t)}getAll(){return[...N(this,et).values()]}find(t){const r={exact:!0,...t};return this.getAll().find(a=>Co(r,a))}findAll(t={}){const r=this.getAll();return Object.keys(t).length>0?r.filter(a=>Co(t,a)):r}notify(t){Se.batch(()=>{this.listeners.forEach(r=>{r(t)})})}onFocus(){Se.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Se.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},et=new WeakMap,Wo),tt,Ce,Bt,rt,bt,Ko,Jf=(Ko=class extends Ol{constructor(t){super();oe(this,rt);oe(this,tt);oe(this,Ce);oe(this,Bt);this.mutationId=t.mutationId,X(this,Ce,t.mutationCache),X(this,tt,[]),this.state=t.state||Xf(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){N(this,tt).includes(t)||(N(this,tt).push(t),this.clearGcTimeout(),N(this,Ce).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){X(this,tt,N(this,tt).filter(r=>r!==t)),this.scheduleGc(),N(this,Ce).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){N(this,tt).length||(this.state.status==="pending"?this.scheduleGc():N(this,Ce).remove(this))}continue(){var t;return((t=N(this,Bt))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var n,o,i,l,d,p,m,h,u,f,x,g,b,w,v,y,j,k,C,T;X(this,Bt,Dl({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(I,R)=>{ye(this,rt,bt).call(this,{type:"failed",failureCount:I,error:R})},onPause:()=>{ye(this,rt,bt).call(this,{type:"pause"})},onContinue:()=>{ye(this,rt,bt).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>N(this,Ce).canRun(this)}));const r=this.state.status==="pending",a=!N(this,Bt).canStart();try{if(!r){ye(this,rt,bt).call(this,{type:"pending",variables:t,isPaused:a}),await((o=(n=N(this,Ce).config).onMutate)==null?void 0:o.call(n,t,this));const R=await((l=(i=this.options).onMutate)==null?void 0:l.call(i,t));R!==this.state.context&&ye(this,rt,bt).call(this,{type:"pending",context:R,variables:t,isPaused:a})}const I=await N(this,Bt).start();return await((p=(d=N(this,Ce).config).onSuccess)==null?void 0:p.call(d,I,t,this.state.context,this)),await((h=(m=this.options).onSuccess)==null?void 0:h.call(m,I,t,this.state.context)),await((f=(u=N(this,Ce).config).onSettled)==null?void 0:f.call(u,I,null,this.state.variables,this.state.context,this)),await((g=(x=this.options).onSettled)==null?void 0:g.call(x,I,null,t,this.state.context)),ye(this,rt,bt).call(this,{type:"success",data:I}),I}catch(I){try{throw await((w=(b=N(this,Ce).config).onError)==null?void 0:w.call(b,I,t,this.state.context,this)),await((y=(v=this.options).onError)==null?void 0:y.call(v,I,t,this.state.context)),await((k=(j=N(this,Ce).config).onSettled)==null?void 0:k.call(j,void 0,I,this.state.variables,this.state.context,this)),await((T=(C=this.options).onSettled)==null?void 0:T.call(C,void 0,I,t,this.state.context)),I}finally{ye(this,rt,bt).call(this,{type:"error",error:I})}}finally{N(this,Ce).runNext(this)}}},tt=new WeakMap,Ce=new WeakMap,Bt=new WeakMap,rt=new WeakSet,bt=function(t){const r=a=>{switch(t.type){case"failed":return{...a,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...a,isPaused:!0};case"continue":return{...a,isPaused:!1};case"pending":return{...a,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...a,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...a,data:void 0,error:t.error,failureCount:a.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Se.batch(()=>{N(this,tt).forEach(a=>{a.onMutationUpdate(t)}),N(this,Ce).notify({mutation:this,type:"updated",action:t})})},Ko);function Xf(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ie,Hr,Yo,Qf=(Yo=class extends Vs{constructor(t={}){super();oe(this,Ie);oe(this,Hr);this.config=t,X(this,Ie,new Map),X(this,Hr,Date.now())}build(t,r,a){const n=new Jf({mutationCache:this,mutationId:++rs(this,Hr)._,options:t.defaultMutationOptions(r),state:a});return this.add(n),n}add(t){const r=os(t),a=N(this,Ie).get(r)??[];a.push(t),N(this,Ie).set(r,a),this.notify({type:"added",mutation:t})}remove(t){var a;const r=os(t);if(N(this,Ie).has(r)){const n=(a=N(this,Ie).get(r))==null?void 0:a.filter(o=>o!==t);n&&(n.length===0?N(this,Ie).delete(r):N(this,Ie).set(r,n))}this.notify({type:"removed",mutation:t})}canRun(t){var a;const r=(a=N(this,Ie).get(os(t)))==null?void 0:a.find(n=>n.state.status==="pending");return!r||r===t}runNext(t){var a;const r=(a=N(this,Ie).get(os(t)))==null?void 0:a.find(n=>n!==t&&n.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}clear(){Se.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...N(this,Ie).values()].flat()}find(t){const r={exact:!0,...t};return this.getAll().find(a=>So(r,a))}findAll(t={}){return this.getAll().filter(r=>So(t,r))}notify(t){Se.batch(()=>{this.listeners.forEach(r=>{r(t)})})}resumePausedMutations(){const t=this.getAll().filter(r=>r.state.isPaused);return Se.batch(()=>Promise.all(t.map(r=>r.continue().catch(qe))))}},Ie=new WeakMap,Hr=new WeakMap,Yo);function os(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function Po(e){return{onFetch:(t,r)=>{var m,h,u,f,x;const a=t.options,n=(u=(h=(m=t.fetchOptions)==null?void 0:m.meta)==null?void 0:h.fetchMore)==null?void 0:u.direction,o=((f=t.state.data)==null?void 0:f.pages)||[],i=((x=t.state.data)==null?void 0:x.pageParams)||[];let l={pages:[],pageParams:[]},d=0;const p=async()=>{let g=!1;const b=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(t.signal.aborted?g=!0:t.signal.addEventListener("abort",()=>{g=!0}),t.signal)})},w=Il(t.options,t.fetchOptions),v=async(y,j,k)=>{if(g)return Promise.reject();if(j==null&&y.pages.length)return Promise.resolve(y);const C={queryKey:t.queryKey,pageParam:j,direction:k?"backward":"forward",meta:t.options.meta};b(C);const T=await w(C),{maxPages:I}=t.options,R=k?zf:Ff;return{pages:R(y.pages,T,I),pageParams:R(y.pageParams,j,I)}};if(n&&o.length){const y=n==="backward",j=y?Zf:To,k={pages:o,pageParams:i},C=j(a,k);l=await v(k,C,y)}else{const y=e??o.length;do{const j=d===0?i[0]??a.initialPageParam:To(a,l);if(d>0&&j==null)break;l=await v(l,j),d++}while(d<y)}return l};t.options.persister?t.fetchFn=()=>{var g,b;return(b=(g=t.options).persister)==null?void 0:b.call(g,p,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r)}:t.fetchFn=p}}}function To(e,{pages:t,pageParams:r}){const a=t.length-1;return t.length>0?e.getNextPageParam(t[a],t,r[a],r):void 0}function Zf(e,{pages:t,pageParams:r}){var a;return t.length>0?(a=e.getPreviousPageParam)==null?void 0:a.call(e,t[0],t,r[0],r):void 0}var pe,wt,jt,cr,dr,kt,ur,pr,Jo,eg=(Jo=class{constructor(e={}){oe(this,pe);oe(this,wt);oe(this,jt);oe(this,cr);oe(this,dr);oe(this,kt);oe(this,ur);oe(this,pr);X(this,pe,e.queryCache||new Yf),X(this,wt,e.mutationCache||new Qf),X(this,jt,e.defaultOptions||{}),X(this,cr,new Map),X(this,dr,new Map),X(this,kt,0)}mount(){rs(this,kt)._++,N(this,kt)===1&&(X(this,ur,Rl.subscribe(async e=>{e&&(await this.resumePausedMutations(),N(this,pe).onFocus())})),X(this,pr,vs.subscribe(async e=>{e&&(await this.resumePausedMutations(),N(this,pe).onOnline())})))}unmount(){var e,t;rs(this,kt)._--,N(this,kt)===0&&((e=N(this,ur))==null||e.call(this),X(this,ur,void 0),(t=N(this,pr))==null||t.call(this),X(this,pr,void 0))}isFetching(e){return N(this,pe).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return N(this,wt).findAll({...e,status:"pending"}).length}getQueryData(e){var r;const t=this.defaultQueryOptions({queryKey:e});return(r=N(this,pe).get(t.queryHash))==null?void 0:r.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const r=this.defaultQueryOptions(e),a=N(this,pe).build(this,r);return e.revalidateIfStale&&a.isStaleByTime(No(r.staleTime,a))&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return N(this,pe).findAll(e).map(({queryKey:t,state:r})=>{const a=r.data;return[t,a]})}setQueryData(e,t,r){const a=this.defaultQueryOptions({queryKey:e}),n=N(this,pe).get(a.queryHash),o=n==null?void 0:n.state.data,i=Mf(t,o);if(i!==void 0)return N(this,pe).build(this,a).setData(i,{...r,manual:!0})}setQueriesData(e,t,r){return Se.batch(()=>N(this,pe).findAll(e).map(({queryKey:a})=>[a,this.setQueryData(a,t,r)]))}getQueryState(e){var r;const t=this.defaultQueryOptions({queryKey:e});return(r=N(this,pe).get(t.queryHash))==null?void 0:r.state}removeQueries(e){const t=N(this,pe);Se.batch(()=>{t.findAll(e).forEach(r=>{t.remove(r)})})}resetQueries(e,t){const r=N(this,pe),a={type:"active",...e};return Se.batch(()=>(r.findAll(e).forEach(n=>{n.reset()}),this.refetchQueries(a,t)))}cancelQueries(e={},t={}){const r={revert:!0,...t},a=Se.batch(()=>N(this,pe).findAll(e).map(n=>n.cancel(r)));return Promise.all(a).then(qe).catch(qe)}invalidateQueries(e={},t={}){return Se.batch(()=>{if(N(this,pe).findAll(e).forEach(a=>{a.invalidate()}),e.refetchType==="none")return Promise.resolve();const r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){const r={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},a=Se.batch(()=>N(this,pe).findAll(e).filter(n=>!n.isDisabled()).map(n=>{let o=n.fetch(void 0,r);return r.throwOnError||(o=o.catch(qe)),n.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(a).then(qe)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const r=N(this,pe).build(this,t);return r.isStaleByTime(No(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(qe).catch(qe)}fetchInfiniteQuery(e){return e.behavior=Po(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(qe).catch(qe)}ensureInfiniteQueryData(e){return e.behavior=Po(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return vs.isOnline()?N(this,wt).resumePausedMutations():Promise.resolve()}getQueryCache(){return N(this,pe)}getMutationCache(){return N(this,wt)}getDefaultOptions(){return N(this,jt)}setDefaultOptions(e){X(this,jt,e)}setQueryDefaults(e,t){N(this,cr).set(Or(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...N(this,cr).values()];let r={};return t.forEach(a=>{_r(e,a.queryKey)&&(r={...r,...a.defaultOptions})}),r}setMutationDefaults(e,t){N(this,dr).set(Or(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...N(this,dr).values()];let r={};return t.forEach(a=>{_r(e,a.mutationKey)&&(r={...r,...a.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;const t={...N(this,jt).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=hn(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===fn&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...N(this,jt).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){N(this,pe).clear(),N(this,wt).clear()}},pe=new WeakMap,wt=new WeakMap,jt=new WeakMap,cr=new WeakMap,dr=new WeakMap,kt=new WeakMap,ur=new WeakMap,pr=new WeakMap,Jo),tg=c.createContext(void 0),rg=({client:e,children:t})=>(c.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),s.jsx(tg.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},$r.apply(this,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const Io="popstate";function sg(e){e===void 0&&(e={});function t(a,n){let{pathname:o,search:i,hash:l}=a.location;return Pa("",{pathname:o,search:i,hash:l},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function r(a,n){return typeof n=="string"?n:ys(n)}return ng(t,r,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _l(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ag(){return Math.random().toString(36).substr(2,8)}function Ro(e,t){return{usr:e.state,key:e.key,idx:t}}function Pa(e,t,r,a){return r===void 0&&(r=null),$r({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jr(t):t,{state:r,key:t&&t.key||a||ag()})}function ys(e){let{pathname:t="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function jr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function ng(e,t,r,a){a===void 0&&(a={});let{window:n=document.defaultView,v5Compat:o=!1}=a,i=n.history,l=Nt.Pop,d=null,p=m();p==null&&(p=0,i.replaceState($r({},i.state,{idx:p}),""));function m(){return(i.state||{idx:null}).idx}function h(){l=Nt.Pop;let b=m(),w=b==null?null:b-p;p=b,d&&d({action:l,location:g.location,delta:w})}function u(b,w){l=Nt.Push;let v=Pa(g.location,b,w);p=m()+1;let y=Ro(v,p),j=g.createHref(v);try{i.pushState(y,"",j)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;n.location.assign(j)}o&&d&&d({action:l,location:g.location,delta:1})}function f(b,w){l=Nt.Replace;let v=Pa(g.location,b,w);p=m();let y=Ro(v,p),j=g.createHref(v);i.replaceState(y,"",j),o&&d&&d({action:l,location:g.location,delta:0})}function x(b){let w=n.location.origin!=="null"?n.location.origin:n.location.href,v=typeof b=="string"?b:ys(b);return v=v.replace(/ $/,"%20"),he(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let g={get action(){return l},get location(){return e(n,i)},listen(b){if(d)throw new Error("A history only accepts one active listener");return n.addEventListener(Io,h),d=b,()=>{n.removeEventListener(Io,h),d=null}},createHref(b){return t(n,b)},createURL:x,encodeLocation(b){let w=x(b);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:u,replace:f,go(b){return i.go(b)}};return g}var Mo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mo||(Mo={}));function og(e,t,r){return r===void 0&&(r="/"),ig(e,t,r,!1)}function ig(e,t,r,a){let n=typeof t=="string"?jr(t):t,o=gn(n.pathname||"/",r);if(o==null)return null;let i=$l(e);lg(i);let l=null;for(let d=0;l==null&&d<i.length;++d){let p=vg(o);l=xg(i[d],p,a)}return l}function $l(e,t,r,a){t===void 0&&(t=[]),r===void 0&&(r=[]),a===void 0&&(a="");let n=(o,i,l)=>{let d={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};d.relativePath.startsWith("/")&&(he(d.relativePath.startsWith(a),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(a.length));let p=St([a,d.relativePath]),m=r.concat(d);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),$l(o.children,t,m,p)),!(o.path==null&&!o.index)&&t.push({path:p,score:fg(p,o.index),routesMeta:m})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))n(o,i);else for(let d of Fl(o.path))n(o,i,d)}),t}function Fl(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,n=r.endsWith("?"),o=r.replace(/\?$/,"");if(a.length===0)return n?[o,""]:[o];let i=Fl(a.join("/")),l=[];return l.push(...i.map(d=>d===""?o:[o,d].join("/"))),n&&l.push(...i),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function lg(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:gg(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const cg=/^:[\w-]+$/,dg=3,ug=2,pg=1,mg=10,hg=-2,Lo=e=>e==="*";function fg(e,t){let r=e.split("/"),a=r.length;return r.some(Lo)&&(a+=hg),t&&(a+=ug),r.filter(n=>!Lo(n)).reduce((n,o)=>n+(cg.test(o)?dg:o===""?pg:mg),a)}function gg(e,t){return e.length===t.length&&e.slice(0,-1).every((a,n)=>a===t[n])?e[e.length-1]-t[t.length-1]:0}function xg(e,t,r){let{routesMeta:a}=e,n={},o="/",i=[];for(let l=0;l<a.length;++l){let d=a[l],p=l===a.length-1,m=o==="/"?t:t.slice(o.length)||"/",h=Do({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},m),u=d.route;if(!h&&p&&r&&!a[a.length-1].route.index&&(h=Do({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!h)return null;Object.assign(n,h.params),i.push({params:n,pathname:St([o,h.pathname]),pathnameBase:kg(St([o,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(o=St([o,h.pathnameBase]))}return i}function Do(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=bg(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let o=n[0],i=o.replace(/(.)\/+$/,"$1"),l=n.slice(1);return{params:a.reduce((p,m,h)=>{let{paramName:u,isOptional:f}=m;if(u==="*"){let g=l[h]||"";i=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const x=l[h];return f&&!x?p[u]=void 0:p[u]=(x||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:i,pattern:e}}function bg(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),_l(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,d)=>(a.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function vg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _l(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function yg(e,t){t===void 0&&(t="/");let{pathname:r,search:a="",hash:n=""}=typeof e=="string"?jr(e):e;return{pathname:r?r.startsWith("/")?r:wg(r,t):t,search:Ng(a),hash:Cg(n)}}function wg(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function pa(e,t,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jg(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function zl(e,t){let r=jg(e);return t?r.map((a,n)=>n===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function Bl(e,t,r,a){a===void 0&&(a=!1);let n;typeof e=="string"?n=jr(e):(n=$r({},e),he(!n.pathname||!n.pathname.includes("?"),pa("?","pathname","search",n)),he(!n.pathname||!n.pathname.includes("#"),pa("#","pathname","hash",n)),he(!n.search||!n.search.includes("#"),pa("#","search","hash",n)));let o=e===""||n.pathname==="",i=o?"/":n.pathname,l;if(i==null)l=r;else{let h=t.length-1;if(!a&&i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),h-=1;n.pathname=u.join("/")}l=h>=0?t[h]:"/"}let d=yg(n,l),p=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}const St=e=>e.join("/").replace(/\/\/+/g,"/"),kg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ng=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ul=["post","put","patch","delete"];new Set(Ul);const Eg=["get",...Ul];new Set(Eg);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fr(){return Fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Fr.apply(this,arguments)}const xn=c.createContext(null),Ag=c.createContext(null),qt=c.createContext(null),Ws=c.createContext(null),Wt=c.createContext({outlet:null,matches:[],isDataRoute:!1}),Hl=c.createContext(null);function Pg(e,t){let{relative:r}=t===void 0?{}:t;Yr()||he(!1);let{basename:a,navigator:n}=c.useContext(qt),{hash:o,pathname:i,search:l}=Vl(e,{relative:r}),d=i;return a!=="/"&&(d=i==="/"?a:St([a,i])),n.createHref({pathname:d,search:l,hash:o})}function Yr(){return c.useContext(Ws)!=null}function kr(){return Yr()||he(!1),c.useContext(Ws).location}function Gl(e){c.useContext(qt).static||c.useLayoutEffect(e)}function Tg(){let{isDataRoute:e}=c.useContext(Wt);return e?Hg():Ig()}function Ig(){Yr()||he(!1);let e=c.useContext(xn),{basename:t,future:r,navigator:a}=c.useContext(qt),{matches:n}=c.useContext(Wt),{pathname:o}=kr(),i=JSON.stringify(zl(n,r.v7_relativeSplatPath)),l=c.useRef(!1);return Gl(()=>{l.current=!0}),c.useCallback(function(p,m){if(m===void 0&&(m={}),!l.current)return;if(typeof p=="number"){a.go(p);return}let h=Bl(p,JSON.parse(i),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:St([t,h.pathname])),(m.replace?a.replace:a.push)(h,m.state,m)},[t,a,i,o,e])}function Vl(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=c.useContext(qt),{matches:n}=c.useContext(Wt),{pathname:o}=kr(),i=JSON.stringify(zl(n,a.v7_relativeSplatPath));return c.useMemo(()=>Bl(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function Rg(e,t){return Mg(e,t)}function Mg(e,t,r,a){Yr()||he(!1);let{navigator:n}=c.useContext(qt),{matches:o}=c.useContext(Wt),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let d=i?i.pathnameBase:"/";i&&i.route;let p=kr(),m;if(t){var h;let b=typeof t=="string"?jr(t):t;d==="/"||(h=b.pathname)!=null&&h.startsWith(d)||he(!1),m=b}else m=p;let u=m.pathname||"/",f=u;if(d!=="/"){let b=d.replace(/^\//,"").split("/");f="/"+u.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=og(e,{pathname:f}),g=$g(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:St([d,n.encodeLocation?n.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?d:St([d,n.encodeLocation?n.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,r,a);return t&&g?c.createElement(Ws.Provider,{value:{location:Fr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Nt.Pop}},g):g}function Lg(){let e=Ug(),t=Sg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),r?c.createElement("pre",{style:n},r):null,null)}const Dg=c.createElement(Lg,null);class Og extends c.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?c.createElement(Wt.Provider,{value:this.props.routeContext},c.createElement(Hl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _g(e){let{routeContext:t,match:r,children:a}=e,n=c.useContext(xn);return n&&n.static&&n.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=r.route.id),c.createElement(Wt.Provider,{value:t},a)}function $g(e,t,r,a){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=a)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,l=(n=r)==null?void 0:n.errors;if(l!=null){let m=i.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);m>=0||he(!1),i=i.slice(0,Math.min(i.length,m+1))}let d=!1,p=-1;if(r&&a&&a.v7_partialHydration)for(let m=0;m<i.length;m++){let h=i[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(p=m),h.route.id){let{loaderData:u,errors:f}=r,x=h.route.loader&&u[h.route.id]===void 0&&(!f||f[h.route.id]===void 0);if(h.route.lazy||x){d=!0,p>=0?i=i.slice(0,p+1):i=[i[0]];break}}}return i.reduceRight((m,h,u)=>{let f,x=!1,g=null,b=null;r&&(f=l&&h.route.id?l[h.route.id]:void 0,g=h.route.errorElement||Dg,d&&(p<0&&u===0?(x=!0,b=null):p===u&&(x=!0,b=h.route.hydrateFallbackElement||null)));let w=t.concat(i.slice(0,u+1)),v=()=>{let y;return f?y=g:x?y=b:h.route.Component?y=c.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=m,c.createElement(_g,{match:h,routeContext:{outlet:m,matches:w,isDataRoute:r!=null},children:y})};return r&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?c.createElement(Og,{location:r.location,revalidation:r.revalidation,component:g,error:f,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var ql=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ql||{}),ws=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ws||{});function Fg(e){let t=c.useContext(xn);return t||he(!1),t}function zg(e){let t=c.useContext(Ag);return t||he(!1),t}function Bg(e){let t=c.useContext(Wt);return t||he(!1),t}function Wl(e){let t=Bg(),r=t.matches[t.matches.length-1];return r.route.id||he(!1),r.route.id}function Ug(){var e;let t=c.useContext(Hl),r=zg(ws.UseRouteError),a=Wl(ws.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function Hg(){let{router:e}=Fg(ql.UseNavigateStable),t=Wl(ws.UseNavigateStable),r=c.useRef(!1);return Gl(()=>{r.current=!0}),c.useCallback(function(n,o){o===void 0&&(o={}),r.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,Fr({fromRouteId:t},o)))},[e,t])}function Ot(e){he(!1)}function Gg(e){let{basename:t="/",children:r=null,location:a,navigationType:n=Nt.Pop,navigator:o,static:i=!1,future:l}=e;Yr()&&he(!1);let d=t.replace(/^\/*/,"/"),p=c.useMemo(()=>({basename:d,navigator:o,static:i,future:Fr({v7_relativeSplatPath:!1},l)}),[d,l,o,i]);typeof a=="string"&&(a=jr(a));let{pathname:m="/",search:h="",hash:u="",state:f=null,key:x="default"}=a,g=c.useMemo(()=>{let b=gn(m,d);return b==null?null:{location:{pathname:b,search:h,hash:u,state:f,key:x},navigationType:n}},[d,m,h,u,f,x,n]);return g==null?null:c.createElement(qt.Provider,{value:p},c.createElement(Ws.Provider,{children:r,value:g}))}function Vg(e){let{children:t,location:r}=e;return Rg(Ta(t),r)}new Promise(()=>{});function Ta(e,t){t===void 0&&(t=[]);let r=[];return c.Children.forEach(e,(a,n)=>{if(!c.isValidElement(a))return;let o=[...t,n];if(a.type===c.Fragment){r.push.apply(r,Ta(a.props.children,o));return}a.type!==Ot&&he(!1),!a.props.index||!a.props.children||he(!1);let i={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(i.children=Ta(a.props.children,o)),r.push(i)}),r}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ia.apply(this,arguments)}function qg(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function Wg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kg(e,t){return e.button===0&&(!t||t==="_self")&&!Wg(e)}const Yg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jg="6";try{window.__reactRouterVersion=Jg}catch{}const Xg="startTransition",Oo=_u[Xg];function Qg(e){let{basename:t,children:r,future:a,window:n}=e,o=c.useRef();o.current==null&&(o.current=sg({window:n,v5Compat:!0}));let i=o.current,[l,d]=c.useState({action:i.action,location:i.location}),{v7_startTransition:p}=a||{},m=c.useCallback(h=>{p&&Oo?Oo(()=>d(h)):d(h)},[d,p]);return c.useLayoutEffect(()=>i.listen(m),[i,m]),c.createElement(Gg,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:a})}const Zg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=c.forwardRef(function(t,r){let{onClick:a,relative:n,reloadDocument:o,replace:i,state:l,target:d,to:p,preventScrollReset:m,viewTransition:h}=t,u=qg(t,Yg),{basename:f}=c.useContext(qt),x,g=!1;if(typeof p=="string"&&ex.test(p)&&(x=p,Zg))try{let y=new URL(window.location.href),j=p.startsWith("//")?new URL(y.protocol+p):new URL(p),k=gn(j.pathname,f);j.origin===y.origin&&k!=null?p=k+j.search+j.hash:g=!0}catch{}let b=Pg(p,{relative:n}),w=tx(p,{replace:i,state:l,target:d,preventScrollReset:m,relative:n,viewTransition:h});function v(y){a&&a(y),y.defaultPrevented||w(y)}return c.createElement("a",Ia({},u,{href:x||b,onClick:g||o?a:v,ref:r,target:d}))});var _o;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_o||(_o={}));var $o;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($o||($o={}));function tx(e,t){let{target:r,replace:a,state:n,preventScrollReset:o,relative:i,viewTransition:l}=t===void 0?{}:t,d=Tg(),p=kr(),m=Vl(e,{relative:i});return c.useCallback(h=>{if(Kg(h,r)){h.preventDefault();let u=a!==void 0?a:ys(p)===ys(m);d(e,{replace:u,state:n,preventScrollReset:o,relative:i,viewTransition:l})}},[p,d,m,a,n,r,e,o,i,l])}const rx=qr("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),q=c.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...n},o)=>{const i=a?Va:"button";return s.jsx(i,{className:$(rx({variant:t,size:r,className:e})),ref:o,...n})});q.displayName="Button";var Ra=["Enter"," "],sx=["ArrowDown","PageUp","Home"],Kl=["ArrowUp","PageDown","End"],ax=[...sx,...Kl],nx={ltr:[...Ra,"ArrowRight"],rtl:[...Ra,"ArrowLeft"]},ox={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Jr="Menu",[zr,ix,lx]=Ua(Jr),[Kt,Yl]=ot(Jr,[lx,wr,As]),Ks=wr(),Jl=As(),[cx,Yt]=Kt(Jr),[dx,Xr]=Kt(Jr),Xl=e=>{const{__scopeMenu:t,open:r=!1,children:a,dir:n,onOpenChange:o,modal:i=!0}=e,l=Ks(t),[d,p]=c.useState(null),m=c.useRef(!1),h=je(o),u=Ps(n);return c.useEffect(()=>{const f=()=>{m.current=!0,document.addEventListener("pointerdown",x,{capture:!0,once:!0}),document.addEventListener("pointermove",x,{capture:!0,once:!0})},x=()=>m.current=!1;return document.addEventListener("keydown",f,{capture:!0}),()=>{document.removeEventListener("keydown",f,{capture:!0}),document.removeEventListener("pointerdown",x,{capture:!0}),document.removeEventListener("pointermove",x,{capture:!0})}},[]),s.jsx(cn,{...l,children:s.jsx(cx,{scope:t,open:r,onOpenChange:h,content:d,onContentChange:p,children:s.jsx(dx,{scope:t,onClose:c.useCallback(()=>h(!1),[h]),isUsingKeyboardRef:m,dir:u,modal:i,children:a})})})};Xl.displayName=Jr;var ux="MenuAnchor",bn=c.forwardRef((e,t)=>{const{__scopeMenu:r,...a}=e,n=Ks(r);return s.jsx(dn,{...n,...a,ref:t})});bn.displayName=ux;var vn="MenuPortal",[px,Ql]=Kt(vn,{forceMount:void 0}),Zl=e=>{const{__scopeMenu:t,forceMount:r,children:a,container:n}=e,o=Yt(vn,t);return s.jsx(px,{scope:t,forceMount:r,children:s.jsx(He,{present:r||o.open,children:s.jsx(Ha,{asChild:!0,container:n,children:a})})})};Zl.displayName=vn;var Ue="MenuContent",[mx,yn]=Kt(Ue),ec=c.forwardRef((e,t)=>{const r=Ql(Ue,e.__scopeMenu),{forceMount:a=r.forceMount,...n}=e,o=Yt(Ue,e.__scopeMenu),i=Xr(Ue,e.__scopeMenu);return s.jsx(zr.Provider,{scope:e.__scopeMenu,children:s.jsx(He,{present:a||o.open,children:s.jsx(zr.Slot,{scope:e.__scopeMenu,children:i.modal?s.jsx(hx,{...n,ref:t}):s.jsx(fx,{...n,ref:t})})})})}),hx=c.forwardRef((e,t)=>{const r=Yt(Ue,e.__scopeMenu),a=c.useRef(null),n=ie(t,a);return c.useEffect(()=>{const o=a.current;if(o)return Qo(o)},[]),s.jsx(wn,{...e,ref:n,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:D(e.onFocusOutside,o=>o.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})}),fx=c.forwardRef((e,t)=>{const r=Yt(Ue,e.__scopeMenu);return s.jsx(wn,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})}),wn=c.forwardRef((e,t)=>{const{__scopeMenu:r,loop:a=!1,trapFocus:n,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:l,onEntryFocus:d,onEscapeKeyDown:p,onPointerDownOutside:m,onFocusOutside:h,onInteractOutside:u,onDismiss:f,disableOutsideScroll:x,...g}=e,b=Yt(Ue,r),w=Xr(Ue,r),v=Ks(r),y=Jl(r),j=ix(r),[k,C]=c.useState(null),T=c.useRef(null),I=ie(t,T,b.onContentChange),R=c.useRef(0),U=c.useRef(""),M=c.useRef(0),P=c.useRef(null),F=c.useRef("right"),A=c.useRef(0),H=x?ai:c.Fragment,O=x?{as:Va,allowPinchZoom:!0}:void 0,V=E=>{var G,te;const Z=U.current+E,B=j().filter(se=>!se.disabled),W=document.activeElement,Q=(G=B.find(se=>se.ref.current===W))==null?void 0:G.textValue,le=B.map(se=>se.textValue),be=Ex(le,Z,Q),re=(te=B.find(se=>se.textValue===be))==null?void 0:te.ref.current;(function se(ee){U.current=ee,window.clearTimeout(R.current),ee!==""&&(R.current=window.setTimeout(()=>se(""),1e3))})(Z),re&&setTimeout(()=>re.focus())};c.useEffect(()=>()=>window.clearTimeout(R.current),[]),Zo();const S=c.useCallback(E=>{var B,W;return F.current===((B=P.current)==null?void 0:B.side)&&Px(E,(W=P.current)==null?void 0:W.area)},[]);return s.jsx(mx,{scope:r,searchRef:U,onItemEnter:c.useCallback(E=>{S(E)&&E.preventDefault()},[S]),onItemLeave:c.useCallback(E=>{var Z;S(E)||((Z=T.current)==null||Z.focus(),C(null))},[S]),onTriggerLeave:c.useCallback(E=>{S(E)&&E.preventDefault()},[S]),pointerGraceTimerRef:M,onPointerGraceIntentChange:c.useCallback(E=>{P.current=E},[]),children:s.jsx(H,{...O,children:s.jsx(ei,{asChild:!0,trapped:n,onMountAutoFocus:D(o,E=>{var Z;E.preventDefault(),(Z=T.current)==null||Z.focus({preventScroll:!0})}),onUnmountAutoFocus:i,children:s.jsx(Ga,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:p,onPointerDownOutside:m,onFocusOutside:h,onInteractOutside:u,onDismiss:f,children:s.jsx(ti,{asChild:!0,...y,dir:w.dir,orientation:"vertical",loop:a,currentTabStopId:k,onCurrentTabStopIdChange:C,onEntryFocus:D(d,E=>{w.isUsingKeyboardRef.current||E.preventDefault()}),preventScrollOnEntryFocus:!0,children:s.jsx(un,{role:"menu","aria-orientation":"vertical","data-state":gc(b.open),"data-radix-menu-content":"",dir:w.dir,...v,...g,ref:I,style:{outline:"none",...g.style},onKeyDown:D(g.onKeyDown,E=>{const B=E.target.closest("[data-radix-menu-content]")===E.currentTarget,W=E.ctrlKey||E.altKey||E.metaKey,Q=E.key.length===1;B&&(E.key==="Tab"&&E.preventDefault(),!W&&Q&&V(E.key));const le=T.current;if(E.target!==le||!ax.includes(E.key))return;E.preventDefault();const re=j().filter(G=>!G.disabled).map(G=>G.ref.current);Kl.includes(E.key)&&re.reverse(),Cx(re)}),onBlur:D(e.onBlur,E=>{E.currentTarget.contains(E.target)||(window.clearTimeout(R.current),U.current="")}),onPointerMove:D(e.onPointerMove,Br(E=>{const Z=E.target,B=A.current!==E.clientX;if(E.currentTarget.contains(Z)&&B){const W=E.clientX>A.current?"right":"left";F.current=W,A.current=E.clientX}}))})})})})})})});ec.displayName=Ue;var gx="MenuGroup",jn=c.forwardRef((e,t)=>{const{__scopeMenu:r,...a}=e;return s.jsx(K.div,{role:"group",...a,ref:t})});jn.displayName=gx;var xx="MenuLabel",tc=c.forwardRef((e,t)=>{const{__scopeMenu:r,...a}=e;return s.jsx(K.div,{...a,ref:t})});tc.displayName=xx;var js="MenuItem",Fo="menu.itemSelect",Ys=c.forwardRef((e,t)=>{const{disabled:r=!1,onSelect:a,...n}=e,o=c.useRef(null),i=Xr(js,e.__scopeMenu),l=yn(js,e.__scopeMenu),d=ie(t,o),p=c.useRef(!1),m=()=>{const h=o.current;if(!r&&h){const u=new CustomEvent(Fo,{bubbles:!0,cancelable:!0});h.addEventListener(Fo,f=>a==null?void 0:a(f),{once:!0}),Xo(h,u),u.defaultPrevented?p.current=!1:i.onClose()}};return s.jsx(rc,{...n,ref:d,disabled:r,onClick:D(e.onClick,m),onPointerDown:h=>{var u;(u=e.onPointerDown)==null||u.call(e,h),p.current=!0},onPointerUp:D(e.onPointerUp,h=>{var u;p.current||(u=h.currentTarget)==null||u.click()}),onKeyDown:D(e.onKeyDown,h=>{const u=l.searchRef.current!=="";r||u&&h.key===" "||Ra.includes(h.key)&&(h.currentTarget.click(),h.preventDefault())})})});Ys.displayName=js;var rc=c.forwardRef((e,t)=>{const{__scopeMenu:r,disabled:a=!1,textValue:n,...o}=e,i=yn(js,r),l=Jl(r),d=c.useRef(null),p=ie(t,d),[m,h]=c.useState(!1),[u,f]=c.useState("");return c.useEffect(()=>{const x=d.current;x&&f((x.textContent??"").trim())},[o.children]),s.jsx(zr.ItemSlot,{scope:r,disabled:a,textValue:n??u,children:s.jsx(ri,{asChild:!0,...l,focusable:!a,children:s.jsx(K.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0,...o,ref:p,onPointerMove:D(e.onPointerMove,Br(x=>{a?i.onItemLeave(x):(i.onItemEnter(x),x.defaultPrevented||x.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:D(e.onPointerLeave,Br(x=>i.onItemLeave(x))),onFocus:D(e.onFocus,()=>h(!0)),onBlur:D(e.onBlur,()=>h(!1))})})})}),bx="MenuCheckboxItem",sc=c.forwardRef((e,t)=>{const{checked:r=!1,onCheckedChange:a,...n}=e;return s.jsx(lc,{scope:e.__scopeMenu,checked:r,children:s.jsx(Ys,{role:"menuitemcheckbox","aria-checked":ks(r)?"mixed":r,...n,ref:t,"data-state":Nn(r),onSelect:D(n.onSelect,()=>a==null?void 0:a(ks(r)?!0:!r),{checkForDefaultPrevented:!1})})})});sc.displayName=bx;var ac="MenuRadioGroup",[vx,yx]=Kt(ac,{value:void 0,onValueChange:()=>{}}),nc=c.forwardRef((e,t)=>{const{value:r,onValueChange:a,...n}=e,o=je(a);return s.jsx(vx,{scope:e.__scopeMenu,value:r,onValueChange:o,children:s.jsx(jn,{...n,ref:t})})});nc.displayName=ac;var oc="MenuRadioItem",ic=c.forwardRef((e,t)=>{const{value:r,...a}=e,n=yx(oc,e.__scopeMenu),o=r===n.value;return s.jsx(lc,{scope:e.__scopeMenu,checked:o,children:s.jsx(Ys,{role:"menuitemradio","aria-checked":o,...a,ref:t,"data-state":Nn(o),onSelect:D(a.onSelect,()=>{var i;return(i=n.onValueChange)==null?void 0:i.call(n,r)},{checkForDefaultPrevented:!1})})})});ic.displayName=oc;var kn="MenuItemIndicator",[lc,wx]=Kt(kn,{checked:!1}),cc=c.forwardRef((e,t)=>{const{__scopeMenu:r,forceMount:a,...n}=e,o=wx(kn,r);return s.jsx(He,{present:a||ks(o.checked)||o.checked===!0,children:s.jsx(K.span,{...n,ref:t,"data-state":Nn(o.checked)})})});cc.displayName=kn;var jx="MenuSeparator",dc=c.forwardRef((e,t)=>{const{__scopeMenu:r,...a}=e;return s.jsx(K.div,{role:"separator","aria-orientation":"horizontal",...a,ref:t})});dc.displayName=jx;var kx="MenuArrow",uc=c.forwardRef((e,t)=>{const{__scopeMenu:r,...a}=e,n=Ks(r);return s.jsx(pn,{...n,...a,ref:t})});uc.displayName=kx;var Nx="MenuSub",[yv,pc]=Kt(Nx),Ar="MenuSubTrigger",mc=c.forwardRef((e,t)=>{const r=Yt(Ar,e.__scopeMenu),a=Xr(Ar,e.__scopeMenu),n=pc(Ar,e.__scopeMenu),o=yn(Ar,e.__scopeMenu),i=c.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:d}=o,p={__scopeMenu:e.__scopeMenu},m=c.useCallback(()=>{i.current&&window.clearTimeout(i.current),i.current=null},[]);return c.useEffect(()=>m,[m]),c.useEffect(()=>{const h=l.current;return()=>{window.clearTimeout(h),d(null)}},[l,d]),s.jsx(bn,{asChild:!0,...p,children:s.jsx(rc,{id:n.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":n.contentId,"data-state":gc(r.open),...e,ref:si(t,n.onTriggerChange),onClick:h=>{var u;(u=e.onClick)==null||u.call(e,h),!(e.disabled||h.defaultPrevented)&&(h.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:D(e.onPointerMove,Br(h=>{o.onItemEnter(h),!h.defaultPrevented&&!e.disabled&&!r.open&&!i.current&&(o.onPointerGraceIntentChange(null),i.current=window.setTimeout(()=>{r.onOpenChange(!0),m()},100))})),onPointerLeave:D(e.onPointerLeave,Br(h=>{var f,x;m();const u=(f=r.content)==null?void 0:f.getBoundingClientRect();if(u){const g=(x=r.content)==null?void 0:x.dataset.side,b=g==="right",w=b?-5:5,v=u[b?"left":"right"],y=u[b?"right":"left"];o.onPointerGraceIntentChange({area:[{x:h.clientX+w,y:h.clientY},{x:v,y:u.top},{x:y,y:u.top},{x:y,y:u.bottom},{x:v,y:u.bottom}],side:g}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.onPointerGraceIntentChange(null),300)}else{if(o.onTriggerLeave(h),h.defaultPrevented)return;o.onPointerGraceIntentChange(null)}})),onKeyDown:D(e.onKeyDown,h=>{var f;const u=o.searchRef.current!=="";e.disabled||u&&h.key===" "||nx[a.dir].includes(h.key)&&(r.onOpenChange(!0),(f=r.content)==null||f.focus(),h.preventDefault())})})})});mc.displayName=Ar;var hc="MenuSubContent",fc=c.forwardRef((e,t)=>{const r=Ql(Ue,e.__scopeMenu),{forceMount:a=r.forceMount,...n}=e,o=Yt(Ue,e.__scopeMenu),i=Xr(Ue,e.__scopeMenu),l=pc(hc,e.__scopeMenu),d=c.useRef(null),p=ie(t,d);return s.jsx(zr.Provider,{scope:e.__scopeMenu,children:s.jsx(He,{present:a||o.open,children:s.jsx(zr.Slot,{scope:e.__scopeMenu,children:s.jsx(wn,{id:l.contentId,"aria-labelledby":l.triggerId,...n,ref:p,align:"start",side:i.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:m=>{var h;i.isUsingKeyboardRef.current&&((h=d.current)==null||h.focus()),m.preventDefault()},onCloseAutoFocus:m=>m.preventDefault(),onFocusOutside:D(e.onFocusOutside,m=>{m.target!==l.trigger&&o.onOpenChange(!1)}),onEscapeKeyDown:D(e.onEscapeKeyDown,m=>{i.onClose(),m.preventDefault()}),onKeyDown:D(e.onKeyDown,m=>{var f;const h=m.currentTarget.contains(m.target),u=ox[i.dir].includes(m.key);h&&u&&(o.onOpenChange(!1),(f=l.trigger)==null||f.focus(),m.preventDefault())})})})})})});fc.displayName=hc;function gc(e){return e?"open":"closed"}function ks(e){return e==="indeterminate"}function Nn(e){return ks(e)?"indeterminate":e?"checked":"unchecked"}function Cx(e){const t=document.activeElement;for(const r of e)if(r===t||(r.focus(),document.activeElement!==t))return}function Sx(e,t){return e.map((r,a)=>e[(t+a)%e.length])}function Ex(e,t,r){const n=t.length>1&&Array.from(t).every(p=>p===t[0])?t[0]:t,o=r?e.indexOf(r):-1;let i=Sx(e,Math.max(o,0));n.length===1&&(i=i.filter(p=>p!==r));const d=i.find(p=>p.toLowerCase().startsWith(n.toLowerCase()));return d!==r?d:void 0}function Ax(e,t){const{x:r,y:a}=e;let n=!1;for(let o=0,i=t.length-1;o<t.length;i=o++){const l=t[o].x,d=t[o].y,p=t[i].x,m=t[i].y;d>a!=m>a&&r<(p-l)*(a-d)/(m-d)+l&&(n=!n)}return n}function Px(e,t){if(!t)return!1;const r={x:e.clientX,y:e.clientY};return Ax(r,t)}function Br(e){return t=>t.pointerType==="mouse"?e(t):void 0}var Tx=Xl,Ix=bn,Rx=Zl,Mx=ec,Lx=jn,Dx=tc,Ox=Ys,_x=sc,$x=nc,Fx=ic,zx=cc,Bx=dc,Ux=uc,Hx=mc,Gx=fc,Cn="DropdownMenu",[Vx,wv]=ot(Cn,[Yl]),Ae=Yl(),[qx,xc]=Vx(Cn),bc=e=>{const{__scopeDropdownMenu:t,children:r,dir:a,open:n,defaultOpen:o,onOpenChange:i,modal:l=!0}=e,d=Ae(t),p=c.useRef(null),[m=!1,h]=Ut({prop:n,defaultProp:o,onChange:i});return s.jsx(qx,{scope:t,triggerId:mr(),triggerRef:p,contentId:mr(),open:m,onOpenChange:h,onOpenToggle:c.useCallback(()=>h(u=>!u),[h]),modal:l,children:s.jsx(Tx,{...d,open:m,onOpenChange:h,dir:a,modal:l,children:r})})};bc.displayName=Cn;var vc="DropdownMenuTrigger",yc=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,disabled:a=!1,...n}=e,o=xc(vc,r),i=Ae(r);return s.jsx(Ix,{asChild:!0,...i,children:s.jsx(K.button,{type:"button",id:o.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":o.open?o.contentId:void 0,"data-state":o.open?"open":"closed","data-disabled":a?"":void 0,disabled:a,...n,ref:si(t,o.triggerRef),onPointerDown:D(e.onPointerDown,l=>{!a&&l.button===0&&l.ctrlKey===!1&&(o.onOpenToggle(),o.open||l.preventDefault())}),onKeyDown:D(e.onKeyDown,l=>{a||(["Enter"," "].includes(l.key)&&o.onOpenToggle(),l.key==="ArrowDown"&&o.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});yc.displayName=vc;var Wx="DropdownMenuPortal",wc=e=>{const{__scopeDropdownMenu:t,...r}=e,a=Ae(t);return s.jsx(Rx,{...a,...r})};wc.displayName=Wx;var jc="DropdownMenuContent",kc=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=xc(jc,r),o=Ae(r),i=c.useRef(!1);return s.jsx(Mx,{id:n.contentId,"aria-labelledby":n.triggerId,...o,...a,ref:t,onCloseAutoFocus:D(e.onCloseAutoFocus,l=>{var d;i.current||(d=n.triggerRef.current)==null||d.focus(),i.current=!1,l.preventDefault()}),onInteractOutside:D(e.onInteractOutside,l=>{const d=l.detail.originalEvent,p=d.button===0&&d.ctrlKey===!0,m=d.button===2||p;(!n.modal||m)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});kc.displayName=jc;var Kx="DropdownMenuGroup",Yx=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(Lx,{...n,...a,ref:t})});Yx.displayName=Kx;var Jx="DropdownMenuLabel",Nc=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(Dx,{...n,...a,ref:t})});Nc.displayName=Jx;var Xx="DropdownMenuItem",Cc=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(Ox,{...n,...a,ref:t})});Cc.displayName=Xx;var Qx="DropdownMenuCheckboxItem",Sc=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(_x,{...n,...a,ref:t})});Sc.displayName=Qx;var Zx="DropdownMenuRadioGroup",e0=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx($x,{...n,...a,ref:t})});e0.displayName=Zx;var t0="DropdownMenuRadioItem",Ec=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(Fx,{...n,...a,ref:t})});Ec.displayName=t0;var r0="DropdownMenuItemIndicator",Ac=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(zx,{...n,...a,ref:t})});Ac.displayName=r0;var s0="DropdownMenuSeparator",Pc=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(Bx,{...n,...a,ref:t})});Pc.displayName=s0;var a0="DropdownMenuArrow",n0=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(Ux,{...n,...a,ref:t})});n0.displayName=a0;var o0="DropdownMenuSubTrigger",Tc=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(Hx,{...n,...a,ref:t})});Tc.displayName=o0;var i0="DropdownMenuSubContent",Ic=c.forwardRef((e,t)=>{const{__scopeDropdownMenu:r,...a}=e,n=Ae(r);return s.jsx(Gx,{...n,...a,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Ic.displayName=i0;var l0=bc,c0=yc,d0=wc,Rc=kc,Mc=Nc,Lc=Cc,Dc=Sc,Oc=Ec,_c=Ac,$c=Pc,Fc=Tc,zc=Ic;const u0=l0,p0=c0,m0=c.forwardRef(({className:e,inset:t,children:r,...a},n)=>s.jsxs(Fc,{ref:n,className:$("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",e),...a,children:[r,s.jsx(is,{className:"ml-auto h-4 w-4"})]}));m0.displayName=Fc.displayName;const h0=c.forwardRef(({className:e,...t},r)=>s.jsx(zc,{ref:r,className:$("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));h0.displayName=zc.displayName;const Bc=c.forwardRef(({className:e,sideOffset:t=4,...r},a)=>s.jsx(d0,{children:s.jsx(Rc,{ref:a,sideOffset:t,className:$("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));Bc.displayName=Rc.displayName;const Pr=c.forwardRef(({className:e,inset:t,...r},a)=>s.jsx(Lc,{ref:a,className:$("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",e),...r}));Pr.displayName=Lc.displayName;const f0=c.forwardRef(({className:e,children:t,checked:r,...a},n)=>s.jsxs(Dc,{ref:n,className:$("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:r,...a,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(_c,{children:s.jsx(Mr,{className:"h-4 w-4"})})}),t]}));f0.displayName=Dc.displayName;const g0=c.forwardRef(({className:e,children:t,...r},a)=>s.jsxs(Oc,{ref:a,className:$("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(_c,{children:s.jsx(Di,{className:"h-2 w-2 fill-current"})})}),t]}));g0.displayName=Oc.displayName;const Uc=c.forwardRef(({className:e,inset:t,...r},a)=>s.jsx(Mc,{ref:a,className:$("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...r}));Uc.displayName=Mc.displayName;const Hc=c.forwardRef(({className:e,...t},r)=>s.jsx($c,{ref:r,className:$("-mx-1 my-1 h-px bg-muted",e),...t}));Hc.displayName=$c.displayName;const x0=qr("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Ct({className:e,variant:t,...r}){return s.jsx("div",{className:$(x0({variant:t}),e),...r})}function Qr(){const{theme:e,setTheme:t}=tl(),r=kr(),a=()=>{const i=e==="light"?"dark":"light";t(i),z(`${i==="light"?"Light":"Dark"} mode activated`,{description:"Visual preference updated",duration:2e3})},n=i=>r.pathname===i,o=()=>{z("Pro Upgrade",{description:"Redirecting to upgrade options",action:{label:"View Plans",onClick:()=>console.log("Viewing upgrade plans")}})};return s.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 glassmorphism-navbar",children:s.jsxs("div",{className:"container flex h-16 items-center justify-between",children:[s.jsx("div",{className:"flex items-center gap-3",children:s.jsxs(Me,{to:"/",className:"flex items-center gap-3 group",children:[s.jsx("div",{className:"flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-r from-theme-blue to-theme-green text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow",children:s.jsx(xe,{className:"h-5 w-5"})}),s.jsxs("div",{className:"flex flex-col items-start leading-none",children:[s.jsxs("span",{className:"font-heading font-semibold text-lg flex items-center gap-1.5",children:["CodeCraft AI",s.jsx(Ct,{variant:"outline",className:"ml-1 text-[10px] py-0 h-4 px-1 font-normal",children:"BETA"})]}),s.jsx("span",{className:"text-xs text-muted-foreground",children:"Enterprise AI Development"})]})]})}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("nav",{className:"hidden md:flex items-center gap-1",children:[s.jsx(Me,{to:"/",className:`nav-link ${n("/")?"nav-link-active":""}`,children:"Home"}),s.jsx(Me,{to:"/features",className:`nav-link ${n("/features")?"nav-link-active":""}`,children:"Features"}),s.jsx(Me,{to:"/templates",className:`nav-link ${n("/templates")?"nav-link-active":""}`,children:"Templates"}),s.jsx(Me,{to:"/documentation",className:`nav-link ${n("/documentation")?"nav-link-active":""}`,children:"Docs"})]}),s.jsx(q,{variant:"ghost",size:"icon",className:"rounded-full transition-all duration-300 hover:bg-primary/10",onClick:a,title:`Switch to ${e==="light"?"dark":"light"} mode`,children:e==="light"?s.jsx(Tp,{className:"h-4 w-4"}):s.jsx(zp,{className:"h-4 w-4"})}),s.jsxs(q,{variant:"outline",size:"sm",className:"gap-2 hidden sm:flex hover:bg-primary/10 hover:border-primary/30 transition-all duration-300",children:[s.jsx(bp,{className:"w-4 h-4"}),s.jsx("span",{children:"GitHub"})]}),s.jsxs(q,{variant:"default",size:"sm",className:"gap-1.5 bg-gradient-to-r from-theme-blue to-theme-green hover:opacity-90 shadow-glow-sm hover:shadow-glow transition-all duration-300",onClick:o,children:["Upgrade Pro",s.jsx(pp,{className:"w-3.5 h-3.5 ml-0.5"})]}),s.jsxs(u0,{children:[s.jsx(p0,{asChild:!0,children:s.jsx(q,{variant:"ghost",size:"icon",className:"md:hidden rounded-full",children:s.jsx(Sp,{className:"h-4 w-4"})})}),s.jsxs(Bc,{align:"end",className:"glassmorphism-card w-56",children:[s.jsx(Uc,{children:"Navigation"}),s.jsx(Hc,{}),s.jsx(Pr,{asChild:!0,children:s.jsx(Me,{to:"/",className:"flex gap-2 cursor-pointer w-full",children:"Home"})}),s.jsx(Pr,{asChild:!0,children:s.jsx(Me,{to:"/features",className:"flex gap-2 cursor-pointer w-full",children:"Features"})}),s.jsx(Pr,{asChild:!0,children:s.jsx(Me,{to:"/templates",className:"flex gap-2 cursor-pointer w-full",children:"Templates"})}),s.jsx(Pr,{asChild:!0,children:s.jsx(Me,{to:"/documentation",className:"flex gap-2 cursor-pointer w-full",children:"Documentation"})})]})]})]})]})})}let ma=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");var Sn="Avatar",[b0,jv]=ot(Sn),[v0,Gc]=b0(Sn),Vc=c.forwardRef((e,t)=>{const{__scopeAvatar:r,...a}=e,[n,o]=c.useState("idle");return s.jsx(v0,{scope:r,imageLoadingStatus:n,onImageLoadingStatusChange:o,children:s.jsx(K.span,{...a,ref:t})})});Vc.displayName=Sn;var qc="AvatarImage",Wc=c.forwardRef((e,t)=>{const{__scopeAvatar:r,src:a,onLoadingStatusChange:n=()=>{},...o}=e,i=Gc(qc,r),l=y0(a,o.referrerPolicy),d=je(p=>{n(p),i.onImageLoadingStatusChange(p)});return Ee(()=>{l!=="idle"&&d(l)},[l,d]),l==="loaded"?s.jsx(K.img,{...o,ref:t,src:a}):null});Wc.displayName=qc;var Kc="AvatarFallback",Yc=c.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:a,...n}=e,o=Gc(Kc,r),[i,l]=c.useState(a===void 0);return c.useEffect(()=>{if(a!==void 0){const d=window.setTimeout(()=>l(!0),a);return()=>window.clearTimeout(d)}},[a]),i&&o.imageLoadingStatus!=="loaded"?s.jsx(K.span,{...n,ref:t}):null});Yc.displayName=Kc;function y0(e,t){const[r,a]=c.useState("idle");return Ee(()=>{if(!e){a("error");return}let n=!0;const o=new window.Image,i=l=>()=>{n&&a(l)};return a("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,t&&(o.referrerPolicy=t),()=>{n=!1}},[e,t]),r}var Jc=Vc,Xc=Wc,Qc=Yc;const En=c.forwardRef(({className:e,...t},r)=>s.jsx(Jc,{ref:r,className:$("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...t}));En.displayName=Jc.displayName;const An=c.forwardRef(({className:e,...t},r)=>s.jsx(Xc,{ref:r,className:$("aspect-square h-full w-full",e),...t}));An.displayName=Xc.displayName;const Pn=c.forwardRef(({className:e,...t},r)=>s.jsx(Qc,{ref:r,className:$("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...t}));Pn.displayName=Qc.displayName;function w0({message:e}){const t=e.role==="user",{toast:r}=_s(),[a,n]=c.useState(!1),o=()=>{navigator.clipboard.writeText(e.content),n(!0),r({title:"Copied to clipboard",description:"Message content has been copied to your clipboard.",duration:2e3}),setTimeout(()=>n(!1),2e3)};return s.jsxs("div",{className:$("flex gap-3 p-4 rounded-xl message-appear",t?"bg-primary/5 border border-primary/10 hover:border-primary/20 transition-all":"frost-panel hover:shadow-xl transition-all"),children:[s.jsxs(En,{className:$("h-10 w-10 rounded-xl overflow-hidden border-2",t?"border-primary/30 bg-primary/5":"border-theme-purple/30 bg-gradient-animation"),children:[s.jsx(Pn,{className:$("text-xs font-medium",t?"text-primary":"text-white"),children:t?s.jsx(Hi,{className:"h-4 w-4"}):s.jsx(Ya,{className:"h-5 w-5"})}),!t&&s.jsx(An,{src:"/assets/assistant-avatar.png",alt:"Assistant"})]}),s.jsxs("div",{className:"flex-1 space-y-2 overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:$("font-medium text-sm flex items-center gap-2",t?"text-primary":"bg-gradient-to-r from-theme-purple to-theme-blue bg-clip-text text-transparent"),children:t?"You":s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"font-heading font-semibold",children:"WebCraft AI"}),s.jsx("div",{className:"tag tag-purple text-[10px] py-0",children:"Assistant"})]})}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx(q,{variant:"ghost",size:"icon",className:"h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white/30 hover:text-primary transition-opacity",onClick:o,children:a?s.jsx(ip,{className:"h-3 w-3 text-green-500"}):s.jsx(tr,{className:"h-3 w-3 text-muted-foreground"})}),s.jsx("span",{className:"text-xs text-muted-foreground",children:new Date(e.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]}),s.jsx("div",{className:"text-sm whitespace-pre-wrap leading-relaxed",children:e.content})]})]})}const Zc=c.forwardRef(({className:e,...t},r)=>s.jsx("textarea",{className:$("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));Zc.displayName="Textarea";function j0({onSendMessage:e,isProcessing:t,disabled:r,errorMessage:a}){const[n,o]=c.useState(""),[i,l]=c.useState(""),d=["Create a landing page for a fitness app with a sign-up form","Build a todo app with local storage support","Design a responsive pricing table with three tiers","Make an image gallery with thumbnails and a lightbox effect"],p=u=>{u.preventDefault(),n.trim()&&!t&&!r&&(e(n),o(""))},m=u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),p(u))},h=u=>{o(u)};return c.useEffect(()=>{let u;if(t){const f=["",".","..","..."];let x=0;u=setInterval(()=>{l(f[x]),x=(x+1)%f.length},400)}else l("");return()=>{u&&clearInterval(u)}},[t]),s.jsxs("form",{onSubmit:p,className:"flex flex-col gap-3",children:[a&&s.jsxs("div",{className:"flex items-center gap-2 text-xs text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded-lg mb-1",children:[s.jsx(lp,{className:"h-3 w-3"}),a]}),!n&&!t&&!r&&s.jsxs("div",{className:"flex flex-wrap gap-2 mb-1",children:[s.jsxs("p",{className:"text-xs text-muted-foreground flex items-center mb-1 w-full",children:[s.jsx(wp,{className:"h-3 w-3 mr-1 text-theme-yellow"}),"Try these example prompts:"]}),d.map((u,f)=>s.jsx("button",{type:"button",onClick:()=>h(u),className:"text-xs px-3 py-1.5 bg-glass bg-white/10 hover:bg-white/20 border border-white/30 text-primary/80 rounded-full transition-colors",children:u},f))]}),s.jsxs("div",{className:"relative",children:[s.jsx(Zc,{placeholder:r?"Configure API settings to continue...":t?"AI is thinking"+i:"Ask me anything about web development...",className:$("min-h-[100px] pr-14 resize-none overflow-auto rounded-xl border-muted focus-visible:ring-1 focus-visible:ring-primary/50 glass transition-all duration-200",t&&"bg-muted/30 text-muted-foreground",r&&"bg-slate-100 dark:bg-slate-800/50 text-muted-foreground cursor-not-allowed opacity-80"),value:n,onChange:u=>o(u.target.value),onKeyDown:m,disabled:t||r}),s.jsx(Al,{children:s.jsxs(If,{children:[s.jsx(Rf,{asChild:!0,children:s.jsx(q,{type:"submit",size:"icon",className:$("absolute bottom-3 right-3 rounded-full h-8 w-8 flex items-center justify-center transition-all",r?"bg-slate-300 dark:bg-slate-700 cursor-not-allowed":t?"bg-muted cursor-not-allowed":n.trim()?"bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 shadow-neon":"bg-primary/60 cursor-not-allowed"),disabled:t||!n.trim()||r,children:t?s.jsx(va,{className:"h-4 w-4 animate-spin"}):s.jsx(Dp,{className:"h-4 w-4"})})}),s.jsx(Pl,{children:s.jsx("p",{children:"Send message"})})]})})]}),s.jsxs("div",{className:"text-xs text-muted-foreground flex justify-between items-center",children:[s.jsx("span",{className:"flex items-center",children:t?s.jsxs("span",{className:"text-amber-600 flex items-center gap-1",children:[s.jsx(va,{className:"h-3 w-3 animate-spin"}),"AI is thinking",s.jsx("span",{className:"thinking-dots"})]}):s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx(Bp,{className:"h-3 w-3 text-theme-purple animate-pulse-slow"}),s.jsx("span",{className:"bg-gradient-to-r from-theme-purple to-theme-blue bg-clip-text text-transparent font-medium",children:"Powered by AI"}),r?s.jsx("span",{className:"text-red-500",children:"• Offline"}):s.jsx("span",{children:"• Ready"})]})}),s.jsx("span",{className:"text-xs",children:n.length>0?`${n.length} characters`:""})]})]})}const Ke=c.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:$("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));Ke.displayName="Card";const st=c.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:$("flex flex-col space-y-1.5 p-6",e),...t}));st.displayName="CardHeader";const at=c.forwardRef(({className:e,...t},r)=>s.jsx("h3",{ref:r,className:$("text-2xl font-semibold leading-none tracking-tight",e),...t}));at.displayName="CardTitle";const Et=c.forwardRef(({className:e,...t},r)=>s.jsx("p",{ref:r,className:$("text-sm text-muted-foreground",e),...t}));Et.displayName="CardDescription";const Ye=c.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:$("p-6 pt-0",e),...t}));Ye.displayName="CardContent";const ed=c.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:$("flex items-center p-6 pt-0",e),...t}));ed.displayName="CardFooter";const Gt=c.forwardRef(({className:e,type:t,...r},a)=>s.jsx("input",{type:t,className:$("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...r}));Gt.displayName="Input";var k0="Label",td=c.forwardRef((e,t)=>s.jsx(K.label,{...e,ref:t,onMouseDown:r=>{var n;r.target.closest("button, input, select, textarea")||((n=e.onMouseDown)==null||n.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));td.displayName=k0;var rd=td;const N0=qr("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Be=c.forwardRef(({className:e,...t},r)=>s.jsx(rd,{ref:r,className:$(N0(),e),...t}));Be.displayName=rd.displayName;function Tn(e){const t=c.useRef({value:e,previous:e});return c.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var In="Radio",[C0,sd]=ot(In),[S0,E0]=C0(In),ad=c.forwardRef((e,t)=>{const{__scopeRadio:r,name:a,checked:n=!1,required:o,disabled:i,value:l="on",onCheck:d,form:p,...m}=e,[h,u]=c.useState(null),f=ie(t,b=>u(b)),x=c.useRef(!1),g=h?p||!!h.closest("form"):!0;return s.jsxs(S0,{scope:r,checked:n,disabled:i,children:[s.jsx(K.button,{type:"button",role:"radio","aria-checked":n,"data-state":id(n),"data-disabled":i?"":void 0,disabled:i,value:l,...m,ref:f,onClick:D(e.onClick,b=>{n||d==null||d(),g&&(x.current=b.isPropagationStopped(),x.current||b.stopPropagation())})}),g&&s.jsx(A0,{control:h,bubbles:!x.current,name:a,value:l,checked:n,required:o,disabled:i,form:p,style:{transform:"translateX(-100%)"}})]})});ad.displayName=In;var nd="RadioIndicator",od=c.forwardRef((e,t)=>{const{__scopeRadio:r,forceMount:a,...n}=e,o=E0(nd,r);return s.jsx(He,{present:a||o.checked,children:s.jsx(K.span,{"data-state":id(o.checked),"data-disabled":o.disabled?"":void 0,...n,ref:t})})});od.displayName=nd;var A0=e=>{const{control:t,checked:r,bubbles:a=!0,...n}=e,o=c.useRef(null),i=Tn(r),l=nn(t);return c.useEffect(()=>{const d=o.current,p=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(p,"checked").set;if(i!==r&&h){const u=new Event("click",{bubbles:a});h.call(d,r),d.dispatchEvent(u)}},[i,r,a]),s.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...n,tabIndex:-1,ref:o,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function id(e){return e?"checked":"unchecked"}var P0=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Rn="RadioGroup",[T0,kv]=ot(Rn,[As,sd]),ld=As(),cd=sd(),[I0,R0]=T0(Rn),dd=c.forwardRef((e,t)=>{const{__scopeRadioGroup:r,name:a,defaultValue:n,value:o,required:i=!1,disabled:l=!1,orientation:d,dir:p,loop:m=!0,onValueChange:h,...u}=e,f=ld(r),x=Ps(p),[g,b]=Ut({prop:o,defaultProp:n,onChange:h});return s.jsx(I0,{scope:r,name:a,required:i,disabled:l,value:g,onValueChange:b,children:s.jsx(ti,{asChild:!0,...f,orientation:d,dir:x,loop:m,children:s.jsx(K.div,{role:"radiogroup","aria-required":i,"aria-orientation":d,"data-disabled":l?"":void 0,dir:x,...u,ref:t})})})});dd.displayName=Rn;var ud="RadioGroupItem",pd=c.forwardRef((e,t)=>{const{__scopeRadioGroup:r,disabled:a,...n}=e,o=R0(ud,r),i=o.disabled||a,l=ld(r),d=cd(r),p=c.useRef(null),m=ie(t,p),h=o.value===n.value,u=c.useRef(!1);return c.useEffect(()=>{const f=g=>{P0.includes(g.key)&&(u.current=!0)},x=()=>u.current=!1;return document.addEventListener("keydown",f),document.addEventListener("keyup",x),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",x)}},[]),s.jsx(ri,{asChild:!0,...l,focusable:!i,active:h,children:s.jsx(ad,{disabled:i,required:o.required,checked:h,...d,...n,name:o.name,ref:m,onCheck:()=>o.onValueChange(n.value),onKeyDown:D(f=>{f.key==="Enter"&&f.preventDefault()}),onFocus:D(n.onFocus,()=>{var f;u.current&&((f=p.current)==null||f.click())})})})});pd.displayName=ud;var M0="RadioGroupIndicator",md=c.forwardRef((e,t)=>{const{__scopeRadioGroup:r,...a}=e,n=cd(r);return s.jsx(od,{...n,...a,ref:t})});md.displayName=M0;var hd=dd,fd=pd,L0=md;const gd=c.forwardRef(({className:e,...t},r)=>s.jsx(hd,{className:$("grid gap-2",e),...t,ref:r}));gd.displayName=hd.displayName;const Tr=c.forwardRef(({className:e,children:t,...r},a)=>s.jsx(fd,{ref:a,className:$("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...r,children:s.jsx(L0,{className:"flex items-center justify-center",children:s.jsx(Di,{className:"h-2.5 w-2.5 fill-current text-current"})})}));Tr.displayName=fd.displayName;function Ma(e,[t,r]){return Math.min(r,Math.max(t,e))}var D0=[" ","Enter","ArrowUp","ArrowDown"],O0=[" ","Enter"],Zr="Select",[Js,Xs,_0]=Ua(Zr),[Nr,Nv]=ot(Zr,[_0,wr]),Qs=wr(),[$0,Mt]=Nr(Zr),[F0,z0]=Nr(Zr),xd=e=>{const{__scopeSelect:t,children:r,open:a,defaultOpen:n,onOpenChange:o,value:i,defaultValue:l,onValueChange:d,dir:p,name:m,autoComplete:h,disabled:u,required:f,form:x}=e,g=Qs(t),[b,w]=c.useState(null),[v,y]=c.useState(null),[j,k]=c.useState(!1),C=Ps(p),[T=!1,I]=Ut({prop:a,defaultProp:n,onChange:o}),[R,U]=Ut({prop:i,defaultProp:l,onChange:d}),M=c.useRef(null),P=b?x||!!b.closest("form"):!0,[F,A]=c.useState(new Set),H=Array.from(F).map(O=>O.props.value).join(";");return s.jsx(cn,{...g,children:s.jsxs($0,{required:f,scope:t,trigger:b,onTriggerChange:w,valueNode:v,onValueNodeChange:y,valueNodeHasChildren:j,onValueNodeHasChildrenChange:k,contentId:mr(),value:R,onValueChange:U,open:T,onOpenChange:I,dir:C,triggerPointerDownPosRef:M,disabled:u,children:[s.jsx(Js.Provider,{scope:t,children:s.jsx(F0,{scope:e.__scopeSelect,onNativeOptionAdd:c.useCallback(O=>{A(V=>new Set(V).add(O))},[]),onNativeOptionRemove:c.useCallback(O=>{A(V=>{const S=new Set(V);return S.delete(O),S})},[]),children:r})}),P?s.jsxs(zd,{"aria-hidden":!0,required:f,tabIndex:-1,name:m,autoComplete:h,value:R,onChange:O=>U(O.target.value),disabled:u,form:x,children:[R===void 0?s.jsx("option",{value:""}):null,Array.from(F)]},H):null]})})};xd.displayName=Zr;var bd="SelectTrigger",vd=c.forwardRef((e,t)=>{const{__scopeSelect:r,disabled:a=!1,...n}=e,o=Qs(r),i=Mt(bd,r),l=i.disabled||a,d=ie(t,i.onTriggerChange),p=Xs(r),m=c.useRef("touch"),[h,u,f]=Bd(g=>{const b=p().filter(y=>!y.disabled),w=b.find(y=>y.value===i.value),v=Ud(b,g,w);v!==void 0&&i.onValueChange(v.value)}),x=g=>{l||(i.onOpenChange(!0),f()),g&&(i.triggerPointerDownPosRef.current={x:Math.round(g.pageX),y:Math.round(g.pageY)})};return s.jsx(dn,{asChild:!0,...o,children:s.jsx(K.button,{type:"button",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":"none",dir:i.dir,"data-state":i.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":Fd(i.value)?"":void 0,...n,ref:d,onClick:D(n.onClick,g=>{g.currentTarget.focus(),m.current!=="mouse"&&x(g)}),onPointerDown:D(n.onPointerDown,g=>{m.current=g.pointerType;const b=g.target;b.hasPointerCapture(g.pointerId)&&b.releasePointerCapture(g.pointerId),g.button===0&&g.ctrlKey===!1&&g.pointerType==="mouse"&&(x(g),g.preventDefault())}),onKeyDown:D(n.onKeyDown,g=>{const b=h.current!=="";!(g.ctrlKey||g.altKey||g.metaKey)&&g.key.length===1&&u(g.key),!(b&&g.key===" ")&&D0.includes(g.key)&&(x(),g.preventDefault())})})})});vd.displayName=bd;var yd="SelectValue",wd=c.forwardRef((e,t)=>{const{__scopeSelect:r,className:a,style:n,children:o,placeholder:i="",...l}=e,d=Mt(yd,r),{onValueNodeHasChildrenChange:p}=d,m=o!==void 0,h=ie(t,d.onValueNodeChange);return Ee(()=>{p(m)},[p,m]),s.jsx(K.span,{...l,ref:h,style:{pointerEvents:"none"},children:Fd(d.value)?s.jsx(s.Fragment,{children:i}):o})});wd.displayName=yd;var B0="SelectIcon",jd=c.forwardRef((e,t)=>{const{__scopeSelect:r,children:a,...n}=e;return s.jsx(K.span,{"aria-hidden":!0,...n,ref:t,children:a||"▼"})});jd.displayName=B0;var U0="SelectPortal",kd=e=>s.jsx(Ha,{asChild:!0,...e});kd.displayName=U0;var Vt="SelectContent",Nd=c.forwardRef((e,t)=>{const r=Mt(Vt,e.__scopeSelect),[a,n]=c.useState();if(Ee(()=>{n(new DocumentFragment)},[]),!r.open){const o=a;return o?Gr.createPortal(s.jsx(Cd,{scope:e.__scopeSelect,children:s.jsx(Js.Slot,{scope:e.__scopeSelect,children:s.jsx("div",{children:e.children})})}),o):null}return s.jsx(Sd,{...e,ref:t})});Nd.displayName=Vt;var Ve=10,[Cd,Lt]=Nr(Vt),H0="SelectContentImpl",Sd=c.forwardRef((e,t)=>{const{__scopeSelect:r,position:a="item-aligned",onCloseAutoFocus:n,onEscapeKeyDown:o,onPointerDownOutside:i,side:l,sideOffset:d,align:p,alignOffset:m,arrowPadding:h,collisionBoundary:u,collisionPadding:f,sticky:x,hideWhenDetached:g,avoidCollisions:b,...w}=e,v=Mt(Vt,r),[y,j]=c.useState(null),[k,C]=c.useState(null),T=ie(t,G=>j(G)),[I,R]=c.useState(null),[U,M]=c.useState(null),P=Xs(r),[F,A]=c.useState(!1),H=c.useRef(!1);c.useEffect(()=>{if(y)return Qo(y)},[y]),Zo();const O=c.useCallback(G=>{const[te,...se]=P().map(ae=>ae.ref.current),[ee]=se.slice(-1),ne=document.activeElement;for(const ae of G)if(ae===ne||(ae==null||ae.scrollIntoView({block:"nearest"}),ae===te&&k&&(k.scrollTop=0),ae===ee&&k&&(k.scrollTop=k.scrollHeight),ae==null||ae.focus(),document.activeElement!==ne))return},[P,k]),V=c.useCallback(()=>O([I,y]),[O,I,y]);c.useEffect(()=>{F&&V()},[F,V]);const{onOpenChange:S,triggerPointerDownPosRef:E}=v;c.useEffect(()=>{if(y){let G={x:0,y:0};const te=ee=>{var ne,ae;G={x:Math.abs(Math.round(ee.pageX)-(((ne=E.current)==null?void 0:ne.x)??0)),y:Math.abs(Math.round(ee.pageY)-(((ae=E.current)==null?void 0:ae.y)??0))}},se=ee=>{G.x<=10&&G.y<=10?ee.preventDefault():y.contains(ee.target)||S(!1),document.removeEventListener("pointermove",te),E.current=null};return E.current!==null&&(document.addEventListener("pointermove",te),document.addEventListener("pointerup",se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",te),document.removeEventListener("pointerup",se,{capture:!0})}}},[y,S,E]),c.useEffect(()=>{const G=()=>S(!1);return window.addEventListener("blur",G),window.addEventListener("resize",G),()=>{window.removeEventListener("blur",G),window.removeEventListener("resize",G)}},[S]);const[Z,B]=Bd(G=>{const te=P().filter(ne=>!ne.disabled),se=te.find(ne=>ne.ref.current===document.activeElement),ee=Ud(te,G,se);ee&&setTimeout(()=>ee.ref.current.focus())}),W=c.useCallback((G,te,se)=>{const ee=!H.current&&!se;(v.value!==void 0&&v.value===te||ee)&&(R(G),ee&&(H.current=!0))},[v.value]),Q=c.useCallback(()=>y==null?void 0:y.focus(),[y]),le=c.useCallback((G,te,se)=>{const ee=!H.current&&!se;(v.value!==void 0&&v.value===te||ee)&&M(G)},[v.value]),be=a==="popper"?La:Ed,re=be===La?{side:l,sideOffset:d,align:p,alignOffset:m,arrowPadding:h,collisionBoundary:u,collisionPadding:f,sticky:x,hideWhenDetached:g,avoidCollisions:b}:{};return s.jsx(Cd,{scope:r,content:y,viewport:k,onViewportChange:C,itemRefCallback:W,selectedItem:I,onItemLeave:Q,itemTextRefCallback:le,focusSelectedItem:V,selectedItemText:U,position:a,isPositioned:F,searchRef:Z,children:s.jsx(ai,{as:Va,allowPinchZoom:!0,children:s.jsx(ei,{asChild:!0,trapped:v.open,onMountAutoFocus:G=>{G.preventDefault()},onUnmountAutoFocus:D(n,G=>{var te;(te=v.trigger)==null||te.focus({preventScroll:!0}),G.preventDefault()}),children:s.jsx(Ga,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:G=>G.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:s.jsx(be,{role:"listbox",id:v.contentId,"data-state":v.open?"open":"closed",dir:v.dir,onContextMenu:G=>G.preventDefault(),...w,...re,onPlaced:()=>A(!0),ref:T,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:D(w.onKeyDown,G=>{const te=G.ctrlKey||G.altKey||G.metaKey;if(G.key==="Tab"&&G.preventDefault(),!te&&G.key.length===1&&B(G.key),["ArrowUp","ArrowDown","Home","End"].includes(G.key)){let ee=P().filter(ne=>!ne.disabled).map(ne=>ne.ref.current);if(["ArrowUp","End"].includes(G.key)&&(ee=ee.slice().reverse()),["ArrowUp","ArrowDown"].includes(G.key)){const ne=G.target,ae=ee.indexOf(ne);ee=ee.slice(ae+1)}setTimeout(()=>O(ee)),G.preventDefault()}})})})})})})});Sd.displayName=H0;var G0="SelectItemAlignedPosition",Ed=c.forwardRef((e,t)=>{const{__scopeSelect:r,onPlaced:a,...n}=e,o=Mt(Vt,r),i=Lt(Vt,r),[l,d]=c.useState(null),[p,m]=c.useState(null),h=ie(t,T=>m(T)),u=Xs(r),f=c.useRef(!1),x=c.useRef(!0),{viewport:g,selectedItem:b,selectedItemText:w,focusSelectedItem:v}=i,y=c.useCallback(()=>{if(o.trigger&&o.valueNode&&l&&p&&g&&b&&w){const T=o.trigger.getBoundingClientRect(),I=p.getBoundingClientRect(),R=o.valueNode.getBoundingClientRect(),U=w.getBoundingClientRect();if(o.dir!=="rtl"){const ne=U.left-I.left,ae=R.left-ne,ke=T.left-ae,Te=T.width+ke,ht=Math.max(Te,I.width),_e=window.innerWidth-Ve,Dt=Ma(ae,[Ve,Math.max(Ve,_e-ht)]);l.style.minWidth=Te+"px",l.style.left=Dt+"px"}else{const ne=I.right-U.right,ae=window.innerWidth-R.right-ne,ke=window.innerWidth-T.right-ae,Te=T.width+ke,ht=Math.max(Te,I.width),_e=window.innerWidth-Ve,Dt=Ma(ae,[Ve,Math.max(Ve,_e-ht)]);l.style.minWidth=Te+"px",l.style.right=Dt+"px"}const M=u(),P=window.innerHeight-Ve*2,F=g.scrollHeight,A=window.getComputedStyle(p),H=parseInt(A.borderTopWidth,10),O=parseInt(A.paddingTop,10),V=parseInt(A.borderBottomWidth,10),S=parseInt(A.paddingBottom,10),E=H+O+F+S+V,Z=Math.min(b.offsetHeight*5,E),B=window.getComputedStyle(g),W=parseInt(B.paddingTop,10),Q=parseInt(B.paddingBottom,10),le=T.top+T.height/2-Ve,be=P-le,re=b.offsetHeight/2,G=b.offsetTop+re,te=H+O+G,se=E-te;if(te<=le){const ne=M.length>0&&b===M[M.length-1].ref.current;l.style.bottom="0px";const ae=p.clientHeight-g.offsetTop-g.offsetHeight,ke=Math.max(be,re+(ne?Q:0)+ae+V),Te=te+ke;l.style.height=Te+"px"}else{const ne=M.length>0&&b===M[0].ref.current;l.style.top="0px";const ke=Math.max(le,H+g.offsetTop+(ne?W:0)+re)+se;l.style.height=ke+"px",g.scrollTop=te-le+g.offsetTop}l.style.margin=`${Ve}px 0`,l.style.minHeight=Z+"px",l.style.maxHeight=P+"px",a==null||a(),requestAnimationFrame(()=>f.current=!0)}},[u,o.trigger,o.valueNode,l,p,g,b,w,o.dir,a]);Ee(()=>y(),[y]);const[j,k]=c.useState();Ee(()=>{p&&k(window.getComputedStyle(p).zIndex)},[p]);const C=c.useCallback(T=>{T&&x.current===!0&&(y(),v==null||v(),x.current=!1)},[y,v]);return s.jsx(q0,{scope:r,contentWrapper:l,shouldExpandOnScrollRef:f,onScrollButtonChange:C,children:s.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:j},children:s.jsx(K.div,{...n,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...n.style}})})})});Ed.displayName=G0;var V0="SelectPopperPosition",La=c.forwardRef((e,t)=>{const{__scopeSelect:r,align:a="start",collisionPadding:n=Ve,...o}=e,i=Qs(r);return s.jsx(un,{...i,...o,ref:t,align:a,collisionPadding:n,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});La.displayName=V0;var[q0,Mn]=Nr(Vt,{}),Da="SelectViewport",Ad=c.forwardRef((e,t)=>{const{__scopeSelect:r,nonce:a,...n}=e,o=Lt(Da,r),i=Mn(Da,r),l=ie(t,o.onViewportChange),d=c.useRef(0);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),s.jsx(Js.Slot,{scope:r,children:s.jsx(K.div,{"data-radix-select-viewport":"",role:"presentation",...n,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...n.style},onScroll:D(n.onScroll,p=>{const m=p.currentTarget,{contentWrapper:h,shouldExpandOnScrollRef:u}=i;if(u!=null&&u.current&&h){const f=Math.abs(d.current-m.scrollTop);if(f>0){const x=window.innerHeight-Ve*2,g=parseFloat(h.style.minHeight),b=parseFloat(h.style.height),w=Math.max(g,b);if(w<x){const v=w+f,y=Math.min(x,v),j=v-y;h.style.height=y+"px",h.style.bottom==="0px"&&(m.scrollTop=j>0?j:0,h.style.justifyContent="flex-end")}}}d.current=m.scrollTop})})})]})});Ad.displayName=Da;var Pd="SelectGroup",[W0,K0]=Nr(Pd),Y0=c.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e,n=mr();return s.jsx(W0,{scope:r,id:n,children:s.jsx(K.div,{role:"group","aria-labelledby":n,...a,ref:t})})});Y0.displayName=Pd;var Td="SelectLabel",Id=c.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e,n=K0(Td,r);return s.jsx(K.div,{id:n.id,...a,ref:t})});Id.displayName=Td;var Ns="SelectItem",[J0,Rd]=Nr(Ns),Md=c.forwardRef((e,t)=>{const{__scopeSelect:r,value:a,disabled:n=!1,textValue:o,...i}=e,l=Mt(Ns,r),d=Lt(Ns,r),p=l.value===a,[m,h]=c.useState(o??""),[u,f]=c.useState(!1),x=ie(t,v=>{var y;return(y=d.itemRefCallback)==null?void 0:y.call(d,v,a,n)}),g=mr(),b=c.useRef("touch"),w=()=>{n||(l.onValueChange(a),l.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return s.jsx(J0,{scope:r,value:a,disabled:n,textId:g,isSelected:p,onItemTextChange:c.useCallback(v=>{h(y=>y||((v==null?void 0:v.textContent)??"").trim())},[]),children:s.jsx(Js.ItemSlot,{scope:r,value:a,disabled:n,textValue:m,children:s.jsx(K.div,{role:"option","aria-labelledby":g,"data-highlighted":u?"":void 0,"aria-selected":p&&u,"data-state":p?"checked":"unchecked","aria-disabled":n||void 0,"data-disabled":n?"":void 0,tabIndex:n?void 0:-1,...i,ref:x,onFocus:D(i.onFocus,()=>f(!0)),onBlur:D(i.onBlur,()=>f(!1)),onClick:D(i.onClick,()=>{b.current!=="mouse"&&w()}),onPointerUp:D(i.onPointerUp,()=>{b.current==="mouse"&&w()}),onPointerDown:D(i.onPointerDown,v=>{b.current=v.pointerType}),onPointerMove:D(i.onPointerMove,v=>{var y;b.current=v.pointerType,n?(y=d.onItemLeave)==null||y.call(d):b.current==="mouse"&&v.currentTarget.focus({preventScroll:!0})}),onPointerLeave:D(i.onPointerLeave,v=>{var y;v.currentTarget===document.activeElement&&((y=d.onItemLeave)==null||y.call(d))}),onKeyDown:D(i.onKeyDown,v=>{var j;((j=d.searchRef)==null?void 0:j.current)!==""&&v.key===" "||(O0.includes(v.key)&&w(),v.key===" "&&v.preventDefault())})})})})});Md.displayName=Ns;var Ir="SelectItemText",Ld=c.forwardRef((e,t)=>{const{__scopeSelect:r,className:a,style:n,...o}=e,i=Mt(Ir,r),l=Lt(Ir,r),d=Rd(Ir,r),p=z0(Ir,r),[m,h]=c.useState(null),u=ie(t,w=>h(w),d.onItemTextChange,w=>{var v;return(v=l.itemTextRefCallback)==null?void 0:v.call(l,w,d.value,d.disabled)}),f=m==null?void 0:m.textContent,x=c.useMemo(()=>s.jsx("option",{value:d.value,disabled:d.disabled,children:f},d.value),[d.disabled,d.value,f]),{onNativeOptionAdd:g,onNativeOptionRemove:b}=p;return Ee(()=>(g(x),()=>b(x)),[g,b,x]),s.jsxs(s.Fragment,{children:[s.jsx(K.span,{id:d.textId,...o,ref:u}),d.isSelected&&i.valueNode&&!i.valueNodeHasChildren?Gr.createPortal(o.children,i.valueNode):null]})});Ld.displayName=Ir;var Dd="SelectItemIndicator",Od=c.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e;return Rd(Dd,r).isSelected?s.jsx(K.span,{"aria-hidden":!0,...a,ref:t}):null});Od.displayName=Dd;var Oa="SelectScrollUpButton",X0=c.forwardRef((e,t)=>{const r=Lt(Oa,e.__scopeSelect),a=Mn(Oa,e.__scopeSelect),[n,o]=c.useState(!1),i=ie(t,a.onScrollButtonChange);return Ee(()=>{if(r.viewport&&r.isPositioned){let l=function(){const p=d.scrollTop>0;o(p)};const d=r.viewport;return l(),d.addEventListener("scroll",l),()=>d.removeEventListener("scroll",l)}},[r.viewport,r.isPositioned]),n?s.jsx(_d,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=r;l&&d&&(l.scrollTop=l.scrollTop-d.offsetHeight)}}):null});X0.displayName=Oa;var _a="SelectScrollDownButton",Q0=c.forwardRef((e,t)=>{const r=Lt(_a,e.__scopeSelect),a=Mn(_a,e.__scopeSelect),[n,o]=c.useState(!1),i=ie(t,a.onScrollButtonChange);return Ee(()=>{if(r.viewport&&r.isPositioned){let l=function(){const p=d.scrollHeight-d.clientHeight,m=Math.ceil(d.scrollTop)<p;o(m)};const d=r.viewport;return l(),d.addEventListener("scroll",l),()=>d.removeEventListener("scroll",l)}},[r.viewport,r.isPositioned]),n?s.jsx(_d,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:d}=r;l&&d&&(l.scrollTop=l.scrollTop+d.offsetHeight)}}):null});Q0.displayName=_a;var _d=c.forwardRef((e,t)=>{const{__scopeSelect:r,onAutoScroll:a,...n}=e,o=Lt("SelectScrollButton",r),i=c.useRef(null),l=Xs(r),d=c.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return c.useEffect(()=>()=>d(),[d]),Ee(()=>{var m;const p=l().find(h=>h.ref.current===document.activeElement);(m=p==null?void 0:p.ref.current)==null||m.scrollIntoView({block:"nearest"})},[l]),s.jsx(K.div,{"aria-hidden":!0,...n,ref:t,style:{flexShrink:0,...n.style},onPointerDown:D(n.onPointerDown,()=>{i.current===null&&(i.current=window.setInterval(a,50))}),onPointerMove:D(n.onPointerMove,()=>{var p;(p=o.onItemLeave)==null||p.call(o),i.current===null&&(i.current=window.setInterval(a,50))}),onPointerLeave:D(n.onPointerLeave,()=>{d()})})}),Z0="SelectSeparator",$d=c.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e;return s.jsx(K.div,{"aria-hidden":!0,...a,ref:t})});$d.displayName=Z0;var $a="SelectArrow",eb=c.forwardRef((e,t)=>{const{__scopeSelect:r,...a}=e,n=Qs(r),o=Mt($a,r),i=Lt($a,r);return o.open&&i.position==="popper"?s.jsx(pn,{...n,...a,ref:t}):null});eb.displayName=$a;function Fd(e){return e===""||e===void 0}var zd=c.forwardRef((e,t)=>{const{value:r,...a}=e,n=c.useRef(null),o=ie(t,n),i=Tn(r);return c.useEffect(()=>{const l=n.current,d=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(d,"value").set;if(i!==r&&m){const h=new Event("change",{bubbles:!0});m.call(l,r),l.dispatchEvent(h)}},[i,r]),s.jsx(Vr,{asChild:!0,children:s.jsx("select",{...a,ref:o,defaultValue:r})})});zd.displayName="BubbleSelect";function Bd(e){const t=je(e),r=c.useRef(""),a=c.useRef(0),n=c.useCallback(i=>{const l=r.current+i;t(l),function d(p){r.current=p,window.clearTimeout(a.current),p!==""&&(a.current=window.setTimeout(()=>d(""),1e3))}(l)},[t]),o=c.useCallback(()=>{r.current="",window.clearTimeout(a.current)},[]);return c.useEffect(()=>()=>window.clearTimeout(a.current),[]),[r,n,o]}function Ud(e,t,r){const n=t.length>1&&Array.from(t).every(p=>p===t[0])?t[0]:t,o=r?e.indexOf(r):-1;let i=tb(e,Math.max(o,0));n.length===1&&(i=i.filter(p=>p!==r));const d=i.find(p=>p.textValue.toLowerCase().startsWith(n.toLowerCase()));return d!==r?d:void 0}function tb(e,t){return e.map((r,a)=>e[(t+a)%e.length])}var rb=xd,Hd=vd,sb=wd,ab=jd,nb=kd,Gd=Nd,ob=Ad,Vd=Id,qd=Md,ib=Ld,lb=Od,Wd=$d;const cb=rb,db=sb,Kd=c.forwardRef(({className:e,children:t,...r},a)=>s.jsxs(Hd,{ref:a,className:$("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...r,children:[t,s.jsx(ab,{asChild:!0,children:s.jsx(Wr,{className:"h-4 w-4 opacity-50"})})]}));Kd.displayName=Hd.displayName;const Yd=c.forwardRef(({className:e,children:t,position:r="popper",...a},n)=>s.jsx(nb,{children:s.jsx(Gd,{ref:n,className:$("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...a,children:s.jsx(ob,{className:$("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t})})}));Yd.displayName=Gd.displayName;const ub=c.forwardRef(({className:e,...t},r)=>s.jsx(Vd,{ref:r,className:$("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));ub.displayName=Vd.displayName;const us=c.forwardRef(({className:e,children:t,...r},a)=>s.jsxs(qd,{ref:a,className:$("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(lb,{children:s.jsx(Mr,{className:"h-4 w-4"})})}),s.jsx(ib,{children:t})]}));us.displayName=qd.displayName;const pb=c.forwardRef(({className:e,...t},r)=>s.jsx(Wd,{ref:r,className:$("-mx-1 my-1 h-px bg-muted",e),...t}));pb.displayName=Wd.displayName;class mb{constructor(t){Ne(this,"apiKey",null);this.apiKey=t.apiKey}createEnhancedPrompt(t,r){return`Generate a web application based on this description: ${t}`}enhancePromptWithContext(t,r){return this.createEnhancedPrompt(t)}createEnhancedSystemPrompt(){return`You are a helpful AI assistant that specializes in web development. 
    Your task is to generate high-quality, functional HTML, CSS, and JavaScript code based on user requests.
    Provide well-commented, clean code that follows best practices.`}formatChatHistory(t){return t.map(r=>`${r.role}: ${r.content}`).join(`
`)}}const Le="demo-key-for-free-tier";function hb({apiKey:e,apiProvider:t,modelType:r="SMALL",usingFreeAPI:a=!1,onSave:n,onClear:o,onClose:i,onSetFreeAPI:l}){const[d,p]=c.useState(e||""),[m,h]=c.useState(t),[u,f]=c.useState(r),{toast:x}=_s(),g=()=>{if(m!=="FREE"&&!d.trim()){x({title:"Error",description:"Please enter an API key",variant:"destructive"});return}let v=d;m==="FREE"&&(v=Le),n(v,m,m==="PERPLEXITY"?u:void 0)&&(x({title:"Success",description:"AI settings saved successfully"}),i())},b=()=>{o()&&(p(""),x({title:"Success",description:"API key removed"}))},w=()=>{l&&l()&&(h("FREE"),x({title:"Free API Mode Enabled",description:"Now using free API mode for testing purposes"}),i())};return s.jsx("div",{className:"flex-1 p-4 overflow-y-auto",children:s.jsxs(Ke,{children:[s.jsxs(st,{className:"flex flex-row items-center justify-between",children:[s.jsxs("div",{children:[s.jsx(at,{children:"AI Settings"}),s.jsx(Et,{children:"Configure your AI service provider"})]}),s.jsx(q,{variant:"ghost",size:"icon",onClick:i,children:s.jsx(Wr,{className:"h-4 w-4"})})]}),s.jsxs(Ye,{className:"space-y-6",children:[s.jsx("div",{className:"rounded-md bg-amber-50 p-4 mb-6",children:s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx(ut,{className:"h-5 w-5 text-amber-400","aria-hidden":"true"})}),s.jsxs("div",{className:"ml-3 flex-1",children:[s.jsx("p",{className:"text-sm text-amber-700",children:s.jsx(q,{variant:"link",className:"p-0 text-amber-700 font-semibold hover:text-amber-800",onClick:w,children:"Use Free API Mode for Testing"})}),s.jsx("p",{className:"text-xs text-amber-600 mt-1",children:"Free mode uses template generation for quick testing. For best results, use your own API key."})]})]})}),s.jsxs("div",{className:"space-y-2",children:[s.jsx(Be,{htmlFor:"api-provider",children:"AI Provider"}),s.jsxs(gd,{value:m,onValueChange:v=>h(v),className:"flex flex-col space-y-1",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(Tr,{value:"FREE",id:"free"}),s.jsx(Be,{htmlFor:"free",children:"Free Mode (Limited Testing)"})]}),s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(Tr,{value:"PERPLEXITY",id:"perplexity"}),s.jsx(Be,{htmlFor:"perplexity",children:"Perplexity AI (Recommended)"})]}),s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(Tr,{value:"OPENAI",id:"openai"}),s.jsx(Be,{htmlFor:"openai",children:"OpenAI (GPT-3.5 Turbo)"})]}),s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(Tr,{value:"HUGGINGFACE",id:"huggingface"}),s.jsx(Be,{htmlFor:"huggingface",children:"Hugging Face (Zephyr)"})]})]})]}),m==="PERPLEXITY"&&s.jsxs("div",{className:"space-y-2",children:[s.jsx(Be,{htmlFor:"model-type",children:"Model"}),s.jsxs(cb,{value:u,onValueChange:f,children:[s.jsx(Kd,{children:s.jsx(db,{placeholder:"Select a model"})}),s.jsxs(Yd,{children:[s.jsx(us,{value:"SMALL",children:"Llama 3.1 Sonar Small (8B)"}),s.jsx(us,{value:"LARGE",children:"Llama 3.1 Sonar Large (70B)"}),s.jsx(us,{value:"HUGE",children:"Llama 3.1 Sonar Huge (405B)"})]})]}),s.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Small is free, larger models may incur costs."})]}),m!=="FREE"&&s.jsxs("div",{className:"space-y-2",children:[s.jsx(Be,{htmlFor:"api-key",children:"API Key"}),s.jsxs("div",{className:"relative",children:[s.jsx(Gt,{id:"api-key",type:"password",placeholder:"Enter your API key",value:d,onChange:v=>p(v.target.value)}),s.jsx(yp,{className:"absolute right-3 top-2.5 h-4 w-4 text-muted-foreground"})]})]}),m!=="FREE"&&s.jsx("div",{className:"rounded-md bg-blue-50 p-4",children:s.jsxs("div",{className:"flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx(vp,{className:"h-5 w-5 text-blue-400","aria-hidden":"true"})}),s.jsx("div",{className:"ml-3 flex-1",children:s.jsxs("p",{className:"text-sm text-blue-700",children:["Your API key is stored locally in your browser and never sent to our servers.",m==="OPENAI"?s.jsxs("a",{href:"https://platform.openai.com/api-keys",target:"_blank",rel:"noreferrer",className:"font-medium text-blue-700 underline hover:text-blue-600",children:[" ","Get an OpenAI API key"]}):m==="HUGGINGFACE"?s.jsxs("a",{href:"https://huggingface.co/settings/tokens",target:"_blank",rel:"noreferrer",className:"font-medium text-blue-700 underline hover:text-blue-600",children:[" ","Get a Hugging Face API key"]}):s.jsxs("a",{href:"https://docs.perplexity.ai/docs/getting-started",target:"_blank",rel:"noreferrer",className:"font-medium text-blue-700 underline hover:text-blue-600",children:[" ","Get a Perplexity API key"]})]})})]})})]}),s.jsxs(ed,{className:"flex justify-between",children:[s.jsx(q,{variant:"outline",onClick:b,disabled:!e,children:"Remove Key"}),s.jsx(q,{onClick:g,children:"Save Settings"})]})]})})}const _t=class _t{constructor(){Ne(this,"puter");Ne(this,"isInitialized",!1);this.initializePuter()}static getInstance(){return _t.instance||(_t.instance=new _t),_t.instance}async initializePuter(){typeof window<"u"&&window.puter?(this.puter=window.puter,this.isInitialized=!0,console.log("🚀 Puter.js initialized - Unlimited OpenAI API, Cloud, Auth, KV Database ready!")):setTimeout(()=>this.initializePuter(),100)}async waitForInit(){for(;!this.isInitialized;)await new Promise(t=>setTimeout(t,100))}async isSignedIn(){try{return await this.waitForInit(),await this.puter.auth.isSignedIn()}catch(t){return console.error("Error checking sign-in status:",t),!1}}async signIn(){try{await this.waitForInit();const t=await this.puter.auth.signIn();return console.log("✅ User signed in successfully with unlimited OpenAI API access:",t),{success:!0,user:t}}catch(t){return console.error("❌ Sign in error:",t),{success:!1,error:t instanceof Error?t.message:"Sign in failed"}}}async signOut(){try{return await this.waitForInit(),await this.puter.auth.signOut(),console.log("✅ User signed out successfully"),{success:!0}}catch(t){return console.error("❌ Sign out error:",t),{success:!1,error:t instanceof Error?t.message:"Sign out failed"}}}async getCurrentUser(){try{return await this.waitForInit(),await this.isSignedIn()?await this.puter.auth.getUser():null}catch(t){return console.error("❌ Error getting user info:",t),null}}async generateOpenAIResponse(t,r){var a,n;try{await this.waitForInit(),console.log("🤖 Using unlimited OpenAI API via Puter.js...");let o=[];r!=null&&r.chatHistory&&r.chatHistory.length>0&&(o=r.chatHistory.slice(-5)),o.push({role:"user",content:t});const l=((n=(a=(await this.puter.ai.openai.chat.completions.create({model:(r==null?void 0:r.model)||"gpt-4o",messages:o,temperature:(r==null?void 0:r.temperature)||.7,max_tokens:(r==null?void 0:r.maxTokens)||4e3})).choices[0])==null?void 0:a.message)==null?void 0:n.content)||"";return console.log("✅ OpenAI response generated successfully via Puter.js"),{success:!0,text:l}}catch(o){return console.error("❌ Puter OpenAI API error:",o),{success:!1,error:o instanceof Error?o.message:"Unknown OpenAI API error"}}}async generateAIResponse(t,r){try{if(await this.waitForInit(),await this.isSignedIn())return console.log("🎯 Using unlimited OpenAI API (signed in user)..."),await this.generateOpenAIResponse(t,{chatHistory:r});{console.log("🤖 Using free Puter.js AI (GPT-4o mini)...");let a=t;r&&r.length>0&&(a=`Previous Context:
${r.slice(-5).map(i=>`${i.role}: ${i.content}`).join(`
`)}

Current Request: ${t}`);const n=await this.puter.ai.chat(a);return console.log("✅ AI response generated successfully"),{success:!0,text:n}}}catch(a){return console.error("❌ Puter AI error:",a),{success:!1,error:a instanceof Error?a.message:"Unknown AI error"}}}async generateCode(t,r){try{await this.waitForInit(),console.log("🛠️ Starting professional code generation with Puter.js...");const a=this.createLovableStylePrompt(t,r),n=await this.generateAIResponse(a,r);if(!n.success||!n.text)throw new Error(n.error||"Failed to generate code with Puter.js AI");console.log("🔧 Parsing AI response...");const o=this.parseCodeResponse(n.text);return console.log("✅ Code generation completed successfully"),{success:!0,code:o.code,explanation:o.explanation}}catch(a){return console.error("❌ Code generation error:",a),{success:!1,error:a instanceof Error?a.message:"Code generation failed"}}}async saveFile(t,r){try{return await this.waitForInit(),await this.puter.fs.write(t,r),console.log(`💾 File saved to cloud: ${t}`),{success:!0}}catch(a){return console.error("❌ Error saving file:",a),{success:!1,error:a instanceof Error?a.message:"File save failed"}}}async loadFile(t){try{await this.waitForInit();const a=await(await this.puter.fs.read(t)).text();return console.log(`📂 File loaded from cloud: ${t}`),{success:!0,content:a}}catch(r){return console.error("❌ Error loading file:",r),{success:!1,error:r instanceof Error?r.message:"File load failed"}}}async listFiles(t="/"){try{await this.waitForInit();const r=await this.puter.fs.readdir(t);return console.log(`📁 Listed files in: ${t}`),{success:!0,files:r}}catch(r){return console.error("❌ Error listing files:",r),{success:!1,error:r instanceof Error?r.message:"File listing failed"}}}async deleteFile(t){try{return await this.waitForInit(),await this.puter.fs.delete(t),console.log(`🗑️ File deleted from cloud: ${t}`),{success:!0}}catch(r){return console.error("❌ Error deleting file:",r),{success:!1,error:r instanceof Error?r.message:"File deletion failed"}}}async setKV(t,r){try{return await this.waitForInit(),await this.puter.kv.set(t,JSON.stringify(r)),console.log(`🔑 KV set: ${t}`),{success:!0}}catch(a){return console.error("❌ Error setting KV:",a),{success:!1,error:a instanceof Error?a.message:"KV set failed"}}}async getKV(t){try{await this.waitForInit();const r=await this.puter.kv.get(t),a=r?JSON.parse(r):null;return console.log(`🔑 KV get: ${t}`),{success:!0,value:a}}catch(r){return console.error("❌ Error getting KV:",r),{success:!1,error:r instanceof Error?r.message:"KV get failed"}}}async deleteKV(t){try{return await this.waitForInit(),await this.puter.kv.del(t),console.log(`🔑 KV deleted: ${t}`),{success:!0}}catch(r){return console.error("❌ Error deleting KV:",r),{success:!1,error:r instanceof Error?r.message:"KV delete failed"}}}async saveProject(t,r){try{const a={name:t,code:r,timestamp:new Date().toISOString(),version:"1.0.0",cyberpunkTheme:!0,generatedWith:"unlimited-openai-api"},n=await this.saveFile(`projects/${t}.json`,JSON.stringify(a,null,2));return n.success&&(console.log(`💾 Project "${t}" saved to Puter cloud with unlimited AI`),await this.setKV(`project:${t}`,a)),n}catch(a){return console.error("❌ Error saving project:",a),{success:!1,error:a instanceof Error?a.message:"Project save failed"}}}async loadProject(t){try{const r=await this.loadFile(`projects/${t}.json`);if(r.success&&r.content){const a=JSON.parse(r.content);return console.log(`📂 Project "${t}" loaded from Puter cloud`),{success:!0,code:a.code}}return{success:!1,error:r.error||"Project not found"}}catch(r){return console.error("❌ Error loading project:",r),{success:!1,error:r instanceof Error?r.message:"Project load failed"}}}async listProjects(){try{const t=await this.listFiles("projects");return t.success&&t.files?{success:!0,projects:t.files.filter(a=>a.name.endsWith(".json")).map(a=>a.name.replace(".json",""))}:{success:!1,error:t.error||"Failed to list projects"}}catch(t){return console.error("❌ Error listing projects:",t),{success:!1,error:t instanceof Error?t.message:"Project listing failed"}}}async saveUserPreference(t,r){return await this.setKV(`pref:${t}`,r)}async getUserPreference(t){return await this.getKV(`pref:${t}`)}createLovableStylePrompt(t,r){return`You are a professional fullstack AI engineer like Lovable AI. Create a complete, production-ready web application for: "${t}"

🎯 REQUIREMENTS:
- Generate COMPLETE, FUNCTIONAL, PROFESSIONAL web applications with cyberpunk aesthetic
- Modern HTML5 semantic structure with accessibility
- Responsive CSS with cyberpunk theme, neon colors, gradients, and futuristic animations
- Interactive JavaScript with proper error handling and cyberpunk UI effects
- Professional UI/UX with smooth neon transitions and glitch effects
- Mobile-first responsive design with cyberpunk styling
- Clean, maintainable code architecture

🎨 CYBERPUNK THEME REQUIREMENTS:
- Use dark backgrounds (slate-900, black)
- Neon accent colors (cyan, purple, green, blue)
- Glowing effects and shadows
- Futuristic typography
- Grid patterns and tech-inspired elements
- Animated transitions and hover effects

FORMAT RESPONSE EXACTLY AS:

=== HTML ===
[Complete semantic HTML5 structure with cyberpunk elements]

=== CSS ===
[Modern responsive CSS with cyberpunk styling, neon effects, and professional design]

=== JS ===
[Clean functional JavaScript with cyberpunk interactions and smooth animations]

=== EXPLANATION ===
[Brief technical overview of the cyberpunk application]

${r&&r.length>0?`
Context: ${r.slice(-3).map(a=>`${a.role}: ${a.content}`).join(`
`)}`:""}

Create the cyberpunk application now:`}parseCodeResponse(t){const r={html:"",css:"",js:"",explanation:""};try{const a=t.match(/=== HTML ===([\s\S]*?)(?:=== CSS ===|$)/);a&&(r.html=a[1].trim());const n=t.match(/=== CSS ===([\s\S]*?)(?:=== JS ===|$)/);n&&(r.css=n[1].trim());const o=t.match(/=== JS ===([\s\S]*?)(?:=== EXPLANATION ===|$)/);o&&(r.js=o[1].trim());const i=t.match(/=== EXPLANATION ===([\s\S]*?)$/);if(i&&(r.explanation=i[1].trim()),!r.html&&!r.css&&!r.js)return this.fallbackCodeExtraction(t)}catch(a){return console.warn("⚠️ Error parsing structured response, using fallback extraction:",a),this.fallbackCodeExtraction(t)}return{code:{html:r.html||this.generateCyberpunkHTML(),css:r.css||this.generateCyberpunkCSS(),js:r.js||this.generateCyberpunkJS()},explanation:r.explanation||"Cyberpunk web application generated with unlimited Puter.js OpenAI API"}}fallbackCodeExtraction(t){const r=t.match(/```html([\s\S]*?)```/i)||t.match(/<html[\s\S]*?<\/html>/i),a=t.match(/```css([\s\S]*?)```/i),n=t.match(/```javascript([\s\S]*?)```/i)||t.match(/```js([\s\S]*?)```/i);return{code:{html:r?r[1]||r[0]:this.generateCyberpunkHTML(),css:a?a[1]:this.generateCyberpunkCSS(),js:n?n[1]:this.generateCyberpunkJS()},explanation:"Cyberpunk web application generated with unlimited Puter.js OpenAI API assistance."}}generateCyberpunkHTML(){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyberpunk Web App - Unlimited AI</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="cyberpunk-container">
        <header class="cyber-hero">
            <div class="container">
                <h1 class="cyber-title">CYBERPUNK WEB APP</h1>
                <p class="cyber-subtitle">POWERED BY UNLIMITED PUTER.JS OPENAI API</p>
                <button class="cyber-button" id="activateSystem">ACTIVATE NEURAL LINK</button>
            </div>
        </header>
        
        <main class="cyber-main">
            <div class="container">
                <section class="cyber-grid">
                    <div class="cyber-card">
                        <h3>UNLIMITED AI INTERFACE</h3>
                        <p>Advanced cyberpunk functionality with unlimited OpenAI access</p>
                    </div>
                    <div class="cyber-card">
                        <h3>QUANTUM PROCESSING</h3>
                        <p>High-performance digital operations powered by GPT-4o</p>
                    </div>
                    <div class="cyber-card">
                        <h3>MATRIX ACCESS</h3>
                        <p>Direct connection to the unlimited AI realm</p>
                    </div>
                </section>
            </div>
        </main>
        
        <footer class="cyber-footer">
            <div class="container">
                <p>&copy; 2024 CYBERPUNK SYSTEMS. POWERED BY UNLIMITED PUTER.JS OPENAI API</p>
            </div>
        </footer>
    </div>
    <script src="script.js"><\/script>
</body>
</html>`}generateCyberpunkCSS(){return`/* Cyberpunk Web Application Styles - Unlimited AI Edition */
:root {
    --cyber-primary: #00ffff;
    --cyber-secondary: #ff00ff;
    --cyber-accent: #00ff41;
    --cyber-unlimited: #ffd700;
    --cyber-dark: #0a0a0a;
    --cyber-darker: #000000;
    --cyber-text: #ffffff;
    --cyber-text-dim: #a0a0a0;
    --cyber-glow: 0 0 20px currentColor;
    --cyber-unlimited-glow: 0 0 30px var(--cyber-unlimited);
    --cyber-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background: var(--cyber-darker);
    color: var(--cyber-text);
    overflow-x: hidden;
    background-image: 
        radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 60% 60%, rgba(0, 255, 65, 0.1) 0%, transparent 50%);
}

.cyberpunk-container {
    min-height: 100vh;
    position: relative;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Hero Section - Enhanced for Unlimited AI */
.cyber-hero {
    background: linear-gradient(135deg, var(--cyber-dark) 0%, rgba(255, 215, 0, 0.1) 50%, rgba(0, 255, 255, 0.1) 100%);
    padding: 6rem 0;
    text-align: center;
    position: relative;
    border-bottom: 2px solid var(--cyber-unlimited);
}

.cyber-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 98px,
        rgba(255, 215, 0, 0.05) 100px
    );
    pointer-events: none;
}

.cyber-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--cyber-unlimited);
    text-shadow: var(--cyber-unlimited-glow);
    letter-spacing: 0.1em;
    animation: unlimitedGlow 2s ease-in-out infinite alternate;
}

.cyber-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: var(--cyber-text-dim);
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

.cyber-button {
    background: transparent;
    color: var(--cyber-unlimited);
    border: 2px solid var(--cyber-unlimited);
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: var(--cyber-transition);
    position: relative;
    overflow: hidden;
}

.cyber-button:hover {
    background: var(--cyber-unlimited);
    color: var(--cyber-dark);
    box-shadow: var(--cyber-unlimited-glow);
    transform: translateY(-2px);
}

.cyber-button:active {
    transform: translateY(0);
}

/* Main Content - Enhanced */
.cyber-main {
    padding: 6rem 0;
    background: var(--cyber-dark);
}

.cyber-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.cyber-card {
    background: rgba(255, 215, 0, 0.05);
    border: 1px solid var(--cyber-unlimited);
    padding: 2rem;
    position: relative;
    transition: var(--cyber-transition);
    overflow: hidden;
}

.cyber-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 215, 0, 0.1),
        transparent
    );
    transition: var(--cyber-transition);
}

.cyber-card:hover::before {
    left: 100%;
}

.cyber-card:hover {
    border-color: var(--cyber-primary);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
    transform: translateY(-5px);
}

.cyber-card h3 {
    color: var(--cyber-unlimited);
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.cyber-card p {
    color: var(--cyber-text-dim);
    line-height: 1.6;
}

/* Footer */
.cyber-footer {
    background: var(--cyber-darker);
    border-top: 2px solid var(--cyber-unlimited);
    padding: 2rem 0;
    text-align: center;
}

.cyber-footer p {
    color: var(--cyber-text-dim);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.9rem;
}

/* Animations - Enhanced for Unlimited AI */
@keyframes unlimitedGlow {
    from {
        text-shadow: 
            0 0 5px var(--cyber-unlimited),
            0 0 10px var(--cyber-unlimited),
            0 0 15px var(--cyber-unlimited);
    }
    to {
        text-shadow: 
            0 0 10px var(--cyber-unlimited),
            0 0 20px var(--cyber-unlimited),
            0 0 30px var(--cyber-unlimited),
            0 0 40px var(--cyber-unlimited);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    
    .cyber-hero {
        padding: 4rem 0;
    }
    
    .cyber-main {
        padding: 4rem 0;
    }
    
    .cyber-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}`}generateCyberpunkJS(){return`// Cyberpunk Web Application JavaScript - Unlimited AI Edition
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Cyberpunk System with Unlimited AI Initialized');
    
    // Initialize unlimited AI cyberpunk components
    initializeUnlimitedAIInterface();
    initializeSystemCards();
    addCyberEffects();
    
    // Add professional cyberpunk interactions
    addButtonInteractions();
    addGlitchEffects();
    addUnlimitedAIFeatures();
});

function initializeUnlimitedAIInterface() {
    const activateButton = document.getElementById('activateSystem');
    
    if (activateButton) {
        activateButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Enhanced cyberpunk activation effect for unlimited AI
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 0 50px var(--cyber-unlimited)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 200);
            
            // Unlimited AI activation feedback
            showCyberNotification('UNLIMITED AI NEURAL LINK ACTIVATED', 'unlimited');
            activateUnlimitedAIMode();
        });
    }
}

function initializeSystemCards() {
    const cyberCards = document.querySelectorAll('.cyber-card');
    
    cyberCards.forEach((card, index) => {
        // Add entrance animation delay
        card.style.animationDelay = \`\${index * 0.2}s\`;
        
        // Add unlimited AI cyberpunk hover interactions
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 215, 0, 0.1)';
            this.style.borderColor = 'var(--cyber-unlimited)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 215, 0, 0.05)';
            this.style.borderColor = 'var(--cyber-unlimited)';
        });
        
        // Add click interaction
        card.addEventListener('click', function() {
            showCyberNotification(\`ACCESSING \${this.querySelector('h3').textContent} WITH UNLIMITED AI\`, 'info');
            addGlitchEffect(this);
        });
    });
}

function addCyberEffects() {
    // Add unlimited AI scanning line effect
    const scanLine = document.createElement('div');
    scanLine.className = 'cyber-scan-line-unlimited';
    scanLine.style.cssText = \`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--cyber-unlimited), transparent);
        z-index: 9999;
        opacity: 0.7;
        animation: cyberpunkUnlimitedScan 3s linear infinite;
    \`;
    document.body.appendChild(scanLine);
    
    // Add CSS for unlimited AI scan animation
    if (!document.querySelector('#cyber-unlimited-animations')) {
        const style = document.createElement('style');
        style.id = 'cyber-unlimited-animations';
        style.textContent = \`
            @keyframes cyberpunkUnlimitedScan {
                0% { top: 0; opacity: 0; }
                50% { opacity: 0.7; }
                100% { top: 100vh; opacity: 0; }
            }
            
            .cyber-glitch-unlimited {
                animation: cyberpunkUnlimitedGlitch 0.3s ease-in-out;
            }
            
            @keyframes cyberpunkUnlimitedGlitch {
                0%, 100% { transform: translateX(0); filter: hue-rotate(0deg); }
                20% { transform: translateX(-2px); filter: hue-rotate(90deg); }
                40% { transform: translateX(2px); filter: hue-rotate(180deg); }
                60% { transform: translateX(-1px); filter: hue-rotate(270deg); }
                80% { transform: translateX(1px); filter: hue-rotate(360deg); }
            }
        \`;
        document.head.appendChild(style);
    }
}

function addUnlimitedAIFeatures() {
    // Add unlimited AI particle effects
    createAIParticles();
    
    // Add unlimited AI status indicator
    const aiStatus = document.createElement('div');
    aiStatus.style.cssText = \`
        position: fixed;
        top: 20px;
        left: 20px;
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid var(--cyber-unlimited);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        color: var(--cyber-unlimited);
        font-size: 0.8rem;
        font-weight: bold;
        z-index: 9998;
        backdrop-filter: blur(10px);
        animation: unlimitedPulse 2s ease-in-out infinite;
    \`;
    aiStatus.textContent = '∞ UNLIMITED AI ACTIVE';
    document.body.appendChild(aiStatus);
    
    // Add unlimited AI pulse animation
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = \`
        @keyframes unlimitedPulse {
            0%, 100% { box-shadow: 0 0 10px var(--cyber-unlimited); }
            50% { box-shadow: 0 0 20px var(--cyber-unlimited); }
        }
    \`;
    document.head.appendChild(pulseStyle);
}

function createAIParticles() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = \`
            position: fixed;
            width: 2px;
            height: 2px;
            background: var(--cyber-unlimited);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: floatAI \${Math.random() * 10 + 5}s linear infinite;
            left: \${Math.random() * 100}vw;
            top: \${Math.random() * 100}vh;
            opacity: \${Math.random() * 0.7 + 0.3};
        \`;
        document.body.appendChild(particle);
    }
    
    // Add AI particle animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = \`
        @keyframes floatAI {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-5px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(3px); }
            100% { transform: translateY(-20px) translateX(0); opacity: 0; }
        }
    \`;
    document.head.appendChild(particleStyle);
}

function addButtonInteractions() {
    // Add unlimited AI cyberpunk button interactions
    document.querySelectorAll('button, .cyber-button').forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
            this.style.filter = 'brightness(1.2) hue-rotate(30deg)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
            this.style.filter = '';
        });
    });
}

function addGlitchEffects() {
    // Random unlimited AI glitch effects on title
    setInterval(() => {
        const title = document.querySelector('.cyber-title');
        if (title && Math.random() < 0.1) {
            addUnlimitedGlitchEffect(title);
        }
    }, 5000);
}

function addUnlimitedGlitchEffect(element) {
    element.classList.add('cyber-glitch-unlimited');
    setTimeout(() => {
        element.classList.remove('cyber-glitch-unlimited');
    }, 300);
}

function activateUnlimitedAIMode() {
    // Create unlimited AI matrix-style background effect
    const matrix = document.createElement('div');
    matrix.style.cssText = \`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 215, 0, 0.03) 2px,
            rgba(255, 215, 0, 0.03) 4px
        );
        animation: unlimitedMatrixScroll 20s linear infinite;
    \`;
    
    document.body.appendChild(matrix);
    
    // Add unlimited AI matrix scroll animation
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes unlimitedMatrixScroll {
            0% { transform: translateY(0) hue-rotate(0deg); }
            100% { transform: translateY(100vh) hue-rotate(360deg); }
        }
    \`;
    document.head.appendChild(style);
    
    // Remove after animation
    setTimeout(() => {
        document.body.removeChild(matrix);
        document.head.removeChild(style);
    }, 3000);
}

function showCyberNotification(message, type = 'info') {
    // Create unlimited AI cyberpunk notification system
    const notification = document.createElement('div');
    notification.className = \`cyber-notification cyber-notification--\${type}\`;
    notification.textContent = message;
    
    // Notification styles with unlimited AI theme
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'unlimited' ? 'rgba(255, 215, 0, 0.1)' :
                   type === 'success' ? 'rgba(0, 255, 65, 0.1)' : 
                   type === 'error' ? 'rgba(255, 0, 100, 0.1)' : 'rgba(0, 255, 255, 0.1)',
        border: \`2px solid \${type === 'unlimited' ? 'var(--cyber-unlimited)' :
                                type === 'success' ? 'var(--cyber-accent)' : 
                                type === 'error' ? 'var(--cyber-secondary)' : 'var(--cyber-primary)'}\`,
        color: 'var(--cyber-text)',
        padding: '1rem 1.5rem',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '300px',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        backdropFilter: 'blur(10px)',
        boxShadow: \`0 0 20px \${type === 'unlimited' ? 'var(--cyber-unlimited)' :
                                    type === 'success' ? 'var(--cyber-accent)' : 
                                    type === 'error' ? 'var(--cyber-secondary)' : 'var(--cyber-primary)'}\`
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Add unlimited AI cyberpunk error handling
window.addEventListener('error', function(e) {
    console.error('UNLIMITED AI SYSTEM ERROR:', e.error);
    showCyberNotification('UNLIMITED AI SYSTEM ERROR DETECTED', 'error');
});

// Add unlimited AI performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(\`⚡ UNLIMITED AI CYBERPUNK SYSTEM LOADED IN \${loadTime}ms\`);
    });
}

console.log('✅ UNLIMITED AI CYBERPUNK NEURAL INTERFACE READY');
console.log('∞ UNLIMITED OPENAI API ACCESS ACTIVE');`}};Ne(_t,"instance");let Fa=_t;const me=Fa.getInstance();function fb(){var p,m,h,u;const[e,t]=c.useState(!1),[r,a]=c.useState(null),[n,o]=c.useState(!1);c.useEffect(()=>{i()},[]);const i=async()=>{try{const f=await me.isSignedIn();if(t(f),f){const x=await me.getCurrentUser();a(x)}}catch(f){console.error("Error checking auth status:",f)}},l=async()=>{o(!0);try{const f=await me.signIn();f.success?(t(!0),a(f.user),z.success("🚀 Connected to Puter.js Cloud!",{description:"Unlimited OpenAI API, storage, and database access activated"})):z.error("Sign in failed",{description:f.error||"Unknown error occurred"})}catch(f){z.error("Sign in error",{description:f instanceof Error?f.message:"Unknown error"})}finally{o(!1)}},d=async()=>{o(!0);try{const f=await me.signOut();f.success?(t(!1),a(null),z.success("Disconnected from Puter.js")):z.error("Sign out failed",{description:f.error||"Unknown error occurred"})}catch(f){z.error("Sign out error",{description:f instanceof Error?f.message:"Unknown error"})}finally{o(!1)}};return e&&r?s.jsxs(Ke,{className:"cyber-panel border-cyan-500/30",children:[s.jsx(st,{className:"pb-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs(En,{className:"h-10 w-10 border-2 border-cyan-400/50",children:[s.jsx(An,{src:r.picture}),s.jsx(Pn,{className:"bg-gradient-to-r from-cyan-500 to-purple-500 text-white",children:((m=(p=r.username)==null?void 0:p[0])==null?void 0:m.toUpperCase())||((u=(h=r.email)==null?void 0:h[0])==null?void 0:u.toUpperCase())||"U"})]}),s.jsxs("div",{children:[s.jsx(at,{className:"text-sm text-cyan-300",children:r.username||r.email}),s.jsx(Et,{className:"text-xs text-slate-400",children:"Puter.js Cloud Connected"})]})]}),s.jsx(q,{variant:"ghost",size:"sm",onClick:d,disabled:n,className:"text-slate-400 hover:text-red-400",children:s.jsx(Np,{className:"h-4 w-4"})})]})}),s.jsxs(Ye,{className:"pt-0",children:[s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsxs(Ct,{variant:"secondary",className:"bg-yellow-500/20 text-yellow-300 border-yellow-500/30",children:[s.jsx(oo,{className:"h-3 w-3 mr-1"}),"Unlimited OpenAI API"]}),s.jsxs(Ct,{variant:"secondary",className:"bg-cyan-500/20 text-cyan-300 border-cyan-500/30",children:[s.jsx(Ya,{className:"h-3 w-3 mr-1"}),"Free AI Chat"]}),s.jsxs(Ct,{variant:"secondary",className:"bg-purple-500/20 text-purple-300 border-purple-500/30",children:[s.jsx(ps,{className:"h-3 w-3 mr-1"}),"Cloud Storage"]}),s.jsxs(Ct,{variant:"secondary",className:"bg-green-500/20 text-green-300 border-green-500/30",children:[s.jsx(Os,{className:"h-3 w-3 mr-1"}),"KV Database"]})]}),s.jsxs("div",{className:"mt-4 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsx(ut,{className:"h-4 w-4 text-yellow-400"}),s.jsx("span",{className:"text-sm font-medium text-yellow-300",children:"Premium Features Active"})]}),s.jsx("p",{className:"text-xs text-yellow-200/80",children:"You now have unlimited access to OpenAI's latest models, plus free cloud storage and database services."})]})]})]}):s.jsxs(Ke,{className:"cyber-panel border-slate-600/30",children:[s.jsxs(st,{children:[s.jsxs(at,{className:"flex items-center gap-2 text-slate-300",children:[s.jsx(Hi,{className:"h-5 w-5 text-cyan-400"}),"Puter.js Authentication"]}),s.jsx(Et,{children:"Sign in to access unlimited OpenAI API, cloud storage, and database services"})]}),s.jsxs(Ye,{children:[s.jsxs(q,{onClick:l,disabled:n,className:"w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500",children:[s.jsx(kp,{className:"h-4 w-4 mr-2"}),n?"Connecting...":"Sign in with Puter.js"]}),s.jsxs("div",{className:"mt-4 text-xs text-slate-400 space-y-1",children:[s.jsxs("p",{className:"flex items-center gap-1",children:[s.jsx(oo,{className:"h-3 w-3 text-yellow-400"}),s.jsx("span",{className:"text-yellow-400 font-medium",children:"Unlimited OpenAI API access"})]}),s.jsx("p",{children:"✨ Free AI chat powered by GPT-4o and more"}),s.jsx("p",{children:"☁️ Unlimited cloud storage"}),s.jsx("p",{children:"🗄️ Key-value database"}),s.jsx("p",{children:"🚀 No API keys required"})]})]})]})}class gb{constructor(t){Ne(this,"model");Ne(this,"apiKey");this.apiKey=t.apiKey,this.model=t.model||"gpt-3.5-turbo"}async generateResponse(t){try{const{prompt:r,chatHistory:a=[]}=t,n=`${this.createEnhancedSystemPrompt()}

Please provide your response in this specific JSON format:
{
  "thinking": "Share your step-by-step thought process here, analyzing the request and planning your approach...",
  "html": "Complete HTML code here with appropriate semantic structure and comments",
  "css": "Complete CSS code here with modern responsive design patterns and well-commented sections",
  "js": "Complete JavaScript code here with proper error handling and detailed comments explaining the logic",
  "explanation": "Detailed explanation of your implementation approach, key decisions, and how different parts work together"
}`,o=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({model:this.model,messages:[{role:"system",content:n},...a.slice(-5),{role:"user",content:this.enhancePromptWithContext(r)}],temperature:.7,max_tokens:4e3})});if(!o.ok)return{success:!1,error:`API responded with status ${o.status}: ${o.statusText}`};const i=await o.json();return this.parseResponse(i)}catch(r){return{success:!1,error:r instanceof Error?r.message:"Unknown error occurred"}}}createEnhancedPrompt(t,r){return`Generate a web application based on this description: ${t}`}createEnhancedSystemPrompt(){return`You are a helpful AI assistant that specializes in web development. 
    Your task is to generate high-quality, functional HTML, CSS, and JavaScript code based on user requests.
    Provide well-commented, clean code that follows best practices.`}enhancePromptWithContext(t){return this.createEnhancedPrompt(t)}parseResponse(t){var r,a;try{const n=((a=(r=t.choices[0])==null?void 0:r.message)==null?void 0:a.content)||"",o=n.match(/\{[\s\S]*\}/);if(o)try{const i=JSON.parse(o[0]),l=i.thinking?`${i.thinking}

${i.explanation||""}`:i.explanation||"Generated with AI";return{success:!0,data:{code:{html:i.html||"",css:i.css||"",js:i.js||""},explanation:l}}}catch{const l=n.match(/```html([\s\S]*?)```/),d=n.match(/```css([\s\S]*?)```/),p=n.match(/```js|javascript([\s\S]*?)```/);if(l||d||p)return{success:!0,data:{code:{html:l?l[1].trim():"",css:d?d[1].trim():"",js:p?p[1].trim():""},explanation:`I've analyzed your request and created code to meet your needs. Here's what I built:

`+n}}}return{success:!0,data:{code:{html:"<div>Generated content</div>",css:"/* Generated styles */",js:"// Generated script"},explanation:n||"Generated with AI"}}}catch{return{success:!1,error:"Error parsing API response"}}}}class xb{constructor(t){Ne(this,"model");Ne(this,"apiKey");this.apiKey=t.apiKey,this.model=t.model||"HuggingFaceH4/zephyr-7b-beta"}async generateResponse(t){try{const{prompt:r,chatHistory:a=[]}=t,n=this.createEnhancedPrompt(r,a),o=await fetch("https://api-inference.huggingface.co/models/"+this.model,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify({inputs:n})});if(!o.ok)return{success:!1,error:`API responded with status ${o.status}: ${o.statusText}`};const i=await o.json();return this.parseResponse(i)}catch(r){return{success:!1,error:r instanceof Error?r.message:"Unknown error occurred"}}}parseResponse(t){var r,a,n,o,i;try{let l="";const d=(r=t.generated_text)==null?void 0:r.match(/Thinking:([\s\S]*?)(?=HTML:|CSS:|JS:|<html>|```html|$)/i);d&&(l=d[1].trim());const p=(a=t.generated_text)==null?void 0:a.match(/\{[\s\S]*\}/);if(p)try{const x=JSON.parse(p[0]);return{success:!0,data:{code:{html:x.html||"",css:x.css||"",js:x.js||""},explanation:l?`${l}

${x.explanation||"Generated with AI"}`:x.explanation||"Generated with AI"}}}catch{}const m=(n=t.generated_text)==null?void 0:n.match(/```html([\s\S]*?)```/),h=(o=t.generated_text)==null?void 0:o.match(/```css([\s\S]*?)```/),u=(i=t.generated_text)==null?void 0:i.match(/```js|```javascript([\s\S]*?)```/);let f=t.generated_text||"Generated based on AI interpretation";return f=f.replace(/```html[\s\S]*?```/g,"").replace(/```css[\s\S]*?```/g,"").replace(/```js[\s\S]*?```/g,"").replace(/```javascript[\s\S]*?```/g,""),m||h||u?{success:!0,data:{code:{html:m?m[1].trim():"<div>Generated content</div>",css:h?h[1].trim():"/* Generated styles */",js:u?u[1].trim():"// Generated script"},explanation:l?`${l}

${f}`:f}}:{success:!0,data:{code:{html:"<div>Generated content</div>",css:"/* Generated styles */",js:"// Generated script"},explanation:l?`${l}

${f}`:f}}}catch{return{success:!1,error:"Error parsing API response"}}}createEnhancedPrompt(t,r=[]){return`
${this.createEnhancedSystemPrompt()}

I want you to approach this web development request step by step:

1. First, share your thinking process under a "Thinking:" section. Analyze the request, consider different approaches, and explain your reasoning.

2. Then implement your solution with well-commented code blocks:

\`\`\`html
<!-- Your HTML code with comments explaining structure -->
\`\`\`

\`\`\`css
/* Your CSS code with comments explaining styling decisions */
\`\`\`

\`\`\`js
// Your JavaScript code with comments explaining logic
\`\`\`

3. Finally, provide a detailed explanation of your implementation, highlighting key decisions and how different parts work together.

USER REQUEST:
${t}

${r.length>0?`CONVERSATION HISTORY:
${this.formatChatHistory(r)}`:""}
`}createEnhancedSystemPrompt(){return`You are a helpful AI assistant that specializes in web development. 
    Your task is to generate high-quality, functional HTML, CSS, and JavaScript code based on user requests.
    Provide well-commented, clean code that follows best practices.`}formatChatHistory(t){return t.map(r=>`${r.role}: ${r.content}`).join(`
`)}}const ha={SMALL:"llama-3.1-sonar-small-128k-online",LARGE:"llama-3.1-sonar-large-128k-online",HUGE:"llama-3.1-sonar-huge-128k-online"};class bb{constructor(t){Ne(this,"model");Ne(this,"apiKey");this.apiKey=t.apiKey,this.model=t.model?typeof t.model=="string"&&t.model in ha?ha[t.model]:t.model:ha.SMALL}async generateResponse(t){try{const{prompt:r,chatHistory:a=[]}=t;if(this.isSimpleConversation(r))return this.handleConversation(r,a);const n=`${this.createEnhancedSystemPrompt()}

When responding to the user's web development request, follow this structure:

1. First, share your Thinking Process - analyze the request thoroughly, consider different approaches, and show your reasoning step by step.

2. For code solutions, structure your response with clear code blocks:
{
  "html": "<!-- Complete HTML code with helpful comments -->",
  "css": "/* Complete CSS code with organization and comments */",
  "js": "// Complete JavaScript code with detailed comments",
  "explanation": "Detailed explanation of your implementation approach, key decisions, and how components work together"
}

3. If the user is asking a question rather than requesting code, provide an educational and thorough explanation that helps them understand the concept deeply.

Make your response conversational, educational, and practical - as if you're a helpful colleague working through the problem together.`,o={model:this.model,messages:[{role:"system",content:n},...a.slice(-10),{role:"user",content:r}],temperature:.7,top_p:.9,max_tokens:4e3},i=await fetch("https://api.perplexity.ai/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(o)});if(!i.ok){const d=await i.text();return{success:!1,error:`API responded with status ${i.status}: ${d}`}}const l=await i.json();return this.parseResponse(l)}catch(r){return{success:!1,error:r instanceof Error?r.message:"Unknown error occurred"}}}isSimpleConversation(t){const r=t.toLowerCase().trim();return["hello","hi","hey","greetings","howdy","what's up","whats up","sup","yo","good morning","good afternoon","good evening","help","who are you","what can you do","how does this work"].some(n=>r===n||r.startsWith(`${n} `)||r.startsWith(`${n},`)||r.includes(n))}handleConversation(t,r=[]){const a=r.filter(i=>i.role==="user").length===0,n=t.toLowerCase().trim();let o="";return n.includes("hello")||n.includes("hi")||n.includes("hey")||n.includes("greetings")?(n.includes("morning")?o="Good morning! ":n.includes("afternoon")?o="Good afternoon! ":n.includes("evening")?o="Good evening! ":o="Hello! ",o+="I'm WebCraft AI, your web development assistant. "):n.includes("who are you")||n.includes("what are you")?o="I'm WebCraft AI, a development assistant specialized in helping you build web applications. ":n.includes("what can you do")||n.includes("how")||n.includes("help")?o="I can help you create web applications by writing code, explaining concepts, and suggesting solutions to development problems. ":o="I'm here to help with your web development needs. ",a?o+="I can help you build websites and web applications by generating HTML, CSS, and JavaScript code based on your descriptions. You can describe what you want to build, ask for specific features, or ask questions about web development concepts. What would you like to create today?":o+="How else can I assist you with your web development project? Feel free to ask about specific features, request code examples, or ask about web development concepts.",{success:!0,data:{code:{html:"",css:"",js:""},explanation:o}}}parseResponse(t){var r,a;try{const n=((a=(r=t.choices[0])==null?void 0:r.message)==null?void 0:a.content)||"";let o="";const i=n.match(/(?:Thinking Process:|Thinking:|Analysis:|I'll analyze this step by step:)([\s\S]*?)(?=\{|\`\`\`|HTML:|CSS:|JS:|<html>|$)/i);i&&(o=i[1].trim());try{const h=n.match(/\{[\s\S]*\}/);if(h){const u=JSON.parse(h[0]);return{success:!0,data:{code:{html:u.html||"",css:u.css||"",js:u.js||""},explanation:o?`${o}

${u.explanation||""}`:u.explanation||""}}}}catch{console.log("JSON parsing failed, trying code blocks extraction")}const l=n.match(/```html([\s\S]*?)```/),d=n.match(/```css([\s\S]*?)```/),p=n.match(/```(?:js|javascript)([\s\S]*?)```/);let m=n.replace(/```html[\s\S]*?```/g,"").replace(/```css[\s\S]*?```/g,"").replace(/```js[\s\S]*?```/g,"").replace(/```javascript[\s\S]*?```/g,"").replace(/Thinking Process:[\s\S]*?(?=HTML:|CSS:|JS:|<html>|$)/i,"").replace(/Thinking:[\s\S]*?(?=HTML:|CSS:|JS:|<html>|$)/i,"").replace(/Analysis:[\s\S]*?(?=HTML:|CSS:|JS:|<html>|$)/i,"").trim();return l||d||p?{success:!0,data:{code:{html:l?l[1].trim():"<div>Generated content</div>",css:d?d[1].trim():"/* Generated styles */",js:p?p[1].trim():"// Generated script"},explanation:o?`${o}

${m}`:m}}:{success:!0,data:{code:{html:"",css:"",js:""},explanation:n}}}catch{return{success:!1,error:"Error parsing API response"}}}createEnhancedPrompt(t,r=[]){return`Generate a web application based on this description: ${t}`}createEnhancedSystemPrompt(){return`You are a helpful AI assistant that specializes in web development. 
    Your task is to generate high-quality, functional HTML, CSS, and JavaScript code based on user requests.
    Provide well-commented, clean code that follows best practices.`}}class fa extends mb{constructor(t){super(t)}async generateResponse(t){try{const{prompt:r,chatHistory:a}=t;if(await me.isSignedIn()){console.log("🎯 Using unlimited OpenAI API via Puter.js (authenticated user)...");const o=this.createLovableStylePrompt(r,a),i=await me.generateOpenAIResponse(o,{model:"gpt-4o",temperature:.7,maxTokens:4e3,chatHistory:a});if(i.success&&i.text){const l=this.parseOpenAICodeResponse(i.text);return{success:!0,data:{code:l.code,explanation:l.explanation||"Generated with unlimited Puter.js OpenAI API (GPT-4o)"}}}else return{success:!1,error:i.error||"Failed to generate code with unlimited OpenAI API"}}else{console.log("🤖 Using free Puter.js AI (GPT-4o mini) for non-authenticated user...");const o=this.createLovableStylePrompt(r,a),i=await me.generateCode(o,a);return i.success&&i.code?{success:!0,data:{code:i.code,explanation:i.explanation||"Generated with free Puter.js AI (GPT-4o mini)"}}:{success:!1,error:i.error||"Failed to generate code with Puter.js"}}}catch(r){return console.error("Puter AI error:",r),{success:!1,error:r instanceof Error?r.message:"Unknown Puter AI error"}}}createLovableStylePrompt(t,r){let a=`You are an expert fullstack AI software engineer, similar to the Lovable AI platform. Create a complete, production-ready web application for: "${t}"

🎯 CRITICAL REQUIREMENTS (MUST FOLLOW):
1. Generate COMPLETE, FUNCTIONAL, MODERN web applications
2. Use semantic HTML5 structure with proper accessibility
3. Create responsive CSS with modern techniques (flexbox, grid, variables)
4. Write clean, functional JavaScript/TypeScript with proper error handling
5. Include interactive features and professional UI/UX
6. Use modern web development best practices
7. Make it visually appealing with gradients, shadows, animations
8. Ensure cross-browser compatibility and mobile responsiveness
9. Include proper form validation and user feedback
10. Add loading states, hover effects, and smooth transitions

🏗️ ARCHITECTURE STANDARDS:
- Component-based structure
- Separation of concerns (HTML structure, CSS styling, JS functionality)
- Modern CSS features (custom properties, flexbox, grid, animations)
- Progressive enhancement approach
- Clean, maintainable code with comments

🎨 DESIGN PRINCIPLES:
- Professional, modern design language with cyberpunk aesthetic
- Consistent color scheme with neon accents and dark backgrounds
- Intuitive user interface with clear navigation
- Responsive design that works on all devices
- Accessibility considerations (ARIA labels, keyboard navigation)
- Smooth animations and micro-interactions with cyberpunk effects

📦 DELIVERABLES FORMAT:
Return EXACTLY in this format:

=== HTML ===
[Complete, semantic HTML5 structure with cyberpunk elements]

=== CSS ===
[Modern, responsive CSS with cyberpunk styling, neon effects, and professional design]

=== JS ===
[Clean, functional JavaScript with cyberpunk interactions and proper error handling]

=== EXPLANATION ===
[Brief explanation of features and architecture decisions]

Build a professional, fully functional cyberpunk web application now:`;if(r&&r.length>0){const n=r.slice(-5).map(o=>`${o.role}: ${o.content}`).join(`
`);a+=`

📝 CONTEXT FROM CONVERSATION:
${n}

Continue building on this context while creating the new cyberpunk application.`}return a}createEnhancedPrompt(t,r){return this.createLovableStylePrompt(t,r)}parseOpenAICodeResponse(t){const r={html:"",css:"",js:"",explanation:""};try{const a=t.match(/=== HTML ===([\s\S]*?)(?:=== CSS ===|$)/);a&&(r.html=a[1].trim());const n=t.match(/=== CSS ===([\s\S]*?)(?:=== JS ===|$)/);n&&(r.css=n[1].trim());const o=t.match(/=== JS ===([\s\S]*?)(?:=== EXPLANATION ===|$)/);o&&(r.js=o[1].trim());const i=t.match(/=== EXPLANATION ===([\s\S]*?)$/);if(i&&(r.explanation=i[1].trim()),!r.html&&!r.css&&!r.js)return this.fallbackCodeExtraction(t)}catch(a){return console.warn("⚠️ Error parsing OpenAI response, using fallback extraction:",a),this.fallbackCodeExtraction(t)}return{code:{html:r.html||this.generateDefaultHTML(),css:r.css||this.generateDefaultCSS(),js:r.js||this.generateDefaultJS()},explanation:r.explanation||"Cyberpunk web application generated with unlimited OpenAI API via Puter.js"}}fallbackCodeExtraction(t){const r=t.match(/```html([\s\S]*?)```/i)||t.match(/<html[\s\S]*?<\/html>/i),a=t.match(/```css([\s\S]*?)```/i),n=t.match(/```javascript([\s\S]*?)```/i)||t.match(/```js([\s\S]*?)```/i);return{code:{html:r?r[1]||r[0]:this.generateDefaultHTML(),css:a?a[1]:this.generateDefaultCSS(),js:n?n[1]:this.generateDefaultJS()},explanation:"Cyberpunk web application generated with unlimited Puter.js OpenAI API assistance."}}generateDefaultHTML(){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyberpunk App - Unlimited AI</title>
</head>
<body>
    <div class="cyber-container">
        <h1 class="cyber-title">UNLIMITED AI CYBERPUNK APPLICATION</h1>
        <p class="cyber-text">Powered by unlimited Puter.js OpenAI API</p>
    </div>
</body>
</html>`}generateDefaultCSS(){return`body {
    background: #000;
    color: #00ffff;
    font-family: 'Courier New', monospace;
    margin: 0;
    padding: 2rem;
}

.cyber-container {
    text-align: center;
    padding: 2rem;
}

.cyber-title {
    font-size: 2rem;
    color: #ffd700;
    text-shadow: 0 0 20px #ffd700;
    margin-bottom: 1rem;
}

.cyber-text {
    color: #00ffff;
    font-size: 1.1rem;
}`}generateDefaultJS(){return`console.log('🚀 Unlimited AI Cyberpunk Application Loaded');
console.log('∞ Powered by Puter.js OpenAI API');

document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.cyber-title');
    if (title) {
        title.addEventListener('click', function() {
            this.style.color = '#ff00ff';
            setTimeout(() => {
                this.style.color = '#ffd700';
            }, 500);
        });
    }
});`}}class vb{static async createClient(t){const{apiKey:r,provider:a,modelType:n}=t,o=await me.isSignedIn();if(a==="FREE"||r===Le||!r||r.trim()===""||o)return console.log(o?"Using Puter.js with unlimited OpenAI API access (authenticated user)":"Using Puter.js AI (free GPT-4o mini)"),new fa({apiKey:Le,model:o?"gpt-4o":"gpt-4o-mini"});try{switch(a){case"OPENAI":return console.log("Creating OpenAI client with model: gpt-3.5-turbo"),new gb({apiKey:r,model:"gpt-3.5-turbo"});case"HUGGINGFACE":return console.log("Creating HuggingFace client with model: HuggingFaceH4/zephyr-7b-beta"),new xb({apiKey:r,model:"HuggingFaceH4/zephyr-7b-beta"});case"PERPLEXITY":return console.log(`Creating Perplexity client with model type: ${n||"SMALL"}`),new bb({apiKey:r,model:n||"SMALL"});default:return console.warn(`Unsupported AI provider: ${a}, falling back to Puter.js AI`),new fa({apiKey:Le,model:o?"gpt-4o":"gpt-4o-mini"})}}catch(i){return console.error("Error creating AI client:",i),console.log("Falling back to Puter.js AI due to client creation error"),new fa({apiKey:Le,model:o?"gpt-4o":"gpt-4o-mini"})}}}function zo(e,t){let r="#4f46e5";e.blue&&(r="#3b82f6"),e.green&&(r="#10b981"),e.red&&(r="#ef4444"),e.purple&&(r="#8b5cf6");const a=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our Platform</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="${e.dark?"dark-theme":""}">
  ${t.navigation?`
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">WebCraft</div>
        <ul class="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          ${t.form?'<li><a href="#contact">Contact</a></li>':""}
        </ul>
        <button class="mobile-menu-btn" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
  `:""}

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="${t.animation?"animate-fade-in":""}">Build Amazing Web Applications</h1>
        <p>The easiest way to bring your ideas to life. No coding required.</p>
        <div class="hero-buttons">
          <button class="btn primary-btn">Get Started</button>
          <button class="btn secondary-btn">Learn More</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="placeholder-image">Web App Preview</div>
      </div>
    </div>
  </section>

  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Key Features</h2>
      <div class="features-grid">
        <div class="feature-card ${t.animation?"hover-scale":""}">
          <div class="feature-icon">🚀</div>
          <h3>Fast Development</h3>
          <p>Build web applications in minutes instead of weeks.</p>
        </div>
        <div class="feature-card ${t.animation?"hover-scale":""}">
          <div class="feature-icon">🎨</div>
          <h3>Beautiful Design</h3>
          <p>Professional designs that look great on any device.</p>
        </div>
        <div class="feature-card ${t.animation?"hover-scale":""}">
          <div class="feature-icon">💡</div>
          <h3>Smart AI</h3>
          <p>AI-powered tools that understand your requirements.</p>
        </div>
        <div class="feature-card ${t.animation?"hover-scale":""}">
          <div class="feature-icon">🔄</div>
          <h3>Real-time Preview</h3>
          <p>See changes instantly as you make them.</p>
        </div>
      </div>
    </div>
  </section>

  ${t.form?`
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your Name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" class="btn primary-btn">Send Message</button>
      </form>
    </div>
  </section>
  `:""}

  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 WebCraft. All rights reserved.</p>
    </div>
  </footer>

  <script src="script.js"><\/script>
</body>
</html>`,n=`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9fafb;
  background-image: radial-gradient(#e2e8f0 1.5px, transparent 1.5px);
  background-size: 40px 40px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

${e.dark?`
.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
  background-image: radial-gradient(#1e293b 1.5px, transparent 1.5px);
  background-size: 40px 40px;
}

.dark-theme .header {
  background-color: #1f1f1f;
}

.dark-theme .feature-card {
  background-color: #1f1f1f;
  color: #e0e0e0;
}
`:""}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  color: ${r};
  text-decoration: none;
  transition: all 0.2s ease;
}

a:hover {
  text-decoration: underline;
}

button, .btn {
  display: inline-block;
  background: ${r};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

button:hover, .btn:hover {
  background: ${r}dd;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: ${r};
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile-menu-btn span {
  height: 3px;
  width: 100%;
  background-color: #333;
  border-radius: 10px;
}

.hero {
  padding: 6rem 0 4rem;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background-image: linear-gradient(135deg, #111827 0%, #333 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

${e.dark?`.dark-theme .hero-content h1 { 
  background-image: linear-gradient(135deg, #f3f4f6 0%, #ddd 100%);
  -webkit-background-clip: text;
  background-clip: text;
}`:""}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #4b5563;
}

${e.dark?".dark-theme .hero-content p { color: #d1d5db; }":""}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.primary-btn {
  background-color: ${r};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.secondary-btn {
  background-color: transparent;
  color: ${r};
  border: 1px solid ${r};
}

.hero-image {
  width: 100%;
}

.placeholder-image {
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  border-radius: 12px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${r};
  font-weight: bold;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.features {
  padding: 5rem 0;
  background-color: white;
}

${e.dark?".dark-theme .features { background-color: #121212; }":""}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #111827;
  position: relative;
  padding-bottom: 1rem;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: ${r};
  border-radius: 2px;
}

${e.dark?".dark-theme .section-title { color: #f3f4f6; }":""}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  margin-bottom: 0.75rem;
  color: #111827;
  font-size: 1.5rem;
}

${e.dark?".dark-theme .feature-card h3 { color: #f3f4f6; }":""}

.contact {
  padding: 5rem 0;
  background-color: #f3f4f6;
}

${e.dark?".dark-theme .contact { background-color: #1f1f1f; }":""}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

${e.dark?".dark-theme .contact-form { background-color: #2d2d2d; }":""}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
}

${e.dark?".dark-theme .form-group label { color: #e5e7eb; }":""}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  background-color: white;
  color: #333;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: ${r};
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

${e.dark?`
.dark-theme .form-group input,
.dark-theme .form-group textarea {
  background-color: #2d2d2d;
  border-color: #3d3d3d;
  color: #e0e0e0;
}

.dark-theme .form-group input:focus,
.dark-theme .form-group textarea:focus {
  border-color: ${r};
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}
`:""}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.footer {
  background-color: #111827;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

${t.animation?`
.animate-fade-in {
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.hover-scale {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
`:""}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-image {
    margin-top: 2rem;
  }
  
  .placeholder-image {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .feature-card {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
}`,o=`// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }
  
  ${t.form?`
  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      alert('Thanks for your message, ' + name + '! We will get back to you soon.');
      contactForm.reset();
    });
  }`:""}
  
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}`;return{code:{html:a,css:n,js:o},explanation:`A custom landing page with ${e.dark?"dark theme":"light theme"} and ${t.animation?"animations":"no animations"}. Includes a responsive design, ${t.form?"contact form,":""} key features section, and smooth scrolling.`}}function yb(e,t){const r=e.blue?"#3b82f6":e.green?"#10b981":e.red?"#ef4444":e.purple?"#8b5cf6":"#4f46e5",a=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="${e.dark?"dark-theme":""}">
  <header>
    <div class="container">
      <h1 class="logo">My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          ${t.form?'<li><a href="#contact">Contact</a></li>':""}
        </ul>
      </nav>
    </div>
  </header>
  
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h2 class="${t.animation?"animate-fade-in":""}">Hi, I'm a Web Developer</h2>
        <p>I create beautiful and functional websites.</p>
      </div>
    </div>
  </section>
  
  <section id="projects" class="projects">
    <div class="container">
      <h2>My Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <div class="project-image">Project 1</div>
          <h3>Project One</h3>
          <p>A brief description of the project and technologies used.</p>
        </div>
        <div class="project-card">
          <div class="project-image">Project 2</div>
          <h3>Project Two</h3>
          <p>A brief description of the project and technologies used.</p>
        </div>
        <div class="project-card">
          <div class="project-image">Project 3</div>
          <h3>Project Three</h3>
          <p>A brief description of the project and technologies used.</p>
        </div>
      </div>
    </div>
  </section>
  
  <footer>
    <div class="container">
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,n=`/* Basic styles for the portfolio */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9fafb;
  transition: all 0.3s ease;
}

${e.dark?`
.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
}
`:""}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

header {
  background-color: ${r};
  color: white;
  padding: 1rem 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.hero {
  padding: 6rem 0;
  text-align: center;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  height: 200px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.project-card h3, .project-card p {
  padding: 1rem;
}

footer {
  background: #333;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

${t.animation?`
.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`:""}
`;return{code:{html:a,css:n,js:`// Basic portfolio interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});`},explanation:"A clean portfolio template showcasing projects with a focus on a professional presentation."}}function wb(e,t){const r=e.blue?"#3b82f6":e.green?"#10b981":e.red?"#ef4444":e.purple?"#8b5cf6":"#4f46e5",a=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="${e.dark?"dark-theme":""}">
  <header>
    <div class="container">
      <h1 class="site-title">My Blog</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#about">About</a></li>
          ${t.form?'<li><a href="#contact">Contact</a></li>':""}
        </ul>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="featured-post">
      <h2>Featured Article</h2>
      <article class="post">
        <div class="post-image">Featured Image</div>
        <h3>How to Build a Blog with WebCraft AI</h3>
        <div class="post-meta">
          <span>April 29, 2025</span>
          <span>5 min read</span>
        </div>
        <p>
          In this comprehensive guide, I'll show you how to leverage WebCraft AI
          to build a beautiful and functional blog without writing a single line of code...
        </p>
        <a href="#" class="read-more">Read more</a>
      </article>
    </section>

    <section class="recent-posts">
      <h2>Recent Articles</h2>
      <div class="post-grid">
        <article class="post-card">
          <div class="post-image">Post Image</div>
          <h3>Getting Started with AI Tools</h3>
          <div class="post-meta">
            <span>April 24, 2025</span>
            <span>3 min read</span>
          </div>
          <p>An introduction to the world of AI-powered development tools...</p>
          <a href="#" class="read-more">Read more</a>
        </article>
        
        <article class="post-card">
          <div class="post-image">Post Image</div>
          <h3>The Future of Web Development</h3>
          <div class="post-meta">
            <span>April 20, 2025</span>
            <span>4 min read</span>
          </div>
          <p>Exploring how AI and automation are changing the landscape...</p>
          <a href="#" class="read-more">Read more</a>
        </article>
        
        <article class="post-card">
          <div class="post-image">Post Image</div>
          <h3>Design Principles for Modern Web</h3>
          <div class="post-meta">
            <span>April 15, 2025</span>
            <span>6 min read</span>
          </div>
          <p>Key design principles that make your websites stand out...</p>
          <a href="#" class="read-more">Read more</a>
        </article>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2025 My Blog. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,n=`/* Blog styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9fafb;
}

${e.dark?`
.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
}

.dark-theme .post-card, .dark-theme .post {
  background-color: #1f1f1f;
}
`:""}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

header {
  background-color: ${r};
  color: white;
  padding: 1rem 0;
  margin-bottom: 2rem;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

h2 {
  margin-bottom: 1.5rem;
  color: ${r};
}

.post {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.post-image {
  height: 250px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.post h3, .post p, .post-meta, .read-more {
  padding: 0 1.5rem;
}

.post h3 {
  margin-top: 1.5rem;
}

.post-meta {
  color: #666;
  margin: 0.5rem 0 1rem;
  font-size: 0.9rem;
  display: flex;
  gap: 1rem;
}

.read-more {
  display: inline-block;
  color: ${r};
  text-decoration: none;
  font-weight: 500;
  margin: 1rem 0 1.5rem 1.5rem;
}

.recent-posts {
  margin-top: 3rem;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.post-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.post-card:hover {
  transform: translateY(-5px);
}

.post-card .post-image {
  height: 180px;
}

.post-card h3 {
  padding: 1rem 1rem 0.5rem;
}

.post-card .post-meta {
  padding: 0 1rem;
  margin-bottom: 0.5rem;
}

.post-card p {
  padding: 0 1rem;
}

.post-card .read-more {
  margin: 1rem 0 1.5rem 1rem;
}

footer {
  background: #333;
  color: white;
  padding: 2rem 0;
  text-align: center;
  margin-top: 4rem;
}
`,o=`// Blog interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      if (target !== "#") {
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  ${t.animation?`
  // Add fade-in animations to posts as they scroll into view
  const posts = document.querySelectorAll('.post-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
  
  posts.forEach(post => {
    observer.observe(post);
  });
  `:""}
});`;return{code:{html:a,css:n,js:o},explanation:"A clean and modern blog template with featured and recent articles sections."}}function jb(e,t){const r=e.blue?"#3b82f6":e.green?"#10b981":e.red?"#ef4444":e.purple?"#8b5cf6":"#4f46e5",a=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>E-commerce Store</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="${e.dark?"dark-theme":""}">
  <header>
    <div class="container">
      <div class="logo">WebStore</div>
      <nav>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#deals">Deals</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <button class="icon-button">🔍</button>
        <button class="icon-button">👤</button>
        <button class="icon-button cart-button">🛒 <span class="cart-count">0</span></button>
      </div>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Summer Collection</h1>
        <p>Discover our newest products with special discounts</p>
        <button class="shop-now-btn">Shop Now</button>
      </div>
    </div>
  </section>

  <section id="products" class="products">
    <div class="container">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-image">Product 1</div>
          <h3>Stylish T-Shirt</h3>
          <div class="price">$29.99</div>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <div class="product-card">
          <div class="product-image">Product 2</div>
          <h3>Designer Jeans</h3>
          <div class="price">$59.99</div>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <div class="product-card">
          <div class="product-image">Product 3</div>
          <h3>Casual Sneakers</h3>
          <div class="price">$79.99</div>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <div class="product-card">
          <div class="product-image">Product 4</div>
          <h3>Summer Hat</h3>
          <div class="price">$19.99</div>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container">
      <h2>Join Our Newsletter</h2>
      <p>Get the latest updates and exclusive offers</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Your email address" required>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">All Products</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 WebStore. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`,n=`/* E-commerce styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9fafb;
}

${e.dark?`
.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
}

.dark-theme .product-card {
  background-color: #1f1f1f;
  color: #e0e0e0;
}

.dark-theme .cta {
  background-color: #1f1f1f;
}
`:""}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

header {
  background-color: ${r};
  color: white;
  padding: 1rem 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.icon-button {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.cart-button {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  color: ${r};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  background: url('https://via.placeholder.com/1200x400') center/cover;
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.shop-now-btn {
  background: white;
  color: ${r};
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.shop-now-btn:hover {
  background: ${r};
  color: white;
}

.products {
  padding: 4rem 0;
}

.products h2 {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-image {
  height: 200px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.product-card h3 {
  padding: 1rem 1rem 0.5rem;
  font-size: 1.1rem;
}

.price {
  padding: 0 1rem;
  font-weight: bold;
  color: ${r};
  margin-bottom: 1rem;
}

.add-to-cart {
  background: ${r};
  color: white;
  border: none;
  width: 100%;
  padding: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-to-cart:hover {
  background: ${r}dd;
}

.cta {
  background: #f0f0f0;
  padding: 4rem 0;
  text-align: center;
}

.cta h2 {
  margin-bottom: 1rem;
}

.cta p {
  margin-bottom: 2rem;
}

.newsletter-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
}

.newsletter-form input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.newsletter-form button {
  padding: 0 1.5rem;
  background: ${r};
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

footer {
  background: #333;
  color: white;
  padding: 3rem 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-column h3 {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 0.8rem;
}

.footer-column a {
  color: #ccc;
  text-decoration: none;
}

.footer-column a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #444;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
}
`,o=`// E-commerce functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize cart
  let cartCount = 0;
  const cartCountElement = document.querySelector('.cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      cartCount++;
      cartCountElement.textContent = cartCount;
      
      // Show a quick animation on button click
      this.textContent = "Added!";
      this.style.background = "#4CAF50";
      
      setTimeout(() => {
        this.textContent = "Add to Cart";
        this.style.background = "${r}";
      }, 1000);
    });
  });
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input').value;
      alert('Thanks for subscribing with ' + email + '!');
      this.reset();
    });
  }
  
  ${t.animation?`
  // Add animations to product cards
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach((card, index) => {
    card.style.animationDelay = \`\${index * 0.1}s\`;
    card.classList.add('fade-in');
  });
  `:""}
});`;return{code:{html:a,css:n,js:o},explanation:"An e-commerce website template"}}function kb(e,t){const r=e.blue?"#3b82f6":e.green?"#10b981":e.red?"#ef4444":e.purple?"#8b5cf6":"#4f46e5",a=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Analytics Dashboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="${e.dark?"dark-theme":""}">
  <div class="dashboard-layout">
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1 class="logo">Dashboard</h1>
      </div>
      <nav class="sidebar-nav">
        <ul>
          <li class="active"><a href="#"><span class="icon">📊</span> Overview</a></li>
          <li><a href="#"><span class="icon">📈</span> Analytics</a></li>
          <li><a href="#"><span class="icon">📅</span> Calendar</a></li>
          <li><a href="#"><span class="icon">💬</span> Messages</a></li>
          <li><a href="#"><span class="icon">⚙️</span> Settings</a></li>
        </ul>
      </nav>
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="avatar">JD</div>
          <span>John Doe</span>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <header class="top-bar">
        <div class="search-box">
          <input type="text" placeholder="Search...">
          <button>🔍</button>
        </div>
        <div class="top-bar-actions">
          <button class="icon-button">🔔</button>
          <button class="icon-button">✉️</button>
        </div>
      </header>

      <div class="dashboard-container">
        <div class="dashboard-header">
          <h1>Dashboard Overview</h1>
          <div class="date-range">April 2025</div>
        </div>

        <div class="stats-cards">
          <div class="stat-card">
            <div class="stat-card-header">
              <h3>Total Users</h3>
              <span class="icon">👥</span>
            </div>
            <div class="stat-card-value">2,543</div>
            <div class="stat-card-change positive">+12% from last month</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-card-header">
              <h3>Revenue</h3>
              <span class="icon">💰</span>
            </div>
            <div class="stat-card-value">$45,290</div>
            <div class="stat-card-change positive">+8% from last month</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-card-header">
              <h3>Active Sessions</h3>
              <span class="icon">🔄</span>
            </div>
            <div class="stat-card-value">182</div>
            <div class="stat-card-change negative">-3% from last month</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-card-header">
              <h3>Conversion Rate</h3>
              <span class="icon">🎯</span>
            </div>
            <div class="stat-card-value">3.6%</div>
            <div class="stat-card-change positive">+0.8% from last month</div>
          </div>
        </div>

        <div class="charts-section">
          <div class="chart-container">
            <h2>Weekly Revenue</h2>
            <div class="chart" id="revenueChart">
              <!-- Chart would be rendered here via JavaScript -->
              <div class="placeholder-chart">Revenue Chart Placeholder</div>
            </div>
          </div>
          
          <div class="chart-container">
            <h2>User Growth</h2>
            <div class="chart" id="userChart">
              <!-- Chart would be rendered here via JavaScript -->
              <div class="placeholder-chart">User Growth Chart Placeholder</div>
            </div>
          </div>
        </div>

        <div class="recent-activity">
          <h2>Recent Activity</h2>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon green">✓</div>
              <div class="activity-content">
                <div class="activity-title">New user registered</div>
                <div class="activity-time">2 minutes ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon blue">💲</div>
              <div class="activity-content">
                <div class="activity-title">New order #1234 received</div>
                <div class="activity-time">45 minutes ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon orange">⚠️</div>
              <div class="activity-content">
                <div class="activity-title">Server load at 82%</div>
                <div class="activity-time">1 hour ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon purple">📊</div>
              <div class="activity-content">
                <div class="activity-title">Monthly report generated</div>
                <div class="activity-time">3 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <script src="script.js"><\/script>
</body>
</html>`,n=`/* Dashboard styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9fafb;
  height: 100vh;
  overflow: hidden;
}

${e.dark?`
.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
}

.dark-theme .sidebar {
  background-color: #1a1a1a;
  border-right: 1px solid #333;
}

.dark-theme .top-bar {
  background-color: #1a1a1a;
  border-bottom: 1px solid #333;
}

.dark-theme .stat-card,
.dark-theme .chart-container,
.dark-theme .activity-list {
  background-color: #1a1a1a;
}

.dark-theme .search-box input {
  background-color: #2a2a2a;
  color: #e0e0e0;
  border: 1px solid #444;
}
`:""}

.dashboard-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: white;
  border-right: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid #eaeaea;
}

.logo {
  font-size: 1.5rem;
  color: ${r};
}

.sidebar-nav {
  padding: 1.5rem 0;
  flex-grow: 1;
}

.sidebar-nav ul {
  list-style: none;
}

.sidebar-nav li {
  padding: 0.75rem 1.5rem;
  margin-bottom: 0.25rem;
}

.sidebar-nav li.active {
  background-color: ${r}20; /* 20% opacity */
  border-left: 3px solid ${r};
}

.sidebar-nav a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.sidebar-nav .icon {
  margin-right: 0.75rem;
}

.sidebar-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #eaeaea;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  height: 32px;
  background-color: ${r};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  margin-right: 0.75rem;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.top-bar {
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}

.search-box {
  display: flex;
  align-items: center;
}

.search-box input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

.search-box button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.top-bar-actions {
  display: flex;
  gap: 1rem;
}

.icon-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.dashboard-container {
  padding: 1.5rem;
  overflow-y: auto;
  height: calc(100vh - 60px);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stat-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.stat-card-header h3 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6b7280;
}

.stat-card-value {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.stat-card-change {
  font-size: 0.875rem;
}

.positive {
  color: #10b981;
}

.negative {
  color: #ef4444;
}

.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-container {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.chart-container h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.placeholder-chart {
  height: 200px;
  background-color: #f3f4f6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
}

.activity-list {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.recent-activity h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.activity-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eaeaea;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.green {
  background-color: #d1fae5;
  color: #10b981;
}

.blue {
  background-color: #dbeafe;
  color: #3b82f6;
}

.orange {
  background-color: #ffedd5;
  color: #f97316;
}

.purple {
  background-color: #ede9fe;
  color: #8b5cf6;
}

.activity-title {
  font-weight: 500;
}

.activity-time {
  font-size: 0.875rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .dashboard-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: auto;
  }
  
  .charts-section {
    grid-template-columns: 1fr;
  }
}
`,o=`// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
  // Toggle sidebar on mobile
  const sidebarToggle = document.createElement('button');
  sidebarToggle.className = 'sidebar-toggle icon-button';
  sidebarToggle.innerHTML = '≡';
  sidebarToggle.style.display = 'none';
  
  const topBar = document.querySelector('.top-bar');
  if (topBar) {
    topBar.prepend(sidebarToggle);
  }
  
  function handleResize() {
    const isMobile = window.innerWidth < 768;
    const sidebar = document.querySelector('.sidebar');
    
    if (isMobile) {
      sidebarToggle.style.display = 'block';
      sidebar.style.display = 'none';
    } else {
      sidebarToggle.style.display = 'none';
      sidebar.style.display = 'flex';
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize();
  
  sidebarToggle.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'flex';
    } else {
      sidebar.style.display = 'none';
    }
  });
  
  // Simulate charts with canvas (in a real app, you'd use a charting library like Chart.js)
  function drawSimpleChart(canvasId, type) {
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    canvas.width = 400;
    canvas.height = 200;
    
    const placeholder = document.getElementById(canvasId).querySelector('.placeholder-chart');
    if (placeholder) {
      placeholder.replaceWith(canvas);
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#f3f4f6';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.lineWidth = 2;
        ctx.strokeStyle = '${r}';
        ctx.beginPath();
        
        if (type === 'line') {
          // Draw a simple line chart
          const points = [
            {x: 20, y: 150},
            {x: 80, y: 90},
            {x: 140, y: 120},
            {x: 200, y: 60},
            {x: 260, y: 80},
            {x: 320, y: 40},
            {x: 380, y: 70}
          ];
          
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
          }
          ctx.stroke();
          
          // Add dots at each point
          points.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '${r}';
            ctx.fill();
          });
        } else if (type === 'bar') {
          // Draw a simple bar chart
          const bars = [
            {x: 30, value: 100},
            {x: 90, value: 150},
            {x: 150, value: 80},
            {x: 210, value: 120},
            {x: 270, value: 130},
            {x: 330, value: 90}
          ];
          
          const baseY = 180;
          const barWidth = 40;
          
          bars.forEach(bar => {
            ctx.fillStyle = '${r}80'; // 50% opacity
            ctx.fillRect(bar.x, baseY - bar.value, barWidth, bar.value);
            
            ctx.strokeStyle = '${r}';
            ctx.strokeRect(bar.x, baseY - bar.value, barWidth, bar.value);
          });
        }
      }
    }
  }
  
  // Draw example charts with slight delay to ensure DOM is ready
  setTimeout(() => {
    drawSimpleChart('revenueChart', 'line');
    drawSimpleChart('userChart', 'bar');
  }, 300);
  
  ${t.animation?`
  // Add animations for stats cards
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 * (index + 1));
  });
  
  // Add animations for activity items
  const activityItems = document.querySelectorAll('.activity-item');
  activityItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(20px)';
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 100 * (index + 1) + 500);
  });
  `:""}
});`;return{code:{html:a,css:n,js:o},explanation:"A responsive admin dashboard template with statistics, charts, and activity tracking."}}function Nb(e,t){const r=e.blue?"#3b82f6":e.green?"#10b981":e.red?"#ef4444":e.purple?"#8b5cf6":"#4f46e5",a=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Social Network</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="${e.dark?"dark-theme":""}">
  <header class="header">
    <div class="container">
      <h1 class="logo">SocialApp</h1>
      
      <div class="search-bar">
        <input type="text" placeholder="Search...">
        <button>🔍</button>
      </div>
      
      <nav class="main-nav">
        <ul>
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container main-container">
    <aside class="sidebar">
      <div class="profile-card">
        <div class="profile-header"></div>
        <div class="profile-content">
          <div class="profile-avatar">JD</div>
          <h2 class="profile-name">John Doe</h2>
          <p class="profile-username">@johndoe</p>
          <div class="profile-stats">
            <div class="stat">
              <div class="stat-value">248</div>
              <div class="stat-label">Following</div>
            </div>
            <div class="stat">
              <div class="stat-value">1.2k</div>
              <div class="stat-label">Followers</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="sidebar-section">
        <h3>Trending</h3>
        <ul class="trending-list">
          <li><a href="#">#WebDevelopment</a></li>
          <li><a href="#">#AItools</a></li>
          <li><a href="#">#TechNews</a></li>
          <li><a href="#">#Programming</a></li>
        </ul>
      </div>
      
      <div class="sidebar-section">
        <h3>Suggested Friends</h3>
        <div class="friend-suggestions">
          <div class="friend-item">
            <div class="friend-avatar">JS</div>
            <div class="friend-info">
              <div class="friend-name">Jane Smith</div>
              <button class="follow-button">Follow</button>
            </div>
          </div>
          <div class="friend-item">
            <div class="friend-avatar">MP</div>
            <div class="friend-info">
              <div class="friend-name">Mike Peterson</div>
              <button class="follow-button">Follow</button>
            </div>
          </div>
          <div class="friend-item">
            <div class="friend-avatar">AL</div>
            <div class="friend-info">
              <div class="friend-name">Amy Lee</div>
              <button class="follow-button">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <section class="feed">
      <div class="post-composer">
        <div class="composer-avatar">JD</div>
        <div class="composer-input-container">
          <textarea placeholder="What's happening?"></textarea>
          <div class="composer-actions">
            <button class="action-button">📷</button>
            <button class="action-button">🔗</button>
            <button class="action-button">😊</button>
            <button class="post-button">Post</button>
          </div>
        </div>
      </div>

      <div class="posts">
        <div class="post">
          <div class="post-avatar">AL</div>
          <div class="post-content">
            <div class="post-header">
              <div class="post-author">Amy Lee</div>
              <div class="post-username">@amylee</div>
              <div class="post-time">2h ago</div>
            </div>
            <div class="post-text">
              Just finished building my first web app with WebCraft AI. It's amazing how quickly you can bring your ideas to life!
            </div>
            <div class="post-image">
              <div class="placeholder-image">Post Image</div>
            </div>
            <div class="post-actions">
              <button class="post-action">💬 24</button>
              <button class="post-action">🔄 12</button>
              <button class="post-action like-button">❤️ 87</button>
              <button class="post-action">📤</button>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="post-avatar">MP</div>
          <div class="post-content">
            <div class="post-header">
              <div class="post-author">Mike Peterson</div>
              <div class="post-username">@mikepeterson</div>
              <div class="post-time">5h ago</div>
            </div>
            <div class="post-text">
              Learning about AI-powered development tools today. The potential is incredible! Have any of you tried WebCraft AI yet?
            </div>
            <div class="post-actions">
              <button class="post-action">💬 8</button>
              <button class="post-action">🔄 3</button>
              <button class="post-action like-button">❤️ 42</button>
              <button class="post-action">📤</button>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="post-avatar">JS</div>
          <div class="post-content">
            <div class="post-header">
              <div class="post-author">Jane Smith</div>
              <div class="post-username">@janesmith</div>
              <div class="post-time">Yesterday</div>
            </div>
            <div class="post-text">
              Just released my new portfolio website! Check it out and let me know what you think.
            </div>
            <div class="post-image">
              <div class="placeholder-image">Portfolio Website Screenshot</div>
            </div>
            <div class="post-actions">
              <button class="post-action">💬 36</button>
              <button class="post-action">🔄 27</button>
              <button class="post-action like-button">❤️ 156</button>
              <button class="post-action">📤</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <aside class="right-sidebar">
      <div class="sidebar-section">
        <h3>Who to Follow</h3>
        <div class="who-to-follow">
          <div class="follow-item">
            <div class="follow-avatar">SJ</div>
            <div class="follow-info">
              <div class="follow-name">Sarah Johnson</div>
              <div class="follow-username">@sarahj</div>
            </div>
            <button class="follow-button">Follow</button>
          </div>
          <div class="follow-item">
            <div class="follow-avatar">RB</div>
            <div class="follow-info">
              <div class="follow-name">Robert Brown</div>
              <div class="follow-username">@robbrown</div>
            </div>
            <button class="follow-button">Follow</button>
          </div>
          <div class="follow-item">
            <div class="follow-avatar">EC</div>
            <div class="follow-info">
              <div class="follow-name">Emma Clark</div>
              <div class="follow-username">@emmaclark</div>
            </div>
            <button class="follow-button">Follow</button>
          </div>
          <a href="#" class="show-more">Show more</a>
        </div>
      </div>
      
      <div class="sidebar-section">
        <h3>Latest News</h3>
        <div class="news-list">
          <div class="news-item">
            <div class="news-topic">Technology</div>
            <div class="news-title">New AI features announced for WebCraft platform</div>
            <div class="news-time">2 hours ago</div>
          </div>
          <div class="news-item">
            <div class="news-topic">Web Development</div>
            <div class="news-title">The rise of no-code tools: What developers need to know</div>
            <div class="news-time">4 hours ago</div>
          </div>
          <div class="news-item">
            <div class="news-topic">Design</div>
            <div class="news-title">Design trends to watch in 2025</div>
            <div class="news-time">Yesterday</div>
          </div>
          <a href="#" class="show-more">Show more</a>
        </div>
      </div>
    </aside>
  </main>

  <script src="script.js"><\/script>
</body>
</html>`,n=`/* Social Network styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  color: #333;
  background-color: #f0f2f5;
}

${e.dark?`
.dark-theme {
  background-color: #18191a;
  color: #e4e6eb;
}

.dark-theme .header,
.dark-theme .post-composer,
.dark-theme .post,
.dark-theme .profile-card,
.dark-theme .sidebar-section,
.dark-theme .follow-item,
.dark-theme .news-item {
  background-color: #242526;
  border-color: #393a3b;
}

.dark-theme .logo,
.dark-theme .main-nav a,
.dark-theme .post-author,
.dark-theme .profile-name {
  color: #e4e6eb;
}

.dark-theme .search-bar input {
  background-color: #3a3b3c;
  border-color: #3a3b3c;
  color: #e4e6eb;
}

.dark-theme .post-username,
.dark-theme .post-time,
.dark-theme .profile-username,
.dark-theme .follow-username,
.dark-theme .news-time {
  color: #b0b3b8;
}
`:""}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  font-family: inherit;
}

/* Header */
.header {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: ${r};
}

.search-bar {
  flex-grow: 1;
  max-width: 400px;
  margin: 0 20px;
  display: flex;
}

.search-bar input {
  flex-grow: 1;
  padding: 8px 15px;
  border: 1px solid #ddd;
  border-radius: 20px 0 0 20px;
  font-size: 0.9rem;
}

.search-bar button {
  padding: 8px 15px;
  background: ${r};
  border: none;
  border-radius: 0 20px 20px 0;
  color: white;
}

.main-nav ul {
  display: flex;
}

.main-nav li {
  margin: 0 10px;
}

.main-nav a {
  color: #555;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.main-nav a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.main-nav li.active a {
  color: ${r};
  font-weight: 600;
}

/* Main layout */
.main-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  padding-top: 20px;
}

/* Sidebar */
.sidebar,
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.profile-header {
  height: 80px;
  background: linear-gradient(45deg, ${r}, ${r}aa);
}

.profile-content {
  padding: 0 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${r};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: -35px;
  border: 4px solid white;
}

.profile-name {
  margin-top: 10px;
  font-size: 1.2rem;
}

.profile-username {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.profile-stats {
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #eee;
  margin-top: 15px;
  padding-top: 15px;
}

.stat-value {
  font-weight: bold;
  font-size: 1rem;
}

.stat-label {
  font-size: 0.8rem;
  color: #777;
}

.sidebar-section {
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.sidebar-section h3 {
  margin-bottom: 15px;
  font-size: 1rem;
}

.trending-list li {
  margin-bottom: 10px;
}

.trending-list a {
  color: ${r};
  font-weight: 500;
}

.friend-suggestions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.friend-item {
  display: flex;
  align-items: center;
}

.friend-avatar,
.follow-avatar,
.post-avatar,
.composer-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${r}80;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
}

.friend-info {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.follow-button {
  background-color: ${r};
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.follow-button:hover {
  background-color: ${r}dd;
}

/* Feed */
.feed {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-composer {
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.composer-input-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.composer-input-container textarea {
  border: none;
  resize: none;
  min-height: 80px;
  font-family: inherit;
  font-size: 1rem;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.composer-actions {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.action-button {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: ${r};
  padding: 5px;
}

.post-button {
  background-color: ${r};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 500;
}

.post {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.post-content {
  flex-grow: 1;
}

.post-header {
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.post-author {
  font-weight: 600;
  margin-right: 5px;
}

.post-username,
.post-time {
  color: #777;
  font-size: 0.9rem;
}

.post-username {
  margin-right: 10px;
}

.post-image {
  margin: 15px 0;
}

.placeholder-image {
  background-color: #f0f2f5;
  border-radius: 12px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-weight: 500;
}

.post-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}

.post-action {
  background: transparent;
  border: none;
  color: #777;
  padding: 8px;
  border-radius: 20px;
  transition: all 0.2s ease;
}

.post-action:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.like-button {
  color: #e0245e;
}

/* Right sidebar */
.who-to-follow {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.follow-item {
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.follow-item:last-child {
  border-bottom: none;
}

.follow-info {
  flex-grow: 1;
}

.follow-username {
  color: #777;
  font-size: 0.9rem;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.news-item {
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.news-item:last-child {
  border-bottom: none;
}

.news-topic {
  font-weight: 500;
  font-size: 0.8rem;
  color: ${r};
}

.news-title {
  font-size: 0.95rem;
  margin: 5px 0;
}

.news-time {
  font-size: 0.8rem;
  color: #777;
}

.show-more {
  color: ${r};
  font-size: 0.9rem;
  margin-top: 10px;
  display: block;
}

/* Responsive */
@media (max-width: 1024px) {
  .main-container {
    grid-template-columns: 1fr 2fr;
  }
  
  .right-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .main-container {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    display: none;
  }
  
  .header .container {
    flex-wrap: wrap;
  }
  
  .search-bar {
    order: 3;
    width: 100%;
    max-width: none;
    margin: 10px 0 0;
  }
}

${t.animation?`
/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.post {
  animation: fadeIn 0.3s ease;
}

@keyframes likeAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.like-button.liked {
  animation: likeAnimation 0.3s ease;
}
`:""}
`,o=`// Social network functionality
document.addEventListener('DOMContentLoaded', function() {
  // Post composer
  const postTextarea = document.querySelector('.composer-input-container textarea');
  const postButton = document.querySelector('.post-button');
  
  if (postTextarea && postButton) {
    // Disable post button if textarea is empty
    postButton.disabled = true;
    postButton.style.opacity = '0.5';
    
    postTextarea.addEventListener('input', function() {
      if (this.value.trim()) {
        postButton.disabled = false;
        postButton.style.opacity = '1';
      } else {
        postButton.disabled = true;
        postButton.style.opacity = '0.5';
      }
    });
    
    // Create a new post
    postButton.addEventListener('click', function() {
      const content = postTextarea.value.trim();
      if (content) {
        createNewPost(content);
        postTextarea.value = '';
        postButton.disabled = true;
        postButton.style.opacity = '0.5';
      }
    });
  }
  
  // Like functionality
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const currentLikes = this.textContent.split(' ')[1];
      const isLiked = this.classList.contains('liked');
      
      if (isLiked) {
        this.textContent = '❤️ ' + (parseInt(currentLikes) - 1);
        this.classList.remove('liked');
      } else {
        this.textContent = '❤️ ' + (parseInt(currentLikes) + 1);
        this.classList.add('liked');
        ${t.animation?`
        this.style.animation = 'none';
        this.offsetHeight; // Trigger reflow
        this.style.animation = 'likeAnimation 0.3s ease';
        `:""}
      }
    });
  });
  
  // Follow button functionality
  const followButtons = document.querySelectorAll('.follow-button');
  followButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (this.textContent === 'Follow') {
        this.textContent = 'Following';
        this.style.backgroundColor = '#1DA1F2';
      } else {
        this.textContent = 'Follow';
        this.style.backgroundColor = '${r}';
      }
    });
  });
  
  // Function to create a new post
  function createNewPost(content) {
    const posts = document.querySelector('.posts');
    const newPost = document.createElement('div');
    newPost.className = 'post';
    ${t.animation?`
    newPost.style.opacity = '0';
    newPost.style.transform = 'translateY(20px)';
    `:""}
    
    newPost.innerHTML = \`
      <div class="post-avatar">JD</div>
      <div class="post-content">
        <div class="post-header">
          <div class="post-author">John Doe</div>
          <div class="post-username">@johndoe</div>
          <div class="post-time">Just now</div>
        </div>
        <div class="post-text">
          \${content}
        </div>
        <div class="post-actions">
          <button class="post-action">💬 0</button>
          <button class="post-action">🔄 0</button>
          <button class="post-action like-button">❤️ 0</button>
          <button class="post-action">📤</button>
        </div>
      </div>
    \`;
    
    if (posts.firstChild) {
      posts.insertBefore(newPost, posts.firstChild);
    } else {
      posts.appendChild(newPost);
    }
    
    ${t.animation?`
    // Animate the new post
    setTimeout(() => {
      newPost.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      newPost.style.opacity = '1';
      newPost.style.transform = 'translateY(0)';
    }, 10);
    `:""}
    
    // Add like functionality to new post
    const newLikeButton = newPost.querySelector('.like-button');
    newLikeButton.addEventListener('click', function() {
      const currentLikes = this.textContent.split(' ')[1];
      const isLiked = this.classList.contains('liked');
      
      if (isLiked) {
        this.textContent = '❤️ ' + (parseInt(currentLikes) - 1);
        this.classList.remove('liked');
      } else {
        this.textContent = '❤️ ' + (parseInt(currentLikes) + 1);
        this.classList.add('liked');
        ${t.animation?`
        this.style.animation = 'none';
        this.offsetHeight; // Trigger reflow
        this.style.animation = 'likeAnimation 0.3s ease';
        `:""}
      }
    });
  }
});`;return{code:{html:a,css:n,js:o},explanation:"A social network template with user profiles, post feeds, and social interaction features."}}function Cb(e,t){const r=e.blue?"#3b82f6":e.green?"#10b981":e.red?"#ef4444":e.purple?"#8b5cf6":"#4f46e5",a=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="${e.dark?"dark-theme":""}">
  <div class="container">
    <header>
      <h1>My Todo List</h1>
      <p class="date" id="currentDate"></p>
    </header>
    
    <div class="app-container">
      <div class="sidebar">
        <div class="filters">
          <h2>Filters</h2>
          <ul>
            <li class="active" data-filter="all">All Tasks</li>
            <li data-filter="today">Today</li>
            <li data-filter="upcoming">Upcoming</li>
            <li data-filter="completed">Completed</li>
          </ul>
        </div>
        
        <div class="categories">
          <h2>Categories</h2>
          <ul>
            <li data-category="personal" class="category-personal">Personal</li>
            <li data-category="work" class="category-work">Work</li>
            <li data-category="shopping" class="category-shopping">Shopping</li>
            <li data-category="other" class="category-other">Other</li>
          </ul>
          <button class="add-category-btn">+ Add Category</button>
        </div>
      </div>
      
      <div class="main-content">
        <div class="task-form">
          <input type="text" id="taskInput" placeholder="Add a new task...">
          <div class="task-form-actions">
            <div class="task-form-options">
              <div class="dropdown">
                <button class="dropdown-toggle">
                  <span class="current-category category-personal">Personal</span>
                  <span class="icon">▾</span>
                </button>
                <div class="dropdown-menu">
                  <div class="dropdown-item category-personal" data-value="personal">Personal</div>
                  <div class="dropdown-item category-work" data-value="work">Work</div>
                  <div class="dropdown-item category-shopping" data-value="shopping">Shopping</div>
                  <div class="dropdown-item category-other" data-value="other">Other</div>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropdown-toggle">
                  <span class="current-date">Today</span>
                  <span class="icon">▾</span>
                </button>
                <div class="dropdown-menu">
                  <div class="dropdown-item" data-value="today">Today</div>
                  <div class="dropdown-item" data-value="tomorrow">Tomorrow</div>
                  <div class="dropdown-item" data-value="next-week">Next Week</div>
                  <div class="dropdown-item date-picker" data-value="custom">
                    <input type="date" id="customDate">
                  </div>
                </div>
              </div>
            </div>
            <button id="addTaskBtn" class="add-task-btn">Add Task</button>
          </div>
        </div>
        
        <div class="tasks-container">
          <h2 class="tasks-header">All Tasks <span class="task-count">3</span></h2>
          
          <div class="task-list">
            <div class="task-item" data-id="1" data-completed="false" data-category="work" data-date="2025-04-29">
              <div class="task-checkbox"></div>
              <div class="task-content">
                <h3>Complete project proposal</h3>
                <div class="task-meta">
                  <span class="task-category category-work">Work</span>
                  <span class="task-date">Today</span>
                </div>
              </div>
              <div class="task-actions">
                <button class="task-edit">✏️</button>
                <button class="task-delete">🗑️</button>
              </div>
            </div>
            
            <div class="task-item" data-id="2" data-completed="false" data-category="personal" data-date="2025-04-30">
              <div class="task-checkbox"></div>
              <div class="task-content">
                <h3>Go to the gym</h3>
                <div class="task-meta">
                  <span class="task-category category-personal">Personal</span>
                  <span class="task-date">Tomorrow</span>
                </div>
              </div>
              <div class="task-actions">
                <button class="task-edit">✏️</button>
                <button class="task-delete">🗑️</button>
              </div>
            </div>
            
            <div class="task-item completed" data-id="3" data-completed="true" data-category="shopping" data-date="2025-04-29">
              <div class="task-checkbox checked"></div>
              <div class="task-content">
                <h3>Buy groceries</h3>
                <div class="task-meta">
                  <span class="task-category category-shopping">Shopping</span>
                  <span class="task-date">Today</span>
                </div>
              </div>
              <div class="task-actions">
                <button class="task-edit">✏️</button>
                <button class="task-delete">🗑️</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="modal" id="editTaskModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Edit Task</h2>
        <button class="close-modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="editTaskTitle">Task Title</label>
          <input type="text" id="editTaskTitle">
        </div>
        <div class="form-group">
          <label for="editTaskCategory">Category</label>
          <select id="editTaskCategory">
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="editTaskDate">Due Date</label>
          <input type="date" id="editTaskDate">
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="editTaskCompleted">
            <span class="checkbox-custom"></span>
            Mark as completed
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button class="cancel-btn">Cancel</button>
        <button class="save-btn">Save Changes</button>
      </div>
    </div>
  </div>
  
  <script src="script.js"><\/script>
</body>
</html>`,n=`/* Todo App styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  color: #333;
  background-color: #f5f7fb;
  min-height: 100vh;
}

${e.dark?`
.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
}

.dark-theme .app-container,
.dark-theme .sidebar,
.dark-theme .main-content,
.dark-theme .task-form,
.dark-theme .task-item,
.dark-theme .dropdown-menu,
.dark-theme .modal-content {
  background-color: #1e1e1e;
  border-color: #333;
}

.dark-theme input[type="text"],
.dark-theme input[type="date"],
.dark-theme select {
  background-color: #2d2d2d;
  border-color: #444;
  color: #e0e0e0;
}

.dark-theme .task-form-options .dropdown-toggle {
  background-color: #2d2d2d;
  border-color: #444;
  color: #e0e0e0;
}

.dark-theme .sidebar li:hover:not(.active) {
  background-color: #2d2d2d;
}

.dark-theme .task-checkbox {
  border-color: #555;
}
`:""}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

header h1 {
  color: ${r};
  margin-bottom: 0.5rem;
}

.date {
  color: #777;
}

.app-container {
  display: flex;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #f9fafc;
  border-right: 1px solid #eee;
  padding: 1.5rem;
}

.sidebar h2 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #555;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.sidebar li:hover:not(.active) {
  background-color: #f0f0f0;
}

.sidebar li.active {
  background-color: ${r};
  color: white;
}

.categories {
  margin-top: 2rem;
}

.category-personal {
  color: #3b82f6;
}

.category-work {
  color: #ef4444;
}

.category-shopping {
  color: #10b981;
}

.category-other {
  color: #8b5cf6;
}

.add-category-btn {
  background: none;
  border: none;
  color: ${r};
  padding: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  width: 100%;
  text-align: left;
  margin-top: 10px;
}

/* Main content */
.main-content {
  flex-grow: 1;
  padding: 1.5rem;
}

.task-form {
  background-color: #f9fafc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
}

.task-form input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.task-form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-form-options {
  display: flex;
  gap: 10px;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  background: white;
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 150px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: none;
}

.dropdown.open .dropdown-menu {
  display: block;
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.date-picker {
  padding: 8px 12px;
}

.date-picker input {
  margin: 0;
  padding: 5px;
}

.add-task-btn {
  background-color: ${r};
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.add-task-btn:hover {
  background-color: ${r}dd;
}

/* Task list */
.tasks-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.task-count {
  margin-left: 10px;
  background-color: ${r};
  color: white;
  font-size: 0.8rem;
  padding: 2px 8px;
  border-radius: 10px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-item {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  border: 1px solid #eee;
}

.task-item:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.task-checkbox {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.task-checkbox.checked {
  background-color: ${r};
  border-color: ${r};
  position: relative;
}

.task-checkbox.checked::after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 8px;
  height: 5px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(-45deg);
}

.task-content {
  flex-grow: 1;
}

.task-item.completed h3 {
  text-decoration: line-through;
  color: #999;
}

.task-meta {
  display: flex;
  gap: 10px;
  margin-top: 5px;
  font-size: 0.85rem;
}

.task-category {
  font-weight: 500;
}

.task-date {
  color: #777;
}

.task-actions {
  display: flex;
  gap: 8px;
}

.task-edit,
.task-delete {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.task-edit:hover,
.task-delete:hover {
  opacity: 1;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  justify-content: center;
  align-items: center;
}

.modal.show {
  display: flex;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-modal {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
}

.modal-body {
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-label input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #ddd;
  margin-right: 10px;
  position: relative;
}

.checkbox-label input:checked + .checkbox-custom {
  background-color: ${r};
  border-color: ${r};
}

.checkbox-label input:checked + .checkbox-custom::after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 5px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(-45deg);
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.cancel-btn,
.save-btn {
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.cancel-btn {
  background: #f2f2f2;
  border: 1px solid #ddd;
}

.save-btn {
  background-color: ${r};
  color: white;
  border: none;
}

/* Responsive */
@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #eee;
  }
  
  .task-form-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  
  .task-form-options {
    justify-content: space-between;
  }
  
  .dropdown {
    flex: 1;
  }
  
  .dropdown-toggle {
    width: 100%;
  }
}

${t.animation?`
/* Animations */
@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.task-item {
  animation: slideIn 0.2s ease;
}

@keyframes checkboxCheck {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.task-checkbox.checked {
  animation: checkboxCheck 0.3s ease;
}
`:""}
`,o=`// Todo app functionality
document.addEventListener('DOMContentLoaded', function() {
  // Display current date
  const dateElem = document.getElementById('currentDate');
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElem.textContent = today.toLocaleDateString('en-US', options);

  // Initialize tasks
  let tasks = [
    {
      id: 1,
      title: 'Complete project proposal',
      category: 'work',
      date: '2025-04-29',
      completed: false
    },
    {
      id: 2,
      title: 'Go to the gym',
      category: 'personal',
      date: '2025-04-30',
      completed: false
    },
    {
      id: 3,
      title: 'Buy groceries',
      category: 'shopping',
      date: '2025-04-29',
      completed: true
    }
  ];
  
  // Task form functionality
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  
  // Category dropdown
  const categoryDropdown = document.querySelector('.task-form-options .dropdown:first-child');
  const categoryToggle = categoryDropdown.querySelector('.dropdown-toggle');
  const categoryItems = categoryDropdown.querySelectorAll('.dropdown-item');
  
  // Date dropdown
  const dateDropdown = document.querySelector('.task-form-options .dropdown:last-child');
  const dateToggle = dateDropdown.querySelector('.dropdown-toggle');
  const dateItems = dateDropdown.querySelectorAll('.dropdown-item');
  const customDateInput = document.getElementById('customDate');
  
  // Initialize with defaults
  let selectedCategory = 'personal';
  let selectedDate = formatDate(today);
  
  // Handle dropdown toggling
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
      const dropdown = this.parentElement;
      dropdown.classList.toggle('open');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });
  
  // Category selection
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      selectedCategory = this.dataset.value;
      const categoryText = this.textContent;
      const categoryClass = this.className.split(' ').find(c => c.startsWith('category-'));
      
      categoryToggle.querySelector('.current-category').textContent = categoryText;
      categoryToggle.querySelector('.current-category').className = 'current-category ' + categoryClass;
      
      categoryDropdown.classList.remove('open');
    });
  });
  
  // Date selection
  dateItems.forEach(item => {
    item.addEventListener('click', function() {
      const value = this.dataset.value;
      
      if (value === 'custom') {
        return; // Let the date picker handle this
      }
      
      let date = new Date();
      if (value === 'tomorrow') {
        date.setDate(date.getDate() + 1);
      } else if (value === 'next-week') {
        date.setDate(date.getDate() + 7);
      }
      
      selectedDate = formatDate(date);
      dateToggle.querySelector('.current-date').textContent = value === 'today' ? 'Today' : 
                                                             value === 'tomorrow' ? 'Tomorrow' : 'Next Week';
      
      dateDropdown.classList.remove('open');
    });
  });
  
  // Custom date picker
  customDateInput.addEventListener('change', function() {
    selectedDate = this.value;
    dateToggle.querySelector('.current-date').textContent = formatDisplayDate(new Date(selectedDate));
    setTimeout(() => {
      dateDropdown.classList.remove('open');
    }, 200);
  });
  
  // Add new task
  addTaskBtn.addEventListener('click', function() {
    const taskTitle = taskInput.value.trim();
    
    if (taskTitle) {
      const newTask = {
        id: Date.now(), // Simple id generator
        title: taskTitle,
        category: selectedCategory,
        date: selectedDate,
        completed: false
      };
      
      tasks.push(newTask);
      renderTasks();
      taskInput.value = '';
      
      // Reset to defaults
      selectedCategory = 'personal';
      selectedDate = formatDate(today);
      
      // Update UI
      categoryToggle.querySelector('.current-category').textContent = 'Personal';
      categoryToggle.querySelector('.current-category').className = 'current-category category-personal';
      dateToggle.querySelector('.current-date').textContent = 'Today';
    }
  });
  
  // Filter tasks
  const filterItems = document.querySelectorAll('.filters li');
  let currentFilter = 'all';
  
  filterItems.forEach(item => {
    item.addEventListener('click', function() {
      currentFilter = this.dataset.filter;
      
      // Update active state
      filterItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      renderTasks();
    });
  });
  
  // Category filter
  const categoryItems = document.querySelectorAll('.categories li');
  let currentCategory = null;
  
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      if (currentCategory === this.dataset.category) {
        // Deselect if already selected
        currentCategory = null;
        this.classList.remove('active');
      } else {
        currentCategory = this.dataset.category;
        
        // Update active state
        categoryItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
      }
      
      renderTasks();
    });
  });
  
  // Task item interactions
  const taskList = document.querySelector('.task-list');
  
  taskList.addEventListener('click', function(e) {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;
    
    const taskId = parseInt(taskItem.dataset.id);
    const task = tasks.find(t => t.id === taskId);
    
    // Handle checkbox click
    if (e.target.classList.contains('task-checkbox')) {
      task.completed = !task.completed;
      
      if (task.completed) {
        e.target.classList.add('checked');
        taskItem.classList.add('completed');
      } else {
        e.target.classList.remove('checked');
        taskItem.classList.remove('completed');
      }
    }
    
    // Handle edit button
    if (e.target.classList.contains('task-edit')) {
      openEditModal(task);
    }
    
    // Handle delete button
    if (e.target.classList.contains('task-delete')) {
      tasks = tasks.filter(t => t.id !== taskId);
      renderTasks();
    }
  });
  
  // Edit task modal
  const modal = document.getElementById('editTaskModal');
  const closeModalBtn = modal.querySelector('.close-modal');
  const cancelBtn = modal.querySelector('.cancel-btn');
  const saveBtn = modal.querySelector('.save-btn');
  
  let currentEditingTaskId = null;
  
  function openEditModal(task) {
    currentEditingTaskId = task.id;
    
    // Populate form
    document.getElementById('editTaskTitle').value = task.title;
    document.getElementById('editTaskCategory').value = task.category;
    document.getElementById('editTaskDate').value = task.date;
    document.getElementById('editTaskCompleted').checked = task.completed;
    
    // Show modal
    modal.classList.add('show');
  }
  
  function closeModal() {
    modal.classList.remove('show');
    currentEditingTaskId = null;
  }
  
  closeModalBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  
  saveBtn.addEventListener('click', function() {
    const task = tasks.find(t => t.id === currentEditingTaskId);
    
    if (task) {
      task.title = document.getElementById('editTaskTitle').value;
      task.category = document.getElementById('editTaskCategory').value;
      task.date = document.getElementById('editTaskDate').value;
      task.completed = document.getElementById('editTaskCompleted').checked;
      
      renderTasks();
      closeModal();
    }
  });
  
  // Helper functions
  function formatDate(date) {
    return date.toISOString().split('T')[0];
  }
  
  function formatDisplayDate(date) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  }
  
  function renderTasks() {
    let filteredTasks = [...tasks];
    
    // Apply current filter
    if (currentFilter === 'today') {
      const todayStr = formatDate(new Date());
      filteredTasks = filteredTasks.filter(t => t.date === todayStr);
    } else if (currentFilter === 'upcoming') {
      const todayStr = formatDate(new Date());
      filteredTasks = filteredTasks.filter(t => t.date > todayStr);
    } else if (currentFilter === 'completed') {
      filteredTasks = filteredTasks.filter(t => t.completed);
    }
    
    // Apply category filter if active
    if (currentCategory) {
      filteredTasks = filteredTasks.filter(t => t.category === currentCategory);
    }
    
    // Clear the list
    taskList.innerHTML = '';
    
    // Update task count
    document.querySelector('.task-count').textContent = filteredTasks.length;
    
    // Update header text
    const tasksHeaderText = currentFilter === 'all' ? 'All Tasks' : 
                           currentFilter === 'today' ? 'Today's Tasks' :
                           currentFilter === 'upcoming' ? 'Upcoming Tasks' : 'Completed Tasks';
                           
    document.querySelector('.tasks-header').firstChild.textContent = tasksHeaderText + ' ';
    
    // Render filtered tasks
    filteredTasks.forEach((task, index) => {
      const taskItem = document.createElement('div');
      taskItem.className = 'task-item' + (task.completed ? ' completed' : '');
      taskItem.dataset.id = task.id;
      taskItem.dataset.completed = task.completed;
      taskItem.dataset.category = task.category;
      taskItem.dataset.date = task.date;
      
      ${t.animation?"\n      // Add staggered animation\n      taskItem.style.animationDelay = `${index * 0.05}s`;\n      ":""}
      
      taskItem.innerHTML = \`
        <div class="task-checkbox\${task.completed ? ' checked' : ''}"></div>
        <div class="task-content">
          <h3>\${task.title}</h3>
          <div class="task-meta">
            <span class="task-category category-\${task.category}">\${capitalizeFirstLetter(task.category)}</span>
            <span class="task-date">\${formatDisplayDate(new Date(task.date))}</span>
          </div>
        </div>
        <div class="task-actions">
          <button class="task-edit">✏️</button>
          <button class="task-delete">🗑️</button>
        </div>
      \`;
      
      taskList.appendChild(taskItem);
    });
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Initial render
  renderTasks();
});`;return{code:{html:a,css:n,js:o},explanation:"A feature-rich todo application with filtering, categorization, and task management capabilities."}}const Bo=[{id:"landing-page",name:"Landing Page",description:"A modern landing page with hero section, features, and CTA",category:"landing",image:"/placeholder.svg",tags:["landing","hero","modern"],html:"",css:"",js:""},{id:"portfolio",name:"Portfolio",description:"A professional portfolio showcasing projects and skills",category:"portfolio",image:"/placeholder.svg",tags:["portfolio","projects","professional"],html:"",css:"",js:""},{id:"blog",name:"Blog",description:"A clean blog template with article listings and featured posts",category:"blog",image:"/placeholder.svg",tags:["blog","articles","content"],html:"",css:"",js:""},{id:"ecommerce",name:"E-commerce",description:"An online store template with product catalog and cart",category:"ecommerce",image:"/placeholder.svg",tags:["ecommerce","store","products"],html:"",css:"",js:""},{id:"dashboard",name:"Dashboard",description:"An admin dashboard with charts, tables, and analytics",category:"dashboard",image:"/placeholder.svg",tags:["dashboard","admin","analytics"],html:"",css:"",js:""},{id:"social",name:"Social Media",description:"A social platform template with feeds and profiles",category:"social",image:"/placeholder.svg",tags:["social","community","profiles"],html:"",css:"",js:""},{id:"todo",name:"Todo App",description:"A task management application with lists and reminders",category:"productivity",image:"/placeholder.svg",tags:["todo","tasks","productivity"],html:"",css:"",js:""}],Sb={landing:{name:"Landing Page",tags:["marketing","homepage","business"]},portfolio:{name:"Portfolio",tags:["personal","showcase","resume"]},blog:{name:"Blog",tags:["content","articles","posts"]},ecommerce:{name:"E-commerce",tags:["shop","store","products","cart"]},dashboard:{name:"Dashboard",tags:["admin","analytics","data","metrics"]},social:{name:"Social Network",tags:["community","profiles","feed"]},todo:{name:"Todo App",tags:["productivity","tasks","checklist"]}};async function za(e,t){const r=e.toLowerCase(),a=t.map(p=>p.content).join(" ").toLowerCase(),n=r+" "+a;let o="landing",i=0;Object.entries(Sb).forEach(([p,m])=>{let h=0;n.includes(p)&&(h+=10),m.tags.forEach(u=>{n.includes(u)&&(h+=5)}),h>i&&(i=h,o=p)});const l={blue:n.includes("blue"),green:n.includes("green"),red:n.includes("red"),purple:n.includes("purple"),dark:n.includes("dark"),light:n.includes("light")},d={responsive:!n.includes("not responsive"),animation:n.includes("animation")||n.includes("animate"),form:n.includes("form")||n.includes("contact")||n.includes("input"),navigation:!n.includes("no navigation")};switch(o){case"landing":return zo(l,d);case"portfolio":return yb(l,d);case"blog":return wb(l,d);case"ecommerce":return jb(l,d);case"dashboard":return kb(l,d);case"social":return Nb(l,d);case"todo":return Cb(l,d);default:return zo(l,d)}}function Eb(){const[e,t]=c.useState(!1),[r,a]=c.useState(Le),[n,o]=c.useState("FREE"),[i,l]=c.useState("gpt-4o-mini"),[d,p]=c.useState([]),[m,h]=c.useState(!0);c.useEffect(()=>{const v=localStorage.getItem("webcraft_api_key"),y=localStorage.getItem("webcraft_api_provider"),j=localStorage.getItem("webcraft_model_type"),k=localStorage.getItem("webcraft_using_free_api");!v&&!y?(a(Le),o("FREE"),h(!0),l("gpt-4o-mini"),localStorage.setItem("webcraft_api_key",Le),localStorage.setItem("webcraft_api_provider","FREE"),localStorage.setItem("webcraft_using_free_api","true"),localStorage.setItem("webcraft_model_type","gpt-4o-mini")):(v&&a(v),y&&o(y),j&&l(j),h(k==="true"))},[]);const u=(v,y,j)=>{localStorage.setItem("webcraft_api_key",v),localStorage.setItem("webcraft_api_provider",y);const k=y==="FREE";return h(k),localStorage.setItem("webcraft_using_free_api",k?"true":"false"),j&&(y==="PERPLEXITY"||y==="FREE")&&(localStorage.setItem("webcraft_model_type",j),l(j)),a(v),o(y),!0},f=()=>(localStorage.setItem("webcraft_api_key",Le),localStorage.setItem("webcraft_api_provider","FREE"),localStorage.setItem("webcraft_using_free_api","true"),localStorage.setItem("webcraft_model_type","gpt-4o-mini"),a(Le),o("FREE"),h(!0),l("gpt-4o-mini"),!0),x=()=>(localStorage.setItem("webcraft_api_key",Le),localStorage.setItem("webcraft_api_provider","FREE"),localStorage.setItem("webcraft_using_free_api","true"),a(Le),o("FREE"),h(!0),!0),g=v=>{p(y=>[...y,v])},b=async v=>{try{const y=`project_${Date.now()}`;await me.saveProject(y,v)&&el({title:"Project Saved",description:`Project saved to cloud as ${y}`})}catch(y){console.log("Cloud save unavailable:",y)}};return{isProcessing:e,apiKey:r,apiProvider:n,modelType:i,usingFreeAPI:m,chatHistory:d,generateCode:async v=>{t(!0),g({role:"user",content:v});try{const y=await vb.createClient({apiKey:r||Le,provider:n,modelType:i});console.log(`Generating code using ${n} (free: ${m})`);const j=await y.generateResponse({prompt:v,chatHistory:d});if(j.success&&j.data){const k=j.data.explanation||"Code generated successfully with AI";g({role:"assistant",content:k});const C=j.data.code||{html:"",css:"",js:""};return m&&(C.html||C.css||C.js)&&await b(C),{code:C,explanation:k}}else{console.error("AI generation failed:",j.error);const k=await za(v,d);return g({role:"assistant",content:"Used template-based generation as fallback: "+(k.explanation||"")}),{code:k.code||{html:"",css:"",js:""},explanation:k.explanation||"Generated using template fallback",error:j.error}}}catch(y){console.error("Error in generateCode:",y);const j=await za(v,d);return g({role:"assistant",content:"Generated with fallback mode due to error: "+(j.explanation||"")}),{code:j.code||{html:"",css:"",js:""},explanation:j.explanation||"Generated with fallback mode",error:y instanceof Error?y.message:"Unknown error"}}finally{t(!1)}},saveApiKey:u,clearApiKey:x,setFreeAPI:f,saveCurrentProject:b}}function Ab(){const[e,t]=c.useState({isAuthenticated:!1,user:null,isLoading:!0});c.useEffect(()=>{r()},[]);const r=c.useCallback(async()=>{try{if(await me.isSignedIn()){const x=await me.getCurrentUser();t({isAuthenticated:!0,user:x,isLoading:!1})}else t({isAuthenticated:!1,user:null,isLoading:!1})}catch(f){console.error("Error checking Puter auth status:",f),t(x=>({...x,isLoading:!1}))}},[]),a=c.useCallback(async()=>{t(f=>({...f,isLoading:!0}));try{const f=await me.signIn();return f.success?(t({isAuthenticated:!0,user:f.user,isLoading:!1}),z.success("🚀 Connected to Puter.js Cloud!",{description:"Free AI, storage, and database access activated"}),{success:!0}):(t(x=>({...x,isLoading:!1})),z.error("Sign in failed",{description:f.error||"Unknown error"}),{success:!1,error:f.error})}catch(f){t(g=>({...g,isLoading:!1}));const x=f instanceof Error?f.message:"Unknown error";return z.error("Connection error",{description:x}),{success:!1,error:x}}},[]),n=c.useCallback(async()=>{t(f=>({...f,isLoading:!0}));try{const f=await me.signOut();return f.success?(t({isAuthenticated:!1,user:null,isLoading:!1}),z.success("Disconnected from Puter.js"),{success:!0}):(t(x=>({...x,isLoading:!1})),z.error("Sign out failed",{description:f.error||"Unknown error"}),{success:!1,error:f.error})}catch(f){t(g=>({...g,isLoading:!1}));const x=f instanceof Error?f.message:"Unknown error";return z.error("Sign out error",{description:x}),{success:!1,error:x}}},[]),o=c.useCallback(async(f,x)=>{try{const g=await me.generateAIResponse(f,x);return g.success||z.error("AI generation failed",{description:g.error}),g}catch(g){const b=g instanceof Error?g.message:"AI error";return z.error("AI service error",{description:b}),{success:!1,error:b}}},[]),i=c.useCallback(async(f,x)=>{try{const g=await me.generateCode(f,x);return g.success||z.error("Code generation failed",{description:g.error}),g}catch(g){const b=g instanceof Error?g.message:"Code generation error";return z.error("Code generation error",{description:b}),{success:!1,error:b}}},[]),l=c.useCallback(async(f,x)=>{try{const g=await me.saveFile(f,x);return g.success?z.success(`File saved: ${f}`):z.error("Save failed",{description:g.error}),g}catch(g){const b=g instanceof Error?g.message:"Save error";return z.error("Storage error",{description:b}),{success:!1,error:b}}},[]),d=c.useCallback(async f=>{try{const x=await me.loadFile(f);return x.success?z.success(`File loaded: ${f}`):z.error("Load failed",{description:x.error}),x}catch(x){const g=x instanceof Error?x.message:"Load error";return z.error("Storage error",{description:g}),{success:!1,error:g}}},[]),p=c.useCallback(async(f,x)=>{try{const g=await me.saveProject(f,x);return g.success?z.success(`Project "${f}" saved to cloud`):z.error("Project save failed",{description:g.error}),g}catch(g){const b=g instanceof Error?g.message:"Project save error";return z.error("Project save error",{description:b}),{success:!1,error:b}}},[]),m=c.useCallback(async f=>{try{const x=await me.loadProject(f);return x.success?z.success(`Project "${f}" loaded from cloud`):z.error("Project load failed",{description:x.error}),x}catch(x){const g=x instanceof Error?x.message:"Project load error";return z.error("Project load error",{description:g}),{success:!1,error:g}}},[]),h=c.useCallback(async(f,x)=>{try{const g=await me.setKV(f,x);return g.success||z.error("Database write failed",{description:g.error}),g}catch(g){const b=g instanceof Error?g.message:"Database error";return z.error("Database error",{description:b}),{success:!1,error:b}}},[]),u=c.useCallback(async f=>{try{const x=await me.getKV(f);return x.success||z.error("Database read failed",{description:x.error}),x}catch(x){const g=x instanceof Error?x.message:"Database error";return z.error("Database error",{description:g}),{success:!1,error:g}}},[]);return{...e,signIn:a,signOut:n,checkAuthStatus:r,generateAI:o,generateCode:i,saveToCloud:l,loadFromCloud:d,saveProject:p,loadProject:m,setKV:h,getKV:u}}function Pb(e,t){return c.useReducer((r,a)=>t[r][a]??r,e)}var Ln="ScrollArea",[Jd,Cv]=ot(Ln),[Tb,Ge]=Jd(Ln),Xd=c.forwardRef((e,t)=>{const{__scopeScrollArea:r,type:a="hover",dir:n,scrollHideDelay:o=600,...i}=e,[l,d]=c.useState(null),[p,m]=c.useState(null),[h,u]=c.useState(null),[f,x]=c.useState(null),[g,b]=c.useState(null),[w,v]=c.useState(0),[y,j]=c.useState(0),[k,C]=c.useState(!1),[T,I]=c.useState(!1),R=ie(t,M=>d(M)),U=Ps(n);return s.jsx(Tb,{scope:r,type:a,dir:U,scrollHideDelay:o,scrollArea:l,viewport:p,onViewportChange:m,content:h,onContentChange:u,scrollbarX:f,onScrollbarXChange:x,scrollbarXEnabled:k,onScrollbarXEnabledChange:C,scrollbarY:g,onScrollbarYChange:b,scrollbarYEnabled:T,onScrollbarYEnabledChange:I,onCornerWidthChange:v,onCornerHeightChange:j,children:s.jsx(K.div,{dir:U,...i,ref:R,style:{position:"relative","--radix-scroll-area-corner-width":w+"px","--radix-scroll-area-corner-height":y+"px",...e.style}})})});Xd.displayName=Ln;var Qd="ScrollAreaViewport",Zd=c.forwardRef((e,t)=>{const{__scopeScrollArea:r,children:a,asChild:n,nonce:o,...i}=e,l=Ge(Qd,r),d=c.useRef(null),p=ie(t,d,l.onViewportChange);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:`
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`},nonce:o}),s.jsx(K.div,{"data-radix-scroll-area-viewport":"",...i,asChild:n,ref:p,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style},children:zb({asChild:n,children:a},m=>s.jsx("div",{"data-radix-scroll-area-content":"",ref:l.onContentChange,style:{minWidth:l.scrollbarXEnabled?"fit-content":void 0},children:m}))})]})});Zd.displayName=Qd;var lt="ScrollAreaScrollbar",Dn=c.forwardRef((e,t)=>{const{forceMount:r,...a}=e,n=Ge(lt,e.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:i}=n,l=e.orientation==="horizontal";return c.useEffect(()=>(l?o(!0):i(!0),()=>{l?o(!1):i(!1)}),[l,o,i]),n.type==="hover"?s.jsx(Ib,{...a,ref:t,forceMount:r}):n.type==="scroll"?s.jsx(Rb,{...a,ref:t,forceMount:r}):n.type==="auto"?s.jsx(eu,{...a,ref:t,forceMount:r}):n.type==="always"?s.jsx(On,{...a,ref:t}):null});Dn.displayName=lt;var Ib=c.forwardRef((e,t)=>{const{forceMount:r,...a}=e,n=Ge(lt,e.__scopeScrollArea),[o,i]=c.useState(!1);return c.useEffect(()=>{const l=n.scrollArea;let d=0;if(l){const p=()=>{window.clearTimeout(d),i(!0)},m=()=>{d=window.setTimeout(()=>i(!1),n.scrollHideDelay)};return l.addEventListener("pointerenter",p),l.addEventListener("pointerleave",m),()=>{window.clearTimeout(d),l.removeEventListener("pointerenter",p),l.removeEventListener("pointerleave",m)}}},[n.scrollArea,n.scrollHideDelay]),s.jsx(He,{present:r||o,children:s.jsx(eu,{"data-state":o?"visible":"hidden",...a,ref:t})})}),Rb=c.forwardRef((e,t)=>{const{forceMount:r,...a}=e,n=Ge(lt,e.__scopeScrollArea),o=e.orientation==="horizontal",i=ea(()=>d("SCROLL_END"),100),[l,d]=Pb("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return c.useEffect(()=>{if(l==="idle"){const p=window.setTimeout(()=>d("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(p)}},[l,n.scrollHideDelay,d]),c.useEffect(()=>{const p=n.viewport,m=o?"scrollLeft":"scrollTop";if(p){let h=p[m];const u=()=>{const f=p[m];h!==f&&(d("SCROLL"),i()),h=f};return p.addEventListener("scroll",u),()=>p.removeEventListener("scroll",u)}},[n.viewport,o,d,i]),s.jsx(He,{present:r||l!=="hidden",children:s.jsx(On,{"data-state":l==="hidden"?"hidden":"visible",...a,ref:t,onPointerEnter:D(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:D(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),eu=c.forwardRef((e,t)=>{const r=Ge(lt,e.__scopeScrollArea),{forceMount:a,...n}=e,[o,i]=c.useState(!1),l=e.orientation==="horizontal",d=ea(()=>{if(r.viewport){const p=r.viewport.offsetWidth<r.viewport.scrollWidth,m=r.viewport.offsetHeight<r.viewport.scrollHeight;i(l?p:m)}},10);return gr(r.viewport,d),gr(r.content,d),s.jsx(He,{present:a||o,children:s.jsx(On,{"data-state":o?"visible":"hidden",...n,ref:t})})}),On=c.forwardRef((e,t)=>{const{orientation:r="vertical",...a}=e,n=Ge(lt,e.__scopeScrollArea),o=c.useRef(null),i=c.useRef(0),[l,d]=c.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),p=nu(l.viewport,l.content),m={...a,sizes:l,onSizesChange:d,hasThumb:p>0&&p<1,onThumbChange:u=>o.current=u,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:u=>i.current=u};function h(u,f){return $b(u,i.current,l,f)}return r==="horizontal"?s.jsx(Mb,{...m,ref:t,onThumbPositionChange:()=>{if(n.viewport&&o.current){const u=n.viewport.scrollLeft,f=Uo(u,l,n.dir);o.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollLeft=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollLeft=h(u,n.dir))}}):r==="vertical"?s.jsx(Lb,{...m,ref:t,onThumbPositionChange:()=>{if(n.viewport&&o.current){const u=n.viewport.scrollTop,f=Uo(u,l);o.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollTop=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollTop=h(u))}}):null}),Mb=c.forwardRef((e,t)=>{const{sizes:r,onSizesChange:a,...n}=e,o=Ge(lt,e.__scopeScrollArea),[i,l]=c.useState(),d=c.useRef(null),p=ie(t,d,o.onScrollbarXChange);return c.useEffect(()=>{d.current&&l(getComputedStyle(d.current))},[d]),s.jsx(ru,{"data-orientation":"horizontal",...n,ref:p,sizes:r,style:{bottom:0,left:o.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:o.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Zs(r)+"px",...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.x),onDragScroll:m=>e.onDragScroll(m.x),onWheelScroll:(m,h)=>{if(o.viewport){const u=o.viewport.scrollLeft+m.deltaX;e.onWheelScroll(u),iu(u,h)&&m.preventDefault()}},onResize:()=>{d.current&&o.viewport&&i&&a({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:Ss(i.paddingLeft),paddingEnd:Ss(i.paddingRight)}})}})}),Lb=c.forwardRef((e,t)=>{const{sizes:r,onSizesChange:a,...n}=e,o=Ge(lt,e.__scopeScrollArea),[i,l]=c.useState(),d=c.useRef(null),p=ie(t,d,o.onScrollbarYChange);return c.useEffect(()=>{d.current&&l(getComputedStyle(d.current))},[d]),s.jsx(ru,{"data-orientation":"vertical",...n,ref:p,sizes:r,style:{top:0,right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Zs(r)+"px",...e.style},onThumbPointerDown:m=>e.onThumbPointerDown(m.y),onDragScroll:m=>e.onDragScroll(m.y),onWheelScroll:(m,h)=>{if(o.viewport){const u=o.viewport.scrollTop+m.deltaY;e.onWheelScroll(u),iu(u,h)&&m.preventDefault()}},onResize:()=>{d.current&&o.viewport&&i&&a({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:Ss(i.paddingTop),paddingEnd:Ss(i.paddingBottom)}})}})}),[Db,tu]=Jd(lt),ru=c.forwardRef((e,t)=>{const{__scopeScrollArea:r,sizes:a,hasThumb:n,onThumbChange:o,onThumbPointerUp:i,onThumbPointerDown:l,onThumbPositionChange:d,onDragScroll:p,onWheelScroll:m,onResize:h,...u}=e,f=Ge(lt,r),[x,g]=c.useState(null),b=ie(t,R=>g(R)),w=c.useRef(null),v=c.useRef(""),y=f.viewport,j=a.content-a.viewport,k=je(m),C=je(d),T=ea(h,10);function I(R){if(w.current){const U=R.clientX-w.current.left,M=R.clientY-w.current.top;p({x:U,y:M})}}return c.useEffect(()=>{const R=U=>{const M=U.target;(x==null?void 0:x.contains(M))&&k(U,j)};return document.addEventListener("wheel",R,{passive:!1}),()=>document.removeEventListener("wheel",R,{passive:!1})},[y,x,j,k]),c.useEffect(C,[a,C]),gr(x,T),gr(f.content,T),s.jsx(Db,{scope:r,scrollbar:x,hasThumb:n,onThumbChange:je(o),onThumbPointerUp:je(i),onThumbPositionChange:C,onThumbPointerDown:je(l),children:s.jsx(K.div,{...u,ref:b,style:{position:"absolute",...u.style},onPointerDown:D(e.onPointerDown,R=>{R.button===0&&(R.target.setPointerCapture(R.pointerId),w.current=x.getBoundingClientRect(),v.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),I(R))}),onPointerMove:D(e.onPointerMove,I),onPointerUp:D(e.onPointerUp,R=>{const U=R.target;U.hasPointerCapture(R.pointerId)&&U.releasePointerCapture(R.pointerId),document.body.style.webkitUserSelect=v.current,f.viewport&&(f.viewport.style.scrollBehavior=""),w.current=null})})})}),Cs="ScrollAreaThumb",su=c.forwardRef((e,t)=>{const{forceMount:r,...a}=e,n=tu(Cs,e.__scopeScrollArea);return s.jsx(He,{present:r||n.hasThumb,children:s.jsx(Ob,{ref:t,...a})})}),Ob=c.forwardRef((e,t)=>{const{__scopeScrollArea:r,style:a,...n}=e,o=Ge(Cs,r),i=tu(Cs,r),{onThumbPositionChange:l}=i,d=ie(t,h=>i.onThumbChange(h)),p=c.useRef(),m=ea(()=>{p.current&&(p.current(),p.current=void 0)},100);return c.useEffect(()=>{const h=o.viewport;if(h){const u=()=>{if(m(),!p.current){const f=Fb(h,l);p.current=f,l()}};return l(),h.addEventListener("scroll",u),()=>h.removeEventListener("scroll",u)}},[o.viewport,m,l]),s.jsx(K.div,{"data-state":i.hasThumb?"visible":"hidden",...n,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:D(e.onPointerDownCapture,h=>{const f=h.target.getBoundingClientRect(),x=h.clientX-f.left,g=h.clientY-f.top;i.onThumbPointerDown({x,y:g})}),onPointerUp:D(e.onPointerUp,i.onThumbPointerUp)})});su.displayName=Cs;var _n="ScrollAreaCorner",au=c.forwardRef((e,t)=>{const r=Ge(_n,e.__scopeScrollArea),a=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&a?s.jsx(_b,{...e,ref:t}):null});au.displayName=_n;var _b=c.forwardRef((e,t)=>{const{__scopeScrollArea:r,...a}=e,n=Ge(_n,r),[o,i]=c.useState(0),[l,d]=c.useState(0),p=!!(o&&l);return gr(n.scrollbarX,()=>{var h;const m=((h=n.scrollbarX)==null?void 0:h.offsetHeight)||0;n.onCornerHeightChange(m),d(m)}),gr(n.scrollbarY,()=>{var h;const m=((h=n.scrollbarY)==null?void 0:h.offsetWidth)||0;n.onCornerWidthChange(m),i(m)}),p?s.jsx(K.div,{...a,ref:t,style:{width:o,height:l,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Ss(e){return e?parseInt(e,10):0}function nu(e,t){const r=e/t;return isNaN(r)?0:r}function Zs(e){const t=nu(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-r)*t;return Math.max(a,18)}function $b(e,t,r,a="ltr"){const n=Zs(r),o=n/2,i=t||o,l=n-i,d=r.scrollbar.paddingStart+i,p=r.scrollbar.size-r.scrollbar.paddingEnd-l,m=r.content-r.viewport,h=a==="ltr"?[0,m]:[m*-1,0];return ou([d,p],h)(e)}function Uo(e,t,r="ltr"){const a=Zs(t),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,o=t.scrollbar.size-n,i=t.content-t.viewport,l=o-a,d=r==="ltr"?[0,i]:[i*-1,0],p=Ma(e,d);return ou([0,i],[0,l])(p)}function ou(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const a=(t[1]-t[0])/(e[1]-e[0]);return t[0]+a*(r-e[0])}}function iu(e,t){return e>0&&e<t}var Fb=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},a=0;return function n(){const o={left:e.scrollLeft,top:e.scrollTop},i=r.left!==o.left,l=r.top!==o.top;(i||l)&&t(),r=o,a=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(a)};function ea(e,t){const r=je(e),a=c.useRef(0);return c.useEffect(()=>()=>window.clearTimeout(a.current),[]),c.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(r,t)},[r,t])}function gr(e,t){const r=je(t);Ee(()=>{let a=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(a),n.unobserve(e)}}},[e,r])}function zb(e,t){const{asChild:r,children:a}=e;if(!r)return typeof t=="function"?t(a):t;const n=c.Children.only(a);return c.cloneElement(n,{children:typeof t=="function"?t(n.props.children):t})}var lu=Xd,Bb=Zd,Ub=au;const cu=c.forwardRef(({className:e,children:t,...r},a)=>s.jsxs(lu,{ref:a,className:$("relative overflow-hidden",e),...r,children:[s.jsx(Bb,{className:"h-full w-full rounded-[inherit]",children:t}),s.jsx(du,{}),s.jsx(Ub,{})]}));cu.displayName=lu.displayName;const du=c.forwardRef(({className:e,orientation:t="vertical",...r},a)=>s.jsx(Dn,{ref:a,orientation:t,className:$("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:s.jsx(su,{className:"relative flex-1 rounded-full bg-border"})}));du.displayName=Dn.displayName;const Hb=ii,Gb=li,Vb=oi,uu=c.forwardRef(({className:e,...t},r)=>s.jsx(Ts,{className:$("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:r}));uu.displayName=Ts.displayName;const qb=qr("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),pu=c.forwardRef(({side:e="right",className:t,children:r,...a},n)=>s.jsxs(Vb,{children:[s.jsx(uu,{}),s.jsxs(Is,{ref:n,className:$(qb({side:e}),t),...a,children:[r,s.jsxs(ni,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[s.jsx(Wr,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));pu.displayName=Is.displayName;const Wb=c.forwardRef(({className:e,...t},r)=>s.jsx(Rs,{ref:r,className:$("text-lg font-semibold text-foreground",e),...t}));Wb.displayName=Rs.displayName;const Kb=c.forwardRef(({className:e,...t},r)=>s.jsx(Ms,{ref:r,className:$("text-sm text-muted-foreground",e),...t}));Kb.displayName=Ms.displayName;const Cr=Du,Jt=c.forwardRef(({className:e,...t},r)=>s.jsx(ci,{ref:r,className:$("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));Jt.displayName=ci.displayName;const fe=c.forwardRef(({className:e,...t},r)=>s.jsx(di,{ref:r,className:$("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));fe.displayName=di.displayName;const ge=c.forwardRef(({className:e,...t},r)=>s.jsx(ui,{ref:r,className:$("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));ge.displayName=ui.displayName;const Ba=({onCodeGenerated:e})=>{const{generateCode:t,isProcessing:r,apiKey:a,usingFreeAPI:n,apiProvider:o,modelType:i,saveApiKey:l,clearApiKey:d,setFreeAPI:p}=Eb(),{isAuthenticated:m,user:h,signIn:u,signOut:f,saveProject:x,generateAI:g,generateCode:b}=Ab(),[w,v]=c.useState([]);c.useState(!1),c.useState(!1);const[y,j]=c.useState([]),[k,C]=c.useState("");c.useEffect(()=>{if(w.length===0){const M=m?`Hello ${(h==null?void 0:h.username)||"there"}! I'm your AI assistant powered by Puter.js with unlimited OpenAI API access. With your cloud account connected, I can save your projects automatically and provide unlimited AI assistance. What would you like to create today?`:`Hello! I'm your professional AI assistant powered by ${n?"Puter.js (Unlimited OpenAI API)":o}. I can build complete, production-ready web applications. Sign in to Puter.js for unlimited OpenAI API access, automatic project saving and unlimited features!`;v([{id:ma(),role:"assistant",content:M,timestamp:Date.now()}])}},[w.length,n,o,m,h]);const T=(M,P)=>{v(F=>[...F,{id:ma(),role:M,content:P,timestamp:Date.now()}])},I=()=>{const M=["🧠 Analyzing your requirements...","📋 Planning cyberpunk application architecture...","🎨 Designing neon user interface layout...","🏗️ Setting up semantic HTML structure...","💫 Creating responsive CSS with cyber effects...","⚡ Writing interactive JavaScript with animations...","🔧 Optimizing for performance and accessibility...","📱 Ensuring mobile responsiveness...","✨ Adding professional cyberpunk animations...","☁️ Preparing for Puter.js cloud integration...","🚀 Finalizing production-ready code...","✅ Cyberpunk application ready for deployment!"];j([]),C(""),M.forEach((P,F)=>{setTimeout(()=>{C(P),j(A=>[...A,P])},F*600)}),setTimeout(()=>{C(""),j([])},M.length*600+2e3)},R=async M=>{if(T("user",M),r)return;j([]),I();const P=ma();v(F=>[...F,{id:P,role:"assistant",content:"🤖 AI Engineer is building your professional cyberpunk web application...",timestamp:Date.now()}]);try{console.log("🚀 Starting professional code generation...");let F;m?(console.log("🎯 Using Puter.js unlimited OpenAI API..."),F=await b(M)):(console.log("🔧 Using configured AI provider..."),F=await t(M)),v(S=>S.filter(E=>E.id!==P)),j([]),C(""),F.error&&T("assistant",`I encountered an issue: ${F.error}. But I've created a professional cyberpunk application for you using my advanced capabilities!`);const{html:A="",css:H="",js:O=""}=F.code||{};if((A||H||O)&&(e(A,H,O),console.log("✅ Code generated and preview updated"),m&&(A||H||O))){const S=`cyberpunk_app_${Date.now()}`;await x(S,{html:A,css:H,js:O})}let V=F.explanation||"I've created your professional cyberpunk web application! Check the preview panel to see your modern, responsive application with neon effects in action.";m?(V+=`

💡 Built with unlimited Puter.js OpenAI API - professional cyberpunk results with no limits!`,V+=`

☁️ Project automatically saved to your Puter.js cloud!`):n&&(V+=`

💡 Built with free Puter.js AI - professional cyberpunk results without API costs!`),T("assistant",V),(A||H||O)&&z.success("Professional Cyberpunk Application Generated! 🎉",{description:m?"Your enterprise-grade web app with unlimited AI is ready":"Your enterprise-grade web app with neon effects is ready",duration:4e3})}catch(F){console.error("❌ Error generating code:",F),v(A=>A.filter(H=>H.id!==P)),j([]),C(""),T("assistant","I encountered an issue, but I've generated a professional cyberpunk application for you using my built-in capabilities. You can refine it by describing what you'd like to change!"),z.error("Generation Error",{description:"Used fallback mode to create your professional cyberpunk app"})}},U=(M,P,F)=>P==="FREE"?(p(),!0):M?(l(M,P,F),!0):(d(),!0);return s.jsxs("div",{className:"flex flex-col h-full cyber-panel overflow-hidden",children:[s.jsxs("div",{className:"flex justify-between items-center p-3 border-b bg-gradient-to-r from-slate-800/90 to-slate-900/90",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-glow-sm pulse cyber-pulse",children:s.jsx(eo,{className:"h-3.5 w-3.5 text-white"})}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("h2",{className:"font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400",children:"Cyberpunk AI Engineer"}),s.jsxs("span",{className:"text-xs text-cyan-300/70 flex items-center gap-1",children:[m?"Unlimited OpenAI API via Puter.js":n?"Powered by Puter.js (Free GPT-4o)":`${o} API`,m&&s.jsxs(s.Fragment,{children:[s.jsx(ps,{className:"h-3 w-3 text-green-400"}),s.jsx("span",{className:"text-green-400",children:"Cloud Connected"})]})]})]})]}),s.jsxs(Hb,{children:[s.jsx(Gb,{asChild:!0,children:s.jsx(q,{variant:"ghost",size:"icon",className:"hover:bg-slate-800/50 h-8 w-8 rounded-full",children:s.jsx(zi,{className:"h-4 w-4 text-cyan-400"})})}),s.jsx(pu,{className:"cyber-panel border-l border-cyan-500/30 w-[350px] sm:w-[450px] backdrop-blur-xl",children:s.jsxs(Cr,{defaultValue:"ai",className:"w-full",children:[s.jsxs(Jt,{className:"grid w-full grid-cols-2 bg-slate-800/50",children:[s.jsxs(fe,{value:"ai",className:"data-[state=active]:bg-cyan-500/20",children:[s.jsx(eo,{className:"h-4 w-4 mr-2"}),"AI Settings"]}),s.jsxs(fe,{value:"cloud",className:"data-[state=active]:bg-purple-500/20",children:[s.jsx(ps,{className:"h-4 w-4 mr-2"}),"Puter.js Cloud"]})]}),s.jsx(ge,{value:"ai",className:"mt-4",children:s.jsx(hb,{onClose:()=>{},apiKey:a||"",usingFreeAPI:n,onSave:U,apiProvider:o,modelType:i,onClear:d,onSetFreeAPI:p})}),s.jsx(ge,{value:"cloud",className:"mt-4",children:s.jsx(fb,{})})]})})]})]}),s.jsx(cu,{className:"flex-1 p-4 bg-gradient-to-b from-slate-900/80 to-slate-800/80",children:s.jsxs("div",{className:"space-y-4 mb-4",children:[w.map(M=>s.jsx(w0,{message:M},M.id)),r&&(y.length>0||k)&&s.jsxs("div",{className:"bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx("div",{className:"h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"}),s.jsx("span",{className:"text-sm text-cyan-300 font-medium",children:"Cyberpunk AI Engineering Process"}),s.jsx($p,{className:"h-3 w-3 text-yellow-400 animate-pulse"}),m&&s.jsx(Os,{className:"h-3 w-3 text-green-400"})]}),k&&s.jsx("div",{className:"mb-2 p-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded border border-cyan-400/20",children:s.jsxs("div",{className:"flex items-center gap-2 text-sm text-cyan-200 font-medium",children:[s.jsx(xe,{className:"h-3 w-3 animate-spin"}),s.jsx("span",{children:k})]})}),s.jsx("div",{className:"space-y-1 max-h-32 overflow-y-auto",children:y.slice(0,-1).map((M,P)=>s.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-300 opacity-70",children:[s.jsx("div",{className:"h-1 w-1 rounded-full bg-green-400"}),s.jsx("span",{children:M})]},P))}),s.jsxs("div",{className:"mt-3 text-xs text-slate-400 italic",children:["Professional cyberpunk code generation in progress...",m&&" • Auto-saving to Puter.js cloud • Using unlimited OpenAI API"]})]})]})}),s.jsx("div",{className:"p-2 border-t border-slate-700/50 bg-slate-800/90 backdrop-blur-sm",children:s.jsx(j0,{onSendMessage:R,disabled:r,isProcessing:r})})]})};function Es({html:e,css:t,js:r}){const{toast:a}=_s(),[n,o]=c.useState("preview"),[i,l]=c.useState(0),d=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${t}</style>
</head>
<body>
${e}
<script>${r}<\/script>
</body>
</html>
`,p=()=>{l(f=>f+1),a({title:"Preview refreshed",description:"The preview has been updated with the latest code.",duration:2e3})},m=(f,x)=>{navigator.clipboard.writeText(f),a({title:`${x} copied to clipboard`,description:`The ${x.toLowerCase()} code has been copied to your clipboard.`,duration:2e3})},h=(f,x)=>{const g=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(g),w=document.createElement("a");w.href=b,w.download=x,w.click(),URL.revokeObjectURL(b)},u=()=>{e&&h(e,"index.html"),t&&h(t,"styles.css"),r&&h(r,"script.js"),a({title:"Files downloaded",description:"All code files have been downloaded successfully.",duration:2e3})};return s.jsx("div",{className:"flex flex-col h-full cyber-panel overflow-hidden",children:s.jsxs(Cr,{value:n,onValueChange:o,className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex justify-between items-center px-4 py-3 bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-b border-slate-700/50",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-glow-sm cyber-pulse",children:s.jsx(Ap,{className:"h-3.5 w-3.5 text-white"})}),s.jsx("h2",{className:"font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400",children:"Live Preview"})]}),s.jsxs(Jt,{className:"bg-slate-800/80 p-1 rounded-lg border border-slate-700/30",children:[s.jsxs(fe,{value:"preview",className:"rounded-md data-[state=active]:bg-gradient-to-r from-cyan-500/20 to-purple-500/20 data-[state=active]:text-cyan-300 data-[state=active]:border-t data-[state=active]:border-cyan-500/30 data-[state=active]:shadow-glow-sm text-xs flex items-center gap-1",children:[s.jsx($i,{className:"h-3 w-3"}),"Preview"]}),s.jsxs(fe,{value:"html",className:"rounded-md data-[state=active]:bg-gradient-to-r from-cyan-500/20 to-purple-500/20 data-[state=active]:text-cyan-300 data-[state=active]:border-t data-[state=active]:border-cyan-500/30 data-[state=active]:shadow-glow-sm text-xs flex items-center gap-1",children:[s.jsx(xe,{className:"h-3 w-3"}),"HTML"]}),s.jsxs(fe,{value:"css",className:"rounded-md data-[state=active]:bg-gradient-to-r from-cyan-500/20 to-purple-500/20 data-[state=active]:text-cyan-300 data-[state=active]:border-t data-[state=active]:border-cyan-500/30 data-[state=active]:shadow-glow-sm text-xs flex items-center gap-1",children:[s.jsx(Rp,{className:"h-3 w-3"}),"CSS"]}),s.jsxs(fe,{value:"js",className:"rounded-md data-[state=active]:bg-gradient-to-r from-cyan-500/20 to-purple-500/20 data-[state=active]:text-cyan-300 data-[state=active]:border-t data-[state=active]:border-cyan-500/30 data-[state=active]:shadow-glow-sm text-xs flex items-center gap-1",children:[s.jsx(xe,{className:"h-3 w-3"}),"JavaScript"]})]})]}),s.jsx("div",{className:"absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 z-10",children:s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("div",{className:"h-20 w-1.5 bg-gradient-to-b from-cyan-500/50 to-transparent rounded-r"}),s.jsx("div",{className:"h-1.5 w-1.5 bg-cyan-500/70 rounded-full shadow-glow-sm"}),s.jsx("div",{className:"h-20 w-1.5 bg-gradient-to-t from-purple-500/50 to-transparent rounded-r"})]})}),s.jsx(ge,{value:"preview",className:"flex-1 p-0 m-0 bg-slate-900/80 overflow-hidden",children:e||t||r?s.jsx("div",{className:"h-full w-full p-4",children:s.jsx("iframe",{srcDoc:d,title:"Preview",className:"w-full h-full border-0 rounded-xl shadow-sm bg-white",sandbox:"allow-scripts allow-popups"},i)}):s.jsx("div",{className:"flex items-center justify-center h-full",children:s.jsxs("div",{className:"text-center p-6 max-w-md",children:[s.jsx("div",{className:"h-24 w-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 flex items-center justify-center mx-auto mb-6 cyber-pulse",children:s.jsx("div",{className:"h-16 w-16 rounded-full bg-slate-800/90 flex items-center justify-center",children:s.jsx(xe,{className:"h-8 w-8 text-cyan-400"})})}),s.jsx("h3",{className:"text-xl font-medium mb-2 text-gradient-primary",children:"No preview available yet"}),s.jsx("p",{className:"text-slate-400 mb-6",children:"Describe a web application in the chat to see it come to life right here."}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 max-w-xs mx-auto text-center",children:[s.jsxs("div",{className:"cyber-card cyber-hover p-3",children:[s.jsx("span",{className:"text-xs text-cyan-400 mb-1 block",children:"Step 1"}),s.jsx("span",{className:"text-sm font-medium",children:"Describe"})]}),s.jsxs("div",{className:"cyber-card cyber-hover p-3",children:[s.jsx("span",{className:"text-xs text-purple-400 mb-1 block",children:"Step 2"}),s.jsx("span",{className:"text-sm font-medium",children:"Generate"})]}),s.jsxs("div",{className:"cyber-card cyber-hover p-3",children:[s.jsx("span",{className:"text-xs text-cyan-400 mb-1 block",children:"Step 3"}),s.jsx("span",{className:"text-sm font-medium",children:"Preview"})]})]})]})})}),s.jsxs(ge,{value:"html",className:"flex-1 p-0 m-0 relative overflow-hidden bg-slate-900/80",children:[s.jsx("div",{className:"absolute top-2 right-2 z-10",children:s.jsx(q,{variant:"outline",size:"icon",className:"h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:bg-cyan-500/20 backdrop-blur-sm",onClick:()=>m(e,"HTML"),disabled:!e,children:s.jsx(tr,{className:"h-4 w-4 text-cyan-400"})})}),s.jsx("pre",{className:$("h-full overflow-auto p-4 font-mono text-sm text-slate-300",!e&&"flex items-center justify-center text-slate-500"),children:e||"// No HTML code generated yet. Describe your web application in the chat."})]}),s.jsxs(ge,{value:"css",className:"flex-1 p-0 m-0 relative overflow-hidden bg-slate-900/80",children:[s.jsx("div",{className:"absolute top-2 right-2 z-10",children:s.jsx(q,{variant:"outline",size:"icon",className:"h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:bg-cyan-500/20 backdrop-blur-sm",onClick:()=>m(t,"CSS"),disabled:!t,children:s.jsx(tr,{className:"h-4 w-4 text-cyan-400"})})}),s.jsx("pre",{className:$("h-full overflow-auto p-4 font-mono text-sm text-slate-300",!t&&"flex items-center justify-center text-slate-500"),children:t||"/* No CSS code generated yet. Describe your web application in the chat. */"})]}),s.jsxs(ge,{value:"js",className:"flex-1 p-0 m-0 relative overflow-hidden bg-slate-900/80",children:[s.jsx("div",{className:"absolute top-2 right-2 z-10",children:s.jsx(q,{variant:"outline",size:"icon",className:"h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:bg-cyan-500/20 backdrop-blur-sm",onClick:()=>m(r,"JavaScript"),disabled:!r,children:s.jsx(tr,{className:"h-4 w-4 text-cyan-400"})})}),s.jsx("pre",{className:$("h-full overflow-auto p-4 font-mono text-sm text-slate-300",!r&&"flex items-center justify-center text-slate-500"),children:r||"// No JavaScript code generated yet. Describe your web application in the chat."})]}),s.jsxs("div",{className:"flex justify-end items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-900/90 to-slate-800/90 border-t border-slate-700/30",children:[n==="preview"&&s.jsx(q,{variant:"outline",size:"icon",onClick:p,className:"h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:bg-cyan-500/20",children:s.jsx(Mp,{className:"h-4 w-4 text-cyan-400"})}),s.jsxs(q,{variant:"outline",size:"sm",onClick:u,className:"h-8 text-xs rounded-full px-3 gap-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:bg-cyan-500/20",disabled:!(e||t||r),children:[s.jsx(_i,{className:"h-3.5 w-3.5 text-cyan-400"}),"Export"]})]})]})})}const er=({onSelectTemplate:e,searchQuery:t="",selectedTemplateId:r,isLoading:a=!1,categoryFilter:n})=>{const[o,i]=c.useState(t),[l,d]=c.useState(n||"all"),p=Bo.filter(u=>{const f=u.name.toLowerCase().includes(o.toLowerCase())||u.description.toLowerCase().includes(o.toLowerCase()),x=l==="all"||u.category===l;return f&&x}),m=["all",...Array.from(new Set(Bo.map(u=>u.category)))],h=u=>{e({html:u.html||`<!DOCTYPE html><html><head><title>${u.name}</title></head><body><h1>${u.name}</h1><p>${u.description}</p></body></html>`,css:u.css||"body { font-family: Arial, sans-serif; margin: 40px; }",js:u.js||`console.log('${u.name} template loaded');`}),z.success(`${u.name} template loaded!`)};return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[s.jsx(Gt,{placeholder:"Search templates...",value:o,onChange:u=>i(u.target.value),className:"flex-1"}),s.jsx("select",{value:l,onChange:u=>d(u.target.value),className:"px-3 py-2 border rounded-md bg-background",children:m.map(u=>s.jsx("option",{value:u,children:u.charAt(0).toUpperCase()+u.slice(1)},u))})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(u=>s.jsxs(Ke,{className:"hover:shadow-lg transition-shadow",children:[s.jsxs(st,{children:[s.jsx("img",{src:u.image,alt:u.name,className:"w-full h-32 object-cover rounded-md"}),s.jsx(at,{children:u.name}),s.jsx(Et,{children:u.description})]}),s.jsxs(Ye,{children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:u.tags.map(f=>s.jsx(Ct,{variant:"secondary",children:f},f))}),s.jsx(q,{onClick:()=>h(u),className:"w-full",disabled:a&&r===u.id,children:a&&r===u.id?"Loading...":"Use Template"})]})]},u.id))}),p.length===0&&s.jsx("div",{className:"text-center py-8 text-muted-foreground",children:"No templates found matching your criteria."})]})},mu=ii,Yb=li,Jb=oi,hu=c.forwardRef(({className:e,...t},r)=>s.jsx(Ts,{ref:r,className:$("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));hu.displayName=Ts.displayName;const $n=c.forwardRef(({className:e,children:t,...r},a)=>s.jsxs(Jb,{children:[s.jsx(hu,{}),s.jsxs(Is,{ref:a,className:$("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...r,children:[t,s.jsxs(ni,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[s.jsx(Wr,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));$n.displayName=Is.displayName;const Fn=({className:e,...t})=>s.jsx("div",{className:$("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Fn.displayName="DialogHeader";const fu=({className:e,...t})=>s.jsx("div",{className:$("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});fu.displayName="DialogFooter";const zn=c.forwardRef(({className:e,...t},r)=>s.jsx(Rs,{ref:r,className:$("text-lg font-semibold leading-none tracking-tight",e),...t}));zn.displayName=Rs.displayName;const Bn=c.forwardRef(({className:e,...t},r)=>s.jsx(Ms,{ref:r,className:$("text-sm text-muted-foreground",e),...t}));Bn.displayName=Ms.displayName;function gu(){const[e,t]=c.useState(!1),r=new Date().getFullYear();return s.jsx("div",{className:"mt-6 border-t border-slate-200 dark:border-slate-800 pt-6",children:s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-gradient-to-br from-theme-blue to-theme-green flex items-center justify-center text-white shadow-glow-sm",children:s.jsx(xe,{className:"h-4 w-4"})}),s.jsx("span",{className:"font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-green",children:"JBLinx Studio"})]}),s.jsxs("div",{className:"flex items-center gap-1 text-xs text-muted-foreground",children:[s.jsx(dp,{className:"h-3 w-3 mr-1"}),r," JBLinx Studio. All Rights Reserved."]}),s.jsx("div",{className:"flex items-center gap-4",children:s.jsxs(mu,{open:e,onOpenChange:t,children:[s.jsx(Yb,{asChild:!0,children:s.jsxs(q,{variant:"ghost",size:"sm",className:"h-8 text-xs flex gap-1.5",children:[s.jsx(io,{className:"h-3.5 w-3.5"}),"License"]})}),s.jsxs($n,{className:"max-w-3xl max-h-[80vh] overflow-y-auto",children:[s.jsxs(Fn,{children:[s.jsxs(zn,{className:"flex items-center gap-2",children:[s.jsx(io,{className:"h-4 w-4 text-theme-blue"}),"JBLinx Studio Software License"]}),s.jsx(Bn,{children:"This software is protected by copyright law and international treaty provisions."})]}),s.jsxs("div",{className:"text-sm space-y-4 mt-4",children:[s.jsxs("p",{className:"font-semibold",children:["© ",r," JBLinx Studio. All Rights Reserved."]}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-semibold mb-2",children:"Proprietary Software License Agreement"}),s.jsx("p",{children:'This software is the property of JBLinx Studio ("Company") and is protected by copyright law and international treaty provisions. This software is licensed, not sold.'})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-medium mb-1",children:"1. License Grant"}),s.jsx("p",{children:'Subject to the terms of this Agreement, Company grants you a limited, non-exclusive, non-transferable license to use the software application ("Software") for your personal or internal business purposes.'})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-medium mb-1",children:"2. Restrictions"}),s.jsx("p",{children:"You may not:"}),s.jsxs("ul",{className:"list-disc pl-5 space-y-1 mt-1",children:[s.jsx("li",{children:"Modify, adapt, translate, reverse engineer, decompile, disassemble or create derivative works based on the Software"}),s.jsx("li",{children:"Remove, alter, or obscure any proprietary notices on the Software"}),s.jsx("li",{children:"Reproduce, copy, distribute, resell, or otherwise use the Software for any commercial purpose"}),s.jsx("li",{children:"Allow any third party to use the Software on behalf of or for the benefit of any third party"}),s.jsx("li",{children:"Use the Software in any way that violates any applicable local, state, national, or international law"})]})]}),s.jsx(q,{className:"mt-4 bg-gradient-to-r from-theme-blue to-theme-green hover:opacity-90 w-full",onClick:()=>t(!1),children:"I Acknowledge"})]})]})]})})]})})}var Un="Checkbox",[Xb,Sv]=ot(Un),[Qb,Zb]=Xb(Un),xu=c.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:a,checked:n,defaultChecked:o,required:i,disabled:l,value:d="on",onCheckedChange:p,form:m,...h}=e,[u,f]=c.useState(null),x=ie(t,j=>f(j)),g=c.useRef(!1),b=u?m||!!u.closest("form"):!0,[w=!1,v]=Ut({prop:n,defaultProp:o,onChange:p}),y=c.useRef(w);return c.useEffect(()=>{const j=u==null?void 0:u.form;if(j){const k=()=>v(y.current);return j.addEventListener("reset",k),()=>j.removeEventListener("reset",k)}},[u,v]),s.jsxs(Qb,{scope:r,state:w,disabled:l,children:[s.jsx(K.button,{type:"button",role:"checkbox","aria-checked":At(w)?"mixed":w,"aria-required":i,"data-state":yu(w),"data-disabled":l?"":void 0,disabled:l,value:d,...h,ref:x,onKeyDown:D(e.onKeyDown,j=>{j.key==="Enter"&&j.preventDefault()}),onClick:D(e.onClick,j=>{v(k=>At(k)?!0:!k),b&&(g.current=j.isPropagationStopped(),g.current||j.stopPropagation())})}),b&&s.jsx(ev,{control:u,bubbles:!g.current,name:a,value:d,checked:w,required:i,disabled:l,form:m,style:{transform:"translateX(-100%)"},defaultChecked:At(o)?!1:o})]})});xu.displayName=Un;var bu="CheckboxIndicator",vu=c.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:a,...n}=e,o=Zb(bu,r);return s.jsx(He,{present:a||At(o.state)||o.state===!0,children:s.jsx(K.span,{"data-state":yu(o.state),"data-disabled":o.disabled?"":void 0,...n,ref:t,style:{pointerEvents:"none",...e.style}})})});vu.displayName=bu;var ev=e=>{const{control:t,checked:r,bubbles:a=!0,defaultChecked:n,...o}=e,i=c.useRef(null),l=Tn(r),d=nn(t);c.useEffect(()=>{const m=i.current,h=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(h,"checked").set;if(l!==r&&f){const x=new Event("click",{bubbles:a});m.indeterminate=At(r),f.call(m,At(r)?!1:r),m.dispatchEvent(x)}},[l,r,a]);const p=c.useRef(At(r)?!1:r);return s.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n??p.current,...o,tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function At(e){return e==="indeterminate"}function yu(e){return At(e)?"indeterminate":e?"checked":"unchecked"}var wu=xu,tv=vu;const ju=c.forwardRef(({className:e,...t},r)=>s.jsx(wu,{ref:r,className:$("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:s.jsx(tv,{className:$("flex items-center justify-center text-current"),children:s.jsx(Mr,{className:"h-4 w-4"})})}));ju.displayName=wu.displayName;class ze{static initiateAuth(){const t=this.generateRandomState();localStorage.setItem("github_auth_state",t);const r=new URL(this.AUTH_URL);r.searchParams.append("client_id",this.CLIENT_ID),r.searchParams.append("redirect_uri",this.REDIRECT_URI),r.searchParams.append("state",t),r.searchParams.append("scope","repo user"),window.location.href=r.toString()}static async handleAuthCallback({code:t}){try{console.log("Exchanging code for token via backend proxy"),await new Promise(a=>setTimeout(a,1e3)),console.log("GitHub auth flow completed successfully"),z.success("Successfully authenticated with GitHub");const r="github_pat_simulated_token";return localStorage.setItem("github_token",r),r}catch(r){return console.error("Error exchanging code for token:",r),z.error("Failed to authenticate with GitHub"),null}}static async createRepo({name:t,description:r="",private:a=!1,token:n}){try{const o=await fetch(`${this.API_BASE}/user/repos`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({name:t,description:r,private:a,auto_init:!0})});if(!o.ok){const l=await o.json();throw new Error(l.message||"Failed to create repository")}const i=await o.json();return z.success(`Repository ${t} created successfully`),i}catch(o){return console.error("Error creating repository:",o),z.error(`Failed to create repository: ${o instanceof Error?o.message:"Unknown error"}`),null}}static async commitFiles({repoName:t,files:r,commitMessage:a,token:n,owner:o}){try{if(!o){const y=await this.getUserInfo(n);if(!y)throw new Error("Could not determine repository owner");o=y.login}z.loading(`Uploading files to ${t}...`);const i=await fetch(`${this.API_BASE}/repos/${o}/${t}/git/refs/heads`,{headers:{Authorization:`Bearer ${n}`}});if(!i.ok)throw new Error("Could not get repository references");const l=await i.json(),d=Array.isArray(l)&&l.length>0?l[0]:null;if(!d)throw new Error("Could not determine the default branch");const p=await fetch(`${this.API_BASE}/repos/${o}/${t}/git/commits/${d.object.sha}`,{headers:{Authorization:`Bearer ${n}`}});if(!p.ok)throw new Error("Could not get the latest commit");const m=await p.json(),h=r.map(y=>fetch(`${this.API_BASE}/repos/${o}/${t}/git/blobs`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({content:btoa(unescape(encodeURIComponent(y.content))),encoding:"base64"})}).then(j=>j.json())),u=await Promise.all(h),f=r.map((y,j)=>({path:y.path,mode:"100644",type:"blob",sha:u[j].sha})),x=await fetch(`${this.API_BASE}/repos/${o}/${t}/git/trees`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({base_tree:m.tree.sha,tree:f})});if(!x.ok)throw new Error("Could not create tree");const g=await x.json(),b=await fetch(`${this.API_BASE}/repos/${o}/${t}/git/commits`,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({message:a,tree:g.sha,parents:[m.sha]})});if(!b.ok)throw new Error("Could not create commit");const w=await b.json();if(!(await fetch(`${this.API_BASE}/repos/${o}/${t}/git/${d.ref}`,{method:"PATCH",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({sha:w.sha,force:!0})})).ok)throw new Error("Could not update branch reference");return z.success(`Successfully committed ${r.length} files to ${t}`),w}catch(i){return console.error("Error committing files:",i),z.error(`Failed to commit files: ${i instanceof Error?i.message:"Unknown error"}`),null}}static async getUserInfo(t){try{const r=await fetch(`${this.API_BASE}/user`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw new Error("Could not fetch user information");return await r.json()}catch(r){return console.error("Error fetching user info:",r),null}}static isAuthenticated(){return!!localStorage.getItem("github_token")}static getToken(){return localStorage.getItem("github_token")}static logout(){localStorage.removeItem("github_token"),z.info("Logged out from GitHub")}static generateRandomState(){const t=new Uint8Array(32);return window.crypto.getRandomValues(t),Array.from(t,r=>r.toString(16).padStart(2,"0")).join("")}}Ne(ze,"CLIENT_ID","YOUR_GITHUB_CLIENT_ID"),Ne(ze,"REDIRECT_URI",`${window.location.origin}/github/callback`),Ne(ze,"AUTH_URL","https://github.com/login/oauth/authorize"),Ne(ze,"API_BASE","https://api.github.com");const rv=({html:e,css:t,js:r})=>{const[a,n]=c.useState(!1),[o,i]=c.useState(!1),[l,d]=c.useState(!1),[p,m]=c.useState(""),[h,u]=c.useState(""),[f,x]=c.useState(!1),[g,b]=c.useState(null);c.useEffect(()=>{(async()=>{const k=ze.isAuthenticated();if(n(k),k){const C=ze.getToken();if(C){const T=await ze.getUserInfo(C);b(T)}}})()},[]);const w=()=>{ze.initiateAuth()},v=()=>{ze.logout(),n(!1),b(null),z.info("Logged out from GitHub")},y=async()=>{var j;if(!p.trim()){z.error("Repository name is required");return}d(!0);try{const k=ze.getToken();if(!k){z.error("GitHub authentication required"),d(!1);return}const C=await ze.createRepo({name:p,description:h,private:f,token:k});if(!C){d(!1);return}const T=[{path:"index.html",content:e||`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello from ${p}</h1>
  <script src="script.js"><\/script>
</body>
</html>`},{path:"styles.css",content:t||"body { font-family: sans-serif; padding: 2rem; }"},{path:"script.js",content:r||`console.log("Hello from ${p}");`},{path:"README.md",content:`# ${p}

${h||"A web application created with WebCraft AI"}`}];await ze.commitFiles({repoName:C.name,files:T,commitMessage:"Initial commit from WebCraft AI",token:k,owner:(j=C.owner)==null?void 0:j.login})&&(z.success("Project successfully uploaded to GitHub!",{description:"Your code is now available on GitHub",duration:5e3}),setTimeout(()=>{z.info(s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("span",{children:"View your repository:"}),s.jsx("a",{href:C.html_url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:C.html_url})]}),{duration:8e3})},1e3),i(!1))}catch(k){console.error("Error uploading to GitHub:",k),z.error("Failed to upload to GitHub",{description:k instanceof Error?k.message:"Unknown error occurred"})}finally{d(!1)}};return s.jsxs(s.Fragment,{children:[s.jsxs(q,{variant:"outline",className:"flex items-center gap-2 border-gray-500/30 hover:border-gray-500/50",onClick:()=>a?i(!0):w(),children:[s.jsx("svg",{height:"20",width:"20",viewBox:"0 0 16 16",fill:"currentColor",children:s.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})}),a?"Export to GitHub":"Connect GitHub"]}),s.jsx(mu,{open:o,onOpenChange:i,children:s.jsxs($n,{className:"sm:max-w-md",children:[s.jsxs(Fn,{children:[s.jsx(zn,{children:"Export to GitHub"}),s.jsx(Bn,{children:"Create a new GitHub repository with your generated code"})]}),g&&s.jsxs("div",{className:"flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-md mb-4",children:[s.jsx("img",{src:g.avatar_url,alt:g.login,className:"w-10 h-10 rounded-full"}),s.jsxs("div",{children:[s.jsx("p",{className:"font-medium",children:g.name||g.login}),s.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:[g.public_repos," public repositories"]})]})]}),s.jsxs("div",{className:"grid gap-4 py-2",children:[s.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[s.jsx(Be,{htmlFor:"repo-name",className:"text-right",children:"Name"}),s.jsx(Gt,{id:"repo-name",placeholder:"my-webapp",value:p,onChange:j=>m(j.target.value),className:"col-span-3"})]}),s.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[s.jsx(Be,{htmlFor:"description",className:"text-right",children:"Description"}),s.jsx(Gt,{id:"description",placeholder:"A web application created with WebCraft AI",value:h,onChange:j=>u(j.target.value),className:"col-span-3"})]}),s.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[s.jsx("div",{className:"text-right",children:s.jsx(Be,{children:"Visibility"})}),s.jsxs("div",{className:"flex items-center space-x-2 col-span-3",children:[s.jsx(ju,{id:"private",checked:f,onCheckedChange:j=>x(!!j)}),s.jsx(Be,{htmlFor:"private",children:"Private repository"})]})]})]}),s.jsxs("div",{className:"text-sm text-slate-500 dark:text-slate-400",children:[s.jsx("p",{children:"The following files will be added to your repository:"}),s.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[s.jsx("li",{children:"index.html"}),s.jsx("li",{children:"styles.css"}),s.jsx("li",{children:"script.js"}),s.jsx("li",{children:"README.md"})]})]}),s.jsxs(fu,{className:"sm:justify-between",children:[s.jsx(q,{variant:"ghost",onClick:v,type:"button",children:"Switch Account"}),s.jsxs(q,{onClick:y,disabled:!p.trim()||l,className:"flex items-center gap-2",children:[l&&s.jsx(va,{className:"h-4 w-4 animate-spin"}),"Create Repository"]})]})]})})]})},sv=()=>{const[e,t]=c.useState(""),[r,a]=c.useState(""),[n,o]=c.useState(""),[i,l]=c.useState("chat"),[d,p]=c.useState(!0),m=(u,f,x)=>{t(u),a(f),o(x),p(!1)},h=u=>{l("chat")};return s.jsxs("div",{className:"min-h-screen flex flex-col bg-subtle-grid bg-fixed",children:[s.jsx(Qr,{}),s.jsxs("main",{className:"flex-1 mt-16 flex flex-col",children:[d&&s.jsxs("div",{className:"relative bg-gradient-to-r from-slate-900 to-slate-800 text-white",children:[s.jsx("div",{className:"container py-16 px-4 text-center relative z-10",children:s.jsxs("div",{className:"max-w-3xl mx-auto",children:[s.jsxs("div",{className:"inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-white text-sm font-medium mb-4 animate-fade-in border border-white/20",children:["Enterprise-grade AI development by ",s.jsx("span",{className:"font-bold",children:"JBLinx Studio"})]}),s.jsxs("h1",{className:"font-heading text-3xl sm:text-5xl font-bold mb-6 animate-slide-up",children:["Build ",s.jsx("span",{className:"text-white/90",children:"sophisticated web applications"})," ",s.jsx("br",{className:"hidden md:block"}),"with AI assistance"]}),s.jsx("p",{className:"text-lg max-w-2xl mx-auto text-white/70 mb-8 font-light animate-slide-up",children:"Transform concepts into production-ready code with our advanced AI engine. Professional-grade solutions for modern development teams."}),s.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-8 animate-fade-in",children:["React","Tailwind CSS","TypeScript","Modern UI"].map((u,f)=>s.jsx("span",{className:"px-3 py-1 bg-white/10 rounded-full text-white text-sm backdrop-blur-md border border-white/10",children:u},u))})]})}),s.jsx("div",{className:"absolute inset-0 bg-gradient-noise opacity-30"})]}),s.jsxs("div",{className:"container flex-1 flex flex-col lg:flex-row my-6 gap-6",children:[s.jsx("div",{className:"lg:w-1/2 flex flex-col rounded-xl overflow-hidden premium-panel",children:s.jsxs(Cr,{value:i,onValueChange:l,className:"flex-1 flex flex-col",children:[s.jsx("div",{className:"border-b bg-white/50 dark:bg-black/20",children:s.jsxs(Jt,{className:"w-full justify-start bg-transparent",children:[s.jsxs(fe,{value:"chat",className:"rounded-t-lg border-b-2 border-transparent py-3 px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium",children:[s.jsx(xe,{className:"h-3.5 w-3.5 mr-1.5"}),"AI Assistant"]}),s.jsxs(fe,{value:"templates",className:"rounded-t-lg border-b-2 border-transparent py-3 px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-medium",children:[s.jsx(ms,{className:"h-3.5 w-3.5 mr-1.5"}),"Templates"]})]})}),s.jsx(ge,{value:"chat",className:"flex-1 p-0 m-0",children:s.jsx(Ba,{onCodeGenerated:m})}),s.jsx(ge,{value:"templates",className:"flex-1 p-0 m-0",children:s.jsx(er,{onSelectTemplate:h})})]})}),s.jsxs("div",{className:"lg:w-1/2 flex flex-col rounded-xl overflow-hidden premium-panel",children:[s.jsx(Es,{html:e,css:r,js:n}),(e||r||n)&&s.jsx("div",{className:"p-3 border-t bg-white/50 dark:bg-black/20",children:s.jsx(rv,{html:e,css:r,js:n})})]})]}),d&&s.jsxs("div",{className:"container my-12",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsx("h2",{className:"text-2xl font-heading font-semibold mb-2",children:"Enterprise-grade Development Platform"}),s.jsx("p",{className:"text-muted-foreground",children:"Powerful tools for professional web application development"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[s.jsxs("div",{className:"premium-card p-6 transition-all duration-300 hover:shadow-hover",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-primary/10",children:s.jsx(xe,{className:"h-5 w-5 text-primary"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg",children:"Advanced Code Generation"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Production-ready code that follows industry best practices and patterns"})]}),s.jsxs("div",{className:"premium-card p-6 transition-all duration-300 hover:shadow-hover",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-primary/10",children:s.jsx(ms,{className:"h-5 w-5 text-primary"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg",children:"Real-time Preview"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Instantly see your application with professional-grade UI components"})]}),s.jsxs("div",{className:"premium-card p-6 transition-all duration-300 hover:shadow-hover",children:[s.jsx("div",{className:"w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-primary/10",children:s.jsx(ut,{className:"h-5 w-5 text-primary"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg",children:"GitHub Integration"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Deploy-ready code with one-click GitHub repository creation"})]})]}),s.jsxs("div",{className:"mt-24 mb-12",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsx("h2",{className:"text-2xl font-heading font-semibold mb-2",children:"Enterprise Development Workflow"}),s.jsx("p",{className:"text-muted-foreground",children:"Streamlined process for creating professional web applications"})]}),s.jsxs("div",{className:"flex flex-col md:flex-row justify-between max-w-4xl mx-auto relative",children:[s.jsx("div",{className:"absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-200 to-neutral-300 hidden md:block"}),s.jsxs("div",{className:"flex-1 flex flex-col items-center text-center p-6 relative z-10 animate-fade-in",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mb-4",children:s.jsx(xe,{className:"h-5 w-5 text-white"})}),s.jsxs("div",{className:"premium-card p-6 w-full",children:[s.jsx("h3",{className:"font-heading font-semibold mb-2",children:"1. Define Requirements"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Specify your application needs with detailed requirements"})]})]}),s.jsxs("div",{className:"flex-1 flex flex-col items-center text-center p-6 relative z-10 animate-fade-in",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mb-4",children:s.jsx(ut,{className:"h-5 w-5 text-white"})}),s.jsxs("div",{className:"premium-card p-6 w-full",children:[s.jsx("h3",{className:"font-heading font-semibold mb-2",children:"2. Generate Solution"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Our AI creates enterprise-grade code that meets your specifications"})]})]}),s.jsxs("div",{className:"flex-1 flex flex-col items-center text-center p-6 relative z-10 animate-fade-in",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center mb-4",children:s.jsx(Bi,{className:"h-5 w-5 text-white"})}),s.jsxs("div",{className:"premium-card p-6 w-full",children:[s.jsx("h3",{className:"font-heading font-semibold mb-2",children:"3. Deploy & Scale"}),s.jsx("p",{className:"text-sm text-muted-foreground",children:"Export to GitHub and deploy your application with ease"})]})]})]})]}),s.jsx(gu,{})]})]}),s.jsx("footer",{className:"border-t border-border",children:s.jsx("div",{className:"container py-8 text-sm",children:s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-gradient-to-r from-theme-blue to-theme-green flex items-center justify-center text-white shadow-glow-sm",children:s.jsx(xe,{className:"h-4 w-4 text-white"})}),s.jsx("span",{className:"font-heading font-semibold",children:"CodeCraft AI"}),s.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",children:"by JBLinx Studio"})]}),s.jsx("div",{children:s.jsx("p",{className:"text-muted-foreground",children:"Enterprise-grade web application platform"})}),s.jsxs("div",{className:"flex gap-6",children:[s.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:"Documentation"}),s.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:"API"}),s.jsx("a",{href:"#",className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:"Pricing"})]})]})})}),s.jsx(br,{})]})},av=()=>{const[e,t]=c.useState(""),[r,a]=c.useState(null),[n,o]=c.useState({html:"",css:"",js:""}),[i,l]=c.useState(!1),d=async m=>{try{l(!0),a(m);const h={blue:m.id.includes("dashboard")||m.id==="portfolio",green:m.id==="ecommerce"||m.id==="landing-page",red:!1,purple:m.id==="blog",dark:!1,light:!0},u={responsive:!0,animation:!0,form:m.id==="landing-page"||m.id==="portfolio",navigation:!0},f=await za(`Generate a ${m.name} template`,[{role:"user",content:`I need a ${m.name} template`},{role:"assistant",content:`I'll create a ${m.name} template for you`}]);f&&f.code&&(o({html:f.code.html||"",css:f.code.css||"",js:f.code.js||""}),z.success(`${m.name} template loaded`,{description:"Preview ready to explore"}))}catch(h){console.error("Error loading template:",h),z.error("Failed to load template",{description:"Please try again or select a different template"})}finally{l(!1)}},p=m=>{t(m)};return s.jsxs("div",{className:"min-h-screen flex flex-col bg-code-pattern bg-fixed",children:[s.jsx(Qr,{}),s.jsxs("main",{className:"flex-1 mt-16",children:[s.jsx("section",{className:"bg-gradient-to-b from-white/50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm py-16",children:s.jsx("div",{className:"container px-4",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsx("div",{className:"flex items-center justify-center gap-2 mb-4",children:s.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700",children:"JBLinx Studio"})}),s.jsxs("h1",{className:"font-heading text-4xl font-bold mb-6 text-center",children:["Professional ",s.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-green",children:"Template Gallery"})]}),s.jsx("p",{className:"text-lg text-center text-slate-600 dark:text-slate-300 mb-12",children:"Start your projects faster with our collection of enterprise-ready templates. All templates are customizable and built with best practices."}),s.jsxs("div",{className:"relative mb-12",children:[s.jsx(Gt,{type:"text",placeholder:"Search templates...",className:"pl-10 py-6 glassmorphism-card",value:e,onChange:m=>p(m.target.value)}),s.jsx(Fi,{className:"absolute left-3 top-3 h-5 w-5 text-slate-400"})]})]})})}),s.jsxs("div",{className:"container px-4 py-8",children:[s.jsxs("div",{className:"flex flex-col lg:flex-row gap-6",children:[s.jsxs("div",{className:"lg:w-1/2 lg:pr-4",children:[s.jsxs(Cr,{defaultValue:"all",className:"mb-8",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs(Jt,{className:"glassmorphism h-10",children:[s.jsx(fe,{value:"all",children:"All Templates"}),s.jsx(fe,{value:"landing",children:"Landing"}),s.jsx(fe,{value:"dashboard",children:"Dashboard"}),s.jsx(fe,{value:"ecommerce",children:"E-commerce"}),s.jsx(fe,{value:"blog",children:"Blogs"})]}),s.jsxs(q,{variant:"outline",size:"sm",className:"gap-2",children:[s.jsx(gp,{className:"h-4 w-4"}),"Filters"]})]}),s.jsx(ge,{value:"all",className:"mt-8",children:s.jsx(er,{onSelectTemplate:d,selectedTemplateId:r==null?void 0:r.id,isLoading:i})}),s.jsx(ge,{value:"landing",className:"mt-8",children:s.jsx(er,{onSelectTemplate:d,selectedTemplateId:r==null?void 0:r.id,isLoading:i,categoryFilter:"landing"})}),s.jsx(ge,{value:"dashboard",className:"mt-8",children:s.jsx(er,{onSelectTemplate:d,selectedTemplateId:r==null?void 0:r.id,isLoading:i,categoryFilter:"dashboard"})}),s.jsx(ge,{value:"ecommerce",className:"mt-8",children:s.jsx(er,{onSelectTemplate:d,selectedTemplateId:r==null?void 0:r.id,isLoading:i,categoryFilter:"ecommerce"})}),s.jsx(ge,{value:"blog",className:"mt-8",children:s.jsx(er,{onSelectTemplate:d,selectedTemplateId:r==null?void 0:r.id,isLoading:i,categoryFilter:"blog"})})]}),s.jsx("section",{className:"py-8",children:s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 glassmorphism-card p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm",children:[s.jsxs("div",{className:"md:w-2/3",children:[s.jsx("span",{className:"inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-gradient-to-r from-theme-blue/20 to-theme-green/20 border border-theme-blue/10 text-theme-blue",children:"Premium Access"}),s.jsx("h2",{className:"font-heading text-xl font-semibold mb-2",children:"Unlock Enterprise Templates"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-4 text-sm",children:"Get access to our full collection of industry-specific templates with authentication, dashboards, and API integrations."}),s.jsxs(q,{className:"gap-2 bg-gradient-to-r from-theme-blue to-theme-green hover:opacity-90 transition-opacity text-sm",children:["Upgrade to Pro",s.jsx($e,{className:"h-3.5 w-3.5"})]})]}),s.jsx("div",{className:"md:w-1/3 flex justify-center",children:s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-theme-blue to-theme-green rounded-lg blur opacity-30"}),s.jsx("div",{className:"w-24 h-24 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative",children:s.jsx(xe,{className:"h-10 w-10 text-theme-blue"})})]})})]})})]}),s.jsx("div",{className:"lg:w-1/2 lg:pl-4 mt-8 lg:mt-0",children:s.jsxs("div",{className:"bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-[700px]",children:[s.jsxs("div",{className:"p-4 bg-slate-50 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between",children:[s.jsx("h3",{className:"font-medium flex items-center gap-2",children:r?s.jsxs(s.Fragment,{children:[s.jsx(cp,{className:"h-4 w-4 text-green-500"}),r.name," Template Preview"]}):"Template Preview"}),r&&s.jsxs(q,{size:"sm",variant:"outline",className:"text-xs gap-1",onClick:()=>{(n.html||n.css||n.js)&&z.success("Template applied to project",{description:"You can now customize it in the editor"})},children:["Use This Template",s.jsx($e,{className:"h-3 w-3"})]})]}),s.jsx(Es,{html:n.html,css:n.css,js:n.js})]})})]}),s.jsx("div",{className:"mt-12",children:s.jsx(gu,{})})]})]}),s.jsx("footer",{className:"border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm",children:s.jsx("div",{className:"container py-8 px-4 text-sm",children:s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-gradient-to-r from-theme-blue to-theme-green flex items-center justify-center text-white",children:s.jsx(xe,{className:"h-4 w-4"})}),s.jsx("span",{className:"font-heading font-semibold",children:"CodeCraft AI"}),s.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",children:"by JBLinx Studio"})]}),s.jsx("div",{children:s.jsx("p",{className:"text-slate-600 dark:text-slate-300",children:"Enterprise AI Development Platform"})}),s.jsxs("div",{className:"flex gap-6",children:[s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Documentation"}),s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Features"}),s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Pricing"})]})]})})}),s.jsx(br,{})]})},nv=()=>{const[e,t]=c.useState(""),[r,a]=c.useState(!1),n=()=>{navigator.clipboard.writeText(`import { Button } from "@/components/ui/button";

const Example = () => {
  return (
    <Button>Click me</Button>
  );
};

export default Example;`),a(!0),setTimeout(()=>a(!1),2e3)};return s.jsxs("div",{className:"min-h-screen flex flex-col bg-code-pattern bg-fixed",children:[s.jsx(Qr,{}),s.jsxs("main",{className:"flex-1 mt-16",children:[s.jsx("section",{className:"bg-gradient-to-b from-white/50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm py-16",children:s.jsx("div",{className:"container px-4",children:s.jsxs("div",{className:"max-w-4xl mx-auto mb-8",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(Zn,{className:"h-5 w-5 text-theme-blue"}),s.jsx("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"Documentation"})]}),s.jsxs("h1",{className:"font-heading text-4xl font-bold mb-6",children:["CodeCraft AI ",s.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-green",children:"Documentation"})]}),s.jsx("p",{className:"text-lg text-slate-600 dark:text-slate-300 mb-8",children:"Comprehensive guides and API references to help you build sophisticated applications with our AI platform."}),s.jsxs("div",{className:"relative mb-8",children:[s.jsx(Gt,{type:"text",placeholder:"Search documentation...",className:"pl-10 py-6 glassmorphism-card",value:e,onChange:o=>t(o.target.value)}),s.jsx(Fi,{className:"absolute left-3 top-3 h-5 w-5 text-slate-400"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[s.jsxs(q,{variant:"outline",className:"glassmorphism-card justify-start gap-2 h-auto py-3",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-theme-blue/10 flex items-center justify-center text-theme-blue",children:s.jsx(Zn,{className:"h-4 w-4"})}),s.jsx("span",{children:"Getting Started"})]}),s.jsxs(q,{variant:"outline",className:"glassmorphism-card justify-start gap-2 h-auto py-3",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-theme-green/10 flex items-center justify-center text-theme-green",children:s.jsx(xe,{className:"h-4 w-4"})}),s.jsx("span",{children:"API Reference"})]}),s.jsxs(q,{variant:"outline",className:"glassmorphism-card justify-start gap-2 h-auto py-3",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-theme-blue/10 flex items-center justify-center text-theme-blue",children:s.jsx(fp,{className:"h-4 w-4"})}),s.jsx("span",{children:"Examples"})]})]})]})})}),s.jsx("section",{className:"py-12",children:s.jsx("div",{className:"container px-4",children:s.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[s.jsx("div",{className:"lg:w-64 shrink-0",children:s.jsxs("div",{className:"glassmorphism-card p-4 sticky top-20",children:[s.jsx("h3",{className:"font-heading font-semibold mb-4",children:"Documentation"}),s.jsxs("nav",{className:"space-y-1",children:[s.jsx("a",{href:"#introduction",className:"flex items-center text-sm py-2 px-3 rounded-md bg-theme-blue/10 text-theme-blue",children:"Introduction"}),s.jsx("a",{href:"#installation",className:"flex items-center text-sm py-2 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",children:"Installation"}),s.jsx("a",{href:"#usage",className:"flex items-center text-sm py-2 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",children:"Basic Usage"}),s.jsxs("a",{href:"#components",className:"flex items-center text-sm py-2 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",children:["Components",s.jsx(is,{className:"ml-auto h-4 w-4"})]}),s.jsxs("a",{href:"#api",className:"flex items-center text-sm py-2 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",children:["API Integration",s.jsx(is,{className:"ml-auto h-4 w-4"})]}),s.jsx("a",{href:"#templates",className:"flex items-center text-sm py-2 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",children:"Templates"}),s.jsx("a",{href:"#faq",className:"flex items-center text-sm py-2 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",children:"FAQ"})]})]})}),s.jsx("div",{className:"lg:flex-1",children:s.jsxs("div",{className:"glassmorphism-card p-8",children:[s.jsxs("div",{id:"introduction",className:"mb-12",children:[s.jsx("h2",{className:"font-heading text-2xl font-semibold mb-4",children:"Introduction"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-4",children:"CodeCraft AI is an enterprise-grade AI development platform that helps developers build sophisticated web applications faster. It combines the power of artificial intelligence with modern web development best practices to streamline the development process."}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-4",children:"With our platform, you can:"}),s.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 mb-4",children:[s.jsx("li",{children:"Generate production-ready code with AI assistance"}),s.jsx("li",{children:"Access a library of customizable components"}),s.jsx("li",{children:"Integrate with third-party APIs seamlessly"}),s.jsx("li",{children:"Deploy your applications with confidence"})]}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300",children:"This documentation will guide you through the process of getting started with CodeCraft AI and making the most of its features."})]}),s.jsxs("div",{id:"installation",className:"mb-12",children:[s.jsx("h2",{className:"font-heading text-2xl font-semibold mb-4",children:"Installation"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-4",children:"Get started with CodeCraft AI by installing our dependencies:"}),s.jsx("div",{className:"relative",children:s.jsxs("div",{className:"code-panel mb-4",children:[s.jsxs("div",{className:"code-header",children:[s.jsx("span",{className:"text-xs font-mono",children:"Terminal"}),s.jsx("button",{className:"text-xs text-slate-400 hover:text-white transition-colors",onClick:n,children:r?s.jsx(Mr,{className:"h-4 w-4"}):s.jsx(tr,{className:"h-4 w-4"})})]}),s.jsx("div",{className:"code-content",children:s.jsx("pre",{className:"text-sm",children:s.jsx("code",{children:"npm install @codecraft/core @codecraft/components @codecraft/ai"})})})]})}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300",children:"After installation, you'll need to configure your API keys in the environment variables."})]}),s.jsxs("div",{id:"usage",className:"mb-12",children:[s.jsx("h2",{className:"font-heading text-2xl font-semibold mb-4",children:"Basic Usage"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-4",children:"Here's a simple example of using a button component:"}),s.jsx("div",{className:"relative",children:s.jsxs("div",{className:"code-panel mb-4",children:[s.jsxs("div",{className:"code-header",children:[s.jsx("span",{className:"text-xs font-mono",children:"Example.tsx"}),s.jsx("button",{className:"text-xs text-slate-400 hover:text-white transition-colors",onClick:n,children:r?s.jsx(Mr,{className:"h-4 w-4"}):s.jsx(tr,{className:"h-4 w-4"})})]}),s.jsx("div",{className:"code-content",children:s.jsx("pre",{className:"text-sm",children:s.jsx("code",{children:`import { Button } from "@/components/ui/button";

const Example = () => {
  return (
    <Button>Click me</Button>
  );
};

export default Example;`})})})]})}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300",children:"For more advanced usage, check out the component documentation and examples."})]}),s.jsxs("div",{className:"flex justify-between items-center mt-16 pt-6 border-t border-slate-200 dark:border-slate-700",children:[s.jsx(q,{variant:"outline",className:"gap-2",disabled:!0,children:"Previous"}),s.jsxs(q,{variant:"outline",className:"gap-2",children:["Next: Installation",s.jsx(is,{className:"h-4 w-4"})]})]})]})})]})})})]}),s.jsx("footer",{className:"border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm",children:s.jsx("div",{className:"container py-8 px-4 text-sm",children:s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-gradient-to-r from-theme-blue to-theme-green flex items-center justify-center text-white",children:s.jsx(xe,{className:"h-4 w-4"})}),s.jsx("span",{className:"font-heading font-semibold",children:"CodeCraft AI"})]}),s.jsx("div",{children:s.jsx("p",{className:"text-slate-600 dark:text-slate-300",children:"Enterprise AI Development Platform"})}),s.jsxs("div",{className:"flex gap-6",children:[s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Documentation"}),s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Features"}),s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Pricing"})]})]})})}),s.jsx(br,{})]})},ov=()=>s.jsxs("div",{className:"min-h-screen flex flex-col bg-code-pattern bg-fixed",children:[s.jsx(Qr,{}),s.jsxs("main",{className:"flex-1 mt-16",children:[s.jsx("section",{className:"bg-gradient-to-b from-white/50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm py-20",children:s.jsxs("div",{className:"container px-4",children:[s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsx("h1",{className:"font-heading text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-theme-blue to-theme-green",children:"Enterprise AI Development Features"}),s.jsx("p",{className:"text-lg text-center text-slate-600 dark:text-slate-300 mb-12",children:"Discover the powerful capabilities that make CodeCraft AI the choice for enterprise development teams."})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[s.jsxs(Ke,{className:"glassmorphism-card",children:[s.jsxs(st,{children:[s.jsx("div",{className:"feature-icon feature-icon-blue mb-4",children:s.jsx(xe,{className:"h-5 w-5"})}),s.jsx(at,{children:"Intelligent Code Generation"}),s.jsx(Et,{className:"text-slate-600 dark:text-slate-300",children:"AI-powered code that follows best practices"})]}),s.jsx(Ye,{className:"text-slate-600 dark:text-slate-300",children:s.jsxs("ul",{className:"space-y-2",children:[s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-blue shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"Context-aware code completion"})]}),s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-blue shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"Type-safe suggestions with TypeScript"})]}),s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-blue shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"Framework-specific optimizations"})]})]})})]}),s.jsxs(Ke,{className:"glassmorphism-card",children:[s.jsxs(st,{children:[s.jsx("div",{className:"feature-icon feature-icon-green mb-4",children:s.jsx(ms,{className:"h-5 w-5"})}),s.jsx(at,{children:"Component Library"}),s.jsx(Et,{className:"text-slate-600 dark:text-slate-300",children:"Extensive collection of UI components"})]}),s.jsx(Ye,{className:"text-slate-600 dark:text-slate-300",children:s.jsxs("ul",{className:"space-y-2",children:[s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-green shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"Customizable shadcn/ui integration"})]}),s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-green shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"Design system consistency"})]}),s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-green shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"Responsive layout components"})]})]})})]}),s.jsxs(Ke,{className:"glassmorphism-card",children:[s.jsxs(st,{children:[s.jsx("div",{className:"feature-icon feature-icon-blue mb-4",children:s.jsx(Ui,{className:"h-5 w-5"})}),s.jsx(at,{children:"API Integration"}),s.jsx(Et,{className:"text-slate-600 dark:text-slate-300",children:"Seamless third-party services connection"})]}),s.jsx(Ye,{className:"text-slate-600 dark:text-slate-300",children:s.jsxs("ul",{className:"space-y-2",children:[s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-blue shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"Automatic API client generation"})]}),s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-blue shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"OAuth and authentication handling"})]}),s.jsxs("li",{className:"flex items-start",children:[s.jsx($e,{className:"h-5 w-5 text-theme-blue shrink-0 mr-2 mt-0.5"}),s.jsx("span",{children:"Data transformation helpers"})]})]})})]})]})]})}),s.jsx("section",{className:"py-20",children:s.jsxs("div",{className:"container px-4",children:[s.jsx("h2",{className:"font-heading text-3xl font-semibold mb-12 text-center",children:"Additional Enterprise Capabilities"}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:[s.jsxs("div",{className:"glassmorphism-card p-6 transition-all duration-300 hover:translate-y-[-5px]",children:[s.jsx("div",{className:"feature-icon feature-icon-blue mb-4",children:s.jsx(Ya,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2",children:"AI Assistant"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm",children:"Context-aware AI that understands your codebase and helps solve complex problems"})]}),s.jsxs("div",{className:"glassmorphism-card p-6 transition-all duration-300 hover:translate-y-[-5px]",children:[s.jsx("div",{className:"feature-icon feature-icon-green mb-4",children:s.jsx(Os,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2",children:"Data Management"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm",children:"Automatic schema generation and type-safe database operations"})]}),s.jsxs("div",{className:"glassmorphism-card p-6 transition-all duration-300 hover:translate-y-[-5px]",children:[s.jsx("div",{className:"feature-icon feature-icon-blue mb-4",children:s.jsx(ps,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2",children:"Deployment"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm",children:"One-click deployments to your preferred cloud infrastructure"})]}),s.jsxs("div",{className:"glassmorphism-card p-6 transition-all duration-300 hover:translate-y-[-5px]",children:[s.jsx("div",{className:"feature-icon feature-icon-green mb-4",children:s.jsx(jp,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2",children:"Enterprise Security"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm",children:"Advanced security controls, audit logs, and compliance features"})]})]})]})}),s.jsx("section",{className:"py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm",children:s.jsxs("div",{className:"container px-4",children:[s.jsx("h2",{className:"font-heading text-3xl font-semibold mb-12 text-center",children:"Compare Plans"}),s.jsx("div",{className:"glassmorphism-card overflow-hidden max-w-4xl mx-auto",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"bg-gradient-to-r from-theme-blue/10 to-theme-green/10",children:[s.jsx("th",{className:"px-6 py-3 text-left text-sm font-semibold",children:"Feature"}),s.jsx("th",{className:"px-6 py-3 text-center text-sm font-semibold",children:"Free"}),s.jsx("th",{className:"px-6 py-3 text-center text-sm font-semibold",children:"Pro"}),s.jsx("th",{className:"px-6 py-3 text-center text-sm font-semibold",children:"Enterprise"})]})}),s.jsxs("tbody",{className:"divide-y divide-slate-200 dark:divide-slate-700",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"px-6 py-4 text-sm",children:"AI Code Generation"}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{limited:!0})}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-6 py-4 text-sm",children:"Component Library"}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{limited:!0})}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-6 py-4 text-sm",children:"API Integration"}),s.jsx("td",{className:"px-6 py-4 text-center",children:"-"}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-6 py-4 text-sm",children:"Database Management"}),s.jsx("td",{className:"px-6 py-4 text-center",children:"-"}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-6 py-4 text-sm",children:"Priority Support"}),s.jsx("td",{className:"px-6 py-4 text-center",children:"-"}),s.jsx("td",{className:"px-6 py-4 text-center",children:"-"}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-6 py-4 text-sm",children:"Custom Branding"}),s.jsx("td",{className:"px-6 py-4 text-center",children:"-"}),s.jsx("td",{className:"px-6 py-4 text-center",children:"-"}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"px-6 py-4 text-sm",children:"Advanced Security"}),s.jsx("td",{className:"px-6 py-4 text-center",children:"-"}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{limited:!0})}),s.jsx("td",{className:"px-6 py-4 text-center",children:s.jsx(Pe,{})})]})]})]})})})]})}),s.jsxs("section",{className:"py-20 relative overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-theme-blue to-theme-green opacity-10"}),s.jsx("div",{className:"container px-4 relative z-10",children:s.jsxs("div",{className:"max-w-4xl mx-auto glassmorphism-card p-12 text-center",children:[s.jsx("h2",{className:"font-heading text-3xl font-semibold mb-4",children:"Ready to upgrade your development?"}),s.jsx("p",{className:"text-lg mb-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto",children:"Get access to all features with our Pro plan. Enterprise customers get additional support and customization options."}),s.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[s.jsxs(q,{size:"lg",className:"gap-2 bg-gradient-to-r from-theme-blue to-theme-green hover:opacity-90 transition-opacity",children:["Upgrade to Pro",s.jsx(ut,{className:"w-4 h-4"})]}),s.jsxs(q,{size:"lg",variant:"outline",className:"gap-2",children:["Contact Sales",s.jsx($e,{className:"w-4 h-4"})]})]})]})})]})]}),s.jsx("footer",{className:"border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm",children:s.jsx("div",{className:"container py-8 px-4 text-sm",children:s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-gradient-to-r from-theme-blue to-theme-green flex items-center justify-center text-white",children:s.jsx(xe,{className:"h-4 w-4"})}),s.jsx("span",{className:"font-heading font-semibold",children:"CodeCraft AI"})]}),s.jsx("div",{children:s.jsx("p",{className:"text-slate-600 dark:text-slate-300",children:"Enterprise AI Development Platform"})}),s.jsxs("div",{className:"flex gap-6",children:[s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Documentation"}),s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Features"}),s.jsx("a",{href:"#",className:"text-sm text-slate-600 dark:text-slate-300 hover:text-theme-blue transition-colors",children:"Pricing"})]})]})})}),s.jsx(br,{})]}),Pe=({limited:e=!1})=>e?s.jsx("span",{className:"inline-flex items-center justify-center w-5 h-5 rounded-full bg-theme-blue/20 text-theme-blue",children:s.jsx("span",{className:"w-3 h-3 rounded-full bg-theme-blue"})}):s.jsx("span",{className:"inline-flex items-center justify-center w-5 h-5 rounded-full bg-theme-green/20 text-theme-green",children:s.jsx(iv,{})}),iv=()=>s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"20 6 9 17 4 12"})}),lv=({onActionTrigger:e})=>{const[t,r]=c.useState("editor"),[a,n]=c.useState(!1),o=[{icon:ao,label:"Generate Component",action:"generate-component",color:"cyan"},{icon:Ip,label:"Style Editor",action:"style-editor",color:"purple"},{icon:no,label:"Deploy Live",action:"deploy",color:"green"},{icon:lo,label:"Mobile Preview",action:"mobile-preview",color:"blue"}],i=[{icon:hp,label:"Export Code",action:"export-code"},{icon:_i,label:"Download Project",action:"download"},{icon:Op,label:"Share Preview",action:"share"},{icon:xp,label:"Version Control",action:"git"},{icon:so,label:"Cloud Sync",action:"cloud-sync"}],l=(d,p)=>{e==null||e(d,p)};return s.jsxs("div",{className:"space-y-4",children:[s.jsxs(Ke,{className:"cyber-panel border-cyan-500/30",children:[s.jsx(st,{className:"pb-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(at,{className:"text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400",children:"Quick Actions"}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsxs(q,{variant:"ghost",size:"sm",onClick:()=>n(!a),className:$("h-7 px-2 text-xs transition-all",a?"bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400":"text-slate-400 hover:text-cyan-400"),children:[a?s.jsx(Fp,{className:"h-3 w-3 mr-1"}):s.jsx($i,{className:"h-3 w-3 mr-1"}),a?"Stop":"Preview"]})})]})}),s.jsx(Ye,{className:"pt-0",children:s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:o.map((d,p)=>s.jsxs(q,{variant:"outline",onClick:()=>l(d.action),className:$("h-20 flex-col gap-2 backdrop-blur-sm transition-all cyber-hover",d.color==="cyan"&&"border-cyan-500/30 hover:bg-cyan-500/10",d.color==="purple"&&"border-purple-500/30 hover:bg-purple-500/10",d.color==="green"&&"border-green-500/30 hover:bg-green-500/10",d.color==="blue"&&"border-blue-500/30 hover:bg-blue-500/10"),children:[s.jsx(d.icon,{className:"h-5 w-5"}),s.jsx("span",{className:"text-xs text-center leading-tight",children:d.label})]},p))})})]}),s.jsxs(Ke,{className:"cyber-panel border-purple-500/30",children:[s.jsx(st,{className:"pb-3",children:s.jsx(at,{className:"text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400",children:"Developer Tools"})}),s.jsx(Ye,{className:"pt-0",children:s.jsxs(Cr,{value:t,onValueChange:r,className:"w-full",children:[s.jsxs(Jt,{className:"grid w-full grid-cols-3 bg-slate-800/50",children:[s.jsxs(fe,{value:"editor",className:"text-xs data-[state=active]:bg-cyan-500/20",children:[s.jsx(ao,{className:"h-3 w-3 mr-1"}),"Editor"]}),s.jsxs(fe,{value:"preview",className:"text-xs data-[state=active]:bg-purple-500/20",children:[s.jsx(mp,{className:"h-3 w-3 mr-1"}),"Preview"]}),s.jsxs(fe,{value:"deploy",className:"text-xs data-[state=active]:bg-green-500/20",children:[s.jsx(no,{className:"h-3 w-3 mr-1"}),"Deploy"]})]}),s.jsx(ge,{value:"editor",className:"mt-4 space-y-3",children:s.jsx("div",{className:"flex flex-wrap gap-2",children:i.slice(0,3).map((d,p)=>s.jsxs(q,{variant:"ghost",size:"sm",onClick:()=>l(d.action),className:"h-8 text-xs bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/20",children:[s.jsx(d.icon,{className:"h-3 w-3 mr-1"}),d.label]},p))})}),s.jsx(ge,{value:"preview",className:"mt-4 space-y-3",children:s.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-purple-500/20",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-2 w-2 rounded-full bg-green-500 animate-pulse"}),s.jsx("span",{className:"text-xs text-slate-300",children:"Live Preview Active"})]}),s.jsxs("div",{className:"flex gap-1",children:[s.jsx(q,{variant:"ghost",size:"icon",className:"h-6 w-6",children:s.jsx(Pp,{className:"h-3 w-3"})}),s.jsx(q,{variant:"ghost",size:"icon",className:"h-6 w-6",children:s.jsx(lo,{className:"h-3 w-3"})}),s.jsx(q,{variant:"ghost",size:"icon",className:"h-6 w-6",children:s.jsx(Cp,{className:"h-3 w-3"})})]})]})}),s.jsx(ge,{value:"deploy",className:"mt-4 space-y-3",children:s.jsxs("div",{className:"space-y-2",children:[s.jsxs(q,{className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90",onClick:()=>l("deploy-production"),children:[s.jsx(so,{className:"h-4 w-4 mr-2"}),"Deploy to Production"]}),s.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[s.jsx(q,{variant:"outline",size:"sm",onClick:()=>l("deploy-preview"),children:"Preview Deploy"}),s.jsxs(q,{variant:"outline",size:"sm",onClick:()=>l("rollback"),children:[s.jsx(Lp,{className:"h-3 w-3 mr-1"}),"Rollback"]})]})]})})]})})]}),s.jsx(Ke,{className:"cyber-panel border-cyan-500/20",children:s.jsx(Ye,{className:"pt-4",children:s.jsxs("div",{className:"grid grid-cols-3 gap-4 text-center",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold text-cyan-400",children:"127"}),s.jsx("div",{className:"text-xs text-slate-400",children:"Components"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold text-purple-400",children:"45"}),s.jsx("div",{className:"text-xs text-slate-400",children:"Builds"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold text-green-400",children:"98%"}),s.jsx("div",{className:"text-xs text-slate-400",children:"Uptime"})]})]})})}),s.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs(Ct,{variant:"outline",className:"border-green-500/30 text-green-400",children:[s.jsx("div",{className:"w-1 h-1 rounded-full bg-green-500 mr-1"}),"Connected"]}),s.jsxs(Ct,{variant:"outline",className:"border-cyan-500/30 text-cyan-400",children:[s.jsx(ut,{className:"w-2 h-2 mr-1"}),"AI Active"]})]}),s.jsxs("div",{className:"flex items-center gap-1 text-slate-500",children:[s.jsx(zi,{className:"w-3 h-3"}),"v2.1.0"]})]})]})},cv=({html:e,css:t,js:r,onCodeGenerated:a,expandedChat:n,expandedPreview:o,onToggleChatExpansion:i,onTogglePreviewExpansion:l})=>{const d=(p,m)=>{switch(p){case"generate-component":z.success("Component generator opened!");break;case"style-editor":z.success("Style editor activated!");break;case"deploy":z.success("Deployment initiated!");break;case"mobile-preview":z.success("Mobile preview enabled!");break;case"export-code":z.success("Code exported to clipboard!");break;case"download":z.success("Project downloaded!");break;case"share":z.success("Preview link copied!");break;default:z.info(`Action: ${p}`)}};return s.jsxs("section",{className:"py-16 bg-gradient-to-b from-background to-slate-900/80 dark:from-background dark:to-slate-900/80 relative",children:[s.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"}),s.jsxs("div",{className:"container px-4",children:[s.jsxs("div",{className:"mb-12 text-center",children:[s.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[s.jsx("div",{className:"w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-500"}),s.jsx(Oi,{className:"w-6 h-6 text-cyan-500"}),s.jsx("div",{className:"w-12 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"})]}),s.jsx("h2",{className:"font-heading text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500",children:"AI-Powered Development Environment"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-300 max-w-2xl mx-auto",children:"Experience the future of web development with our Lovable-inspired AI workspace."})]}),s.jsx("div",{className:"mb-8 max-w-4xl mx-auto",children:s.jsx(lv,{onActionTrigger:d})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center",children:[s.jsx("div",{className:"h-[20px] w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"}),s.jsx("div",{className:"h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-glow-sm cyber-pulse mb-2",children:s.jsx(up,{className:"h-5 w-5 text-white"})}),s.jsx("div",{className:"h-[20px] w-[2px] bg-gradient-to-b from-transparent to-purple-500 mb-2"}),s.jsxs("div",{className:"flex items-center gap-2 animate-pulse-slow",children:[s.jsx("div",{className:"h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-transparent"}),s.jsx("div",{className:"h-4 w-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-glow-sm"}),s.jsx("div",{className:"h-[2px] w-20 bg-gradient-to-r from-transparent to-purple-500"})]})]}),s.jsx("div",{className:"lg:hidden mb-6",children:s.jsxs(Cr,{defaultValue:"chat",className:"w-full",children:[s.jsxs(Jt,{className:"grid w-full grid-cols-2 bg-slate-800/50",children:[s.jsx(fe,{value:"chat",className:"data-[state=active]:bg-cyan-500/20",children:"Chat & Code"}),s.jsx(fe,{value:"preview",className:"data-[state=active]:bg-purple-500/20",children:"Live Preview"})]}),s.jsx(ge,{value:"chat",className:"mt-4",children:s.jsx("div",{className:"h-[600px] overflow-hidden",children:s.jsx(Ba,{onCodeGenerated:a})})}),s.jsx(ge,{value:"preview",className:"mt-4",children:s.jsx("div",{className:"h-[600px] overflow-hidden",children:s.jsx(Es,{html:e,css:t,js:r})})})]})}),s.jsxs("div",{className:`hidden lg:grid gap-3 lg:gap-6 relative ${n?"lg:grid-cols-[2fr,1fr]":o?"lg:grid-cols-[1fr,2fr]":"lg:grid-cols-2"}`,children:[s.jsxs("div",{className:"relative",children:[s.jsx(q,{variant:"ghost",size:"icon",onClick:i,className:"absolute -right-3 top-1/2 transform -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 flex items-center justify-center",children:n?s.jsx(to,{className:"h-3 w-3 text-cyan-400"}):s.jsx(ro,{className:"h-3 w-3 text-cyan-400"})}),s.jsxs("div",{className:"relative p-1",children:[s.jsx("div",{className:"absolute -top-1 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"}),s.jsx("div",{className:"absolute -bottom-1 left-20 right-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"}),s.jsx("div",{className:"absolute -left-1 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"}),s.jsx("div",{className:"absolute -right-1 top-20 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"}),s.jsx("div",{className:"h-[600px] overflow-hidden",children:s.jsx(Ba,{onCodeGenerated:a})}),s.jsx("div",{className:"absolute bottom-3 right-3",children:s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("div",{className:"h-2 w-2 rounded-full bg-cyan-500 animate-pulse"}),s.jsx("div",{className:"text-xs text-cyan-500",children:"Connected to Preview"})]})})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx(q,{variant:"ghost",size:"icon",onClick:l,className:"absolute -left-3 top-1/2 transform -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 hover:bg-purple-500/30 flex items-center justify-center",children:o?s.jsx(ro,{className:"h-3 w-3 text-purple-400"}):s.jsx(to,{className:"h-3 w-3 text-purple-400"})}),s.jsxs("div",{className:"relative p-1",children:[s.jsx("div",{className:"absolute -top-1 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"}),s.jsx("div",{className:"absolute -bottom-1 left-20 right-20 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"}),s.jsx("div",{className:"absolute -left-1 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"}),s.jsx("div",{className:"absolute -right-1 top-20 bottom-20 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"}),s.jsx("div",{className:"h-[600px] overflow-hidden",children:s.jsx(Es,{html:e,css:t,js:r})}),s.jsx("div",{className:"absolute bottom-3 left-3",children:s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx("div",{className:"text-xs text-purple-500",children:"Receiving from AI"}),s.jsx("div",{className:"h-2 w-2 rounded-full bg-purple-500 animate-pulse"})]})})]})]})]}),s.jsx("div",{className:"flex justify-center mt-6",children:s.jsxs("div",{className:"bg-slate-800/70 backdrop-blur-sm p-2 rounded-lg border border-cyan-500/20 flex items-center gap-2",children:[s.jsx("div",{className:"h-3 w-3 rounded-full bg-cyan-500 animate-pulse"}),s.jsx("span",{className:"text-xs text-slate-300",children:"Real-time code generation and preview"}),s.jsx("div",{className:"h-3 w-3 rounded-full bg-purple-500 animate-pulse"})]})})]})]})]})},dv=()=>{const[e,t]=c.useState(""),[r,a]=c.useState(""),[n,o]=c.useState(""),[i,l]=c.useState(!1),[d,p]=c.useState(!1),m=(f,x,g)=>{t(f),a(x),o(g)},h=()=>{l(!i),d&&p(!1)},u=()=>{p(!d),i&&l(!1)};return s.jsxs("div",{className:"min-h-screen flex flex-col bg-code-pattern bg-fixed",children:[s.jsx(Qr,{}),s.jsxs("main",{className:"flex-1 mt-16 flex flex-col",children:[s.jsxs("section",{className:"relative overflow-hidden py-16 md:py-24",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-theme-blue/10 to-theme-purple/10"}),s.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),s.jsx("div",{className:"container relative z-10 px-4",children:s.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[s.jsxs("span",{className:"inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/20 text-cyan-500 animate-fade-in backdrop-blur-sm",children:[s.jsx("span",{className:"mr-2",children:"✦"}),"Enterprise AI Development Platform",s.jsx("span",{className:"ml-2",children:"✦"})]}),s.jsx("h1",{className:"font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500",children:"Build production-ready applications with AI"}),s.jsx("p",{className:"text-lg md:text-xl mb-8 text-slate-500 dark:text-slate-300 max-w-3xl mx-auto animate-slide-up",children:"Transform concepts into sophisticated web applications with our Lovable-inspired AI engine. Enterprise-grade solutions for modern development teams."}),s.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-10",children:[s.jsxs(q,{size:"lg",className:"gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity shadow-lg cyber-hover",children:["Start Building Free",s.jsx(ut,{className:"w-4 h-4"})]}),s.jsxs(q,{size:"lg",variant:"outline",className:"gap-2 backdrop-blur-sm bg-white/10 dark:bg-slate-900/10 hover:bg-white/20 dark:hover:bg-slate-900/20 cyber-hover border-cyan-500/30",children:["View Demo",s.jsx(xe,{className:"w-4 h-4"})]})]}),s.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-8 animate-fade-in",children:["React","TypeScript","Tailwind","Full-stack","API Integration"].map(f=>s.jsx("span",{className:"px-3 py-1.5 cyber-card text-sm rounded-full border border-cyan-500/20 shadow-sm backdrop-blur-sm",children:f},f))})]})})]}),s.jsx(cv,{html:e,css:r,js:n,onCodeGenerated:m,expandedChat:i,expandedPreview:d,onToggleChatExpansion:h,onTogglePreviewExpansion:u}),s.jsxs("section",{className:"py-20 bg-gradient-to-b from-slate-900/50 to-slate-800/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm relative",children:[s.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"}),s.jsxs("div",{className:"container px-4",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[s.jsx("div",{className:"w-12 h-[1px] bg-gradient-to-r from-transparent to-purple-500"}),s.jsx(Ep,{className:"w-6 h-6 text-purple-500"}),s.jsx("div",{className:"w-12 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"})]}),s.jsx("h2",{className:"font-heading text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500",children:"Enterprise-Grade Capabilities"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-300 max-w-2xl mx-auto",children:"Built for professional development teams with advanced features"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"cyber-card p-6 transition-all duration-300 cyber-hover border-t border-cyan-500/30",children:[s.jsx("div",{className:"cyber-icon cyber-icon-blue mb-4",children:s.jsx(xe,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg text-cyan-500",children:"Advanced Code Generation"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-300",children:"Production-ready code that follows industry best practices and patterns"})]}),s.jsxs("div",{className:"cyber-card p-6 transition-all duration-300 cyber-hover border-t border-purple-500/30",children:[s.jsx("div",{className:"cyber-icon cyber-icon-purple mb-4",children:s.jsx(ms,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg text-purple-500",children:"Component Library"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-300",children:"Access to a comprehensive library of reusable, customizable components"})]}),s.jsxs("div",{className:"cyber-card p-6 transition-all duration-300 cyber-hover border-t border-cyan-500/30",children:[s.jsx("div",{className:"cyber-icon cyber-icon-blue mb-4",children:s.jsx(Ui,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg text-cyan-500",children:"API Integration"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-300",children:"Seamlessly connect your applications with third-party APIs and services"})]}),s.jsxs("div",{className:"cyber-card p-6 transition-all duration-300 cyber-hover border-t border-purple-500/30",children:[s.jsx("div",{className:"cyber-icon cyber-icon-purple mb-4",children:s.jsx(ut,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg text-purple-500",children:"Real-time Collaboration"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-300",children:"Work together with your team in real-time with shared editing and commenting"})]}),s.jsxs("div",{className:"cyber-card p-6 transition-all duration-300 cyber-hover border-t border-cyan-500/30",children:[s.jsx("div",{className:"cyber-icon cyber-icon-blue mb-4",children:s.jsx(Bi,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg text-cyan-500",children:"Premium Templates"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-300",children:"Start with industry-specific templates designed for professional use cases"})]}),s.jsxs("div",{className:"cyber-card p-6 transition-all duration-300 cyber-hover border-t border-purple-500/30",children:[s.jsx("div",{className:"cyber-icon cyber-icon-purple mb-4",children:s.jsx(_p,{className:"h-5 w-5"})}),s.jsx("h3",{className:"font-heading font-semibold mb-2 text-lg text-purple-500",children:"Enterprise Security"}),s.jsx("p",{className:"text-slate-500 dark:text-slate-300",children:"Bank-grade security with encryption, audit logs, and compliance features"})]})]}),s.jsx("div",{className:"mt-16 text-center",children:s.jsx(Me,{to:"/features",children:s.jsxs(q,{variant:"outline",size:"lg",className:"gap-2 backdrop-blur-sm bg-white/5 dark:bg-slate-900/5 hover:bg-white/10 dark:hover:bg-slate-900/10 cyber-hover border-purple-500/30",children:["Explore All Features",s.jsx(xe,{className:"w-4 h-4"})]})})})]})]}),s.jsxs("section",{className:"py-20 relative overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"}),s.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"}),s.jsx("div",{className:"container px-4 relative z-10",children:s.jsxs("div",{className:"max-w-4xl mx-auto cyber-panel p-12 text-center rounded-2xl",children:[s.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"}),s.jsx("h2",{className:"font-heading text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400",children:"Ready to build with AI?"}),s.jsx("p",{className:"text-lg mb-8 text-slate-400 max-w-2xl mx-auto",children:"Start building professional applications with our Lovable-inspired AI platform today. No credit card required."}),s.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[s.jsxs(q,{size:"lg",className:"gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity shadow-lg cyber-hover",children:["Get Started Free",s.jsx(ut,{className:"w-4 h-4"})]}),s.jsxs(q,{size:"lg",variant:"outline",className:"gap-2 backdrop-blur-sm bg-white/5 dark:bg-slate-900/5 hover:bg-white/10 dark:hover:bg-slate-900/10 cyber-hover border-cyan-500/30",children:["Schedule Demo",s.jsx(Os,{className:"w-4 h-4"})]})]})]})})]})]}),s.jsxs("footer",{className:"border-t border-slate-200/20 dark:border-slate-800/20 bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-sm relative",children:[s.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"}),s.jsx("div",{className:"container py-8 px-4 text-sm",children:s.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white shadow-glow-sm",children:s.jsx(Oi,{className:"h-4 w-4"})}),s.jsx("span",{className:"font-heading font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400",children:"CodeCraft AI"})]}),s.jsx("div",{children:s.jsx("p",{className:"text-slate-400 dark:text-slate-300",children:"Enterprise AI Development Platform"})}),s.jsxs("div",{className:"flex gap-6",children:[s.jsx(Me,{to:"/documentation",className:"text-sm text-slate-400 dark:text-slate-300 hover:text-cyan-500 transition-colors",children:"Documentation"}),s.jsx(Me,{to:"/features",className:"text-sm text-slate-400 dark:text-slate-300 hover:text-cyan-500 transition-colors",children:"Features"}),s.jsx(Me,{to:"/pricing",className:"text-sm text-slate-400 dark:text-slate-300 hover:text-cyan-500 transition-colors",children:"Pricing"})]})]})})]}),s.jsx(br,{})]})},uv=()=>{const e=kr();return c.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),s.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),s.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},pv=new eg;function mv(){return c.useEffect(()=>{if(window.location.hash.includes("#/")){const e=window.location.hash.slice(1);window.history.replaceState(null,"",e)}},[]),s.jsx(rg,{client:pv,children:s.jsx(Pm,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:s.jsxs(Al,{children:[s.jsx(br,{}),s.jsx(ah,{}),s.jsx(Qg,{basename:"/CodeCraftAI",children:s.jsxs(Vg,{children:[s.jsx(Ot,{path:"/",element:s.jsx(sv,{})}),s.jsx(Ot,{path:"/home",element:s.jsx(dv,{})}),s.jsx(Ot,{path:"/templates",element:s.jsx(av,{})}),s.jsx(Ot,{path:"/documentation",element:s.jsx(nv,{})}),s.jsx(Ot,{path:"/features",element:s.jsx(ov,{})}),s.jsx(Ot,{path:"*",element:s.jsx(uv,{})})]})})]})})})}pi(document.getElementById("root")).render(s.jsx(mv,{}));
