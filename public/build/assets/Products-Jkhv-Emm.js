import{R as e,r as n}from"./FilterContainer-TykbAVkI.js";import{C as E,c as b}from"./CreateReactScript-qyXjqq-l.js";import"./main-jzs2GwAM.js";import"./OfferCard-gi8lWMWA.js";import"./ProductCard-ssICDoe4.js";import{R as f}from"./OfferForm-gquhBaou.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GBzf7Cls.js";import"./CreateReactScript-JKK_oT5p.js";import"./axios-_sX4vCAy.js";const h=({id:o,producto:c,discount:t,price:l,onDeleteClicked:s})=>e.createElement("tr",null,e.createElement("td",null,c),e.createElement("td",null,"S/. ",t>0?t.toFixed(2):l.toFixed(2)," ",t>0&&e.createElement("span",{className:"line-through"},l.toFixed(2))),e.createElement("td",null,e.createElement("button",null,"Editar"),e.createElement("button",{onClick:()=>s(o)},"Eliminar"))),P=({text:o,children:c})=>e.createElement("h1",{className:"h1"},c||o);f.setAppElement("body");const N=({products:o=[]})=>{const c=n.useRef(),[t,l]=n.useState(o),[s,m]=n.useState("Ningun producto borrado");n.useEffect(()=>{console.log("aqui deberia ejecutarse el datatable")},[t]),n.useEffect(()=>{fetch("https://google.com")},[null]);const d=()=>{const r=structuredClone(t),a=r.shift();m(`El producto ${a.producto} se ha eliminado`),l(r)},i=r=>{const u=structuredClone(t).filter(p=>p.id!=r);l(u)};return e.createElement(e.Fragment,null,e.createElement("div",{className:"p-6"},e.createElement("button",{className:"bg-blue-400 p-2 rounded-md",onClick:d},"Eliminar primer registro"),e.createElement(P,{text:s}),e.createElement("table",{ref:c,className:"table border w-full"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null,"Nombre"),e.createElement("td",null,"Precio"),e.createElement("td",null,"Acciones"))),e.createElement("tbody",null,t.length>0?t.map(r=>{const a=Number(r.precio)||0,u=Number(r.descuento)||0;return e.createElement(h,{...r,price:a,discount2:u,onDeleteClicked:i})}):"No hay productos"))))};E((o,c)=>{b(o).render(e.createElement(N,{...c}))});
