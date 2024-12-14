import{Q as V}from"./QBtn.5b7b0839.js";import{g as S1,s as _1,c as J1,u as n2,a as c2,b as t2,d as e2,e as l2,f as X,Q as q1,h as U}from"./QResizeObserver.76acd822.js";import{u as a2,Q as z2,a as J}from"./use-timeout.51419800.js";import{u as m2,a as o2,_ as i2}from"./plugin-vue_export-helper.2463949f.js";import{c as r2,a as N,n as P1,l as h2,b as n1,p as d1,d as B1,s as p1,e as w1,f as u1,g as s2,h as b1,i as d2,j as v1,k as A1,r as S,m as s,w as y,o as E1,q as T1,t as D1,u as j,v as B,x as $1,y as p2,z as y1,A as u2,B as v2,C as f2,D as M2,E as g2,F as w2,G as f1,H as c1,I as b2,J as y2,K as C2,L as $,M as a1,N as t1,O as f,P as C,Q as L2,R as x2,S as F,T as q,U as e1,V as Y}from"./index.70d047a2.js";import{Q as k2}from"./QPageContainer.299cc834.js";import{R as l1}from"./use-router-link.41e49753.js";function M1(c,a,z){const i=w1(c);let n,t=i.left-a.event.x,o=i.top-a.event.y,v=Math.abs(t),d=Math.abs(o);const m=a.direction;m.horizontal===!0&&m.vertical!==!0?n=t<0?"left":"right":m.horizontal!==!0&&m.vertical===!0?n=o<0?"up":"down":m.up===!0&&o<0?(n="up",v>d&&(m.left===!0&&t<0?n="left":m.right===!0&&t>0&&(n="right"))):m.down===!0&&o>0?(n="down",v>d&&(m.left===!0&&t<0?n="left":m.right===!0&&t>0&&(n="right"))):m.left===!0&&t<0?(n="left",v<d&&(m.up===!0&&o<0?n="up":m.down===!0&&o>0&&(n="down"))):m.right===!0&&t>0&&(n="right",v<d&&(m.up===!0&&o<0?n="up":m.down===!0&&o>0&&(n="down")));let l=!1;if(n===void 0&&z===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};n=a.event.lastDir,l=!0,n==="left"||n==="right"?(i.left-=t,v=0,t=0):(i.top-=o,d=0,o=0)}return{synthetic:l,payload:{evt:c,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:i,direction:n,isFirst:a.event.isFirst,isFinal:z===!0,duration:Date.now()-a.event.time,distance:{x:v,y:d},offset:{x:t,y:o},delta:{x:i.left-a.event.lastX,y:i.top-a.event.lastY}}}}let S2=0;var g1=r2({name:"touch-pan",beforeMount(c,{value:a,modifiers:z}){if(z.mouse!==!0&&N.has.touch!==!0)return;function i(t,o){z.mouse===!0&&o===!0?s2(t):(z.stop===!0&&p1(t),z.prevent===!0&&B1(t))}const n={uid:"qvtp_"+S2++,handler:a,modifiers:z,direction:S1(z),noop:P1,mouseStart(t){_1(t,n)&&h2(t)&&(n1(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(t,!0))},touchStart(t){if(_1(t,n)){const o=t.target;n1(n,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),n.start(t)}},start(t,o){if(N.is.firefox===!0&&d1(c,!0),n.lastEvt=t,o===!0||z.stop===!0){if(n.direction.all!==!0&&(o!==!0||n.modifiers.mouseAllDir!==!0&&n.modifiers.mousealldir!==!0)){const m=t.type.indexOf("mouse")!==-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&B1(m),t.cancelBubble===!0&&p1(m),Object.assign(m,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[n.uid]:t.qClonedBy.concat(n.uid)}),n.initialEvent={target:t.target,event:m}}p1(t)}const{left:v,top:d}=w1(t);n.event={x:v,y:d,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:d}},move(t){if(n.event===void 0)return;const o=w1(t),v=o.left-n.event.x,d=o.top-n.event.y;if(v===0&&d===0)return;n.lastEvt=t;const m=n.event.mouse===!0,l=()=>{i(t,m);let u;z.preserveCursor!==!0&&z.preservecursor!==!0&&(u=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),m===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),J1(),n.styleCleanup=p=>{if(n.styleCleanup=void 0,u!==void 0&&(document.documentElement.style.cursor=u),document.body.classList.remove("non-selectable"),m===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{T(),p()},50):T()}else p!==void 0&&p()}};if(n.event.detected===!0){n.event.isFirst!==!0&&i(t,n.event.mouse);const{payload:u,synthetic:p}=M1(t,n,!1);u!==void 0&&(n.handler(u)===!1?n.end(t):(n.styleCleanup===void 0&&n.event.isFirst===!0&&l(),n.event.lastX=u.position.left,n.event.lastY=u.position.top,n.event.lastDir=p===!0?void 0:u.direction,n.event.isFirst=!1));return}if(n.direction.all===!0||m===!0&&(n.modifiers.mouseAllDir===!0||n.modifiers.mousealldir===!0)){l(),n.event.detected=!0,n.move(t);return}const b=Math.abs(v),g=Math.abs(d);b!==g&&(n.direction.horizontal===!0&&b>g||n.direction.vertical===!0&&b<g||n.direction.up===!0&&b<g&&d<0||n.direction.down===!0&&b<g&&d>0||n.direction.left===!0&&b>g&&v<0||n.direction.right===!0&&b>g&&v>0?(n.event.detected=!0,n.move(t)):n.end(t,!0))},end(t,o){if(n.event!==void 0){if(u1(n,"temp"),N.is.firefox===!0&&d1(c,!1),o===!0)n.styleCleanup!==void 0&&n.styleCleanup(),n.event.detected!==!0&&n.initialEvent!==void 0&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(n.event.detected===!0){n.event.isFirst===!0&&n.handler(M1(t===void 0?n.lastEvt:t,n).payload);const{payload:v}=M1(t===void 0?n.lastEvt:t,n,!0),d=()=>{n.handler(v)};n.styleCleanup!==void 0?n.styleCleanup(d):d()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(c.__qtouchpan=n,z.mouse===!0){const t=z.mouseCapture===!0||z.mousecapture===!0?"Capture":"";n1(n,"main",[[c,"mousedown","mouseStart",`passive${t}`]])}N.has.touch===!0&&n1(n,"main",[[c,"touchstart","touchStart",`passive${z.capture===!0?"Capture":""}`],[c,"touchmove","noop","notPassiveCapture"]])},updated(c,a){const z=c.__qtouchpan;z!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&z.end(),z.handler=a.value),z.direction=S1(a.modifiers))},beforeUnmount(c){const a=c.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),u1(a,"main"),u1(a,"temp"),N.is.firefox===!0&&d1(c,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete c.__qtouchpan)}});const R1=150;var _2=b1({name:"QDrawer",inheritAttrs:!1,props:{...n2,...m2,side:{type:String,default:"left",validator:c=>["left","right"].includes(c)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:c=>["default","desktop","mobile"].includes(c),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...c2,"onLayout","miniState"],setup(c,{slots:a,emit:z,attrs:i}){const n=y1(),{proxy:{$q:t}}=n,o=o2(c,t),{preventBodyScroll:v}=l2(),{registerTimeout:d,removeTimeout:m}=a2(),l=d2(A1,v1);if(l===v1)return console.error("QDrawer needs to be child of QLayout"),v1;let b,g=null,u;const p=S(c.behavior==="mobile"||c.behavior!=="desktop"&&l.totalWidth.value<=c.breakpoint),T=s(()=>c.mini===!0&&p.value!==!0),L=s(()=>T.value===!0?c.miniWidth:c.width),M=S(c.showIfAbove===!0&&p.value===!1?!0:c.modelValue===!0),E=s(()=>c.persistent!==!0&&(p.value===!0||H1.value===!0));function Q(e,r){if(D(),e!==!1&&l.animate(),_(0),p.value===!0){const x=l.instances[I.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),P(1),l.isContainer.value!==!0&&v(!0)}else P(0),e!==!1&&r1(!1);d(()=>{e!==!1&&r1(!0),r!==!0&&z("show",e)},R1)}function h(e,r){W(),e!==!1&&l.animate(),P(0),_(O.value*L.value),h1(),r!==!0?d(()=>{z("hide",e)},R1):m()}const{show:w,hide:k}=t2({showing:M,hideOnRouteChange:E,handleShow:Q,handleHide:h}),{addToHistory:D,removeFromHistory:W}=e2(M,k,E),H={belowBreakpoint:p,hide:k},R=s(()=>c.side==="right"),O=s(()=>(t.lang.rtl===!0?-1:1)*(R.value===!0?1:-1)),C1=S(0),G=S(!1),z1=S(!1),L1=S(L.value*O.value),I=s(()=>R.value===!0?"left":"right"),m1=s(()=>M.value===!0&&p.value===!1&&c.overlay===!1?c.miniToOverlay===!0?c.miniWidth:L.value:0),o1=s(()=>c.overlay===!0||c.miniToOverlay===!0||l.view.value.indexOf(R.value?"R":"L")!==-1||t.platform.is.ios===!0&&l.isContainer.value===!0),K=s(()=>c.overlay===!1&&M.value===!0&&p.value===!1),H1=s(()=>c.overlay===!0&&M.value===!0&&p.value===!1),O1=s(()=>"fullscreen q-drawer__backdrop"+(M.value===!1&&G.value===!1?" hidden":"")),G1=s(()=>({backgroundColor:`rgba(0,0,0,${C1.value*.4})`})),x1=s(()=>R.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),F1=s(()=>R.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Q1=s(()=>{const e={};return l.header.space===!0&&x1.value===!1&&(o1.value===!0?e.top=`${l.header.offset}px`:l.header.space===!0&&(e.top=`${l.header.size}px`)),l.footer.space===!0&&F1.value===!1&&(o1.value===!0?e.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(e.bottom=`${l.footer.size}px`)),e}),W1=s(()=>{const e={width:`${L.value}px`,transform:`translateX(${L1.value}px)`};return p.value===!0?e:Object.assign(e,Q1.value)}),K1=s(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),N1=s(()=>`q-drawer q-drawer--${c.side}`+(z1.value===!0?" q-drawer--mini-animate":"")+(c.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(G.value===!0?" no-transition":M.value===!0?"":" q-layout--prevent-focus")+(p.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(o1.value===!0||K.value!==!0?" fixed":"")+(c.overlay===!0||c.miniToOverlay===!0?" q-drawer--on-top":"")+(x1.value===!0?" q-drawer--top-padding":""))),Y1=s(()=>{const e=t.lang.rtl===!0?c.side:I.value;return[[g1,X1,void 0,{[e]:!0,mouse:!0}]]}),j1=s(()=>{const e=t.lang.rtl===!0?I.value:c.side;return[[g1,k1,void 0,{[e]:!0,mouse:!0}]]}),I1=s(()=>{const e=t.lang.rtl===!0?I.value:c.side;return[[g1,k1,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function i1(){U1(p,c.behavior==="mobile"||c.behavior!=="desktop"&&l.totalWidth.value<=c.breakpoint)}y(p,e=>{e===!0?(b=M.value,M.value===!0&&k(!1)):c.overlay===!1&&c.behavior!=="mobile"&&b!==!1&&(M.value===!0?(_(0),P(0),h1()):w(!1))}),y(()=>c.side,(e,r)=>{l.instances[r]===H&&(l.instances[r]=void 0,l[r].space=!1,l[r].offset=0),l.instances[e]=H,l[e].size=L.value,l[e].space=K.value,l[e].offset=m1.value}),y(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&i1()}),y(()=>c.behavior+c.breakpoint,i1),y(l.isContainer,e=>{M.value===!0&&v(e!==!0),e===!0&&i1()}),y(l.scrollbarWidth,()=>{_(M.value===!0?0:void 0)}),y(m1,e=>{A("offset",e)}),y(K,e=>{z("onLayout",e),A("space",e)}),y(R,()=>{_()}),y(L,e=>{_(),s1(c.miniToOverlay,e)}),y(()=>c.miniToOverlay,e=>{s1(e,L.value)}),y(()=>t.lang.rtl,()=>{_()}),y(()=>c.mini,()=>{c.noMiniAnimation||c.modelValue===!0&&(Z1(),l.animate())}),y(T,e=>{z("miniState",e)});function _(e){e===void 0?T1(()=>{e=M.value===!0?0:L.value,_(O.value*e)}):(l.isContainer.value===!0&&R.value===!0&&(p.value===!0||Math.abs(e)===L.value)&&(e+=O.value*l.scrollbarWidth.value),L1.value=e)}function P(e){C1.value=e}function r1(e){const r=e===!0?"remove":l.isContainer.value!==!0?"add":"";r!==""&&document.body.classList[r]("q-body--drawer-toggle")}function Z1(){g!==null&&clearTimeout(g),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),z1.value=!0,g=setTimeout(()=>{g=null,z1.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function X1(e){if(M.value!==!1)return;const r=L.value,x=X(e.distance.x,0,r);if(e.isFinal===!0){x>=Math.min(75,r)===!0?w():(l.animate(),P(0),_(O.value*r)),G.value=!1;return}_((t.lang.rtl===!0?R.value!==!0:R.value)?Math.max(r-x,0):Math.min(0,x-r)),P(X(x/r,0,1)),e.isFirst===!0&&(G.value=!0)}function k1(e){if(M.value!==!0)return;const r=L.value,x=e.direction===c.side,Z=(t.lang.rtl===!0?x!==!0:x)?X(e.distance.x,0,r):0;if(e.isFinal===!0){Math.abs(Z)<Math.min(75,r)===!0?(l.animate(),P(1),_(0)):k(),G.value=!1;return}_(O.value*Z),P(X(1-Z/r,0,1)),e.isFirst===!0&&(G.value=!0)}function h1(){v(!1),r1(!0)}function A(e,r){l.update(c.side,e,r)}function U1(e,r){e.value!==r&&(e.value=r)}function s1(e,r){A("size",e===!0?c.miniWidth:r)}return l.instances[c.side]=H,s1(c.miniToOverlay,L.value),A("space",K.value),A("offset",m1.value),c.showIfAbove===!0&&c.modelValue!==!0&&M.value===!0&&c["onUpdate:modelValue"]!==void 0&&z("update:modelValue",!0),E1(()=>{z("onLayout",K.value),z("miniState",T.value),b=c.showIfAbove===!0;const e=()=>{(M.value===!0?Q:h)(!1,!0)};if(l.totalWidth.value!==0){T1(e);return}u=y(l.totalWidth,()=>{u(),u=void 0,M.value===!1&&c.showIfAbove===!0&&p.value===!1?w(!1):e()})}),D1(()=>{u!==void 0&&u(),g!==null&&(clearTimeout(g),g=null),M.value===!0&&h1(),l.instances[c.side]===H&&(l.instances[c.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const e=[];p.value===!0&&(c.noSwipeOpen===!1&&e.push(j(B("div",{key:"open",class:`q-drawer__opener fixed-${c.side}`,"aria-hidden":"true"}),Y1.value)),e.push($1("div",{ref:"backdrop",class:O1.value,style:G1.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",c.noSwipeBackdrop!==!0&&M.value===!0,()=>I1.value)));const r=T.value===!0&&a.mini!==void 0,x=[B("div",{...i,key:""+r,class:[K1.value,i.class]},r===!0?a.mini():p2(a.default))];return c.elevated===!0&&M.value===!0&&x.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push($1("aside",{ref:"content",class:N1.value,style:W1.value},x,"contentclose",c.noSwipeClose!==!0&&p.value===!0,()=>j1.value)),B("div",{class:"q-drawer-container"},e)}}});const{passive:V1}=f2,q2=["both","horizontal","vertical"];var B2=b1({name:"QScrollObserver",props:{axis:{type:String,validator:c=>q2.includes(c),default:"vertical"},debounce:[String,Number],scrollTarget:u2},emits:["scroll"],setup(c,{emit:a}){const z={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,n,t;y(()=>c.scrollTarget,()=>{d(),v()});function o(){i!==null&&i();const b=Math.max(0,M2(n)),g=g2(n),u={top:b-z.position.top,left:g-z.position.left};if(c.axis==="vertical"&&u.top===0||c.axis==="horizontal"&&u.left===0)return;const p=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";z.position={top:b,left:g},z.directionChanged=z.direction!==p,z.delta=u,z.directionChanged===!0&&(z.direction=p,z.inflectionPoint=z.position),a("scroll",{...z})}function v(){n=v2(t,c.scrollTarget),n.addEventListener("scroll",m,V1),m(!0)}function d(){n!==void 0&&(n.removeEventListener("scroll",m,V1),n=void 0)}function m(b){if(b===!0||c.debounce===0||c.debounce==="0")o();else if(i===null){const[g,u]=c.debounce?[setTimeout(o,c.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];i=()=>{u(g),i=null}}}const{proxy:l}=y1();return y(()=>l.$q.lang.rtl,o),E1(()=>{t=l.$el.parentNode,v()}),D1(()=>{i!==null&&i(),d()}),Object.assign(l,{trigger:m,getPosition:()=>z}),P1}}),T2=b1({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:c=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(c.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(c,{slots:a,emit:z}){const{proxy:{$q:i}}=y1(),n=S(null),t=S(i.screen.height),o=S(c.container===!0?0:i.screen.width),v=S({position:0,direction:"down",inflectionPoint:0}),d=S(0),m=S(w2.value===!0?0:f1()),l=s(()=>"q-layout q-layout--"+(c.container===!0?"containerized":"standard")),b=s(()=>c.container===!1?{minHeight:i.screen.height+"px"}:null),g=s(()=>m.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${m.value}px`}:null),u=s(()=>m.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${m.value}px`,width:`calc(100% + ${m.value}px)`}:null);function p(h){if(c.container===!0||document.qScrollPrevented!==!0){const w={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};v.value=w,c.onScroll!==void 0&&z("scroll",w)}}function T(h){const{height:w,width:k}=h;let D=!1;t.value!==w&&(D=!0,t.value=w,c.onScrollHeight!==void 0&&z("scrollHeight",w),M()),o.value!==k&&(D=!0,o.value=k),D===!0&&c.onResize!==void 0&&z("resize",h)}function L({height:h}){d.value!==h&&(d.value=h,M())}function M(){if(c.container===!0){const h=t.value>d.value?f1():0;m.value!==h&&(m.value=h)}}let E=null;const Q={instances:{},view:s(()=>c.view),isContainer:s(()=>c.container),rootRef:n,height:t,containerHeight:d,scrollbarWidth:m,totalWidth:s(()=>o.value+m.value),rows:s(()=>{const h=c.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:c1({size:0,offset:0,space:!1}),right:c1({size:300,offset:0,space:!1}),footer:c1({size:0,offset:0,space:!1}),left:c1({size:300,offset:0,space:!1}),scroll:v,animate(){E!==null?clearTimeout(E):document.body.classList.add("q-body--layout-animate"),E=setTimeout(()=>{E=null,document.body.classList.remove("q-body--layout-animate")},155)},update(h,w,k){Q[h][w]=k}};if(b2(A1,Q),f1()>0){let k=function(){h=null,w.classList.remove("hide-scrollbar")},D=function(){if(h===null){if(w.scrollHeight>i.screen.height)return;w.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(k,300)},W=function(H){h!==null&&H==="remove"&&(clearTimeout(h),k()),window[`${H}EventListener`]("resize",D)},h=null;const w=document.body;y(()=>c.container!==!0?"add":"remove",W),c.container!==!0&&W("add"),y2(()=>{W("remove")})}return()=>{const h=C2(a.default,[B(B2,{onScroll:p}),B(q1,{onResize:T})]),w=B("div",{class:l.value,style:b.value,ref:c.container===!0?void 0:n,tabindex:-1},h);return c.container===!0?B("div",{class:"q-layout-container overflow-hidden",ref:n},[B(q1,{onResize:L}),B("div",{class:"absolute-full",style:g.value},[B("div",{class:"scroll",style:u.value},[w])])]):w}}});const $2={data(){return{currentYear:new Date().getFullYear()}}},R2={class:"footer-section"},V2={class:"footer-wrapper"},P2={class:"cus-column-2"},A2={class:"cus-nav-cont"},E2={class:"cus-column-4"};function D2(c,a,z,i,n,t){return $(),a1("div",R2,[a[5]||(a[5]=t1(`<div class="footer-background-image-cont-1"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760.000000 770.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,770.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M3696 7679 c-65 -15 -157 -71 -228 -137 -62 -58 -69 -63 -101 -57
-67 13 -161 -48 -173 -113 l-7 -34 -24 31 c-14 17 -38 38 -53 46 -42 22 -122
19 -151 -4 -23 -19 -24 -19 -64 4 -160 93 -370 87 -515 -13 -69 -48 -142 -143
-171 -222 -19 -53 -25 -60 -49 -60 -68 0 -149 -104 -134 -173 l6 -30 -33 23
c-58 42 -186 20 -211 -36 -9 -19 -16 -22 -42 -16 -67 15 -219 6 -278 -17 -177
-68 -298 -244 -298 -431 0 -66 -1 -68 -29 -78 -45 -16 -84 -90 -79 -150 3 -26
8 -54 11 -62 6 -12 -3 -15 -55 -15 -54 0 -69 -4 -100 -28 -20 -15 -43 -45 -51
-65 -14 -35 -19 -38 -75 -50 -138 -28 -278 -135 -338 -257 -27 -57 -29 -67
-29 -185 0 -96 4 -137 19 -178 18 -53 18 -54 -3 -73 -27 -25 -44 -90 -35 -135
4 -20 20 -52 36 -70 l30 -34 -32 0 c-68 0 -143 -78 -145 -151 -1 -35 -6 -42
-45 -67 -57 -36 -148 -133 -182 -192 -33 -57 -58 -141 -58 -196 0 -100 46
-229 113 -316 34 -45 36 -49 23 -79 -9 -22 -11 -44 -4 -78 10 -56 34 -91 76
-111 38 -18 40 -26 7 -34 -58 -15 -106 -132 -79 -195 13 -30 11 -34 -23 -79
-86 -112 -124 -249 -104 -370 23 -132 98 -246 213 -321 58 -38 62 -43 63 -79
2 -75 78 -152 151 -152 l26 0 -30 -35 c-17 -19 -34 -50 -37 -68 -8 -43 10
-112 36 -136 21 -19 21 -21 4 -70 -94 -283 49 -547 335 -620 68 -17 73 -20 90
-59 26 -59 94 -96 161 -90 43 5 49 3 43 -11 -4 -9 -9 -37 -12 -62 -5 -62 26
-123 74 -147 29 -13 35 -21 31 -41 -8 -42 13 -164 39 -221 77 -170 227 -270
409 -273 44 -1 99 1 122 6 37 6 42 5 48 -13 18 -56 157 -82 215 -40 l32 23 -6
-30 c-15 -68 65 -173 133 -173 23 -1 31 -11 65 -83 48 -102 141 -199 231 -242
115 -55 287 -45 424 25 56 28 57 28 80 9 29 -23 109 -26 151 -4 15 8 39 29 53
46 l24 31 7 -34 c12 -64 106 -126 173 -113 31 6 39 1 102 -57 79 -74 144 -111
226 -133 156 -40 318 10 442 136 54 55 60 59 94 53 71 -11 163 49 175 114 l7
34 25 -32 c46 -59 154 -81 203 -41 23 19 24 19 81 -10 115 -58 267 -76 374
-44 115 34 240 157 295 291 19 46 26 54 49 54 15 0 45 13 67 29 47 34 80 104
69 147 l-7 26 30 -21 c57 -41 199 -16 216 38 5 17 11 19 38 13 67 -15 209 -6
272 16 180 66 292 219 303 413 4 85 5 87 36 100 46 21 77 82 73 144 -2 28 -7
57 -11 66 -6 14 0 16 43 11 68 -6 135 31 161 91 17 38 23 41 92 61 156 46 255
121 313 239 59 120 65 240 19 379 -16 48 -16 50 5 72 51 54 50 155 -2 206
l-31 30 33 0 c69 0 144 77 146 151 1 36 6 43 51 73 28 19 80 66 117 106 72 77
102 140 113 234 13 112 -40 283 -115 369 -27 30 -30 39 -22 56 15 28 14 93 -4
134 -15 37 -58 77 -81 77 -24 0 -15 14 19 30 60 28 98 142 67 200 -8 16 -3 29
29 71 56 74 101 187 108 271 13 158 -83 333 -237 429 -40 25 -44 31 -45 67 -2
77 -77 152 -151 152 l-28 0 27 28 c15 16 32 44 37 63 15 53 -3 129 -38 155
-12 9 -12 17 3 60 63 182 24 367 -102 492 -69 68 -137 106 -233 131 -68 17
-73 20 -90 58 -27 61 -72 88 -148 88 -52 0 -61 3 -55 15 4 8 8 38 10 65 4 62
-27 123 -73 144 -31 13 -32 16 -32 80 -3 272 -235 481 -508 457 -39 -3 -77 -8
-85 -11 -8 -3 -20 6 -30 23 -12 21 -31 33 -71 46 -61 19 -96 15 -141 -16 l-28
-20 7 26 c11 43 -22 113 -69 147 -22 16 -52 29 -66 29 -23 1 -31 11 -64 80
-49 105 -133 195 -223 241 -59 29 -79 34 -155 37 -107 5 -176 -9 -266 -52
l-69 -33 -24 19 c-20 17 -36 19 -89 16 -61 -4 -66 -6 -102 -46 l-37 -42 -6 33
c-12 64 -105 124 -175 112 -33 -5 -40 -2 -81 41 -126 131 -300 189 -454 153z
m226 -29 c56 -16 180 -102 228 -158 35 -42 46 -50 61 -42 49 27 137 -5 167
-60 15 -28 11 -177 -7 -222 -11 -30 -42 -53 -85 -64 l-29 -7 31 40 c58 72 67
140 23 184 -23 23 -38 29 -72 29 -36 0 -47 -6 -80 -40 l-38 -40 -15 53 c-31
108 -115 185 -232 214 -147 36 -304 -37 -365 -171 -10 -22 -19 -51 -19 -63 0
-34 -15 -35 -39 -2 -31 42 -81 62 -118 48 -88 -33 -96 -128 -18 -214 l35 -37
-32 6 c-77 15 -96 47 -105 171 -5 64 -2 87 11 113 30 58 114 90 165 62 15 -7
26 0 63 43 55 63 142 125 211 149 59 20 199 24 259 8z m-7 -147 c72 -24 139
-95 161 -169 30 -106 3 -219 -66 -278 -44 -37 -51 -33 -33 20 10 31 14 65 10
103 -9 101 -58 170 -139 197 -46 15 -53 15 -93 -1 -59 -22 -92 -49 -116 -96
-28 -55 -35 -152 -15 -206 8 -24 13 -43 10 -43 -19 0 -64 46 -87 88 -84 154
-16 328 150 388 53 18 160 17 218 -3z m-1170 -58 c33 -8 91 -31 130 -50 l70
-35 17 22 c14 20 26 23 78 23 57 0 64 -3 90 -32 32 -36 58 -110 67 -190 5 -50
4 -54 -30 -88 -40 -40 -66 -47 -42 -11 9 13 18 46 22 74 8 67 -10 110 -53 128
-72 30 -113 10 -143 -70 l-18 -48 -22 36 c-59 96 -159 142 -290 134 -122 -7
-215 -69 -268 -176 -24 -48 -28 -69 -27 -132 l1 -76 -45 23 c-63 32 -88 29
-129 -12 -31 -31 -35 -40 -30 -71 8 -48 49 -99 100 -127 l42 -22 -47 -3 c-26
-2 -56 2 -67 7 -32 18 -101 166 -101 218 0 37 6 50 39 86 33 34 46 42 76 42
35 0 37 2 64 66 31 75 105 176 154 213 103 77 236 103 362 71z m2318 0 c112
-29 182 -79 251 -179 21 -30 49 -81 61 -113 23 -56 25 -58 60 -58 30 0 44 -8
76 -42 54 -58 54 -102 -1 -211 -44 -88 -68 -106 -136 -100 l-39 3 38 19 c42
21 95 79 103 114 13 48 -42 122 -91 122 -12 0 -43 -11 -69 -25 l-47 -25 6 54
c13 104 -37 210 -133 279 -61 44 -106 58 -187 58 -117 0 -211 -49 -266 -138
l-23 -37 -13 41 c-28 82 -81 112 -148 81 -54 -25 -72 -120 -36 -191 24 -46 13
-47 -35 -2 -37 35 -37 36 -31 95 9 79 45 168 79 193 14 11 49 22 77 25 44 4
52 2 75 -22 l24 -27 59 33 c109 61 238 81 346 53z m-1197 -104 c46 -21 76 -63
94 -130 19 -73 6 -121 -64 -225 -34 -51 -68 -107 -75 -125 -8 -17 -17 -31 -21
-31 -4 0 -15 18 -25 40 -10 22 -42 74 -72 117 -29 42 -58 95 -64 117 -24 90
21 203 94 237 53 23 81 23 133 0z m-449 -41 c34 -35 83 -117 62 -105 -8 5 -26
18 -41 29 -27 19 -28 19 -48 1 -25 -23 -25 -51 0 -92 27 -45 9 -41 -45 8 -66
61 -77 137 -26 176 28 22 67 15 98 -17z m864 17 c52 -40 41 -114 -27 -177 -53
-48 -71 -52 -44 -7 26 42 25 72 -2 91 -22 16 -27 14 -78 -22 l-24 -17 24 42
c50 90 107 124 151 90z m-1516 -21 c144 -67 208 -252 128 -370 l-28 -41 -5 65
c-11 135 -103 230 -222 230 -55 0 -111 -38 -139 -96 -43 -90 -35 -164 27 -254
38 -56 38 -56 -32 -29 -40 14 -97 73 -120 124 -58 124 -13 274 102 341 103 61
202 71 289 30z m2320 -9 c58 -29 130 -102 151 -152 20 -49 18 -151 -5 -201
-26 -58 -74 -109 -126 -133 -65 -31 -69 -27 -31 29 61 89 68 183 19 268 -32
56 -75 82 -136 82 -116 0 -217 -109 -217 -235 0 -65 -12 -65 -41 -1 -43 94
-15 240 59 310 74 69 226 85 327 33z m-1983 -35 c40 -34 28 -135 -23 -194
l-19 -23 6 50 c6 54 0 66 -43 79 -18 6 -26 -1 -47 -36 -28 -47 -32 -36 -15 44
15 68 56 112 96 102 15 -4 36 -13 45 -22z m1491 8 c27 -22 42 -58 52 -130 l6
-45 -26 43 c-22 35 -31 42 -48 36 -37 -10 -49 -35 -43 -84 5 -42 5 -44 -10
-25 -25 32 -54 98 -54 125 0 36 21 73 50 87 34 17 43 16 73 -7z m-1143 -76
c28 -24 90 -105 90 -118 0 -29 -113 42 -135 84 -16 32 -14 60 4 60 5 0 23 -12
41 -26z m756 12 c10 -25 -26 -76 -74 -107 -66 -41 -79 -38 -50 12 23 42 90
109 108 109 6 0 13 -6 16 -14z m-1460 -74 c22 -16 50 -50 63 -77 36 -72 37
-125 7 -229 -14 -48 -26 -106 -26 -127 0 -46 -8 -48 -41 -13 -13 15 -56 48
-95 74 -114 78 -154 137 -154 230 0 64 19 109 59 143 27 23 42 27 90 27 48 0
65 -5 97 -28z m2292 2 c61 -47 80 -133 47 -224 -20 -56 -51 -89 -140 -150 -38
-26 -81 -59 -94 -74 -33 -35 -41 -33 -41 12 0 20 -12 80 -26 132 -30 109 -28
157 8 228 34 66 88 101 157 102 43 0 61 -5 89 -26z m-1995 -6 c10 -37 -42
-136 -83 -158 -18 -10 -19 -8 -13 22 22 117 80 199 96 136z m1570 -25 c13 -27
27 -61 31 -78 4 -16 9 -38 12 -48 6 -18 5 -18 -20 -2 -49 32 -97 135 -75 162
18 21 27 16 52 -34z m-1255 -22 c210 -47 309 -103 386 -214 35 -51 37 -58 34
-121 l-3 -67 -44 61 c-55 75 -160 175 -172 163 -5 -5 -22 -44 -37 -86 l-28
-78 -27 21 c-29 23 -171 90 -191 90 -14 0 -145 -132 -164 -165 -12 -19 -12
-19 -23 -1 -6 10 -33 42 -59 72 -35 38 -51 49 -58 41 -28 -35 -62 -118 -109
-267 -3 -9 -15 10 -30 44 -28 67 -27 98 8 190 33 85 121 175 264 268 66 43
121 78 122 78 1 0 60 -13 131 -29z m1137 -49 c77 -50 142 -102 182 -145 53
-57 66 -78 88 -147 31 -99 31 -105 1 -170 l-24 -52 -17 58 c-18 62 -66 173
-91 211 -14 22 -15 22 -69 -37 -30 -33 -55 -64 -55 -70 0 -21 -16 -8 -45 35
-32 48 -126 135 -145 135 -21 0 -164 -71 -187 -92 -13 -12 -24 -20 -26 -17 -2
2 -16 39 -31 82 -16 42 -32 80 -38 83 -11 7 -147 -129 -185 -187 l-28 -43 -3
68 c-3 61 0 72 28 116 70 108 183 173 382 220 68 15 128 28 133 29 6 1 64 -34
130 -77z m-2230 -62 c44 -22 117 -90 80 -75 -40 15 -65 17 -80 5 -26 -21 -17
-56 22 -91 l38 -32 -39 6 c-86 14 -154 90 -134 149 10 27 42 58 62 58 5 0 28
-9 51 -20z m3160 -5 c31 -30 33 -76 5 -115 -22 -31 -94 -70 -129 -70 -20 0
-18 3 14 31 37 33 45 68 20 89 -14 12 -37 11 -80 -5 -12 -4 -1 11 24 34 37 35
77 56 114 60 4 1 19 -10 32 -24z m-3436 -39 c60 -45 121 -143 121 -195 0 -19
-10 -42 -27 -61 l-28 -31 0 71 c0 70 -1 72 -37 106 -40 36 -81 44 -120 23 -26
-14 -48 -68 -48 -120 l0 -41 -35 31 c-38 33 -118 61 -175 61 -97 0 -211 -54
-265 -125 -67 -87 -86 -223 -44 -312 13 -26 25 -51 26 -54 2 -4 -24 -5 -59 -2
-52 4 -67 2 -86 -13 -30 -25 -43 -82 -27 -121 15 -35 101 -83 149 -83 34 0 26
-11 -21 -30 -44 -17 -71 -8 -128 42 -69 61 -105 114 -105 156 0 50 37 111 74
120 31 8 31 9 37 88 9 118 50 232 106 294 99 111 212 156 368 148 49 -3 97 -8
106 -12 12 -5 22 3 37 29 25 41 50 53 108 54 27 1 50 -7 73 -23z m3785 -8 c12
-14 26 -33 31 -42 8 -14 16 -15 45 -6 48 14 162 12 236 -3 44 -9 79 -26 126
-60 129 -91 173 -173 192 -351 10 -92 13 -101 33 -104 49 -7 94 -97 79 -156
-8 -31 -109 -142 -149 -162 -33 -18 -82 -13 -113 11 -18 14 -17 14 11 15 63 1
144 55 159 107 9 29 -17 88 -45 103 -12 7 -46 10 -79 8 l-57 -4 25 54 c45 98
29 212 -45 314 -99 138 -307 170 -434 68 l-37 -29 -4 60 c-3 42 -10 66 -24 80
-26 26 -88 36 -119 19 -35 -19 -65 -87 -65 -146 l-1 -49 -24 28 c-36 41 -33
82 13 153 21 32 54 74 73 92 32 32 37 34 93 30 48 -4 63 -9 80 -30z m-3404
-65 c25 -13 59 -35 75 -48 l30 -25 -31 0 c-43 0 -122 25 -145 46 -10 9 -19 28
-19 41 0 21 4 23 23 18 12 -4 42 -18 67 -32z m2953 18 c5 -22 -24 -54 -63 -69
-38 -14 -120 -24 -120 -15 0 16 141 101 171 103 4 0 9 -9 12 -19z m-1573 -205
c17 -33 30 -75 30 -95 l0 -36 -43 47 c-46 51 -132 118 -151 118 -7 0 -25 -28
-41 -62 -16 -35 -30 -64 -31 -66 -1 -2 -22 12 -47 31 -48 37 -132 63 -171 53
-34 -8 -111 -80 -131 -122 l-17 -36 -51 51 c-28 28 -56 51 -64 51 -17 0 -79
-94 -107 -165 -30 -71 -41 -58 -39 45 1 78 10 110 63 223 l33 68 33 -32 c18
-17 43 -51 56 -75 13 -24 26 -44 30 -44 3 0 19 24 36 53 34 59 122 147 149
147 27 0 154 -68 188 -101 17 -16 34 -29 37 -29 3 0 8 19 11 43 3 24 15 65 27
92 l21 49 75 -75 c46 -46 86 -96 104 -133z m310 131 c11 -31 20 -68 20 -82 0
-32 7 -32 45 4 33 31 133 86 178 97 26 6 35 0 92 -59 35 -35 71 -81 79 -101 8
-20 19 -36 25 -36 5 0 19 19 30 43 11 24 36 58 55 76 l34 33 37 -78 c61 -131
77 -217 54 -283 l-11 -32 -24 56 c-28 71 -90 165 -107 165 -8 0 -36 -23 -64
-51 l-51 -51 -17 36 c-20 41 -98 113 -132 122 -38 10 -122 -16 -170 -53 -25
-19 -46 -33 -47 -31 -1 2 -15 31 -31 66 -16 34 -34 62 -41 62 -20 0 -129 -87
-159 -126 -19 -25 -30 -32 -35 -24 -8 13 16 95 41 142 20 37 162 179 171 170
4 -4 17 -34 28 -65z m-2071 17 c46 -33 65 -125 37 -189 l-13 -30 -6 42 c-8 46
-29 73 -56 73 -24 0 -37 -16 -48 -60 l-10 -35 -11 53 c-16 71 -15 93 4 120 28
40 68 50 103 26z m3694 7 c33 -13 51 -67 42 -129 -9 -65 -20 -82 -29 -41 -7
39 -23 59 -45 59 -29 0 -42 -16 -55 -66 l-13 -49 -11 40 c-7 22 -12 54 -12 70
0 41 30 97 60 112 30 15 32 15 63 4z m-3144 -81 c78 -10 174 -55 218 -102 21
-22 57 -117 49 -126 -2 -1 -21 9 -42 23 -39 26 -153 84 -206 104 l-28 11 0
-96 c0 -87 -2 -96 -17 -89 -36 13 -117 25 -178 25 l-62 0 -36 -77 c-20 -43
-40 -94 -44 -114 l-8 -37 -78 46 c-42 25 -80 42 -83 39 -11 -11 -25 -153 -22
-228 l3 -79 -45 45 -45 45 -3 99 c-4 95 -3 101 34 185 24 55 67 126 119 194
l81 107 104 16 c125 20 190 22 289 9z m2796 -6 c60 -9 115 -21 122 -27 49 -47
166 -221 197 -294 37 -83 38 -89 34 -184 l-3 -99 -46 -46 -46 -46 5 51 c5 61
-6 232 -18 251 -6 10 -22 5 -74 -24 -36 -20 -68 -41 -71 -46 -12 -19 -22 -10
-28 23 -3 19 -22 71 -43 115 l-37 82 -71 0 c-66 0 -109 -7 -163 -24 -22 -7
-22 -5 -25 88 l-3 94 -66 -28 c-36 -15 -96 -46 -134 -69 -37 -23 -69 -40 -71
-38 -2 1 4 26 12 54 43 146 242 208 529 167z m754 -15 c102 -45 171 -147 179
-264 3 -63 1 -76 -25 -125 -17 -31 -47 -68 -72 -87 -49 -38 -141 -68 -179 -58
-26 6 -26 7 20 35 25 16 55 42 67 59 52 73 65 174 31 241 -72 142 -297 97
-370 -73 -19 -44 -24 -49 -31 -32 -23 59 3 171 56 241 27 35 86 71 140 85 44
12 132 1 184 -22z m-4352 6 c59 -25 96 -59 127 -115 31 -56 44 -148 28 -190
-9 -24 -10 -23 -32 28 -45 103 -165 175 -259 153 -59 -13 -86 -34 -111 -86
-48 -98 -3 -232 99 -295 38 -24 43 -30 27 -36 -29 -11 -122 15 -173 49 -135
91 -150 277 -33 410 59 67 126 97 217 97 44 0 89 -6 110 -15z m238 -57 c13
-39 7 -97 -16 -145 l-22 -48 -7 30 c-11 45 -11 130 0 159 12 32 36 34 45 4z
m3696 -8 c9 -33 9 -129 -1 -160 -7 -24 -8 -23 -29 22 -22 48 -29 107 -17 146
10 30 38 25 47 -8z m-2018 -31 c66 -49 113 -112 126 -168 l9 -42 -31 26 c-35
29 -117 70 -159 80 -23 6 -30 2 -48 -27 -11 -18 -28 -59 -37 -91 l-17 -59 -19
39 c-26 51 -54 81 -100 104 -34 18 -39 18 -60 4 -34 -22 -68 -90 -76 -149 l-7
-51 -16 31 c-19 34 -102 124 -116 124 -20 0 -120 -102 -137 -139 -24 -55 -39
-39 -33 37 4 62 38 143 82 197 l25 30 58 -58 59 -57 27 55 c25 52 103 124 134
125 33 0 127 -46 158 -77 19 -19 38 -32 43 -29 5 3 21 35 36 71 16 36 32 65
36 65 4 0 32 -18 63 -41z m393 -24 c15 -36 31 -68 36 -71 5 -3 29 12 52 34 37
34 120 72 157 72 23 0 108 -85 129 -130 l24 -51 56 56 c30 30 60 55 66 55 6 0
30 -34 54 -75 36 -64 44 -87 48 -145 2 -39 1 -70 -4 -69 -5 0 -22 21 -39 46
-16 26 -51 64 -77 86 l-47 40 -35 -27 c-19 -14 -49 -49 -68 -77 l-33 -52 -6
50 c-4 27 -13 62 -22 78 -18 35 -62 85 -75 85 -28 0 -109 -69 -133 -112 l-25
-48 -22 73 c-11 40 -30 81 -41 91 -17 16 -24 16 -58 6 -57 -19 -105 -45 -137
-75 -15 -14 -30 -24 -32 -22 -10 10 25 92 56 131 33 41 123 116 140 116 4 0
20 -29 36 -65z m-1389 -36 c96 -46 181 -121 201 -177 l11 -32 -37 25 c-20 14
-73 37 -117 51 -75 24 -80 24 -92 8 -7 -10 -13 -46 -13 -81 0 -35 -2 -63 -5
-63 -4 0 -20 8 -38 17 -22 11 -55 17 -105 17 -62 -1 -76 -4 -97 -24 -35 -33
-75 -117 -75 -158 0 -24 -4 -32 -12 -29 -87 38 -134 55 -140 49 -15 -15 -38
-130 -38 -191 0 -62 -1 -64 -19 -47 -10 9 -28 50 -41 92 -19 66 -21 87 -15
179 4 58 12 105 17 105 17 0 88 -41 122 -70 38 -34 38 -35 51 44 8 46 49 143
72 168 23 26 106 23 200 -7 42 -13 79 -23 80 -21 2 2 -1 15 -7 30 -13 36 -13
156 1 156 5 0 49 -19 96 -41z m2393 -22 c0 -34 -4 -77 -9 -95 -5 -17 -9 -32
-7 -32 1 0 26 9 56 19 77 27 195 38 217 20 22 -18 70 -125 78 -174 14 -80 13
-79 53 -43 39 34 118 75 128 65 3 -3 6 -65 7 -139 2 -127 1 -135 -25 -185 -15
-28 -32 -54 -36 -57 -5 -3 -12 34 -15 82 -3 48 -12 105 -20 127 -17 46 -25 47
-103 9 -28 -13 -54 -24 -57 -24 -4 0 -7 15 -7 34 0 35 -38 116 -71 152 -14 15
-37 23 -80 27 -55 6 -83 1 -151 -28 -16 -6 -18 0 -18 55 0 79 -12 102 -48 94
-46 -11 -156 -56 -184 -76 -23 -16 -28 -17 -28 -5 0 21 72 110 111 138 39 28
178 98 197 98 8 1 12 -18 12 -62z m-3325 14 c84 -38 135 -133 135 -250 0 -31
7 -81 15 -111 8 -30 13 -55 11 -57 -1 -2 -29 8 -62 21 -32 13 -84 29 -114 36
-128 29 -207 106 -216 211 -12 129 108 206 231 150z m4305 1 c93 -46 105 -176
24 -270 -45 -53 -74 -68 -186 -98 -49 -13 -102 -31 -119 -40 -17 -8 -33 -14
-35 -12 -2 3 1 20 6 39 6 19 15 78 20 131 5 54 17 114 25 135 45 107 171 162
265 115z m-2296 -133 c24 -21 46 -47 49 -58 4 -16 -3 -19 -48 -24 -81 -8 -132
-27 -177 -66 l-41 -35 5 75 c3 51 13 93 30 131 l26 56 56 -20 c31 -12 76 -38
100 -59z m309 34 c25 -58 37 -113 37 -166 l0 -49 -40 35 c-44 37 -86 53 -172
63 l-57 7 13 26 c20 37 57 70 113 97 69 34 87 31 106 -13z m-653 -9 c42 -28
84 -99 96 -163 7 -32 6 -34 -17 -27 -13 4 -43 10 -67 13 -37 5 -49 1 -87 -26
-24 -17 -46 -31 -49 -31 -10 0 -7 123 4 162 11 38 54 98 71 98 5 0 27 -12 49
-26z m914 -21 c26 -37 30 -53 34 -128 2 -47 1 -85 -3 -85 -5 0 -23 11 -41 25
-51 39 -73 44 -127 28 -27 -8 -52 -12 -55 -9 -3 4 2 32 12 64 14 43 30 69 68
105 27 27 57 47 66 45 9 -2 29 -22 46 -45z m-1549 -34 c60 -22 119 -69 141
-111 15 -29 15 -31 -2 -23 -55 22 -113 35 -160 35 -67 0 -76 -13 -75 -122 l0
-80 -38 35 c-40 36 -133 66 -165 54 -23 -9 -39 -84 -33 -160 l6 -68 -32 27
c-36 30 -103 63 -129 64 -23 0 -75 -94 -91 -164 l-13 -56 -18 30 c-24 42 -31
125 -17 202 19 97 19 97 92 60 34 -18 67 -32 74 -32 7 0 15 22 19 57 7 59 52
146 82 157 37 14 136 6 176 -15 49 -25 58 -17 58 51 0 25 3 55 6 68 6 20 11
22 38 16 17 -3 54 -15 81 -25z m2209 9 c3 -13 6 -43 6 -68 0 -68 8 -74 61 -51
29 14 66 21 107 21 56 0 66 -3 88 -27 39 -41 55 -79 61 -139 4 -32 11 -54 18
-54 6 0 40 14 74 31 73 37 74 37 92 -59 14 -77 7 -160 -17 -201 l-18 -30 -15
62 c-20 76 -65 157 -89 157 -26 -1 -93 -34 -127 -62 l-30 -26 0 87 c0 102 -15
141 -53 141 -45 0 -102 -23 -142 -57 l-40 -35 0 84 c0 46 -4 89 -9 97 -20 31
-136 23 -229 -16 -20 -8 10 46 40 73 38 35 160 91 204 93 7 1 14 -9 18 -21z
m-1815 -34 c40 -42 91 -133 91 -162 0 -9 -8 -8 -32 5 -41 21 -146 21 -205 0
-43 -15 -43 -15 -43 10 0 38 39 104 88 151 24 23 48 42 52 42 4 0 26 -20 49
-46z m1410 -4 c53 -51 81 -100 81 -144 l0 -24 -47 14 c-69 22 -161 22 -200 1
-41 -22 -42 -12 -9 60 23 48 99 143 116 143 4 0 30 -22 59 -50z m-595 -71 c29
-10 62 -29 74 -42 l22 -23 -31 -18 c-30 -18 -31 -18 -45 3 -19 27 -44 27 -78
0 -20 -16 -26 -17 -26 -6 0 20 -22 27 -80 27 -58 0 -80 -7 -80 -27 0 -11 -6
-10 -26 6 -34 27 -59 27 -78 0 -14 -21 -16 -21 -40 -5 -31 19 -32 28 -8 48 75
67 270 85 396 37z m-1111 -43 c38 -14 77 -42 77 -56 0 -4 -19 -15 -42 -26 -65
-29 -115 -70 -140 -114 -13 -22 -26 -40 -29 -40 -22 0 -49 192 -33 234 8 20
112 21 167 2z m2061 -2 c16 -42 -11 -234 -33 -234 -3 0 -16 18 -29 40 -25 44
-75 85 -140 114 -48 22 -50 26 -23 50 48 43 212 65 225 30z m-3534 -22 l45
-20 -47 -1 c-85 -2 -88 -64 -5 -101 l42 -19 -35 -2 c-80 -5 -115 5 -157 44
-29 26 -29 66 -1 102 19 24 26 27 67 23 25 -3 66 -14 91 -26z m2038 21 c25 -6
25 -6 6 -83 l-6 -25 21 24 c12 13 21 34 21 47 0 28 1 28 34 13 l24 -11 -34
-45 c-47 -61 -32 -69 20 -12 36 40 45 45 59 34 15 -10 12 -16 -23 -50 -22 -22
-40 -46 -40 -54 0 -9 20 5 50 34 35 34 53 46 60 39 8 -8 -1 -22 -30 -47 -22
-21 -40 -39 -40 -42 0 -15 34 -1 65 26 52 46 56 26 5 -26 -33 -34 -40 -45 -26
-45 10 0 34 16 53 35 40 40 39 40 46 21 3 -8 -12 -26 -39 -46 -58 -41 -46 -60
12 -19 25 17 48 29 51 26 3 -3 -7 -22 -22 -42 -35 -45 -25 -58 15 -20 40 39
47 27 10 -17 -18 -22 -26 -39 -20 -43 6 -3 22 8 36 25 35 40 41 32 14 -19 -23
-45 -10 -56 17 -15 l17 27 6 -24 c3 -13 3 -62 0 -109 l-5 -85 -26 43 c-15 25
-69 78 -125 124 -176 141 -193 148 -250 86 -65 -71 -156 -226 -175 -297 l-16
-65 -13 40 c-7 21 -24 61 -36 89 -13 27 -24 58 -24 68 0 17 2 17 26 -2 41 -33
51 -25 16 12 -42 43 -41 54 2 27 26 -15 36 -18 42 -8 4 6 3 13 -2 15 -28 9
-77 47 -67 50 7 3 28 -5 47 -16 21 -13 37 -18 41 -12 3 6 -13 20 -35 33 -66
38 -50 46 44 22 46 -11 28 13 -20 26 -42 12 -65 33 -51 46 3 3 23 -4 46 -15
22 -12 47 -21 56 -21 31 0 13 17 -41 39 -64 27 -61 50 3 25 24 -10 49 -13 60
-9 15 6 15 8 3 12 -35 11 -90 37 -90 43 0 18 17 17 61 -5 51 -26 69 -31 69
-17 0 5 -22 19 -50 32 -47 22 -62 42 -40 55 5 3 32 -6 59 -20 55 -27 61 -29
61 -17 0 5 -19 19 -42 32 -24 13 -45 25 -47 27 -2 1 4 12 14 23 18 20 19 20
53 -17 25 -28 36 -34 40 -23 3 7 0 16 -7 18 -6 2 -18 17 -26 33 -15 27 -14 29
12 43 32 17 39 18 71 9z m833 -8 c28 -15 29 -16 14 -44 -8 -16 -20 -31 -26
-33 -7 -2 -10 -11 -7 -18 4 -11 15 -5 40 22 35 36 36 37 53 17 10 -10 16 -21
14 -22 -2 -2 -23 -14 -46 -27 -24 -13 -43 -27 -43 -32 0 -12 6 -10 61 17 27
14 54 23 59 20 22 -13 7 -33 -40 -55 -27 -13 -50 -27 -50 -32 0 -14 18 -9 70
17 32 16 51 21 55 14 4 -6 5 -12 4 -13 -13 -11 -71 -36 -84 -36 -8 0 -15 -4
-15 -10 0 -15 35 -12 77 5 22 9 40 12 46 6 5 -5 -14 -18 -47 -32 -54 -22 -72
-39 -41 -39 9 0 34 9 56 21 23 11 43 18 46 15 14 -14 -10 -34 -51 -45 -45 -11
-68 -38 -23 -28 12 3 37 8 55 12 44 10 40 -5 -8 -33 -22 -13 -38 -27 -35 -33
4 -5 23 0 46 13 53 29 61 16 10 -17 -23 -14 -39 -30 -36 -36 4 -6 20 -1 41 11
43 27 44 16 2 -27 -35 -37 -25 -45 16 -12 l26 20 0 -20 c0 -11 -13 -46 -29
-78 -16 -32 -33 -71 -37 -87 -6 -26 -8 -24 -23 35 -19 72 -106 219 -174 294
-37 41 -45 46 -71 39 -16 -4 -81 -46 -145 -94 -87 -64 -126 -101 -151 -141
l-35 -54 -6 90 c-3 50 -3 98 1 109 6 16 8 16 23 -8 27 -41 40 -31 17 14 -28
55 -25 59 13 22 44 -43 55 -29 16 19 -35 45 -28 51 13 12 38 -36 47 -22 13 22
-15 20 -25 39 -22 42 3 3 26 -9 51 -26 58 -41 70 -22 12 19 -27 20 -42 38 -39
46 7 20 10 18 47 -21 19 -19 42 -35 52 -35 14 0 8 11 -26 45 -52 53 -47 71 7
26 34 -28 63 -40 63 -26 0 3 -18 21 -40 42 -29 26 -38 39 -30 47 8 8 24 -3 57
-39 30 -33 48 -45 51 -37 2 8 -14 33 -37 56 -36 37 -39 43 -24 52 15 9 25 3
59 -35 52 -57 67 -49 20 12 l-34 45 23 10 c25 12 35 7 35 -17 0 -22 29 -63 40
-56 5 3 2 18 -6 33 -25 49 -17 66 34 71 7 0 26 -6 43 -14z m2128 -11 c57 -73
-9 -145 -131 -143 l-63 0 42 19 c83 37 80 100 -5 100 -40 1 -44 2 -27 12 30
18 97 37 132 37 23 1 37 -6 52 -25z m-2522 -40 c22 -22 25 -32 21 -74 -5 -46
-59 -150 -78 -150 -5 0 -25 26 -44 57 -45 72 -49 131 -11 168 33 33 78 33 112
-1z m-660 1 l36 -15 -22 -24 c-20 -21 -27 -23 -47 -14 -18 9 -29 7 -49 -6 -14
-9 -25 -23 -25 -31 0 -8 -4 -15 -10 -15 -5 0 -10 5 -10 11 0 15 -66 7 -106
-12 -16 -8 -33 -24 -39 -36 -9 -17 -15 -19 -29 -11 -27 15 -65 1 -76 -28 -7
-18 -15 -24 -26 -20 -9 3 -22 6 -30 6 -26 0 -15 30 28 76 48 52 73 66 183 105
91 32 167 37 222 14z m487 -7 c3 -13 6 -32 6 -42 0 -17 -4 -16 -30 9 -36 35
-38 55 -6 55 16 0 26 -7 30 -22z m286 9 c0 -7 -13 -26 -30 -42 -26 -25 -30
-26 -30 -9 0 43 12 64 36 64 13 0 24 -6 24 -13z m615 -2 c33 -9 88 -29 121
-45 88 -43 181 -150 130 -150 -8 0 -21 -3 -30 -6 -11 -4 -19 2 -26 20 -11 29
-49 43 -76 28 -14 -8 -20 -6 -29 11 -6 12 -26 30 -45 39 -38 19 -100 24 -100
8 0 -5 -4 -10 -10 -10 -5 0 -10 7 -10 15 0 8 -11 22 -25 31 -20 13 -31 15 -49
6 -20 -9 -27 -7 -46 14 l-23 24 34 14 c44 20 110 20 184 1z m-3095 -24 c53
-17 54 -18 31 -30 -30 -17 -129 -18 -159 -2 -12 6 -22 21 -22 31 0 17 7 20 48
19 26 0 72 -8 102 -18z m4768 -3 c5 -24 -34 -41 -93 -41 -47 1 -113 18 -103
28 2 2 29 11 59 19 70 20 133 17 137 -6z m-3686 -29 c35 -18 118 -109 118
-129 0 -5 -28 -10 -62 -12 l-62 -3 -37 -52 -37 -53 -22 53 c-29 67 -36 126
-20 182 13 45 13 45 49 39 20 -4 53 -15 73 -25z m2578 -20 c15 -62 10 -108
-20 -177 l-22 -52 -37 53 -37 52 -62 3 c-34 2 -62 7 -62 12 0 18 82 110 112
126 91 47 114 44 128 -17z m-3315 10 c38 -11 102 -65 125 -108 9 -18 8 -18
-34 -6 -24 7 -69 16 -100 19 -31 3 -81 9 -112 12 l-57 6 7 -37 c4 -21 18 -61
31 -90 l23 -53 -52 -6 c-28 -4 -83 -16 -123 -28 l-71 -21 -12 -84 c-7 -46 -9
-103 -6 -127 l7 -43 -63 13 c-91 19 -118 18 -118 -5 0 -28 48 -187 70 -234 11
-22 20 -42 20 -44 0 -7 -87 42 -107 60 -12 11 -36 53 -53 93 -46 110 -40 212
25 416 l37 118 114 60 c185 99 315 125 449 89z m4200 -11 c44 -13 128 -49 186
-80 l106 -57 37 -114 c37 -113 55 -209 56 -300 0 -57 -49 -184 -83 -214 -18
-16 -107 -65 -107 -59 0 1 9 21 20 43 22 47 70 206 70 234 0 13 -7 19 -24 19
-28 0 -114 -16 -139 -26 -17 -6 -18 -3 -12 39 4 26 2 84 -5 131 l-12 84 -77
21 c-42 11 -98 24 -123 27 -41 6 -46 9 -38 24 21 40 57 151 50 155 -13 8 -214
-14 -262 -29 l-48 -14 33 45 c41 58 60 71 138 88 77 17 128 14 234 -17z
m-4929 -24 c110 -66 139 -107 121 -177 l-10 -40 -19 51 c-45 121 -167 152
-217 54 -13 -25 -7 -70 15 -114 17 -33 18 -33 -32 -12 -54 22 -164 15 -222
-15 -57 -29 -129 -96 -152 -141 -30 -60 -43 -152 -29 -218 14 -73 31 -104 79
-152 l38 -38 -45 -12 c-95 -23 -132 -103 -75 -160 37 -36 87 -50 143 -39 63
12 65 11 40 -15 -53 -56 -92 -55 -212 5 -78 39 -99 68 -99 136 0 48 4 58 30
83 l31 29 -21 61 c-13 38 -23 100 -26 159 -4 89 -3 101 23 163 15 36 49 93 75
126 39 50 61 67 130 101 46 23 110 47 143 53 64 13 75 21 75 54 0 20 38 62 75
82 36 20 80 13 141 -24z m2044 -30 c-13 -40 -24 -35 -35 14 -6 28 -3 33 17 41
29 11 34 -5 18 -55z m3507 41 c40 -24 47 -35 55 -89 2 -15 17 -22 66 -32 180
-37 304 -139 359 -296 23 -65 25 -83 19 -160 -3 -49 -15 -115 -26 -149 l-21
-60 31 -29 c26 -25 30 -35 30 -83 0 -68 -21 -97 -100 -137 -106 -54 -167 -55
-212 -4 -16 18 -14 19 69 19 83 0 85 1 114 33 64 71 24 145 -90 168 l-35 6 31
27 c46 40 71 83 89 152 29 112 -4 225 -88 306 -86 84 -221 117 -315 78 -19 -8
-37 -15 -38 -15 -2 0 6 23 16 51 25 66 18 104 -24 130 -52 31 -94 25 -136 -19
-20 -21 -43 -58 -51 -83 l-13 -44 -12 40 c-21 70 14 121 125 184 67 38 100 39
157 6z m-2173 7 c7 -12 -5 -82 -14 -82 -9 0 -30 55 -30 76 0 15 36 19 44 6z
m-1406 -55 c12 -13 25 -37 28 -55 8 -38 -14 -162 -29 -162 -17 0 -98 71 -118
104 -26 43 -24 82 6 111 32 33 83 34 113 2z m1557 -2 c46 -46 25 -111 -57
-178 -25 -21 -49 -37 -55 -37 -14 0 -37 132 -29 166 18 72 93 98 141 49z
m-2285 -64 c30 -18 120 -102 120 -113 0 -4 -22 -8 -50 -8 -56 0 -83 -10 -158
-59 -29 -19 -55 -31 -59 -27 -4 4 -7 30 -6 59 1 54 21 112 55 159 20 29 32 28
98 -11z m3022 -34 c23 -46 31 -76 31 -115 0 -29 -3 -55 -6 -59 -4 -3 -30 10
-59 29 -66 43 -108 58 -164 58 -24 0 -44 4 -44 9 0 30 179 159 202 145 5 -3
22 -33 40 -67z m-4237 29 c32 -34 60 -108 53 -142 -2 -15 -8 -11 -25 18 -25
42 -64 58 -89 37 -12 -10 -15 -25 -11 -57 5 -50 -1 -46 -37 22 -25 48 -33 100
-18 122 12 17 45 33 71 34 14 0 36 -13 56 -34z m714 23 c81 -13 151 -42 185
-77 l25 -27 -118 0 c-66 0 -123 -4 -127 -8 -7 -7 4 -72 21 -132 6 -19 2 -21
-52 -21 -72 0 -151 -35 -171 -78 -19 -39 -27 -138 -14 -174 l10 -30 -77 5
c-43 3 -80 2 -83 -3 -8 -14 10 -147 27 -194 8 -24 13 -45 10 -48 -12 -12 -74
52 -102 105 -26 49 -41 90 -79 224 -4 14 2 16 43 11 26 -2 70 -13 96 -23 26
-11 50 -19 52 -19 2 0 -1 15 -6 32 -13 47 -11 189 4 218 20 40 78 62 178 68
90 5 107 14 74 42 -13 11 -55 109 -55 130 0 13 79 13 159 -1z m1056 -20 c9
-17 15 -33 13 -35 -2 -2 -20 5 -39 15 -43 23 -51 51 -15 51 18 0 30 -9 41 -31z
m1853 15 c-3 -16 -67 -58 -76 -50 -2 2 4 18 13 35 11 22 23 31 41 31 18 0 25
-5 22 -16z m1152 6 c0 -21 -42 -119 -55 -130 -33 -27 -16 -37 68 -43 87 -5
141 -18 172 -41 16 -11 20 -30 23 -108 2 -51 0 -110 -6 -131 -6 -20 -9 -37 -8
-37 1 0 26 8 56 19 30 10 74 21 98 24 37 4 42 3 38 -11 -39 -137 -53 -176 -78
-224 -27 -51 -92 -117 -104 -106 -2 3 3 25 12 49 8 24 18 79 21 123 l6 78 -74
-3 -74 -4 0 85 c0 56 -5 95 -15 114 -22 43 -101 80 -172 80 -32 1 -58 4 -58 7
0 4 7 26 15 49 8 23 15 55 15 71 0 38 -24 43 -151 36 -56 -3 -99 -1 -99 4 0
11 70 56 118 76 60 25 252 43 252 23z m664 -11 c36 -28 35 -78 -4 -146 -17
-29 -32 -53 -34 -53 -2 0 -1 20 1 44 5 38 2 46 -17 56 -31 16 -64 0 -81 -39
-15 -33 -29 -41 -29 -15 0 43 26 109 55 140 38 40 70 44 109 13z m-3071 -46
c31 -20 55 -38 54 -40 -2 -1 -21 4 -42 12 -70 25 -103 18 -157 -33 -31 -29
-37 -19 -11 18 29 45 66 80 83 80 10 0 42 -17 73 -37z m709 10 c32 -35 63 -83
53 -83 -4 0 -20 11 -37 25 -42 35 -73 40 -131 22 -28 -9 -52 -15 -54 -14 -6 6
111 77 127 77 9 0 28 -12 42 -27z m-1562 -28 c0 -25 4 -45 9 -45 14 0 24 38
17 66 -6 21 -3 24 24 24 35 0 35 0 15 -47 -8 -19 -15 -42 -15 -50 0 -13 3 -13
15 -3 8 7 15 17 15 22 0 5 6 24 14 43 11 26 19 32 34 28 20 -5 20 -6 -4 -59
-27 -62 -28 -64 -13 -64 5 0 21 25 34 55 23 52 37 65 49 47 2 -4 -9 -29 -25
-55 -22 -36 -26 -47 -14 -47 9 0 24 14 33 31 27 49 40 64 47 57 3 -3 -6 -29
-20 -58 -14 -29 -24 -54 -21 -57 10 -10 29 11 47 53 14 30 24 41 35 37 15 -6
13 -10 -33 -78 -7 -11 -13 -23 -13 -27 0 -19 19 -4 50 39 38 52 50 43 26 -18
-20 -48 -20 -50 -1 -43 8 3 19 21 25 40 6 19 16 34 21 34 12 0 12 0 -6 -50 -8
-24 -13 -45 -10 -48 7 -7 9 -4 34 43 l21 40 -6 -46 c-7 -57 12 -77 22 -24 9
49 21 34 49 -61 12 -44 26 -88 31 -99 5 -14 -4 -9 -32 16 -61 54 -294 134
-373 127 -34 -3 -37 -7 -58 -58 -35 -89 -66 -256 -60 -328 l5 -62 -62 66 c-81
89 -87 99 -50 90 16 -4 36 -16 44 -27 9 -11 18 -17 22 -14 8 8 -31 48 -67 69
l-30 17 43 -5 c56 -6 51 16 -6 27 -57 11 -54 28 3 20 56 -7 63 13 8 22 -55 9
-65 14 -58 25 3 5 28 10 56 10 32 0 49 4 49 13 0 8 -16 11 -55 9 -44 -3 -55
-1 -55 12 0 12 11 14 55 13 72 -3 72 17 0 21 -40 2 -55 7 -55 18 0 10 7 13 25
8 32 -8 97 4 90 17 -4 5 -31 9 -60 9 -44 0 -53 3 -49 15 5 11 18 13 64 8 35
-3 60 -2 64 5 4 6 -17 13 -54 17 -51 6 -60 10 -60 27 0 18 5 19 65 13 81 -9
90 10 10 20 -59 7 -62 10 -40 39 13 18 16 18 39 2 14 -9 36 -16 48 -15 22 0
22 1 4 12 -62 40 -67 47 -50 72 16 24 32 32 72 34 20 1 22 -4 22 -44z m2211
-3 c13 -41 27 -62 40 -62 5 0 0 23 -11 50 -11 28 -20 53 -20 55 0 3 14 5 31 5
26 0 29 -3 24 -21 -8 -25 2 -69 15 -69 6 0 10 21 10 46 l0 47 35 -6 c20 -3 45
-16 55 -29 19 -23 19 -23 -4 -43 -13 -11 -32 -25 -42 -32 -18 -11 -18 -12 4
-12 12 -1 34 7 49 16 24 16 26 16 39 -2 21 -29 18 -32 -41 -40 -81 -10 -71
-29 10 -21 60 6 65 5 65 -12 0 -16 -10 -21 -60 -26 -39 -5 -58 -11 -54 -18 4
-7 28 -8 64 -5 46 5 59 3 64 -8 4 -12 -5 -15 -49 -15 -29 0 -56 -4 -60 -9 -7
-13 58 -25 90 -17 18 5 25 2 25 -9 0 -11 -12 -15 -47 -15 -60 0 -90 -15 -50
-25 15 -4 43 -4 62 -1 28 6 35 4 35 -9 0 -12 -12 -15 -55 -15 -30 0 -55 -4
-55 -10 0 -5 25 -10 55 -10 31 0 55 -4 55 -10 0 -12 -10 -16 -62 -25 -56 -9
-49 -29 7 -22 57 8 60 -9 3 -20 -60 -12 -61 -32 -1 -27 l48 4 -35 -16 c-38
-17 -81 -59 -72 -69 4 -3 13 3 22 14 8 11 28 23 44 27 37 9 31 -1 -50 -90
l-61 -68 4 69 c5 79 -33 277 -67 343 -19 37 -23 40 -63 40 -72 0 -284 -74
-344 -120 -29 -22 -53 -38 -53 -36 0 2 7 20 15 40 8 19 20 58 26 85 5 27 16
57 23 67 12 16 14 14 20 -19 11 -58 30 -46 22 13 -4 28 -4 50 -1 50 3 0 12
-18 21 -40 9 -22 20 -40 25 -40 11 0 12 -4 -6 53 -16 54 -3 65 16 12 21 -58
40 -53 23 7 -9 27 -13 52 -11 55 3 2 20 -16 38 -41 30 -43 49 -57 49 -38 0 4
-6 16 -13 27 -46 68 -48 72 -33 78 11 4 21 -7 35 -37 18 -42 37 -63 47 -53 2
2 -7 27 -21 55 -28 55 -29 62 -15 62 5 0 19 -18 30 -39 11 -22 25 -43 31 -46
22 -14 20 5 -5 48 -30 51 -31 57 -10 57 9 0 25 -22 39 -55 14 -30 29 -55 35
-55 14 0 13 2 -14 64 -22 49 -23 55 -8 59 25 5 29 1 43 -41z m-1295 -53 c90
-37 150 -89 180 -153 30 -64 31 -102 4 -111 -10 -3 -39 -26 -64 -49 l-45 -44
-11 50 c-14 55 -59 107 -124 140 l-40 20 -24 -28 c-13 -16 -35 -51 -49 -78
-21 -42 -24 -57 -19 -99 6 -45 5 -49 -11 -42 -10 5 -46 18 -80 29 -58 19 -64
24 -69 54 -9 46 2 115 25 160 19 37 123 144 171 176 30 20 57 15 156 -25z
m615 31 c17 0 161 -144 179 -180 25 -48 34 -101 26 -153 -7 -41 -8 -42 -69
-63 -34 -11 -70 -24 -80 -29 -16 -7 -17 -3 -11 42 5 42 2 57 -19 99 -14 27
-36 62 -49 78 l-24 28 -40 -20 c-66 -34 -110 -84 -124 -142 l-12 -52 -28 34
c-15 19 -44 42 -64 53 -42 23 -45 42 -17 107 38 88 100 138 229 184 37 13 73
21 80 19 8 -3 18 -5 23 -5z m-2110 -47 c24 -11 50 -27 58 -36 12 -16 9 -17
-40 -17 -30 0 -82 -10 -118 -22 l-63 -22 5 -42 c2 -23 16 -66 29 -96 l26 -55
-52 19 c-38 15 -65 19 -105 15 -78 -8 -88 -22 -74 -102 6 -35 21 -78 33 -95
12 -17 21 -33 19 -35 -2 -1 -37 4 -76 13 -101 21 -119 12 -128 -64 -4 -31 -5
-80 -2 -110 3 -30 2 -54 -3 -54 -16 0 -70 74 -85 118 -8 25 -18 74 -21 109
l-7 65 85 -7 85 -7 -15 58 c-12 49 -13 69 -3 117 12 55 14 58 64 84 42 21 65
26 120 25 37 0 67 2 67 6 0 4 -9 36 -20 70 -11 35 -20 68 -20 72 0 26 178 21
241 -7z m3695 15 c3 -4 -3 -38 -15 -77 -11 -38 -21 -72 -21 -75 0 -3 28 -5 63
-4 48 2 74 -4 118 -24 l56 -25 13 -63 c10 -49 11 -72 2 -107 -19 -68 -21 -66
70 -58 l81 7 -6 -67 c-4 -39 -17 -91 -32 -123 -25 -54 -60 -102 -75 -102 -4 0
-5 33 -3 73 9 155 -15 183 -134 155 -38 -9 -70 -15 -72 -13 -2 2 7 18 19 35
30 43 49 155 30 175 -26 26 -118 30 -176 7 l-52 -19 26 55 c13 30 27 74 29 97
l5 41 -66 22 c-37 12 -89 22 -117 22 -46 0 -50 2 -38 16 18 22 64 44 112 54
47 10 172 8 183 -2z m749 -37 c-8 -45 -55 -151 -66 -151 -5 0 -9 28 -9 61 0
75 30 140 62 131 17 -4 19 -10 13 -41z m-5379 18 c14 -15 20 -40 22 -95 3 -44
0 -74 -6 -74 -12 0 -59 104 -67 153 -6 32 -5 37 12 37 11 0 28 -9 39 -21z
m-151 -37 c75 -38 129 -112 141 -193 l7 -44 -40 42 c-52 56 -112 83 -186 83
-69 0 -112 -17 -152 -59 -28 -30 -30 -38 -30 -104 0 -62 4 -78 28 -115 33 -50
106 -100 160 -109 77 -12 43 -43 -51 -46 -122 -3 -218 54 -262 154 -29 68 -25
172 8 239 37 76 115 146 192 171 41 14 142 3 185 -19z m1485 18 c0 -5 -5 -20
-12 -34 -8 -20 -16 -24 -33 -20 -16 4 -28 -2 -44 -22 -12 -15 -19 -34 -16 -41
3 -10 -1 -13 -15 -8 -10 3 -32 -1 -48 -9 -38 -20 -85 -75 -78 -92 4 -10 -3
-14 -21 -14 -33 0 -63 -26 -63 -55 0 -18 -7 -24 -30 -27 -28 -4 -30 -2 -30 26
0 51 39 113 113 181 87 79 172 125 234 125 23 0 43 -4 43 -10z m2807 -20 c118
-59 243 -200 243 -276 0 -28 -2 -30 -30 -26 -23 3 -30 9 -30 27 0 31 -34 59
-65 53 -22 -5 -25 -2 -19 14 4 15 -6 31 -41 65 -40 38 -52 44 -76 39 -20 -4
-27 -2 -23 8 3 7 -5 25 -17 40 -16 20 -27 26 -44 22 -19 -5 -25 0 -34 26 -6
17 -11 33 -11 34 0 2 20 4 43 4 29 0 65 -10 104 -30z m1580 -3 c126 -64 192
-225 152 -372 -15 -55 -102 -140 -161 -156 -54 -15 -144 -15 -181 0 -34 13
-27 31 12 31 40 0 131 59 166 108 27 39 30 52 30 117 0 68 -2 76 -30 106 -85
90 -242 79 -337 -23 l-38 -41 0 29 c1 63 70 168 134 201 77 40 173 40 253 0z
m-4701 -42 l36 -15 -45 -44 c-51 -49 -81 -102 -91 -160 l-7 -38 -25 23 c-28
26 -79 128 -89 176 -6 32 -6 32 57 52 77 24 117 26 164 6z m3449 -6 l66 -20
-6 -32 c-10 -48 -61 -150 -89 -176 l-25 -23 -7 38 c-10 57 -53 131 -98 170
l-39 34 34 14 c47 21 85 20 164 -5z m-3171 -34 c4 -19 3 -43 -3 -52 -8 -15
-12 -12 -27 19 -14 31 -15 40 -4 53 19 23 27 18 34 -20z m2776 2 c0 -7 -9 -25
-20 -42 l-20 -30 0 53 c0 50 1 52 20 42 11 -6 20 -16 20 -23z m-2365 -22 c30
-13 29 -13 -26 -14 -64 -1 -98 -22 -126 -74 -9 -18 -18 -26 -20 -20 -6 16 14
80 34 112 13 21 19 22 61 16 26 -4 60 -13 77 -20z m2057 -15 c10 -20 20 -51
23 -70 5 -31 4 -33 -7 -15 -7 11 -27 34 -44 52 -29 30 -38 33 -90 33 -66 0
-65 7 3 26 73 20 95 15 115 -26z m-3898 -35 c61 -29 87 -62 140 -175 19 -41
44 -89 56 -106 l20 -32 -143 -7 c-173 -8 -212 0 -266 55 -54 56 -75 108 -66
166 16 108 140 155 259 99z m1390 -3 c26 -24 43 -67 51 -136 7 -52 6 -58 -8
-53 -9 3 -35 11 -59 17 -89 24 -142 92 -116 148 25 51 88 63 132 24z m1160
-14 c41 -37 49 -49 53 -89 7 -61 -13 -123 -36 -114 -40 17 -54 16 -82 -4 -37
-28 -48 -20 -79 50 -25 60 -21 95 22 157 19 28 36 42 51 42 13 0 44 -19 71
-42z m621 -12 c39 -64 39 -115 0 -174 -15 -23 -31 -42 -35 -42 -4 0 -15 9 -26
21 -18 20 -46 22 -85 5 -13 -5 -19 1 -28 25 -26 75 -8 135 56 188 53 44 79 39
118 -23z m1149 24 c14 -13 20 -32 19 -57 -1 -30 -8 -44 -37 -69 -32 -27 -143
-70 -154 -60 -10 10 19 143 36 166 39 52 95 60 136 20z m1438 21 c13 -5 37
-23 55 -39 86 -80 31 -232 -103 -288 -30 -13 -63 -14 -185 -8 l-149 7 20 31
c12 17 39 69 61 116 45 96 86 144 144 170 44 20 120 25 157 11z m-3747 -25
c50 -21 98 -58 130 -100 l26 -34 -41 -63 c-22 -34 -40 -68 -40 -76 0 -24 -15
-14 -35 25 -23 43 -86 78 -157 88 l-48 7 -16 -39 c-9 -21 -18 -61 -21 -90 -5
-44 -2 -60 20 -96 l25 -43 -91 1 -92 2 -17 39 c-32 74 -33 139 -4 218 32 84
82 164 110 176 32 14 206 4 251 -15z m1818 15 c30 -12 86 -102 117 -189 26
-71 24 -128 -7 -201 l-19 -43 -90 -2 -91 -1 24 44 c27 52 29 81 6 162 l-17 61
-52 -5 c-28 -3 -70 -15 -92 -26 -39 -20 -82 -67 -82 -90 0 -6 -4 -11 -10 -11
-5 0 -10 6 -10 14 0 7 -18 41 -41 75 -45 68 -46 62 15 129 37 40 92 70 149 82
59 11 171 12 200 1z m-1049 -102 c3 -17 6 -49 6 -70 0 -22 5 -39 10 -39 6 0
10 21 10 48 0 52 9 92 19 92 4 0 15 -6 25 -13 16 -12 15 -16 -11 -74 -15 -34
-34 -62 -40 -63 -7 0 -27 28 -44 62 -30 58 -30 62 -13 75 26 19 31 17 38 -18z
m2056 -38 c0 -56 -25 -112 -75 -169 -42 -49 -48 -46 -60 25 -7 47 -34 75 -91
93 -19 7 -33 17 -31 23 5 17 107 70 145 76 20 4 53 5 74 3 l38 -4 0 -47z
m-3872 10 c28 -18 52 -37 52 -41 0 -4 -25 -18 -55 -30 -47 -19 -56 -27 -65
-59 -5 -20 -10 -44 -10 -53 0 -53 -63 -8 -105 76 -16 33 -25 67 -25 99 l0 49
78 -3 c68 -4 84 -8 130 -38z m267 9 c26 -27 27 -30 8 -30 -28 0 -83 20 -83 30
0 9 29 29 41 30 3 0 18 -13 34 -30z m3205 0 c0 -5 -17 -14 -37 -19 -63 -18
-71 -13 -35 19 27 25 36 28 52 20 11 -6 20 -15 20 -20z m-1704 -43 c22 -42 34
-87 24 -87 -10 0 -80 94 -80 108 0 12 21 21 33 15 4 -2 14 -18 23 -36z m148
-37 c-52 -72 -63 -31 -13 49 18 30 22 32 36 19 13 -14 11 -21 -23 -68z m-1754
-29 c0 -82 17 -86 25 -6 6 48 11 65 22 65 12 0 14 -8 9 -39 -3 -22 -9 -46 -12
-55 -3 -9 -1 -16 5 -16 14 0 31 42 31 75 0 23 16 42 26 32 3 -2 1 -30 -4 -61
-7 -43 -6 -56 4 -56 8 0 15 21 19 55 5 39 12 55 22 55 11 0 14 -6 9 -22 -3
-13 -9 -40 -12 -60 -10 -60 13 -45 27 17 7 30 16 55 21 55 4 0 8 -22 8 -50 0
-62 16 -65 26 -5 8 56 24 49 24 -11 0 -24 5 -44 10 -44 6 0 10 21 11 48 0 49
10 40 23 -20 9 -43 28 -35 20 8 -6 34 -6 35 14 23 11 -7 27 -25 36 -40 9 -15
32 -46 51 -69 19 -23 35 -43 35 -45 0 -2 -16 3 -35 11 -25 10 -76 14 -182 14
-154 0 -219 -10 -240 -38 -31 -39 1 -305 46 -394 l29 -57 -36 23 c-21 13 -57
32 -82 43 -25 11 -51 27 -59 36 -12 15 -10 17 25 17 49 0 33 17 -21 22 -40 4
-35 11 18 22 49 11 31 27 -23 20 -34 -5 -50 -3 -50 5 0 6 11 11 24 11 31 0 56
10 56 21 0 6 -21 7 -50 3 -27 -4 -50 -3 -50 2 0 5 24 20 53 33 34 16 46 25 35
28 -9 2 -30 -3 -47 -11 -35 -19 -64 -21 -59 -4 2 6 25 17 51 25 28 8 47 19 47
28 0 12 -6 12 -41 0 -48 -17 -79 -19 -79 -5 0 6 6 10 13 10 6 0 31 9 55 20 50
23 49 46 -1 26 -63 -26 -77 -28 -77 -12 0 10 16 19 43 26 72 19 77 21 77 32 0
6 -12 8 -30 4 -16 -3 -43 -9 -60 -12 -26 -6 -30 -4 -30 15 0 13 6 21 18 21 31
0 92 21 92 32 0 5 -10 8 -22 5 -87 -20 -88 -20 -88 6 0 33 7 37 40 25 19 -6
35 -6 47 0 14 9 10 12 -25 21 -30 9 -42 17 -42 31 0 32 11 50 40 65 24 13 30
13 40 0 7 -8 16 -30 20 -48 6 -27 8 -29 15 -13 5 11 3 32 -3 49 -9 24 -9 33 1
39 29 18 37 8 37 -47 0 -30 5 -55 10 -55 6 0 10 18 10 39 0 46 15 91 30 91 6
0 10 -26 10 -59z m1149 37 c0 -13 -4 -43 -8 -68 l-7 -45 -17 49 c-24 69 -22
86 8 86 19 0 25 -5 24 -22z m432 -42 c41 -55 24 -65 -26 -16 -30 29 -41 48
-38 61 7 24 23 13 64 -45z m206 -13 c-69 -72 -68 -25 2 50 23 25 26 26 32 10
5 -13 -5 -30 -34 -60z m453 59 c0 -19 -30 -115 -35 -110 -1 2 -5 31 -9 66 -7
62 -7 62 19 62 18 0 25 -5 25 -18z m1022 -32 c7 -42 22 -69 33 -59 2 3 0 21
-5 40 -14 48 -12 69 5 69 10 0 15 -10 15 -34 0 -49 11 -96 21 -90 5 3 9 32 9
65 0 81 21 74 35 -10 11 -72 25 -71 25 1 0 48 9 58 37 40 10 -6 10 -15 1 -39
-6 -17 -8 -38 -3 -49 7 -16 9 -14 15 13 11 47 28 65 50 53 32 -17 50 -41 50
-65 0 -20 -8 -26 -42 -36 -35 -9 -39 -12 -25 -21 12 -6 28 -6 47 0 33 12 40 8
40 -26 0 -20 -4 -23 -22 -19 -71 16 -88 18 -88 8 0 -10 61 -31 93 -31 11 0 17
-8 17 -21 0 -19 -4 -21 -30 -15 -16 3 -43 9 -60 12 -18 4 -30 2 -30 -4 0 -11
5 -13 78 -32 25 -6 42 -17 42 -26 0 -16 -35 -11 -82 12 -17 9 -29 10 -33 4 -6
-10 67 -49 93 -50 6 0 12 -4 12 -10 0 -14 -31 -12 -79 5 -35 12 -41 12 -41 0
0 -8 18 -19 43 -26 46 -14 64 -25 54 -35 -4 -4 -27 1 -52 10 -65 25 -80 13
-18 -15 29 -13 53 -28 53 -33 0 -5 -22 -6 -50 -2 -61 8 -70 -11 -10 -20 60
-10 50 -28 -10 -20 -54 7 -72 -9 -22 -20 53 -11 56 -18 10 -22 -55 -4 -65 -22
-13 -22 19 0 35 -4 35 -9 0 -5 -26 -22 -57 -37 -32 -15 -76 -39 -97 -52 l-39
-24 26 45 c30 50 67 246 67 349 0 76 -13 84 -160 98 -122 11 -249 2 -290 -20
l-24 -13 23 29 c12 16 38 52 57 81 46 67 69 77 61 28 -7 -41 10 -48 19 -7 13
61 23 69 23 19 1 -34 5 -47 14 -44 7 3 11 19 9 45 -3 56 14 62 22 7 10 -60 26
-57 26 5 0 28 4 50 8 50 5 0 14 -25 21 -55 7 -30 17 -55 23 -55 6 0 8 12 4 30
-3 17 -9 44 -12 60 -5 23 -3 30 9 30 10 0 17 -16 22 -55 4 -37 11 -55 20 -55
8 0 13 6 11 13 -3 6 -7 34 -10 60 -8 63 15 60 26 -3z m-2398 -10 c37 -22 55
-55 65 -122 l8 -47 -41 -3 c-32 -2 -44 -9 -62 -35 l-21 -31 -46 40 c-68 58
-82 129 -41 209 13 25 16 26 60 18 25 -5 61 -18 78 -29z m228 -31 l29 -64 -52
52 c-45 45 -51 54 -39 68 20 24 31 14 62 -56z m115 63 c10 -6 8 -22 -8 -70
-30 -89 -50 -64 -33 41 7 37 17 44 41 29z m968 -53 c10 -87 -7 -96 -34 -18
-16 49 -18 65 -8 71 27 17 35 6 42 -53z m135 46 c11 -14 7 -23 -30 -60 -24
-25 -46 -43 -48 -40 -7 6 46 115 56 115 5 0 15 -7 22 -15z m316 -52 c22 -76 9
-119 -53 -171 l-46 -40 -21 31 c-18 26 -29 33 -63 35 l-41 3 5 42 c7 55 38
110 74 131 29 17 108 36 121 29 4 -2 15 -29 24 -60z m-1378 -41 c-13 -28 -29
-52 -36 -52 -14 0 -12 14 15 88 13 38 17 42 29 30 12 -12 11 -21 -8 -66z m876
9 c19 -65 19 -61 4 -61 -7 0 -23 24 -36 52 -17 39 -19 54 -10 65 15 19 23 8
42 -56z m-589 28 c19 -17 35 -38 35 -46 0 -18 -78 45 -79 65 -1 18 5 15 44
-19z m278 -23 c-21 -19 -40 -30 -42 -24 -2 7 13 27 34 47 22 19 40 30 42 24 3
-7 -13 -27 -34 -47z m-369 31 c16 -12 17 -18 5 -55 -15 -50 -25 -44 -34 21 -8
49 -2 56 29 34z m482 -33 c-9 -67 -18 -73 -32 -23 -12 39 -12 45 3 57 29 21
36 14 29 -34z m-857 -19 c29 -33 41 -61 24 -53 -41 18 -103 66 -103 79 0 40
30 30 79 -26z m315 38 c3 -10 8 -36 12 -58 l6 -40 -30 35 c-34 39 -38 50 -20
68 17 17 26 15 32 -5z m350 -50 c32 -37 62 -78 68 -92 8 -22 5 -29 -24 -53
l-33 -27 -9 27 c-11 35 -45 72 -66 72 -21 0 -55 -37 -66 -72 l-9 -27 -33 27
c-29 24 -32 31 -23 52 10 28 118 160 130 160 4 0 33 -30 65 -67z m266 39 c0
-10 -49 -82 -56 -82 -6 0 2 57 12 92 4 14 9 16 25 8 10 -6 19 -14 19 -18z
m350 0 c0 -14 -61 -61 -102 -80 -23 -11 -2 27 37 65 43 44 65 49 65 15z
m-1067 -50 c-34 -60 -33 -60 -33 -31 0 29 37 92 49 84 5 -3 -2 -27 -16 -53z
m787 26 c11 -18 20 -44 20 -58 0 -21 -5 -17 -29 25 -24 44 -29 65 -15 65 2 0
13 -15 24 -32z m-560 2 c0 -4 -9 -27 -19 -51 -16 -35 -21 -40 -27 -26 -10 28
13 97 31 91 8 -4 15 -10 15 -14z m370 -57 c0 -39 -15 -33 -34 14 -16 38 -17
46 -5 54 16 10 38 -29 39 -68z m-2261 42 c61 -21 111 -46 111 -55 0 -5 -13
-11 -29 -15 -42 -9 -111 -65 -146 -119 -16 -25 -33 -46 -37 -46 -4 0 -15 15
-25 33 -18 33 -25 164 -11 200 9 22 78 23 137 2z m4238 -12 c14 -50 8 -156
-10 -190 -10 -18 -21 -33 -25 -33 -4 0 -20 21 -36 46 -32 50 -89 96 -142 116
-19 7 -34 15 -34 18 0 8 56 37 105 54 22 8 61 15 87 15 44 1 48 -1 55 -26z
m-2487 -60 c0 -21 -3 -19 -34 15 -27 29 -32 40 -23 51 9 11 15 8 34 -15 13
-16 23 -39 23 -51z m638 20 c-25 -26 -34 -30 -36 -19 -2 9 6 30 18 46 18 25
25 29 36 19 13 -10 10 -17 -18 -46z m-950 0 c45 -34 31 -45 -23 -18 -25 13
-51 25 -57 27 -7 3 -9 12 -5 22 8 19 27 12 85 -31z m482 8 c-5 -9 -15 -25 -24
-36 -14 -18 -15 -19 -16 -2 0 10 7 32 16 49 12 23 18 27 24 17 5 -7 5 -20 0
-28z m290 -7 c7 -19 10 -37 7 -40 -8 -8 -45 59 -40 73 8 19 20 7 33 -33z m540
22 c0 -6 -23 -22 -50 -33 -59 -25 -59 -25 -62 -15 -3 11 93 73 103 66 5 -3 9
-11 9 -18z m-3202 -43 l43 -32 -48 -6 c-57 -8 -186 -39 -226 -54 l-28 -11 29
-42 c17 -24 44 -56 61 -72 l30 -29 -47 -22 c-26 -12 -75 -43 -109 -68 l-61
-46 15 -68 c8 -37 25 -91 38 -120 l23 -51 -47 -7 c-69 -10 -131 -26 -131 -35
0 -15 83 -132 131 -184 27 -30 49 -56 49 -58 0 -3 -28 -1 -62 3 -61 8 -65 10
-126 76 -85 92 -110 168 -125 380 l-10 151 88 96 c195 212 390 288 513 199z
m2052 1 c37 -19 77 -46 89 -58 21 -23 22 -24 5 -60 -10 -20 -21 -36 -24 -36
-3 0 -16 13 -28 29 -11 16 -33 32 -49 36 -37 9 -63 -23 -63 -76 0 -44 0 -44
-48 -27 -33 13 -34 14 -29 58 6 51 55 170 69 170 6 0 41 -16 78 -36z m1014
-26 c15 -35 30 -83 33 -108 5 -44 4 -45 -29 -58 -48 -17 -48 -17 -48 31 0 81
-53 98 -111 35 l-27 -28 -22 36 -23 36 24 24 c25 25 146 93 165 94 6 0 24 -28
38 -62z m2141 47 c90 -24 199 -100 304 -215 l91 -98 0 -79 c-1 -116 -14 -208
-43 -303 -22 -70 -35 -95 -77 -143 -29 -31 -62 -63 -73 -69 -21 -12 -127 -28
-127 -20 0 2 26 33 58 68 59 65 129 170 120 180 -3 2 -34 9 -69 15 -121 20
-112 15 -93 52 10 17 27 72 40 120 l22 88 -61 46 c-34 25 -83 55 -108 67 l-46
22 49 53 c70 76 75 89 41 102 -46 18 -174 49 -202 49 -14 0 -36 3 -48 6 -22 6
-21 8 15 34 20 15 44 29 52 33 28 11 96 7 155 -8z m-3038 -49 c16 -30 16 -31
-3 -16 -45 34 -52 43 -47 56 7 19 28 2 50 -40z m691 2 c-42 -36 -48 -28 -13
18 21 27 30 33 36 23 6 -10 -1 -22 -23 -41z m-526 -29 c71 -59 126 -131 147
-190 9 -26 6 -32 -32 -69 l-42 -40 -6 34 c-8 46 -52 119 -82 135 -50 27 -89
-10 -102 -99 -4 -26 -2 -57 4 -73 10 -26 10 -28 -11 -21 -51 16 -86 34 -91 48
-7 19 8 121 25 161 18 45 98 175 108 175 4 0 41 -27 82 -61z m473 -16 c42 -70
61 -124 79 -218 7 -38 1 -47 -51 -74 -56 -28 -65 -27 -53 5 16 40 12 75 -15
132 -19 41 -29 52 -48 52 -43 0 -117 -98 -117 -156 l0 -26 -39 33 c-21 19 -41
39 -44 45 -10 22 50 129 99 176 58 55 124 108 135 108 4 0 28 -35 54 -77z
m-1815 60 c-94 -33 -123 -64 -137 -144 l-7 -44 -7 40 c-19 100 -6 133 57 145
45 9 117 11 94 3z m252 -13 c29 -11 63 -29 75 -39 l22 -18 -17 -85 -17 -85
-39 31 c-36 29 -43 31 -117 30 -104 -2 -113 -9 -106 -91 7 -73 24 -111 67
-146 16 -14 30 -28 30 -30 0 -2 -18 -7 -41 -11 -22 -4 -59 -16 -81 -27 l-40
-21 -30 29 c-74 70 -99 163 -79 294 14 90 30 115 85 140 115 50 207 60 288 29z
m633 -6 c14 -9 24 -19 21 -21 -7 -7 -106 31 -106 41 0 12 55 0 85 -20z m1335
18 c0 -7 -88 -42 -106 -42 -13 0 8 17 41 34 32 17 65 21 65 8z m776 -16 c117
-36 145 -81 147 -241 2 -77 -2 -97 -22 -137 -13 -26 -38 -61 -55 -77 l-32 -31
-59 25 c-33 13 -70 25 -82 25 -30 0 -29 6 7 37 42 35 57 68 66 141 8 77 0 89
-73 98 -65 8 -120 -6 -161 -41 l-29 -25 -7 53 c-4 28 -12 67 -18 86 -9 31 -8
36 13 52 13 11 47 28 74 39 57 23 145 22 231 -4z m153 4 c25 -13 33 -52 25
-119 l-7 -56 -14 59 c-16 72 -31 90 -97 116 l-51 21 63 -6 c35 -2 71 -9 81
-15z m-3569 -25 c0 -28 -4 -35 -20 -35 -23 0 -40 -28 -40 -64 0 -16 -6 -26
-14 -26 -32 0 -99 -121 -75 -135 16 -10 10 -25 -11 -25 -26 0 -54 -43 -46 -73
4 -18 0 -27 -19 -37 -14 -7 -28 -10 -32 -6 -5 4 -8 38 -8 74 1 56 6 79 37 143
44 90 117 175 173 200 54 25 55 24 55 -16z m3919 16 c97 -50 211 -241 211
-355 0 -58 -10 -70 -43 -55 -21 10 -25 17 -21 36 8 30 -20 73 -47 73 -18 0
-19 3 -9 15 9 11 9 22 1 46 -15 43 -58 99 -77 99 -8 0 -14 10 -14 26 0 36 -17
64 -40 64 -16 0 -20 7 -20 35 0 40 7 42 59 16z m-5076 -11 c-46 -20 -54 -41
-29 -76 11 -14 26 -19 60 -19 25 0 46 -1 46 -2 0 -2 -19 -12 -42 -24 -56 -28
-142 -23 -170 11 -23 28 -23 82 0 102 25 23 41 26 112 27 l65 1 -42 -20z
m3111 -2 c28 -45 29 -69 5 -119 -12 -27 -26 -49 -29 -49 -4 0 -17 22 -29 50
-23 53 -21 91 7 123 20 23 29 22 46 -5z m3195 -2 c32 -29 29 -90 -5 -112 -41
-28 -114 -30 -162 -5 -47 24 -55 36 -17 27 55 -14 104 21 90 63 -3 11 -22 26
-43 35 l-37 16 77 -3 c58 -2 81 -7 97 -21z m-3943 0 c3 -8 4 -31 2 -52 l-3
-39 -27 46 c-16 25 -28 49 -28 52 0 13 51 7 56 -7z m1504 9 c0 -12 -40 -84
-50 -90 -11 -7 -14 77 -3 88 8 8 53 9 53 2z m-3700 -19 c-34 -41 -143 -70
-179 -47 -12 8 -12 12 -2 25 18 22 65 34 135 35 50 1 57 -1 46 -13z m6005 -10
c21 -14 24 -20 14 -32 -25 -30 -143 -3 -181 43 -12 14 -6 15 64 11 49 -3 86
-11 103 -22z m-3854 -48 c23 -44 20 -46 -26 -15 -36 23 -44 44 -23 65 13 13
16 11 49 -50z m99 10 c-1 -49 -2 -51 -15 -34 -20 27 -20 86 0 86 11 0 15 -12
15 -52z m1370 19 c0 -18 -7 -42 -15 -53 -13 -17 -14 -15 -15 34 0 40 4 52 15
52 10 0 15 -10 15 -33z m130 -6 c0 -14 -58 -61 -75 -61 -4 0 6 22 21 50 21 39
30 48 41 39 7 -6 13 -19 13 -28z m-3200 13 c23 -9 39 -18 36 -21 -2 -2 -32
-11 -66 -19 -61 -14 -170 -61 -170 -74 0 -10 57 -97 69 -104 20 -13 12 -23
-32 -40 -51 -19 -112 -68 -131 -104 -20 -39 -4 -142 29 -190 l25 -36 -68 -19
c-37 -10 -71 -22 -76 -27 -12 -12 43 -124 88 -180 45 -57 28 -64 -49 -20 -58
33 -105 82 -173 178 l-43 61 38 10 c21 6 64 11 96 11 62 0 67 6 37 48 -27 37
-60 137 -60 183 0 29 6 43 31 63 43 36 108 73 144 82 55 13 58 24 17 53 -47
35 -97 100 -85 112 16 16 168 48 235 48 41 1 84 -5 108 -15z m1330 -8 c0 -12
5 -37 11 -55 17 -49 5 -47 -35 7 -41 57 -42 59 -18 65 35 9 42 7 42 -17z m66
10 c3 -7 4 -40 2 -72 l-3 -59 -16 35 c-9 19 -19 52 -23 73 -6 33 -5 37 14 37
11 0 23 -6 26 -14z m1989 -23 c-4 -21 -14 -54 -23 -73 l-17 -35 -3 59 c-4 71
1 86 29 86 19 0 21 -4 14 -37z m62 31 c21 -6 21 -8 8 -33 -8 -14 -26 -39 -40
-56 -26 -29 -26 -30 -21 -5 3 14 9 42 12 63 7 40 7 40 41 31z m1557 -17 c44
-12 81 -27 83 -34 2 -6 -23 -39 -56 -73 -34 -34 -61 -63 -61 -65 0 -2 21 -10
46 -19 57 -19 139 -71 159 -99 8 -12 15 -34 15 -50 0 -44 -28 -132 -56 -172
-13 -20 -24 -40 -24 -44 0 -4 35 -11 78 -14 120 -8 120 -8 66 -86 -26 -36 -65
-85 -86 -107 -40 -41 -138 -99 -157 -92 -6 1 6 23 26 48 44 56 99 168 87 180
-5 5 -39 17 -76 27 l-68 19 24 35 c14 20 27 52 30 72 18 112 19 103 -20 147
-37 41 -100 80 -128 80 -25 0 -29 20 -8 43 22 24 62 88 62 99 0 3 -24 18 -52
31 -49 23 -81 33 -162 52 -20 4 -26 9 -18 17 32 32 186 35 296 5z m-3251 6 c2
-5 -1 -26 -7 -48 l-12 -40 -7 28 c-11 43 9 89 26 60z m1261 -56 l-8 -32 -11
40 c-9 29 -9 42 -1 47 17 11 28 -20 20 -55z m-1562 -12 c-5 -94 -21 -91 -29 5
-6 57 -4 62 13 58 17 -3 19 -11 16 -63z m1868 23 c0 -49 -9 -88 -20 -88 -9 0
-22 108 -15 121 4 5 13 9 21 9 10 0 14 -12 14 -42z m-2881 8 c15 -17 32 -76
23 -76 -4 1 -20 11 -36 24 -21 18 -26 29 -21 45 7 24 18 27 34 7z m851 -41
l55 -56 -60 27 c-33 15 -62 28 -64 30 -4 3 7 54 12 54 1 0 27 -25 57 -55z
m217 38 c-3 -10 -8 -36 -12 -58 -5 -29 -9 -35 -15 -24 -13 23 0 99 17 99 9 0
13 -7 10 -17z m442 -29 c21 -27 26 -74 12 -123 -6 -23 -8 -22 -49 23 -44 48
-53 86 -32 127 13 23 37 14 69 -27z m921 -21 c0 -27 -10 -45 -44 -81 l-44 -46
-7 53 c-8 63 6 106 44 126 23 12 27 12 39 -2 6 -9 12 -32 12 -50z m392 21 c4
-58 -7 -78 -16 -27 -4 21 -9 46 -12 56 -3 11 0 17 9 17 11 0 16 -14 19 -46z
m258 6 c0 -9 -25 -26 -62 -43 l-63 -27 55 55 c53 53 69 57 70 15z m814 24 c10
-25 8 -29 -26 -54 l-31 -23 7 33 c10 53 37 77 50 44z m-4219 -24 c26 -10 25
-11 -42 -45 -87 -43 -128 -84 -119 -119 3 -13 29 -49 57 -80 l51 -56 -58 0
c-60 0 -128 -24 -151 -52 -25 -30 19 -120 82 -168 l33 -25 -75 -12 c-110 -19
-117 -24 -110 -85 4 -28 20 -79 36 -114 17 -35 28 -64 27 -64 -2 0 -19 7 -39
15 -43 18 -105 87 -143 160 -34 65 -32 68 59 86 32 7 60 15 62 20 3 4 -9 30
-26 58 -24 37 -32 65 -36 114 l-5 64 43 35 c54 43 74 53 122 62 20 4 37 10 37
15 0 4 -20 34 -45 66 -25 32 -44 63 -42 69 2 5 37 22 78 37 78 29 158 37 204
19z m1485 -35 c21 -25 5 -28 -39 -5 -40 20 -48 30 -35 43 8 8 56 -17 74 -38z
m1618 27 c4 -13 -77 -57 -86 -47 -9 9 59 66 72 62 5 -2 11 -8 14 -15z m1612
-10 c89 -36 88 -31 35 -108 l-47 -69 47 -11 c50 -13 86 -33 128 -72 21 -20 27
-35 27 -66 0 -56 -14 -102 -47 -148 -31 -46 -27 -51 52 -68 82 -17 84 -20 53
-84 -34 -69 -90 -131 -139 -157 -21 -10 -40 -19 -43 -19 -3 0 8 28 24 63 15
34 31 85 35 114 8 62 2 67 -108 86 l-75 12 33 25 c63 48 107 138 82 168 -23
28 -99 55 -154 54 l-54 0 51 55 c59 65 70 95 44 125 -27 29 -92 72 -139 90
-40 16 -40 16 -15 27 38 16 148 7 210 -17z m-3058 -44 c88 -33 175 -96 184
-132 3 -15 -3 -41 -19 -71 l-24 -48 -19 39 c-13 27 -36 49 -74 72 -30 17 -58
32 -62 32 -4 0 -17 -9 -29 -21 -18 -18 -21 -30 -17 -85 3 -46 10 -72 26 -94
l23 -30 -51 0 c-37 0 -55 5 -70 20 -11 11 -20 23 -20 28 0 4 -4 33 -9 64 -10
57 -1 152 20 231 12 45 13 45 141 -5z m1332 25 c16 -54 35 -201 30 -237 -15
-105 -34 -126 -115 -126 l-40 0 23 30 c27 36 38 150 18 175 -34 42 -154 -17
-180 -87 l-11 -33 -25 49 c-16 30 -23 57 -20 71 9 35 111 105 206 141 100 39
107 40 114 17z m-2922 -60 c-22 -48 -27 -72 -27 -140 0 -46 -3 -83 -6 -83 -32
0 -179 140 -179 170 0 13 74 68 121 90 24 11 61 20 81 20 l37 0 -27 -57z
m1125 16 c45 -28 31 -34 -42 -19 -48 10 -55 14 -55 35 0 22 3 23 30 15 17 -5
47 -19 67 -31z m2223 17 c0 -22 -7 -26 -55 -36 -31 -6 -61 -10 -67 -8 -14 5
51 46 90 58 15 5 28 9 30 9 1 1 2 -10 2 -23z m1125 0 c28 -13 66 -37 85 -54
l34 -29 -26 -40 c-35 -53 -150 -145 -163 -131 -2 2 0 21 4 43 9 51 -3 114 -33
182 l-25 53 37 0 c20 0 60 -11 87 -24z m-3094 -3 c24 -14 39 -33 25 -33 -20 0
-66 25 -66 36 0 18 6 18 41 -3z m1659 3 c0 -11 -46 -36 -66 -36 -13 0 0 18 24
32 33 21 42 22 42 4z m-2770 -13 c31 -21 49 -46 77 -105 l21 -46 -46 -4 c-116
-10 -182 24 -182 93 0 66 73 101 130 62z m662 -9 c25 -13 78 -88 78 -111 0 -5
-15 -16 -32 -24 -25 -11 -35 -23 -42 -52 -11 -42 -16 -42 -96 -4 -55 27 -80
71 -80 144 0 46 3 53 23 57 12 3 31 7 42 10 27 5 74 -3 107 -20z m1086 3 c11
-12 28 -39 36 -59 14 -31 14 -43 1 -89 -28 -108 -26 -107 -67 -57 -19 23 -40
53 -46 65 -28 52 -3 163 37 163 9 0 27 -10 39 -23z m418 -12 c17 -42 18 -102
1 -131 -7 -11 -27 -39 -46 -62 l-34 -42 -18 53 c-30 91 -29 121 11 175 38 53
66 55 86 7z m1148 24 l38 -11 -4 -62 c-6 -92 -46 -138 -140 -160 -24 -6 -28
-3 -28 17 0 31 -25 63 -55 71 -30 8 -31 15 -6 65 24 45 39 59 88 77 47 16 58
17 107 3z m635 -15 c27 -34 27 -88 2 -113 -28 -28 -91 -42 -155 -35 l-55 7 29
57 c53 105 133 142 179 84z m-2884 -20 c33 -8 64 -19 68 -23 5 -5 6 -27 2 -49
l-7 -41 -31 20 c-81 49 -136 -7 -91 -92 l15 -30 -48 3 c-41 3 -48 6 -54 28 -9
31 -11 194 -3 202 7 8 76 -1 149 -18z m1863 -92 c-1 -55 -6 -103 -9 -106 -3
-3 -27 -9 -53 -12 l-48 -7 16 31 c45 86 -10 142 -91 93 l-31 -20 -7 39 c-4 22
-4 43 -1 48 13 21 201 56 219 41 5 -4 7 -52 5 -107z m-4232 77 c76 -25 95 -45
101 -106 l5 -48 -26 36 c-57 82 -148 104 -201 49 -40 -42 -39 -87 3 -138 l31
-40 -55 -7 c-76 -9 -118 -29 -174 -81 -136 -127 -142 -346 -13 -465 24 -22 65
-50 91 -61 l46 -21 -36 -18 c-87 -45 -103 -126 -34 -181 38 -32 138 -16 188
29 23 20 24 3 3 -37 -29 -57 -91 -71 -210 -49 -74 14 -99 31 -119 80 -21 51
-20 88 1 111 12 13 14 23 8 32 -127 173 -168 287 -146 401 26 138 100 244 225
325 63 41 63 41 59 83 -4 36 0 47 28 80 17 21 41 43 53 48 28 12 97 3 172 -22z
m6644 5 c42 -36 63 -80 57 -120 -5 -31 -2 -34 58 -73 85 -55 169 -149 196
-220 15 -37 24 -87 26 -146 4 -79 2 -98 -21 -158 -25 -67 -83 -163 -111 -187
-19 -16 -19 -34 0 -50 21 -17 18 -66 -5 -118 -24 -53 -56 -68 -166 -77 -93 -8
-133 5 -159 55 -21 40 -20 57 3 37 27 -25 87 -47 126 -47 69 0 126 84 96 140
-6 12 -32 34 -56 50 l-45 28 45 20 c197 88 245 343 94 507 -56 61 -114 92
-193 101 l-56 7 20 21 c35 37 52 90 40 124 -31 89 -159 80 -224 -16 l-25 -37
0 32 c0 77 32 106 143 134 99 24 120 23 157 -7z m-4460 -30 c12 -12 8 -14 -30
-14 -63 0 -90 9 -90 30 0 15 6 16 53 8 28 -5 59 -16 67 -24z m2198 0 c-3 -2
-34 -7 -69 -10 -58 -6 -63 -5 -49 9 21 23 114 37 118 19 2 -7 2 -15 0 -18z
m-1099 -69 c53 -56 81 -107 81 -147 0 -20 -9 -15 -66 39 -37 35 -70 63 -73 63
-3 0 -37 -27 -74 -61 -56 -50 -67 -57 -67 -39 0 38 29 90 81 145 29 30 55 55
59 55 4 0 30 -25 59 -55z m-3266 9 c29 -22 62 -69 72 -103 l8 -25 -32 27 c-66
55 -128 24 -92 -47 20 -38 16 -38 -37 2 -62 47 -78 108 -39 150 18 19 29 23
59 19 20 -3 48 -13 61 -23z m2154 20 c40 -11 17 -19 -41 -16 -31 2 -56 8 -56
13 0 10 63 12 97 3z m2203 -3 c0 -11 -110 -19 -116 -9 -6 9 22 15 74 17 23 0
42 -3 42 -8z m2177 -13 c49 -45 13 -124 -83 -181 -6 -4 -2 12 9 35 l21 41 -23
18 c-26 21 -60 13 -98 -23 -28 -26 -29 -17 -3 36 22 46 89 96 129 96 14 0 35
-10 48 -22z m-4172 -13 c35 -17 48 -38 63 -102 l9 -42 -51 23 c-56 24 -90 73
-80 114 7 26 15 27 59 7z m285 -7 c57 -39 74 -71 78 -148 2 -39 1 -70 -2 -70
-3 0 -33 17 -66 37 -44 28 -64 47 -75 76 -15 38 -20 108 -8 120 12 13 40 7 73
-15z m1190 3 c14 -28 12 -64 -6 -110 -12 -31 -30 -49 -80 -80 l-64 -40 0 61
c0 79 27 136 77 166 47 27 59 27 73 3z m275 -1 c4 -12 -1 -36 -12 -57 -14 -28
-30 -43 -69 -59 l-52 -23 10 42 c10 49 35 87 69 104 34 18 47 16 54 -7z
m-2952 -7 c29 -15 30 -17 12 -24 -25 -10 -70 -11 -78 -2 -6 6 20 43 30 43 2 0
18 -7 36 -17z m4151 1 c9 -8 16 -20 16 -25 0 -11 -57 -11 -85 1 -18 7 -17 9
15 24 19 8 36 15 37 16 1 0 9 -7 17 -16z m-3185 -35 c13 -45 8 -61 -12 -38
-24 26 -37 67 -24 73 22 8 24 6 36 -35z m2195 35 c12 -5 13 -11 4 -32 -14 -33
-36 -58 -43 -50 -6 5 14 88 21 88 1 0 9 -3 18 -6z m-2251 -46 c9 -23 16 -43
14 -44 -1 -2 -22 14 -46 34 -38 31 -41 37 -25 43 34 13 41 10 57 -33z m108 -4
c4 -21 5 -41 4 -42 -6 -6 -35 56 -35 73 0 32 25 8 31 -31z m727 15 c60 -30
122 -89 122 -117 0 -12 -4 -12 -22 0 -13 8 -51 24 -85 35 l-61 21 -35 -56
c-19 -32 -39 -70 -44 -87 l-11 -30 -7 28 c-4 15 -5 49 -3 76 6 57 51 161 71
161 8 0 41 -14 75 -31z m719 -26 c28 -62 40 -135 28 -180 l-7 -28 -11 30 c-5
17 -25 55 -44 87 l-35 56 -52 -18 c-29 -10 -67 -25 -85 -35 -18 -9 -35 -14
-37 -12 -3 2 10 24 29 48 32 42 138 109 173 109 9 0 27 -25 41 -57z m643 42
c0 -19 -21 -65 -30 -65 -7 0 -3 39 5 68 6 17 25 15 25 -3z m134 6 c16 -6 13
-12 -25 -43 -24 -20 -45 -36 -46 -34 -2 1 5 21 14 44 16 43 23 46 57 33z
m-3114 -58 c7 -21 16 -42 21 -47 15 -17 19 0 8 32 -17 50 -3 62 17 15 28 -69
45 -49 18 21 -12 31 13 16 32 -19 10 -19 22 -35 26 -35 13 0 9 24 -8 48 -26
37 4 27 96 -33 l85 -55 -54 0 c-40 0 -84 -12 -180 -50 -69 -27 -143 -62 -165
-76 -35 -24 -38 -29 -32 -62 7 -43 82 -202 127 -270 17 -26 46 -60 63 -75 l31
-28 -30 5 c-16 3 -61 9 -98 12 -75 8 -91 18 -53 36 32 14 34 33 4 24 -71 -20
-74 -19 -33 10 48 34 32 43 -24 14 -50 -25 -54 -10 -6 20 19 12 35 26 35 31 0
13 -8 11 -51 -13 -54 -30 -60 -15 -14 32 50 51 41 60 -14 14 -26 -23 -46 -33
-52 -27 -5 5 9 24 37 47 25 21 43 40 40 43 -3 3 -28 -9 -56 -27 -28 -18 -54
-30 -57 -26 -3 3 14 23 38 45 54 48 46 65 -11 20 -28 -23 -44 -29 -51 -22 -7
7 6 22 43 48 60 44 49 62 -13 21 -22 -15 -44 -24 -49 -21 -21 13 -8 33 35 56
25 13 45 30 45 36 0 19 -11 16 -52 -12 -46 -31 -58 -31 -58 -2 0 19 8 25 45
35 61 16 58 33 -5 25 l-50 -6 0 35 c0 24 8 42 25 58 l24 23 28 -32 c46 -52 62
-35 17 18 -21 26 -24 34 -14 46 16 19 40 19 40 1 0 -7 7 -30 15 -50 24 -57 37
-33 15 27 -19 49 -19 53 -3 65 16 11 20 7 39 -50 24 -74 39 -64 19 13 -18 67
-18 69 0 69 13 0 20 -22 28 -89 3 -22 22 -9 21 14 0 11 -4 35 -8 54 -14 57 17
32 33 -27 15 -55 38 -74 27 -22 -3 17 -9 44 -12 60 -5 23 -3 30 9 30 10 0 17
-16 22 -55 9 -77 30 -73 22 5 -7 68 5 80 23 23z m3726 15 c-17 -24 -21 -48 -8
-48 4 0 16 16 26 35 19 35 44 50 32 19 -27 -70 -10 -90 18 -21 20 47 34 35 17
-15 -11 -32 -7 -49 8 -32 5 5 14 26 21 47 18 57 30 45 23 -23 -8 -78 13 -82
22 -5 5 39 12 55 22 55 12 0 14 -7 9 -30 -3 -16 -9 -43 -12 -60 -10 -47 14
-36 26 13 16 62 18 67 30 67 13 0 13 -1 -1 -56 -8 -31 -8 -49 -1 -56 11 -11
16 0 27 65 4 23 11 37 20 37 18 0 18 -3 0 -64 -18 -59 -19 -69 -4 -64 7 2 19
28 28 57 14 47 18 51 34 39 16 -12 16 -16 -3 -65 -12 -33 -16 -54 -10 -58 11
-7 40 52 40 80 0 19 24 20 40 0 10 -12 7 -20 -14 -46 -45 -53 -29 -70 17 -18
l28 32 24 -23 c17 -16 25 -34 25 -58 l0 -35 -51 6 c-63 8 -64 -13 -1 -26 36
-7 42 -12 42 -33 0 -30 -11 -30 -60 1 -45 29 -50 30 -50 12 0 -7 20 -23 45
-37 27 -15 45 -32 45 -42 0 -24 -13 -23 -61 8 -62 39 -71 22 -11 -21 37 -26
50 -41 43 -48 -7 -7 -23 -1 -51 22 -56 45 -66 29 -12 -19 66 -59 52 -71 -23
-18 -60 42 -68 30 -11 -18 25 -21 46 -42 46 -46 0 -17 -23 -7 -63 27 -53 46
-61 36 -12 -15 46 -47 40 -62 -14 -32 -43 24 -51 26 -51 13 0 -5 16 -19 35
-31 48 -30 44 -45 -6 -20 -56 29 -72 20 -24 -14 41 -29 40 -29 -32 -10 -31 8
-29 -10 3 -24 39 -18 22 -28 -58 -35 -40 -4 -84 -10 -98 -13 -24 -5 -24 -5 6
23 17 15 46 49 63 75 45 68 120 227 127 270 6 33 3 38 -32 62 -22 14 -96 49
-165 76 -96 38 -140 50 -180 50 l-54 0 35 22 c19 11 53 33 75 48 65 44 94 51
71 18z m-2963 -46 c19 -20 18 -20 -30 -8 -26 7 -48 18 -47 24 4 45 3 44 32 24
15 -11 35 -29 45 -40z m2390 8 c-4 -4 -28 -12 -53 -18 l-45 -11 44 41 c44 42
44 42 53 18 5 -13 5 -27 1 -30z m-4423 10 c24 -13 66 -84 75 -129 l7 -35 -33
28 c-99 82 -135 182 -49 136z m3252 -30 c26 -23 53 -56 59 -75 15 -40 28 -44
55 -14 24 28 111 69 145 69 22 0 32 -10 58 -59 18 -35 31 -74 31 -95 0 -41 9
-44 65 -21 23 10 59 15 98 13 l62 -3 13 -60 c11 -46 11 -70 3 -103 -6 -24 -9
-47 -6 -51 2 -5 24 -6 47 -4 29 3 61 -2 101 -17 l57 -21 0 -42 c-1 -48 -21
-110 -44 -136 -25 -27 -19 -39 23 -51 35 -9 141 -81 141 -96 0 -2 -11 -26 -25
-53 -23 -46 -75 -101 -96 -101 -22 0 -6 -32 26 -52 20 -14 47 -47 66 -81 30
-56 30 -59 13 -78 -30 -33 -106 -79 -131 -79 -33 0 -38 -23 -13 -58 23 -31 39
-88 40 -139 0 -29 -4 -33 -57 -53 -40 -15 -72 -20 -101 -17 -23 2 -45 1 -47
-4 -3 -4 0 -27 6 -51 8 -33 8 -57 -3 -103 l-13 -60 -62 -3 c-39 -2 -75 3 -98
13 -56 23 -65 20 -65 -20 0 -36 -29 -105 -58 -137 -8 -10 -25 -18 -36 -18 -32
0 -123 46 -138 69 -19 31 -35 26 -58 -18 -20 -40 -97 -111 -120 -111 -23 0
-100 71 -120 111 -23 44 -39 49 -58 18 -15 -23 -106 -69 -138 -69 -11 0 -28 8
-36 18 -29 32 -58 101 -58 137 0 40 -9 43 -65 20 -23 -10 -59 -15 -98 -13
l-62 3 -13 60 c-11 46 -11 70 -3 103 6 24 9 47 6 51 -2 5 -24 6 -47 4 -51 -6
-164 35 -161 58 9 83 18 113 39 145 29 42 25 64 -9 64 -25 0 -101 46 -131 79
-17 18 -16 21 8 69 14 28 44 65 66 83 37 30 52 59 31 59 -21 0 -74 56 -97 102
-25 48 -25 51 -7 70 28 33 105 78 130 78 33 0 38 24 13 58 -23 31 -39 88 -40
139 0 29 4 33 57 53 34 12 75 20 100 19 23 -2 45 0 48 3 3 3 1 25 -6 49 -8 34
-8 57 3 104 l13 60 62 3 c39 2 75 -3 98 -13 56 -23 65 -20 65 20 0 36 29 105
58 138 8 9 25 17 36 17 30 0 117 -43 140 -69 26 -29 33 -27 55 18 22 42 97
111 121 111 8 0 36 -18 62 -40z m3178 27 c0 -39 -119 -176 -128 -147 -7 20 28
98 58 130 28 30 70 41 70 17z m-5514 -18 c24 -6 44 -13 44 -15 0 -3 -21 -24
-46 -48 l-45 -44 7 -61 c4 -36 3 -61 -3 -61 -5 0 -33 15 -63 33 -62 37 -107
89 -116 133 -5 29 -3 33 38 52 48 25 114 28 184 11z m4732 -10 c41 -20 44 -24
38 -53 -9 -44 -54 -96 -116 -133 -30 -18 -58 -33 -63 -33 -6 0 -7 25 -3 61 l6
62 -45 45 c-25 25 -44 46 -43 48 10 9 82 22 127 23 37 1 69 -6 99 -20z m-3810
-58 c12 -32 22 -62 22 -66 0 -14 -50 37 -72 73 -17 28 -19 36 -7 43 26 16 34
9 57 -50z m59 0 c22 -88 -3 -83 -38 8 l-19 52 21 -3 c17 -2 25 -15 36 -57z
m42 8 c6 -29 9 -54 6 -57 -7 -7 -35 63 -35 88 0 39 18 19 29 -31z m436 21 c55
-23 60 -28 63 -59 2 -19 1 -50 -3 -69 -6 -34 -6 -34 -22 -12 -33 47 -160 79
-191 48 -33 -33 13 -153 73 -186 19 -10 18 -11 -10 -22 -53 -20 -84 -23 -101
-9 -31 25 -81 143 -93 219 -7 41 -15 86 -18 98 l-6 24 124 -4 c104 -3 134 -7
184 -28z m1935 26 c0 -3 -9 -51 -20 -108 -21 -107 -55 -192 -90 -223 -18 -17
-25 -17 -75 -5 -58 14 -68 24 -35 35 27 9 80 102 80 141 0 16 -5 35 -12 42
-31 31 -158 -1 -190 -47 -15 -21 -15 -21 -22 16 -11 68 -7 92 15 104 66 35
127 48 237 48 61 1 112 -1 112 -3z m160 -16 c0 -25 -28 -95 -35 -88 -8 8 16
108 26 108 5 0 9 -9 9 -20z m50 -32 c-20 -54 -36 -76 -46 -66 -4 5 1 32 22
106 2 6 12 12 24 12 l20 0 -20 -52z m79 43 c12 -7 10 -15 -7 -43 -22 -36 -72
-87 -72 -73 0 20 46 125 55 125 6 0 16 -4 24 -9z m-2561 -27 c32 -21 24 -25
-31 -18 -38 5 -47 11 -47 26 0 17 5 19 28 13 15 -3 38 -13 50 -21z m2382 6 c0
-15 -7 -20 -27 -20 -16 0 -39 -3 -53 -7 -22 -6 -24 -5 -11 10 11 14 54 33 84
36 4 1 7 -8 7 -19z m-2662 -12 c6 -13 21 -38 33 -56 l22 -34 -51 32 c-63 38
-70 49 -47 67 25 18 30 17 43 -9z m2917 -8 c0 -8 -25 -29 -54 -48 l-55 -35 23
34 c12 19 27 44 33 56 8 17 15 20 32 14 11 -5 21 -14 21 -21z m-3076 -13 c43
-12 43 -12 47 -64 2 -28 9 -64 14 -78 15 -41 13 -44 -27 -29 -57 20 -87 17
-158 -17 -77 -36 -80 -47 -31 -134 27 -50 42 -65 85 -86 l52 -26 -33 -21 c-18
-11 -46 -34 -62 -51 -37 -38 -50 -39 -108 -2 -87 55 -136 151 -145 282 l-6 76
62 52 c122 101 203 126 310 98z m3391 -28 c34 -18 84 -54 112 -80 l51 -48 -6
-73 c-10 -133 -57 -223 -146 -280 -57 -35 -70 -35 -107 3 -16 17 -44 40 -63
51 l-34 21 50 22 c27 13 60 36 72 53 21 31 51 104 51 127 0 15 -128 75 -162
75 -14 0 -42 -7 -62 -15 -39 -16 -41 -13 -26 31 5 16 11 52 12 79 l3 50 45 12
c69 19 140 9 210 -28z m-5013 -5 c44 -27 113 -104 113 -125 0 -5 -24 3 -52 18
-126 64 -273 19 -322 -99 -13 -31 -14 -43 -2 -88 28 -109 147 -181 270 -165
l51 7 -20 -22 c-34 -39 -101 -62 -179 -62 -91 -1 -145 21 -195 79 -126 143
-77 388 94 470 71 34 174 29 242 -13z m6668 12 c137 -63 200 -232 144 -381
-52 -139 -179 -203 -322 -161 -51 15 -117 57 -117 75 0 5 23 4 51 -2 90 -18
207 37 252 118 51 93 6 197 -106 245 -63 27 -134 22 -208 -15 -27 -14 -49 -23
-49 -20 0 18 34 66 66 95 84 74 193 91 289 46z m-4590 -7 c7 -7 -5 -9 -34 -7
-27 2 -46 9 -49 17 -4 11 3 12 34 7 22 -4 44 -12 49 -17z m2353 9 c-3 -8 -24
-14 -49 -15 l-44 -2 30 14 c38 18 68 19 63 3z m-1797 -14 c52 -16 109 -48 109
-62 0 -4 -42 -6 -93 -4 l-94 3 -12 -78 c-7 -43 -14 -85 -15 -93 -2 -8 -12 5
-24 30 -16 34 -22 64 -22 126 0 44 3 84 7 87 12 12 88 7 144 -9z m1307 -72 c2
-68 -1 -91 -19 -130 -12 -26 -23 -40 -25 -32 -1 8 -8 50 -15 93 l-12 78 -94
-3 c-51 -2 -93 0 -93 4 0 11 88 60 123 69 18 4 55 7 82 6 l50 -2 3 -83z
m-2202 63 c19 -8 44 -21 56 -30 21 -14 19 -15 -40 -15 l-62 0 0 30 c0 35 0 35
46 15z m2994 -15 l0 -30 -62 0 c-59 0 -61 1 -41 15 23 16 83 44 96 45 4 0 7
-13 7 -30z m-3465 -51 l-47 -51 6 -61 6 -62 -17 30 c-9 17 -22 49 -29 72 -11
37 -11 43 5 57 15 14 107 64 120 65 2 1 -18 -22 -44 -50z m813 42 c8 -4 16
-27 19 -50 l6 -42 -28 11 c-40 15 -84 3 -97 -26 -10 -21 -7 -31 19 -68 l31
-44 -41 -11 c-37 -9 -44 -8 -59 9 -20 25 -73 179 -63 188 6 7 154 39 185 41 8
0 21 -3 28 -8z m2410 -12 c39 -7 72 -17 72 -23 0 -24 -53 -167 -68 -186 -15
-18 -21 -19 -60 -9 l-43 12 21 22 c26 28 40 77 29 98 -12 21 -60 30 -94 17
l-28 -11 7 43 c4 23 12 46 19 50 12 9 23 8 145 -13z m729 -36 c32 -23 32 -24
19 -66 -7 -23 -20 -55 -29 -72 l-17 -30 6 62 6 61 -48 52 -48 52 39 -18 c22
-10 54 -28 72 -41z m-2858 31 c22 -9 47 -26 55 -39 16 -25 57 -127 53 -131 -7
-8 -128 24 -152 40 -32 21 -69 98 -60 126 8 25 49 26 104 4z m1806 -3 c7 -24
-18 -87 -47 -118 -18 -19 -153 -61 -164 -50 -6 6 37 112 54 131 22 25 90 56
124 56 18 0 29 -6 33 -19z m-2348 -32 l28 -12 -35 -8 c-19 -4 -51 -9 -70 -11
-30 -3 -35 0 -38 20 -3 20 1 22 42 22 24 0 57 -5 73 -11z m2901 -11 c-2 -13
-7 -22 -13 -22 -5 1 -36 5 -69 9 -82 9 -54 31 42 34 40 1 43 -1 40 -21z
m-4670 -34 c29 -14 68 -45 88 -69 19 -24 60 -63 91 -86 l56 -43 -54 -17 c-30
-9 -85 -31 -124 -50 -78 -37 -161 -48 -218 -30 -19 7 -55 31 -80 54 -153 144
43 340 241 241z m6532 4 c100 -51 116 -164 36 -244 -75 -76 -178 -85 -296 -28
-41 20 -100 44 -130 53 l-55 17 57 42 c31 22 72 61 93 86 74 91 199 122 295
74z m-4730 -10 c0 -7 -25 -20 -55 -29 -53 -16 -56 -16 -65 2 -11 19 -12 18 80
32 14 3 28 5 33 6 4 0 7 -5 7 -11z m2832 -5 c14 -3 16 -9 8 -22 -9 -18 -12
-18 -65 -2 -70 21 -76 45 -7 36 26 -4 55 -9 64 -12z m-3805 -9 c21 -4 21 -6
-16 -39 -42 -38 -79 -107 -88 -162 -3 -18 -10 -36 -15 -39 -13 -8 -56 34 -78
76 -13 27 -40 122 -40 144 0 5 80 25 115 29 30 4 78 0 122 -9z m1234 -11 c14
-16 33 -40 42 -55 l17 -28 -41 0 c-55 0 -104 25 -119 60 -16 38 -7 50 39 50
28 0 43 -7 62 -27z m2305 13 c9 -23 -27 -74 -59 -86 -17 -5 -48 -10 -69 -10
l-39 0 31 45 c17 24 38 49 48 54 26 16 82 13 88 -3z m1326 -8 c37 -11 38 -12
32 -52 -9 -60 -41 -130 -74 -161 -29 -27 -50 -27 -50 2 0 42 -39 121 -81 165
-41 44 -44 49 -25 53 12 2 30 6 41 9 26 6 110 -3 157 -16z m-4082 -14 c14 -8
38 -25 53 -39 l28 -25 -31 -27 c-28 -23 -31 -30 -25 -64 l7 -39 -65 0 c-56 0
-70 4 -97 26 -32 27 -70 91 -70 118 0 31 105 79 150 69 14 -3 36 -12 50 -19z
m3250 -4 c50 -26 55 -35 40 -79 -26 -78 -72 -111 -158 -111 l-64 0 7 39 c6 34
3 41 -24 63 l-30 25 32 30 c18 17 41 35 52 41 32 18 102 14 145 -8z m-3047 -7
c5 -4 -77 -40 -100 -43 -2 0 -3 6 -3 14 0 19 89 44 103 29z m2753 -4 c25 -7
44 -17 44 -25 0 -8 -1 -14 -2 -14 -24 3 -106 39 -101 43 8 9 6 9 59 -4z
m-3685 -26 c9 -25 0 -42 -22 -43 -13 0 -16 -51 -4 -74 11 -21 11 -26 -1 -30
-36 -14 -60 -141 -29 -152 12 -5 10 -12 -10 -36 -29 -35 -31 -45 -8 -70 15
-17 15 -20 -7 -44 l-24 -25 -18 23 c-32 42 -43 121 -29 215 15 109 46 190 87
231 39 39 51 40 65 5z m4623 -5 c41 -41 72 -122 87 -230 13 -93 2 -175 -29
-216 l-18 -23 -23 25 c-22 23 -22 26 -7 41 23 23 20 48 -9 75 -22 21 -23 24
-8 35 30 22 1 155 -35 155 -9 0 -9 6 3 24 15 22 12 76 -4 76 -22 1 -31 18 -22
43 14 35 26 34 65 -5z m-3659 -28 c18 -36 19 -41 2 -34 -7 2 -21 18 -31 34
-15 26 -15 30 -2 30 9 0 22 -13 31 -30z m2659 0 c-16 -26 -44 -48 -44 -34 0
18 33 64 46 64 13 0 13 -4 -2 -30z m-2702 -20 c22 -32 25 -40 12 -40 -9 0 -29
14 -45 32 -23 24 -27 33 -17 39 19 13 21 12 50 -31z m2766 31 c10 -6 6 -15
-17 -39 -16 -18 -36 -32 -45 -32 -13 0 -10 8 12 40 29 43 31 44 50 31z m-2133
-31 l30 -13 -45 -8 c-25 -4 -67 -17 -94 -29 l-48 -22 7 -56 c4 -32 13 -72 20
-89 17 -40 4 -43 -31 -8 -31 31 -71 116 -80 171 l-6 40 64 17 c69 18 136 17
183 -3z m1631 4 l66 -17 -6 -41 c-9 -54 -47 -134 -80 -170 -15 -15 -29 -26
-31 -24 -3 2 3 39 11 81 9 43 14 83 11 90 -7 18 -111 57 -150 57 -35 0 -29 10
16 27 45 16 88 15 163 -3z m-2316 -29 c39 -40 39 -40 -26 -19 -61 21 -62 21
-38 39 26 20 26 20 64 -20z m2884 20 c24 -18 23 -18 -38 -39 -65 -21 -65 -21
-26 19 38 40 38 40 64 20z m-2495 -8 c18 -9 28 -26 36 -64 12 -54 9 -63 -13
-41 -8 8 -40 13 -81 13 -78 0 -111 -19 -111 -63 0 -37 88 -120 132 -124 l33
-3 -47 -32 c-26 -18 -55 -33 -66 -33 -19 0 -92 57 -127 99 -11 14 -39 60 -63
103 l-43 78 28 11 c153 59 179 66 253 68 25 0 56 -5 69 -12z m2271 -20 c36
-14 78 -30 93 -36 l28 -11 -43 -78 c-24 -43 -50 -87 -58 -97 -32 -42 -110
-105 -130 -105 -12 0 -42 14 -68 32 l-47 32 30 6 c44 9 68 25 104 65 57 65 33
112 -61 122 -39 4 -63 1 -86 -11 -17 -9 -33 -16 -35 -16 -3 0 0 24 7 52 8 39
18 56 36 66 37 19 152 9 230 -21z m-3485 -8 c14 -17 24 -33 22 -35 -1 -2 -20
2 -40 8 -29 9 -37 16 -37 35 0 32 23 29 55 -8z m4525 8 c0 -19 -8 -26 -37 -35
-20 -6 -39 -10 -40 -8 -7 7 49 66 63 66 8 0 14 -10 14 -23z m-3737 -33 c59
-20 60 -34 3 -34 -42 0 -56 10 -56 41 0 12 -2 12 53 -7z m2946 4 c-2 -36 -14
-43 -64 -37 l-50 5 35 16 c70 31 80 33 79 16z m-4330 -40 l50 -11 -63 -32
c-76 -39 -196 -125 -196 -139 0 -12 119 -86 138 -86 20 0 13 -15 -23 -50 -20
-19 -54 -63 -76 -97 l-41 -63 41 -63 c22 -34 56 -78 76 -97 37 -36 43 -50 23
-50 -10 0 -116 -59 -137 -77 -15 -12 145 -129 221 -162 l42 -17 -62 -14 c-75
-15 -110 -7 -193 44 -76 48 -152 157 -219 314 l-52 122 37 88 c99 235 173 329
305 386 43 19 64 19 129 4z m5820 -19 c111 -56 184 -150 262 -340 l49 -119
-51 -123 c-69 -166 -141 -266 -229 -317 -84 -50 -108 -55 -182 -40 l-60 13 57
28 c74 37 205 128 205 143 0 12 -119 86 -138 86 -20 0 -13 15 23 50 20 19 54
63 76 97 l41 63 -41 63 c-22 34 -56 78 -76 97 -36 35 -43 50 -23 50 15 0 138
73 138 82 0 20 -191 153 -239 165 -24 6 -23 8 19 19 72 19 103 16 169 -17z
m-5158 -8 c24 -15 57 -42 72 -58 l28 -30 -52 -22 c-69 -30 -112 -36 -149 -21
-69 29 -69 128 0 153 32 12 58 6 101 -22z m4464 4 c41 -40 33 -105 -16 -130
-40 -21 -70 -19 -145 11 l-65 27 28 30 c41 44 113 87 145 87 17 0 39 -10 53
-25z m-4948 -3 c9 -5 -8 -22 -50 -49 -34 -23 -78 -58 -97 -77 -41 -44 -38 -54
38 -107 l52 -37 -25 -16 c-52 -34 -105 -118 -105 -167 0 -36 58 -133 95 -158
l35 -23 -52 -37 c-76 -53 -79 -63 -38 -106 19 -20 60 -52 90 -73 82 -54 82
-55 5 -50 -79 6 -140 32 -244 106 l-63 45 53 33 c29 18 68 35 86 39 41 7 41
18 2 47 -49 35 -129 147 -129 178 0 34 71 133 123 173 20 15 37 32 37 36 0 4
-19 13 -42 20 -42 13 -118 58 -118 71 0 6 130 97 178 124 11 7 124 34 147 35
6 0 16 -3 22 -7z m1278 -2 c9 -14 -75 -34 -89 -20 -8 8 -7 13 4 20 20 13 77
13 85 0z m2841 -1 c3 -6 2 -15 -4 -21 -12 -12 -95 9 -87 22 8 14 82 13 91 -1z
m1284 -5 c70 -16 101 -32 198 -101 l63 -45 -53 -33 c-29 -18 -68 -36 -85 -40
-18 -3 -33 -10 -33 -15 0 -4 16 -20 36 -35 52 -40 124 -141 124 -175 0 -34
-71 -133 -123 -173 -20 -15 -37 -32 -37 -37 0 -5 15 -12 33 -15 18 -4 56 -21
85 -39 l52 -32 -62 -45 c-35 -25 -79 -55 -99 -67 -43 -26 -164 -53 -192 -43
-17 7 -14 11 25 34 55 32 148 115 148 131 0 16 -39 53 -85 81 l-36 21 35 25
c38 25 96 122 96 158 0 41 -57 138 -95 161 l-36 22 52 36 c78 55 81 64 34 112
-22 23 -66 58 -98 77 -40 26 -54 39 -45 45 17 10 23 10 98 -8z m-4228 -39 c32
-52 21 -61 -15 -12 -36 48 -40 57 -25 57 7 0 25 -20 40 -45z m516 -12 l53 -58
-48 -12 c-79 -19 -106 -16 -152 17 -89 65 -76 110 33 110 l60 0 54 -57z m2113
47 c27 -15 24 -34 -11 -73 -46 -53 -78 -62 -161 -48 l-69 13 37 45 c20 24 46
51 57 59 24 16 118 19 147 4z m373 -2 c-18 -32 -56 -78 -64 -78 -5 0 3 20 18
45 15 25 33 45 40 45 8 0 10 -5 6 -12z m-3045 -49 c18 -27 30 -53 26 -57 -3
-4 -27 15 -53 42 -42 45 -44 50 -27 57 11 4 20 8 21 8 0 1 15 -22 33 -50z
m3102 22 c-15 -26 -80 -85 -87 -78 -3 3 8 28 26 55 24 37 37 48 51 45 14 -4
16 -9 10 -22z m-4154 -25 c-25 -25 -58 -68 -72 -96 l-26 -50 26 -26 c14 -14
51 -37 82 -51 47 -22 54 -28 38 -34 -11 -4 -35 -13 -52 -19 -33 -12 -113 -91
-113 -110 0 -26 84 -100 132 -116 l50 -16 -63 -34 c-35 -19 -72 -43 -81 -55
-17 -20 -16 -23 6 -68 13 -25 47 -68 75 -94 l50 -47 -42 0 c-23 0 -61 9 -85
20 -41 18 -152 114 -152 131 0 5 27 27 60 49 33 22 60 44 60 48 0 5 -20 22
-45 40 -31 21 -54 49 -72 86 l-27 55 24 51 c22 47 51 79 111 120 22 16 21 17
-45 58 -36 23 -66 47 -66 55 0 18 93 96 149 125 24 12 62 22 84 22 l41 0 -47
-44z m5218 25 c51 -23 155 -108 155 -126 0 -8 -27 -33 -60 -55 -33 -22 -60
-44 -60 -48 0 -5 20 -22 45 -40 31 -21 54 -49 72 -86 l27 -55 -19 -42 c-26
-57 -50 -86 -97 -116 l-40 -25 66 -44 c36 -24 66 -48 66 -53 0 -17 -111 -112
-152 -131 -24 -11 -62 -20 -85 -20 l-42 0 50 47 c28 26 62 69 75 94 22 45 23
48 6 68 -9 12 -46 36 -81 55 l-64 34 44 13 c45 14 139 94 139 119 0 27 -94
108 -139 120 l-45 12 65 34 c35 19 72 43 81 55 17 20 17 23 -4 62 -27 55 -49
82 -94 118 l-37 29 44 0 c24 0 62 -9 84 -19z m-5100 -89 c0 -92 2 -102 29
-142 l28 -43 -38 7 c-63 12 -145 47 -176 75 -30 27 -30 27 -14 59 34 66 117
142 156 142 12 0 15 -18 15 -98z m4964 84 c34 -18 94 -83 117 -127 16 -33 16
-33 -14 -60 -31 -28 -113 -63 -176 -75 l-38 -7 28 43 c25 38 29 53 32 141 3
55 9 99 14 99 5 0 21 -6 37 -14z m-4079 -41 c66 -67 29 -75 -48 -10 -26 22
-30 30 -21 41 17 20 20 19 69 -31z m219 41 c-20 -18 -67 -33 -80 -25 -12 8
-12 10 1 19 14 9 89 15 79 6z m2781 -6 c13 -9 13 -11 1 -19 -13 -8 -60 7 -80
25 -10 9 65 3 79 -6z m209 -4 c9 -11 5 -19 -21 -41 -77 -65 -114 -57 -48 10
49 50 52 51 69 31z m-2950 -52 c27 -45 27 -44 -8 -44 -17 0 -42 -10 -58 -24
-24 -21 -26 -27 -18 -52 6 -16 26 -38 46 -49 l36 -20 -30 -24 c-23 -20 -34
-22 -55 -15 -30 11 -133 132 -129 153 2 16 118 88 162 100 16 5 31 10 32 10 0
1 10 -15 22 -35z m2726 3 c62 -31 115 -69 115 -81 0 -20 -107 -144 -130 -151
-14 -5 -32 1 -55 16 l-34 23 37 21 c73 41 62 108 -20 121 -21 4 -38 8 -38 10
0 1 10 19 21 39 24 39 30 40 104 2z m-3025 -25 l45 -35 -35 7 c-113 23 -116
26 -87 63 10 14 14 13 77 -35z m3320 7 c0 -8 -45 -22 -110 -34 -30 -5 -32 -4
-15 6 11 7 36 25 54 40 33 27 36 27 53 12 10 -9 18 -20 18 -24z m-3627 -10
c37 -7 67 -16 67 -19 0 -3 -17 -12 -37 -19 -21 -7 -60 -31 -88 -52 -82 -62
-204 -186 -211 -213 -8 -33 27 -81 121 -167 90 -83 131 -112 180 -132 25 -9
34 -17 25 -20 -27 -8 -124 -28 -165 -34 l-40 -5 28 22 c27 21 35 40 18 40 -5
0 -23 -12 -40 -26 -36 -30 -40 -24 -10 18 30 41 13 50 -22 10 -38 -42 -57 -41
-25 1 26 33 33 57 19 57 -5 0 -19 -16 -33 -35 -32 -44 -57 -48 -35 -5 27 51
35 80 25 80 -6 0 -20 -20 -32 -45 -12 -25 -28 -45 -35 -45 -19 0 -16 15 12 56
26 38 32 64 15 64 -5 0 -10 -4 -10 -8 0 -5 -14 -28 -30 -51 -37 -51 -60 -45
-25 7 24 35 33 72 17 72 -4 0 -18 -20 -31 -45 -13 -25 -27 -45 -32 -45 -21 0
-16 21 16 66 19 27 35 52 35 56 0 20 -22 4 -51 -37 -18 -25 -36 -45 -41 -45
-23 0 -16 33 17 75 46 61 35 74 -15 16 l-37 -43 -17 23 c-16 23 -15 24 18 41
19 10 38 23 41 29 13 21 -4 21 -38 0 -19 -11 -39 -21 -44 -21 -17 0 -30 63
-19 93 12 33 19 33 63 6 34 -21 51 -21 38 0 -3 6 -22 19 -41 29 -33 17 -34 18
-18 41 l17 23 37 -43 c50 -58 61 -45 15 16 -33 43 -40 75 -16 75 5 0 24 -20
42 -45 28 -40 49 -56 49 -40 0 3 -16 29 -35 58 -23 33 -31 55 -25 61 11 11 31
-11 52 -56 7 -16 16 -28 20 -28 16 0 7 37 -17 72 -39 57 -10 56 31 -2 20 -27
38 -50 40 -50 12 0 1 32 -22 65 -14 22 -23 44 -19 54 5 12 12 7 30 -24 41 -68
42 -70 49 -63 4 3 -4 29 -18 57 -31 60 -15 70 24 16 15 -19 29 -30 34 -25 5 5
-2 24 -18 45 -34 44 -16 46 23 3 36 -40 52 -31 21 11 -25 37 -20 39 20 9 38
-28 51 -16 19 18 l-24 26 35 -5 c19 -3 65 -11 103 -18z m3952 -3 c-42 -34 -23
-45 20 -12 40 31 44 27 14 -16 -30 -41 -13 -50 22 -10 39 43 57 41 23 -3 -16
-21 -23 -40 -18 -45 5 -5 19 6 34 25 39 53 55 44 25 -15 -28 -55 -29 -60 -15
-60 5 0 21 23 36 51 19 39 28 49 37 40 9 -9 9 -16 -1 -29 -25 -36 -43 -74 -40
-84 2 -6 21 12 41 41 42 58 71 61 32 3 -24 -35 -33 -72 -17 -72 4 0 18 20 31
45 13 25 27 45 32 45 20 0 15 -20 -17 -65 -18 -27 -34 -52 -34 -57 0 -19 19
-5 49 37 18 25 37 45 42 45 24 0 17 -32 -16 -75 -46 -61 -35 -74 15 -16 l37
43 17 -23 c16 -23 15 -24 -18 -41 -35 -18 -52 -35 -43 -44 2 -3 23 5 46 17 23
12 43 20 44 18 17 -24 22 -58 14 -86 -12 -39 -18 -40 -64 -12 -34 21 -51 21
-38 0 3 -6 22 -19 41 -29 33 -17 34 -18 18 -41 l-17 -23 -37 43 c-49 57 -61
45 -16 -15 21 -26 33 -52 30 -61 -10 -24 -21 -18 -55 30 -29 40 -49 56 -49 39
0 -4 16 -29 36 -56 25 -36 33 -53 25 -61 -12 -12 -31 8 -53 56 -7 15 -16 27
-20 27 -16 0 -7 -37 17 -72 35 -52 12 -58 -25 -7 -16 23 -30 46 -30 51 0 4 -4
8 -10 8 -17 0 -11 -24 15 -62 14 -20 25 -42 25 -47 0 -22 -21 -10 -38 20 -45
81 -64 82 -27 1 28 -61 14 -70 -25 -17 -14 19 -28 35 -32 35 -15 0 -8 -22 18
-56 33 -43 13 -45 -25 -2 -34 39 -53 31 -22 -8 28 -36 20 -41 -18 -13 -39 29
-52 17 -20 -17 l24 -27 -30 5 c-107 18 -175 33 -175 38 0 3 24 15 54 28 83 36
286 229 286 271 0 27 -41 76 -134 161 -93 85 -135 115 -178 125 -40 10 -26 22
34 29 29 4 60 11 68 16 8 5 31 10 50 10 l35 0 -30 -24z m-5254 -44 c-36 -52
-90 -92 -121 -92 -41 0 -46 16 -13 46 28 27 143 87 151 79 2 -2 -5 -17 -17
-33z m6536 -18 c42 -25 68 -56 56 -68 -3 -3 -19 -6 -35 -6 -21 0 -43 14 -83
53 -66 64 -72 84 -17 62 20 -9 56 -27 79 -41z m-4197 25 c-14 -10 -46 -36 -72
-57 -26 -20 -47 -41 -48 -46 0 -5 20 -42 44 -82 50 -83 44 -91 -30 -41 -45 30
-114 115 -114 141 0 15 88 74 136 91 22 8 55 14 74 14 l35 0 -25 -20z m1892
-16 c26 -14 57 -36 68 -48 24 -26 21 -39 -29 -104 -26 -35 -105 -91 -127 -91
-7 0 7 32 32 72 24 40 44 77 43 83 0 9 -23 29 -119 106 l-25 20 55 -6 c30 -3
76 -18 102 -32z m-3262 22 c0 -8 -64 -45 -77 -45 -14 0 -18 32 -6 43 7 8 83 9
83 2z m4588 -22 c2 -14 -2 -23 -10 -23 -15 0 -78 37 -78 45 0 4 19 5 43 3 35
-2 43 -7 45 -25z m-4074 -7 c3 -13 21 -47 40 -75 l35 -51 -48 0 c-54 0 -126
-40 -161 -90 -26 -36 -25 -49 3 -82 46 -54 107 -88 158 -88 l48 0 -35 -51
c-19 -28 -37 -62 -40 -75 -5 -21 -12 -24 -53 -24 -100 0 -204 84 -272 218
l-33 64 34 65 c69 134 170 211 276 212 36 1 43 -2 48 -23z m130 17 l39 -6 -59
-18 c-66 -21 -79 -20 -87 10 -4 18 -1 21 31 21 21 0 54 -3 76 -7z m369 -24
c26 -17 47 -34 47 -38 0 -7 -88 -31 -115 -31 -16 0 -75 48 -75 61 0 11 57 38
81 39 8 0 37 -14 62 -31z m2587 16 c17 -9 30 -19 30 -24 0 -16 -61 -61 -82
-61 -19 0 -98 20 -107 27 -7 5 51 48 83 60 41 16 42 16 76 -2z m361 -7 c-10
-26 -23 -26 -96 -5 l-50 14 35 5 c19 3 54 6 77 6 40 2 42 1 34 -20z m155 5
c68 -23 155 -111 195 -198 l31 -66 -30 -62 c-46 -93 -121 -171 -188 -196 -30
-12 -71 -21 -92 -21 -35 0 -38 3 -56 46 -10 25 -30 59 -43 75 l-25 29 41 0
c56 0 98 19 149 69 48 47 51 61 20 103 -35 50 -104 88 -159 88 l-48 0 35 51
c19 28 37 62 40 75 5 20 13 24 43 24 21 0 60 -8 87 -17z m-5239 -21 c-34 -35
-34 -57 -2 -78 24 -15 29 -15 65 -1 47 18 50 11 13 -26 -31 -29 -91 -57 -122
-57 -55 0 -96 51 -83 103 6 22 49 53 99 72 55 20 60 18 30 -13z m6800 2 c54
-21 81 -55 75 -92 -6 -47 -47 -75 -95 -69 -41 6 -112 49 -127 78 -9 16 -7 16
30 2 36 -14 41 -14 65 1 32 21 32 43 -2 79 l-28 29 25 -7 c14 -4 40 -13 57
-21z m-4967 -11 c0 -5 -28 -21 -61 -37 -50 -24 -62 -27 -70 -15 -15 23 -11 28
39 43 52 16 92 20 92 9z m3168 -8 c54 -16 58 -20 43 -44 -8 -13 -19 -10 -70
15 -90 44 -76 59 27 29z m-3144 -24 c3 -5 -16 -25 -43 -44 -43 -31 -51 -34
-67 -22 -16 11 -12 16 41 43 71 37 63 34 69 23z m3142 -66 c-16 -12 -24 -9
-67 22 -27 19 -47 39 -43 44 3 5 33 -5 67 -22 55 -28 59 -33 43 -44z m-2749
36 c10 -11 26 -33 36 -50 l18 -31 -46 0 c-54 0 -118 -29 -141 -65 -15 -23 -15
-27 0 -50 23 -34 72 -58 133 -65 l52 -5 -27 -43 c-15 -23 -34 -44 -43 -47 -21
-7 -126 30 -169 60 -19 13 -60 46 -90 74 l-55 51 55 50 c77 70 118 97 181 120
68 24 74 24 96 1z m2379 -16 c52 -25 184 -130 191 -152 7 -19 -145 -141 -203
-162 -105 -40 -112 -38 -157 38 l-18 31 48 0 c37 0 61 7 96 30 26 16 50 37 53
45 17 43 -74 104 -154 105 l-43 0 18 31 c34 57 53 72 87 65 17 -4 54 -17 82
-31z m-2776 -26 c-40 -32 -72 -41 -49 -12 18 22 72 54 78 47 3 -3 -10 -19 -29
-35z m3084 -8 c11 -12 17 -23 14 -26 -6 -6 -88 56 -88 67 0 12 52 -17 74 -41z
m-2965 -38 c2 -2 -5 -3 -16 -3 -30 0 -79 40 -61 51 8 5 23 -1 43 -19 16 -15
32 -28 34 -29z m2867 20 c-15 -13 -36 -23 -47 -23 -16 0 -14 5 13 29 18 16 39
26 47 23 11 -4 8 -11 -13 -29z m-3876 13 c0 -2 -11 -24 -25 -47 -31 -55 -31
-83 0 -138 14 -24 24 -46 21 -48 -8 -8 -131 19 -167 38 -35 17 -79 62 -79 80
0 16 51 67 84 83 38 18 166 43 166 32z m325 -46 c-31 -62 -31 -78 1 -143 l25
-52 -50 52 c-29 29 -51 61 -51 73 0 17 83 120 97 120 2 0 -8 -22 -22 -50z
m4245 -70 c0 -12 -22 -44 -51 -73 l-50 -52 25 52 c14 29 26 62 26 73 0 11 -12
44 -26 73 l-25 52 50 -52 c29 -29 51 -61 51 -73z m410 82 c30 -15 63 -39 74
-54 18 -25 18 -28 3 -52 -25 -38 -95 -74 -166 -85 -36 -6 -66 -9 -68 -7 -2 2
8 23 22 47 31 55 31 77 0 140 l-26 50 53 -6 c29 -4 78 -19 108 -33z m-4197 3
c38 -16 38 -16 23 -40 -20 -31 -20 -59 -1 -89 15 -23 14 -24 -34 -45 -56 -24
-77 -26 -118 -10 -36 13 -103 78 -103 99 0 20 66 85 100 99 31 13 83 8 133
-14z m3384 14 c36 -13 103 -78 103 -100 0 -20 -70 -86 -106 -99 -37 -15 -60
-12 -114 11 l-49 21 14 29 c19 36 19 54 0 83 -15 23 -14 24 32 44 54 24 80 27
120 11z m-3230 -20 c22 -14 31 -25 25 -31 -12 -12 -95 29 -87 42 9 15 24 12
62 -11z m3008 11 c8 -13 -75 -54 -87 -42 -6 6 3 17 24 30 36 24 54 27 63 12z
m-2564 -52 c33 -18 59 -35 59 -38 0 -3 -29 -21 -65 -39 -74 -38 -110 -38 -171
0 -48 29 -43 57 16 87 60 30 92 28 161 -10z m2234 2 c44 -27 45 -54 3 -80 -59
-36 -102 -36 -174 1 -35 18 -64 36 -64 39 0 3 28 20 63 38 71 38 113 39 172 2z
m-2720 1 c41 -21 30 -31 -36 -31 -43 0 -44 2 -27 30 16 25 19 25 63 1z m3091
2 c21 -29 17 -33 -34 -33 -62 0 -71 10 -30 32 42 22 48 22 64 1z m-4916 -68
c26 -14 67 -71 58 -81 -2 -2 -26 8 -53 21 -95 49 -175 24 -190 -58 -9 -46 6
-72 62 -107 l45 -29 -50 -21 c-62 -27 -124 -90 -153 -155 -58 -130 -7 -317
107 -396 46 -31 154 -64 185 -56 23 6 25 -6 2 -24 -9 -8 -24 -33 -35 -55 -60
-136 121 -186 214 -60 l30 41 -5 -48 c-6 -63 -27 -83 -111 -109 -100 -30 -157
-30 -191 2 -41 38 -58 78 -51 120 6 36 4 38 -37 56 -23 10 -76 53 -118 94 -95
94 -121 152 -127 283 -4 78 -1 98 24 164 15 44 48 103 76 140 53 71 55 75 33
93 -32 27 -1 145 45 170 55 30 195 38 240 15z m1854 7 c3 -5 -13 -17 -35 -26
-39 -17 -41 -17 -54 0 -8 11 -15 22 -15 27 0 10 98 9 104 -1z m3076 1 c0 -5
-7 -16 -15 -27 -14 -18 -15 -18 -54 1 -22 11 -38 23 -34 27 9 9 103 8 103 -1z
m1974 -17 c27 -11 42 -27 56 -58 23 -52 26 -101 5 -118 -21 -18 -19 -26 19
-73 45 -57 80 -121 101 -186 23 -71 17 -204 -14 -283 -28 -73 -130 -185 -205
-224 l-55 -28 6 -46 c5 -42 2 -48 -35 -90 -38 -43 -42 -45 -93 -44 -69 1 -161
28 -195 57 -20 17 -27 35 -31 72 l-5 50 26 -36 c53 -76 151 -104 197 -56 47
49 45 109 -6 157 -14 13 -25 26 -25 29 0 3 22 7 49 8 106 4 208 77 257 187 74
162 6 348 -154 418 l-46 21 36 18 c45 23 78 64 78 96 0 32 -26 80 -49 93 -43
23 -139 3 -183 -37 -14 -13 -18 -13 -18 -2 0 24 39 79 63 89 31 14 177 4 221
-14z m-4514 -47 c-57 -88 -57 -93 -14 -131 20 -18 52 -43 71 -54 42 -26 30
-37 -29 -28 -50 8 -127 46 -159 80 l-22 24 37 55 c35 53 112 115 143 115 7 0
-4 -25 -27 -61z m1931 33 c43 -28 82 -72 109 -121 12 -23 10 -27 -21 -54 -46
-39 -96 -63 -146 -72 -59 -9 -72 3 -30 29 19 11 51 36 72 54 35 31 36 35 25
63 -7 16 -25 47 -39 67 -15 20 -30 43 -35 50 -13 21 18 14 65 -16z m-2427 -1
c9 -14 -62 -54 -81 -47 -19 8 -11 18 32 40 35 18 42 19 49 7z m2963 -19 c22
-14 23 -32 1 -32 -20 0 -78 42 -72 51 7 11 39 3 71 -19z m-4884 -25 c35 -15
97 -64 97 -77 0 -5 -18 -1 -40 7 -36 14 -41 14 -65 -1 -34 -22 -32 -49 8 -82
l32 -27 -30 7 c-100 24 -154 78 -134 134 17 48 71 64 132 39z m1933 -16 c-17
-18 -34 -27 -44 -24 -12 5 -10 11 12 30 15 13 34 23 43 23 13 0 10 -7 -11 -29z
m2900 6 c22 -19 24 -25 12 -30 -10 -3 -27 6 -44 24 -21 22 -24 29 -11 29 9 0
28 -10 43 -23z m1998 12 c34 -16 50 -63 33 -97 -12 -27 -79 -66 -132 -78 l-30
-7 33 27 c39 34 42 67 7 86 -21 11 -31 11 -65 -3 -47 -18 -51 -11 -12 26 51
49 118 68 166 46z m-4994 -31 c44 -36 52 -55 18 -37 -42 21 -85 69 -62 69 3 0
23 -15 44 -32z m3110 24 c0 -11 -39 -47 -67 -61 -35 -18 -27 0 14 36 39 33 53
40 53 25z m-2926 -31 l36 -29 -30 -12 c-34 -14 -60 -45 -60 -72 0 -22 55 -58
88 -58 27 0 27 0 2 -44 -19 -30 -24 -33 -49 -26 -55 16 -171 85 -171 102 0 21
128 168 146 168 1 0 18 -13 38 -29z m2831 -71 c25 -32 45 -63 45 -68 0 -17
-116 -87 -171 -102 -25 -7 -30 -4 -49 26 -25 44 -25 44 8 44 15 0 40 11 57 24
26 21 29 27 20 52 -6 16 -26 37 -46 49 l-36 20 35 27 35 28 28 -21 c16 -11 49
-47 74 -79z m-3003 18 c7 -3 8 -10 4 -16 -5 -9 -24 -4 -68 20 -53 28 -58 33
-43 44 14 11 23 8 57 -16 21 -16 44 -30 50 -32z m3158 37 c0 -3 -27 -18 -59
-35 -43 -21 -62 -26 -67 -18 -4 7 -3 13 3 15 6 2 28 17 49 33 29 21 43 26 56
19 10 -5 18 -12 18 -14z m-4067 -37 c-26 -38 -28 -49 -28 -140 0 -113 -5 -118
-72 -69 -41 29 -79 75 -103 119 -10 20 -9 27 7 44 25 27 88 59 148 74 76 19
78 18 48 -28z m4969 5 c31 -14 66 -35 78 -48 l22 -23 -26 -44 c-40 -69 -112
-128 -154 -128 -4 0 -7 44 -7 98 0 91 -2 102 -28 141 l-29 43 44 -7 c24 -4 69
-18 100 -32z m-4899 -9 c17 -23 18 -27 3 -43 -22 -24 -20 -34 9 -69 22 -26 23
-31 9 -36 -27 -10 -13 -115 19 -142 21 -18 22 -22 10 -41 -18 -27 -7 -70 18
-78 15 -5 18 -12 13 -28 -11 -37 -21 -40 -53 -18 -38 28 -75 105 -95 203 -24
117 -18 195 21 255 19 29 24 28 46 -3z m4786 -61 c31 -122 -17 -310 -98 -387
-32 -31 -43 -29 -55 11 -5 16 -2 23 12 28 25 7 35 54 17 82 -12 18 -12 22 1
27 36 14 60 140 29 152 -12 5 -10 12 10 36 29 35 31 50 9 73 -15 15 -15 18 7
41 l23 25 18 -23 c9 -13 22 -42 27 -65z m-4027 50 c59 -29 72 -43 40 -43 -21
0 -122 29 -122 35 0 10 13 35 19 35 3 0 32 -12 63 -27z m3272 10 c4 -9 1 -20
-6 -24 -21 -13 -119 -31 -126 -24 -4 4 -2 10 3 12 6 2 30 14 55 28 55 29 66
30 74 8z m-4927 -46 c29 -30 53 -59 53 -65 0 -24 -152 55 -170 88 -12 22 -4
30 33 30 23 0 43 -13 84 -53z m2017 41 c22 -6 43 -13 45 -14 2 -2 -10 -14 -25
-28 -42 -37 -89 -48 -130 -31 -42 17 -42 26 -3 59 34 29 53 31 113 14z m2585
-14 c17 -14 31 -30 31 -35 0 -16 -69 -40 -93 -33 -28 8 -97 54 -97 64 0 9 64
28 102 29 15 1 40 -10 57 -25z m2024 20 c11 -11 -11 -41 -47 -62 -60 -35 -126
-62 -126 -50 0 6 24 35 53 65 41 40 61 53 84 53 16 0 33 -3 36 -6z m-4407 -96
c3 -5 -7 -8 -22 -8 -27 0 -76 -31 -114 -73 -25 -26 -26 -69 -1 -91 28 -25 120
-32 159 -12 17 9 33 16 35 16 10 0 -16 -96 -29 -110 -11 -11 -35 -15 -97 -13
-67 1 -98 7 -172 36 -53 21 -89 40 -87 47 1 7 22 47 45 89 44 81 113 156 162
177 27 11 33 9 73 -19 24 -17 46 -35 48 -39z m2264 0 c39 -37 123 -169 132
-207 2 -7 -36 -28 -87 -48 -74 -29 -104 -35 -172 -36 -55 -1 -86 2 -95 11 -11
11 -40 112 -33 112 2 0 20 -7 41 -16 48 -20 126 -14 154 11 35 32 26 68 -31
119 -36 33 -60 46 -81 46 -36 0 -31 10 28 49 43 28 48 29 73 17 14 -8 46 -34
71 -58z m-2855 33 l60 -19 -67 -7 c-81 -9 -88 -7 -77 23 10 27 9 26 84 3z
m3336 -8 c7 -20 5 -23 -20 -23 -15 0 -50 3 -76 7 l-48 6 54 18 c67 21 80 20
90 -8z m-3986 -8 l30 -25 -44 2 c-35 2 -45 7 -52 26 -7 19 -5 22 14 22 12 0
36 -11 52 -25z m4618 4 c-7 -25 -21 -31 -65 -27 l-33 3 35 23 c45 29 70 29 63
1z m-3943 -50 c-14 -11 -37 -29 -52 -39 l-27 -20 -15 22 c-9 12 -14 24 -12 26
6 5 98 30 116 31 10 0 6 -7 -10 -20z m3283 -3 c26 -11 27 -12 12 -34 l-16 -22
-31 22 c-16 13 -42 31 -56 41 l-27 18 45 -6 c25 -4 58 -12 73 -19z m-4918 -13
c22 -12 49 -31 60 -43 l20 -22 -57 7 c-74 9 -149 -14 -201 -64 -50 -46 -66
-79 -68 -133 -3 -75 44 -135 136 -174 50 -20 131 -11 197 22 27 13 48 22 48
19 0 -19 -35 -68 -71 -98 -147 -126 -359 -67 -429 120 -60 162 15 334 170 384
42 14 152 4 195 -18z m6674 11 c63 -18 118 -66 151 -131 35 -67 36 -195 2
-268 -81 -177 -293 -219 -435 -86 -26 23 -57 71 -57 86 0 3 23 -6 51 -20 109
-56 239 -28 304 64 23 33 30 52 28 86 -4 121 -139 218 -276 200 l-52 -7 20 22
c54 60 167 83 264 54z m-5569 -21 l61 -26 -38 -39 c-41 -42 -106 -78 -142 -78
-33 0 -71 43 -71 80 0 88 75 113 190 63z m600 23 c0 -2 -20 -25 -44 -52 -39
-42 -46 -46 -60 -34 -15 12 -15 15 1 33 31 34 103 72 103 53z m599 -14 c20 -7
18 -11 -32 -65 -52 -57 -53 -57 -111 -57 -62 0 -96 12 -96 35 0 21 46 70 82
89 33 17 109 16 157 -2z m2020 3 c33 -17 81 -70 81 -90 0 -23 -34 -35 -96 -35
-58 0 -59 0 -112 58 l-53 57 48 12 c67 16 99 15 132 -2z m489 1 c15 -8 37 -25
50 -39 20 -21 21 -25 7 -37 -18 -15 -30 -7 -76 52 -32 40 -26 47 19 24z m710
-6 c28 -17 32 -25 32 -63 0 -78 -67 -108 -142 -64 -37 22 -120 97 -107 97 2 0
31 11 64 25 73 30 110 31 153 5z m-1358 -93 c16 -34 31 -79 33 -101 2 -37 0
-39 -38 -53 -55 -21 -162 -22 -199 -2 l-29 16 44 6 c24 3 66 16 93 27 l48 22
-7 56 c-4 32 -13 72 -21 91 -19 45 -18 46 16 21 16 -11 43 -49 60 -83z m-2560
-7 c22 -12 22 -13 -31 -39 -59 -29 -103 -86 -114 -152 l-7 -35 70 -32 c78 -36
93 -38 151 -17 44 15 46 13 31 -32 -6 -16 -12 -52 -13 -79 l-2 -49 -50 -13
c-28 -7 -72 -11 -98 -8 -60 6 -155 56 -218 116 -45 43 -49 49 -49 94 0 57 24
155 50 205 24 46 75 95 125 120 l40 19 46 -43 c25 -23 56 -48 69 -55z m140 94
c0 -4 -12 -26 -27 -50 -19 -30 -35 -43 -50 -44 -13 0 -23 2 -23 5 0 3 19 26
41 50 38 41 59 55 59 39z m625 -65 c-23 -97 -21 -108 23 -126 20 -9 62 -22 92
-29 l55 -12 -30 -13 c-40 -17 -150 -15 -200 4 -38 14 -40 17 -38 52 3 48 44
137 78 171 14 14 28 24 31 22 2 -3 -2 -34 -11 -69z m2413 28 c48 -49 51 -57
20 -57 -16 1 -32 14 -50 44 -46 72 -33 77 30 13z m326 -48 c47 -56 77 -137 83
-230 l6 -75 -54 -47 c-110 -96 -214 -131 -313 -105 l-48 13 -4 52 c-2 28 -9
64 -14 78 -16 42 -13 44 40 27 48 -15 54 -15 107 3 65 22 103 49 103 73 0 9
-15 44 -33 77 -27 51 -40 64 -85 86 l-54 26 34 21 c18 11 48 36 67 56 l34 35
47 -24 c26 -13 64 -43 84 -66z m-3756 29 c-48 -48 -165 -267 -175 -329 -5 -34
-3 -37 43 -66 87 -54 274 -123 335 -123 l54 0 -40 -23 c-22 -13 -60 -37 -84
-55 -55 -40 -81 -43 -57 -7 9 13 16 29 16 35 0 21 -16 9 -34 -25 -20 -36 -44
-49 -31 -17 11 29 18 72 11 72 -4 0 -16 -21 -28 -47 -22 -51 -37 -44 -19 9 6
17 9 33 7 36 -10 9 -25 -9 -31 -37 -3 -16 -13 -35 -21 -42 -14 -11 -15 -5 -8
49 4 41 3 62 -4 62 -6 0 -14 -25 -17 -55 -5 -39 -12 -55 -22 -55 -12 0 -14 7
-9 30 3 17 9 44 12 60 11 52 -13 33 -26 -20 -11 -47 -25 -68 -36 -57 -3 2 0
26 7 51 8 33 8 51 1 58 -11 11 -16 0 -27 -64 -6 -36 -18 -48 -29 -29 -3 5 1
31 9 57 8 27 15 56 15 63 0 29 -25 -8 -40 -60 -14 -45 -17 -49 -33 -37 -16 12
-16 16 3 65 12 33 16 54 10 58 -9 6 -22 -18 -43 -78 -6 -14 -11 -16 -27 -7
-25 14 -25 16 5 52 44 52 27 67 -20 18 l-29 -30 -23 22 c-15 14 -23 33 -23 56
l0 35 51 -6 c63 -8 64 13 1 27 -35 7 -42 13 -42 32 0 30 7 30 64 -2 33 -18 46
-22 46 -12 0 7 -20 24 -45 38 -27 15 -45 32 -45 42 0 24 13 23 60 -7 22 -14
44 -25 50 -25 22 0 8 16 -41 48 -37 25 -48 37 -40 45 8 8 22 2 51 -22 56 -45
66 -29 13 19 -66 58 -53 72 19 20 61 -44 70 -36 14 15 -63 57 -52 80 12 25 26
-22 49 -35 51 -29 2 6 -13 24 -33 41 -20 16 -36 36 -36 45 0 12 9 9 44 -11 49
-28 56 -31 56 -17 0 5 -16 19 -35 31 -51 32 -43 46 10 17 56 -32 69 -18 18 19
l-38 26 30 -5 c17 -3 38 -9 48 -12 27 -11 20 10 -9 23 -36 17 -21 32 34 33 26
1 61 5 77 9 65 17 68 12 23 -32z m3855 26 c66 -7 79 -19 43 -36 -29 -13 -36
-34 -8 -23 9 3 31 9 47 12 l30 5 -38 -26 c-51 -37 -38 -51 18 -19 53 29 61 15
10 -17 -19 -12 -35 -26 -35 -31 0 -14 10 -11 57 16 55 33 59 11 7 -34 -19 -18
-34 -36 -32 -42 2 -5 22 6 45 26 40 34 63 44 63 27 0 -4 -21 -25 -46 -46 -25
-21 -43 -40 -40 -43 3 -3 28 9 56 27 28 18 54 30 57 26 3 -3 -14 -23 -38 -45
-54 -48 -46 -65 11 -20 28 23 44 29 51 22 7 -7 -6 -22 -43 -48 -31 -23 -47
-40 -40 -43 8 -2 33 10 56 27 24 16 46 27 50 24 16 -17 2 -41 -39 -63 -25 -14
-45 -30 -45 -37 0 -18 5 -17 50 12 49 31 60 31 60 1 0 -19 -7 -25 -42 -32 -63
-14 -62 -35 1 -27 l51 6 0 -35 c0 -24 -8 -42 -25 -58 l-24 -23 -28 32 c-46 52
-62 35 -17 -18 21 -26 24 -34 14 -46 -16 -20 -29 -19 -37 3 -21 59 -34 83 -43
77 -6 -4 -2 -25 10 -58 19 -49 19 -53 3 -65 -16 -12 -20 -8 -33 37 -16 53 -40
89 -40 60 0 -7 7 -36 15 -63 10 -33 12 -53 5 -60 -14 -14 -21 -3 -28 51 -4 26
-12 46 -17 43 -11 -6 -12 -19 -1 -72 4 -25 3 -38 -4 -38 -12 0 -14 5 -30 68
-12 48 -36 59 -26 12 3 -16 9 -43 12 -60 5 -23 3 -30 -9 -30 -10 0 -17 16 -22
55 -9 77 -30 73 -22 -5 7 -68 -5 -80 -23 -22 -7 20 -16 41 -21 46 -15 17 -19
0 -8 -32 18 -53 3 -60 -19 -9 -12 26 -24 47 -28 47 -7 0 0 -43 11 -72 13 -32
-11 -19 -31 17 -18 34 -34 46 -34 25 0 -6 7 -22 16 -35 26 -40 -1 -31 -96 30
l-85 55 46 0 c68 0 268 72 350 127 30 20 39 32 39 54 0 47 -128 287 -180 337
l-45 44 40 -6 c22 -3 66 -8 98 -12z m-3451 -39 c-27 -46 -42 -56 -42 -31 0 17
47 76 61 76 5 0 -4 -20 -19 -45z m2972 12 c26 -33 33 -57 18 -57 -4 0 -19 20
-34 45 -32 52 -21 60 16 12z m-2874 3 l35 -19 -35 0 c-41 -1 -66 12 -56 28 9
15 15 14 56 -9z m2816 9 c10 -16 -15 -29 -56 -28 l-35 0 35 19 c41 23 47 24
56 9z m1901 -45 c59 -21 109 -79 117 -138 14 -94 -54 -163 -172 -174 -79 -7
-133 18 -212 98 -36 36 -82 79 -104 95 l-39 29 54 17 c30 9 79 29 109 44 64
33 145 55 180 48 14 -2 44 -11 67 -19z m-6438 -24 c46 -22 103 -45 129 -52
l45 -11 -39 -31 c-21 -17 -66 -59 -99 -93 -72 -74 -129 -102 -205 -103 -159 0
-243 148 -146 258 42 48 98 72 172 72 50 0 74 -7 143 -40z m1724 13 c16 -9 -6
-23 -36 -23 -38 0 -62 14 -53 29 7 11 67 6 89 -6z m2843 6 c9 -16 -15 -29 -53
-29 -44 0 -51 17 -11 29 45 13 56 13 64 0z m-3896 -79 c24 -79 45 -114 86
-148 36 -30 36 -30 13 -38 -41 -12 -162 -7 -201 9 -35 15 -37 17 -31 54 11 77
78 190 106 180 5 -1 17 -27 27 -57z m4922 33 c32 -34 53 -77 63 -123 3 -19 9
-43 11 -53 4 -13 -4 -21 -32 -33 -38 -16 -162 -22 -201 -10 -20 6 -18 10 26
54 43 43 62 83 87 180 5 19 18 15 46 -15z m-5042 -45 c-16 -35 -32 -87 -36
-115 -6 -51 -6 -53 22 -64 16 -6 59 -16 96 -23 l67 -11 -34 -24 c-40 -27 -61
-57 -81 -113 -11 -33 -12 -44 -2 -56 24 -28 100 -55 155 -54 l54 0 -51 -55
c-27 -30 -53 -66 -56 -79 -9 -35 32 -76 119 -119 l69 -35 -28 -11 c-40 -15
-138 -6 -204 20 -89 34 -88 30 -35 107 l47 69 -55 16 c-31 9 -76 33 -101 54
-43 35 -46 41 -46 86 0 56 11 90 47 141 13 20 22 41 19 46 -3 5 -32 15 -64 22
-90 19 -91 20 -60 82 43 88 131 175 180 178 4 0 -6 -28 -22 -62z m5113 48 c46
-19 102 -81 140 -154 37 -72 37 -73 -55 -92 -32 -7 -61 -17 -64 -22 -3 -5 5
-24 19 -41 29 -39 47 -96 47 -154 0 -37 -5 -45 -42 -76 -53 -42 -73 -53 -121
-61 -37 -7 -37 -7 -22 -34 8 -15 29 -46 47 -70 37 -49 37 -48 -52 -83 -65 -26
-163 -35 -204 -20 l-28 11 69 35 c87 43 128 84 119 119 -3 13 -29 49 -57 80
l-50 55 53 0 c93 -1 172 43 162 90 -10 40 -60 114 -93 136 l-30 20 67 11 c37
7 80 17 96 23 28 11 29 13 23 63 -4 28 -20 79 -36 114 -17 35 -28 64 -25 64 2
0 19 -6 37 -14z m-4096 -6 c12 0 13 -8 8 -39 -6 -36 -4 -41 24 -62 l31 -23
-27 -29 c-58 -61 -131 -74 -204 -37 -50 26 -56 41 -34 90 33 72 96 114 159
105 16 -3 35 -5 43 -5z m138 -10 c-6 -10 -97 -42 -102 -36 -2 2 -1 14 2 27 5
22 10 24 55 21 28 -2 48 -8 45 -12z m2894 -28 c1 -15 -20 -10 -79 16 l-35 16
50 5 c51 6 62 -1 64 -37z m173 20 c33 -19 84 -112 75 -135 -9 -25 -81 -57
-127 -57 -48 0 -84 17 -123 57 l-27 29 31 23 c28 21 30 26 24 61 -6 37 -5 39
22 43 40 6 94 -3 125 -21z m-4309 6 c-5 -7 -24 -31 -41 -53 -40 -51 -87 -154
-76 -165 5 -5 39 -17 76 -27 l68 -19 -25 -34 c-35 -50 -49 -154 -26 -195 22
-38 95 -94 133 -102 38 -8 44 -20 20 -46 -21 -23 -62 -88 -62 -98 0 -12 115
-61 172 -73 32 -6 59 -16 60 -21 1 -15 -71 -33 -136 -34 -60 -1 -232 34 -241
49 -7 12 56 91 93 116 35 24 30 36 -23 48 -36 9 -101 46 -144 82 -24 20 -31
34 -31 61 0 50 27 136 56 178 13 20 24 40 24 44 0 4 -35 11 -77 14 -121 8
-121 8 -67 86 64 90 110 137 169 171 52 31 95 40 78 18z m5351 -17 c60 -35
106 -81 170 -172 54 -78 54 -78 -66 -86 -43 -3 -78 -10 -78 -15 0 -5 9 -21 20
-36 27 -37 60 -137 60 -183 0 -31 -6 -42 -38 -67 -47 -37 -129 -82 -151 -82
-10 0 -22 -5 -29 -12 -9 -9 -5 -16 17 -29 35 -21 105 -105 97 -117 -23 -37
-312 -63 -364 -34 -13 8 -22 16 -19 18 3 3 33 12 66 20 49 11 151 53 169 69 6
5 -26 62 -53 94 -30 35 -27 46 13 54 38 8 111 64 134 102 23 40 11 135 -25
192 l-25 39 70 18 c38 10 72 24 74 31 6 15 -45 119 -78 161 -53 65 -52 64 -33
64 10 0 41 -13 69 -29z m-4930 -3 c-15 -26 -48 -58 -61 -58 -7 0 -13 11 -13
24 0 17 8 26 33 34 44 14 49 14 41 0z m4482 -4 c17 -4 24 -13 24 -30 0 -30
-20 -31 -47 -1 -32 36 -39 52 -19 44 10 -4 29 -10 42 -13z m-5056 -17 c-41
-32 -170 -205 -170 -228 0 -7 48 -18 142 -34 l38 -6 -20 -39 c-11 -22 -29 -76
-39 -120 l-19 -82 62 -45 c33 -25 82 -55 107 -67 l46 -22 -49 -53 c-70 -76
-75 -89 -42 -101 41 -16 173 -48 229 -55 l49 -7 -54 -34 c-61 -39 -91 -42
-190 -19 -92 22 -204 100 -313 219 l-87 94 0 69 c0 113 17 233 44 318 20 64
36 92 77 138 61 69 79 80 144 87 57 6 67 3 45 -13z m5741 -43 c97 -95 133
-201 145 -420 l7 -131 -87 -96 c-111 -122 -226 -203 -317 -223 -100 -21 -128
-18 -188 20 l-53 34 49 7 c54 7 186 39 227 55 33 12 28 24 -44 103 -49 54 -49
55 -26 61 26 6 166 97 184 118 12 15 -28 186 -52 223 -15 23 -15 23 71 38 47
9 88 18 91 21 9 10 -61 114 -120 180 -32 35 -58 66 -58 68 0 3 28 1 61 -3 56
-6 66 -12 110 -55z m-4364 19 l-37 -38 -21 21 -20 21 48 16 c69 23 72 21 30
-20z m2876 12 l28 -11 -21 -19 c-21 -19 -21 -18 -58 19 l-37 37 30 -7 c17 -4
42 -12 58 -19z m-2819 -30 c-29 -38 -73 -51 -54 -16 12 24 49 51 68 51 8 0 3
-13 -14 -35z m2725 25 c10 -5 26 -21 35 -35 16 -24 16 -25 -3 -25 -10 0 -31
16 -45 35 -27 35 -22 44 13 25z m-2684 -49 c-14 -28 -45 -43 -45 -22 0 12 50
64 56 58 3 -3 -2 -19 -11 -36z m2659 4 c20 -30 20 -35 1 -35 -12 0 -45 47 -45
64 0 12 30 -8 44 -29z m-2562 13 l38 -11 -20 -22 c-23 -25 -41 -77 -31 -93 12
-20 58 -31 90 -22 34 9 36 6 25 -48 -4 -19 -14 -32 -28 -36 -29 -8 -196 24
-202 38 -5 14 40 151 61 183 18 27 16 26 67 11z m2502 -10 c24 -33 69 -179 60
-188 -5 -4 -52 -15 -104 -24 -94 -16 -95 -16 -112 5 -10 12 -18 33 -18 48 0
25 1 26 54 23 47 -3 56 -1 66 18 14 26 0 68 -32 96 -19 18 -19 19 14 30 47 18
55 17 72 -8z m-2209 -10 c49 -13 56 -23 25 -33 -27 -9 -80 -102 -80 -140 0
-17 5 -36 12 -43 31 -31 158 1 191 48 15 21 16 20 22 -34 4 -31 5 -62 2 -70
-3 -8 -32 -24 -64 -37 -46 -18 -84 -23 -181 -27 l-123 -4 6 38 c4 22 11 55 16
74 5 19 9 47 9 61 0 28 49 131 77 162 19 20 28 21 88 5z m1953 -27 c35 -48 56
-105 72 -196 6 -38 14 -81 17 -94 l6 -23 -124 4 c-102 3 -134 8 -184 28 -55
23 -60 28 -63 59 -2 19 -1 50 3 69 6 34 6 34 22 12 33 -47 160 -79 191 -48 7
7 12 26 12 43 0 38 -53 131 -80 140 -30 10 -24 20 18 32 67 19 80 16 110 -26z
m-3014 -30 c-7 -58 -6 -59 36 -105 23 -25 40 -46 36 -46 -14 0 -103 49 -114
63 -9 11 -9 23 2 53 16 47 38 94 42 94 2 0 1 -26 -2 -59z m916 14 c-35 -51
-56 -65 -100 -65 -37 0 -48 21 -29 56 19 35 56 53 112 54 l48 0 -31 -45z m401
-58 l12 -78 94 3 c59 2 92 -1 90 -7 -8 -23 -114 -66 -179 -72 -66 -6 -67 -5
-74 21 -13 51 0 180 21 211 12 20 20 25 21 15 1 -8 8 -50 15 -93z m1388 40 c7
-23 11 -76 9 -117 l-3 -75 -69 2 c-54 1 -81 7 -124 30 -31 15 -57 33 -59 38
-2 6 31 9 90 7 l93 -3 12 64 c7 35 12 77 12 92 0 40 24 17 39 -38z m434 50
c35 -15 63 -57 54 -81 -7 -18 -58 -22 -87 -6 -11 6 -33 30 -50 55 l-31 45 41
0 c22 0 55 -6 73 -13z m873 -84 c14 -48 9 -56 -63 -92 -60 -30 -62 -27 -18 20
39 39 40 42 39 106 -1 64 -1 65 14 37 9 -16 21 -48 28 -71z m-3397 52 c49 -17
22 -28 -33 -14 -28 7 -46 17 -46 26 0 15 4 14 79 -12z m631 18 c0 -5 -15 -37
-33 -73 -37 -75 -68 -100 -130 -107 -39 -5 -46 -3 -52 16 -7 24 23 98 52 123
26 24 163 58 163 41z m1559 -8 c48 -11 76 -24 93 -43 30 -31 51 -92 42 -115
-13 -34 -116 -11 -154 35 -11 13 -26 41 -34 63 -7 22 -17 48 -21 58 -9 21 -10
21 74 2z m631 1 c0 -16 -85 -40 -103 -29 -6 4 10 14 38 24 64 21 65 21 65 5z
m-2807 -73 c-3 -7 -16 -10 -31 -8 -107 17 -103 15 -93 34 10 17 14 17 69 2 40
-10 58 -19 55 -28z m2843 9 c-3 -2 -32 -7 -65 -11 -78 -9 -83 10 -8 31 46 13
53 13 64 0 7 -9 11 -17 9 -20z m-3800 -84 l-6 -61 45 -44 c25 -23 45 -45 45
-47 0 -10 -117 -28 -155 -24 -52 6 -115 36 -115 55 0 22 36 86 62 110 25 23
108 73 122 73 5 0 6 -27 2 -62z m898 47 c64 -9 48 -25 -33 -32 -56 -5 -61 -4
-61 14 0 25 7 32 28 27 9 -1 39 -6 66 -9z m2926 -16 c0 -16 -7 -19 -44 -19
-44 0 -103 16 -94 25 7 7 121 22 131 18 4 -2 7 -13 7 -24z m853 10 c23 -12 55
-33 70 -48 30 -27 67 -91 67 -114 0 -19 -89 -57 -134 -57 -38 0 -136 19 -136
26 0 2 21 24 46 48 l45 44 -7 61 c-3 33 -4 61 0 61 4 0 26 -9 49 -21z m-843
-81 c0 -26 -3 -29 -22 -22 -20 6 -108 53 -108 57 0 1 29 0 65 -1 65 -4 65 -4
65 -34z m-2955 8 c-22 -13 -50 -27 -62 -30 -20 -7 -23 -4 -23 23 l0 31 63 0
62 0 -40 -24z m1052 -88 l35 -56 52 18 c29 10 67 25 84 34 28 15 32 15 32 1 0
-37 -146 -145 -198 -145 -34 0 -84 174 -67 237 l7 28 11 -30 c5 -16 25 -55 44
-87z m831 23 c-5 -63 -49 -171 -71 -171 -30 0 -138 63 -167 98 -41 49 -40 68
2 46 17 -9 55 -24 84 -34 l52 -18 35 57 c20 31 39 69 43 85 11 47 27 4 22 -63z
m-3563 37 c-17 -76 -65 -138 -107 -138 -38 0 -12 56 61 133 43 46 55 47 46 5z
m1721 10 c-9 -13 -24 -37 -33 -55 -14 -28 -18 -30 -39 -21 -13 6 -24 15 -24
19 0 8 99 79 109 79 2 0 -4 -10 -13 -22z m42 -47 c-23 -61 -31 -68 -57 -52
-12 8 -12 14 4 38 22 35 67 84 73 79 2 -3 -7 -32 -20 -65z m2754 -9 c17 -28
19 -36 7 -43 -8 -5 -18 -9 -24 -9 -9 0 -55 105 -55 125 0 14 50 -37 72 -73z
m85 2 c2 -6 -7 -15 -20 -21 -21 -10 -26 -8 -35 10 -6 12 -21 37 -33 56 l-23
34 54 -34 c29 -19 55 -39 57 -45z m1718 -11 c51 -66 43 -104 -15 -73 -24 13
-66 84 -75 129 l-7 34 31 -22 c17 -13 47 -43 66 -68z m-4485 70 c-1 -5 -7 -30
-14 -58 -10 -38 -18 -51 -34 -53 -21 -3 -21 -2 -7 37 19 54 34 81 45 81 6 0
10 -3 10 -7z m2606 -48 c29 -67 29 -67 3 -63 -17 2 -25 15 -35 53 -16 62 -16
65 -3 65 5 0 21 -25 35 -55z m-2577 -14 c-11 -50 -29 -70 -29 -31 0 25 28 95
35 88 3 -3 0 -28 -6 -57z m766 -69 c-7 -40 -54 -95 -96 -113 -28 -11 -33 -10
-45 6 -19 25 -18 66 2 115 13 32 29 48 70 72 30 16 57 35 61 41 10 15 16 -78
8 -121z m1057 67 c59 -38 91 -148 52 -180 -13 -11 -23 -9 -61 11 -58 31 -82
80 -83 168 l0 63 28 -19 c15 -11 44 -30 64 -43z m694 26 c16 -39 18 -75 5 -75
-7 0 -31 81 -31 105 0 16 13 0 26 -30z m-2396 20 c0 -7 -81 -27 -87 -21 -13
12 12 26 48 26 21 0 39 -2 39 -5z m2348 -14 c3 -10 -3 -11 -29 -6 -58 12 -69
25 -20 23 27 -2 46 -8 49 -17z m-2359 -37 c-9 -8 -33 -19 -53 -24 -31 -7 -36
-5 -36 10 0 18 14 23 85 28 18 2 18 1 4 -14z m509 -14 c-26 -35 -37 -135 -19
-169 28 -51 153 6 181 81 l11 33 25 -49 c34 -65 27 -87 -45 -139 -56 -42 -235
-116 -248 -103 -3 3 -14 50 -25 103 -16 83 -17 108 -7 167 14 87 32 106 99
106 l51 0 -23 -30z m1362 10 c11 -11 20 -23 20 -27 0 -5 5 -35 10 -68 9 -55
-3 -169 -26 -247 -7 -23 -9 -23 -109 13 -95 35 -202 107 -211 144 -3 14 4 41
19 71 l25 49 15 -37 c11 -25 32 -48 63 -68 57 -36 98 -39 115 -9 18 34 7 134
-19 169 l-23 30 51 0 c37 0 55 -5 70 -20z m481 10 c12 0 19 -7 19 -20 0 -24
-9 -25 -54 -6 -48 20 -59 41 -16 33 18 -4 41 -7 51 -7z m-4462 -36 c-13 -26
-15 -42 -9 -54 20 -37 56 -33 109 14 21 18 23 19 18 3 -4 -10 -7 -23 -7 -27 0
-16 -62 -80 -91 -96 -38 -19 -62 -18 -93 7 -45 36 -29 100 41 157 49 41 55 40
32 -4z m3263 -83 c12 6 45 34 74 63 50 49 54 50 54 27 0 -40 -36 -103 -90
-156 l-50 -49 -50 49 c-54 53 -90 116 -90 156 0 22 6 18 66 -38 57 -54 69 -61
86 -52z m3270 87 c68 -56 87 -119 47 -159 -52 -52 -165 13 -194 110 l-8 25 32
-27 c67 -56 133 -21 92 49 -11 19 -18 34 -15 34 3 0 23 -15 46 -32z m-4755 -9
c24 -12 61 -23 82 -26 l39 -5 -43 -42 c-46 -44 -65 -91 -65 -162 0 -23 6 -46
13 -52 6 -5 39 -13 73 -17 66 -7 120 8 160 46 l21 20 7 -53 c4 -29 12 -67 18
-85 10 -29 9 -34 -13 -52 -47 -40 -128 -64 -194 -58 -79 8 -194 49 -222 81
-39 46 -52 253 -20 314 18 34 85 112 95 112 3 0 25 -9 49 -21z m3042 -26 c61
-68 76 -131 63 -251 -6 -53 -18 -105 -27 -119 -19 -28 -74 -55 -160 -78 -83
-21 -136 -19 -197 9 -92 43 -90 39 -69 140 17 85 18 86 35 67 32 -36 98 -54
163 -46 32 4 64 12 71 17 15 13 16 80 1 133 -6 22 -28 56 -50 78 -21 22 -39
40 -39 42 0 1 17 5 38 9 20 3 53 14 72 25 19 10 40 19 47 20 6 0 30 -20 52
-46z m-2350 -4 c-17 -75 -50 -112 -96 -107 -24 3 -28 7 -26 33 3 42 32 75 83
95 25 10 46 18 46 19 1 1 -2 -18 -7 -40z m1664 -20 c10 -12 17 -38 17 -60 0
-38 -1 -39 -27 -33 -50 12 -76 43 -91 112 l-9 40 46 -19 c25 -11 54 -29 64
-40z m-2062 10 c-24 -21 -45 -38 -47 -37 -1 2 -4 14 -6 27 -3 22 3 26 42 37
25 7 47 12 50 13 3 0 -15 -18 -39 -40z m2383 25 c36 -6 41 -14 27 -47 -6 -16
-12 -14 -51 23 -25 23 -37 39 -28 36 9 -2 33 -8 52 -12z m-2828 -46 c-46 -80
-84 -370 -53 -410 21 -28 86 -38 238 -38 112 0 156 4 185 16 l38 16 -27 -34
c-15 -18 -38 -49 -51 -68 -13 -19 -34 -44 -46 -55 l-23 -20 7 38 c8 43 -10 53
-20 10 -13 -61 -23 -70 -23 -20 -1 26 -5 47 -11 47 -5 0 -10 -20 -10 -44 0
-60 -16 -67 -24 -11 -10 60 -26 57 -26 -5 0 -27 -4 -50 -8 -50 -5 0 -14 25
-21 55 -7 30 -17 55 -23 55 -10 0 -7 -34 9 -97 4 -17 1 -23 -11 -23 -10 0 -16
9 -16 24 0 43 -12 86 -25 86 -9 0 -10 -15 -4 -57 4 -32 6 -59 4 -61 -9 -10
-25 11 -25 33 0 33 -17 75 -31 75 -6 0 -8 -7 -5 -16 3 -9 9 -33 12 -55 5 -32
4 -39 -10 -39 -12 0 -16 9 -16 34 0 49 -11 96 -21 90 -5 -3 -9 -32 -9 -65 0
-81 -21 -74 -35 10 -11 72 -25 71 -25 -1 0 -48 -9 -58 -37 -40 -10 6 -10 15
-1 39 6 16 8 39 4 49 -6 16 -10 12 -22 -21 -7 -22 -14 -41 -14 -42 0 -2 -8 -3
-18 -3 -30 0 -64 38 -60 68 3 23 8 27 41 30 20 2 37 7 37 12 0 15 -36 21 -63
11 -30 -11 -37 -6 -37 26 0 26 1 26 88 6 12 -3 22 0 22 5 0 11 -61 32 -92 32
-12 0 -18 8 -18 21 0 19 4 21 38 15 20 -3 47 -9 60 -12 12 -4 22 -2 22 4 0 11
-5 13 -77 32 -26 6 -43 17 -43 26 0 16 35 11 82 -12 17 -9 29 -10 33 -4 6 10
-67 49 -92 50 -7 0 -13 5 -13 11 0 11 18 10 93 -7 47 -11 30 14 -20 29 -26 8
-49 19 -51 25 -5 17 24 15 59 -4 17 -8 38 -14 47 -12 11 3 -1 14 -35 31 -62
32 -69 49 -15 36 48 -11 62 -11 62 1 0 5 -16 12 -35 16 -58 11 -55 28 3 21 63
-7 68 7 10 25 l-43 13 40 3 c53 4 71 22 22 22 -20 0 -37 4 -37 9 0 12 37 35
80 50 19 7 51 23 70 36 19 13 36 24 38 24 2 1 -8 -18 -22 -41z m1494 -101 c0
-58 -44 -127 -81 -127 -26 0 -49 51 -49 107 0 42 6 55 47 105 l46 58 19 -52
c10 -29 18 -70 18 -91z m355 73 c28 -38 35 -57 35 -94 0 -57 -23 -106 -50
-106 -21 0 -62 49 -80 94 -9 24 -7 43 12 102 25 82 26 82 83 4z m1483 10 c45
-23 82 -46 82 -51 0 -5 -16 -9 -36 -9 -21 0 -33 -4 -29 -10 3 -5 25 -10 47
-10 47 0 45 -9 -3 -19 -18 -4 -34 -12 -37 -19 -3 -10 8 -11 49 -6 38 5 50 4
45 -5 -4 -6 -17 -11 -29 -11 -26 0 -54 -16 -45 -25 4 -4 27 -3 52 3 25 5 46 6
46 1 0 -5 -24 -21 -52 -35 -58 -30 -52 -44 7 -20 44 19 68 20 63 4 -2 -6 -25
-17 -51 -25 -28 -8 -47 -19 -47 -28 0 -12 6 -12 41 0 23 8 50 15 60 15 33 0
20 -16 -23 -29 -24 -7 -49 -18 -55 -23 -23 -18 -3 -27 30 -14 63 26 77 28 77
12 0 -10 -16 -19 -42 -26 -73 -19 -78 -21 -78 -32 0 -6 10 -8 23 -4 12 3 39 9
60 12 33 6 37 4 37 -15 0 -13 -6 -21 -17 -21 -32 0 -93 -21 -93 -32 0 -5 10
-8 23 -5 86 20 87 20 87 -6 0 -32 -7 -37 -37 -26 -27 10 -63 4 -63 -12 0 -5
16 -9 35 -9 58 0 62 -60 7 -92 -35 -21 -48 -11 -58 40 -4 18 -10 32 -15 32
-13 0 -11 -47 2 -72 9 -16 8 -23 -2 -29 -31 -19 -39 -10 -39 46 0 30 -4 55
-10 55 -5 0 -10 -18 -10 -39 0 -46 -15 -91 -30 -91 -6 0 -10 26 -10 59 0 82
-17 86 -25 6 -6 -48 -11 -65 -22 -65 -12 0 -14 8 -10 38 3 20 8 45 12 55 4 10
3 17 -4 17 -14 0 -31 -42 -31 -75 0 -23 -16 -42 -26 -32 -3 2 -1 30 4 61 7 43
6 56 -4 56 -8 0 -15 -21 -19 -55 -5 -39 -12 -55 -22 -55 -12 0 -14 7 -9 30 3
17 9 44 12 60 4 18 2 30 -4 30 -6 0 -16 -25 -23 -55 -7 -30 -16 -55 -21 -55
-4 0 -8 23 -8 50 0 62 -16 65 -26 5 -8 -54 -19 -50 -19 7 0 24 -5 43 -12 45
-9 3 -13 -10 -14 -44 0 -50 -10 -42 -23 20 -10 43 -28 33 -20 -10 l7 -38 -23
20 c-12 11 -33 36 -46 55 -13 19 -36 50 -51 68 l-27 34 39 -17 c31 -13 70 -17
175 -16 155 1 235 14 250 41 27 50 -6 305 -50 394 -16 32 -24 54 -17 48 6 -5
49 -29 95 -52z m-3923 29 c-15 -46 -6 -119 23 -189 l30 -70 -37 0 c-41 0 -119
36 -170 79 l-34 28 21 34 c25 40 63 77 116 113 47 31 59 33 51 5z m1078 -27
c-16 -43 -23 -46 -57 -33 -16 6 -14 12 24 44 24 20 45 35 47 34 1 -2 -5 -22
-14 -45z m60 1 c-19 -58 -17 -55 -36 -47 -13 5 -14 10 -4 32 13 31 37 62 48
62 4 0 1 -21 -8 -47z m48 3 c-6 -39 -31 -63 -31 -31 0 17 29 79 35 73 1 -1 0
-21 -4 -42z m114 14 c-18 -34 -19 -64 -5 -91 14 -24 46 -24 92 1 l36 19 7 -41
c10 -54 -13 -67 -154 -86 -49 -7 -64 -6 -68 4 -3 8 -3 57 -1 109 3 107 8 115
71 115 l38 0 -16 -30z m1916 0 c10 -34 11 -198 2 -203 -13 -8 -136 12 -180 29
-44 16 -51 30 -37 81 l6 22 36 -20 c20 -10 47 -19 59 -19 41 0 56 60 28 113
l-14 28 46 -3 c41 -3 48 -7 54 -28z m56 -28 c3 -13 3 -26 -1 -29 -11 -11 -23
10 -29 52 -6 37 -5 39 9 20 8 -11 17 -30 21 -43z m58 1 c12 -28 11 -32 -4 -36
-14 -3 -21 6 -34 45 -16 49 -15 49 5 36 11 -7 26 -27 33 -45z m73 3 c21 -19
22 -21 5 -27 -32 -13 -41 -10 -51 19 -5 15 -13 36 -18 47 -7 20 -7 20 17 0 13
-11 34 -28 47 -39z m1063 38 c42 -21 105 -80 130 -121 l22 -36 -34 -29 c-49
-42 -128 -78 -171 -78 l-37 0 27 58 c22 47 27 71 27 139 0 46 1 83 3 83 2 0
17 -7 33 -16z m-4399 -8 c11 -8 15 -20 11 -34 -7 -28 22 -72 47 -72 21 0 27
-15 11 -25 -24 -14 43 -135 75 -135 8 0 14 -10 14 -26 0 -38 18 -64 43 -64 20
0 23 -4 19 -35 -4 -31 -7 -35 -26 -29 -74 23 -134 85 -194 201 -71 136 -70
273 0 219z m888 -9 c0 -31 25 -64 55 -71 31 -8 31 -18 0 -73 -32 -53 -75 -77
-141 -77 -67 0 -84 14 -84 71 0 84 36 134 112 158 58 18 58 18 58 -8z m2609
-6 c53 -25 74 -61 79 -135 5 -73 -1 -78 -88 -78 -66 0 -105 23 -140 85 l-30
52 31 10 c37 13 59 40 59 72 0 20 4 23 28 17 15 -3 42 -14 61 -23z m847 3 c12
-46 -3 -113 -43 -197 -58 -118 -123 -188 -200 -211 -21 -7 -23 -4 -23 28 0 28
4 36 18 36 27 0 42 20 42 57 0 22 5 33 14 33 37 0 97 120 75 147 -9 10 -7 13
10 13 26 0 55 43 48 72 -4 14 0 26 11 34 26 20 41 17 48 -12z m-4231 -34 c18
-7 17 -9 -15 -23 -31 -14 -37 -14 -52 0 -10 9 -15 20 -12 24 6 11 52 10 79 -1z
m4155 2 c0 -5 -8 -16 -17 -24 -16 -14 -22 -14 -53 0 -31 13 -33 15 -15 23 27
10 85 11 85 1z m-3978 -20 l37 -7 -25 -50 c-33 -66 -85 -115 -123 -115 -45 0
-81 34 -81 79 0 48 16 68 65 86 44 16 72 17 127 7z m1578 -18 c-16 -40 -12
-75 15 -131 19 -42 29 -53 48 -53 43 0 117 98 117 156 l0 26 38 -33 c20 -17
40 -37 44 -44 8 -13 -31 -103 -61 -140 -29 -38 -163 -146 -174 -142 -6 2 -34
44 -62 95 -50 88 -83 200 -69 236 5 13 80 54 101 55 9 1 10 -6 3 -25z m613 6
c52 -23 58 -37 46 -111 -8 -52 -70 -189 -108 -238 l-19 -25 -54 42 c-30 23
-71 58 -91 78 -43 43 -100 151 -89 169 4 6 24 27 45 44 36 33 37 33 37 10 1
-57 75 -159 115 -159 41 0 84 111 68 173 -6 20 -7 37 -3 37 4 0 28 -9 53 -20z
m1636 10 c52 -15 81 -47 81 -91 0 -44 -36 -79 -81 -79 -38 0 -91 48 -124 113
l-26 52 38 6 c60 10 76 10 112 -1z m-819 -41 c0 -10 -70 -12 -94 -3 -32 12
-15 19 39 16 30 -2 55 -8 55 -13z m-2200 1 c-20 -13 -100 -13 -100 0 0 6 26
10 58 10 40 0 53 -3 42 -10z m15 -40 c-7 -11 -71 -30 -102 -30 -27 0 -31 26
-5 33 34 9 113 7 107 -3z m2173 4 c12 -4 22 -14 22 -24 0 -15 -6 -16 -45 -9
-44 8 -85 25 -85 34 0 7 81 6 108 -1z m-1539 -92 c1 -27 -7 -42 -35 -70 -35
-35 -37 -35 -50 -17 -27 37 -17 82 29 132 l42 46 6 -29 c4 -16 7 -44 8 -62z
m901 -35 c0 -18 -6 -42 -14 -52 -13 -18 -15 -18 -50 17 -37 37 -43 61 -29 128
l6 33 44 -46 c33 -35 43 -54 43 -80z m-3565 52 l30 -31 -35 8 c-117 28 -212
-26 -196 -112 8 -41 35 -71 71 -79 14 -3 37 -8 53 -11 l27 -6 -31 -26 c-46
-41 -71 -82 -90 -151 -15 -53 -16 -70 -5 -128 16 -85 39 -129 94 -180 101 -93
220 -117 341 -68 17 8 17 7 0 -26 -9 -19 -17 -54 -17 -78 0 -37 5 -48 29 -68
19 -15 42 -23 68 -23 32 0 45 7 75 38 20 21 43 58 51 83 l13 44 12 -40 c17
-56 3 -88 -58 -136 -63 -50 -119 -79 -152 -79 -55 0 -121 54 -127 104 -3 27
-7 30 -68 42 -90 19 -201 76 -258 133 -51 51 -94 129 -113 207 -16 60 -5 185
21 264 l21 61 -31 29 c-26 25 -30 35 -30 83 0 82 28 111 160 164 68 28 105 23
145 -18z m6318 -1 c92 -42 117 -73 117 -145 0 -49 -4 -58 -31 -84 l-31 -29 21
-62 c95 -280 -56 -543 -344 -601 -66 -13 -70 -15 -73 -43 -6 -50 -72 -104
-127 -104 -33 0 -89 29 -152 79 -60 47 -75 80 -59 136 l11 39 13 -42 c18 -60
80 -122 121 -122 96 0 134 76 85 173 -17 32 -18 32 32 11 59 -25 166 -15 233
21 110 60 172 165 174 293 0 94 -22 152 -83 210 l-41 41 38 7 c64 11 91 31
104 73 28 93 -60 153 -185 128 -37 -8 -39 -7 -25 9 8 9 28 26 44 36 37 23 65
19 158 -24z m-4303 12 c-14 -11 -44 -26 -67 -34 -43 -15 -43 -15 -43 9 0 20 7
25 43 33 23 6 53 10 67 11 l25 1 -25 -20z m274 7 c-4 -13 -55 -47 -69 -47 -3
0 -5 7 -3 16 2 9 19 22 38 29 19 7 36 13 37 14 1 0 0 -5 -3 -12z m1624 -32 c2
-10 0 -15 -5 -13 -51 25 -63 33 -67 43 -3 9 4 9 32 -1 21 -6 39 -20 40 -29z
m262 34 c39 -8 50 -15 50 -30 0 -10 -7 -19 -15 -19 -20 0 -75 24 -100 44 -17
13 -18 15 -3 16 9 0 40 -5 68 -11z m-2190 -84 c-53 -53 -69 -57 -70 -15 0 12
87 62 120 69 2 1 -20 -24 -50 -54z m164 -1 c7 -59 3 -74 -20 -74 -15 0 -20 63
-8 108 10 37 21 25 28 -34z m49 -21 c5 -24 3 -33 -7 -33 -15 0 -28 72 -18 98
6 17 12 3 25 -65z m896 28 c24 -56 20 -100 -11 -128 -19 -17 -21 -17 -39 6
-11 13 -22 34 -25 46 -6 23 32 125 46 125 4 0 17 -22 29 -49z m864 -19 c-4
-27 -11 -42 -20 -42 -9 0 -13 7 -10 18 3 9 8 35 12 57 9 54 26 24 18 -33z m51
31 c10 -63 7 -93 -8 -93 -23 0 -27 15 -20 74 8 65 19 72 28 19z m182 -7 c30
-10 32 -12 21 -39 l-12 -28 -55 57 c-51 52 -52 55 -21 39 19 -9 49 -22 67 -29z
m-2100 -92 c-3 -8 -15 -14 -27 -14 -19 0 -21 4 -14 38 4 20 14 53 23 72 l17
35 3 -59 c2 -32 1 -65 -2 -72z m212 114 c-6 -18 -69 -59 -79 -52 -17 10 -9 24
29 43 44 24 55 26 50 9z m242 -27 c0 -82 53 -101 111 -39 l27 28 22 -35 22
-36 -22 -24 c-13 -14 -56 -42 -97 -62 -63 -32 -75 -36 -83 -23 -19 30 -52 126
-57 166 -5 39 -3 42 23 52 49 18 54 15 54 -27z m1090 28 c32 -12 32 -13 27
-58 -6 -55 -55 -171 -71 -171 -18 0 -149 76 -169 98 -17 19 -17 21 -1 56 21
42 27 44 47 13 9 -13 30 -30 48 -37 29 -13 33 -12 50 9 11 14 19 39 19 62 0
43 2 44 50 28z m240 -9 c39 -20 49 -33 31 -44 -10 -7 -73 34 -79 52 -5 17 2
15 48 -8z m195 -42 c20 -70 19 -80 -7 -76 -21 3 -23 9 -26 71 -3 80 10 82 33
5z m-2927 -5 c-15 -31 -28 -33 -43 -8 -8 13 -4 22 20 41 35 28 45 13 23 -33z
m296 -51 c13 -26 47 -48 116 -76 8 -3 -13 -4 -48 -1 -35 3 -71 9 -82 15 -24
13 -34 59 -24 123 l8 52 7 -42 c4 -23 15 -55 23 -71z m3291 -20 c-7 -38 -29
-49 -113 -57 -45 -4 -52 -3 -33 5 99 43 114 60 128 141 l7 44 9 -50 c4 -27 6
-65 2 -83z m275 106 c33 -24 37 -40 16 -57 -16 -14 -28 -1 -44 47 -13 38 -10
39 28 10z m-4994 -4 c49 -24 49 -31 -1 -30 -84 2 -103 -65 -28 -98 l38 -16
-77 3 c-92 3 -118 20 -118 77 0 36 17 61 50 73 31 11 103 6 136 -9z m2022 -45
c-6 -30 -12 -55 -14 -57 -1 -2 -13 0 -28 4 -23 5 -24 9 -14 28 16 31 60 87 65
83 2 -2 -2 -28 -9 -58z m2097 11 c21 -28 36 -53 34 -55 -2 -2 -16 -6 -30 -10
-24 -6 -27 -4 -32 32 -3 21 -9 48 -13 61 -10 34 1 27 41 -28z m2143 30 c27
-17 32 -25 32 -58 0 -60 -25 -76 -118 -79 l-77 -2 38 16 c75 32 56 99 -29 97
-48 -1 -47 5 1 30 42 22 113 20 153 -4z m-5324 -46 c32 -50 89 -96 142 -116
19 -7 34 -15 34 -19 0 -3 -28 -19 -62 -34 -45 -20 -80 -29 -122 -29 l-60 -1
-9 40 c-5 22 -6 63 -4 91 5 50 30 114 45 114 4 0 20 -21 36 -46z m1492 -36
c-17 -11 -28 20 -20 55 l8 32 11 -40 c9 -29 9 -42 1 -47z m1269 15 c-3 -14
-11 -20 -19 -17 -11 4 -11 14 -3 46 10 39 11 40 19 17 5 -13 7 -34 3 -46z
m1532 35 c19 -36 24 -141 10 -192 -8 -28 -9 -29 -66 -23 -57 5 -181 51 -181
68 0 4 13 10 29 14 42 9 111 65 146 119 17 25 33 46 37 46 4 0 15 -15 25 -32z
m-2953 -29 c-25 -46 -29 -49 -41 -33 -19 27 -16 37 20 61 48 32 51 28 21 -28z
m106 1 c0 -38 -4 -50 -15 -50 -18 0 -21 51 -5 81 16 29 20 23 20 -31z m1370
-17 c0 -23 -5 -33 -15 -33 -11 0 -15 12 -15 53 1 48 2 50 15 33 8 -11 15 -35
15 -53z m95 45 c38 -25 42 -35 22 -62 -12 -16 -16 -13 -41 33 -15 28 -25 51
-21 51 3 0 21 -10 40 -22z m-3010 -109 c0 -99 2 -112 20 -126 23 -16 90 -12
157 12 l39 13 -16 -21 c-42 -58 -69 -174 -46 -201 7 -8 38 -17 69 -21 46 -5
68 -2 109 14 l51 20 -26 -57 c-14 -31 -26 -75 -26 -96 -1 -39 0 -41 49 -59 28
-11 79 -23 115 -26 l65 -6 -40 -27 c-22 -15 -64 -32 -94 -39 -51 -11 -166 -8
-178 5 -3 3 4 36 16 75 11 38 21 72 21 75 0 4 -28 6 -62 4 -49 -1 -75 4 -119
24 l-57 26 -12 71 c-9 52 -9 80 -1 103 21 60 20 61 -71 53 l-81 -7 6 59 c10
90 33 155 73 201 19 23 36 42 37 42 1 0 2 -50 2 -111z m1495 66 c0 -39 -3 -45
-25 -51 -14 -4 -28 -4 -31 -1 -8 8 40 97 52 97 2 0 4 -20 4 -45z m1481 -7 c23
-45 21 -53 -16 -44 -22 6 -25 11 -25 52 0 53 11 51 41 -8z m1543 -75 c9 -25
19 -75 22 -110 l7 -65 -83 8 -83 7 7 -29 c16 -75 17 -95 6 -148 -12 -57 -13
-58 -67 -83 -43 -20 -71 -26 -120 -25 -34 1 -63 -3 -63 -7 0 -5 6 -26 13 -47
8 -22 17 -53 20 -71 l6 -32 -56 -7 c-76 -9 -166 9 -217 43 l-41 28 70 6 c39 3
92 16 119 28 48 21 49 22 43 61 -3 21 -16 63 -30 93 l-25 54 52 -19 c37 -15
65 -19 104 -15 77 8 85 18 77 91 -7 59 -18 87 -51 133 l-16 23 41 -15 c68 -24
133 -29 156 -12 18 14 20 27 20 127 l0 112 37 -41 c20 -23 43 -62 52 -88z
m-5252 71 l43 -29 -40 -3 c-59 -5 -121 7 -146 27 -63 51 68 56 143 5z m6051
22 c3 -8 0 -19 -6 -24 -20 -16 -89 -32 -141 -32 -41 0 -47 2 -37 14 37 45 172
75 184 42z m-3136 -78 c9 -10 24 -18 33 -18 21 0 55 37 66 72 l9 26 34 -28 34
-29 -22 -36 c-12 -20 -42 -61 -68 -90 -55 -62 -58 -62 -132 30 -67 84 -69 94
-29 126 l33 27 13 -31 c7 -17 20 -39 29 -49z m-740 -6 c42 -3 42 -4 37 -35
-20 -112 -75 -167 -169 -167 -33 0 -35 2 -51 56 -22 77 -9 119 52 173 l46 41
22 -33 c18 -26 29 -33 63 -35z m1686 19 c35 -31 57 -72 57 -104 0 -35 -30
-117 -43 -118 -59 -6 -135 28 -160 71 -10 17 -22 52 -26 80 l-8 49 41 3 c33 2
45 9 61 34 22 34 23 34 78 -15z m-3235 -13 c-11 -29 -23 -89 -26 -132 l-5 -79
74 5 74 5 0 -86 c0 -57 5 -96 15 -116 21 -42 99 -77 172 -79 32 0 58 -4 58 -7
0 -4 -7 -26 -15 -49 -8 -23 -15 -55 -15 -71 0 -24 5 -29 36 -35 21 -4 77 -4
126 -1 89 6 90 6 72 -14 -49 -54 -135 -84 -271 -95 -58 -5 -83 -3 -83 4 0 22
41 121 55 132 33 27 17 40 -49 40 -36 0 -93 9 -129 20 -56 18 -67 24 -76 52
-13 38 -14 171 -2 216 5 17 9 32 7 32 -1 0 -27 -9 -59 -20 -31 -11 -74 -20
-96 -20 l-39 0 20 73 c28 104 69 186 117 235 23 23 46 42 50 42 5 0 0 -24 -11
-52z m3032 -10 c0 -5 -7 -8 -15 -8 -21 0 -95 38 -95 49 0 10 110 -31 110 -41z
m1645 28 c17 -13 45 -50 62 -83 26 -49 40 -88 79 -225 4 -14 -1 -15 -38 -11
-24 3 -68 14 -98 24 -30 11 -55 19 -56 19 -1 0 2 -17 7 -37 12 -53 11 -174 -2
-211 -15 -43 -97 -71 -211 -72 -60 0 -75 -14 -43 -40 14 -12 55 -110 55 -132
0 -8 -25 -9 -82 -4 -136 10 -223 41 -273 96 l-18 20 90 -6 c49 -4 106 -4 127
0 31 6 36 11 36 35 0 16 -7 48 -15 71 -8 23 -15 45 -15 49 0 3 26 6 58 6 84 1
162 45 178 100 15 49 17 125 5 158 l-10 25 78 -5 c61 -4 79 -3 83 8 8 21 -9
138 -26 188 -23 62 -21 64 29 27z m-3322 -34 c-22 -36 -25 -52 -20 -96 3 -29
12 -69 21 -91 l16 -38 51 6 c72 9 129 43 158 96 l24 43 12 -35 c7 -19 26 -54
43 -78 29 -38 30 -44 17 -68 -43 -82 -133 -129 -267 -138 -131 -8 -144 0 -205
124 -43 87 -48 103 -47 162 0 43 8 82 21 111 l20 45 90 0 91 0 -25 -43z m367
43 c0 -8 -78 -45 -95 -45 -28 0 -15 16 28 32 45 17 67 21 67 13z m255 -41
c-21 -27 -30 -33 -36 -23 -6 10 1 23 22 42 41 37 49 27 14 -19z m718 8 c12
-13 15 -22 8 -27 -15 -9 -29 1 -47 36 -14 29 -14 30 3 21 10 -6 26 -19 36 -30z
m768 -9 c35 -72 36 -138 4 -218 -16 -39 -43 -93 -61 -122 -30 -47 -37 -52 -80
-59 -65 -9 -179 3 -229 25 -50 22 -111 74 -130 111 -13 25 -12 30 17 69 17 24
36 59 43 78 l12 36 24 -43 c30 -53 91 -90 161 -97 l53 -5 18 61 c23 81 22 116
-7 165 l-24 41 89 0 90 0 20 -42z m-1735 -12 c-9 -9 -34 -27 -56 -40 -37 -21
-41 -21 -47 -5 -4 10 -2 19 3 21 5 2 29 14 54 26 50 25 70 24 46 -2z m274 -41
c-18 -25 -25 -28 -36 -19 -12 10 -9 17 18 48 27 29 34 33 36 19 2 -10 -6 -32
-18 -48z m190 19 c5 -8 5 -21 0 -29 -7 -11 -13 -6 -25 22 -27 66 -10 71 25 7z
m285 -5 c-12 -30 -18 -35 -25 -24 -6 10 -5 22 4 35 7 11 16 27 21 35 16 27 16
-7 0 -46z m202 -33 c-9 -11 -15 -8 -34 15 -13 16 -23 39 -23 51 0 21 3 19 34
-15 27 -29 32 -40 23 -51z m343 17 c0 -10 -3 -18 -6 -18 -22 0 -116 68 -110
79 9 15 116 -42 116 -61z m-3580 49 c46 -16 42 -30 -10 -39 -58 -10 -129 -64
-163 -124 -24 -42 -27 -58 -24 -111 2 -53 7 -67 31 -92 41 -43 86 -61 149 -61
72 0 140 30 190 83 l40 42 -6 -42 c-15 -118 -140 -223 -266 -223 -46 0 -127
34 -174 73 -65 53 -100 125 -105 219 -4 72 -2 83 27 142 37 76 87 114 169 132
72 16 99 16 142 1z m5902 -1 c135 -32 205 -132 196 -280 -8 -113 -62 -197
-162 -248 -51 -27 -73 -32 -131 -32 -59 0 -78 4 -117 27 -76 44 -137 134 -138
202 l0 29 41 -43 c55 -56 109 -81 182 -81 67 0 111 18 152 60 42 44 47 127 11
198 -30 60 -102 119 -155 128 -57 9 -66 13 -54 25 27 27 99 33 175 15z m-3196
-94 c-13 -13 -16 -10 -27 26 -6 22 -9 49 -5 59 6 14 11 9 27 -27 17 -38 18
-45 5 -58z m384 65 c-1 -12 -6 -35 -13 -51 -11 -24 -14 -26 -25 -14 -9 12 -8
23 6 56 18 42 32 46 32 9z m-2675 -64 c-37 -99 -62 -200 -52 -210 8 -7 130 10
160 22 17 7 18 4 12 -38 -4 -26 -2 -84 5 -130 l12 -84 76 -22 c42 -12 98 -24
123 -27 l45 -6 -32 -82 c-18 -44 -30 -84 -26 -88 11 -11 209 9 266 26 l46 14
-33 -45 c-43 -60 -61 -71 -153 -90 -76 -15 -81 -15 -174 7 -67 16 -130 41
-215 85 l-120 62 -38 114 c-24 73 -41 151 -49 218 -13 115 -7 152 38 248 22
46 34 58 82 83 32 16 57 29 58 30 1 0 -13 -39 -31 -87z m2078 35 c14 -26 21
-50 16 -53 -12 -8 -49 55 -49 84 0 29 -1 29 33 -31z m807 30 c0 -28 -37 -91
-49 -84 -7 5 37 106 47 106 1 0 2 -10 2 -22z m2134 -60 c13 -18 35 -64 47
-101 21 -64 22 -74 11 -175 -8 -70 -25 -146 -49 -220 l-36 -112 -113 -60 c-78
-41 -146 -69 -214 -87 -99 -26 -101 -26 -181 -10 -94 18 -113 29 -156 90 l-33
45 45 -13 c54 -17 257 -37 267 -27 4 4 -8 44 -26 88 l-32 82 46 5 c25 3 80 16
122 28 l76 23 12 83 c7 46 9 104 5 130 -6 42 -5 45 12 38 30 -12 152 -29 160
-22 10 10 -15 111 -51 209 l-33 87 48 -25 c26 -13 59 -38 73 -56z m-3740 -5
c-7 -79 32 -276 66 -343 19 -37 24 -40 61 -40 23 0 99 19 171 41 98 32 141 51
179 81 27 21 49 37 49 34 0 -2 -7 -20 -15 -40 -8 -19 -20 -58 -26 -85 -5 -27
-16 -57 -23 -67 -12 -16 -14 -14 -20 20 -10 54 -29 34 -22 -23 l6 -46 -21 40
c-25 47 -27 50 -34 43 -3 -3 2 -24 10 -48 18 -50 18 -50 6 -50 -5 0 -16 18
-25 41 -9 22 -21 37 -26 34 -6 -4 -3 -21 6 -45 24 -60 11 -69 -25 -17 -17 26
-36 47 -41 47 -15 0 -13 -6 19 -57 21 -34 26 -50 18 -55 -8 -5 -20 8 -34 37
-22 43 -40 62 -49 52 -3 -3 6 -28 20 -56 29 -56 30 -61 16 -61 -5 0 -19 18
-30 39 -11 22 -25 43 -31 46 -22 14 -20 -5 5 -48 24 -41 25 -57 4 -57 -5 0
-20 25 -33 55 -14 30 -29 55 -35 55 -14 0 -13 -2 14 -65 l25 -55 -24 0 c-18 0
-26 8 -36 38 -13 40 -27 62 -40 62 -5 0 0 -23 11 -50 11 -28 20 -53 20 -55 0
-3 -14 -5 -30 -5 -27 0 -30 3 -24 24 7 28 -3 66 -17 66 -5 0 -9 -21 -9 -46 l0
-47 -35 6 c-32 5 -74 39 -75 59 0 4 19 18 43 30 36 19 39 23 20 26 -13 2 -33
-4 -45 -12 -29 -21 -33 -20 -46 8 -10 23 -9 24 44 31 76 9 70 28 -8 23 -52 -2
-63 0 -66 13 -2 14 9 18 57 24 84 10 80 29 -4 23 -51 -5 -65 -3 -65 8 0 10 14
14 49 14 28 0 53 4 56 10 8 13 -37 23 -80 18 -24 -3 -35 0 -35 9 0 9 15 13 43
14 23 0 51 4 62 9 19 7 19 8 2 15 -10 4 -38 5 -63 1 -35 -4 -44 -3 -44 9 0 11
13 15 55 15 30 0 55 5 55 10 0 6 -19 10 -42 10 -43 0 -78 13 -62 23 5 2 28 8
52 12 58 9 56 30 -3 22 -57 -8 -60 9 -3 20 55 11 61 30 8 25 -49 -5 -51 3 -5
22 19 8 35 20 35 27 0 7 -7 8 -17 4 -45 -18 -56 -19 -46 -2 7 14 124 145 130
146 1 1 -1 -29 -3 -66z m616 56 c0 -18 -88 -101 -100 -94 -23 14 -8 43 38 73
53 34 62 37 62 21z m144 -45 c21 -44 24 -60 14 -71 -14 -18 -22 -6 -43 61 -13
42 -13 66 0 66 2 0 15 -25 29 -56z m152 19 c-13 -70 -15 -74 -37 -60 -10 6
-19 16 -19 20 0 10 50 77 57 77 3 0 2 -17 -1 -37z m604 -40 c0 -7 -9 -17 -19
-23 -22 -11 -25 -5 -36 65 l-6 40 30 -35 c17 -19 31 -40 31 -47z m135 44 c-3
-12 -13 -42 -22 -65 -13 -38 -17 -42 -29 -30 -13 12 -11 22 11 71 25 54 53 70
40 24z m164 2 c48 -30 65 -59 41 -74 -11 -7 -100 76 -100 93 0 17 2 16 59 -19z
m683 -113 c11 -20 2 -20 -44 -1 -11 4 -18 3 -18 -4 0 -7 19 -21 43 -31 l42
-20 -48 3 c-28 1 -46 -2 -44 -8 2 -5 12 -11 23 -13 75 -11 92 -33 19 -24 -58
6 -60 -14 -2 -23 23 -4 46 -10 51 -13 14 -8 -24 -20 -66 -21 -60 -1 -44 -21
17 -21 43 0 55 -3 55 -16 0 -12 -8 -14 -45 -8 -25 3 -53 3 -62 -1 -17 -7 -16
-8 2 -15 11 -5 39 -9 63 -9 27 -1 42 -5 42 -14 0 -9 -11 -12 -35 -9 -43 5 -88
-5 -80 -18 3 -6 28 -10 56 -10 37 0 49 -4 49 -15 0 -12 -11 -14 -59 -9 -35 4
-61 3 -64 -3 -4 -6 17 -13 53 -17 51 -6 60 -10 60 -27 0 -18 -5 -19 -65 -13
-46 5 -65 3 -65 -5 0 -6 11 -11 24 -11 13 0 37 -3 54 -6 28 -6 30 -8 20 -30
-13 -28 -17 -29 -46 -8 -12 8 -32 14 -45 12 -19 -3 -16 -7 21 -26 23 -12 42
-26 42 -30 -1 -22 -40 -53 -73 -59 l-37 -6 0 47 c0 25 -4 46 -9 46 -14 0 -24
-38 -17 -66 6 -21 3 -24 -24 -24 -16 0 -30 2 -30 5 0 2 9 27 20 55 11 27 16
50 11 50 -13 0 -27 -21 -40 -62 -14 -43 -22 -50 -40 -38 -12 7 -11 16 4 52 9
23 19 49 22 56 3 6 0 12 -6 12 -6 0 -22 -25 -36 -55 -22 -51 -34 -63 -47 -49
-3 3 5 25 19 50 24 44 26 63 4 49 -6 -3 -20 -24 -31 -46 -11 -21 -25 -39 -30
-39 -14 0 -13 5 16 61 14 28 23 53 20 56 -10 10 -29 -11 -47 -53 -14 -30 -24
-41 -34 -38 -8 4 -12 11 -8 18 4 6 17 28 30 48 34 55 9 56 -28 1 -36 -52 -49
-43 -25 18 20 48 20 50 1 43 -8 -3 -19 -21 -25 -40 -6 -19 -16 -34 -21 -34
-12 0 -12 0 6 50 8 24 13 45 10 48 -7 7 -9 4 -34 -43 l-21 -40 6 53 c8 60 -11
74 -22 16 -9 -48 -21 -33 -49 62 -12 44 -26 88 -30 98 -6 13 9 5 44 -22 39
-31 79 -50 169 -78 64 -20 140 -39 169 -42 l51 -4 22 41 c31 62 73 283 67 353
l-5 57 60 -62 c32 -34 64 -71 70 -81z m-3204 24 c7 -13 61 -45 106 -64 15 -6
-27 -40 -81 -66 -29 -14 -63 -20 -108 -20 l-65 0 0 50 c0 59 24 112 78 172
l37 41 13 -49 c7 -27 16 -56 20 -64z m1678 24 c-2 -6 -14 -14 -26 -17 -21 -6
-22 -4 -16 39 3 25 9 51 13 57 8 13 36 -62 29 -79z m470 24 c6 -44 5 -46 -15
-41 -30 8 -33 17 -20 63 15 49 27 41 35 -22z m1755 -43 c22 -38 29 -63 29
-104 l0 -53 -78 3 c-68 4 -84 8 -130 38 -28 18 -52 37 -52 41 0 5 15 14 34 20
54 18 85 47 92 88 12 77 13 77 46 45 16 -15 43 -50 59 -78z m-4703 78 l112 -6
-20 -31 c-12 -17 -39 -69 -61 -116 -46 -98 -75 -132 -141 -166 -124 -63 -258
6 -258 134 0 39 46 117 87 145 72 50 86 52 281 40z m2224 -61 c17 -57 14 -71
-19 -72 -13 0 -29 113 -18 130 10 17 17 6 37 -58z m978 30 c0 -50 -13 -102
-24 -102 -32 1 -36 16 -20 66 9 27 18 55 20 62 7 22 24 3 24 -26z m2446 3 c68
-41 109 -121 98 -191 -11 -74 -77 -124 -164 -124 -95 0 -166 58 -226 185 -24
50 -52 104 -63 120 l-21 30 88 6 c176 12 233 7 288 -26z m-3535 -37 c-28 -63
-45 -76 -64 -47 -7 12 1 25 39 62 27 26 50 47 51 47 1 0 -10 -28 -26 -62z
m444 3 c-25 -22 -40 -30 -43 -22 -5 15 71 83 77 68 2 -6 -13 -26 -34 -46z
m315 -18 c0 -19 -5 -16 -45 18 -50 44 -46 69 5 27 22 -18 40 -39 40 -45z m461
-37 c-8 -9 -18 -16 -23 -16 -8 0 -58 101 -58 118 0 4 21 -14 47 -40 40 -40 45
-49 34 -62z m-1167 27 c7 -63 7 -63 -19 -63 -18 0 -25 5 -25 18 0 19 30 115
35 110 1 -2 5 -31 9 -65z m1093 -30 c5 -31 4 -33 -22 -33 -27 0 -28 1 -21 46
3 26 6 56 7 68 1 27 29 -35 36 -81z m-644 46 c-10 -17 -28 -40 -41 -52 -20
-18 -24 -19 -32 -7 -7 11 2 26 32 57 46 47 68 48 41 2z m230 -56 c-3 -7 -11
-12 -17 -10 -18 6 -77 88 -70 99 9 14 94 -72 87 -89z m-463 36 c24 -19 33 -20
61 -10 17 6 33 11 35 11 1 0 7 -14 13 -31 26 -76 5 -142 -62 -193 -47 -36 -69
-33 -100 12 -42 59 -51 95 -36 139 11 34 47 93 56 93 2 0 17 -10 33 -21z m251
-58 c-25 -48 -35 -55 -51 -36 -10 12 -5 24 26 67 33 45 39 49 42 31 2 -12 -6
-40 -17 -62z m144 29 c30 -41 35 -53 25 -65 -7 -8 -16 -12 -21 -9 -22 13 -66
124 -49 124 4 0 25 -23 45 -50z m291 10 c38 -58 38 -112 -1 -176 -38 -61 -62
-66 -115 -24 -48 38 -70 77 -70 123 0 51 19 99 37 93 43 -17 61 -16 84 3 13
11 27 20 31 21 4 0 20 -18 34 -40z m-391 -97 c-7 -47 -11 -49 -38 -29 -17 13
-16 17 10 71 26 53 28 55 31 29 2 -15 1 -47 -3 -71z m68 -29 c-10 -7 -21 -14
-24 -14 -9 0 -19 56 -19 104 l1 41 30 -58 c29 -56 29 -60 12 -73z m-1408 64
c-14 -113 -47 -162 -110 -162 -77 0 -106 86 -49 145 23 25 119 66 157 68 5 1
6 -23 2 -51z m2777 32 c79 -24 119 -62 121 -114 3 -101 -127 -109 -168 -11
-14 32 -31 145 -22 145 3 0 34 -9 69 -20z m-1848 -39 c-7 -56 13 -109 65 -169
l29 -34 38 20 c65 34 111 86 124 142 l12 50 42 -44 c24 -24 53 -47 65 -51 28
-9 27 -46 -3 -110 -29 -62 -81 -109 -162 -146 -90 -40 -131 -50 -161 -38 -35
13 -150 126 -179 174 -25 43 -41 137 -30 178 5 20 16 27 53 37 27 6 59 17 73
25 38 22 41 19 34 -34z m943 15 c57 -19 64 -24 69 -53 8 -44 -4 -120 -26 -163
-22 -41 -133 -152 -174 -172 -38 -20 -86 -9 -184 39 -79 39 -124 83 -153 150
-25 58 -24 90 1 98 10 3 39 26 64 49 l45 44 11 -50 c14 -56 57 -104 123 -138
l42 -20 23 27 c13 16 35 50 49 77 21 42 24 57 19 99 -6 45 -5 49 11 42 10 -5
46 -18 80 -29z m-2191 -6 c8 0 14 -10 14 -24 0 -28 33 -56 67 -56 15 0 21 -5
17 -14 -7 -17 40 -72 77 -92 23 -11 34 -12 50 -3 18 9 20 8 15 -9 -9 -29 31
-75 59 -68 17 4 25 0 33 -20 18 -39 15 -44 -31 -44 -62 0 -147 46 -234 125
-76 69 -113 130 -113 184 0 26 3 32 16 27 9 -3 22 -6 30 -6z m3394 -22 c0
-112 -222 -308 -347 -308 -46 0 -49 5 -31 44 8 20 16 24 33 20 27 -7 69 40 62
68 -4 15 -2 16 14 8 37 -20 137 60 124 100 -4 14 -1 16 20 12 32 -6 65 22 65
54 0 21 4 24 53 33 4 0 7 -14 7 -31z m-3442 -83 c9 -22 39 -61 65 -88 l49 -47
-38 -16 c-43 -18 -98 -14 -177 12 -47 15 -48 17 -42 47 10 49 49 128 81 166
l29 34 8 -34 c5 -19 16 -52 25 -74z m154 75 c-27 -25 -36 -28 -52 -20 -11 6
-20 15 -20 20 0 11 48 28 80 29 25 0 25 0 -8 -29z m3177 19 c36 -13 39 -24 10
-40 -19 -9 -26 -7 -53 20 -28 28 -29 31 -10 31 12 0 35 -5 53 -11z m221 -94
c16 -33 31 -74 35 -90 5 -29 3 -32 -42 -48 -76 -27 -133 -31 -177 -13 l-38 16
45 44 c51 49 81 102 91 160 l7 38 25 -23 c14 -13 38 -50 54 -84z m-2909 -38
c22 -25 35 -31 90 -36 l64 -6 -63 -18 c-34 -10 -71 -15 -82 -12 -25 8 -46 48
-54 100 -6 35 -5 37 6 21 7 -11 25 -33 39 -49z m2194 -6 c-23 -70 -32 -75
-102 -61 -86 18 -98 29 -31 30 62 0 100 22 128 75 21 39 24 13 5 -44z m-1635
-176 c37 -60 85 -126 104 -144 l36 -35 47 23 c56 27 260 187 268 210 3 9 15
27 26 41 l20 25 -4 -35 c-3 -19 -1 -59 4 -88 4 -29 4 -63 0 -75 -9 -22 -9 -22
-21 6 -7 15 -19 27 -27 27 -10 0 -9 -9 7 -40 28 -55 25 -59 -13 -22 -43 42
-55 30 -17 -16 37 -45 30 -55 -10 -17 -40 38 -50 25 -15 -20 15 -20 25 -39 22
-42 -3 -3 -26 9 -51 26 -24 17 -47 27 -51 22 -3 -6 15 -24 39 -41 30 -20 43
-35 40 -45 -4 -8 -7 -15 -8 -15 -2 0 -22 18 -45 40 -57 54 -75 40 -20 -16 50
-51 46 -71 -6 -25 -31 27 -65 41 -65 26 0 -3 18 -21 40 -42 29 -25 38 -39 30
-47 -7 -7 -24 4 -56 39 -31 33 -48 45 -51 37 -3 -8 14 -33 37 -57 39 -39 41
-43 22 -49 -16 -5 -30 3 -60 36 -51 55 -63 45 -18 -14 l35 -45 -25 -12 c-21
-9 -25 -8 -30 7 -10 33 -29 65 -41 69 -9 3 -9 -5 2 -31 8 -19 15 -42 15 -50 0
-20 -48 -29 -82 -15 -33 14 -36 41 -7 70 11 11 18 26 16 32 -2 7 -19 -3 -39
-25 -35 -36 -36 -37 -53 -17 -10 10 -16 21 -14 22 2 2 23 14 47 27 23 13 42
27 42 32 0 12 -6 10 -62 -18 -41 -21 -52 -23 -59 -12 -14 21 -12 23 41 48 28
13 50 27 50 32 0 14 -18 9 -70 -17 -29 -15 -51 -21 -55 -15 -10 17 3 27 50 41
25 7 45 17 45 21 0 13 -38 9 -77 -7 -21 -9 -40 -12 -45 -7 -5 5 15 19 46 33
31 13 56 27 56 32 0 13 -30 7 -71 -14 -23 -11 -43 -18 -46 -15 -14 13 9 34 51
46 25 7 46 17 46 23 0 9 -23 7 -84 -9 -39 -9 -31 8 14 34 22 13 38 27 35 33
-4 5 -23 0 -46 -13 -53 -29 -61 -16 -10 16 56 36 57 63 1 31 -42 -24 -46 -17
-10 20 37 38 28 47 -14 14 l-26 -20 0 20 c0 11 13 46 29 78 16 32 33 71 37 88
7 28 8 26 21 -30 9 -41 35 -93 83 -170z m1184 103 c36 -77 34 -95 -8 -63 -37
28 -40 15 -6 -20 36 -37 32 -44 -10 -20 -56 32 -55 5 1 -31 51 -32 43 -45 -10
-16 -23 13 -42 18 -46 13 -3 -6 13 -20 35 -33 44 -25 53 -43 18 -35 -13 3 -38
8 -55 12 -51 12 -40 -11 13 -25 42 -12 65 -33 51 -46 -3 -3 -23 4 -46 15 -41
21 -71 27 -71 14 0 -5 25 -19 56 -32 63 -27 60 -50 -3 -25 -24 10 -50 13 -60
9 -14 -5 -7 -10 29 -21 49 -15 64 -27 53 -44 -4 -6 -26 0 -55 15 -52 26 -70
31 -70 17 0 -5 23 -19 50 -32 47 -22 62 -42 40 -55 -5 -3 -32 6 -59 20 -55 27
-61 29 -61 17 0 -5 19 -19 43 -32 23 -13 44 -25 46 -27 2 -1 -4 -12 -14 -22
-17 -20 -18 -20 -51 16 -33 35 -62 40 -32 6 9 -10 21 -28 27 -40 10 -20 8 -24
-20 -38 -35 -19 -89 -12 -89 11 0 8 7 30 14 49 8 19 11 35 6 35 -15 0 -40 -43
-40 -67 0 -27 -1 -27 -34 -12 l-25 12 35 45 c45 59 33 69 -18 14 -30 -33 -44
-41 -60 -36 -19 6 -17 10 22 49 23 24 40 49 38 56 -3 9 -21 -5 -50 -35 -26
-28 -50 -46 -56 -42 -16 9 10 48 43 66 14 7 25 17 25 22 0 17 -27 7 -63 -23
-54 -44 -59 -27 -8 25 55 56 37 70 -20 16 -31 -29 -45 -37 -51 -28 -5 8 1 19
16 31 56 41 69 54 59 60 -5 4 -29 -8 -52 -25 -23 -17 -44 -28 -47 -25 -4 3 6
22 21 42 35 45 25 58 -15 20 -40 -39 -47 -27 -10 17 18 22 26 39 20 43 -6 3
-22 -8 -36 -25 -35 -40 -41 -32 -14 19 15 31 17 41 7 41 -8 0 -20 -12 -27 -27
-11 -26 -13 -27 -19 -8 -4 11 -5 61 -2 110 l6 90 26 -43 c32 -53 242 -224 296
-240 37 -11 39 -11 75 26 62 63 166 239 180 305 l12 58 12 -34 c6 -18 23 -58
38 -89z m-2032 0 c-4 -24 -7 -26 -23 -17 -24 12 -24 32 -2 66 l17 26 6 -24 c3
-13 4 -36 2 -51z m2778 5 c0 -7 -9 -17 -20 -23 -19 -10 -20 -8 -20 42 l0 53
20 -30 c11 -16 20 -35 20 -42z m-4050 -10 c0 -35 -8 -75 -19 -100 -16 -34 -23
-41 -41 -36 -19 5 -21 10 -15 42 8 45 55 151 66 151 5 0 9 -26 9 -57z m5323 0
c14 -32 29 -75 32 -95 7 -34 5 -38 -14 -38 -35 0 -61 55 -61 128 0 34 4 62 9
62 4 0 20 -26 34 -57z m-4230 -59 c63 -42 119 -64 170 -64 26 0 47 -4 47 -9 0
-4 -22 -29 -49 -54 -54 -51 -131 -93 -153 -85 -20 8 -66 107 -68 148 -4 53 -1
90 8 90 4 0 24 -12 45 -26z m3151 -12 c3 -21 2 -52 -3 -68 -15 -54 -61 -134
-77 -134 -39 0 -194 112 -194 141 0 5 23 9 50 9 50 0 105 22 175 69 17 12 33
21 36 21 4 0 9 -17 13 -38z m-4341 -25 c-4 -32 -1 -46 12 -57 24 -20 65 -2 84
37 17 35 31 43 31 17 0 -43 -26 -109 -55 -140 -38 -40 -70 -44 -110 -12 -24
19 -27 26 -22 64 4 35 49 134 61 134 2 0 1 -19 -1 -43z m5518 -32 c27 -58 25
-99 -7 -124 -15 -12 -35 -21 -46 -21 -49 0 -101 68 -114 149 -7 45 9 58 20 16
4 -14 18 -32 32 -41 20 -14 29 -15 51 -5 23 11 25 16 20 59 -5 43 -4 45 10 27
8 -11 24 -38 34 -60z m-4360 -121 c18 -32 37 -54 47 -54 26 1 93 34 127 62
l30 26 0 -87 c0 -102 15 -141 53 -141 45 0 102 23 142 57 l40 35 0 -86 c0
-100 10 -116 74 -116 39 0 117 17 160 35 20 9 20 8 0 -26 -11 -18 -39 -48 -63
-66 -42 -33 -176 -81 -189 -69 -3 4 -8 37 -10 74 -2 37 -7 71 -11 75 -4 4 -27
-1 -52 -12 -43 -20 -139 -28 -173 -15 -30 12 -77 101 -83 158 -4 37 -10 56
-19 56 -8 0 -41 -14 -74 -32 -33 -17 -63 -28 -66 -25 -13 12 -34 123 -34 176
0 36 7 70 22 100 l22 45 13 -59 c7 -32 27 -82 44 -111z m3256 52 c5 -53 -10
-169 -27 -195 -6 -11 -21 -7 -69 18 -34 17 -68 31 -75 31 -9 0 -15 -19 -19
-56 -7 -64 -55 -148 -90 -158 -45 -12 -123 -5 -166 14 -24 11 -47 18 -50 15
-3 -3 -8 -37 -12 -76 -3 -38 -9 -72 -12 -76 -12 -11 -150 40 -191 71 -22 17
-49 47 -60 65 -20 34 -20 35 0 26 43 -18 121 -35 160 -35 64 0 74 16 74 116
l0 86 41 -36 c42 -35 131 -65 161 -53 30 11 49 125 33 197 l-7 34 33 -29 c37
-31 104 -64 131 -65 23 0 76 96 90 164 l12 56 19 -30 c10 -16 21 -54 24 -84z
m-2377 39 c15 -81 7 -128 -27 -155 -77 -60 -165 20 -118 109 16 32 103 111
121 111 7 0 17 -29 24 -65z m1494 13 c48 -44 58 -60 63 -95 14 -110 -136 -126
-163 -18 -9 37 14 165 30 165 7 0 39 -24 70 -52z m-1149 -48 c12 0 42 7 65 15
60 21 61 19 5 -20 -84 -60 -101 -58 -157 19 -40 55 -35 61 18 21 25 -19 56
-35 69 -35z m825 61 c0 -20 -81 -111 -99 -111 -17 0 -134 70 -127 77 1 2 22
-4 46 -12 62 -22 84 -19 132 19 50 40 48 39 48 27z m-1642 -119 c34 -2 62 -7
62 -12 0 -4 -18 -31 -40 -59 -44 -55 -95 -87 -150 -92 -33 -4 -36 -2 -48 36
-17 51 -11 116 18 182 l22 53 37 -53 37 -52 62 -3z m2530 -39 c2 -23 -1 -63
-8 -88 -13 -45 -13 -45 -49 -39 -60 11 -106 40 -150 95 -22 28 -41 55 -41 60
0 4 28 9 62 11 l63 3 35 52 35 52 24 -51 c13 -28 26 -71 29 -95z m-3035 -98
c17 -46 25 -47 103 -9 28 13 54 24 57 24 4 0 7 -15 7 -32 0 -41 29 -102 66
-146 28 -31 32 -33 104 -34 52 -1 85 4 107 16 18 9 34 16 38 16 3 0 5 -28 5
-63 0 -35 6 -71 13 -80 12 -17 16 -17 77 3 36 11 89 33 118 49 29 16 52 24 52
18 -1 -22 -70 -107 -113 -138 -40 -29 -180 -99 -198 -99 -12 0 -11 117 0 158
11 37 4 39 -39 17 -45 -23 -186 -40 -217 -26 -27 13 -77 112 -88 176 -13 80
-13 79 -51 45 -34 -29 -105 -70 -122 -70 -5 0 -13 51 -17 113 -6 100 -4 120
15 177 12 36 29 73 38 84 16 17 17 13 24 -70 3 -49 13 -107 21 -129z m3433
130 c16 -41 19 -72 17 -174 -1 -68 -5 -126 -8 -129 -9 -9 -90 34 -129 68 -39
35 -40 34 -50 -36 -8 -59 -60 -170 -87 -184 -30 -16 -140 -5 -207 22 -29 11
-55 18 -58 16 -2 -3 0 -17 6 -32 13 -36 13 -156 0 -156 -6 0 -50 19 -98 42
-94 46 -181 121 -199 173 l-10 30 76 -37 c42 -21 95 -42 119 -47 41 -9 44 -8
53 16 5 13 9 49 9 79 0 30 2 54 5 54 4 0 20 -7 37 -16 20 -11 56 -16 107 -16
74 1 77 2 105 34 38 44 66 105 66 146 0 17 3 32 7 32 3 0 29 -11 57 -24 78
-38 86 -37 103 9 8 22 17 80 20 128 6 84 7 88 23 70 9 -10 25 -40 36 -68z
m-2636 50 c0 -4 -7 -19 -15 -35 -11 -21 -23 -30 -40 -30 -35 0 -31 24 8 49 32
21 47 26 47 16z m1806 -16 c40 -24 45 -49 9 -49 -17 0 -29 9 -40 30 -25 48
-20 51 31 19z m-882 -56 c60 -96 45 -177 -36 -189 -30 -5 -41 -2 -62 19 -39
39 -36 97 10 170 19 31 39 57 44 57 5 0 25 -26 44 -57z m-1027 16 c3 -11 17
-25 30 -30 33 -12 39 -12 57 7 15 14 16 14 16 -5 0 -11 14 -30 31 -42 34 -24
119 -39 119 -20 0 6 5 11 10 11 6 0 10 -7 10 -15 0 -8 11 -22 25 -31 21 -14
30 -15 52 -5 14 6 26 10 27 9 1 -2 10 -13 20 -25 19 -23 19 -23 -17 -38 -56
-23 -127 -18 -223 15 -103 35 -140 57 -188 110 -51 57 -48 68 17 79 5 0 11 -8
14 -20z m2011 15 c35 -10 26 -34 -31 -89 -96 -93 -297 -150 -391 -111 l-39 16
19 23 c10 12 20 24 21 26 2 2 14 -2 28 -9 20 -11 28 -10 50 4 14 9 25 23 25
31 0 8 5 15 10 15 6 0 10 -4 10 -10 0 -32 138 15 147 50 4 16 9 18 24 10 27
-15 69 -1 79 26 10 26 13 27 48 18z m-3500 -41 l37 -16 -40 -6 c-130 -21 -189
-120 -118 -197 23 -25 29 -26 88 -22 l63 6 -25 -55 c-67 -146 4 -335 153 -405
115 -54 235 -47 320 18 l44 34 0 -45 c0 -57 17 -93 51 -111 39 -20 72 -17 104
8 36 28 55 76 55 140 l0 52 25 -34 c35 -48 32 -86 -13 -156 -53 -82 -103 -124
-148 -124 -51 0 -101 24 -118 58 -15 28 -18 29 -53 21 -59 -13 -183 -11 -246
6 -101 26 -227 128 -265 215 -27 62 -52 173 -52 232 0 53 -2 58 -25 64 -52 13
-96 98 -81 157 12 51 146 177 188 177 10 0 35 -7 56 -17z m1420 -23 c26 -46
69 -81 135 -110 52 -23 55 -29 28 -54 -48 -43 -212 -65 -225 -30 -16 42 11
234 33 234 3 0 16 -18 29 -40z m2156 -18 c16 -59 21 -147 10 -176 -13 -35
-177 -13 -225 30 -27 25 -24 31 28 54 66 29 109 64 135 110 13 22 26 40 29 40
4 0 14 -26 23 -58z m1465 44 c38 -20 139 -131 147 -162 15 -59 -30 -149 -79
-156 -20 -3 -23 -10 -29 -90 -10 -136 -42 -218 -117 -302 -42 -45 -121 -98
-176 -116 -44 -15 -233 -20 -277 -7 -24 6 -29 3 -43 -24 -18 -35 -67 -59 -119
-59 -45 0 -95 42 -148 124 -45 70 -48 108 -13 156 l25 34 0 -52 c0 -64 19
-112 55 -140 32 -25 65 -28 104 -8 34 18 51 54 51 111 l0 45 44 -34 c54 -41
129 -61 202 -53 56 6 154 45 188 75 36 32 86 122 102 182 17 69 10 130 -26
200 l-20 39 50 -6 c64 -7 104 9 125 53 32 69 -16 134 -118 157 l-62 15 35 15
c44 20 64 21 99 3z m-3220 -27 c6 -18 11 -40 11 -50 0 -16 -3 -17 -26 -7 -19
9 -24 17 -20 32 3 12 6 29 6 39 0 28 17 20 29 -14z m1333 -19 c3 -30 0 -35
-19 -38 -26 -4 -29 9 -12 57 14 38 27 30 31 -19z m-2480 -45 c-3 -78 10 -210
22 -222 6 -6 133 63 141 77 12 19 22 10 28 -23 3 -19 22 -71 43 -115 l37 -82
71 0 c66 0 109 7 164 24 22 7 22 6 22 -88 l0 -96 27 11 c52 20 189 91 222 116
l33 26 -7 -34 c-14 -64 -34 -98 -77 -129 -68 -50 -108 -67 -185 -79 -98 -15
-148 -14 -282 6 l-113 17 -42 54 c-108 143 -128 173 -162 254 -34 82 -36 91
-32 182 l3 95 45 46 c24 25 44 45 45 45 0 0 -1 -38 -3 -85z m3686 -104 c4 -95
3 -101 -34 -184 -23 -55 -66 -125 -119 -194 l-82 -108 -133 -19 c-113 -17
-146 -18 -231 -9 -85 10 -107 16 -161 49 -89 53 -105 70 -123 130 -8 28 -15
54 -15 57 0 3 23 -10 51 -29 49 -32 143 -81 202 -103 l27 -11 0 96 c0 87 2 96
18 89 35 -13 116 -25 177 -25 l62 0 36 78 c20 42 39 94 43 115 6 36 17 47 29
27 9 -14 135 -83 141 -77 11 11 26 169 22 238 l-3 69 45 -45 45 -45 3 -99z
m-4309 143 l32 -7 -40 -18 c-48 -21 -66 -50 -51 -79 8 -15 21 -20 58 -21 l47
0 -42 -19 c-90 -40 -152 -38 -171 5 -27 59 -1 103 75 130 45 17 50 17 92 9z
m4923 -4 c88 -25 121 -88 76 -145 -19 -24 -26 -27 -67 -22 -25 2 -66 14 -91
25 l-45 21 47 0 c37 1 50 5 58 22 16 29 -9 64 -57 80 l-38 13 30 7 c44 10 47
10 87 -1z m-4777 -53 c18 -9 16 -11 -20 -24 -22 -8 -67 -15 -100 -16 -54 -2
-60 0 -60 18 0 40 119 55 180 22z m2161 -33 c-6 -28 -11 -34 -31 -34 -32 0
-31 13 2 57 30 38 39 31 29 -23z m2556 35 c10 -6 18 -18 16 -27 -3 -13 -14
-17 -53 -17 -64 1 -150 24 -136 38 26 26 129 30 173 6z m-2272 -56 c0 -7 -11
-13 -25 -13 -14 0 -25 4 -25 9 0 5 -3 24 -6 42 l-7 34 32 -29 c17 -17 31 -36
31 -43z m-2084 40 c-15 -51 -26 -113 -26 -158 -1 -147 -81 -250 -201 -261
-145 -14 -217 135 -128 265 42 63 79 85 193 115 53 14 109 32 124 40 36 20 44
20 38 -1z m3875 -2 c24 -11 85 -30 134 -42 84 -20 94 -25 142 -74 75 -77 92
-155 50 -230 -38 -67 -124 -94 -200 -61 -41 17 -101 78 -123 124 -9 19 -20 78
-25 131 -4 53 -12 112 -18 131 -6 19 -11 36 -11 37 0 5 8 3 51 -16z m-4138
-28 c4 -3 -14 -20 -40 -37 -69 -45 -107 -112 -111 -195 -4 -83 23 -136 83
-166 109 -55 248 9 306 140 21 48 22 49 31 25 6 -14 8 -50 5 -81 -8 -95 -56
-169 -138 -214 -72 -39 -180 -42 -247 -7 -109 58 -173 152 -180 266 -3 63 -1
77 25 125 15 30 45 67 65 84 56 45 179 82 201 60z m4492 -24 c57 -28 129 -106
145 -155 18 -53 8 -151 -19 -206 -75 -149 -266 -217 -400 -143 -30 17 -67 48
-83 69 -47 66 -71 175 -49 231 7 17 12 12 31 -32 30 -71 93 -128 166 -149 54
-15 61 -15 111 0 43 14 59 25 80 57 67 101 24 258 -88 321 -21 12 -36 26 -32
31 9 15 86 2 138 -24z m-3001 -21 c40 -1 72 4 94 16 25 13 32 14 32 3 0 -29
-61 -134 -99 -171 l-39 -39 -45 37 c-48 39 -97 119 -97 159 l0 25 47 -14 c25
-8 74 -15 107 -16z m496 22 c0 -6 11 -16 25 -22 22 -10 30 -8 55 11 22 16 30
18 30 7 0 -17 30 -26 92 -26 36 0 51 5 60 19 12 19 12 19 36 0 31 -24 47 -24
72 1 17 17 24 18 45 8 33 -15 32 -32 -4 -57 -65 -46 -175 -65 -294 -50 -133
17 -219 76 -154 107 29 14 37 14 37 2z m880 -22 c36 0 85 7 109 16 l44 16 -6
-38 c-6 -49 -46 -110 -98 -152 l-41 -32 -39 38 c-38 37 -99 142 -99 171 0 11
7 10 32 -3 21 -11 56 -17 98 -16z m-1167 -23 l45 -34 57 15 c32 8 60 12 63 9
3 -3 -2 -31 -12 -63 -14 -43 -30 -69 -67 -104 -27 -27 -55 -48 -63 -48 -19 0
-60 55 -75 99 -13 40 -15 161 -2 161 4 0 29 -16 54 -35z m1017 -27 c0 -81 -13
-125 -48 -167 -27 -33 -28 -33 -58 -18 -47 24 -91 81 -110 142 -10 30 -15 58
-11 61 3 3 20 1 38 -5 53 -18 91 -13 133 19 22 17 43 30 48 30 4 0 8 -28 8
-62z m-703 -46 c21 -6 64 -14 95 -17 l57 -7 -14 -28 c-27 -51 -132 -120 -184
-120 -31 0 -71 116 -71 203 l0 49 40 -35 c22 -18 57 -39 77 -45z m440 4 c-6
-84 -41 -176 -66 -176 -24 0 -123 48 -149 73 -13 12 -30 34 -38 48 l-13 26 57
7 c86 10 129 26 170 62 20 18 39 33 41 34 2 0 1 -33 -2 -74z m-1050 -63 c28
-29 59 -53 68 -53 28 0 62 30 102 87 l38 56 6 -50 c4 -27 13 -62 22 -78 18
-35 62 -85 75 -85 28 0 109 69 133 113 l26 48 16 -58 c18 -63 51 -123 67 -123
25 0 114 41 159 74 l49 36 -7 -32 c-10 -41 -33 -85 -63 -120 -26 -29 -115 -98
-128 -98 -4 0 -20 29 -36 65 -15 36 -31 68 -36 71 -5 3 -29 -12 -53 -35 -29
-26 -63 -46 -99 -56 l-56 -17 -48 34 c-31 22 -57 53 -77 91 l-31 57 -54 -55
c-30 -30 -59 -55 -65 -55 -13 0 -71 96 -90 151 -15 43 -20 130 -8 142 3 4 13
-8 22 -25 8 -18 39 -57 68 -85z m1641 39 c-4 -62 -38 -144 -82 -197 l-25 -30
-58 57 -57 57 -31 -56 c-20 -38 -46 -69 -77 -91 l-48 -34 -56 17 c-36 10 -70
30 -99 56 -24 23 -48 38 -53 35 -5 -3 -21 -35 -36 -71 -16 -36 -32 -65 -36
-65 -12 0 -82 54 -118 91 -36 36 -65 87 -76 132 -8 34 -2 34 32 1 28 -27 107
-68 154 -79 23 -6 30 -2 48 27 11 18 28 59 37 91 l16 58 26 -48 c23 -42 105
-113 131 -113 12 0 61 53 77 84 9 17 18 53 22 80 l6 51 34 -53 c37 -59 74 -92
102 -92 25 0 136 110 145 144 12 47 27 12 22 -52z m-1740 -88 c22 -60 89 -164
105 -164 6 0 35 23 63 51 l52 51 17 -36 c20 -42 97 -114 131 -122 39 -10 123
16 171 53 25 19 46 33 48 31 1 -2 13 -26 25 -55 12 -29 28 -57 35 -63 18 -15
85 27 152 97 58 61 69 55 42 -26 -26 -74 -48 -106 -128 -185 l-70 -70 -21 49
c-12 27 -24 68 -27 92 -3 24 -9 43 -13 43 -3 0 -17 -12 -31 -26 -24 -27 -171
-104 -196 -104 -23 0 -114 92 -145 148 -17 28 -33 52 -36 52 -4 0 -17 -20 -30
-44 -13 -24 -38 -58 -56 -75 l-33 -32 -43 93 c-33 71 -45 111 -50 168 -4 41
-6 80 -4 87 17 56 15 56 42 -13z m1785 -42 c-1 -78 -11 -112 -68 -235 l-27
-59 -34 33 c-19 18 -44 52 -55 76 -11 24 -24 43 -29 43 -4 0 -21 -24 -38 -52
-31 -56 -122 -148 -145 -148 -25 0 -172 77 -196 104 -14 14 -28 26 -31 26 -4
0 -10 -19 -13 -43 -3 -24 -15 -65 -27 -92 l-21 -49 -75 75 c-82 81 -134 169
-134 227 l0 35 53 -55 c67 -70 134 -113 152 -98 7 6 23 34 35 63 12 29 24 54
25 56 2 1 21 -11 42 -27 40 -32 117 -62 158 -62 33 0 123 75 148 123 l20 39
51 -51 c28 -28 57 -51 63 -51 20 0 104 137 117 194 5 22 10 26 19 17 7 -7 11
-41 10 -89z m-2753 -44 c20 -44 26 -132 12 -156 -13 -20 -39 -3 -46 30 -11 53
-3 168 11 168 2 0 13 -19 23 -42z m3718 -63 c0 -65 -10 -99 -30 -103 -36 -7
-40 93 -7 165 l22 48 7 -30 c4 -16 8 -52 8 -80z m-2800 3 c15 -59 88 -218 100
-218 11 0 106 100 115 120 5 12 8 11 18 -5 21 -34 152 -165 165 -165 21 0 147
60 182 87 18 14 34 23 36 22 1 -2 15 -39 30 -82 16 -42 32 -80 37 -83 12 -7
148 130 185 186 l29 44 3 -67 c3 -78 -6 -100 -75 -174 -68 -74 -178 -126 -345
-164 l-131 -29 -118 75 c-162 104 -237 185 -273 291 -14 44 -26 88 -26 99 0
26 43 126 51 117 3 -4 10 -28 17 -54z m1899 -115 c-9 -36 -25 -81 -34 -101
-31 -66 -129 -157 -252 -237 l-118 -75 -130 29 c-168 38 -291 97 -350 168 -70
84 -74 94 -71 169 l3 68 29 -44 c37 -56 173 -193 185 -186 5 3 21 41 37 83 15
43 29 80 31 82 2 3 14 -6 27 -18 22 -21 169 -91 192 -91 12 0 144 134 162 165
12 20 12 20 24 0 17 -29 99 -115 110 -115 12 0 70 127 93 200 9 30 19 62 21
70 3 8 16 -10 32 -44 l26 -58 -17 -65z m-2741 14 c9 -94 -47 -160 -114 -136
-39 13 -56 60 -47 127 8 57 25 92 25 52 0 -14 7 -36 16 -48 31 -44 77 -18 90
52 5 31 9 35 16 22 5 -9 12 -40 14 -69z m3583 -11 c16 -19 44 -21 59 -3 6 6
14 28 20 47 l9 35 13 -59 c17 -82 2 -132 -43 -144 -18 -5 -41 -6 -52 -2 -51
18 -79 113 -54 186 l13 39 10 -41 c6 -23 17 -49 25 -58z m-2826 -28 c4 -35 16
-92 27 -126 37 -117 23 -183 -56 -259 -52 -52 -55 -53 -112 -53 -100 0 -152
62 -152 183 0 84 40 138 170 229 36 25 74 55 84 67 11 11 22 21 26 21 4 0 10
-28 13 -62z m2053 41 c10 -12 57 -49 104 -82 95 -68 103 -76 130 -132 24 -49
26 -144 5 -185 -42 -82 -146 -106 -227 -53 -48 32 -98 126 -98 185 0 21 11 77
25 124 14 47 25 104 25 125 0 44 9 48 36 18z m-2600 -82 c-89 -57 -112 -82
-122 -132 -7 -40 30 -96 74 -109 26 -7 41 -4 80 16 l49 25 -1 -76 c-1 -90 22
-146 88 -214 61 -63 125 -91 218 -95 128 -7 216 37 279 137 16 25 29 37 29 28
0 -36 33 -98 61 -112 45 -24 77 -19 115 19 29 29 34 41 34 83 0 28 -8 64 -19
86 -24 47 -9 47 36 2 34 -34 36 -38 31 -93 -7 -73 -46 -170 -78 -194 -14 -10
-48 -21 -75 -24 -45 -6 -53 -3 -76 20 l-26 26 -69 -36 c-38 -19 -106 -42 -151
-52 -70 -14 -92 -15 -153 -4 -156 27 -271 124 -341 291 -27 64 -29 66 -64 66
-30 1 -44 8 -76 42 -52 56 -53 100 -5 200 48 99 64 113 129 112 44 0 49 -2 33
-12z m3213 -8 c37 -35 91 -157 91 -208 0 -38 -5 -49 -45 -88 -39 -39 -48 -44
-75 -38 -28 6 -31 4 -46 -32 -56 -139 -136 -239 -227 -282 -146 -70 -273 -66
-431 14 -69 35 -70 35 -88 15 -40 -43 -138 -33 -178 17 -24 31 -49 110 -57
180 -5 50 -4 54 30 88 41 41 65 47 41 10 -9 -13 -18 -51 -21 -83 -5 -55 -3
-61 23 -90 20 -22 42 -34 71 -38 36 -5 45 -3 67 19 14 14 31 46 38 71 l12 44
26 -41 c68 -105 181 -154 315 -136 160 22 289 181 271 335 l-6 53 46 -24 c64
-34 89 -32 131 10 32 32 35 40 30 73 -10 56 -31 80 -123 139 -16 10 -11 12 32
12 38 1 56 -4 73 -20z m-3177 -40 c-57 -55 -34 -112 35 -91 21 6 39 10 41 8 7
-8 -87 -77 -115 -85 -74 -21 -121 62 -73 129 21 30 93 70 124 70 17 0 15 -5
-12 -31z m159 7 c-22 -24 -99 -69 -137 -80 -16 -5 -23 -2 -27 13 -10 38 76 89
152 90 l34 1 -22 -24z m2793 10 c58 -18 86 -41 86 -73 0 -21 -4 -23 -22 -18
-40 12 -116 57 -139 81 l-22 24 25 0 c14 0 46 -6 72 -14z m121 -1 c50 -20 95
-73 95 -110 0 -68 -53 -94 -125 -60 -37 18 -102 82 -72 72 46 -17 68 -18 82
-7 24 20 17 55 -17 89 -36 35 -22 41 37 16z m-2829 -45 c-81 -117 -67 -251 34
-325 115 -85 300 45 300 210 0 66 12 65 42 -3 48 -108 12 -251 -79 -316 -59
-42 -97 -54 -165 -55 -114 -2 -241 75 -287 174 -55 117 4 286 122 344 64 32
71 26 33 -29z m2568 36 c49 -20 112 -81 135 -130 30 -60 28 -155 -3 -221 -65
-136 -224 -206 -369 -160 -73 23 -120 63 -153 132 -36 73 -38 166 -6 230 32
62 42 62 42 1 0 -130 102 -238 225 -238 101 0 187 141 156 257 -6 23 -27 64
-46 92 -37 54 -35 59 19 37z m-1268 -78 c10 -23 39 -69 63 -102 65 -89 78
-128 73 -227 -3 -52 -54 -123 -103 -143 -51 -20 -74 -20 -125 3 -49 22 -79 67
-95 140 -16 75 -6 110 60 209 33 48 67 104 77 125 10 20 21 37 24 37 4 0 16
-19 26 -42z m-821 -136 c39 -60 51 -101 32 -119 -8 -8 -19 -13 -25 -9 -15 9
-44 76 -58 133 -12 51 -11 52 7 42 11 -5 30 -27 44 -47z m1636 -15 c-18 -68
-44 -117 -61 -117 -17 0 -28 33 -19 62 11 40 46 95 72 113 11 8 22 13 24 12 1
-2 -6 -33 -16 -70z m-1018 -53 c-32 -95 4 -222 77 -274 66 -47 134 -46 202 2
70 49 107 185 74 276 -17 48 -15 50 23 23 45 -33 83 -115 89 -192 4 -60 1 -75
-22 -123 -52 -106 -155 -161 -286 -154 -203 12 -318 179 -249 363 20 54 75
125 97 125 7 0 5 -16 -5 -46z m-527 -3 c19 -29 26 -53 27 -95 1 -69 -19 -96
-73 -96 -56 0 -80 35 -94 135 l-7 50 26 -43 c22 -35 30 -42 48 -36 42 13 50
26 44 76 -4 26 -4 48 -2 48 3 0 16 -18 31 -39z m1438 0 c-8 -47 7 -77 41 -83
21 -5 30 1 51 36 l26 41 -7 -50 c-17 -126 -80 -176 -147 -117 -38 33 -31 120
14 185 26 36 29 34 22 -12z m-1016 -22 c-23 -42 -90 -109 -108 -109 -19 0 -22
28 -5 60 16 31 96 90 123 90 10 0 7 -11 -10 -41z m613 13 c55 -36 69 -53 72
-88 3 -37 -15 -40 -52 -8 -29 24 -91 105 -91 118 0 13 29 4 71 -22z m-817 -44
c-61 -73 -70 -143 -25 -189 23 -23 38 -29 72 -29 36 0 47 6 81 41 24 25 40 35
42 27 2 -7 9 -31 15 -54 34 -125 190 -225 327 -211 74 8 167 52 210 100 42 46
73 110 74 150 0 35 13 34 39 -2 74 -103 213 -44 186 79 -4 17 -22 51 -42 76
l-34 46 33 -7 c53 -11 75 -39 87 -109 16 -93 14 -147 -9 -183 -28 -46 -73 -67
-132 -60 l-49 6 -63 -64 c-91 -92 -187 -137 -308 -143 -65 -3 -101 0 -140 13
-72 23 -177 93 -223 148 l-37 45 -57 -5 c-51 -5 -60 -2 -98 26 -50 36 -59 68
-49 174 8 88 22 117 66 139 54 27 65 22 34 -14z m77 6 c-23 -30 -27 -74 -9
-92 15 -15 54 -16 63 -2 3 5 15 15 25 20 17 9 15 1 -11 -42 -37 -65 -63 -88
-98 -88 -30 1 -53 16 -69 46 -22 42 17 127 76 166 38 25 47 22 23 -8z m844 6
c39 -24 59 -53 74 -105 16 -57 -16 -104 -70 -105 -29 0 -85 54 -114 109 -18
35 -7 41 20 11 55 -61 116 18 64 84 -25 31 -18 33 26 6z"></path><path d="M3420 6090 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3370 6080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3460 6071 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
-10 -4 -10 -9z"></path><path d="M3340 6050 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M3490 6046 c0 -9 7 -16 16 -16 17 0 14 22 -4 28 -7 2 -12 -3 -12 -12z"></path><path d="M3320 6015 c-10 -12 -10 -15 4 -15 9 0 16 7 16 15 0 8 -2 15 -4 15
-2 0 -9 -7 -16 -15z"></path><path d="M3540 5995 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M3576 5971 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z"></path><path d="M3290 5950 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M3625 5930 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"></path><path d="M3270 5910 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3660 5890 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z"></path><path d="M3230 5860 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3725 5859 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z"></path><path d="M3215 5810 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"></path><path d="M3166 5762 c-3 -6 -1 -14 5 -17 15 -10 25 3 12 16 -7 7 -13 7 -17 1z"></path><path d="M4160 6090 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M4210 6080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M4120 6070 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M4087 6053 c-12 -11 -8 -23 8 -23 8 0 15 7 15 15 0 16 -12 20 -23 8z"></path><path d="M4230 6050 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M4260 6015 c0 -8 7 -15 15 -15 9 0 12 6 9 15 -4 8 -10 15 -15 15 -5
0 -9 -7 -9 -15z"></path><path d="M4040 5995 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M4006 5971 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z"></path><path d="M4285 5950 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"></path><path d="M3950 5930 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z"></path><path d="M4310 5910 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3915 5890 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"></path><path d="M3856 5862 c-3 -6 -1 -14 5 -17 15 -10 25 3 12 16 -7 7 -13 7 -17 1z"></path><path d="M4350 5860 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M4370 5809 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"></path><path d="M4415 5759 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z"></path><path d="M2680 5830 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2720 5826 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z"></path><path d="M2760 5805 c0 -8 4 -15 9 -15 5 0 11 7 15 15 3 9 0 15 -9 15 -8 0
-15 -7 -15 -15z"></path><path d="M2820 5780 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2870 5759 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"></path><path d="M2920 5750 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M2611 5726 c-8 -10 -9 -16 -1 -21 5 -3 13 1 16 10 9 22 -1 29 -15 11z"></path><path d="M2970 5731 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
-10 -4 -10 -9z"></path><path d="M3046 5705 c4 -8 10 -12 15 -9 14 8 10 24 -6 24 -9 0 -12 -6 -9 -15z"></path><path d="M2600 5660 c0 -13 18 -22 24 -11 3 5 -1 11 -9 15 -8 3 -15 1 -15 -4z"></path><path d="M2595 5610 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
0 -7 -4 -10 -10z"></path><path d="M2580 5550 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2580 5500 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M4866 5831 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"></path><path d="M4905 5830 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"></path><path d="M4820 5804 c0 -14 3 -14 15 -4 8 7 15 14 15 16 0 2 -7 4 -15 4 -8 0
-15 -7 -15 -16z"></path><path d="M4760 5780 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M4715 5760 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z"></path><path d="M4650 5750 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"></path><path d="M4610 5724 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
-10 -7 -10 -16z"></path><path d="M4970 5727 c0 -19 16 -31 24 -18 3 5 -1 14 -9 21 -12 10 -15 10 -15
-3z"></path><path d="M4530 5711 c0 -17 18 -21 24 -6 3 9 0 15 -9 15 -8 0 -15 -4 -15 -9z"></path><path d="M4981 5661 c-8 -6 -9 -11 -3 -15 6 -3 14 -1 17 5 9 14 2 20 -14 10z"></path><path d="M4985 5610 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
0 -7 -4 -10 -10z"></path><path d="M5000 5550 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5005 5500 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"></path><path d="M2454 5349 c-3 -6 -1 -16 5 -22 8 -8 11 -5 11 11 0 24 -5 28 -16 11z"></path><path d="M2110 5335 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M2152 5339 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"></path><path d="M2330 5340 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2386 5341 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"></path><path d="M2065 5330 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0
-13 -4 -16 -10z"></path><path d="M2220 5330 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2265 5330 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0
-13 -4 -16 -10z"></path><path d="M2032 5249 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"></path><path d="M2040 5205 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2
-11 -4 -11 -13z"></path><path d="M2060 5140 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2070 5090 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2070 5030 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2090 4980 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M2090 4910 c-13 -8 -12 -10 3 -10 9 0 17 5 17 10 0 12 -1 12 -20 0z"></path><path d="M5130 5341 c0 -25 6 -27 13 -6 4 8 2 17 -3 20 -6 4 -10 -3 -10 -14z"></path><path d="M5200 5336 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z"></path><path d="M5250 5340 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5422 5339 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"></path><path d="M5470 5335 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M5315 5330 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"></path><path d="M5360 5330 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5510 5330 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"></path><path d="M5542 5249 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"></path><path d="M5537 5214 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z"></path><path d="M5520 5140 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5510 5090 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5510 5030 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5495 4980 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"></path><path d="M5490 4910 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3
-15 1 -15 -4z"></path><path d="M2022 4801 c4 -13 18 -16 19 -4 0 4 -5 9 -11 12 -7 2 -11 -2 -8 -8z"></path><path d="M1955 4760 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0
-13 -4 -16 -10z"></path><path d="M1910 4750 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1850 4720 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1810 4704 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z"></path><path d="M1740 4690 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M1705 4680 c-8 -13 -1 -24 14 -19 6 3 7 10 2 18 -6 10 -10 10 -16 1z"></path><path d="M1665 4650 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"></path><path d="M1650 4599 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"></path><path d="M1660 4560 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z"></path><path d="M1680 4525 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2
-11 -4 -11 -13z"></path><path d="M1720 4470 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1750 4430 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M1770 4370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1800 4330 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1830 4260 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5555 4801 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z"></path><path d="M5620 4760 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5670 4750 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5730 4720 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5775 4711 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z"></path><path d="M5832 4689 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"></path><path d="M5886 4681 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"></path><path d="M5915 4650 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z"></path><path d="M5935 4600 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"></path><path d="M5920 4566 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z"></path><path d="M5901 4531 c-10 -6 -10 -10 -1 -16 13 -8 24 -1 19 14 -3 6 -10 7 -18
2z"></path><path d="M5860 4470 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5830 4430 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5810 4370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5780 4330 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5750 4260 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3764 4703 c-10 -10 -32 -18 -48 -18 -28 0 -31 -4 -34 -32 -2 -25 -8
-33 -23 -33 -12 0 -19 7 -19 20 0 26 -27 37 -52 21 -13 -8 -24 -8 -38 -1 -33
18 -59 12 -75 -19 -8 -17 -25 -31 -37 -33 -19 -2 -23 -9 -22 -40 1 -42 -20
-58 -36 -28 -14 26 -47 26 -55 1 -5 -16 -12 -19 -39 -14 -27 4 -36 1 -50 -18
-9 -13 -16 -33 -16 -45 0 -13 -8 -24 -20 -27 -24 -6 -27 -39 -5 -57 12 -10 13
-16 4 -27 -10 -11 -15 -11 -30 3 -24 22 -49 11 -49 -21 0 -20 -5 -25 -24 -25
-38 0 -59 -27 -51 -67 5 -27 2 -38 -11 -47 -21 -16 -12 -46 16 -53 37 -10 18
-38 -25 -38 -25 0 -30 -4 -30 -25 0 -15 -9 -30 -22 -37 -32 -19 -38 -51 -15
-82 18 -24 18 -28 4 -50 -13 -19 -14 -24 -1 -32 8 -5 24 -9 37 -9 15 0 22 -6
22 -20 0 -14 -7 -20 -22 -20 -13 0 -29 -4 -37 -9 -13 -8 -12 -13 1 -32 14 -22
14 -26 -4 -50 -24 -31 -18 -60 15 -78 15 -8 23 -21 22 -39 0 -23 4 -27 30 -27
43 0 62 -28 25 -38 -28 -7 -37 -37 -16 -53 13 -9 16 -20 11 -47 -8 -40 13 -67
51 -67 19 0 24 -5 24 -24 0 -33 16 -41 45 -22 19 13 25 13 34 2 8 -10 7 -17
-4 -26 -22 -18 -19 -51 5 -57 12 -3 20 -14 20 -27 0 -12 7 -32 16 -45 14 -19
22 -22 49 -17 28 6 35 3 40 -14 8 -25 40 -26 57 -1 21 29 42 12 28 -23 -13
-36 -14 -36 15 -36 18 0 31 -9 43 -30 19 -35 51 -47 81 -31 15 9 25 8 39 0 25
-16 52 -5 52 21 0 13 7 20 19 20 15 0 21 -8 23 -32 3 -29 6 -33 31 -31 17 1
36 -6 48 -18 24 -24 52 -24 75 -1 10 9 32 17 48 17 28 0 31 4 34 33 2 24 8 32
23 32 12 0 19 -7 19 -20 0 -26 27 -37 52 -21 13 8 24 8 38 1 33 -18 59 -12 75
19 8 17 25 31 37 33 19 2 23 9 22 40 -1 42 20 58 36 28 14 -26 47 -26 55 -1 5
16 12 19 39 14 27 -4 36 -1 50 18 9 13 16 33 16 45 0 13 8 24 20 27 24 6 27
39 5 57 -11 9 -12 16 -4 26 9 11 15 11 34 -2 29 -19 45 -11 45 22 0 19 5 24
24 24 38 0 59 27 52 68 -4 26 -1 39 11 47 20 15 10 45 -17 52 -37 10 -18 40
25 39 26 -1 30 2 30 26 -1 18 7 31 22 39 34 18 41 56 15 81 -19 20 -19 23 -5
45 14 21 14 26 2 34 -8 5 -24 9 -36 9 -16 0 -23 6 -23 20 0 14 7 20 23 20 12
0 28 4 36 9 13 8 12 13 -1 32 -14 22 -14 26 4 50 24 31 18 60 -15 78 -15 8
-23 21 -22 39 0 23 -4 27 -30 27 -43 0 -62 28 -25 38 28 7 37 37 16 53 -13 9
-16 20 -11 47 8 40 -13 67 -51 67 -19 0 -24 5 -24 25 0 32 -25 43 -49 21 -15
-14 -20 -14 -30 -3 -9 11 -8 17 4 27 22 18 19 51 -5 57 -12 3 -20 14 -20 27 0
12 -7 32 -16 45 -14 19 -22 22 -49 17 -28 -6 -35 -3 -40 14 -8 25 -40 26 -57
1 -21 -29 -42 -12 -28 23 5 15 10 29 10 30 0 2 -13 6 -30 9 -19 4 -35 17 -45
37 -16 32 -41 38 -75 20 -14 -7 -25 -7 -38 1 -25 16 -52 5 -52 -21 0 -13 -7
-20 -19 -20 -15 0 -21 8 -23 33 -3 28 -6 32 -31 30 -17 -1 -36 6 -48 18 -24
24 -52 24 -75 2z m62 -28 c22 -34 5 -78 -28 -73 -32 4 -46 53 -22 79 23 25 30
24 50 -6z m-98 -34 c3 -8 -1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2
15 -10 17 -17z m172 10 c0 -12 -20 -25 -27 -18 -7 7 6 27 18 27 5 0 9 -4 9 -9z
m-356 -14 c36 -26 16 -104 -21 -81 -27 17 -36 39 -29 67 7 30 23 34 50 14z
m76 -1 c0 -7 -7 -19 -15 -26 -16 -13 -20 -3 -9 24 8 20 24 21 24 2z m380 5 c0
-5 3 -18 7 -28 6 -16 5 -16 -10 -4 -19 15 -23 41 -7 41 6 0 10 -4 10 -9z m98
-3 c29 -29 -6 -98 -43 -85 -22 9 -20 73 3 86 22 13 26 13 40 -1z m-388 -67 c0
-17 -4 -33 -10 -36 -5 -3 -10 3 -10 14 0 10 -3 26 -6 35 -4 11 -1 16 10 16 11
0 16 -9 16 -29z m206 13 c-3 -9 -6 -25 -6 -37 0 -18 -2 -19 -10 -7 -16 24 -12
60 6 60 11 0 14 -5 10 -16z m-256 -26 l-1 -33 -14 25 c-18 32 -18 40 0 40 10
0 15 -10 15 -32z m100 15 c0 -31 -12 -63 -21 -57 -16 9 -11 74 6 74 8 0 15 -8
15 -17z m110 -17 c0 -41 -15 -56 -24 -23 -10 37 -7 57 9 57 10 0 15 -10 15
-34z m100 27 c-1 -5 -7 -19 -15 -33 l-14 -25 -1 33 c0 22 5 32 15 32 8 0 15
-3 15 -7z m195 -12 c-3 -6 -14 -11 -23 -11 -15 1 -15 2 2 15 21 16 32 13 21
-4z m-700 -1 c3 -5 -1 -10 -9 -10 -8 0 -18 5 -21 10 -3 6 1 10 9 10 8 0 18 -4
21 -10z m161 -31 c10 -21 12 -35 6 -41 -12 -12 -46 47 -37 62 9 15 13 12 31
-21z m369 -19 c-11 -22 -20 -29 -27 -22 -6 6 -4 20 7 42 11 22 20 29 27 22 6
-6 4 -20 -7 -42z m-173 5 c5 -43 -15 -67 -36 -44 -20 20 -9 79 14 79 13 0 19
-10 22 -35z m-462 -12 c0 -21 -3 -24 -9 -14 -5 8 -7 20 -4 28 8 21 13 15 13
-14z m900 2 c0 -8 -4 -17 -10 -20 -6 -4 -10 5 -10 20 0 15 4 24 10 20 6 -3 10
-12 10 -20z m-753 3 c15 -19 25 -68 14 -68 -12 0 -20 13 -31 50 -9 31 0 40 17
18z m609 -4 c-3 -9 -9 -27 -12 -40 -3 -13 -13 -24 -20 -24 -16 0 -10 44 9 68
14 17 30 15 23 -4z m-652 -10 c3 -9 6 -23 6 -32 -1 -15 -3 -14 -15 2 -17 22
-20 46 -6 46 5 0 12 -7 15 -16z m130 -16 c13 -37 2 -62 -23 -49 -22 12 -34 63
-18 73 18 12 31 4 41 -24z m453 24 c14 -9 6 -57 -13 -73 -28 -23 -42 8 -24 55
10 27 17 31 37 18z m113 -5 c0 -7 -7 -22 -15 -33 -12 -16 -14 -17 -15 -2 0 23
11 48 21 48 5 0 9 -6 9 -13z m-838 -31 c4 -6 8 -21 8 -33 0 -19 -6 -23 -28
-23 -15 0 -33 5 -40 12 -16 16 -15 65 1 71 14 5 48 -11 59 -27z m1022 19 c27
-27 -2 -75 -45 -75 -24 0 -29 4 -29 25 0 24 31 65 49 65 5 0 16 -7 25 -15z
m-918 -27 l17 -33 -26 24 c-15 13 -24 28 -21 32 8 14 13 11 30 -23z m321 10
c39 -27 47 -46 34 -80 -12 -33 -33 -48 -75 -55 -30 -5 -40 -1 -66 25 -16 17
-30 37 -30 44 0 24 60 88 83 88 11 0 36 -10 54 -22z m200 0 c41 -46 47 -68 25
-97 -40 -55 -117 -49 -148 11 -19 37 -11 61 29 87 42 27 69 26 94 -1z m242
-14 c-12 -13 -25 -22 -27 -19 -9 8 29 56 39 49 6 -4 2 -15 -12 -30z m-770 -63
c-2 -6 -16 -1 -33 12 -19 15 -26 28 -21 36 5 10 14 7 32 -12 14 -14 24 -30 22
-36z m796 13 c-24 -19 -31 -21 -33 -9 -5 21 40 57 53 44 7 -7 0 -19 -20 -35z
m-660 2 c32 -14 35 -19 35 -55 0 -71 -61 -108 -126 -78 -39 19 -43 43 -18 107
14 34 21 40 45 40 16 0 45 -7 64 -14z m593 -11 c7 -14 15 -42 18 -63 5 -33 3
-39 -24 -54 -37 -22 -55 -22 -91 -3 -32 16 -53 62 -44 95 7 26 54 49 99 50 23
0 34 -6 42 -25z m-908 5 c13 -8 12 -10 -2 -10 -10 0 -21 0 -25 -1 -4 0 -9 4
-11 10 -5 14 18 14 38 1z m1158 -1 c-2 -6 -7 -10 -11 -10 -4 1 -15 1 -24 1
-15 0 -16 2 -3 10 20 13 43 13 38 -1z m-1011 -31 c26 -25 31 -58 8 -58 -9 0
-27 12 -40 26 -19 21 -22 30 -14 40 15 18 19 18 46 -8z m871 9 c12 -14 -12
-50 -41 -60 -28 -10 -33 21 -7 49 27 27 33 29 48 11z m-935 -37 c17 -29 17
-30 0 -30 -10 0 -26 14 -35 30 -16 28 -16 30 0 30 10 0 26 -13 35 -30z m989 0
c-9 -16 -25 -30 -35 -30 -17 0 -17 1 0 30 9 17 25 30 35 30 16 0 16 -2 0 -30z
m-473 -10 l33 -28 -25 -26 c-14 -14 -35 -26 -47 -26 -11 0 -33 12 -47 26 l-25
26 33 28 c19 16 36 29 39 29 3 0 20 -13 39 -29z m-573 3 c21 -28 16 -35 -11
-17 -14 9 -22 20 -19 25 8 13 15 11 30 -8z m1098 8 c3 -5 -5 -16 -19 -25 -28
-18 -31 -15 -13 14 14 22 24 25 32 11z m-1204 -32 c0 -11 -4 -17 -10 -14 -5 3
-10 13 -10 21 0 8 5 14 10 14 6 0 10 -9 10 -21z m522 -1 c24 -9 26 -12 16 -39
-14 -41 -48 -56 -88 -39 -36 15 -36 18 -9 65 16 26 26 34 38 30 9 -4 28 -11
43 -17z m317 -14 c27 -46 27 -49 -8 -64 -39 -16 -68 -5 -87 32 -18 35 -19 32
26 51 48 21 45 21 69 -19z m461 22 c0 -8 -4 -18 -10 -21 -5 -3 -10 3 -10 14 0
12 5 21 10 21 6 0 10 -6 10 -14z m-1204 -43 c-6 -6 -56 16 -56 25 0 20 15 21
37 0 12 -12 21 -23 19 -25z m1144 28 c0 -7 -44 -31 -57 -31 -4 0 4 11 17 25
21 22 40 25 40 6z m-981 -25 c7 -8 15 -30 18 -50 5 -30 1 -40 -25 -66 -50 -50
-116 -37 -128 25 -9 48 2 84 29 95 34 14 93 12 106 -4z m888 -12 c20 -26 11
-103 -13 -121 -27 -20 -70 -16 -101 11 -21 19 -28 33 -28 64 0 59 19 75 79 69
33 -3 54 -11 63 -23z m-1175 4 c9 -7 19 -23 22 -35 13 -41 -63 -43 -85 -2 -20
38 27 65 63 37z m1397 -2 c26 -31 -31 -79 -75 -62 -11 4 -13 13 -9 28 13 44
61 62 84 34z m-1271 -35 c5 -14 -20 -14 -52 0 -13 6 -22 17 -19 24 4 11 10 11
36 0 17 -7 33 -18 35 -24z m1139 2 c-27 -15 -57 -17 -57 -3 0 16 64 39 72 26
4 -6 -3 -16 -15 -23z m-613 -27 c-15 -50 -50 -60 -84 -26 l-20 20 21 29 c21
29 22 29 55 13 27 -13 33 -20 28 -36z m113 25 c20 -26 20 -30 7 -50 -17 -23
-56 -28 -72 -8 -19 24 -24 57 -9 57 8 0 20 7 27 15 17 21 23 19 47 -14z m-337
-21 c0 -38 -31 -70 -69 -70 -37 0 -41 6 -34 58 l6 42 48 0 c48 0 49 -1 49 -30z
m583 -12 c6 -46 -2 -58 -40 -58 -32 0 -63 34 -63 70 0 29 1 30 49 30 l48 0 6
-42z m-914 -3 c29 -14 45 -38 34 -49 -22 -21 -88 19 -77 47 8 21 8 21 43 2z
m412 5 c28 0 26 -54 -2 -74 -20 -13 -25 -13 -51 0 -16 8 -26 19 -24 23 3 4 10
20 16 36 7 19 15 25 26 21 9 -3 24 -6 35 -6z m383 -22 c16 -40 5 -58 -33 -58
-34 0 -51 17 -51 51 0 24 5 28 33 32 17 2 33 5 34 5 2 1 9 -13 17 -30z m390
15 c12 -30 -62 -71 -78 -44 -7 10 13 35 39 49 27 15 32 15 39 -5z m-1324 -22
c0 -10 -30 -24 -37 -17 -3 3 -2 9 2 15 8 13 35 15 35 2z m1455 -2 c4 -6 5 -12
2 -15 -7 -7 -37 7 -37 17 0 13 27 11 35 -2z m-1371 -20 c14 -11 24 -25 20 -30
-7 -12 -64 21 -64 38 0 19 13 16 44 -8z m651 1 c15 -16 15 -22 5 -35 -7 -8
-20 -15 -30 -15 -10 0 -23 7 -30 15 -10 13 -10 19 5 35 10 11 21 20 25 20 4 0
15 -9 25 -20z m645 2 c0 -13 -58 -43 -64 -33 -8 12 43 53 55 45 5 -3 9 -8 9
-12z m-737 -22 c13 -12 -11 -50 -31 -50 -30 0 -42 19 -30 46 9 18 17 23 32 18
12 -3 25 -10 29 -14z m195 -5 c11 -23 9 -27 -14 -37 -22 -11 -28 -9 -40 7 -19
26 -18 34 9 45 32 13 33 12 45 -15z m-787 -15 c28 -22 24 -24 -19 -9 -18 6
-29 15 -26 20 8 14 19 11 45 -11z m303 4 c19 -50 -12 -104 -59 -104 -18 0 -25
5 -25 19 0 10 -3 32 -6 47 -5 26 -2 31 28 40 48 16 55 16 62 -2z m784 -1 c21
-5 23 -10 18 -36 -3 -16 -6 -38 -6 -48 0 -26 -44 -25 -70 1 -34 34 -24 107 14
95 11 -4 32 -9 44 -12z m276 8 c3 -5 -8 -14 -26 -20 -43 -15 -47 -13 -19 9 26
22 37 25 45 11z m-1197 -16 c29 -20 36 -58 19 -99 -11 -27 -23 -37 -56 -47
-40 -12 -43 -12 -61 12 -25 32 -38 80 -27 101 10 21 56 47 83 48 11 0 30 -7
42 -15z m249 0 c9 -22 -4 -62 -22 -69 -8 -3 -26 -3 -40 0 -19 5 -24 13 -24 39
0 18 6 36 13 38 26 11 68 6 73 -8z m570 -27 c2 -31 -1 -37 -21 -42 -33 -8 -54
2 -61 30 -10 41 2 56 43 52 35 -3 37 -5 39 -40z m254 27 c47 -24 54 -48 31
-100 -23 -52 -53 -65 -99 -41 -33 17 -57 70 -46 102 19 53 60 67 114 39z
m-365 -46 c0 -17 -6 -25 -21 -27 -26 -4 -48 21 -39 47 9 30 60 13 60 -20z
m-875 5 c0 -2 -13 -4 -30 -4 -20 0 -30 5 -30 14 0 12 6 13 30 5 17 -6 30 -13
30 -15z m504 10 c8 -21 -11 -44 -36 -44 -21 0 -33 22 -24 45 7 20 52 19 60 -1z
m136 6 c13 -8 13 -11 -2 -26 -14 -14 -20 -15 -33 -4 -12 10 -13 16 -4 26 13
16 19 17 39 4z m79 -4 c9 -10 8 -16 -4 -26 -13 -11 -19 -10 -33 4 -15 15 -15
18 -2 26 20 13 26 12 39 -4z m661 -1 c0 -10 -10 -15 -32 -14 l-33 1 30 13 c17
8 31 14 33 15 1 0 2 -7 2 -15z m-1480 -15 c7 -13 7 -20 1 -20 -6 0 -15 9 -21
20 -7 13 -7 20 -1 20 6 0 15 -9 21 -20z m1544 6 c-3 -8 -12 -17 -20 -20 -12
-4 -12 -2 -4 14 12 23 32 27 24 6z m-874 -26 c0 -15 -7 -20 -25 -20 -27 0 -28
1 -19 24 9 24 44 20 44 -4z m220 16 c0 -2 3 -11 6 -20 5 -12 0 -16 -20 -16
-19 0 -26 5 -26 20 0 13 7 20 20 20 11 0 20 -2 20 -4z m-782 -32 c28 -8 10
-25 -25 -22 -27 2 -39 8 -41 21 -4 17 12 18 66 1z m1361 -15 c-8 -5 -27 -9
-42 -9 -40 0 -29 24 14 30 36 5 51 -6 28 -21z m-628 -5 c8 -8 23 -14 32 -14 9
0 17 -7 17 -15 0 -8 9 -19 20 -25 11 -6 20 -21 20 -34 0 -12 3 -26 7 -30 10
-10 11 -86 1 -92 -4 -3 -8 -15 -8 -27 0 -12 -9 -28 -20 -35 -11 -7 -20 -19
-20 -27 0 -8 -8 -15 -17 -15 -9 0 -25 -7 -35 -17 -25 -22 -132 -22 -157 1 -10
9 -25 16 -34 16 -9 0 -17 7 -17 15 0 8 -9 20 -20 27 -11 7 -20 23 -20 35 0 12
-4 24 -8 27 -10 6 -9 82 1 92 4 4 7 18 7 30 0 13 9 28 20 34 11 6 20 17 20 25
0 8 8 15 19 15 10 0 24 6 31 14 22 28 129 28 161 0z m-834 -8 c28 -24 28 -25
8 -40 -24 -18 -40 -20 -66 -6 -24 13 -25 46 -1 59 24 15 28 14 59 -13z m439
-1 c15 -23 15 -27 0 -50 -23 -35 -61 -34 -72 3 -12 40 -11 41 16 56 35 20 38
19 56 -9z m92 1 c5 -22 -16 -46 -39 -46 -26 0 -27 56 -1 63 26 7 37 2 40 -17z
m493 14 c5 0 9 -14 9 -31 0 -25 -3 -30 -21 -27 -12 2 -27 10 -32 19 -14 22 -1
53 19 45 9 -3 20 -6 25 -6z m98 -6 c24 -12 30 -21 26 -33 -4 -9 -10 -24 -12
-33 -8 -27 -50 -22 -69 7 -15 23 -15 27 0 50 19 30 15 29 55 9z m442 6 c37
-20 13 -71 -33 -70 -7 0 -22 8 -33 16 -20 15 -20 16 8 40 32 28 32 27 58 14z
m-963 -21 c2 -10 -6 -19 -18 -22 -16 -4 -20 0 -20 20 0 18 5 24 17 21 10 -2
19 -10 21 -19z m342 -3 c0 -19 -4 -23 -20 -19 -30 8 -25 43 7 43 7 0 13 -11
13 -24z m-594 -48 c7 -22 -17 -62 -46 -78 -17 -9 -22 -5 -40 31 l-22 41 34 28
c30 26 35 27 50 13 10 -9 20 -24 24 -35z m907 1 c5 -4 -1 -25 -12 -48 -19 -37
-23 -40 -45 -30 -21 10 -46 46 -46 68 0 5 10 20 21 35 l21 27 27 -23 c14 -12
30 -26 34 -29z m-1123 26 c20 -24 -2 -39 -44 -31 -27 5 -36 12 -36 26 0 16 7
20 34 20 18 0 39 -7 46 -15z m1320 -5 c0 -14 -9 -21 -36 -26 -21 -4 -40 -2
-46 4 -18 18 10 42 48 42 27 0 34 -4 34 -20z m-900 -24 c0 -2 3 -11 6 -19 3
-9 -2 -16 -15 -20 -20 -5 -36 16 -25 34 5 9 34 13 34 5z m434 -5 c11 -17 -5
-39 -25 -34 -21 6 -21 6 -13 27 7 17 29 21 38 7z m-925 -12 c18 -6 30 -16 29
-21 -2 -5 -7 -9 -11 -9 -4 1 -15 1 -24 1 -26 0 -47 16 -39 29 9 13 6 13 45 0z
m162 -18 c20 -20 29 -39 29 -61 0 -35 -46 -90 -75 -90 -25 0 -85 64 -85 90 0
26 60 90 85 90 9 0 30 -13 46 -29z m269 9 c12 -23 7 -35 -21 -50 -16 -9 -21
-7 -31 15 -10 22 -9 27 8 40 25 19 31 19 44 -5z m564 5 c17 -13 18 -18 8 -40
-10 -22 -15 -24 -31 -15 -28 15 -33 27 -21 50 13 24 19 24 44 5z m322 -19 c19
-19 34 -43 34 -55 0 -27 -57 -91 -82 -91 -31 0 -78 54 -78 90 0 35 46 90 75
90 9 0 32 -15 51 -34z m112 9 c-3 -3 -19 -10 -36 -14 -23 -7 -32 -6 -36 5 -3
9 6 17 27 22 29 8 58 0 45 -13z m-1524 -10 c-4 -8 -12 -15 -20 -15 -17 0 -18
17 -1 23 22 9 27 7 21 -8z m1590 9 c20 -8 21 -24 2 -24 -8 0 -16 7 -20 15 -6
17 -4 18 18 9z m-1144 -34 c11 -11 20 -24 20 -30 0 -14 -38 -50 -52 -50 -7 0
-21 12 -31 25 -17 24 -17 26 0 50 22 30 37 31 63 5z m743 -5 c17 -24 17 -26 0
-50 -22 -30 -37 -31 -63 -5 -21 21 -18 46 8 68 23 17 35 15 55 -13z m-1107 5
c8 0 14 -4 14 -10 0 -5 -16 -10 -35 -10 -33 0 -43 8 -28 24 4 3 13 4 21 1 7
-3 20 -5 28 -5z m1462 -8 c2 -8 -9 -12 -32 -12 -40 0 -49 16 -13 23 30 6 40 3
45 -11z m-969 -10 c10 -18 -2 -42 -20 -42 -11 0 -19 29 -13 45 8 20 21 19 33
-3z m455 3 c6 -18 -2 -45 -15 -45 -16 0 -29 36 -17 48 16 16 25 15 32 -3z
m-952 -41 c-33 -14 -52 -12 -52 7 0 5 19 9 43 8 l42 -1 -33 -14z m302 -29 c10
-27 7 -41 -15 -69 l-21 -26 -33 27 c-19 16 -34 31 -34 35 -1 4 8 23 20 42 20
35 22 35 49 21 15 -8 30 -22 34 -30z m140 29 c20 -19 20 -29 1 -48 -13 -13
-20 -13 -35 -3 -23 14 -24 21 -10 48 13 23 24 24 44 3z m576 -3 c14 -28 13
-34 -11 -49 -38 -24 -66 20 -33 52 20 21 31 20 44 -3z m184 -25 l19 -37 -34
-29 -34 -29 -22 25 c-35 39 -27 76 22 102 24 13 26 12 49 -32z m263 32 c-5
-15 -46 -13 -61 2 -7 7 3 10 28 10 26 0 36 -4 33 -12z m-1542 -29 c4 -6 5 -12
2 -15 -7 -7 -37 7 -37 17 0 13 27 11 35 -2z m125 -8 c0 -10 -67 -31 -74 -23
-13 12 -4 22 27 30 33 9 47 7 47 -7z m1397 -5 c14 -14 -10 -24 -38 -16 -38 11
-43 15 -35 29 6 9 61 -1 73 -13z m83 15 c0 -10 -30 -24 -37 -17 -3 3 -2 9 2
15 8 13 35 15 35 2z m-1014 -28 c-3 -8 -6 -17 -6 -19 0 -8 -29 -4 -34 5 -11
18 5 39 25 34 13 -4 18 -11 15 -20z m429 -13 c-6 -10 -35 -14 -35 -6 0 2 -3
11 -6 19 -3 10 1 17 13 19 20 4 38 -16 28 -32z m-551 -9 c19 -21 15 -51 -9
-71 -10 -9 -20 -7 -42 6 -15 10 -29 18 -30 19 -2 1 3 16 9 33 14 37 45 43 72
13z m704 -13 c6 -17 11 -32 9 -33 -1 -1 -15 -9 -30 -19 -22 -13 -32 -15 -42
-6 -24 20 -28 50 -9 71 27 30 58 24 72 -13z m-1003 12 c12 -19 -16 -40 -51
-40 -27 0 -34 4 -34 19 0 11 8 22 18 24 32 9 61 7 67 -3z m1293 4 c13 -4 22
-14 22 -25 0 -15 -7 -19 -34 -19 -35 0 -63 21 -51 40 7 11 29 13 63 4z m-1423
-18 c17 -12 17 -16 5 -30 -34 -42 -90 -39 -90 4 0 35 51 51 85 26z m1556 4
c25 -14 24 -46 -1 -60 -22 -12 -47 -3 -70 26 -12 14 -12 18 5 30 22 17 40 18
66 4z m-1322 -15 c16 -8 34 -28 41 -45 11 -27 11 -37 -3 -65 -10 -21 -26 -37
-42 -41 -32 -8 -82 12 -101 42 -13 20 -13 26 1 60 28 68 49 78 104 49z m279 3
c14 -14 16 -44 4 -52 -5 -3 -18 -2 -30 1 -29 7 -32 63 -4 63 10 0 23 -5 30
-12z m512 -17 c0 -21 -6 -30 -22 -34 -27 -7 -38 -1 -38 22 0 22 19 41 42 41
13 0 18 -8 18 -29z m320 -3 c11 -18 20 -48 20 -66 0 -26 -7 -36 -32 -52 -50
-31 -89 -23 -111 22 -23 47 -14 84 27 109 46 28 73 24 96 -13z m-761 13 c17
-11 7 -41 -14 -41 -9 0 -15 9 -15 25 0 27 6 30 29 16z m351 -16 c0 -16 -6 -25
-15 -25 -8 0 -15 2 -15 4 0 2 -3 11 -6 19 -3 10 2 17 13 20 10 3 19 5 21 6 1
0 2 -10 2 -24z m-832 -27 c-5 -15 -78 -24 -78 -10 0 16 13 22 48 22 22 0 32
-4 30 -12z m1360 -9 c2 -13 -4 -15 -34 -10 -52 9 -59 33 -8 29 26 -2 40 -8 42
-19z m-1081 -10 c14 -12 18 -66 5 -86 -5 -9 -18 -9 -50 0 -41 11 -43 13 -38
41 3 15 6 38 6 49 0 17 5 19 32 13 17 -3 37 -11 45 -17z m803 -1 c0 -13 3 -33
6 -45 5 -18 0 -25 -31 -37 -49 -21 -54 -20 -61 9 -9 37 4 75 29 85 39 16 57
12 57 -12z m-530 -8 c0 -13 -7 -20 -20 -20 -11 0 -20 2 -20 4 0 2 -3 11 -6 20
-5 12 0 16 20 16 19 0 26 -5 26 -20z m230 12 c0 -12 -23 -32 -37 -32 -7 0 -13
9 -13 20 0 15 7 20 25 20 14 0 25 -4 25 -8z m-395 -18 c9 -9 15 -28 13 -43 -3
-23 -7 -26 -43 -26 -39 0 -40 1 -43 37 -2 28 1 37 15 41 33 9 41 7 58 -9z m95
1 c18 -21 5 -45 -25 -45 -27 0 -41 20 -31 45 7 19 40 19 56 0z m375 -15 c0
-20 -6 -26 -28 -28 -32 -4 -46 20 -26 44 19 24 54 14 54 -16z m101 22 c6 -4
11 -22 10 -40 -1 -25 -6 -34 -23 -38 -37 -10 -58 0 -61 27 -5 43 40 74 74 51z
m-1076 -22 c-6 -11 -15 -20 -21 -20 -6 0 -6 7 1 20 6 11 15 20 21 20 6 0 6 -7
-1 -20z m739 6 c17 -20 -13 -43 -34 -26 -12 10 -13 16 -4 26 6 8 15 14 19 14
4 0 13 -6 19 -14z m80 0 c17 -20 -13 -43 -34 -26 -12 10 -13 16 -4 26 6 8 15
14 19 14 4 0 13 -6 19 -14z m719 2 c14 -14 16 -28 2 -28 -5 0 -14 9 -20 20
-12 22 -1 27 18 8z m-1438 -12 c0 -2 -13 -9 -30 -15 -24 -8 -30 -7 -30 5 0 9
10 14 30 14 17 0 30 -2 30 -4z m1380 -10 c0 -12 -6 -13 -30 -5 -16 6 -30 13
-30 15 0 2 14 4 30 4 20 0 30 -5 30 -14z m-789 -27 c12 -23 5 -33 -27 -43 -15
-5 -23 0 -32 18 -19 43 36 67 59 25z m189 11 c17 -9 18 -14 8 -35 -9 -19 -16
-24 -32 -19 -32 10 -39 20 -27 43 13 23 23 26 51 11z m-760 -4 c0 -11 -52 -36
-62 -30 -8 5 -2 12 17 20 31 14 45 17 45 10z m1318 -7 c18 -6 29 -15 26 -20
-8 -13 -16 -11 -44 11 -29 23 -25 24 18 9z m-648 -15 c11 -13 10 -18 -7 -35
-19 -20 -20 -20 -43 -1 -21 17 -22 22 -11 36 17 20 45 21 61 0z m-654 -31
c-25 -21 -46 -23 -46 -5 0 12 54 41 64 35 5 -4 -3 -17 -18 -30z m1294 -5 c0
-4 -4 -9 -9 -12 -12 -8 -63 33 -55 45 6 10 64 -20 64 -33z m-822 20 c7 -7 12
-24 12 -39 0 -23 -5 -27 -36 -31 -32 -4 -37 -1 -48 26 -9 21 -10 35 -3 44 12
15 59 16 75 0z m379 0 c7 -9 6 -23 -3 -44 -11 -27 -16 -30 -48 -26 -31 4 -36
8 -36 31 0 15 5 32 12 39 16 16 63 15 75 0z m-620 -22 c35 -30 40 -99 8 -123
-26 -19 -105 -10 -123 15 -19 24 -9 102 14 119 27 20 70 16 101 -11z m883 14
c21 -11 35 -67 26 -104 -6 -26 -49 -46 -97 -46 -21 0 -32 7 -44 30 -22 43 -19
68 14 101 31 30 67 37 101 19z m-1027 -6 c11 -11 -5 -35 -34 -49 -35 -19 -35
-19 -43 2 -11 28 55 68 77 47z m277 -14 c11 -11 20 -33 20 -50 0 -29 -1 -30
-49 -30 l-48 0 -6 42 c-3 23 -3 46 -1 50 10 16 64 8 84 -12z m604 12 c2 -4 2
-27 -1 -50 l-6 -42 -48 0 c-48 0 -49 1 -49 30 0 17 9 39 20 50 20 20 74 28 84
12z m251 -8 c27 -18 29 -22 16 -42 -7 -12 -14 -11 -38 2 -44 22 -53 56 -16 56
8 0 25 -7 38 -16z m-1315 -4 c8 -5 11 -12 8 -16 -10 -9 -38 3 -38 16 0 12 10
13 30 0z m1470 0 c0 -13 -28 -25 -38 -16 -3 4 0 11 8 16 20 13 30 12 30 0z
m-773 -30 c11 -22 10 -27 -15 -47 -34 -28 -34 -28 -59 6 -20 26 -20 30 -6 50
20 30 63 25 80 -9z m127 9 c13 -20 13 -24 -6 -49 -20 -28 -21 -28 -54 -12 -38
19 -41 28 -18 60 19 28 58 28 78 1z m-752 -48 c-5 -47 -63 -66 -86 -28 -9 15
-7 22 13 38 14 11 36 19 50 17 21 -2 25 -8 23 -27z m1366 13 c26 -18 28 -36 7
-54 -22 -18 -64 -4 -75 26 -6 14 -8 30 -4 35 8 14 47 11 72 -7z m-1258 -9 c0
-20 -62 -46 -72 -31 -5 7 7 18 30 28 45 21 42 21 42 3z m1156 -18 c2 -1 0 -7
-4 -13 -10 -15 -72 12 -72 31 0 14 4 14 37 0 20 -9 38 -17 39 -18z m-751 17
c15 -6 50 -62 43 -69 -9 -9 -81 -34 -87 -31 -3 2 -15 21 -25 40 -19 36 -19 37
0 51 21 16 43 19 69 9z m339 -9 c19 -14 19 -15 0 -51 -10 -19 -22 -37 -25 -40
-3 -2 -25 4 -47 12 -38 15 -40 18 -31 43 18 49 64 65 103 36z m-154 -40 l24
-25 -35 -30 c-19 -16 -36 -29 -39 -29 -3 0 -20 13 -39 29 l-35 30 24 25 c14
14 35 25 50 25 15 0 36 -11 50 -25z m-301 0 c65 -33 62 -116 -6 -134 -67 -19
-79 -15 -97 29 -22 55 -20 86 6 104 28 20 61 20 97 1z m595 -6 c30 -24 32 -43
10 -99 -18 -44 -38 -50 -104 -27 -79 27 -42 145 46 147 12 0 33 -9 48 -21z
m-904 -14 c-12 -13 -27 -22 -31 -19 -16 9 -10 24 14 34 37 15 42 11 17 -15z
m1155 4 c5 -6 5 -13 -1 -19 -7 -7 -18 -2 -35 16 l-24 26 25 -7 c14 -4 29 -11
35 -16z m-1239 -36 c-11 -11 -19 6 -11 24 8 17 8 17 12 0 3 -10 2 -21 -1 -24z
m1304 11 c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6 -3 10 -13
10 -21z m-1192 -9 c-12 -26 -23 -31 -33 -16 -3 5 5 17 17 25 29 21 30 20 16
-9z m1097 -4 c3 -5 0 -13 -6 -16 -10 -7 -38 21 -39 38 0 9 36 -9 45 -22z
m-1043 -11 c-9 -16 -25 -30 -35 -30 -17 0 -17 1 0 30 9 17 25 30 35 30 16 0
16 -2 0 -30z m88 12 c0 -10 -11 -29 -25 -42 -23 -21 -27 -22 -41 -9 -13 14
-12 18 10 42 29 31 56 35 56 9z m836 -9 c22 -24 23 -28 10 -42 -14 -13 -18
-12 -41 9 -28 26 -33 60 -10 60 9 0 27 -12 41 -27z m67 -3 c17 -29 17 -30 0
-30 -10 0 -26 14 -35 30 -16 28 -16 30 0 30 10 0 26 -13 35 -30z m-572 0 c25
-14 52 -66 45 -88 -8 -22 -67 -62 -92 -62 -22 0 -54 30 -73 68 -29 55 58 114
120 82z m220 -18 c36 -32 34 -52 -8 -102 -33 -39 -64 -38 -110 4 -35 32 -36
34 -23 65 27 65 89 80 141 33z m-722 -31 c11 -7 9 -10 -8 -16 -25 -8 -36 -2
-26 14 8 13 15 14 34 2z m160 -37 c-16 -17 -26 -21 -33 -13 -8 7 -2 18 19 36
36 31 48 13 14 -23z m841 -3 c0 -20 -16 -19 -37 1 -35 33 -30 54 7 28 17 -12
30 -25 30 -29z m158 23 c-4 -3 -17 -2 -30 2 -22 7 -22 7 -3 14 20 8 44 -4 33
-16z m-1068 -25 c0 -37 -19 -59 -50 -59 -26 0 -30 4 -30 29 0 31 13 46 45 53
27 6 35 1 35 -23z m1008 9 c7 -7 12 -25 12 -40 0 -22 -5 -28 -22 -28 -29 0
-58 28 -58 57 0 19 5 23 28 23 15 0 33 -5 40 -12z m-743 -47 c-8 -36 -17 -44
-40 -35 -20 8 -13 52 13 72 23 17 35 0 27 -37z m442 37 c20 -25 24 -66 7 -72
-22 -8 -31 0 -39 34 -10 43 10 66 32 38z m-613 -33 c-12 -19 -20 -23 -28 -15
-8 8 -5 17 13 31 31 25 37 18 15 -16z m765 11 c14 -15 18 -26 12 -30 -6 -4
-17 7 -26 24 -19 36 -16 38 14 6z m-665 -13 c-9 -37 -13 -43 -29 -43 -10 0
-11 7 -2 35 13 43 41 49 31 8z m573 15 c14 -19 22 -57 13 -63 -11 -7 -27 15
-32 48 -6 29 3 35 19 15z m-631 -33 c-4 -14 -11 -25 -16 -25 -13 0 -13 16 1
42 14 26 23 16 15 -17z m694 -12 c0 -7 -4 -13 -9 -13 -10 0 -21 25 -21 48 1
15 3 14 15 -2 8 -11 15 -26 15 -33z m-342 25 c16 -21 3 -78 -19 -78 -15 0 -19
7 -19 38 0 51 16 67 38 40z m-458 -35 c0 -20 -3 -24 -11 -16 -7 7 -9 19 -6 27
10 24 17 19 17 -11z m265 -23 c-11 -22 -20 -29 -27 -22 -6 6 -4 20 7 42 11 22
20 29 27 22 6 -6 4 -20 -7 -42z m371 19 c11 -22 13 -34 5 -42 -7 -7 -15 0 -25
24 -13 30 -13 49 -1 49 3 0 12 -14 21 -31z m264 6 c0 -8 -4 -17 -10 -20 -6 -4
-10 5 -10 20 0 15 4 24 10 20 6 -3 10 -12 10 -20z m-501 -52 c1 -14 -5 -23
-14 -23 -16 0 -22 60 -8 74 9 9 21 -20 22 -51z m111 11 c0 -24 -5 -34 -15 -34
-16 0 -19 20 -9 57 9 33 24 18 24 -23z m-210 -4 c0 -20 -5 -30 -15 -30 -18 0
-18 2 -3 35 15 32 18 32 18 -5z m50 -17 c0 -15 -6 -23 -16 -23 -11 0 -14 5
-10 16 3 9 6 25 6 37 0 18 2 19 10 7 5 -8 10 -25 10 -37z m209 -10 c1 -7 -6
-13 -14 -13 -16 0 -22 50 -8 64 7 7 20 -23 22 -51z m51 5 c0 -5 -7 -8 -15 -8
-10 0 -15 10 -15 33 l1 32 14 -25 c8 -14 14 -28 15 -32z m-412 -10 c2 -29 -1
-39 -18 -48 -43 -23 -68 33 -33 72 26 29 48 19 51 -24z m534 25 c19 -17 23
-49 9 -72 -8 -12 -15 -13 -34 -4 -28 13 -38 39 -26 71 10 26 26 28 51 5z
m-622 2 c0 -2 -9 -9 -20 -15 -16 -9 -20 -8 -20 5 0 8 9 15 20 15 11 0 20 -2
20 -5z m700 -5 c0 -5 -6 -10 -14 -10 -8 0 -18 5 -21 10 -3 6 3 10 14 10 12 0
21 -4 21 -10z m-550 -66 c0 -8 -4 -14 -10 -14 -5 0 -10 4 -10 9 0 5 -3 18 -7
28 -6 16 -5 16 10 4 9 -7 17 -20 17 -27z m211 10 c7 -20 6 -32 -6 -50 -18 -28
-23 -29 -47 -7 -21 19 -21 23 -8 57 13 35 47 35 61 0z m172 -2 c-6 -24 -23
-30 -23 -9 0 13 21 39 26 34 2 -2 1 -13 -3 -25z m-273 -11 c0 -5 -7 -14 -15
-21 -12 -10 -15 -10 -15 2 0 8 3 18 7 21 9 10 23 9 23 -2z m169 -17 c3 -16 1
-17 -13 -5 -19 16 -21 34 -3 29 6 -3 14 -13 16 -24z"></path><path d="M1806 4142 c-3 -6 -1 -14 5 -17 15 -10 25 3 12 16 -7 7 -13 7 -17 1z"></path><path d="M1760 4080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1710 4050 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1675 4009 c-9 -14 -2 -20 14 -10 8 6 9 11 3 15 -6 3 -14 1 -17 -5z"></path><path d="M1636 3982 c-3 -6 -1 -14 5 -17 14 -9 20 -2 10 14 -6 8 -11 9 -15 3z"></path><path d="M1580 3935 c0 -9 6 -12 15 -9 8 4 12 10 9 15 -8 14 -24 10 -24 -6z"></path><path d="M1540 3910 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M1520 3874 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z"></path><path d="M1520 3830 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M1556 3801 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"></path><path d="M1580 3765 c0 -16 16 -20 24 -6 3 5 -1 11 -9 15 -9 3 -15 0 -15 -9z"></path><path d="M1635 3731 c-3 -5 -1 -12 4 -15 5 -3 11 1 15 9 6 16 -9 21 -19 6z"></path><path d="M1670 3700 c0 -13 18 -22 24 -11 3 5 -1 11 -9 15 -8 3 -15 1 -15 -4z"></path><path d="M1710 3650 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1760 3620 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1805 3571 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z"></path><path d="M5775 4139 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z"></path><path d="M5820 4080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5870 4050 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5906 4011 c-3 -5 1 -11 9 -15 8 -3 15 -1 15 4 0 13 -18 22 -24 11z"></path><path d="M5950 3974 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z"></path><path d="M5996 3941 c-3 -5 1 -11 9 -15 9 -3 15 0 15 9 0 16 -16 20 -24 6z"></path><path d="M6030 3910 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M6060 3869 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"></path><path d="M6060 3830 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M6030 3790 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M6001 3771 c-10 -6 -10 -10 -1 -16 13 -8 24 -1 19 14 -3 6 -10 7 -18
2z"></path><path d="M5950 3724 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z"></path><path d="M5917 3703 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3
-9 2 -12 -2z"></path><path d="M5870 3650 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5820 3620 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5772 3571 c4 -13 18 -16 19 -4 0 4 -5 9 -11 12 -7 2 -11 -2 -8 -8z"></path><path d="M1830 3440 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1800 3370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1770 3330 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1750 3270 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1720 3230 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1680 3175 c0 -9 6 -12 15 -9 8 4 12 10 9 15 -8 14 -24 10 -24 -6z"></path><path d="M1660 3140 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"></path><path d="M1650 3100 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M1665 3050 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"></path><path d="M1700 3031 c0 -17 18 -21 24 -6 3 9 0 15 -9 15 -8 0 -15 -4 -15 -9z"></path><path d="M1742 3009 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"></path><path d="M1810 2994 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z"></path><path d="M1850 2980 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1910 2950 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M1955 2940 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"></path><path d="M2026 2911 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z"></path><path d="M5750 3440 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5780 3370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5810 3330 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5835 3270 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"></path><path d="M5860 3230 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5890 3181 c0 -5 7 -11 15 -15 9 -3 15 0 15 9 0 8 -7 15 -15 15 -8 0
-15 -4 -15 -9z"></path><path d="M5920 3140 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5935 3100 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"></path><path d="M5910 3050 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z"></path><path d="M5880 3030 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5830 3010 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M5775 3001 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z"></path><path d="M5730 2980 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5670 2950 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5620 2940 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5556 2912 c-3 -6 -1 -14 5 -17 15 -10 25 3 12 16 -7 7 -13 7 -17 1z"></path><path d="M2080 2796 c0 -2 7 -6 15 -10 8 -3 15 -1 15 4 0 6 -7 10 -15 10 -8 0
-15 -2 -15 -4z"></path><path d="M2090 2719 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"></path><path d="M2070 2670 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2070 2610 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2060 2560 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2040 2495 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2
-11 -4 -11 -13z"></path><path d="M2036 2463 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"></path><path d="M2040 2410 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M2065 2370 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"></path><path d="M2110 2365 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M2156 2373 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"></path><path d="M2220 2370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2265 2370 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
-12 -4 -9 -10z"></path><path d="M2380 2370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2457 2365 c-4 -8 -2 -17 3 -20 6 -4 10 3 10 14 0 25 -6 27 -13 6z"></path><path d="M2330 2360 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5498 2793 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"></path><path d="M5495 2720 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"></path><path d="M5510 2670 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5510 2610 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5520 2560 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5540 2501 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
-10 -4 -10 -9z"></path><path d="M5546 2463 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"></path><path d="M5130 2360 c0 -19 3 -21 12 -12 9 9 9 15 0 24 -9 9 -12 7 -12 -12z"></path><path d="M5200 2370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5310 2370 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z"></path><path d="M5360 2370 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M5426 2373 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"></path><path d="M5470 2365 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M5515 2370 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z"></path><path d="M5250 2360 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2555 2280 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0
-13 -4 -16 -10z"></path><path d="M2580 2199 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"></path><path d="M2580 2150 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2596 2101 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z"></path><path d="M2605 2050 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
0 -7 -4 -10 -10z"></path><path d="M3046 1995 c-3 -9 0 -15 9 -15 16 0 20 16 6 24 -5 3 -11 -1 -15 -9z"></path><path d="M2600 1986 c0 -2 7 -9 15 -16 12 -10 15 -10 15 4 0 9 -7 16 -15 16
-8 0 -15 -2 -15 -4z"></path><path d="M2970 1981 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
-10 -4 -10 -9z"></path><path d="M2920 1950 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M2625 1940 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"></path><path d="M2870 1940 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M2820 1920 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M2760 1895 c0 -16 16 -20 24 -6 3 5 -1 11 -9 15 -9 3 -15 0 -15 -9z"></path><path d="M2720 1874 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
-10 -7 -10 -16z"></path><path d="M2680 1869 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"></path><path d="M5025 2280 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
0 -7 -4 -10 -10z"></path><path d="M5005 2200 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"></path><path d="M5000 2150 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M4986 2101 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z"></path><path d="M4975 2050 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
0 -7 -4 -10 -10z"></path><path d="M4535 2000 c-8 -13 -1 -24 14 -19 6 3 7 10 2 18 -6 10 -10 10 -16 1z"></path><path d="M4610 1974 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z"></path><path d="M4970 1974 c0 -14 3 -14 15 -4 8 7 15 14 15 16 0 2 -7 4 -15 4 -8 0
-15 -7 -15 -16z"></path><path d="M4650 1950 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z"></path><path d="M4715 1940 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
0 -7 -4 -10 -10z"></path><path d="M4965 1940 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"></path><path d="M4760 1920 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M4816 1902 c-3 -6 -1 -14 5 -17 15 -10 25 3 12 16 -7 7 -13 7 -17 1z"></path><path d="M4955 1890 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"></path><path d="M4860 1881 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
-10 -4 -10 -9z"></path><path d="M4905 1870 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"></path><path d="M3165 1951 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z"></path><path d="M3215 1890 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"></path><path d="M3722 1849 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"></path><path d="M3230 1840 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3660 1810 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"></path><path d="M3270 1790 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3625 1770 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0
-13 -4 -16 -10z"></path><path d="M3290 1750 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M3575 1740 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
0 -7 -4 -10 -10z"></path><path d="M3540 1705 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M3310 1696 c0 -2 7 -9 15 -16 12 -10 15 -10 15 4 0 9 -7 16 -15 16
-8 0 -15 -2 -15 -4z"></path><path d="M3490 1655 c0 -9 6 -12 15 -9 8 4 15 10 15 15 0 5 -7 9 -15 9 -8 0
-15 -7 -15 -15z"></path><path d="M3340 1650 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M3466 1641 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"></path><path d="M3370 1620 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"></path><path d="M3420 1610 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M4412 1951 c2 -7 7 -12 11 -12 12 1 9 15 -3 20 -7 2 -11 -2 -8 -8z"></path><path d="M4370 1890 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"></path><path d="M3852 1849 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"></path><path d="M4350 1840 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3915 1810 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0
-13 -4 -16 -10z"></path><path d="M4310 1790 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path><path d="M3950 1770 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
0 -9 -4 -9 -10z"></path><path d="M4280 1750 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M4005 1740 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
0 -7 -4 -10 -10z"></path><path d="M4040 1705 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M4260 1684 c0 -14 3 -14 15 -4 8 7 15 14 15 16 0 2 -7 4 -15 4 -8 0
-15 -7 -15 -16z"></path><path d="M4080 1661 c0 -5 7 -11 15 -15 9 -3 15 0 15 9 0 8 -7 15 -15 15 -8 0
-15 -4 -15 -9z"></path><path d="M4230 1650 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"></path><path d="M4120 1635 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"></path><path d="M4205 1620 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0
-13 -4 -16 -10z"></path><path d="M4160 1610 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"></path></g></svg></div>`,1)),f("div",V2,[a[2]||(a[2]=t1('<div class="cus-column-1"><div class="cus-logo-cont"><div><img src="/images/klogo-nbg.png" alt=""><div><h2>Kachia Lga</h2></div></div></div><div class="cus-socials-cont"><a href=""><svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3 v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2 c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path></g></svg></a><a href=""><svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2 c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"></path></g></svg></a><a href=""><svg fill="#000000" width="64px" height="64px" viewBox="0 0 19.2 19.2" data-name="Instagram w/circle" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path></g></svg></a></div></div>',1)),f("div",P2,[a[0]||(a[0]=f("div",{class:"cus-description-cont"},[f("p",null," Kachia LGA is dedicated to community growth, development, and improving the quality of life for residents. "),f("p",null," We provide essential services including healthcare, education, and local business support to enhance community welfare. ")],-1)),f("div",A2,[C(V,{flat:"",label:"Home",to:{path:"/"}}),C(V,{flat:"",label:"About Kachia",to:{path:"/about"}}),C(V,{flat:"",label:"Culture",to:{path:"/culture"}}),C(V,{flat:"",label:"Contact",to:{path:"/contact"}})]),a[1]||(a[1]=f("div",{class:"cus-email-subscribe-cont"},[f("div",null,[f("input",{type:"text"}),f("a",{href:""},"Search")])],-1))]),a[3]||(a[3]=t1('<div class="cus-column-3"><p>Need Help?</p><a href=""><svg fill="#3b4b35" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"></path></g></svg><span>234-813-4605-439</span></a><a href=""><svg width="64px" height="64px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#3b4b35"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>whatsapp_fill</title><g id="\u9875\u9762-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Brand" transform="translate(-864.000000, -48.000000)"><g id="whatsapp_fill" transform="translate(864.000000, 48.000000)"><path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"></path><path d="M12,2 C6.47715,2 2,6.47715 2,12 C2,13.8896 2.52505,15.6594 3.43756,17.1683 L2.54581,20.2002 C2.32023,20.9672 3.03284,21.6798 3.79975,21.4542 L6.83171,20.5624 C8.34058,21.475 10.1104,22 12,22 C17.5228,22 22,17.5228 22,12 C22,6.47715 17.5228,2 12,2 Z M9.73821,14.2627 C11.7607,16.2852 13.692,16.5518 14.3739,16.5769 C15.4111,16.6151 16.421,15.823 16.8147,14.9042 C16.9112,14.6792 16.8871,14.4085 16.7255,14.2014 C16.1782,13.5005 15.4373,12.9983 14.7134,12.4984 C14.4006,12.282 13.9705,12.349 13.7401,12.6555 L13.1394,13.5706 C13.0727,13.6721 12.9402,13.707 12.8348,13.6467 C12.4283,13.4143 11.8356,13.018 11.4092,12.5916 C10.9833,12.1657 10.6111,11.5998 10.4022,11.2195 C10.3473,11.1195 10.3777,10.996 10.4692,10.928 L11.3927,10.2422 C11.6681,10.0038 11.7165,9.59887 11.5138,9.30228 C11.065,8.64569 10.5422,7.8112 9.7855,7.25926 C9.57883,7.1085 9.3174,7.09158 9.10155,7.18408 C8.1817,7.5783 7.38574,8.58789 7.42398,9.62695 C7.44908,10.3089 7.71572,12.2402 9.73821,14.2627 Z" id="\u5F62\u72B6" fill="#3b4b35"></path></g></g></g></g></svg><span>234-813-4605-439</span></a><a href="mailto:hell@okachia.com"><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="style=fill"><g id="email"><path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" fill="#3b4b35"></path></g></g></g></svg><span>hello@kachialga.kd.gov.ng</span></a></div>',1))]),f("div",E2,[f("p",null,"All Rights Reserved "+L2(n.currentYear),1),a[4]||(a[4]=f("p",null,"Powered by Greysoft Technologies",-1))]),a[6]||(a[6]=t1(`<div class="footer-background-image-cont"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800.000000 800.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1038 7715 c-2 -2 -19 -6 -38 -8 -37 -5 -68 -16 -85 -29 -107 -87
-130 -159 -78 -247 85 -145 135 -187 214 -178 l49 6 0 -45 c0 -25 11 -79 25
-120 28 -83 34 -219 14 -298 l-11 -43 -54 -6 c-72 -7 -155 -47 -187 -88 -14
-19 -65 -110 -113 -204 -48 -93 -96 -178 -106 -188 -11 -11 -17 -24 -15 -30 2
-6 39 -20 82 -31 l78 -19 19 23 c10 12 18 31 18 42 0 19 50 121 56 115 2 -2
-3 -25 -11 -52 -25 -82 -14 -164 35 -260 35 -69 20 -227 -37 -382 l-38 -103
-321 0 c-296 0 -324 1 -344 18 l-23 18 69 49 c38 27 117 86 176 132 58 45 119
88 134 93 77 30 221 168 197 190 -4 4 -39 15 -77 24 -64 16 -70 16 -95 0 -72
-47 -178 -140 -286 -251 -66 -68 -145 -141 -175 -161 -64 -45 -98 -99 -107
-171 -6 -50 -4 -54 53 -140 32 -50 66 -90 75 -90 9 -1 111 22 227 49 l212 50
121 -70 c66 -38 125 -70 132 -70 6 0 86 30 177 66 l166 66 183 -92 183 -91
174 96 175 97 67 -47 c37 -25 108 -75 159 -110 l92 -64 56 61 c31 33 75 85 97
114 39 52 41 57 35 112 -6 75 -38 136 -85 166 -54 35 -251 248 -277 300 -6 12
-51 52 -100 89 -50 38 -91 73 -93 77 -2 5 -34 -11 -72 -37 -64 -42 -68 -47
-56 -65 19 -26 86 -81 116 -95 14 -6 81 -60 150 -119 69 -60 154 -131 189
-159 l64 -50 -219 -3 c-121 -1 -274 1 -342 5 l-124 8 -30 90 c-29 83 -31 101
-32 232 -1 131 1 143 20 165 29 31 55 83 68 137 l12 43 23 -51 c27 -56 32 -58
85 -36 20 8 52 22 71 30 l36 14 -16 38 c-9 20 -20 40 -26 44 -6 3 -36 64 -68
135 -120 268 -130 281 -251 320 -73 24 -75 28 -65 110 l6 54 40 0 c38 0 41 3
87 74 27 40 68 113 93 162 37 75 44 100 47 160 5 91 -22 158 -86 214 -49 44
-93 60 -165 60 -34 0 -49 5 -54 15 -8 22 -109 85 -136 85 -12 0 -32 7 -44 15
-12 8 -29 12 -38 9 -9 -4 -28 2 -45 14 -15 12 -30 19 -32 17z"></path><path d="M5163 7438 c3 -18 8 -43 12 -55 6 -19 4 -23 -13 -23 -32 0 -81 -47
-88 -84 -7 -39 15 -90 46 -106 20 -11 19 -13 -24 -68 -47 -61 -69 -101 -80
-144 -9 -38 24 -57 116 -70 40 -5 95 -16 122 -24 26 -8 72 -14 102 -14 l53 0
8 -37 c4 -21 7 -121 7 -223 0 -170 -2 -195 -29 -305 -18 -74 -29 -148 -29
-193 -1 -70 0 -75 30 -102 18 -15 57 -37 88 -49 71 -26 229 -45 302 -36 l57 7
-7 52 c-3 29 -11 67 -17 85 l-11 32 -72 -8 c-86 -10 -194 -10 -219 0 -17 6
-16 9 3 47 38 74 46 179 27 337 -10 77 -26 185 -36 239 -10 54 -21 119 -22
143 l-4 44 55 11 c68 14 80 21 80 50 0 33 -46 118 -91 170 -23 25 -36 46 -31
46 18 0 60 50 65 78 11 56 -39 122 -91 122 -19 0 -23 4 -17 18 38 94 34 99
-73 82 -61 -10 -89 -11 -125 -2 -25 7 -58 12 -73 12 -24 0 -26 -3 -21 -32z
m64 -156 c15 -36 15 -36 -19 -64 -40 -33 -39 -33 -72 -7 -39 31 -30 91 17 108
34 13 58 1 74 -37z m289 12 c22 -33 10 -72 -28 -93 -26 -15 -29 -14 -58 14
-34 32 -37 51 -14 83 22 32 78 30 100 -4z"></path><path d="M7540 7445 c0 -15 7 -39 15 -55 15 -29 15 -30 -9 -30 -33 0 -83 -44
-91 -79 -8 -36 16 -95 44 -111 21 -11 20 -12 -23 -68 -56 -72 -76 -113 -76
-152 0 -26 6 -33 34 -45 18 -8 63 -17 100 -21 64 -7 66 -8 66 -35 0 -15 -9
-74 -20 -131 -29 -157 -50 -321 -50 -401 0 -77 21 -177 45 -214 22 -32 5 -38
-110 -37 -87 1 -161 12 -268 39 -24 6 -29 4 -42 -28 -8 -20 -18 -60 -21 -90
-8 -64 -14 -60 120 -78 146 -19 326 8 409 61 75 47 78 72 33 298 -32 165 -36
203 -35 327 0 77 4 165 7 195 l7 55 79 7 c43 4 88 13 100 21 11 8 41 17 65 21
61 9 81 22 81 52 0 35 -41 111 -89 165 l-40 46 23 13 c58 31 67 118 17 162
-17 16 -43 28 -57 28 -17 0 -24 4 -20 13 17 41 28 88 23 94 -4 3 -45 0 -91 -7
-65 -10 -94 -10 -129 -1 -75 18 -97 15 -97 -14z m67 -163 c15 -36 15 -36 -19
-64 -40 -33 -39 -33 -72 -7 -39 31 -30 91 17 108 34 13 58 1 74 -37z m289 12
c22 -33 10 -72 -28 -93 -26 -15 -29 -14 -58 14 -34 32 -37 51 -14 83 22 32 78
30 100 -4z"></path><path d="M6477 7184 c-182 -77 -298 -199 -314 -331 -5 -45 -2 -55 28 -101 19
-28 36 -52 39 -52 3 0 14 17 25 37 33 60 119 141 181 170 43 19 75 26 126 27
37 1 68 2 68 2 0 1 -13 53 -30 115 -16 63 -30 124 -30 137 0 28 -18 27 -93 -4z"></path><path d="M6443 6870 c-67 -33 -131 -98 -165 -165 l-21 -40 29 -55 c33 -64 130
-166 167 -175 42 -11 59 -87 36 -167 -6 -22 -16 -38 -25 -38 -8 0 -17 -8 -21
-17 -3 -10 -15 -25 -25 -34 -19 -15 -17 -19 41 -136 62 -123 124 -213 161
-233 55 -29 92 31 115 187 20 132 20 136 -14 156 -22 13 -27 22 -24 42 4 20 0
27 -21 35 -26 9 -26 11 -26 105 l0 95 34 0 c22 0 36 6 40 16 13 34 6 201 -10
245 -9 24 -29 80 -44 124 l-26 80 -70 3 c-61 2 -77 -1 -131 -28z"></path><path d="M2819 6326 c-139 -53 -342 -206 -385 -289 -14 -25 -13 -30 6 -57 12
-17 25 -30 30 -30 5 0 35 16 67 35 76 46 238 109 336 130 56 12 110 16 197 14
66 -2 120 -1 120 3 0 19 -151 157 -194 178 -59 28 -128 35 -177 16z"></path><path d="M620 6181 c0 -5 -2 -16 -6 -24 -4 -11 11 -18 60 -31 84 -21 99 -20
114 5 7 12 12 22 10 24 -5 5 -146 35 -162 35 -9 0 -16 -4 -16 -9z"></path><path d="M6216 6163 c-4 -5 -38 -8 -74 -8 -90 -1 -205 -32 -197 -54 4 -9 12
-51 18 -94 10 -72 13 -78 32 -72 11 3 55 9 97 12 105 8 116 0 158 -119 18 -51
67 -163 109 -248 104 -211 143 -330 145 -440 1 -100 -1 -98 119 -142 147 -55
318 -38 323 32 0 14 9 68 18 120 18 105 21 316 6 370 -9 31 -7 37 19 65 34 35
51 73 51 116 0 44 -14 63 -65 94 -59 34 -115 83 -115 101 0 7 10 22 22 34 17
16 35 20 85 20 l63 0 0 38 c0 20 6 63 14 94 l13 58 -40 11 c-44 12 -78 8 -174
-19 -63 -17 -63 -17 -63 -53 0 -48 -28 -195 -45 -235 -31 -76 -91 -95 -151
-49 -43 33 -114 141 -170 260 l-46 97 -34 -7 c-23 -4 -41 -1 -56 10 -24 16
-50 20 -62 8z"></path><path d="M1718 6122 c-71 -28 -75 -33 -55 -69 l13 -23 67 45 c37 25 67 52 67
60 0 20 -14 18 -92 -13z"></path><path d="M7086 6113 c-10 -33 -25 -156 -20 -165 3 -4 12 -8 20 -8 10 0 14 12
14 38 0 22 7 61 15 87 8 27 12 52 9 57 -9 14 -32 9 -38 -9z"></path><path d="M5880 6103 c-8 -2 -20 -6 -27 -8 -8 -3 -8 -16 3 -51 8 -26 14 -65 14
-86 0 -38 1 -39 33 -36 31 3 32 4 29 43 -4 59 -22 145 -30 144 -4 0 -14 -3
-22 -6z"></path><path d="M2900 6085 c-36 -7 -94 -23 -130 -34 -75 -25 -270 -119 -270 -130 0
-4 18 -22 40 -39 l39 -32 86 49 c130 74 237 106 360 106 55 0 113 -4 128 -8
25 -7 29 -4 42 27 8 20 15 40 15 45 0 29 -195 39 -310 16z"></path><path d="M2929 5965 c-79 -16 -196 -63 -269 -109 l-53 -33 45 -34 c25 -19 55
-52 68 -73 35 -60 100 -126 157 -158 58 -33 78 -71 71 -138 -2 -27 -8 -35 -28
-40 -16 -4 -26 -14 -28 -28 -2 -14 -10 -22 -24 -22 -19 0 -20 -4 -14 -54 11
-88 54 -247 82 -304 47 -96 97 -94 162 6 35 54 112 232 127 293 6 24 3 28 -39
44 -32 13 -46 23 -46 37 0 10 -7 21 -15 24 -12 5 -15 25 -15 89 l0 84 38 3 37
3 3 105 c2 85 -1 118 -18 170 -17 53 -19 71 -10 94 6 16 9 30 7 32 -7 7 -110
24 -141 23 -17 0 -61 -7 -97 -14z"></path><path d="M3412 5553 l3 -28 1375 0 1375 0 3 28 3 27 -1381 0 -1381 0 3 -27z"></path><path d="M3449 5451 c123 -240 676 -436 1254 -442 70 0 127 -2 127 -4 0 -2
-20 -15 -45 -30 -57 -33 -90 -82 -111 -165 -17 -69 -14 -192 6 -198 6 -2 10
-38 10 -83 0 -57 -3 -78 -11 -73 -9 5 -10 -29 -7 -127 4 -108 9 -143 26 -181
22 -51 35 -57 70 -32 37 26 146 199 187 298 16 38 16 39 -4 33 -20 -5 -21 -1
-21 78 l0 83 44 36 c58 47 104 118 112 172 5 36 1 54 -20 98 -16 32 -40 63
-58 74 l-31 20 69 7 c241 23 432 61 606 119 70 24 128 42 128 40 0 -2 -14 -83
-31 -181 -49 -290 -49 -436 1 -537 15 -31 17 -42 7 -48 -24 -15 -204 -8 -304
12 -176 37 -157 39 -181 -18 -12 -28 -22 -70 -22 -95 l0 -44 88 -17 c199 -41
450 -6 534 74 36 35 38 40 38 97 0 33 -14 127 -32 209 -30 139 -32 161 -30
329 0 99 5 196 9 215 l9 35 79 8 c44 4 90 14 102 23 52 33 106 154 69 154 -8
0 -25 -18 -36 -39 -20 -41 -57 -76 -92 -87 -36 -11 -33 7 7 39 62 48 113 104
135 147 l20 40 -1360 0 -1360 0 19 -39z"></path><path d="M350 5294 c-235 -56 -215 -48 -193 -85 48 -82 201 -211 338 -285 39
-20 71 -38 72 -38 1 -1 -14 -53 -33 -116 -190 -621 -233 -1270 -121 -1835 l12
-60 180 -5 180 -5 12 -90 c14 -101 18 -279 13 -560 -4 -259 3 -276 118 -292
37 -5 47 -3 58 12 23 31 16 95 -20 202 -45 134 -56 314 -32 538 24 219 7 195
137 195 l111 0 -6 -27 c-3 -16 -13 -73 -21 -128 -38 -252 -45 -276 -92 -329
-23 -26 -43 -54 -43 -61 0 -7 -2 -20 -5 -27 -3 -8 8 -31 24 -52 29 -37 30 -41
24 -110 -10 -128 24 -180 118 -179 51 1 99 24 99 47 0 7 -14 20 -32 27 -18 7
-47 26 -65 42 -40 35 -44 80 -12 154 11 26 32 102 45 168 25 125 95 400 113
448 l11 27 239 0 239 0 20 88 c21 88 69 376 94 552 21 152 18 675 -5 820 -23
146 -76 353 -116 454 -18 43 -30 80 -29 81 2 2 37 19 78 40 106 53 197 115
258 178 l54 54 -147 102 -146 102 -173 -96 -174 -96 -184 92 -185 92 -167 -66
c-91 -37 -170 -67 -175 -67 -5 0 -64 32 -131 70 -67 39 -129 70 -138 69 -10
-1 -100 -21 -202 -45z"></path><path d="M2765 5275 c-16 -13 -38 -24 -49 -25 -45 -1 -101 -27 -140 -66 -30
-30 -71 -99 -145 -245 -57 -112 -138 -270 -182 -350 -43 -81 -79 -152 -79
-158 0 -6 48 -60 108 -119 59 -60 125 -134 146 -165 35 -51 38 -60 28 -82 -7
-14 -12 -36 -12 -48 0 -34 34 -82 69 -97 28 -11 31 -17 31 -54 0 -22 -8 -62
-17 -89 -14 -38 -15 -55 -7 -86 8 -29 7 -52 -3 -91 -18 -73 -42 -109 -85 -131
-25 -13 -38 -26 -38 -40 0 -44 55 -32 119 27 l41 36 0 -140 c0 -225 27 -446
76 -616 l25 -90 -23 -70 c-19 -58 -23 -93 -23 -186 0 -131 7 -161 109 -475 85
-265 108 -358 105 -425 -1 -30 -3 -140 -3 -243 -1 -184 0 -189 22 -207 12 -10
41 -21 64 -25 36 -6 44 -4 60 15 24 30 23 53 -8 141 -37 104 -52 255 -73 729
-5 118 -20 294 -32 391 -19 154 -20 180 -8 205 l14 29 129 3 c187 4 183 11
141 -248 -22 -130 -27 -210 -35 -500 -6 -190 -15 -366 -21 -392 -6 -26 -8 -55
-5 -66 4 -10 -9 -68 -28 -128 -47 -150 -37 -193 44 -179 60 10 79 31 88 95 9
64 7 246 -3 341 -10 85 7 159 97 439 108 338 121 395 116 525 -4 87 -10 123
-29 170 l-25 60 23 74 c49 155 82 421 83 661 1 118 2 124 17 102 24 -35 98
-82 128 -82 22 0 26 4 23 22 -2 12 -13 28 -25 34 -41 20 -62 46 -84 103 -17
45 -19 68 -14 121 5 48 2 75 -9 102 -9 21 -16 55 -16 77 0 33 5 43 28 57 16 9
34 25 41 36 13 22 17 89 6 107 -11 19 82 139 192 249 57 57 103 109 103 116 0
8 -45 98 -101 202 -56 104 -137 260 -180 346 -43 86 -93 173 -110 193 -31 35
-95 75 -120 75 -7 0 -20 7 -29 15 -16 14 -19 10 -45 -62 -36 -103 -95 -223
-134 -271 -108 -137 -211 -29 -268 281 -10 53 -22 97 -28 97 -5 0 -23 -11 -40
-25z m-61 -254 c3 -5 -13 -37 -35 -72 -47 -73 -68 -98 -46 -54 8 17 20 48 27
70 18 58 40 80 54 56z m650 -95 c57 -145 149 -291 266 -419 l53 -58 -56 -57
c-62 -63 -156 -192 -176 -240 -9 -21 -24 -35 -46 -42 -45 -15 -65 -40 -71 -92
-5 -38 -2 -49 21 -76 23 -27 26 -39 23 -88 l-3 -57 -39 101 c-39 99 -41 102
-75 107 -134 21 -243 63 -394 152 -43 25 -79 44 -80 42 -1 -2 -16 -38 -33 -79
-17 -41 -51 -121 -75 -178 -44 -103 -44 -103 -47 -62 -2 27 4 56 18 85 15 31
20 54 15 74 -7 32 -50 81 -71 81 -7 0 -28 29 -48 64 -43 76 -100 151 -169 223
l-51 52 60 63 c71 75 129 151 175 233 l34 60 5 -35 c10 -55 27 -78 85 -111 30
-17 55 -34 55 -37 0 -4 11 -77 25 -162 14 -85 25 -171 25 -190 0 -34 4 -38 88
-87 122 -73 230 -121 312 -139 39 -9 73 -14 76 -11 3 3 -6 32 -21 66 -39 93
-41 152 -11 351 15 96 30 176 35 178 28 10 102 65 116 86 33 50 12 131 -59
225 -25 34 -33 61 -20 74 13 12 22 -4 58 -97z m-636 -2002 c6 -56 -60 -73 -74
-18 -8 32 13 56 45 52 21 -2 27 -9 29 -34z m142 -38 c28 -35 -11 -93 -47 -70
-36 22 -23 84 17 84 10 0 23 -7 30 -14z m165 -60 c13 -19 14 -29 5 -45 -14
-27 -56 -28 -70 -2 -14 27 -13 37 6 55 22 23 41 20 59 -8z m145 -70 c28 -35
-11 -93 -47 -70 -36 22 -23 84 17 84 10 0 23 -7 30 -14z"></path><path d="M6418 4973 c-32 -27 -80 -76 -107 -110 -54 -69 -129 -209 -117 -221
16 -15 220 -4 301 17 144 38 329 140 454 251 37 32 43 41 32 54 -11 13 -17 12
-54 -7 -52 -27 -158 -34 -236 -17 -31 7 -89 27 -130 46 -41 19 -77 34 -80 34
-4 0 -32 -21 -63 -47z"></path><path d="M6985 4898 c-54 -54 -179 -143 -260 -185 -167 -86 -301 -118 -458
-111 -92 4 -98 3 -102 -17 -21 -101 -25 -139 -25 -230 0 -138 28 -281 95 -479
l53 -159 -23 -61 c-50 -133 -49 -138 60 -621 83 -363 108 -499 99 -527 -10
-32 -5 -283 6 -313 9 -25 78 -52 106 -41 27 11 28 57 1 141 -15 45 -27 97 -27
117 0 20 -5 58 -10 85 -6 26 -19 206 -30 398 -12 193 -23 382 -26 420 l-5 70
48 -90 c67 -126 74 -126 152 15 123 220 239 371 404 524 56 52 103 93 105 92
3 -4 -79 -199 -105 -251 -9 -16 -33 -53 -54 -81 -36 -49 -40 -52 -92 -56 -71
-6 -107 -29 -107 -68 0 -23 -13 -42 -55 -83 -44 -42 -55 -60 -55 -84 0 -43 50
-93 92 -93 27 0 30 2 23 23 -12 36 -16 101 -7 114 4 7 38 27 74 45 100 50 196
164 489 580 337 482 409 615 385 712 -11 45 -152 101 -331 130 -134 22 -246
53 -324 87 -35 16 -64 29 -65 28 0 -1 -14 -15 -31 -31z"></path><path d="M4452 4498 c-30 -6 -59 -25 -99 -62 l-57 -53 42 -62 c22 -34 44 -70
47 -82 6 -19 8 -19 37 6 33 28 65 30 81 3 9 -13 -1 -29 -52 -84 -100 -107
-114 -166 -60 -260 29 -52 30 -56 19 -108 -15 -73 -1 -152 60 -340 l49 -151
34 1 c61 2 128 43 217 133 l85 86 -3 59 c-4 51 1 67 33 132 32 66 42 77 86 99
68 35 92 75 83 140 -3 28 -17 76 -29 107 -37 91 -18 188 40 209 29 11 34 18
40 58 3 25 17 70 31 100 13 29 24 55 24 57 0 6 -74 5 -107 -2 -26 -5 -36 -18
-74 -96 -102 -213 -181 -318 -239 -318 -67 0 -98 79 -107 277 l-6 132 -31 10
c-53 16 -99 19 -144 9z"></path><path d="M5175 4430 c-14 -28 -29 -74 -32 -101 -5 -45 -4 -49 15 -49 11 0 27
-2 35 -6 11 -4 16 7 21 48 4 29 16 73 27 97 10 24 18 45 17 47 -2 1 -15 5 -30
9 -24 6 -29 2 -53 -45z"></path><path d="M4247 4325 c-17 -24 -17 -25 16 -72 19 -26 41 -65 49 -87 l15 -38 22
27 c14 19 19 35 15 49 -9 28 -84 146 -92 146 -4 0 -15 -12 -25 -25z"></path><path d="M4188 4260 c-1 -5 -25 -33 -51 -62 -67 -73 -336 -416 -349 -444 -6
-12 -8 -29 -5 -37 3 -8 63 -56 134 -107 286 -207 486 -387 518 -464 41 -98 -6
-175 -138 -225 -32 -12 -35 -27 -8 -36 34 -10 121 22 188 71 l21 15 -24 -113
c-13 -62 -45 -188 -69 -280 -25 -92 -45 -174 -45 -182 0 -8 -20 -77 -45 -154
-45 -141 -53 -198 -35 -248 6 -15 38 -63 71 -106 98 -131 175 -314 248 -590
49 -184 93 -415 100 -533 6 -92 13 -122 39 -182 18 -39 32 -80 32 -91 0 -29
-45 -79 -92 -103 -67 -34 -31 -79 65 -79 90 0 130 74 108 196 -9 47 -8 61 4
78 8 12 22 31 31 43 21 29 6 74 -40 123 -29 29 -37 50 -55 130 -30 140 -50
346 -60 605 -10 262 -25 329 -88 412 -46 60 -56 68 -121 100 -39 18 -52 29
-47 41 6 16 116 192 120 192 1 0 49 -22 106 -49 57 -27 147 -63 200 -81 l97
-33 11 -57 c7 -37 20 -65 35 -79 21 -19 25 -34 28 -104 3 -45 1 -147 -3 -226
-13 -219 -68 -806 -83 -870 -7 -31 -11 -72 -9 -91 3 -22 -9 -72 -31 -139 -41
-118 -44 -159 -18 -191 18 -22 20 -23 78 -9 85 20 89 31 88 249 -1 96 -5 207
-9 245 -9 90 8 163 120 513 94 292 120 408 110 487 -8 69 -44 144 -96 200
l-42 46 67 202 c82 247 105 354 113 522 7 167 -11 279 -62 382 -20 40 -40 73
-44 73 -4 0 -16 -9 -27 -21 -31 -35 -109 -68 -183 -79 -116 -16 -279 13 -441
80 l-70 29 0 -35 c0 -19 -3 -34 -7 -33 -8 0 -74 79 -139 164 -17 22 -63 92
-103 154 -119 189 -181 250 -276 274 l-46 12 56 47 c138 116 265 245 271 276
7 36 -15 101 -52 150 -25 32 -40 40 -46 22z"></path><path d="M4789 3409 c-76 -77 -173 -139 -221 -139 -22 -1 -22 -1 -4 -15 10 -8
60 -28 110 -45 184 -61 309 -74 417 -44 59 17 129 65 129 90 0 25 -134 125
-240 177 -57 29 -107 52 -110 53 -3 0 -39 -34 -81 -77z"></path></g></svg></div>`,1))])}var H2=i2($2,[["render",D2]]);const O2={class:"cus-header-section"},G2={class:"cus-header-cont"},F2={href:"/"},Q2={class:"cus-header-logo-cont"},W2={key:0,class:""},K2={key:1,class:""},N2={key:0,class:"cus-header-nav"},c3={__name:"MainLayout",setup(c){const a=S(!1);function z(){a.value=!a.value}return(i,n)=>{const t=x2("router-view");return $(),F(T2,{class:"",view:"lHh Lpr lFf"},{default:q(()=>[f("div",O2,[f("div",G2,[f("a",F2,[f("div",Q2,[n[1]||(n[1]=f("img",{src:"images/klogo.png",alt:"Kachia Culture",class:""},null,-1)),i.$q.screen.lt.md?e1("",!0):($(),a1("h2",W2," Kachia Local Government Area ")),i.$q.screen.lt.md?($(),a1("h2",K2,"Kachia LGA")):e1("",!0)])]),i.$q.screen.lt.md?e1("",!0):($(),a1("div",N2,[C(V,{flat:"",label:"Home",to:{path:"/"}}),C(V,{flat:"",label:"About Kachia",to:{path:"/about"}}),C(V,{flat:"",label:"Culture",to:{path:"/culture"}}),C(V,{flat:"",label:"Contact",to:{path:"/contact"}}),n[2]||(n[2]=f("div",{class:"cus-e-gov-btn-cont"},[f("button",{style:{"--clr":"#7808d0"}},[f("span",{class:"button__icon-wrapper"},[f("svg",{viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"button__icon-svg",width:"10"},[f("path",{d:"M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z",fill:"currentColor"})]),f("svg",{viewBox:"0 0 14 15",fill:"none",width:"10",xmlns:"http://www.w3.org/2000/svg",class:"button__icon-svg button__icon-svg--copy"},[f("path",{d:"M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z",fill:"currentColor"})])]),Y(" E-Gov Portal ")])],-1))])),i.$q.screen.lt.md?($(),F(V,{key:1,flat:"",dense:"",round:"",icon:"menu",onClick:z,class:"q-hidden-md text-green-main"})):e1("",!0)])]),C(_2,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=o=>a.value=o),side:"left",overlay:"",class:"q-hidden-md-and-up"},{default:q(()=>[C(z2,null,{default:q(()=>[j(($(),F(J,{clickable:"",to:{path:"/"}},{default:q(()=>[C(U,null,{default:q(()=>n[3]||(n[3]=[Y("Home")])),_:1})]),_:1})),[[l1]]),j(($(),F(J,{clickable:"",to:{path:"/about"}},{default:q(()=>[C(U,null,{default:q(()=>n[4]||(n[4]=[Y("About Kachia")])),_:1})]),_:1})),[[l1]]),j(($(),F(J,{clickable:"",to:{path:"/culture"}},{default:q(()=>[C(U,null,{default:q(()=>n[5]||(n[5]=[Y("Culture")])),_:1})]),_:1})),[[l1]]),j(($(),F(J,{clickable:"",to:{path:"/contact"}},{default:q(()=>[C(U,null,{default:q(()=>n[6]||(n[6]=[Y("Contact")])),_:1})]),_:1})),[[l1]])]),_:1})]),_:1},8,["modelValue"]),C(k2,null,{default:q(()=>[C(t)]),_:1}),C(H2)]),_:1})}}};export{c3 as default};
