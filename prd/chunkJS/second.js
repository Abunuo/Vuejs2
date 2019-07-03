webpackJsonp([7],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(242),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/monologue/Documents/workSpace/vueJs_2.0/src/scripts/views/second/second.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] second.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(3)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2402f9d3", Component.options)
  } else {
    hotAPI.reload("data-v-2402f9d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/img.png";

/***/ }),

/***/ 171:
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


exports.default = {
  data: function data() {
    return {
      notice: '我是第二个页面，点击我返回',
      show: false,
      inputData: 123
    };
  },

  computed: {//计算属性

  },
  methods: {//事件方法

  },
  components: {//组件

  },
  updated: function updated() {
    console.log('updated: ', this.inputData);
  },

  directives: {
    focus: {
      inserted: function inserted(el, binding, vnode, oldVnode) {
        el.focus();
      }
    }
  },
  mounted: function mounted() {
    console.log(this.$refs.input);
  }
};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', {
    staticStyle: {
      "font-size": "20px"
    }
  }, [_c('router-link', {
    ref: "notice",
    attrs: {
      "id": "notice",
      "to": "/"
    }
  }, [_vm._v(_vm._s(_vm.notice))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('input', {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.inputData),
      expression: "inputData"
    }],
    ref: "input",
    attrs: {
      "type": "text",
      "name": "aa"
    },
    domProps: {
      "value": (_vm.inputData)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputData = $event.target.value
      }
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
    style: ({
      color: 'red',
      fontSize: '14px',
      width: 'auto',
      lineHeight: '30px',
      marginTop: '.2rem'
    }),
    on: {
      "click": function($event) {
        _vm.show = !_vm.show
      }
    }
  }, [_vm._v(" 点击我看动画 ")]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide-fade"
    }
  }, [(_vm.show) ? _c('img', {
    attrs: {
      "src": __webpack_require__(123)
    }
  }) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(3).rerender("data-v-2402f9d3", module.exports)
  }
}

/***/ })

});