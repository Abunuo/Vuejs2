<template>
  <div id="container">
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal" v-bind:name = "a"></button-counter>
    <button-counter v-on:increment="incrementTotal" v-bind:age = "'我是第二个'"></button-counter>
    <router-link to="/second">点我跳转第二个</router-link>
    <br>
    <button @click="show = !show" v-bind:style="{color:'red', fontSize:'14px', width:'auto', lineHeight:'30px', marginTop:'.2rem'}"> 点击我看动画 </button>
    <transition name="slide-fade">
      <p v-show="show">hello</p>
    </transition>
    <p v-if="show" transition="fade">
      Molonogue
    </p>
    <my-compontent :value="123">abunuo</my-compontent>
    <div id="gradient"></div>
  </div>
</template>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(50px);
    opacity: 0;
  }
</style>

<script>
  import buttonCounter from '../../components/buttonCounter.vue';
  export default {
    data() {
      return {
        name: 'Monologue',
        total: 0,
        a: '我是第一个',
        show: true
      }
    },
    created() {
        this.$on('update', function (id) {
          console.log('updateTotal: '+id)
        })
        this.$watch('total',function(newVal, oldVal){
            console.log('data is change:'+oldVal+'->'+newVal);
        })
        this.$watch('show',function(newVal, oldVal){
            console.log('show is change:'+oldVal+'->'+newVal);
        })
    },
    computed: {  //计算属性

    },
    methods: {   //事件方法
      incrementTotal: function () {
        this.total += 1;
      }
    },
    updated() {
        this.$emit('update',this.total)
    },
    components: {  //组件
        buttonCounter,
        myCompontent: {  //利用 render 渲染页面
          // render(createElement) {
          //   return createElement(
          //     'h2',
          //     [  // 渲染模板
          //       'Hello',
          //       createElement('br'),
          //       'World!'
          //     ]
          //   )
          // }

          // template: '<h2>abc</h2>' //利用 template

          render (createElement) {  //安装 babel-plugin-transform-vue-jsx 后使用 jsx 模板
            return (
                <div>
                    <h2>{this.$slots.default[0].text}+{this.$vnode.data.attrs.value}</h2>
                    <h2>等同于：{this.$slots.default[0].text}+{this.$attrs.value}</h2>
                </div>
            )
          }

        }
    },
    mounted() {

    }
  }
</script>
