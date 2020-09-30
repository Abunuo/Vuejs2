webpackJsonp([8],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(246)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(202),
  /* template */
  __webpack_require__(234),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-247bb5d3",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 202:
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
//
//
//

var constData = { num: 30 };
exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".wrap[data-v-247bb5d3]{width:100%;height:100%;font-size:18px}h1[data-v-247bb5d3]{font-size:24px;text-align:center;margin-bottom:20px}.grid-wrap[data-v-247bb5d3]{width:100%;height:calc(100% - 200px);display:grid;grid-template-columns:200px 200px 200px;grid-template-rows:25% auto 200px 25%;place-items:center center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}", ""]);

// exports


/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('h1', [_vm._v("grid")]), _vm._v(" "), _c('div', {
    staticClass: "grid-wrap"
  }, [_c('div', {
    staticClass: "grid-item"
  }, [_vm._v("1")]), _vm._v(" "), _c('div', {
    staticClass: "grid-item"
  }, [_vm._v("2")]), _vm._v(" "), _c('div', {
    staticClass: "grid-item"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "grid-item"
  }, [_vm._v("4")]), _vm._v(" "), _c('div', {
    staticClass: "grid-item"
  }, [_vm._v("5")]), _vm._v(" "), _c('div', {
    staticClass: "grid-item"
  }, [_vm._v("6")]), _vm._v(" "), _c('div', {
    staticClass: "grid-item"
  }, [_vm._v("7")]), _vm._v(" "), _c('div', {
    staticClass: "grid-item"
  }, [_vm._v("8")]), _vm._v(" "), _c('div', {
    staticClass: "grid-item"
  }, [_vm._v("9")])])])
}]}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("15de0c88", content, true);

/***/ })

});