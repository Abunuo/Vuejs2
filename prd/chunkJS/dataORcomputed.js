webpackJsonp([9],{

/***/ 166:
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
      console.log('constData === this.t :', constData === this.t);
      console.log('constData.num :', constData.num);
      console.log('this.t.num :', this.t.num);
      console.log('this.num1 :', this.num1);
      console.log('this.c_num1 :', this.c_num1);
    }
  }
};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "font-size": "20px"
    }
  }, [_c('p', [_vm._v("num1是data中的变量，其初始值为：" + _vm._s(_vm.num1))]), _vm._v(" "), _c('p', [_vm._v("点击按钮后，data中的num1变化为：" + _vm._s(_vm.num1))]), _vm._v(" "), _c('p', [_vm._v("点击按钮后，data中的 t.num 变化为：" + _vm._s(_vm.t.num))]), _vm._v(" "), _c('p', [_vm._v("点击按钮后，computed中的c_num1变化为：" + _vm._s(_vm.c_num1))]), _vm._v(" "), _c('button', {
    staticStyle: {
      "width": "4em"
    },
    on: {
      "click": _vm.outerNumChange
    }
  }, [_vm._v("加10")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h1', [_vm._v("1.data定义的属性不会因为它的赋值变量的变化而变化")]), _vm._v(" "), _c('h1', [_vm._v("2.computed定义的属性会随它的赋值变量的变化而变化")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(3).rerender("data-v-662ff613", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(166),
  /* template */
  __webpack_require__(246),
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
if (true) {(function () {
  var hotAPI = __webpack_require__(3)
  hotAPI.install(__webpack_require__(1), false)
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