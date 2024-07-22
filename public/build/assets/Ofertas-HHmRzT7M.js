import{R as a,r as l}from"./FilterContainer-TykbAVkI.js";import{C as w,c as C,a as N}from"./arrayJoin-xqzV41hn.js";import{F as S,P as R,a as j}from"./ProductCard-pvbSERZ-.js";import{m as O}from"./main-jzs2GwAM.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GBzf7Cls.js";import"./CreateReactScript-JKK_oT5p.js";import"./axios-_sX4vCAy.js";import"./ProductCard-ssICDoe4.js";const T=({minPrice:u,maxPrice:d,categories:h,tags:P,attribute_values:b,id_cat:p})=>{const[E,_]=l.useState([]),[e,y]=l.useState(p?{category_id:[p]}:{}),[m,F]=l.useState(0),[o,f]=l.useState(1);l.useEffect(()=>{f(1),g()},[e]),l.useEffect(()=>{g()},[o]);const g=async()=>{const t=[];if((e.maxPrice||e.minPrice)&&(e.maxPrice&&e.minPrice?t.push([[["precio",">=",e.minPrice],"or",["descuento",">=",e.minPrice]],"and",[["precio","<=",e.maxPrice],"or",["descuento","<=",e.maxPrice]]]):e.minPrice?t.push([["precio",">=",e.minPrice],"or",["descuento",">=",e.minPrice]]):e.maxPrice&&t.push([["precio","<=",e.maxPrice],"or",["descuento","<=",e.maxPrice]])),e["txp.tag_id"]&&e["txp.tag_id"].length>0){const i=[];e["txp.tag_id"].forEach((r,s)=>{s==0?i.push(["txp.tag_id","=",r]):i.push("or",["txp.tag_id","=",r])}),t.push(i)}for(const i in e){if(!i.startsWith("attribute-")||e[i].length==0)continue;const[,r]=i.split("-"),s=[];e[i].forEach((x,v)=>{v==0?s.push(["apv.attribute_value_id","=",x]):s.push("or",["apv.attribute_value_id","=",x])}),t.push([["a.id","=",r],"and",s])}if(e.category_id&&e.category_id.length>0){const i=[];e.category_id.forEach((r,s)=>{s==0?i.push(["categoria_id","=",r]):i.push("or",["categoria_id","=",r])}),t.push(i)}const{status:c,result:n}=await O.Fetch("/api/ofertas/paginate",{method:"POST",body:JSON.stringify({requireTotalCount:!0,filter:N([...t,["products.visible","=",!0]],"and"),take:10,skip:10*(o-1)})});_((n==null?void 0:n.data)??[]),F((n==null?void 0:n.totalCount)??0)},k=b.reduce((t,c)=>(t[c.attribute_id]||(t[c.attribute_id]=[]),t[c.attribute_id].push(c),t),{});return a.createElement(a.Fragment,null,a.createElement("form",{className:"flex flex-col md:flex-row gap-6  mx-auto font-poppins bg-[#F1F1F1] w-full",style:{padding:"40px"}},a.createElement("section",{className:"flex flex-col gap-4 md:basis-3/12 bg-white p-6 rounded-lg h-max md:sticky top-2"},a.createElement(S,{setFilter:y,filter:e,minPrice:u??0,maxPrice:d??0,categories:h,tags:P,attribute_values:Object.values(k),selected_category:p})),a.createElement("section",{className:"flex flex-col gap-6 md:basis-9/12"},a.createElement("div",{className:"w-full bg-white rounded-lg font-medium flex flex-row justify-between items-center px-2 py-3"},a.createElement("div",null,a.createElement("span",{className:"font-normal text-[17px] text-[#666666] ml-3"},"Mostrando ",(o-1)*10+1," - ",o*10>m?m:o*10," de ",m," resultados"))),a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pr-4"},E.map((t,c)=>a.createElement(R,{key:`product-${t.id}`,item:t,bgcolor:"bg-white"}))),a.createElement("div",{className:"w-full font-medium flex flex-row justify-center items-center"},a.createElement(j,{current:o,setCurrent:f,pages:Math.ceil(m/10)})))))};w((u,d)=>{C(u).render(a.createElement(T,{...d}))});
