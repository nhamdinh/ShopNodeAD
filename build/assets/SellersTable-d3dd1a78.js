import{P as o,j as e,C as f}from"./mui-2493782d.js";import{P as j}from"./PageHeader-8dc226f4.js";import{_ as g,t as b,g as u,a as w,h as m,S as N}from"./index-f5793006.js";import{T as S,r as i}from"./antd-1d728b6a.js";import{C as y}from"./CalendarSelector-8c963a0e.js";import{S as v}from"./index-8d8d8ff4.js";import{E as P}from"./Empty-0bb19490.js";import{S as C}from"./SubmenuTrigger-34b58daa.js";import{u as T}from"./usePagination-6afed751.js";import{S as E}from"./columnDefs-17e744f7.js";import{s as _}from"./helpers-22670235.js";import{s as k}from"./sellers-05392bef.js";import{P as R}from"./Pagination-94a491c8.js";import"./DocumentTitle-62345d26.js";import"./index-cc8501c9.js";import"./RatingStars-632e9c20.js";import"./Timestamp-eb25fa85.js";import"./Trend-1bb25368.js";import"./Counter-934451c1.js";import"./11-a970b6da.js";const L=g(S).withConfig({displayName:"styles__StyledTable",componentId:"sc-107u9g0-0"})(["flex-grow:1;.ant-table-content{padding:0 26px;}.ant-table-cell{border-color:"," !important;}.ant-table-thead .ant-table-cell{padding:28px 0 21px !important;background:var(--widget) !important;&:last-of-type{text-align:right;}}.ant-table-row:last-of-type .ant-table-cell{border-bottom:none !important;}.ant-table-tbody .ant-table-cell{padding:35px 0 30px !important;}"],b("theme",{light:"rgba(226, 225, 225, 0.6)",dark:"rgba(53, 69, 133, 0.6)"})),x=({seller:a,activeCollapse:r,handleCollapse:t})=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"img-wrapper flex items-center justify-center w-10 h-10",children:e.jsx("img",{className:"max-w-[28px]",src:a.logo,alt:a.name})}),e.jsx("h6",{className:"max-w-[110px] truncate xs:max-w-[160px]",children:a.name})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:`collapse-btn ${r===a.id?"active":""}`,"aria-label":"Toggle view",onClick:()=>t(a.id),children:e.jsx("i",{className:"icon icon-caret-down-solid"})}),e.jsx(u,{to:"/product-editor","aria-label":"Edit",children:e.jsx("i",{className:"icon icon-pen-to-square-regular"})}),e.jsx(C,{})]})]}),e.jsx(f,{in:r===a.id,children:e.jsx("table",{className:"basic-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Rating"}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("i",{className:"icon-star-solid text-yellow"}),e.jsx("span",{className:"label-text",children:a.rating})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-gray-500",children:"Email"}),e.jsx("td",{children:e.jsx("a",{className:"block max-w-[160px] truncate text-accent",href:`mailto:${a.email}`,children:a.email})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-gray-500",children:"Phone"}),e.jsx("td",{children:e.jsx("a",{className:"block max-w-[160px] truncate text-accent",href:`tel:${a.phone}`,children:a.phone})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"text-gray-500",children:"Site"}),e.jsx("td",{children:e.jsx("a",{className:"block max-w-[160px] truncate text-accent",href:a.website,target:"_blank",rel:"noopener noreferrer",children:"www.website.com"})})]})]})})})]});x.propTypes={seller:o.object.isRequired,activeCollapse:o.string.isRequired,handleCollapse:o.func.isRequired};const O=()=>{const{width:a}=w(),[r,t]=i.useState(""),[n,d]=i.useState(m[0]),p=a<1280?6:3,l=T({data:k.slice(0,12),limit:p}),c=_(l.currentItems(),n.value);i.useEffect(()=>{l.goToPage(0),t("")},[n]),i.useEffect(()=>{t("")},[l.currentPage,a]);const h=s=>{t(r===s?"":s)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-4 mb-5 md:flex-row justify-between md:mb-[30px]",children:[e.jsx(y,{wrapperClass:"md:max-w-[275px]",id:"salesPeriod"}),e.jsxs("div",{className:"flex flex-col-reverse gap-2.5 md:flex-col md:min-w-[220px]",children:[e.jsxs("p",{className:"md:text-right",children:["View profiles: ",l.showingOf()]}),e.jsx(v,{options:m,value:n,onChange:d})]})]}),e.jsxs(N,{className:"flex flex-col flex-1 gap-5",children:[a>=768?e.jsx(L,{columns:E,dataSource:c,locale:{emptyText:e.jsx(P,{text:"No sellers found"})},rowKey:s=>s.id,pagination:!1}):e.jsx("div",{className:"flex flex-col flex-1 gap-4",children:c.map((s,q)=>e.jsx(x,{handleCollapse:h,activeCollapse:r,seller:s},s.id))}),l.maxPage>1&&e.jsx(R,{pagination:l})]})]})},ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Seller Profiles"}),e.jsx(O,{})]});export{ae as default};