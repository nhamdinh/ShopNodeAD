import{a as O,_ as de,j as a}from"./mui-115570f4.js";import{u as dn,b as fn,P as $e,q as pn,j as vn,k as gn,r as hn,G as De,o as Ae}from"./index-9644e681.js";/* empty css              */import{c as k,A as yn,B as mn,E as _n,F as xn,r as h,G as Cn,H as bn,J as wn,P as jn,I as Tn,S as Sn,K as se,L as S,y as Nn,o as Pn,M as Rn}from"./antd-d8eda575.js";import{f as $n,a as P}from"./commonFunction-f9ff5603.js";import{P as Dn}from"./PageHeader-eebd0de9.js";var fe={},Ee={exports:{}},Le={exports:{}};(function(e){function n(r){"@babel/helpers - typeof";return e.exports=n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e.exports.__esModule=!0,e.exports.default=e.exports,n(r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(Le);var An=Le.exports;(function(e){var n=An.default;function r(s){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(r=function(f){return f?u:l})(s)}function o(s,l){if(!l&&s&&s.__esModule)return s;if(s===null||n(s)!="object"&&typeof s!="function")return{default:s};var u=r(l);if(u&&u.has(s))return u.get(s);var i={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in s)if(p!=="default"&&{}.hasOwnProperty.call(s,p)){var v=f?Object.getOwnPropertyDescriptor(s,p):null;v&&(v.get||v.set)?Object.defineProperty(i,p,v):i[p]=s[p]}return i.default=s,u&&u.set(s,i),i}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(Ee);var z=Ee.exports,pe={};Object.defineProperty(pe,"__esModule",{value:!0});var On={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"};pe.default=On;var B={};const We=k(yn),In=k(mn),ze=k(_n),Be=k(xn);var H={};Object.defineProperty(H,"__esModule",{value:!0});H.default=void 0;var Mn=h,kn=(0,Mn.createContext)({});H.default=kn;var U={};const ve=k(Cn);var _={};const qn=k(bn);var q={},ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.default=En;function En(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var he={};Object.defineProperty(he,"__esModule",{value:!0});he.default=Ln;function Ln(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var ye=O.default;Object.defineProperty(q,"__esModule",{value:!0});q.clearContainerCache=Yn;q.injectCSS=_e;q.removeCSS=Un;q.updateCSS=Kn;var Oe=ye(ve),Wn=ye(ge),zn=ye(he),Ie="data-rc-order",Me="data-rc-priority",Bn="rc-util-key",F=new Map;function He(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):Bn}function Z(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function Hn(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function me(e){return Array.from((F.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function _e(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(0,Wn.default)())return null;var r=n.csp,o=n.prepend,s=n.priority,l=s===void 0?0:s,u=Hn(o),i=u==="prependQueue",f=document.createElement("style");f.setAttribute(Ie,u),i&&l&&f.setAttribute(Me,"".concat(l)),r!=null&&r.nonce&&(f.nonce=r==null?void 0:r.nonce),f.innerHTML=e;var p=Z(n),v=p.firstChild;if(o){if(i){var d=(n.styles||me(p)).filter(function(w){if(!["prepend","prependQueue"].includes(w.getAttribute(Ie)))return!1;var E=Number(w.getAttribute(Me)||0);return l>=E});if(d.length)return p.insertBefore(f,d[d.length-1].nextSibling),f}p.insertBefore(f,v)}else p.appendChild(f);return f}function Ue(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Z(n);return(n.styles||me(r)).find(function(o){return o.getAttribute(He(n))===e})}function Un(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Ue(e,n);if(r){var o=Z(n);o.removeChild(r)}}function Gn(e,n){var r=F.get(e);if(!r||!(0,zn.default)(document,r)){var o=_e("",n),s=o.parentNode;F.set(e,s),e.removeChild(o)}}function Yn(){F.clear()}function Kn(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=Z(r),s=me(o),l=(0,Oe.default)((0,Oe.default)({},r),{},{styles:s});Gn(o,l);var u=Ue(n,l);if(u){var i,f;if((i=l.csp)!==null&&i!==void 0&&i.nonce&&u.nonce!==((f=l.csp)===null||f===void 0?void 0:f.nonce)){var p;u.nonce=(p=l.csp)===null||p===void 0?void 0:p.nonce}return u.innerHTML!==e&&(u.innerHTML=e),u}var v=_e(e,l);return v.setAttribute(He(l),n),v}var V={};Object.defineProperty(V,"__esModule",{value:!0});V.getShadowRoot=Qn;V.inShadow=Ye;function Ge(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}function Ye(e){return Ge(e)instanceof ShadowRoot}function Qn(e){return Ye(e)?Ge(e):null}var b={};Object.defineProperty(b,"__esModule",{value:!0});b.call=xe;b.default=void 0;b.note=Qe;b.noteOnce=Je;b.preMessage=void 0;b.resetWarned=Fe;b.warning=Ke;b.warningOnce=G;var ie={},Fn=b.preMessage=function(n){};function Ke(e,n){}function Qe(e,n){}function Fe(){ie={}}function xe(e,n,r){!n&&!ie[r]&&(e(!1,r),ie[r]=!0)}function G(e,n){xe(Ke,e,n)}function Je(e,n){xe(Qe,e,n)}G.preMessage=Fn;G.resetWarned=Fe;G.noteOnce=Je;b.default=G;var Jn=z.default,X=O.default;Object.defineProperty(_,"__esModule",{value:!0});_.generate=ue;_.getSecondaryColor=ot;_.iconStyles=void 0;_.isIconDefinition=at;_.normalizeAttrs=ce;_.normalizeTwoToneColors=st;_.useInsertStyles=_.svgBaseProps=void 0;_.warning=rt;var le=X(ve),ke=X(qn),Zn=Be,Vn=q,Xn=V,et=X(b),J=Jn(h),nt=X(H);function tt(e){return e.replace(/-(.)/g,function(n,r){return r.toUpperCase()})}function rt(e,n){(0,et.default)(e,"[@ant-design/icons] ".concat(n))}function at(e){return(0,ke.default)(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&((0,ke.default)(e.icon)==="object"||typeof e.icon=="function")}function ce(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(n,r){var o=e[r];switch(r){case"class":n.className=o,delete n.class;break;default:delete n[r],n[tt(r)]=o}return n},{})}function ue(e,n,r){return r?J.default.createElement(e.tag,(0,le.default)((0,le.default)({key:n},ce(e.attrs)),r),(e.children||[]).map(function(o,s){return ue(o,"".concat(n,"-").concat(e.tag,"-").concat(s))})):J.default.createElement(e.tag,(0,le.default)({key:n},ce(e.attrs)),(e.children||[]).map(function(o,s){return ue(o,"".concat(n,"-").concat(e.tag,"-").concat(s))}))}function ot(e){return(0,Zn.generate)(e)[0]}function st(e){return e?Array.isArray(e)?e:[e]:[]}_.svgBaseProps={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"};var lt=_.iconStyles=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;_.useInsertStyles=function(n){var r=(0,J.useContext)(nt.default),o=r.csp,s=r.prefixCls,l=lt;s&&(l=l.replace(/anticon/g,s)),(0,J.useEffect)(function(){var u=n.current,i=(0,Xn.getShadowRoot)(u);(0,Vn.updateCSS)(l,"@ant-design-icons",{prepend:!0,csp:o,attachTo:i})},[])};var Ze=O.default,it=z.default;Object.defineProperty(U,"__esModule",{value:!0});U.default=void 0;var ct=Ze(ze),L=Ze(ve),ut=it(h),A=_,dt=["icon","className","onClick","style","primaryColor","secondaryColor"],W={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function ft(e){var n=e.primaryColor,r=e.secondaryColor;W.primaryColor=n,W.secondaryColor=r||(0,A.getSecondaryColor)(n),W.calculated=!!r}function pt(){return(0,L.default)({},W)}var ee=function(n){var r=n.icon,o=n.className,s=n.onClick,l=n.style,u=n.primaryColor,i=n.secondaryColor,f=(0,ct.default)(n,dt),p=ut.useRef(),v=W;if(u&&(v={primaryColor:u,secondaryColor:i||(0,A.getSecondaryColor)(u)}),(0,A.useInsertStyles)(p),(0,A.warning)((0,A.isIconDefinition)(r),"icon should be icon definiton, but got ".concat(r)),!(0,A.isIconDefinition)(r))return null;var d=r;return d&&typeof d.icon=="function"&&(d=(0,L.default)((0,L.default)({},d),{},{icon:d.icon(v.primaryColor,v.secondaryColor)})),(0,A.generate)(d.icon,"svg-".concat(d.name),(0,L.default)((0,L.default)({className:o,onClick:s,style:l,"data-icon":d.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f),{},{ref:p}))};ee.displayName="IconReact";ee.getTwoToneColors=pt;ee.setTwoToneColors=ft;U.default=ee;var ne={},Ve=O.default;Object.defineProperty(ne,"__esModule",{value:!0});ne.getTwoToneColor=yt;ne.setTwoToneColor=ht;var vt=Ve(We),Xe=Ve(U),gt=_;function ht(e){var n=(0,gt.normalizeTwoToneColors)(e),r=(0,vt.default)(n,2),o=r[0],s=r[1];return Xe.default.setTwoToneColors({primaryColor:o,secondaryColor:s})}function yt(){var e=Xe.default.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var I=O.default,mt=z.default;Object.defineProperty(B,"__esModule",{value:!0});B.default=void 0;var _t=I(de),xt=I(We),qe=I(In),Ct=I(ze),Q=mt(h),bt=I(wn),wt=Be,jt=I(H),Tt=I(U),Ce=ne,St=_,Nt=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,Ce.setTwoToneColor)(wt.blue.primary);var te=Q.forwardRef(function(e,n){var r=e.className,o=e.icon,s=e.spin,l=e.rotate,u=e.tabIndex,i=e.onClick,f=e.twoToneColor,p=(0,Ct.default)(e,Nt),v=Q.useContext(jt.default),d=v.prefixCls,w=d===void 0?"anticon":d,E=v.rootClassName,re=(0,bt.default)(E,w,(0,qe.default)((0,qe.default)({},"".concat(w,"-").concat(o.name),!!o.name),"".concat(w,"-spin"),!!s||o.name==="loading"),r),M=u;M===void 0&&i&&(M=-1);var ae=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,g=(0,St.normalizeTwoToneColors)(f),Y=(0,xt.default)(g,2),x=Y[0],Se=Y[1];return Q.createElement("span",(0,_t.default)({role:"img","aria-label":o.name},p,{ref:n,tabIndex:M,onClick:i,className:re}),Q.createElement(Tt.default,{icon:o,primaryColor:x,secondaryColor:Se,style:ae}))});te.displayName="AntdIcon";te.getTwoToneColor=Ce.getTwoToneColor;te.setTwoToneColor=Ce.setTwoToneColor;B.default=te;var Pt=z.default,be=O.default;Object.defineProperty(fe,"__esModule",{value:!0});var en=fe.default=void 0,Rt=be(de),nn=Pt(h),$t=be(pe),Dt=be(B),At=function(n,r){return nn.createElement(Dt.default,(0,Rt.default)({},n,{ref:r,icon:$t.default}))},Ot=nn.forwardRef(At);en=fe.default=Ot;var we={},je={};Object.defineProperty(je,"__esModule",{value:!0});var It={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"};je.default=It;var Mt=z.default,Te=O.default;Object.defineProperty(we,"__esModule",{value:!0});var tn=we.default=void 0,kt=Te(de),rn=Mt(h),qt=Te(je),Et=Te(B),Lt=function(n,r){return rn.createElement(Et.default,(0,kt.default)({},n,{ref:r,icon:qt.default}))},Wt=rn.forwardRef(Lt);tn=we.default=Wt;function zt({dataCount:e,params:n,currentPage:r,cb_setCurrentPage:o,cb_setParams:s,cb_setGoSearch:l}){const[u,i]=h.useState(1);h.useEffect(()=>{i(Math.ceil(e/n.limit))},[e,n]);const f=d=>{o(d),s(w=>({...w,offset:w.limit*(d-1)})),l(new Date().getTime())},p=()=>{o(1),s(d=>({...d,offset:0})),l(new Date().getTime())},v=()=>{o(u),s(d=>({...d,offset:d.limit*(u-1)})),l(new Date().getTime())};return a.jsxs("div",{className:"pagination-reviews",children:[a.jsx(tn,{disabled:r===1,className:`pagination-icon ${r===1?"pagination-passive":""}`,onClick:p}),a.jsx(jn,{pageSize:n.limit,onChange:f,size:"small",total:e,current:r}),a.jsx(en,{disabled:r===u,className:`pagination-icon ${r===u?"pagination-passive":""}`,onClick:v})]})}const N={padding:"8px 0"},Bt=[{label:a.jsx("div",{className:"opt-lbl",children:a.jsx("span",{children:"All"})}),value:0},{label:a.jsx("div",{className:"opt-lbl",children:a.jsx("span",{children:"Chưa"})}),value:-1},{label:a.jsx("div",{className:"opt-lbl",children:a.jsx("span",{children:"Rồi"})}),value:1}];function Jt({isBan:e}){var Ne,Pe,Re;const n=dn(),r=fn(),[o,s]=h.useState(1),[l,u]=h.useState(""),[i,f]=h.useState({limit:$e,offset:0,isPaid:0,keySearch:l}),[p,v]=h.useState(new Date().getTime()),[d,w]=h.useState([]),[E,re]=h.useState([]),[M,ae]=h.useState(!1),[g,Y]=h.useState({totalAmountPaid:0,totalAmountUnPaid:0,discount:0}),{data:x,error:Se,isSuccess:an,isLoading:on}=pn({isBan:e,limit:1e3,skip:0,isPaid:i.isPaid,keySearch:i.keySearch},{refetchOnMountOrArgChange:!0,skip:!1});h.useEffect(()=>{const t=[];for(let y=i.offset;y<d.length&&y<+i.offset+ +i.limit;y++)t.push(d[y]);re(t)},[d,i]),h.useEffect(()=>{var t;if(an){const y=(t=x==null?void 0:x.metadata)==null?void 0:t.thuDungGios,j=[];y.map(c=>{c==null||c.orderItems.map(m=>{j.push({...m})})});const C=j.reduce((c,m)=>{const T=c.find(D=>D.label===m.label);return T?T.quantity=+T.quantity+ +m.quantity:c.push({...m}),c},[]).sort((c,m)=>c.label>m.label?1:c.label<m.label?-1:0),R=C.reduce((c,m)=>(c.push(m.label),c),[]);$n(Object.keys(De),R).map((c,m)=>{C.push({id:Date.now()+m,label:c,price:e?vn[c]:gn[c],quantity:0})});const un=y.filter(c=>!(c!=null&&c.isGif)),$={totalAmountPaid:0,totalAmountUnPaid:0,discount:0};un.map(c=>{if($.discount=+$.discount+ +((c==null?void 0:c.discount)??0),c!=null&&c.isPaid){const m=c==null?void 0:c.orderItems.reduce((T,D)=>(T=+T+ +D.price*+D.quantity,T),[0]);$.totalAmountPaid=+$.totalAmountPaid+ +m}else{const m=c==null?void 0:c.orderItems.reduce((T,D)=>(T=+T+ +D.price*+D.quantity,T),[0]);$.totalAmountUnPaid=+$.totalAmountUnPaid+ +m}}),Y($),w(y)}},[x]);const[sn,{isLoading:ln,error:Ht}]=hn(),cn=async t=>{const y=await sn(t),j=y==null?void 0:y.data;n(j?Ae({isOpen:Date.now(),content:"updated ĐƠN Success",step:1}):Ae({isOpen:Date.now(),content:"updated ĐƠN Failed",step:2}))},K=(t,y)=>{const j={...i,limit:$e,offset:0};j[t]=y,f(j),s(1)};let oe=null;return h.useEffect(()=>(clearTimeout(oe),oe=setTimeout(()=>{K("keySearch",l)},600),()=>{clearTimeout(oe)}),[l]),a.jsxs("section",{className:"content-main",children:[a.jsx(Dn,{isFetching:on,title:`DANH SÁCH ĐƠN${e?" BÁN":" NHẬP"}`}),a.jsx("div",{className:"flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between",children:a.jsxs("div",{className:"flex flex-col gap-4 md:flex-row md:gap-[14px]",children:[a.jsxs("button",{type:"submit",onClick:()=>{ae(!M)},className:"btn btn--secondary !h-[44px]",children:["Show"," "]}),a.jsxs("div",{className:"input-group df items__center w-full !h-[44px]",children:[a.jsx(Tn,{className:"form-control rounded search w-full !h-[44px] mr-4",type:"search",placeholder:"search",allowClear:!0,value:l,onChange:t=>{u(t.target.value)},onKeyDown:t=>{t.key==="Enter"&&K("keySearch",l)}}),a.jsx("button",{type:"submit",onClick:()=>{K("keySearch",l)},className:"search-button btn btn--social !h-[44px] w100px",children:"Search"})]})]})}),a.jsxs("h5",{className:M?"df":"dn",children:[a.jsxs("div",{className:"color__ff4545",children:[(Ne=x==null?void 0:x.metadata)==null?void 0:Ne.thuDungGios.filter(t=>!(t!=null&&t.isGif)).length,"/",(Pe=x==null?void 0:x.metadata)==null?void 0:Pe.totalCount]}),a.jsxs("div",{children:[" | ",P(g==null?void 0:g.totalAmountPaid)," + "]}),a.jsxs("div",{className:"color__ff4545",children:[P(g==null?void 0:g.totalAmountUnPaid)," -"]}),a.jsxs("div",{className:"color__green",children:[P(g==null?void 0:g.discount)," ="]}),a.jsx("div",{children:P(+(g==null?void 0:g.totalAmountUnPaid)+ +(g==null?void 0:g.totalAmountPaid)-+(g==null?void 0:g.discount))})]}),a.jsxs("div",{className:"df items__center mt10px",children:[a.jsx("h4",{className:"mb0px mr-4",children:"THANH TOÁN"}),a.jsx(Sn,{style:{width:94},className:"country__select mr2px w200px",options:Bt,value:i.isPaid,onChange:t=>{K("isPaid",t)}})]}),a.jsxs("div",{className:"card mb-4 shadow-sm mt10px",children:[a.jsx(zt,{dataCount:(Re=x==null?void 0:x.metadata)==null?void 0:Re.totalCount,params:i,currentPage:o,cb_setCurrentPage:t=>{s(t)},cb_setParams:t=>{f(t)},cb_setGoSearch:t=>{v(t)}}),a.jsx("div",{className:"card-body",children:E.map((t,y)=>{let j=0;return t!=null&&t.isGif||(j=t==null?void 0:t.orderItems.reduce((C,R)=>(C=+C+ +R.price*+R.quantity,C),[0])),a.jsxs("div",{className:"mt20px",children:[a.jsxs(se,{gutter:16,className:"mt20px",children:[a.jsx(S,{className:"gutter-row",span:8,children:a.jsxs("h5",{style:N,children:[" ",y+1+ +i.offset,". "]})}),a.jsx(S,{onClick:()=>{r(`/thudung-list/${t==null?void 0:t._id}?isBan=${t==null?void 0:t.isBan}`)},className:"gutter-row cursor__pointer",span:6,children:a.jsx("h5",{style:N,children:t==null?void 0:t.buyName})}),a.jsx(S,{className:"gutter-row",span:4,children:a.jsx("h5",{className:"mb0px text__underline",style:N,children:t==null?void 0:t.metadata})}),a.jsx(S,{className:"gutter-row df content__end",span:6,children:a.jsxs("button",{type:"submit",onClick:()=>{cn({id:t==null?void 0:t._id})},className:`btn  ${t!=null&&t.isPaid?"btn--primary":"btn--outline red"}`,children:[ln&&a.jsx(Nn,{size:"large"}),t!=null&&t.isPaid?"RỒI PAY":"CHƯA PAY"]})})]},t==null?void 0:t._id),t==null?void 0:t.orderItems.map((C,R)=>a.jsxs(se,{gutter:16,className:"mt20px",children:[a.jsx(S,{className:"gutter-row items__center",span:8,children:a.jsxs("h6",{style:N,children:[y+1+ +i.offset,".",R+1,".",De[C.label]]})}),a.jsx(S,{className:"gutter-row items__center",span:4,children:a.jsx("h6",{style:N,children:a.jsx("strong",{children:C.quantity})})}),a.jsx(S,{className:"gutter-row items__center",span:4,children:a.jsx("div",{style:N,children:C.price})}),a.jsx(S,{className:"gutter-row df content__end items__center",span:8,children:a.jsx("div",{style:N,children:P(+C.price*+C.quantity)})})]},R)),a.jsxs(se,{gutter:16,className:"mt20px",children:[a.jsx(S,{className:"gutter-row items__center",span:12,children:a.jsxs("h6",{style:N,children:["►",Pn(t==null?void 0:t.createdAt).format("DD.MM.YYYY, hh:mm A")]})}),a.jsx(S,{className:"gutter-row df content__end items__center",span:12,children:a.jsxs("h5",{className:"df ",style:N,children:[a.jsxs("div",{children:[P(j)," -"]}),a.jsxs("div",{className:"color__green df",children:[P(t==null?void 0:t.discount)," ="]}),a.jsx("div",{children:P(+j-+(t==null?void 0:t.discount))})]})})]}),a.jsx(Rn,{orientation:"left"})]},t==null?void 0:t._id)})})]})]})}export{Jt as I};