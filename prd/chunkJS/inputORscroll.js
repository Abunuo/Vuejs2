webpackJsonp([5],{128:function(t,e,a){function i(t){a(256)}var n=a(3)(a(203),a(249),i,"data-v-54e5ea89",null);t.exports=n.exports},203:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{inputValue:"",scrollFlag:!0,inputTimeout:{}}},created:function(){},methods:{inputCallback:function(t){var e=this;clearTimeout(this.inputTimeout),this.inputTimeout=setTimeout(function(){(/[^0-9\.]/gi.test(e.inputValue)||e.inputValue.match(/\./g)&&e.inputValue.match(/\./g).length>1)&&console.log("只能输入数字")},500)},scrollCallback:function(t){var e=this;this.scrollFlag&&(this.scrollFlag=!1,setTimeout(function(){console.log("滚动位置:",t.target.scrollTop),e.scrollFlag=!0},500))}}}},215:function(t,e,a){e=t.exports=a(43)(void 0),e.push([t.i,".container[data-v-54e5ea89]{width:100%;height:100%;overflow:scroll}.scrollwrap[data-v-54e5ea89]{width:100%;height:300%}.input-inner[data-v-54e5ea89]{width:50%;margin:20px auto;font-size:16px}input[data-v-54e5ea89]{width:100%;height:30px;border:1px solid #dee0e1;padding:0 6px;margin-top:10px}",""])},249:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",on:{scroll:t.scrollCallback}},[a("div",{staticClass:"input-inner"},[a("label",{attrs:{for:"input"}},[t._v("数字框")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{id:"input",type:"text",name:"input",value:"",placeholder:"输入校验"},domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.inputCallback]}})]),t._v(" "),a("div",{staticClass:"scrollwrap"})])},staticRenderFns:[]}},256:function(t,e,a){var i=a(215);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(44)("9901a86e",i,!0)}});