import{j as s}from"./mui-8cc0f558.js";import{P as K}from"./PageHeader-a74b622c.js";import{C as j}from"./CustomersInfobox-bcb6846c.js";import{S as h,e as L,a as W,a1 as G,a2 as U,a3 as v,y as R,h as z,k as H,p as J,a4 as Q}from"./index-473c644e.js";import{P as Z}from"./ProgressBar-564369f1.js";import{g as q}from"./helpers-3f7c7201.js";import{S as X}from"./index-333b4a3f.js";import{S as ee}from"./SubmenuTrigger-a96777a5.js";import{R as N}from"./RatingStars-c4725746.js";import{T as se}from"./Timestamp-d79ab090.js";import{u as re}from"./web-2727bf52.js";import{r as n,p as le}from"./antd-18c18a77.js";import{P as ce}from"./Pagination-2bfb5f72.js";import{u as ie}from"./usePaginationApi-88bb9964.js";import{C as ne}from"./Counter-c89ef878.js";import"./DocumentTitle-53b49d61.js";const oe=({rate:e=0,value:r=0})=>s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsxs("span",{className:"flex items-center gap-1 label-text leading-none w-[30px]",children:[e," ",s.jsx("i",{className:"icon-star-solid text-yellow"})]}),s.jsx("div",{className:"flex-1",children:s.jsx(Z,{value:r,color:"yellow"})}),s.jsxs("span",{className:"!text-header label-text w-[42px] text-right",children:[r,"%"]})]}),te=({data:e=[]})=>s.jsx(h,{className:"card min-h-[182px] !py-5 flex flex-col justify-between col-span-2",children:e.map((r,l)=>s.jsx(oe,{rate:r==null?void 0:r.rate,value:q(e,r==null?void 0:r.value)},l))}),w={name:"John",lastName:"Doe",email:"email@domain.com",rating:5,avatar:"https://via.placeholder.com/63x63",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu nulla tincidunt tincidunt.",createdAt:new Date},S=({data:e=w,wrapperClass:r})=>s.jsxs("div",{className:`flex items-center ${r}`,children:[s.jsx("img",{className:"bg-input-border shrink-0 w-10 h-10 rounded-md md:w-[63px] md:h-[63px]",src:e==null?void 0:e.avatar,alt:`${e==null?void 0:e.name} ${e==null?void 0:e.lastName}`,width:63,height:63}),s.jsxs("div",{className:"flex flex-col gap-1.5 md:gap-2.5",children:[s.jsxs("h6",{className:"truncate max-w-[120px] xs:max-w-[180px]",children:[e==null?void 0:e.name," ",e==null?void 0:e.lastName]}),s.jsx("a",{className:"comment-btn",href:`mailto:${e==null?void 0:e.email}`,children:s.jsx("span",{className:"truncate max-w-[120px] xs:max-w-[180px]",children:e==null?void 0:e.email})})]})]}),me=({data:e=w,wrapperClass:r})=>s.jsxs("div",{className:`flex items-center ${r}`,children:[s.jsx("img",{className:"bg-input-border shrink-0 w-10 h-10 rounded-md md:w-[63px] md:h-[63px]",src:(e==null?void 0:e.product_thumb_small)??(e==null?void 0:e.product_thumb),alt:`${e==null?void 0:e.product_name}`,width:63,height:63}),s.jsxs("div",{className:"flex flex-col gap-1.5 md:gap-2.5",children:[s.jsx("h6",{className:"truncate max-w-[120px] xs:max-w-[180px]",children:e==null?void 0:e.product_name}),s.jsx("div",{className:"comment-btn",children:s.jsxs("span",{className:"truncate max-w-[120px] xs:max-w-[180px]",children:["$ ",e==null?void 0:e.product_price]})})]})]}),ae=({data:e=w,index:r=0})=>{const{theme:l}=L(),{width:m}=W(),[t,{width:u}]=re(),o=l==="light"?"var(--body)":"rgba(39,50,65,.2)",[i,c]=n.useState(!1);return n.useEffect(()=>{c(!1)},[m]),s.jsxs(h,{index:r,children:[s.jsx("div",{className:"p-5",style:{backgroundColor:r%2===0?o:"var(--widget)"},children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(S,{data:e==null?void 0:e.userId,wrapperClass:"gap-5 md:gap-[30px] md:w-[300px]"}),s.jsx(me,{data:e==null?void 0:e.productId,wrapperClass:"gap-5 md:gap-[30px] md:w-[300px]"}),m>=768&&s.jsxs("div",{className:"flex items-center gap-[18px] xl:ml-[30px] xl:mr-10 xl:w-[200px]",children:[s.jsx(N,{rating:e==null?void 0:e.rating}),s.jsx("span",{className:"label-comment",children:e==null?void 0:e.rating})]}),m>=1280&&s.jsxs("div",{className:`flex flex-1 gap-5 bg-input-bg border border-input-border h-20 rounded-md\r
                             max-w-[588px] p-4 overflow-hidden`,children:[s.jsx("div",{className:"flex-1 max-w-[513px]",ref:t,children:s.jsx(G,{className:"flex-1",text:e==null?void 0:e.comment,width:u})}),s.jsx("button",{className:"self-start icon comment-[18px] mt-1",onClick:()=>c(!0),"aria-label":"See details",children:s.jsx("i",{className:"icon-message-arrow-up-right-regular"})})]}),m>=1024&&s.jsx(se,{date:e==null?void 0:e.createdAt,wrapperClass:"xl:ml-[30px] xl:mr-[75px]"}),s.jsxs("div",{className:"flex gap-4 items-center",children:[s.jsx("button",{className:"icon comment-[18px] mt-0.5 xl:hidden",onClick:()=>c(!0),"aria-label":"See details",children:s.jsx("i",{className:"icon-message-arrow-up-right-regular"})}),s.jsx(ee,{})]})]})}),s.jsx(U,{open:i,onClose:()=>c(!1),children:s.jsxs("div",{className:"card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform",children:[s.jsx("button",{className:"absolute top-5 right-5 icon comment-[18px] transition hover:comment-red",onClick:()=>c(!1),"aria-label":"Close",children:s.jsx("i",{className:"icon-circle-xmark-regular"})}),s.jsx(S,{data:e==null?void 0:e.userId,wrapperClass:"gap-4 mb-5"}),s.jsxs("p",{className:"flex gap-4 mb-2",children:[s.jsx("span",{className:"label-comment",children:"Date: "}),s.jsx("span",{className:"comment-sm font-medium",children:le(e==null?void 0:e.createdAt).format("DD/MM/YYYY, hh:mm A")})]}),s.jsxs("div",{className:"flex gap-4 mb-6",children:[s.jsx("span",{className:"label-comment",children:"Rate:"}),s.jsx(N,{rating:e==null?void 0:e.rating})]}),s.jsx("div",{className:"bg-input-bg rounded-md border border-input-border h-[240px] p-4 overflow-y-auto",children:e==null?void 0:e.comment})]})})]})},xe=({reviews:e,options:r,cb_setParamsPage:l,cb_setParamsSort:m})=>{const[t,u]=n.useState(v[0]),o=ie({...r,data:e,limit:R});return n.useEffect(()=>{const i={};v.map(c=>{c.value===(t==null?void 0:t.value)&&(i.orderByKey=c.orderByKey??"_id",i.orderByValue=c.orderByValue??-1)}),m&&(m(i),o.setCurrentPage(0))},[t]),n.useEffect(()=>{l&&l({page:+o.currentPage>0?+o.currentPage+1:1})},[o.currentPage]),s.jsxs(h,{className:"flex flex-1 flex-col gap-[26px]",children:[s.jsxs("div",{className:"card !p-0 flex-1",children:[s.jsxs("div",{className:"flex flex-col p-5 gap-2.5 md:flex-row md:justify-between md:items-center md:px-[26px]",children:[s.jsx("h5",{children:"Latest Accepted Reviews"}),s.jsx(X,{value:t,onChange:u,options:v,variant:"minimal"})]}),s.jsx("span",{className:"block h-[1px] bg-input-border opacity-60"}),s.jsx("div",{children:o.currentItems().map((i,c)=>s.jsx(ae,{data:i,index:c},`${t}-${i==null?void 0:i._id}`))})]}),o.maxPage>1&&s.jsx(ce,{pagination:o})]})},pe=({score:e=0})=>s.jsxs(h,{className:"card flex flex-col items-start md:items-center md:!pt-11",children:[s.jsx(N,{value:e}),s.jsx(ne,{className:"h2 md:!text-[32px] my-[17px]",num:e,decimals:1}),s.jsx("span",{className:"h6",children:"Review score"})]}),Ee=()=>{const{t:e}=z(),r=H(J),[l,m]=n.useState({}),[t,u]=n.useState([]),[o,i]=n.useState([]),[c,C]=n.useState(0),[P,d]=n.useState({page:1,limit:R,orderByValue:-1,orderByKey:"_id",shopId:r==null?void 0:r._id}),{data:g,error:ue,isSuccess:_,isFetching:A,refetch:E}=Q(P,{refetchOnMountOrArgChange:!0,skip:!1});return n.useEffect(()=>{if(_){const{reviews:a,totalCount:x,totalPages:k,limit:T,page:B,count1:I,count2:$,count3:O,count4:D,count5:f}=g==null?void 0:g.metadata,b=(f+f)/x,M=1-b,F={totalCount:x,totalPages:k,limit:T,page:B,Positive:+(b*100).toFixed(0),Negative:+(M*100).toFixed(0)},y=[{rate:5,value:f},{rate:4,value:D},{rate:3,value:O},{rate:2,value:$},{rate:1,value:I}],V=y.reduce((Y,p)=>+Y+ +(p==null?void 0:p.rate)*+(p==null?void 0:p.value),0);C(+(+V/+x).toFixed(1)),i(y),m(F),u(a)}},[g]),n.useEffect(()=>{d(a=>({...a,shopId:r==null?void 0:r._id}))},[r]),s.jsxs(s.Fragment,{children:[s.jsx(K,{isFetching:A,cb_refetch:E,title:e("Reviews")}),s.jsxs("div",{className:"flex flex-col flex-1 gap-5 md:gap-[26px]",children:[s.jsxs("div",{className:"grid grid-cols-1 gap-y-5 md:gap-y-[26px] xl:grid-cols-6 xl:gap-x-[26px]",children:[s.jsxs("div",{className:"widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4",children:[s.jsx(pe,{score:c}),s.jsx(j,{label:"Total",count:(l==null?void 0:l.totalCount)??0,color:"green"}),s.jsx(j,{label:"Positive",count:(l==null?void 0:l.Positive)??0,suffix:"%",iconClass:"user-plus-solid"}),s.jsx(j,{label:"Negative",count:(l==null?void 0:l.Negative)??0,suffix:"%",color:"red",iconClass:"user-group-crown-solid"})]}),s.jsx(te,{data:o})]}),s.jsx(xe,{reviews:t,options:l,cb_setParamsPage:a=>{d(x=>({...x,...a}))},cb_setParamsSort:a=>{d(x=>({...x,page:1,...a}))}})]})]})};export{Ee as default};