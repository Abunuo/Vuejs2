webpackJsonp([3],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(245)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(232),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0a6cd6da",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 197:
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

exports.default = {
    props: ['placeholder'],
    data: function data() {
        return {
            value: this.placeholder,
            showTip: false
        };
    },
    created: function created() {
        this.$emit('addField', this);
    },

    methods: {
        validateVal: function validateVal() {
            if (this.value == '') {
                this.showTip = true;
                return false;
            } else {
                this.showTip = false;
                return this.value;
            }
        }
    }
};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _field = __webpack_require__(230);

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		formField: _field2.default
	},
	data: function data() {
		return {
			form: ['第一个输入框', '第二个输入框', '第三个输入框'],
			fields: []
		};
	},

	methods: {
		addEventListenerOn: function addEventListenerOn(field) {
			this.fields.push(field);
		},
		validataAll: function validataAll() {
			// 验证所有的接口方法
			var res = [];
			this.fields.forEach(function (item) {
				res.push(item.validateVal()); // 执行每个表单项内的validateVal方法
			});
			console.log(res);
		}
	}
}; //
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

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".form-inner[data-v-0a6cd6da]{width:800px;margin:40px auto}.form-inner h1[data-v-0a6cd6da]{text-align:center;margin-bottom:20px;font-size:20px}.form-inner button[data-v-0a6cd6da]{float:right;width:100px;height:30px;font-size:20px}", ""]);

// exports


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".field-inner[data-v-2490104c]{margin-bottom:20px;overflow:hidden}.field-inner input[data-v-2490104c]{float:left;width:100%;height:30px;font-size:20px;line-height:30px;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}.field-inner span[data-v-2490104c]{float:left;display:block;line-height:20px;color:red;font-size:16px;margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(247)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(197),
  /* template */
  __webpack_require__(235),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2490104c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-inner"
  }, [_c('h1', [_vm._v("表格")]), _vm._v(" "), _vm._l((_vm.form), function(field, index) {
    return _c('form-field', {
      key: index,
      attrs: {
        "placeholder": field
      },
      on: {
        "addField": _vm.addEventListenerOn
      }
    })
  }), _vm._v(" "), _c('button', {
    attrs: {
      "type": "button",
      "name": "button"
    },
    on: {
      "click": _vm.validataAll
    }
  }, [_vm._v("校验")])], 2)
},staticRenderFns: []}

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-inner"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    attrs: {
      "type": "text",
      "name": ""
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showTip),
      expression: "showTip"
    }]
  }, [_vm._v("请输入内容")])])
},staticRenderFns: []}

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(213);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("bcd683ce", content, true);

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("34e7f61b", content, true);

/***/ })

});