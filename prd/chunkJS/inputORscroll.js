webpackJsonp([5],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(267)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(258),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-54e5ea89",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 207:
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

exports.default = {
    data: function data() {
        return {
            inputValue: '',
            scrollFlag: true,
            inputTimeout: {}
        };
    },
    created: function created() {
        //data 监听方式
        // this.$watch('inputValue', function(newVal, oldVal) {
        //     console.log('inputValue is change:' + oldVal + '->' + newVal);
        // })
    },

    methods: {

        //函数防抖模式  --> 执行最新的，清除上一个
        inputCallback: function inputCallback(e) {
            var _this = this;

            //获取输入的单个值
            clearTimeout(this.inputTimeout);
            this.inputTimeout = setTimeout(function () {
                if (/[^0-9\.]/gi.test(_this.inputValue) || _this.inputValue.match(/\./g) && _this.inputValue.match(/\./g).length > 1) {
                    console.log('只能输入数字');
                }
            }, 500);
        },
        //函数节流模式  --> 执行上一个，清除最新的
        scrollCallback: function scrollCallback(e) {
            var _this2 = this;

            if (!this.scrollFlag) return;
            this.scrollFlag = false;
            setTimeout(function () {
                console.log('滚动位置:', e.target.scrollTop);
                _this2.scrollFlag = true;
            }, 500);
        }
    }
};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, ".container[data-v-54e5ea89]{width:100%;height:100%;overflow:scroll}.scrollwrap[data-v-54e5ea89]{width:100%;height:300%}.input-inner[data-v-54e5ea89]{width:50%;margin:20px auto;font-size:16px}input[data-v-54e5ea89]{width:100%;height:30px;border:1px solid #dee0e1;padding:0 6px;margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    on: {
      "scroll": _vm.scrollCallback
    }
  }, [_c('div', {
    staticClass: "input-inner"
  }, [_c('label', {
    attrs: {
      "for": "input"
    }
  }, [_vm._v("数字框")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    attrs: {
      "id": "input",
      "type": "text",
      "name": "input",
      "value": "",
      "placeholder": "输入校验"
    },
    domProps: {
      "value": (_vm.inputValue)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.inputValue = $event.target.value
      }, _vm.inputCallback]
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "scrollwrap"
  })])
},staticRenderFns: []}

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(44)("9901a86e", content, true);

/***/ })

});