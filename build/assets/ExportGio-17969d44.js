import{j as e}from"./mui-8fd662bb.js";/* empty css              */import{r as t,S as J,I as n,y as K,D as Q,C as W,z as C}from"./antd-d08f3b3b.js";import{h as x}from"./moment-a9aaa855.js";import{G as w,R as N,u as Z,D as b,i as ee,j as R,k as F,o as U}from"./index-b16fa0e1.js";import{P as se}from"./PageHeader-f00a72fe.js";function le({variant:l,cb_delTable:u,cb_setTable:m}){const[i,D]=t.useState(Object.keys(w).map(c=>({label:e.jsx("div",{className:"opt-lbl",children:e.jsx("span",{children:w[c]})}),value:c})));return e.jsxs("div",{className:"w300px Variant__comp",children:[e.jsx(J,{style:{width:94},className:"country__select mr2px w200px",options:i,value:l==null?void 0:l.label,onChange:c=>{m(l==null?void 0:l.id,"label",c)}}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"product_price",className:"form-label",children:"Price"}),e.jsx(n,{className:"form-control rounded search !h-[44px] w-full",type:"number",placeholder:"Price",readOnly:!0,value:l==null?void 0:l.price,onChange:c=>{const o=c.target.value;!o||o.match(N)}})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"product_price",className:"form-label",children:"SỐ LƯỢNG"}),e.jsx(n,{className:"form-control rounded search !h-[44px] w-full",type:"number",placeholder:"so luong",required:!0,allowClear:!0,value:l==null?void 0:l.quantity,onChange:c=>{const o=c.target.value;o.length<7&&(!o||o.match(N))&&m(l==null?void 0:l.id,"quantity",o)}})]}),e.jsx("button",{type:"submit",className:"btn btn--outline red",onClick:()=>{u(l==null?void 0:l.id)},children:"Xóa"})]})}function me({isBan:l}){const u=Z(),[m,i]=t.useState(2),D=s=>{console.log("radio checked",s.target.value),i(s.target.value)},[c,o]=t.useState(x(new Date).format(b)),[h,y]=t.useState(""),[S,T]=t.useState(!1),[_,v]=t.useState(0),[G,I]=t.useState(""),[O,A]=t.useState(""),[E,P]=t.useState(""),[r,p]=t.useState([]),[M,q]=t.useState(x(new Date(Date.now()),b)),V=(s,a)=>{o(a)},j=()=>{if(l)return h&&r.length>0;if(!l)return r.length>0},B=s=>{s.preventDefault(),j()&&$({newModel:{isBan:l,isGif:S,discount:_,buyName:h||"DUNG",sellDate:c,metadata:E,address:G,phone:O,isPaid:m===1,isDelivered:!0,orderItems:[...r]}})},L=s=>{T(s.target.checked)},[z,{isLoading:X,error:ae}]=ee(),Y=()=>{p([]),y(""),o(x(new Date).format(b)),q(x(new Date(Date.now()),b)),T(!1),i(2),I(""),A(""),P("")},$=async s=>{const a=await z(s);(a==null?void 0:a.data)?(Y(),u(U({isOpen:Date.now(),content:"Added ĐƠN Success",step:1}))):u(U({isOpen:Date.now(),content:"Add ĐƠN Failed",step:2}))};return e.jsxs("section",{className:"content-main",children:[e.jsx(se,{isFetching:!1,title:l?"Xuất Đơn":"Nhập Hàng"}),e.jsx("div",{className:"card mb-4 shadow-sm",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("button",{type:"submit",className:`btn btn--primary ${j()?"":"cursor__not"}`,onClick:B,disabled:!j(),children:[X&&e.jsx(K,{size:"large"}),"Publish now"]}),e.jsxs("div",{className:"mb-4 mt20px",children:[e.jsx("label",{htmlFor:"product_title",className:"form-label"}),e.jsx(Q,{allowClear:!1,defaultValue:M,onChange:V})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"form-label",children:"TÊN"}),e.jsx(n,{className:"form-control rounded search !h-[44px] w300px mt-2",placeholder:"TÊN",required:!0,allowClear:!0,value:h,onChange:s=>y(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"form-label",children:"BIẾU"}),e.jsx("div",{children:e.jsx(W,{checked:S,onChange:L,children:e.jsx("h6",{children:"BIẾU"})})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"form-label",children:"THANH TOÁN"}),e.jsx("div",{children:e.jsxs(C.Group,{onChange:D,value:m,children:[e.jsx(C,{value:1,children:e.jsx("h6",{children:"RỒI"})}),e.jsx(C,{value:2,children:e.jsx("h6",{children:"CHƯA"})})]})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"form-label",children:"ĐỊA CHỈ"}),e.jsx(n,{className:"form-control rounded search !h-[44px] w300px mt-2",allowClear:!0,type:"text",placeholder:"ĐỊA CHỈ",value:G,onChange:s=>I(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"form-label",children:"SĐT"}),e.jsx(n,{className:"form-control rounded search !h-[44px] w300px mt-2",allowClear:!0,type:"text",placeholder:"SĐT",value:O,onChange:s=>{let a=s.target.value;a.length<13&&(!a||a.match(N))&&A(s.target.value)}})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"form-label",children:"GIẢM GIÁ"}),e.jsx(n,{className:"form-control rounded search !h-[44px] w300px mt-2",allowClear:!0,type:"number",placeholder:"GIẢM GIÁ",value:_,onChange:s=>{const a=s.target.value;a.length<7&&(!a||a.match(N))&&v(s.target.value)}})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{className:"form-label",children:"NOTE"}),e.jsx(n,{className:"form-control rounded search !h-[44px] w300px mt-2",allowClear:!0,type:"text",placeholder:"NOTE",value:E,onChange:s=>{P(s.target.value)}})]}),e.jsx("button",{type:"submit",className:"btn btn--social",onClick:()=>{p([{id:Date.now(),label:"BAP_CUON",price:l?R.BAP_CUON:F.BAP_CUON,quantity:1},...r])},children:"THÊM"}),e.jsx("div",{className:"mt20px dataTable",children:r.map(s=>e.jsx(le,{variant:s,cb_delTable:a=>{p(r.filter(d=>(d==null?void 0:d.id)!==a))},cb_setTable:(a,d,k)=>{p(r.map(H=>{const f={...H};return H.id===a&&(f[d]=k,Object.keys(w).map(g=>{k===g&&(f.price=l?R[g]:F[g])})),f}))}},s==null?void 0:s.id))})]})})]})}export{me as E};