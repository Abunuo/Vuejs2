webpackJsonp([9],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
  // props: {   //指定数据类型
  //   name: String,
  //   age: String
  // },
  props: [//不指定数据类型
  'name', 'age'],
  data: function data() {
    return {
      counter: 0
    };
  },
  computed: {},
  methods: {
    buttonClick: function buttonClick() {
      this.counter += 1;
      this.$emit('increment');
      this.$emit('Monologue');
      if (this.name) {
        console.log(this.name);
      } else if (this.age) {
        console.log(this.age);
      }
    }
  }
};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(62)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(205),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/monologue/Documents/workSpace/vueJs_2.0/src/scripts/components/buttonCounter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] buttonCounter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44c4f088", Component.options)
  } else {
    hotAPI.reload("data-v-44c4f088", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    attrs: {
      "href": "123"
    },
    on: {
      "click": _vm.buttonClick
    }
  }, [_vm._v(_vm._s(_vm.counter))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44c4f088", module.exports)
  }
}

/***/ })

});