webpackJsonp([7],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(254),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "/images/img.png";

/***/ }),

/***/ 208:
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

/***/ 254:
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
      "src": __webpack_require__(152)
    }
  }) : _vm._e()]), _vm._v(" "), _c('br'), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/second/error"
    }
  }, [_vm._v("error")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/second/vuex"
    }
  }, [_vm._v("vuex")]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ })

});