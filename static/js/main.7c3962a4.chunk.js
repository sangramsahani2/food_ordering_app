(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3jab9",summary:"CartItem_summary__2zUAA",price:"CartItem_price__b6dMZ",amount:"CartItem_amount__2mFj1",actions:"CartItem_actions__2dCte"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2W0xI",total:"Cart_total__3nZqF",actions:"Cart_actions__26-tb","button--alt":"Cart_button--alt__1klbJ",button:"Cart_button__16wtr"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__Dxwn1",icon:"HeaderCartButton_icon__24KPF",badge:"HeaderCartButton_badge__3kuuT",bump:"HeaderCartButton_bump__2qJSZ"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__k_7Qi",description:"MealItem_description__3i_W_",price:"MealItem_price__ju2_P"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1fiGQ",modal:"Modal_modal__3ehES","slide-down":"Modal_slide-down__1Rdun"}},function(e,t,n){e.exports={header:"Header_header__2B9of","main-image":"Header_main-image__3muEG"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__3iM9e"}},function(e,t,n){e.exports={card:"Card_card__1tswA"}},function(e,t,n){e.exports={input:"Input_input__3QRDC"}},function(e,t,n){e.exports={form:"MealItemForm_form__2D1Nz"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1aPy5","meals-appear":"AvailableMeals_meals-appear__2c0pD"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(7),m=n.n(d),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(m.a.button," ").concat(a?m.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(o.jsx)("span",{className:m.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:m.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",x=n(12),O=n.n(x),p=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{className:O.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:O.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(16),_=n.n(h),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(17),C=n.n(v),A=function(e){return Object(o.jsx)("div",{className:C.a.card,children:e.children})},g=n(2),N=n(18),y=n.n(N),I=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:y.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(g.a)({ref:t},e.input))]})})),w=n(19),M=n.n(w),k=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},F=n(10),H=n.n(F),B=function(e){var t=Object(r.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(k,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=n(20),R=n.n(D),S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],E=function(){var e=S.map((function(e){return Object(o.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:R.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:e})})})},P=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(E,{})]})},T=n(8),z=n.n(T),J=n(11),q=n.n(J),G=function(e){return Object(o.jsx)("div",{className:q.a.backdrop,onClick:e.onClose})},Q=function(e){return Object(o.jsx)("div",{className:q.a.modal,children:Object(o.jsx)("div",{className:q.a.content,children:e.children})})},V=document.getElementById("overlays"),Z=function(e){return Object(o.jsxs)(r.Fragment,{children:[z.a.createPortal(Object(o.jsx)(G,{onClose:e.onClose}),V),z.a.createPortal(Object(o.jsx)(Q,{children:e.children}),V)]})},$=n(4),W=n.n($),Y=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:W.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:W.a.summary,children:[Object(o.jsx)("span",{className:W.a.price,children:t}),Object(o.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(5),U=n.n(K),L=function(e){var t=Object(r.useContext)(u),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(g.a)(Object(g.a)({},e),{},{amount:1}))},s=Object(o.jsx)("ul",{className:U.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(Y,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(o.jsxs)(Z,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:U.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:U.a.actions,children:[Object(o.jsx)("button",{className:U.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:U.a.button,children:"Order"})]})]})},X=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(g.a)(Object(g.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(X.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(g.a)(Object(g.a)({},l),{},{amount:l.amount-1});(s=Object(X.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ne,{children:[n&&Object(o.jsx)(L,{onClose:function(){a(!1)}}),Object(o.jsx)(p,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(P,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.7c3962a4.chunk.js.map