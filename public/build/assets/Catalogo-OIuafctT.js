import{R as a,r as s}from"./FilterContainer-TykbAVkI.js";import{c as T}from"./ReactAppend-GBOQKLDe.js";import{C as z}from"./CreateReactScript-Il069F1S.js";import{F as C,P as H,a as q}from"./ProductCard-ncKYmfof.js";import"./SelectAPIFormGroup-A251JnnE.js";import{a as O}from"./arrayJoin-Fk5sgFcM.js";import{a as g}from"./axios-_sX4vCAy.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GBzf7Cls.js";import"./CreateReactScript-Hm6EbMAE.js";import"./TippyButton-w0wM3ydO.js";const A=({minPrice:d,maxPrice:m,categories:x,tags:h,attribute_values:j,id_cat:l,tag_id:b,subCatId:E})=>{const[N,F]=s.useState([]),[e,u]=s.useState({}),[f,S]=s.useState(0),[n,y]=s.useState(1),[M,v]=s.useState(!1),w=s.useRef(!1),p=s.useRef(null);s.useEffect(()=>{const r=document.createElement("script");return r.src="js/notify.extend.min.js",r.async=!0,document.body.appendChild(r),()=>{document.body.removeChild(r)}},[]),s.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("tag");t&&u(o=>({...o,"txp.tag_id":[t]})),l&&u(o=>({...o,category_id:[l]}))},[l]),s.useEffect(()=>{y(1),_()},[e]),s.useEffect(()=>{_()},[n]),s.useEffect(()=>{E!==null&&u({...e,subcategory_id:[E]})},[]);const _=async()=>{p.current&&p.current.cancel("Operation canceled due to new request."),p.current=g.CancelToken.source();const r=[];if((e.maxPrice||e.minPrice)&&(e.maxPrice&&e.minPrice?r.push([[["precio",">=",e.minPrice],"or",[["descuento",">=",e.minPrice],"and",["descuento","<>",0]]],"and",[["precio","<=",e.maxPrice],"or",[["descuento","<=",e.maxPrice],"and",["descuento","<>",0]]]]):e.minPrice?r.push([["precio",">=",e.minPrice],"or",[["descuento",">=",e.minPrice],"and",["descuento","<>",0]]]):e.maxPrice&&r.push([["precio","<=",e.maxPrice],"or",[["descuento","<=",e.maxPrice],"and",["descuento","<>",0]]])),e["txp.tag_id"]&&e["txp.tag_id"].length>0){const t=[];e["txp.tag_id"].forEach((o,i)=>{i===0?t.push(["txp.tag_id","=",o]):t.push("or",["txp.tag_id","=",o])}),r.push(t)}for(const t in e){if(!t.startsWith("attribute-")||e[t].length===0)continue;const[,o]=t.split("-"),i=[];e[t].forEach((k,R)=>{R===0?i.push(["apv.attribute_value_id","=",k]):i.push("or",["apv.attribute_value_id","=",k])}),r.push([["a.id","=",o],"and",i])}if(e.category_id&&e.category_id.length>0){const t=[];e.category_id.forEach((o,i)=>{i===0?t.push(["categoria_id","=",o]):t.push("or",["categoria_id","=",o])}),r.push(t)}if(e.subcategory_id&&e.subcategory_id.length>0){const t=[];e.subcategory_id.forEach((o,i)=>{i===0?t.push(["subcategory_id","=",o]):t.push("or",["subcategory_id","=",o])}),r.push(t)}try{const{status:t,data:o}=await g.post("/api/products/paginate",{requireTotalCount:!0,filter:O([...r,["products.visible","=",!0]],"and"),take:12,skip:12*(n-1)},{headers:{"Content-Type":"application/json"},cancelToken:p.current.token});w.current=(o==null?void 0:o.is_proveedor)??!1,F((o==null?void 0:o.data)??[]),S((o==null?void 0:o.totalCount)??0)}catch(t){g.isCancel(t)?console.log("Request canceled",t.message):console.error(t)}},P=j.reduce((r,t)=>(r[t.attribute_id]||(r[t.attribute_id]=[]),r[t.attribute_id].push(t),r),{}),c=x.find(r=>r.id===Number(l));return console.log(c),a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("section",{class:"flex relative flex-col justify-center items-center px-[5%] py-28 text-base font-medium min-h-[345px] text-neutral-900 max-md:py-24"},a.createElement("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/1f15375dac970433a2abe3921fa2c31e35c32f7b26a37b841431aaba1861d380?placeholderIfAbsent=true&apiKey=72fae0f4c808496790606e16dad566da",alt:"",class:"object-cover absolute inset-0 size-full opacity-15"}),a.createElement("div",{class:"flex relative flex-col max-w-full w-[499px]"},a.createElement("h2",{class:"self-center text-[#FD1F4A] font-Helvetica_Medium"},"Catálogo"),a.createElement("h3",{class:"mt-3 text-5xl text-center max-md:max-w-full font-Helvetica_Medium"},(c==null?void 0:c.name)??"Todas las categorías"),a.createElement("p",{class:"mt-3 text-lg font-light text-center max-md:max-w-full "},(c==null?void 0:c.description)??"Explora nuestro catálogo completo de productos cuidadosamente seleccionados para ofrecerte la mejor calidad y variedad."))),a.createElement("form",{className:"flex flex-col lg:flex-row gap-6  mx-auto font-Helvetica_Light font-bold w-full p-5 lg:p-10"},a.createElement("section",{className:"hidden lg:flex md:flex-col gap-4 md:basis-3/12 bg-white p-6 rounded-lg h-max top-2"},a.createElement(C,{setFilter:u,filter:e,minPrice:d??0,maxPrice:m??0,categories:x,tags:h,attribute_values:Object.values(P),selected_category:l,tag_id:b})),a.createElement("section",{className:"flex flex-col gap-6 md:basis-9/12"},a.createElement("div",{className:"w-full bg-white rounded-lg font-medium flex flex-row justify-between items-center px-2 py-3"},a.createElement("div",{className:"flex flex-col xl:flex-row  justify-start xl:justify-between items-start gap-2 "},a.createElement("span",{className:"font-normal text-[17px] text-[#666666] xl:ml-3"},"Mostrando ",(n-1)*12+1," - ",n*12>f?f:n*12," de ",f," resultados"),a.createElement("button",{type:"button",className:"lg:hidden text-[#006BF6]",onClick:()=>v(!0)}," Mostrar Filtros"))),a.createElement("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:pr-4"},N.map((r,t)=>a.createElement(H,{key:`product-${r.id}`,item:r,bgcolor:"bg-white",is_reseller:w.current}))),a.createElement("div",{className:"w-full font-medium flex flex-row justify-center items-center"},a.createElement(q,{current:n,setCurrent:y,pages:Math.ceil(f/12)}))),M&&a.createElement("div",{className:"fixed z-40 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center max-h-[80vh] p-5",id:"modal"},a.createElement("div",{className:"z-50 flex items-center content-center justify-center absolute  p-4 bg-black rounded-full h-6 w-6",style:{top:"20px",right:"20px"}},a.createElement("button",{type:"button",onClick:()=>v(!1),className:"text-white text-md "},"X")),a.createElement("div",{className:"flex flex-col gap-4 w-full bg-white p-6 rounded-lg top-2 overflow-y-auto mt-10",style:{maxHeight:"90vh",maxWidth:"85vh"}},a.createElement(C,{setFilter:u,filter:e,minPrice:d??0,maxPrice:m??0,categories:x,tags:h,attribute_values:Object.values(P),selected_category:l,tag_id:b}))))))};z((d,m)=>{T(d).render(a.createElement(A,{...m}))});
