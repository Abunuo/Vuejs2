webpackJsonp([5],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(251)
}
var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(170),
  /* template */
  __webpack_require__(244),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-54e5ea89",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/monologue/Documents/workSpace/vueJs_2.0/src/scripts/views/inputORscroll/inputORscroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] inputORscroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(3)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54e5ea89", Component.options)
  } else {
    hotAPI.reload("data-v-54e5ea89", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, "\n.container[data-v-54e5ea89] {\n    width: 100%;\n    height: 100%;\n    overflow: scroll;\n}\n.scrollwrap[data-v-54e5ea89] {\n    width: 100%;\n    height: 300%;\n}\n.input-inner[data-v-54e5ea89] {\n    width: 50%;\n    margin: 20px auto;\n    font-size: 16px;\n}\ninput[data-v-54e5ea89] {\n    width: 100%;\n    height: 30px;\n    border: 1px solid #dee0e1;\n    padding: 0 6px;\n    margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 170:
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

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
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(3).rerender("data-v-54e5ea89", module.exports)
  }
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("6e97420a", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(138, function() {
     var newContent = __webpack_require__(138);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});