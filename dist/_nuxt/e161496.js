(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,7,15],{292:function(e,t,r){var content=r(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("00815680",content,!0,{sourceMap:!1})},293:function(e,t,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("f798e9c0",content,!0,{sourceMap:!1})},294:function(e,t,r){"use strict";r(292)},295:function(e,t,r){var n=r(58)(!1);n.push([e.i,".card{padding:10px}",""]),e.exports=n},296:function(e,t,r){"use strict";r(293)},297:function(e,t,r){var n=r(58)(!1);n.push([e.i,".page{padding:30px}",""]),e.exports=n},298:function(e,t,r){"use strict";r.r(t);r(294);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"card"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},299:function(e,t,r){"use strict";r.r(t);r(296);var n=r(55),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"page"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},301:function(e,t,r){"use strict";r.r(t);var n=r(12),o=(r(46),{name:"CrudForm",props:{formSchema:{type:Object,default:function(){}},formModel:{type:Object,default:function(){}},formOptions:{type:Object,default:function(){return{validateAsync:!0}}},formTitle:{type:String,default:""}},methods:{validation:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.form.validate();case 2:r=t.sent,0===r.length&&e.$emit("on-submit",e.formModel);case 5:case"end":return t.stop()}}),t)})))()}}}),c=r(55),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"panel-body"},[r("h2",{staticClass:"text-center"},[e._v(e._s(e.formTitle))]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.validation.apply(null,arguments)}}},[r("vue-form-generator",{ref:"form",attrs:{schema:e.formSchema,model:e.formModel,options:e.formOptions}}),e._v(" "),r("hr"),e._v(" "),e._m(0)],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Подтвердить")])])}],!1,null,"027aa8f2",null);t.default=component.exports},311:function(e,t,r){"use strict";r.r(t),r.d(t,"schema",(function(){return n}));var n={fields:[{type:"input",label:"Название категории",model:"fullname",placeholder:"Введите название",styleClasses:"col-md-6",min:6,required:!0,inputType:"text"},{type:"textArea",label:"Описание товара",model:"mail",placeholder:"Введите описание",styleClasses:"col-md-12",hint:"Максимальное кол-во символов - 500",max:500,rows:4}]}},325:function(e,t,r){"use strict";r.r(t);var n=r(12),o=r(0),c=(r(46),r(18),r(36),r(43),r(4),r(3),r(1),r(5),r(2),r(6),r(72)),l=r(311);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={middleware:"auth",data:function(){return{model:null,schema:l.schema,title:"Информация о заказе"}},components:{CrudForm:function(){return Promise.resolve().then(r.bind(null,301))},Card:function(){return Promise.resolve().then(r.bind(null,298))},Page:function(){return Promise.resolve().then(r.bind(null,299))}},methods:f(f({},Object(c.b)({createNewCategory:"category/createNewCategory",fetchOrder:"orders/fetchOrder",orderUpdate:"orders/orderUpdate"})),{},{setModel:function(){this.model={fullname:"",mail:""}},onFormUpdate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.orderUpdate({id:e.$route.params.id,payload:e.model});case 2:e.$router.back();case 3:case"end":return t.stop()}}),t)})))()},onFormCreate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.createNewCategory(e.model);case 2:e.$router.back();case 3:case"end":return t.stop()}}),t)})))()},onFormSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isUpdated){t.next=3;break}return e.onFormUpdate(),t.abrupt("return");case 3:e.onFormCreate();case 4:case"end":return t.stop()}}),t)})))()}}),computed:f({isUpdated:function(e){return void 0!==e.$route.params.id}},Object(c.c)({errors:"orders/orderError",order:"orders/order"})),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isUpdated){t.next=5;break}return t.next=3,e.fetchOrder(e.$route.params.id);case 3:return e.model=f({},e.order),t.abrupt("return");case 5:e.setModel();case 6:case"end":return t.stop()}}),t)})))()}},v=r(55),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("card",[e.model?r("crud-form",{attrs:{"form-schema":e.schema,"form-model":e.model,"form-title":e.title},on:{"on-submit":e.onFormSubmit}}):e._e(),e._v(" "),r("p",{staticClass:"text-danger"},[e._v(e._s(e.errors))])],1)],1),e._v(" "),r("div",{staticClass:"col-md-3"})])])}),[],!1,null,"1e6c15fe",null);t.default=component.exports;installComponents(component,{CrudForm:r(301).default,Card:r(298).default,Page:r(299).default})}}]);