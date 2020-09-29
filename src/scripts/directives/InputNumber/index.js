/**
 * 输入框只输入数字校验
 * 使用方式：v-input-number
 * 注意：1： 绑定元素下只能有一个 input 元素
 *      2： input[type='text'] 效果最好
 */
class Nodes {
  constructor(el) {
    this.node = el.tagName === 'INPUT' ? el : el.getElementsByTagName('input')[0];
    // 原生绑定事件时改变 this 指向
    this.inputVerify = this.inputVerify.bind(this);
    this.ev_input = this.ev_input.bind(this);
    this.ev_change = this.ev_change.bind(this);
    this.ev_compositionstart = this.ev_compositionstart.bind(this);
    this.ev_compositionend = this.ev_compositionend.bind(this);
    this.ev_blur = this.ev_blur.bind(this);
  }
  inputVerify(e) {
    if(!/^(\d+\.?)?\d*$/.test(e.target.value)) {
      e.target.value = this.node.dataset.value;
      return;
    }
    if(!/\./.test(e.target.value) && e.target.value != '') {  // 去除类似 012 这样的数据
      e.target.value = parseFloat(e.target.value);
    }
    this.node.dataset.value = parseFloat(e.target.value || 0);
  }
  ev_input(e) {
    if (this.node.getAttribute('inputState') == 'false') {
      this.inputVerify(e)
    }
  }
  // 解决逻辑直接修改值，同时暂存到暂存值
  ev_change(e) {
    // 延时因为 vue dom 修改数据响应后才能获取 e.target.value
    setTimeout(() => {
      this.node.dataset.value = parseFloat(e.target.value || 0);
    }, 300)
  }
  ev_compositionstart(e) {
    this.node.setAttribute('inputState', true);
  }
  ev_compositionend(e) {
    this.node.setAttribute('inputState', false);
    this.inputVerify(e)
  }
  ev_blur(e) {
    e.target.value = e.target.value ? parseFloat(e.target.value) : e.target.value
  }
}

export const name = 'input-number';

export default {
  inserted: function(el) {
    const Node = new Nodes(el),
      ELEMENT = Node.node;
    ELEMENT.dataset.value = parseFloat(ELEMENT.value);
    ELEMENT.setAttribute('inputState', false);
    ELEMENT.addEventListener("input", Node.ev_input);
    ELEMENT.addEventListener("change", Node.ev_change);
    ELEMENT.addEventListener("propertychange", Node.ev_input);
    ELEMENT.addEventListener("compositionstart", Node.ev_compositionstart);
    ELEMENT.addEventListener("compositionend", Node.ev_compositionend);
    ELEMENT.addEventListener("blur", Node.ev_blur)
  },
  unbind: function(el) {
    const Node = new Nodes(el),
      ELEMENT = Node.node;
    ELEMENT.removeAttribute('inputState');
    ELEMENT.removeEventListener("input", Node.ev_input);
    ELEMENT.removeEventListener("change", Node.ev_change);
    ELEMENT.removeEventListener("propertychange", Node.ev_input);
    ELEMENT.removeEventListener("compositionstart", Node.ev_compositionstart);
    ELEMENT.removeEventListener("compositionend", Node.ev_compositionend);
    ELEMENT.removeEventListener("blur", Node.ev_blur)
  }
};