<template>
  <h3 style="font-size:20px">
    <router-link ref="notice" id="notice" to="/">{{notice}}</router-link>
    <br>
    <input ref='input' type="text" name="aa" v-focus v-model="inputData">
    <br>
    <button @click="show = !show" v-bind:style="{color:'red', fontSize:'14px', width:'auto', lineHeight:'30px', marginTop:'.2rem'}"> 点击我看动画 </button>
    <transition name="slide-fade">
      <img v-if="show" src="../../../images/img.png"/>
    </transition>
    <br/>
    <router-link to="/second/error">error</router-link>
    <router-link to="/second/vuex">vuex</router-link>
    <router-view></router-view>
  </h3>
</template>

<script>

  export default {
    data() {
      return {
        notice: '我是第二个页面，点击我返回',
        show: false,
        inputData: 123
      }
    },
    computed: {  //计算属性

    },
    methods: {   //事件方法

    },
    components: {  //组件

    },
    updated() {
        console.log('updated: ', this.inputData);
    },
    directives: {
      focus: {
        inserted: function (el, binding, vnode, oldVnode) {
          el.focus()
        }
      },
    },
    mounted() {
      console.log(this.$refs.input);
    }
  }
</script>
