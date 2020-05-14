webpackJsonp([4],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(268)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(209),
  /* template */
  __webpack_require__(259),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5c5d8d5a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 209:
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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, ".container[data-v-5c5d8d5a]{width:100vw;height:100vh;overflow:scroll}.scroll-wrap[data-v-5c5d8d5a]{width:100vw;height:300vh}", ""]);

// exports


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

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

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(44)("45c1f842", content, true);

/***/ })

});