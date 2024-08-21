import{R as s,r as i}from"./FilterContainer-TykbAVkI.js";import{c as T}from"./ReactAppend-GBOQKLDe.js";import{C as M}from"./CreateReactScript-Il069F1S.js";import{F as k,P as q,a as O}from"./ProductCard-KQUn29Dg.js";import"./SelectAPIFormGroup-A251JnnE.js";import{a as z}from"./arrayJoin-Fk5sgFcM.js";import{a as f}from"./axios-_sX4vCAy.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GBzf7Cls.js";import"./CreateReactScript-Hm6EbMAE.js";import"./TippyButton-w0wM3ydO.js";const B=({minPrice:u,maxPrice:d,categories:g,tags:h,attribute_values:C,id_cat:n,tag_id:x,subCatId:b})=>{const[F,N]=i.useState([]),[e,l]=i.useState({}),[m,j]=i.useState(0),[c,y]=i.useState(1),[S,E]=i.useState(!1),_=i.useRef(!1),p=i.useRef(null);i.useEffect(()=>{const r=document.createElement("script");return r.src="js/notify.extend.min.js",r.async=!0,document.body.appendChild(r),()=>{document.body.removeChild(r)}},[]),i.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("tag");t&&l(a=>({...a,"txp.tag_id":[t]})),n&&l(a=>({...a,category_id:[n]}))},[n]),i.useEffect(()=>{y(1),v()},[e]),i.useEffect(()=>{v()},[c]),i.useEffect(()=>{b!==null&&l({...e,subcategory_id:[b]})},[]);const v=async()=>{p.current&&p.current.cancel("Operation canceled due to new request."),p.current=f.CancelToken.source();const r=[];if((e.maxPrice||e.minPrice)&&(e.maxPrice&&e.minPrice?r.push([[["precio",">=",e.minPrice],"or",[["descuento",">=",e.minPrice],"and",["descuento","<>",0]]],"and",[["precio","<=",e.maxPrice],"or",[["descuento","<=",e.maxPrice],"and",["descuento","<>",0]]]]):e.minPrice?r.push([["precio",">=",e.minPrice],"or",[["descuento",">=",e.minPrice],"and",["descuento","<>",0]]]):e.maxPrice&&r.push([["precio","<=",e.maxPrice],"or",[["descuento","<=",e.maxPrice],"and",["descuento","<>",0]]])),e["txp.tag_id"]&&e["txp.tag_id"].length>0){const t=[];e["txp.tag_id"].forEach((a,o)=>{o===0?t.push(["txp.tag_id","=",a]):t.push("or",["txp.tag_id","=",a])}),r.push(t)}for(const t in e){if(!t.startsWith("attribute-")||e[t].length===0)continue;const[,a]=t.split("-"),o=[];e[t].forEach((P,R)=>{R===0?o.push(["apv.attribute_value_id","=",P]):o.push("or",["apv.attribute_value_id","=",P])}),r.push([["a.id","=",a],"and",o])}if(e.category_id&&e.category_id.length>0){const t=[];e.category_id.forEach((a,o)=>{o===0?t.push(["categoria_id","=",a]):t.push("or",["categoria_id","=",a])}),r.push(t)}if(e.subcategory_id&&e.subcategory_id.length>0){const t=[];e.subcategory_id.forEach((a,o)=>{o===0?t.push(["subcategory_id","=",a]):t.push("or",["subcategory_id","=",a])}),r.push(t)}try{const{status:t,data:a}=await f.post("/api/products/paginate",{requireTotalCount:!0,filter:z([...r,["products.visible","=",!0]],"and"),take:12,skip:12*(c-1)},{headers:{"Content-Type":"application/json"},cancelToken:p.current.token});_.current=(a==null?void 0:a.is_proveedor)??!1,N((a==null?void 0:a.data)??[]),j((a==null?void 0:a.totalCount)??0)}catch(t){f.isCancel(t)?console.log("Request canceled",t.message):console.error(t)}},w=C.reduce((r,t)=>(r[t.attribute_id]||(r[t.attribute_id]=[]),r[t.attribute_id].push(t),r),{});return s.createElement(s.Fragment,null,s.createElement("style",null),s.createElement("form",{className:"flex flex-col md:flex-row gap-6  mx-auto font-poppins bg-[#F1F1F1] w-full",style:{padding:"40px"}},s.createElement("section",{className:"hidden md:flex md:flex-col gap-4 md:basis-3/12 bg-white p-6 rounded-lg h-max md:sticky top-2"},s.createElement(k,{setFilter:l,filter:e,minPrice:u??0,maxPrice:d??0,categories:g,tags:h,attribute_values:Object.values(w),selected_category:n,tag_id:x})),s.createElement("section",{className:"flex flex-col gap-6 md:basis-9/12"},s.createElement("div",{className:"w-full bg-white rounded-lg font-medium flex flex-row justify-between items-center px-2 py-3"},s.createElement("div",{className:"flex flex-row gap-2"},s.createElement("span",{className:"font-normal text-[17px] text-[#666666] ml-3"},"Mostrando ",(c-1)*12+1," - ",c*12>m?m:c*12," de ",m," resultados"),s.createElement("button",{type:"button",className:"md:hidden text-[#006BF6]",onClick:()=>E(!0)}," Mostrar Filtros"))),s.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:pr-4"},F.map((r,t)=>s.createElement(q,{key:`product-${r.id}`,item:r,bgcolor:"bg-white",is_reseller:_.current}))),s.createElement("div",{className:"w-full font-medium flex flex-row justify-center items-center"},s.createElement(O,{current:c,setCurrent:y,pages:Math.ceil(m/12)}))),S&&s.createElement("div",{className:"fixed z-40 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center max-h-[80vh] ",id:"modal"},s.createElement("div",{className:"z-50 flex items-center content-center justify-center absolute  p-4 bg-black rounded-full h-6 w-6",style:{top:"20px",right:"20px"}},s.createElement("button",{type:"button",onClick:()=>E(!1),className:"text-white text-md "},"X")),s.createElement("div",{className:"flex flex-col gap-4 md:basis-3/12 bg-white p-6 rounded-lg top-2 overflow-y-auto mt-10",style:{maxHeight:"90vh",maxWidth:"85vh"}},s.createElement(k,{setFilter:l,filter:e,minPrice:u??0,maxPrice:d??0,categories:g,tags:h,attribute_values:Object.values(w),selected_category:n,tag_id:x})))))};M((u,d)=>{T(u).render(s.createElement(B,{...d}))});
