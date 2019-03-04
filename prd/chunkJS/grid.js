webpackJsonp([4],{

/***/ 132:
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(undefined);
// imports


// module
exports.push([module.i, "\n.wrap[data-v-247bb5d3] {\n    width: 100%;\n    height: 100%;\n    font-size: 18px;\n}\nh1[data-v-247bb5d3] {\n    font-size: 24px;\n    text-align: center;\n    margin-bottom: 20px;\n}\n.grid-wrap[data-v-247bb5d3] {\n    width: 100%;\n    height: calc(100% - 200px);\n    display: grid;\n    grid-template-columns: 200px 200px 200px;  /* 内容水平布局 当justify-content: center;时，auto 默认内容宽度 */\n    grid-template-rows: 25% auto 200px 25%;  /* 内容垂直布局 当align-content: center;时，auto 默认内容高度 */\n    /* justify-items: center;\n    align-items:    center; */\n    place-items: center center;  /* justify 与 align 简写 */\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; /* 容器布局 */\n    -ms-flex-line-pack: center;\n        align-content: center; /* 容器布局 */\n}\n", ""]);

// exports


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
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
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-247bb5d3", module.exports)
  }
}

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(26)("09b68db2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-247bb5d3\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./grid.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-247bb5d3\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./grid.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(212)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(207),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-247bb5d3",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/monologue/Documents/workSpace/vueJs_2.0/src/scripts/views/grid/grid.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] grid.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-247bb5d3", Component.options)
  } else {
    hotAPI.reload("data-v-247bb5d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});