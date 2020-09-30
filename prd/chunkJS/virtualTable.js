webpackJsonp([4],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(244)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(231),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0471401a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 196:
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

exports.default = {
  name: 'virtualizedList',
  props: {
    data: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    height: {
      type: [Number, String]
    },
    row: {
      type: Number,
      default: 10
    }
  },
  data: function data() {
    return {
      rowHeight: 50, // 每行高度
      marginTop: 0, // 视图展示便宜高度

      startIndex: 0, // 截取起始坐标
      endIndex: this.row, // 截取截止坐标

      isScrollFlag: true, // 滚动节流
      beforeScrollTop: 0 // 用来记录上次滚动位置，判断是向上、向下滚动
    };
  },

  computed: {
    liStyle: function liStyle() {
      return {
        height: this.rowHeight + 'px',
        lineHeight: this.rowHeight + 'px'
      };
    },
    visibleData: function visibleData() {
      return this.data.slice(this.startIndex, this.endIndex);
    }
  },
  methods: {
    // 利用 setTimeout 实现节流
    scrollCallback: function scrollCallback(e) {
      var _this = this;

      if (!this.isScrollFlag) return;
      this.isScrollFlag = false;
      setTimeout(function () {
        _this.isScrollFlag = true;

        var scrollTop = e.target.scrollTop;
        // 判断是向上还是向下
        if (_this.beforeScrollTop < scrollTop) {
          // 向下
          if (scrollTop >= _this.rowHeight * (_this.startIndex + 1)) {
            _this.marginTop = scrollTop;
          }
        } else {
          // 向下
          if (scrollTop <= _this.rowHeight * _this.startIndex) {
            _this.marginTop = scrollTop - _this.rowHeight;
          }
        }
        _this.beforeScrollTop = scrollTop; // 更新滚动位置
        _this.startIndex = Math.floor(scrollTop / _this.rowHeight);
        _this.endIndex = _this.startIndex + _this.row;
      }, 1000 / 60);
    },

    // 利用 requestAnimationFrame 实现节流
    requestAnimationFrameScroll: function requestAnimationFrameScroll(e) {
      var _this2 = this;

      if (this.isScrollFlag) {
        window.requestAnimationFrame(function () {
          var scrollTop = e.target.scrollTop;
          // 判断是向上还是向下
          if (_this2.beforeScrollTop < scrollTop) {
            // 向下
            if (scrollTop >= _this2.rowHeight * (_this2.startIndex + 1)) {
              _this2.marginTop = scrollTop;
            }
          } else {
            // 向下
            if (scrollTop <= _this2.rowHeight * _this2.startIndex) {
              _this2.marginTop = scrollTop - _this2.rowHeight;
            }
          }
          _this2.beforeScrollTop = scrollTop; // 更新滚动位置
          _this2.startIndex = Math.floor(scrollTop / _this2.rowHeight);
          _this2.endIndex = _this2.startIndex + _this2.row;
          _this2.isScrollFlag = true;
        });
        this.isScrollFlag = false;
      }
    }
  }
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(229);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'virtualTable',
  components: { VirtualizedList: _index2.default },
  data: function data() {
    return {};
  },
  created: function created() {
    this.tableData = function () {
      var len = 1000;
      var tableData = new Array(len);
      for (var i = 0; i < len; i++) {
        tableData[i] = {
          id: i,
          text: i
        };
      }
      return tableData;
    }();
  }
}; //
//
//
//
//
//

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".table-container[data-v-0471401a]{font-size:16px;width:70%;margin:20px auto;border:1px solid #dee0e1}", ""]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".virtualizedList-wrap[data-v-33f153ce]{overflow-y:scroll;position:relative}.virtualizedList-wrap .placeholder-height[data-v-33f153ce]{width:100%;position:absolute;top:0;left:0;opacity:0}.virtualizedList-wrap li[data-v-33f153ce]{padding-left:30px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(248)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(236),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-33f153ce",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table-container"
  }, [_c('virtualized-list', {
    attrs: {
      "data": _vm.tableData,
      "height": 500,
      "row": 12
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "virtualizedList-wrap",
    style: ({
      height: (_vm.height + "px")
    }),
    on: {
      "scroll": _vm.requestAnimationFrameScroll
    }
  }, [_c('div', {
    staticClass: "placeholder-height",
    style: ({
      height: ((this.data.length * this.rowHeight) + "px")
    })
  }), _vm._v(" "), _c('ul', {
    style: ({
      marginTop: (_vm.marginTop + "px")
    })
  }, _vm._l((_vm.visibleData), function(item) {
    return _c('li', {
      key: item.id,
      style: (_vm.liStyle)
    }, [_vm._v(_vm._s(item.text))])
  }), 0)])
},staticRenderFns: []}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("95b97a92", content, true);

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("61ea7187", content, true);

/***/ })

});