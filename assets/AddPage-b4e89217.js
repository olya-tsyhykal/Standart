import{r as s,j as e,k as C}from"./index-d5fe204f.js";import"./TextField-254e3e66.js";import{b as P}from"./api-6141b390.js";import"./index.browser-7e542916.js";const S="_addForm_1xskl_1",F="_title_1xskl_8",f="_select_1xskl_20",D="_addName_1xskl_39",L="_addDescription_1xskl_56",q="_addLink_1xskl_71",A="_addPrice_1xskl_72",E="_add_1xskl_1",t={addForm:S,title:F,select:f,addName:D,addDescription:L,addLink:q,addPrice:A,add:E},T=({onSubmit:o})=>{const i=["Виберіть категорію...","Товари для дому","Все для прибирання","Товари для риболовлі"],[n,l]=s.useState(""),[u,m]=s.useState(""),[p,x]=s.useState(""),[_,h]=s.useState(""),[k,g]=s.useState(""),[j,N]=s.useState(""),c=a=>{const{name:r,value:d}=a.currentTarget;switch(r){case"name":m(d);break;case"link":x(d);break;case"price":h(d);break;case"description":g(d);break;case"country":N(d);break;default:return}},v=a=>{a.preventDefault();const r={name:u,gallery:p,price:parseFloat(_),description:k,country:j,category:n};o(r),b()},b=()=>{l(""),N(""),g(""),x(""),m(""),h("")},y=i.map((a,r)=>e.jsx("option",{value:a,children:a},r));return e.jsxs("form",{onSubmit:v,className:t.form,children:[e.jsxs("div",{className:t.addForm,children:[e.jsx("h1",{className:t.title,children:"Заповніть інформацію"}),e.jsx("div",{className:t.addComponent,children:e.jsx("select",{value:n,onChange:a=>l(a.target.value),className:t.select,children:y})}),e.jsx("input",{value:u,onChange:c,name:"name",placeholder:"назва товару",required:!0,type:"text",className:t.addName}),e.jsx("textarea",{value:k,onChange:c,name:"description",placeholder:"опис продукту",required:!0,type:"text",autoFocus:!0,className:t.addDescription}),e.jsx("input",{value:p,onChange:c,name:"link",placeholder:"посилання на товар",required:!0,type:"text",className:t.addLink}),e.jsx("input",{value:_,onChange:c,name:"price",placeholder:"Введіть вартість",required:!0,type:"text",className:t.addPrice})]}),e.jsx("button",{type:"submit",className:t.add,children:"Додати товар"})]})};const B=()=>{const o=C(),i=n=>{P(n),console.log(n),o(-1)};return e.jsx("div",{children:e.jsx(T,{onSubmit:i})})};export{B as default};