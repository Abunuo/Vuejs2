webpackJsonp([7],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

var constData = { num: 30 };
exports.default = {
  data: function data() {
    return {
      t: constData, //这样,这个组件被多次使用时，c_num1共享状态。没有这句，computed中的c_num1也不跟踪状态。
      num1: constData.num
    };
  },

  computed: {
    c_num1: function c_num1() {
      return constData.num;
    }
  },
  methods: {
    outerNumChange: function outerNumChange() {
      constData.num += 10;
      console.log(constData.num);
    }
  }
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "font-size": "20px"
    }
  }, [_c('p', [_vm._v("num1是data中的变量，其初始值为：" + _vm._s(_vm.num1))]), _vm._v(" "), _c('p', [_vm._v("点击按钮后，data中的num1变化为：" + _vm._s(_vm.num1))]), _vm._v(" "), _c('p', [_vm._v("点击按钮后，computed中的c_num1变化为：" + _vm._s(_vm.c_num1))]), _vm._v(" "), _c('button', {
    staticStyle: {
      "width": "4em"
    },
    on: {
      "click": _vm.outerNumChange
    }
  }, [_vm._v("加10")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h1', [_vm._v("1.data定义的属性不会因为它的赋值变量的变化而变化")]), _vm._v(" "), _c('h1', [_vm._v("2.computed定义的属性会随它的赋值变量的变化而变化")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-662ff613", module.exports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(18)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(208),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/monologue/Documents/workSpace/vueJs_2.0/src/scripts/views/dataORcomputed/dataORcomputed.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dataORcomputed.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-662ff613", Component.options)
  } else {
    hotAPI.reload("data-v-662ff613", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});