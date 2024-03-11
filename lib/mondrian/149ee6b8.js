"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[26],{306:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(796),i=n.n(o),s=n(51),r=n.n(s)()(i());r.push([t.id,".hXRin0tc .tiptap {\n  font-family: var(--mon-theme-font-body);\n  height: 100%;\n  width: 100%;\n}\n\n.hXRin0tc .tiptap :is(h1, h2) {\n  line-height: inherit;\n  font-family: var(--mon-theme-font-heading);\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.hXRin0tc .tiptap :is(p, h1, h2) {\n  margin: 0;\n}\n\n.hXRin0tc .tiptap strong {\n  font-weight: bold;\n}\n\n.hXRin0tc .tiptap em {\n  font-style: italic;\n}\n\n.hXRin0tc .tiptap s {\n  text-decoration: line-through;\n}\n\n.hXRin0tc .tiptap u {\n  text-decoration: underline;\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/styles/tiptap.module.css"],names:[],mappings:"AAAA;EACE,uCAAuC;EACvC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,0CAA0C;EAC1C,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B",sourcesContent:[".textItem :global(.tiptap) {\n  font-family: var(--mon-theme-font-body);\n  height: 100%;\n  width: 100%;\n}\n\n.textItem :global(.tiptap :is(h1, h2)) {\n  line-height: inherit;\n  font-family: var(--mon-theme-font-heading);\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.textItem :global(.tiptap :is(p, h1, h2)) {\n  margin: 0;\n}\n\n.textItem :global(.tiptap strong) {\n  font-weight: bold;\n}\n\n.textItem :global(.tiptap em) {\n  font-style: italic;\n}\n\n.textItem :global(.tiptap s) {\n  text-decoration: line-through;\n}\n\n.textItem :global(.tiptap u) {\n  text-decoration: underline;\n}\n"],sourceRoot:""}]),r.locals={textItem:"hXRin0tc"};const a=r},26:(t,e,n)=>{n.r(e),n.d(e,{default:()=>be});var o=n(746);function i(t){(0,o.append_styles)(t,"svelte-su3qhz",".mondrian__img-1XHDzr{height:100%;width:100%}")}function s(t){let e,n;return{c(){e=(0,o.element)("div"),(0,o.attr)(e,"aria-label",n=t[0].alt),(0,o.attr)(e,"class","mondrian__img-1XHDzr"),(0,o.attr)(e,"role","img")},m(t,n){(0,o.insert)(t,e,n)},p(t,[i]){1&i&&n!==(n=t[0].alt)&&(0,o.attr)(e,"aria-label",n)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e)}}}function r(t,e,n){let{item:o}=e;return t.$$set=t=>{"item"in t&&n(0,o=t.item)},[o]}n(919);class a extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,r,s,o.safe_not_equal,{item:0},i)}}const l=a;var d=n(743),c=n.n(d),u=n(124),m=n.n(u),p=n(591),_=n.n(p),g=n(35),f=n.n(g),h=n(190),$=n.n(h),y=n(799),b=n.n(y),v=n(306),w={};w.styleTagTransform=b(),w.setAttributes=f(),w.insert=_().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=$(),c()(v.Z,w);const x=v.Z&&v.Z.locals?v.Z.locals:void 0;var k=n(195);class A{constructor(t){this.zod=t}parse(t){return this.zod.parse(t)}is(t){return this.zod.safeParse(t).success}assert(t){this.parse(t)}}const z=new A(k.ZP.object({name:k.ZP.enum(["fadeInUp"]),delay:k.ZP.number().min(0),duration:k.ZP.number().positive(),easing:k.ZP.enum(["ease","ease-in","ease-out","ease-in-out","linear","step-start","step-end"])})),P=new A(k.ZP.object({id:k.ZP.string(),path:k.ZP.string(),width:k.ZP.number().optional(),height:k.ZP.number().optional()})),Z=new A(k.ZP.object({unit:k.ZP.enum(["px","%","auto","fr"]),value:k.ZP.number()})),C=new A(k.ZP.object({borderRadius:k.ZP.object({topLeft:Z.zod.default({value:0,unit:"px"}),topRight:Z.zod.optional(),bottomRight:Z.zod.optional(),bottomLeft:Z.zod.optional()})})),I=new A(k.ZP.object({assetId:k.ZP.string().optional(),color:k.ZP.string().optional(),opacity:k.ZP.number().min(0).max(1).default(1)})),S=new A(I.zod.extend({type:k.ZP.literal("color"),color:I.zod.shape.color.unwrap().default("#e4e4e4")})),R=new A(I.zod.extend({type:k.ZP.literal("image"),assetId:I.zod.shape.assetId.unwrap()})),E=new A(I.zod.extend({type:k.ZP.literal("none")})),j=new A(k.ZP.discriminatedUnion("type",[S.zod,R.zod,E.zod])),B=new A(k.ZP.discriminatedUnion("type",[S.zod,E.zod])),M=new A(k.ZP.object({fill:j.zod,overlay:B.zod})),L=new A(k.ZP.object({top:Z.zod.default({value:0,unit:"px"}),left:Z.zod.default({value:0,unit:"px"}),bottom:Z.zod.default({value:0,unit:"px"}),right:Z.zod.default({value:0,unit:"px"})})),N=new A(k.ZP.object({padding:L.zod})),J=new A(k.ZP.object({width:Z.zod.default({value:100,unit:"%"}),aspectRatioLocked:k.ZP.boolean().default(!1),height:Z.zod.default({value:100,unit:"%"}),position:k.ZP.enum(["absolute"]).default("absolute"),x:Z.zod.default({value:0,unit:"px"}),y:Z.zod.default({value:0,unit:"px"}),clipPath:k.ZP.literal("ellipse").optional(),visible:k.ZP.boolean({required_error:"visible is required",invalid_type_error:"visible must be a boolean"}).default(!0),entranceAnimation:z.zod.nullable().optional()}).merge(M.zod).merge(N.zod).merge(C.zod).extend({id:k.ZP.string(),tagName:k.ZP.enum(["div","figure","figcaption","blockquote"]).default("div"),parentId:k.ZP.string(),blockumentId:k.ZP.string(),name:k.ZP.string().max(128),assets:k.ZP.record(P.zod).default({}).optional()})),T=new A(k.ZP.object({id:k.ZP.string()})),D=(new A(k.ZP.object({id:k.ZP.string(),title:k.ZP.string().max(255),children:k.ZP.array(T.zod).max(1)})),new A(J.zod.extend({type:k.ZP.literal("group"),children:k.ZP.array(T.zod).default([])}))),W=new A(J.zod.extend({type:k.ZP.literal("image"),alt:k.ZP.string(),fill:R.zod})),q=new A(J.zod.extend({type:k.ZP.literal("shape"),width:Z.zod.default({unit:"px",value:100}),height:Z.zod.default({unit:"px",value:100})})),X=new A(k.ZP.object({id:k.ZP.string(),type:k.ZP.literal("tiptap")})),Y=new A(J.zod.extend({type:k.ZP.literal("text"),text:X.zod}));new A(k.ZP.discriminatedUnion("type",[D.zod,W.zod,q.zod,Y.zod]));var O,H;!function(t){t.Blockuments="blockuments",t.Items="items"}(O||(O={})),O.Blockuments,O.Items,function(t){t.APP="app",t.BLOCKUMENT="blockument",t.COURSE="course"}(H||(H={}));var K=n(881),U=n(633),F=n(686),G=n(82),Q=n(983),V=n(277);const tt=/([a-z%]+)\s*$/i,et=K.hj.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle"],attributes:{textSize:{default:14,parseHTML(t){const e=t.style.fontSize,n=parseFloat(e);if(isNaN(n))return null;const o=tt.exec(e);if(null==o)return null;switch(o[1]){case"rem":return Math.round(10*n);case"px":return Math.round(n);default:return null}},renderHTML:t=>({style:`font-size: ${t.textSize/10}rem`})}}}],addCommands:()=>({setTextSize:t=>({chain:e})=>e().setMark("textStyle",{textSize:t}).run()})}),nt=K.hj.create({name:"paragraphStyle",addCommands:()=>({setParagraphStyle:(t,e)=>({dispatch:n,state:o,tr:i})=>{const s=i.selection.$from.blockRange(i.selection.$from);return null!=s&&(null!=n&&(i.doc.nodesBetween(s.start,s.end,((n,s)=>{if(n.type===o.schema.nodes.heading||n.type===o.schema.nodes.paragraph){const r="heading"===t?o.schema.nodes.heading:o.schema.nodes.paragraph,a={...n.attrs};"heading"===t&&"number"==typeof e.level&&(a.level=e.level),i.setNodeMarkup(s,r,a,n.marks)}if(n.type===o.schema.nodes.text){const t=o.schema.marks.textStyle.isInSet(n.marks);i.addMark(s,s+n.nodeSize,o.schema.marks.textStyle.create({...t?.attrs,textSize:e.textSize}))}})),e.bold?i.addMark(s.start,s.end,o.schema.marks.bold.create()):i.removeMark(s.start,s.end,o.schema.marks.bold)),!0)}})});U.Z.configure({types:["textStyle"]});const ot=[V.Z.configure({history:!1,heading:{levels:[1,2]}}),F.Z.configure({types:["heading","paragraph"]}),G.Z,U.Z,nt,et,Q.Z];(0,K.J1)(ot);var it=n(111),st=n(516);const rt=function(){const t=(0,st.writable)({blockuments:{},items:{},tiptap:{}}),{subscribe:e,set:n,update:o}=t,i=new Map;return{subscribe:e,set:n,update:o,addManifest:(t,e)=>{i.set(t,e),s()},removeManifest:t=>{i.delete(t),s()}};function s(){n(function(...t){const e={};for(const n of t)for(const[t,o]of Object.entries(n))e[t]=Object.assign({},e[t],o);return e}(...i.values()))}}();function at(t){let e,n,i,s=(0,it.a)(t[0],ot)+"";return{c(){e=(0,o.element)("div"),n=(0,o.element)("div"),(0,o.attr)(n,"class","tiptap"),(0,o.attr)(e,"class",i=x.textItem)},m(t,i){(0,o.insert)(t,e,i),(0,o.append)(e,n),n.innerHTML=s},p(t,e){1&e&&s!==(s=(0,it.a)(t[0],ot)+"")&&(n.innerHTML=s)},d(t){t&&(0,o.detach)(e)}}}function lt(t){let e,n=void 0!==t[0]&&at(t);return{c(){n&&n.c(),e=(0,o.empty)()},m(t,i){n&&n.m(t,i),(0,o.insert)(t,e,i)},p(t,[o]){void 0!==t[0]?n?n.p(t,o):(n=at(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e),n&&n.d(t)}}}function dt(t,e,n){let i,s,r;(0,o.component_subscribe)(t,rt,(t=>n(3,r=t)));let{item:a}=e;return t.$$set=t=>{"item"in t&&n(1,a=t.item)},t.$$.update=()=>{2&t.$$.dirty&&n(2,i=a.text.id),12&t.$$.dirty&&n(0,s=r.tiptap?.[i])},[s,a,i,r]}class ct extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,dt,lt,o.safe_not_equal,{item:1})}}const ut=ct;var mt=n(317);function pt(t){(0,o.append_styles)(t,"svelte-1vwx6yd",".mondrian__surface-3PSuzl{width:100%;position:relative}")}function _t(t,e,n){const o=t.slice();return o[2]=e[n],o[4]=n,o}function gt(t,e){let n,i,s,r;var a=e[1];function l(t,e){return{props:{idx:t[4],itemId:t[2].id}}}return a&&(i=(0,o.construct_svelte_component)(a,l(e))),{key:t,first:null,c(){n=(0,o.empty)(),i&&(0,o.create_component)(i.$$.fragment),s=(0,o.empty)(),this.first=n},m(t,e){(0,o.insert)(t,n,e),i&&(0,o.mount_component)(i,t,e),(0,o.insert)(t,s,e),r=!0},p(t,n){if(e=t,2&n&&a!==(a=e[1])){if(i){(0,o.group_outros)();const t=i;(0,o.transition_out)(t.$$.fragment,1,0,(()=>{(0,o.destroy_component)(t,1)})),(0,o.check_outros)()}a?(i=(0,o.construct_svelte_component)(a,l(e)),(0,o.create_component)(i.$$.fragment),(0,o.transition_in)(i.$$.fragment,1),(0,o.mount_component)(i,s.parentNode,s)):i=null}else if(a){const t={};1&n&&(t.idx=e[4]),1&n&&(t.itemId=e[2].id),i.$set(t)}},i(t){r||(i&&(0,o.transition_in)(i.$$.fragment,t),r=!0)},o(t){i&&(0,o.transition_out)(i.$$.fragment,t),r=!1},d(t){t&&((0,o.detach)(n),(0,o.detach)(s)),i&&(0,o.destroy_component)(i,t)}}}function ft(t){let e,n,i=[],s=new Map,r=(0,o.ensure_array_like)(t[0].children);const a=t=>t[2].id;for(let e=0;e<r.length;e+=1){let n=_t(t,r,e),o=a(n);s.set(o,i[e]=gt(o,n))}return{c(){e=(0,o.element)("div");for(let t=0;t<i.length;t+=1)i[t].c();(0,o.attr)(e,"class","mondrian__surface-3PSuzl")},m(t,s){(0,o.insert)(t,e,s);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null);n=!0},p(t,[n]){3&n&&(r=(0,o.ensure_array_like)(t[0].children),(0,o.group_outros)(),i=(0,o.update_keyed_each)(i,n,a,1,t,r,s,e,o.outro_and_destroy_block,gt,null,_t),(0,o.check_outros)())},i(t){if(!n){for(let t=0;t<r.length;t+=1)(0,o.transition_in)(i[t]);n=!0}},o(t){for(let t=0;t<i.length;t+=1)(0,o.transition_out)(i[t]);n=!1},d(t){t&&(0,o.detach)(e);for(let t=0;t<i.length;t+=1)i[t].d()}}}function ht(t,e,n){let{item:o}=e,{Item:i=Qt}=e;return t.$$set=t=>{"item"in t&&n(0,o=t.item),"Item"in t&&n(1,i=t.Item)},[o,i]}class $t extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,ht,ft,o.safe_not_equal,{item:0,Item:1},pt)}}const yt=$t;function bt(t){(0,o.append_styles)(t,"svelte-bbp0xy",".mondrian__clipped-KfJDq2{border-radius:inherit;display:flex;height:100%;inset:0;position:absolute;width:100%;z-index:-1}")}function vt(t){let e,n;const i=t[3].default,s=(0,o.create_slot)(i,t,t[2],null);return{c(){e=(0,o.element)("div"),s&&s.c(),(0,o.attr)(e,"class","mondrian__clipped-KfJDq2"),(0,o.set_style)(e,"clip-path",t[0])},m(t,i){(0,o.insert)(t,e,i),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||4&e)&&(0,o.update_slot_base)(s,i,t,t[2],n?(0,o.get_slot_changes)(i,t[2],e,null):(0,o.get_all_dirty_from_scope)(t[2]),null)},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function wt(t,e,n){let{$$slots:o={},$$scope:i}=e,{item:s}=e;const r="ellipse"===s.clipPath?"ellipse(50% 50%)":void 0;return t.$$set=t=>{"item"in t&&n(1,s=t.item),"$$scope"in t&&n(2,i=t.$$scope)},[r,s,i,o]}class xt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,wt,vt,o.safe_not_equal,{item:1},bt)}}const kt=xt;matchMedia("(prefers-reduced-motion)");const At=new WeakMap,zt=(new IntersectionObserver((t=>{for(const e of t){if(!e.isIntersecting)continue;const t=At.get(e.target);null!=t&&"paused"===t.playState&&t.play()}}),{threshold:.3}),({value:t,unit:e})=>{switch(e){case"auto":return"auto";case"px":return t/10+"rem";default:return(({value:t,unit:e})=>`${t}${e}`)({value:t,unit:e})}});function Pt(t){(0,o.append_styles)(t,"svelte-1cx7a5",".mondrian__fill-QARoMt{background-position:center;background-size:cover;inset:0;position:absolute;border-radius:inherit}")}function Zt(t){let e;return{c(){e=(0,o.element)("div"),(0,o.attr)(e,"class","mondrian__fill-QARoMt"),(0,o.set_style)(e,"background-color",t[1]),(0,o.set_style)(e,"background-image",t[2]),(0,o.set_style)(e,"opacity",t[0].opacity)},m(t,n){(0,o.insert)(t,e,n)},p(t,n){2&n&&(0,o.set_style)(e,"background-color",t[1]),4&n&&(0,o.set_style)(e,"background-image",t[2]),1&n&&(0,o.set_style)(e,"opacity",t[0].opacity)},d(t){t&&(0,o.detach)(e)}}}function Ct(t){let e,n=(null!=t[1]||null!=t[2])&&Zt(t);return{c(){n&&n.c(),e=(0,o.empty)()},m(t,i){n&&n.m(t,i),(0,o.insert)(t,e,i)},p(t,[o]){null!=t[1]||null!=t[2]?n?n.p(t,o):(n=Zt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e),n&&n.d(t)}}}function It(t,e,n){let{assets:o}=e,{fill:i}=e,s=null,r=null;return t.$$set=t=>{"assets"in t&&n(3,o=t.assets),"fill"in t&&n(0,i=t.fill)},t.$$.update=()=>{if(9&t.$$.dirty)switch(i?.type){case"color":n(1,s=i.color),n(2,r=null);break;case"image":{n(1,s=null);const t=o?.[i.assetId];n(2,r=null==t?null:`url("${function(t){return`assets/${t.path}`}(t)}")`);break}default:n(1,s=n(2,r=null))}},[i,s,r,o]}class St extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,It,Ct,o.safe_not_equal,{assets:3,fill:0},Pt)}}const Rt=St;function Et(t){(0,o.append_styles)(t,"svelte-1sh5ere",'.mondrian__item-3rRJ0W{position:absolute;z-index:1;height:max-content;width:max-content;user-select:none}.mondrian__item-3rRJ0W.mondrian__--mon-dragging-3gjeTP{cursor:grab;opacity:0.3}.mondrian__item-3rRJ0W.mondrian__--root-1WiLgF{position:relative}.mondrian__item-3rRJ0W.mondrian__--hidden-1OtkiG{display:none}.mondrian__item-3rRJ0W.mondrian__--selected-3sjTc4{outline:1px solid var(--mon-color-primary-500)}.mondrian__item-3rRJ0W.mondrian__--dropping-into-2M5Owk{outline:1px dashed var(--mon-color-primary-500)}.mondrian__item-3rRJ0W.mondrian__--hover-2KKJYP{outline:2px solid var(--mon-color-primary-500)}.mondrian__item-3rRJ0W.mondrian__--disabled-3CTj85,.mondrian__item-3rRJ0W.mondrian__--disabled-3CTj85 *{pointer-events:none !important}.mondrian__item-3rRJ0W.mondrian__--debug-wNUYDz::after{content:attr(data-parent-id) ">" attr(data-item-id);position:absolute;bottom:0;right:0;overflow:hidden;white-space:nowrap;padding:2px 4px;font:1.1rem / 1 monospace;background-color:#f006;backdrop-filter:grayscale(100%) blur(3px);color:#000;border-radius:2px 0 0 0;pointer-events:none}')}const jt=t=>({}),Bt=t=>({}),Mt=t=>({}),Lt=t=>({});function Nt(t){let e,n;return e=new Rt({props:{assets:t[0].assets,fill:t[14]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n&&(o.assets=t[0].assets),16384&n&&(o.fill=t[14]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function Jt(t){let e,n;return e=new Rt({props:{assets:t[0].assets,fill:t[13]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n&&(o.assets=t[0].assets),8192&n&&(o.fill=t[13]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function Tt(t){let e,n,i,s=null!=t[14]&&Nt(t),r=null!=t[13]&&Jt(t);return{c(){s&&s.c(),e=(0,o.space)(),r&&r.c(),n=(0,o.empty)()},m(t,a){s&&s.m(t,a),(0,o.insert)(t,e,a),r&&r.m(t,a),(0,o.insert)(t,n,a),i=!0},p(t,i){null!=t[14]?s?(s.p(t,i),16384&i&&(0,o.transition_in)(s,1)):(s=Nt(t),s.c(),(0,o.transition_in)(s,1),s.m(e.parentNode,e)):s&&((0,o.group_outros)(),(0,o.transition_out)(s,1,1,(()=>{s=null})),(0,o.check_outros)()),null!=t[13]?r?(r.p(t,i),8192&i&&(0,o.transition_in)(r,1)):(r=Jt(t),r.c(),(0,o.transition_in)(r,1),r.m(n.parentNode,n)):r&&((0,o.group_outros)(),(0,o.transition_out)(r,1,1,(()=>{r=null})),(0,o.check_outros)())},i(t){i||((0,o.transition_in)(s),(0,o.transition_in)(r),i=!0)},o(t){(0,o.transition_out)(s),(0,o.transition_out)(r),i=!1},d(t){t&&((0,o.detach)(e),(0,o.detach)(n)),s&&s.d(t),r&&r.d(t)}}}function Dt(t){let e,n,i,s,r,a,l,d,c,u,m,p,_,g;n=new kt({props:{item:t[0],$$slots:{default:[Tt]},$$scope:{ctx:t}}});const f=t[20].before,h=(0,o.create_slot)(f,t,t[26],Lt);var $=t[2];function y(t,e){return{props:{item:t[0]}}}$&&(r=(0,o.construct_svelte_component)($,y(t)));const b=t[20].after,v=(0,o.create_slot)(b,t,t[26],Bt);let w=[{"data-item-type":l=t[0].type},{"data-item-id":d=t[0].id.slice(0,5)},{"data-parent-id":c=t[0].parentId.slice(0,5)},{"data-mon-item-id":u=t[0].id},{class:"mondrian__item-3rRJ0W"},{tabindex:"-1"}],x={};for(let t=0;t<w.length;t+=1)x=(0,o.assign)(x,w[t]);return{c(){e=(0,o.element)(t[0].tagName??"div"),(0,o.create_component)(n.$$.fragment),i=(0,o.space)(),h&&h.c(),s=(0,o.space)(),r&&(0,o.create_component)(r.$$.fragment),a=(0,o.space)(),v&&v.c(),(0,o.set_dynamic_element_data)(t[0].tagName??"div")(e,x),(0,o.toggle_class)(e,"mondrian__--debug-wNUYDz",!1),(0,o.toggle_class)(e,"mondrian__--mon-dragging-3gjeTP",t[6]),(0,o.toggle_class)(e,"mondrian__--root-1WiLgF",t[1]),(0,o.toggle_class)(e,"mondrian__--hidden-1OtkiG",!t[0].visible),(0,o.toggle_class)(e,"mondrian__--selected-3sjTc4",t[3]),(0,o.toggle_class)(e,"mondrian__--dropping-into-2M5Owk",t[7]),(0,o.toggle_class)(e,"mondrian__--hover-2KKJYP",t[4]),(0,o.toggle_class)(e,"mondrian__--disabled-3CTj85",t[5]),(0,o.set_style)(e,"padding",t[12]),(0,o.set_style)(e,"width",t[18]),(0,o.set_style)(e,"height",t[17]),(0,o.set_style)(e,"border-radius",t[11]),(0,o.set_style)(e,"top",t[15]),(0,o.set_style)(e,"left",t[16]),(0,o.set_style)(e,"z-index",t[10])},m(l,d){(0,o.insert)(l,e,d),(0,o.mount_component)(n,e,null),(0,o.append)(e,i),h&&h.m(e,null),(0,o.append)(e,s),r&&(0,o.mount_component)(r,e,null),(0,o.append)(e,a),v&&v.m(e,null),t[25](e),p=!0,_||(g=[(0,o.listen)(e,"mousedown",t[21]),(0,o.listen)(e,"click",t[22]),(0,o.listen)(e,"keydown",t[23]),(0,o.listen)(e,"keyup",t[24]),(0,o.action_destroyer)(m=t[8].call(null,e,{itemId:t[0].id,enabled:!t[5]}))],_=!0)},p(t,i){const s={};if(1&i&&(s.item=t[0]),67133441&i&&(s.$$scope={dirty:i,ctx:t}),n.$set(s),h&&h.p&&(!p||67108864&i)&&(0,o.update_slot_base)(h,f,t,t[26],p?(0,o.get_slot_changes)(f,t[26],i,Mt):(0,o.get_all_dirty_from_scope)(t[26]),Lt),4&i&&$!==($=t[2])){if(r){(0,o.group_outros)();const t=r;(0,o.transition_out)(t.$$.fragment,1,0,(()=>{(0,o.destroy_component)(t,1)})),(0,o.check_outros)()}$?(r=(0,o.construct_svelte_component)($,y(t)),(0,o.create_component)(r.$$.fragment),(0,o.transition_in)(r.$$.fragment,1),(0,o.mount_component)(r,e,a)):r=null}else if($){const e={};1&i&&(e.item=t[0]),r.$set(e)}v&&v.p&&(!p||67108864&i)&&(0,o.update_slot_base)(v,b,t,t[26],p?(0,o.get_slot_changes)(b,t[26],i,jt):(0,o.get_all_dirty_from_scope)(t[26]),Bt),(0,o.set_dynamic_element_data)(t[0].tagName??"div")(e,x=(0,o.get_spread_update)(w,[(!p||1&i&&l!==(l=t[0].type))&&{"data-item-type":l},(!p||1&i&&d!==(d=t[0].id.slice(0,5)))&&{"data-item-id":d},(!p||1&i&&c!==(c=t[0].parentId.slice(0,5)))&&{"data-parent-id":c},(!p||1&i&&u!==(u=t[0].id))&&{"data-mon-item-id":u},{class:"mondrian__item-3rRJ0W"},{tabindex:"-1"}])),m&&(0,o.is_function)(m.update)&&33&i&&m.update.call(null,{itemId:t[0].id,enabled:!t[5]}),(0,o.toggle_class)(e,"mondrian__--debug-wNUYDz",!1),(0,o.toggle_class)(e,"mondrian__--mon-dragging-3gjeTP",t[6]),(0,o.toggle_class)(e,"mondrian__--root-1WiLgF",t[1]),(0,o.toggle_class)(e,"mondrian__--hidden-1OtkiG",!t[0].visible),(0,o.toggle_class)(e,"mondrian__--selected-3sjTc4",t[3]),(0,o.toggle_class)(e,"mondrian__--dropping-into-2M5Owk",t[7]),(0,o.toggle_class)(e,"mondrian__--hover-2KKJYP",t[4]),(0,o.toggle_class)(e,"mondrian__--disabled-3CTj85",t[5]),4096&i&&(0,o.set_style)(e,"padding",t[12]),262144&i&&(0,o.set_style)(e,"width",t[18]),131072&i&&(0,o.set_style)(e,"height",t[17]),2048&i&&(0,o.set_style)(e,"border-radius",t[11]),32768&i&&(0,o.set_style)(e,"top",t[15]),65536&i&&(0,o.set_style)(e,"left",t[16]),1024&i&&(0,o.set_style)(e,"z-index",t[10])},i(t){p||((0,o.transition_in)(n.$$.fragment,t),(0,o.transition_in)(h,t),r&&(0,o.transition_in)(r.$$.fragment,t),(0,o.transition_in)(v,t),p=!0)},o(t){(0,o.transition_out)(n.$$.fragment,t),(0,o.transition_out)(h,t),r&&(0,o.transition_out)(r.$$.fragment,t),(0,o.transition_out)(v,t),p=!1},d(i){i&&(0,o.detach)(e),(0,o.destroy_component)(n),h&&h.d(i),r&&(0,o.destroy_component)(r),v&&v.d(i),t[25](null),_=!1,(0,o.run_all)(g)}}}function Wt(t){let e,n,i=t[0].tagName??"div",s=(t[0].tagName??"div")&&Dt(t);return{c(){s&&s.c(),e=(0,o.empty)()},m(t,i){s&&s.m(t,i),(0,o.insert)(t,e,i),n=!0},p(t,[n]){t[0].tagName??"div"?i?(0,o.safe_not_equal)(i,t[0].tagName??"div")?(s.d(1),s=Dt(t),i=t[0].tagName??"div",s.c(),s.m(e.parentNode,e)):s.p(t,n):(s=Dt(t),i=t[0].tagName??"div",s.c(),s.m(e.parentNode,e)):i&&(s.d(1),s=null,i=t[0].tagName??"div")},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function qt(t,e,n){let i,s,r,a,l,d,c,u,m,p,{$$slots:_={},$$scope:g}=e,{item:f}=e,{idx:h=0}=e,{isRoot:$=!1}=e,{ItemComponent:y}=e,{isSelected:b=!1}=e,{isHovered:v=!1}=e,{isDisabled:w=!1}=e,{isDragging:x=!1}=e,{isDroppingInto:k=!1}=e,{hoverItem:A=(()=>{})}=e;return t.$$set=t=>{"item"in t&&n(0,f=t.item),"idx"in t&&n(19,h=t.idx),"isRoot"in t&&n(1,$=t.isRoot),"ItemComponent"in t&&n(2,y=t.ItemComponent),"isSelected"in t&&n(3,b=t.isSelected),"isHovered"in t&&n(4,v=t.isHovered),"isDisabled"in t&&n(5,w=t.isDisabled),"isDragging"in t&&n(6,x=t.isDragging),"isDroppingInto"in t&&n(7,k=t.isDroppingInto),"hoverItem"in t&&n(8,A=t.hoverItem),"$$scope"in t&&n(26,g=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&n(18,i=zt(f.width)),1&t.$$.dirty&&n(17,s=zt(f.height)),1&t.$$.dirty&&n(16,r=zt(f.x)),1&t.$$.dirty&&n(15,a=zt(f.y)),1&t.$$.dirty&&n(14,l=f.fill),1&t.$$.dirty&&n(13,d=f.overlay),1&t.$$.dirty&&n(12,c=(({padding:t})=>{const e=zt(t.top),n=zt(t.left),o=zt(t.bottom??t.top);return`${e} ${zt(t.right??t.left)} ${o} ${n}`})(f)),1&t.$$.dirty&&n(11,u=zt(f.borderRadius.topLeft)),524288&t.$$.dirty&&n(10,m=9999-h)},[f,$,y,b,v,w,x,k,A,p,m,u,c,d,l,a,r,s,i,h,_,function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(t){o.binding_callbacks[t?"unshift":"push"]((()=>{p=t,n(9,p)}))},g]}class Xt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,qt,Wt,o.safe_not_equal,{item:0,idx:19,isRoot:1,ItemComponent:2,isSelected:3,isHovered:4,isDisabled:5,isDragging:6,isDroppingInto:7,hoverItem:8},Et)}}const Yt=Xt,Ot=[["white",16777215],["grey-200",16316664],["grey-300",15658734],["grey-400",15000804],["grey-500",13421772],["grey-600",9408399],["grey-700",7368816],["grey-800",2631720],["black",0],["primary-100",15593471],["primary-300",10200317],["primary-500",4874236],["primary-700",2569145],["primary-900",527710]],Ht=Ot.map((([t,e])=>[t,[e>>16&255,e>>8&255,255&e]])),Kt=new Array;for(const[t,e]of Ot)Kt.push(`--mon-color-${t}: #${e.toString(16).padStart(6,"0")}`);for(const[t,e]of Ht)Kt.push(`--mon-color-${t}-rgb: ${e.join(", ")}`);function Ut(t){let e,n;return e=new Yt({props:{item:t[2],idx:t[0],isRoot:t[1],ItemComponent:t[3]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,[n]){const o={};4&n&&(o.item=t[2]),1&n&&(o.idx=t[0]),2&n&&(o.isRoot=t[1]),8&n&&(o.ItemComponent=t[3]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function Ft(t,e,n){let i,s,r;(0,o.component_subscribe)(t,rt,(t=>n(5,r=t)));let{itemId:a}=e,{idx:d=0}=e,{isRoot:c=!1}=e;return t.$$set=t=>{"itemId"in t&&n(4,a=t.itemId),"idx"in t&&n(0,d=t.idx),"isRoot"in t&&n(1,c=t.isRoot)},t.$$.update=()=>{48&t.$$.dirty&&n(2,i=r.items[a]),4&t.$$.dirty&&n(3,s=(t=>({image:()=>l,text:()=>ut,group:()=>yt,shape:()=>null}[t.type]()))(i))},[d,c,i,s,a,r]}(new CSSStyleSheet).insertRule(`:root { ${Kt.join("; ")} }`);class Gt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,Ft,Ut,o.safe_not_equal,{itemId:4,idx:0,isRoot:1})}}const Qt=Gt;n(209);const Vt={shift:!1,meta:!1,alt:!1,key:void 0,target:void 0,get combo(){return[Vt.meta&&"Meta",Vt.alt&&"Alt",Vt.shift&&"Shift",Vt.key].filter(Boolean).join("+")}},te=((0,st.readable)(Vt,(t=>{return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)};function e(t){"Shift"===t.key?Vt.shift=!0:"Alt"===t.key?Vt.alt=!0:"Meta"===t.key?Vt.meta=!0:Vt.key=t.key,Vt.target=t.target,o()}function n(t){"Shift"===t.key?Vt.shift=!1:"Alt"===t.key?Vt.alt=!1:"Meta"===t.key?Vt.meta=!1:Vt.key=void 0,Vt.target=t.target,o()}function o(){t(Vt)}})),{down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1}),ee=((0,st.readable)(te,(t=>{return window.addEventListener("mousedown",e),window.addEventListener("mousemove",o),window.addEventListener("mouseup",n),function(){window.removeEventListener("mousedown",e),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",n)};function e(t){te.down=!0,te.downX=te.x=t.clientX,te.downY=te.y=t.clientY,te.target=t.target,i()}function n(){te.down=!1,te.downX=te.x=te.downY=te.y=-1,te.target=void 0,i()}function o(t){te.x=t.x,te.y=t.y,i()}function i(){t(te)}})),"mondrian-suspense");function ne(t){(0,o.append_styles)(t,"svelte-1ooljvd",".mondrian__suspense-3tgPBN.mondrian__--loading-3irTkJ{visibility:hidden}")}n(967);const oe=t=>({isLoading:1&t}),ie=t=>({isLoading:t[0]});function se(t){let e,n;const i=t[2].default,s=(0,o.create_slot)(i,t,t[1],ie);return{c(){e=(0,o.element)("div"),s&&s.c(),(0,o.attr)(e,"class","mondrian__suspense-3tgPBN"),(0,o.toggle_class)(e,"mondrian__--loading-3irTkJ",t[0])},m(t,i){(0,o.insert)(t,e,i),s&&s.m(e,null),n=!0},p(t,[r]){s&&s.p&&(!n||3&r)&&(0,o.update_slot_base)(s,i,t,t[1],n?(0,o.get_slot_changes)(i,t[1],r,oe):(0,o.get_all_dirty_from_scope)(t[1]),ie),(!n||1&r)&&(0,o.toggle_class)(e,"mondrian__--loading-3irTkJ",t[0])},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function re(t,e,n){let{$$slots:o={},$$scope:i}=e;const s=function(){const t=new Set;return(0,mt.setContext)(ee,t),t}();let r=!0;return(0,mt.onMount)((()=>{Promise.all(s).then((()=>{n(0,r=!1)}))})),t.$$set=t=>{"$$scope"in t&&n(1,i=t.$$scope)},[r,i,o]}class ae extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,re,se,o.safe_not_equal,{},ne)}}const le=ae;function de(t){(0,o.append_styles)(t,"svelte-17aeaja",".mondrian__preview-6C87Qc{display:flex;position:relative;z-index:0}")}function ce(t){let e,n;return e=new le({props:{$$slots:{default:[me]},$$scope:{ctx:t}}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};259&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function ue(t){let e;return{c(){e=(0,o.element)("div"),e.textContent="Block could not be loaded"},m(t,n){(0,o.insert)(t,e,n)},p:o.noop,i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e)}}}function me(t){let e,n,i;return n=new Qt({props:{itemId:t[7].id,isRoot:!0}}),{c(){e=(0,o.element)("div"),(0,o.create_component)(n.$$.fragment),(0,o.attr)(e,"class","mondrian__preview-6C87Qc")},m(t,s){(0,o.insert)(t,e,s),(0,o.mount_component)(n,e,null),i=!0},p(t,e){const o={};3&e&&(o.itemId=t[7].id),n.$set(o)},i(t){i||((0,o.transition_in)(n.$$.fragment,t),i=!0)},o(t){(0,o.transition_out)(n.$$.fragment,t),i=!1},d(t){t&&(0,o.detach)(e),(0,o.destroy_component)(n)}}}function pe(t){let e,n,i,s;const r=[ue,ce],a=[];function l(t,e){return void 0===t[2]||void 0===t[0]?0:1}function d(t,e){return 1===e?function(t){const e=t.slice(),n=e[1][e[0]];return e[7]=n,e}(t):t}return e=l(t),n=a[e]=r[e](d(t,e)),{c(){n.c(),i=(0,o.empty)()},m(t,n){a[e].m(t,n),(0,o.insert)(t,i,n),s=!0},p(t,[s]){let c=e;e=l(t),e===c?a[e].p(d(t,e),s):((0,o.group_outros)(),(0,o.transition_out)(a[c],1,1,(()=>{a[c]=null})),(0,o.check_outros)(),n=a[e],n?n.p(d(t,e),s):(n=a[e]=r[e](d(t,e)),n.c()),(0,o.transition_in)(n,1),n.m(i.parentNode,i))},i(t){s||((0,o.transition_in)(n),s=!0)},o(t){(0,o.transition_out)(n),s=!1},d(t){t&&(0,o.detach)(i),a[e].d(t)}}}function _e(t,e,n){let i,s,r,{manifest:a}=e,{blockumentId:l}=e;const d=Symbol("LearnComponent");(0,mt.onDestroy)((()=>{rt.removeManifest(d)})),(0,mt.setContext)("isLearn",!0);const c=(0,st.writable)();return(0,o.component_subscribe)(t,c,(t=>n(5,r=t))),t.$$set=t=>{"manifest"in t&&n(3,a=t.manifest),"blockumentId"in t&&n(4,l=t.blockumentId)},t.$$.update=()=>{8&t.$$.dirty&&rt.addManifest(d,a),24&t.$$.dirty&&(0,o.set_store_value)(c,r=a.blockuments?.[l],r),8&t.$$.dirty&&n(1,i=a.items??{}),32&t.$$.dirty&&n(0,s=r?.children[0]?.id)},[s,i,c,a,l,r]}class ge extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,_e,pe,o.safe_not_equal,{manifest:3,blockumentId:4},de)}}const fe=ge;var he=n(428),$e=n.n(he);const ye=((t,e={},n="div")=>o=>{const i=(0,he.useRef)(null),s=(0,he.useRef)(null),[r,a]=(0,he.useState)(!1);return(0,he.useEffect)((()=>{const e=/on([A-Z]{1,}[a-zA-Z]*)/,n=/watch([A-Z]{1,}[a-zA-Z]*)/;s.current=new t({target:i.current,props:o});const r=[];for(const t in o){const i=t.match(e),a=t.match(n);null!=i&&"function"==typeof o[t]&&s.current.$on(`${i[1][0].toLowerCase()}${i[1].slice(1)}`,o[t]),null!=a&&"function"==typeof o[t]&&r.push([`${a[1][0].toLowerCase()}${a[1].slice(1)}`,o[t]])}if(r.length>0){const t=s.current.$$.update;s.current.$$.update=function(){r.forEach((([t,e])=>{if(null!==s.current){const n=s.current.$$.props[t];e(s.current.$$.ctx[n])}})),t.apply(null)}}return()=>{null!==s.current&&s.current.$destroy()}}),[o]),(0,he.useEffect)((()=>{r?null!==s.current&&s.current.$set(o):a(!0)}),[o,r]),$e().createElement(n,{ref:i,style:e})})(fe),be=t=>$e().createElement(ye,{...t})}}]);
//# sourceMappingURL=149ee6b8.js.map