import{j as e}from"./mui-2493782d.js";import{r as b,u as N,j as _,n as v,s as y,g as d,v as P,S as D,o as m}from"./index-f3827da5.js";/* empty css               */import{S}from"./SubmenuTrigger-34b58daa.js";import{R as U}from"./RatingStars-719637f9.js";import{f as x,a as p,c as R}from"./commonFunction-2972f58c.js";const O=({category:s})=>{const{label:l,icon:a,color:t}=b.find(n=>n.value===s)??{value:"all",label:"All Products"};return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`badge-icon badge-icon--sm bg-${t}`,children:e.jsx("i",{className:`${a} text-base`})}),e.jsx("h5",{children:l})]})},T=({product:s,index:l,isSlide:a,cb_onGetProductsByShop:t})=>{const n=N(),i=_(v),g=a?"div":D,h=a?{}:{type:"slideUp",index:l},[f,{isLoading:u,error:w}]=y(),j=async r=>{const c=await f(r),o=c==null?void 0:c.data;o!=null&&o.metadata?(t&&t(),n(m({isOpen:Date.now(),content:"Updated Success",step:1}))):n(m({isOpen:Date.now(),content:"Update Failed",step:2}))};return e.jsxs(g,{className:"ProductGridItem card flex flex-col h-full",...h,children:[e.jsxs("div",{className:"flex items-start gap-[14px] mb-2.5",children:[e.jsx("div",{className:"img-wrapper flex flex-1 items-center justify-center",children:e.jsx("img",{className:"img__GridItem",loading:"lazy",src:(s==null?void 0:s.product_thumb_small)??(s==null?void 0:s.product_thumb),alt:s.product_name})}),e.jsx(S,{})]}),e.jsx(d,{className:`line__clamp__2 h46px h6 !leading-[1.4] block max-w-[180px] transition hover:text-accent ${a?"mb-3":""}`,to:"/product-editor",children:s.product_name}),a&&e.jsx(U,{rating:s.product_ratings}),e.jsxs("div",{className:`flex flex-col flex-1 ${a?"gap-1 mt-1.5":"gap-2.5 mt-2.5"}`,children:[e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4] text-green",children:["Available : ",x(s.product_quantity)||0]}),e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4] text-accent",children:["Already sold : ",x(s.product_sold)||0]}),!a&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4]",children:["Regular price : $"," ",e.jsx("span",{className:"underline",children:p(s.product_original_price)||0})]}),e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4] ",children:["Sale price : $"," ",e.jsx("span",{className:"ed1c24",children:p(s.product_price)||0})]}),e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4] ",children:["Discount :"," ",e.jsxs("span",{className:"ed1c24",children:["- ",R(s)," %"]})]})]})]}),!a&&e.jsxs("div",{className:"grid grid-cols-2 gap-1.5 mt-4",children:[e.jsxs(d,{className:"btn btn--outline blue !text-sm",to:"/product-editor",children:[e.jsx("i",{className:"icon icon-pen-solid text-xs"})," Edit"]}),e.jsx("button",{className:"btn btn--outline red !text-sm",onClick:()=>{const r={ids:[s._id],bodyUpdate:{isDraft:!0,isPublished:!1,isDelete:!0},product_shop:i==null?void 0:i._id};j(r)},children:u?e.jsx(P,{radius:30}):"Delete"})]})]})};export{O as C,T as P};