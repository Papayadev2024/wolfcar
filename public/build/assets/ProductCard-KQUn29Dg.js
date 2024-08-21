import{R as e,r as f}from"./FilterContainer-TykbAVkI.js";import{T as h}from"./arrayJoin-Fk5sgFcM.js";import"./TippyButton-w0wM3ydO.js";const E=({title:t,children:s,className:o="flex flex-row gap-4 w-full flex-wrap",items:m=[],itemId:c="id",itemName:d="name",onClick:i=()=>{}})=>{const l=t.toLowerCase().split(" ").filter(Boolean).join("-");return e.createElement("div",{className:"flex flex-col gap-4 w-full"},e.createElement("h2",{className:"font-semibold"},t),e.createElement("div",{className:o},s||m.map(n=>e.createElement("label",{key:`item-${l}-${n[c]}`,htmlFor:`item-${l}-${n[c]}`,className:"text-custom-border flex flex-row gap-2  items-center cursor-pointer"},e.createElement("input",{id:`item-${l}-${n[c]}`,name:l,type:"checkbox",className:"bg-[#DEE2E6] rounded-sm  border-none",value:n[c],onClick:g=>i(`attribute-${n.attribute_id}`,g.target.value,g.target.checked)}),n[d]))))},L=({minPrice:t,setFilter:s,filter:o,maxPrice:m,categories:c=[],tags:d=[],brands:i=[],sizes:l=[],colors:n=[],attribute_values:g,tag_id:w,selected_category:$})=>{f.useRef();const[b,y]=f.useState({}),v=a=>{y(r=>({...r,[a]:!r[a]}))},N=a=>{const r=structuredClone(o);r.minPrice=Number(a.target.value)||0,s(r)},k=a=>{const r=structuredClone(o);r.maxPrice=Number(a.target.value)||0,s(r)},x=(a,r,p)=>{let u=structuredClone(o);u[a]||(u[a]=[]),p?u[a].push(r):u[a]=u[a].filter(C=>C!=r),s(u)};return e.createElement(e.Fragment,null,e.createElement("button",{className:"w-full h-12 text-[17px] bg-[#006BF6] text-white text-center font-semibold rounded-full",type:"reset"},"Limpiar filtros"),e.createElement(E,{title:"Precio",className:"flex flex-row gap-4 w-full"},e.createElement("input",{type:"number",className:"w-28 rounded-md border",placeholder:"Desde",min:t,max:m,step:.01,onChange:N}),e.createElement("input",{type:"number",className:"w-28 rounded-md border",placeholder:"Hasta",min:t,max:m,step:.01,onChange:k})),c.length>0&&e.createElement("div",{className:"w-full "},e.createElement("h2",{className:"font-semibold mb-4"},"Categorias"),c.map(a=>a.subcategories.length>0&&e.createElement("div",{key:a.id,className:"w-full"},e.createElement("div",{className:"border-b border-gray-200"},e.createElement("button",{type:"button",className:"w-full flex justify-between items-center py-2 px-4 text-left text-[#006BF6] bg-gray-100 hover:bg-gray-200 focus:outline-none",onClick:()=>v(a.id)},e.createElement("span",null,a.name),e.createElement("svg",{className:`w-5 h-5 transform transition-transform ${b[a.id]?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})))),b[a.id]&&e.createElement("div",{className:"p-4 border border-t-0 border-gray-200 space-y-4"},a.subcategories.map(r=>{console.log(r.id,o.subcategory_id.includes(String(r.id)));const p=o.subcategory_id.includes(String(r.id));return e.createElement(e.Fragment,null,e.createElement("label",{key:r.id,htmlFor:`item-category-${r.id}`,className:"text-custom-border flex flex-row gap-2  items-center cursor-pointer"},e.createElement("input",{id:`item-category-${r.id}`,name:"category",type:"checkbox",className:"bg-blue-500 rounded-sm  border-none",value:r.id,onClick:u=>x("subcategory_id",u.target.value,u.target.checked),defaultChecked:p}),r.name))}))))),d.length>0&&e.createElement("div",{className:"flex flex-col gap-4 w-full"},e.createElement("h2",{className:"font-semibold"},"Etiquetas"),e.createElement("div",{className:"flex flex-row gap-4 w-full flex-wrap"},d.map(a=>{const r=a.id===Number(w);return e.createElement("label",{key:`item-tag-${a.id}`,htmlFor:`item-tag-${a.id}`,className:"text-custom-border flex flex-row gap-2  items-center cursor-pointer"},e.createElement("input",{id:`item-tag-${a.id}`,name:"tag",type:"checkbox",className:"bg-[#DEE2E6] rounded-sm  border-none",value:a.id,onClick:p=>x("txp.tag_id",p.target.value,p.target.checked),defaultChecked:r}),a.name)}))),g.map((a,r)=>e.createElement(E,{key:`attribute-${r}`,title:a[0].attribute.titulo,items:a,itemName:"valor",onClick:x})))},B=({current:t,setCurrent:s,pages:o})=>{const m=new Array(o||1);m.fill(null);const c=()=>{const i=t--;s(i<1?1:i)},d=()=>{const i=t--;s(i>o?o:i)};return e.createElement(e.Fragment,null,e.createElement("nav",{"aria-label":"Page navigation example w-full"},e.createElement("ul",{className:"flex flex-wrap items-center gap-1 -space-x-px text-base justify-center"},e.createElement("li",null,e.createElement("button",{className:"cursor-pointer flex items-center justify-center px-4 h-10 w-10 leading-tight text-gray-500 hover:bg-white rounded-full bg-gray-100 hover:text-gray-700",onClick:c,type:"button"},e.createElement("span",{className:"sr-only"},"Previous"),e.createElement("svg",{className:"w-3 h-3 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 1 1 5l4 4"})))),m.map((i,l)=>l+1==t-4||l+1==t+4?e.createElement("li",{key:`item-${l}`},e.createElement("button",{"aria-current":"page",className:"z-10 flex items-center justify-center px-4 h-10 w-10 leading-tight  hover:bg-white rounded-full bg-transparent text-gray-500 hover:text-gray-700",type:"button"},"···")):e.createElement("li",{key:`item-${l}`,className:l+1>t-4&&l+1<t+4?"block":"hidden"},e.createElement("button",{"aria-current":"page",className:`cursor-pointer z-10 flex items-center justify-center px-4 h-10 w-10 leading-tight  hover:bg-white rounded-full ${t==l+1?"bg-[#006BF6] text-white":"bg-gray-100 text-gray-500 hover:text-gray-700"}`,onClick:()=>s(l+1),type:"button"},l+1))),e.createElement("li",null,e.createElement("button",{className:"cursor-pointer flex items-center justify-center px-4 h-10 w-10 leading-tight text-gray-500 hover:bg-white rounded-full bg-gray-100 hover:text-gray-700",onClick:d,type:"button"},e.createElement("span",{className:"sr-only"},"Next"),e.createElement("svg",{className:"w-3 h-3 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})))))))},_=({item:t,width:s,bgcolor:o,is_reseller:m})=>{var l;const[c,d]=f.useState(!1),i=t.category;return e.createElement("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:`flex flex-col relative w-full md:${s} ${o}`,"data-aos":"zoom-in-left"},e.createElement("div",{className:`${o} product_container basis-4/5 flex flex-col justify-center relative`},e.createElement("div",{className:"absolute top-2 left-2 w-max"},(l=t.tags)==null?void 0:l.map(n=>e.createElement("div",{className:"px-4 mb-1",key:n.id},e.createElement("span",{className:"block font-semibold text-[8px] md:text-[12px] bg-black py-2 px-3 flex-initial w-full text-center text-white rounded-[5px] relative top-[18px] z-10",style:{backgroundColor:n.color}},n.name))),t.descuento>0&&e.createElement("div",{className:"px-4 mb-1"},e.createElement("span",{className:"block font-semibold text-[8px] md:text-[12px] bg-black py-2 px-3 flex-initial w-full text-center text-white rounded-[5px] relative top-[18px] z-10",style:{backgroundColor:"#10c469"}},"-",Math.round(100-t.descuento*100/t.precio),"%"))),e.createElement("div",null,e.createElement("div",{className:"relative flex justify-center items-center h-[300px]"},e.createElement("img",{style:{opacity:!t.imagen_ambiente||!c?"1":"0",scale:!t.imagen_ambiente||!c?"1.05":"1",backgroundColor:"#eeeeee"},src:t.imagen?`/${t.imagen}`:"/images/img/noimagen.jpg",alt:t.name,onError:n=>n.target.src="/images/img/noimagen.jpg",className:`transition ease-out duration-300 transform w-full h-[300px] object-${i.fit} absolute inset-0`}),t.imagen_ambiente&&e.createElement("img",{style:{opacity:c?"1":"0",scale:c?"1.05":"1"},src:`/${t.imagen_ambiente}`,alt:t.name,onError:n=>n.target.src="/images/img/noimagen.jpg",className:"transition ease-out duration-300 transform w-full h-[300px] object-cover absolute inset-0"})),e.createElement("div",{className:"addProduct text-center flex justify-center h-0"},e.createElement("div",{className:"flex flex-row gap-2 items-center"},e.createElement("a",{href:`/producto/${t.id}`,className:"font-semibold text-[16px] bg-[#006BF6] py-2 px-4 text-center text-white rounded-3xl h-10"},"Ver producto"),e.createElement(h,{content:"Agregar al Carrito"},e.createElement("button",{href:`/producto/${t.id}`,type:"button",id:"btnAgregarCarrito","data-id":`${t.id}`,className:"flex items-center font-semibold text-[13px] bg-[#006BF6] hover:bg-blue-400 py-1 px-4 text-center text-white rounded-3xl h-10"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"22",height:"22",fill:"#FFFFFF"},e.createElement("path",{d:"M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z"})))))))),e.createElement("a",{href:`/producto/${t.id}`,className:"p-2"},e.createElement(h,{content:t.producto},e.createElement("h2",{className:"block text-[17px] text-center overflow-hidden",style:{display:"-webkit-box",WebkitLineClamp:2,textOverflow:"ellipsis",WebkitBoxOrient:"vertical",height:"51px"}},t.producto)),m?e.createElement(e.Fragment,null,e.createElement("div",{className:"flex content-between flex-row gap-4 items-center justify-center"},e.createElement("span",{className:"text-[#15294C] opacity-60 text-[16.45px]  line-through"},"S/. ",t.descuento>0?t.descuento:t.precio),t.descuento>0&&e.createElement("span",{className:"text-sm text-[#15294C] opacity-60 line-through"},"S/. ",t.precio)),e.createElement("div",{className:"flex content-between flex-row gap-4 items-center justify-center"},"Reseller ",e.createElement("span",{className:"text-[#006BF6] text-[16.45px] font-bold"},"S/. ",t.precio_reseller))):e.createElement("div",{className:"flex content-between flex-col gap-4 items-center justify-center"},e.createElement("span",{className:"text-[#006BF6] text-[16.45px] font-bold"},t.descuento>0?`Precio Promo: S/.  ${t.descuento}`:`Precio Regular: S/. ${t.precio}`),t.descuento>0&&e.createElement(e.Fragment,null,e.createElement("div",{className:"flex flex-row gap-2 items-center"},e.createElement("span",null,"Precio Regular:"),"  ",e.createElement("span",{className:"text-sm text-[#15294C] opacity-80 line-through"}," S/. ",t.precio))))))};export{L as F,_ as P,B as a};
