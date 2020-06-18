import Vue from 'vue';
import Message from './message.vue';

let MessageInstance = null;
let MessageConstructor = Vue.extend(Message);


let init = () => {
    MessageInstance = new MessageConstructor();
    MessageInstance.$mount()
    document.body.appendChild(MessageInstance.$el);
}

let caller = (options) => {
    if (!MessageInstance) {
        init();
    }
    // 类似于 this.$refs.children.methods();
    MessageInstance.init(options)
}

export default {
    // 返回 install 函数 用于 Vue.use 注册
    install(vue) {
        Vue.prototype.$message = caller
    }
}