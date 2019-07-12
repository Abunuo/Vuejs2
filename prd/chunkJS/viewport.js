webpackJsonp([3],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(252)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(246),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5c5d8d5a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/monologue/Documents/workSpace/vueJs_2.0/src/scripts/views/viewport/viewport.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] viewport.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c5d8d5a", Component.options)
  } else {
    hotAPI.reload("data-v-5c5d8d5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(undefined);
// imports


// module
exports.push([module.i, "\n.container[data-v-5c5d8d5a] {\n    width: 100vw;\n    height: 100vh;\n    overflow: scroll;\n}\n.scroll-wrap[data-v-5c5d8d5a] {\n    width: 100vw;\n    height: 300vh;\n}\n", ""]);

// exports


/***/ }),

/***/ 182:
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

exports.default = {
    data: function data() {
        return {
            resizeFlag: true,
            scrollFlag: true
        };
    },

    computed: {//计算属性

    },
    mounted: function mounted() {
        var _this = this;

        this.logScreen();
        this.$nextTick(function () {
            // 监听 window.resize
            window.onresize = function () {
                if (!_this.resizeFlag) return;
                _this.resizeFlag = false;
                setTimeout(function () {
                    _this.resizeFlag = true;
                    _this.logScreen();
                }, 500);
            };
        });
    },
    updated: function updated() {},

    methods: { //事件方法
        logScreen: function logScreen() {
            console.log('屏幕尺寸 screen: height->', screen.height, ';width->', screen.width);
            console.log('浏览器尺寸 window: height->', window.innerHeight, ';width->', window.innerWidth);
        },
        scrollFun: function scrollFun() {
            var _this2 = this;

            if (!this.scrollFlag) return;
            this.scrollFlag = false;
            setTimeout(function () {
                _this2.scrollFlag = true;
                console.log('滚动距离 window: pageXOffset->', window.pageXOffset, ';pageYOffset->', window.pageYOffset);
            }, 500);
        }
    },
    components: {//组件

    },
    directives: {}
};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "container",
    on: {
      "scroll": _vm.scrollFun
    }
  }, [_c('section', {
    staticClass: "scroll-wrap"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-5c5d8d5a", module.exports)
  }
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(43)("ced9853e", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(150, function() {
     var newContent = __webpack_require__(150);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});