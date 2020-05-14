webpackJsonp([8],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(203),
  /* template */
  __webpack_require__(260),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 203:
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

/***/ 260:
/***/ (function(module, exports) {

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

/***/ })

});