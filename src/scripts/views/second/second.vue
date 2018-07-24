<template>
  <h3 style="font-size:20px">
    <router-link ref="notice" id="notice" to="/">{{notice}}</router-link>
    <br>
    <input type="text" name="aa" value="456" v-focus>
    <br>
    <button @click="show = !show" v-bind:style="{color:'red', fontSize:'14px', width:'auto', lineHeight:'30px', marginTop:'.2rem'}"> 点击我看动画 </button>
    <transition name="slide-fade">
      <img v-if="show" src="../../../images/img.png"/>
    </transition>
  </h3>
</template>

<script>

  export default {
    data() {
      return {
        notice: '我是第二个页面，点击我返回',
        show: false
      }
    },
    computed: {  //计算属性

    },
    methods: {   //事件方法

    },
    components: {  //组件

    },
    directives: {
      focus: {
        inserted: function (el, binding, vnode, oldVnode) {
          el.focus()
        }
      },
    },
    mounted() {
      console.log(this);
      console.log(this.$route);
      console.log(this.$router);
      $('#notice')[0].innerHTML = '123';
      // console.log(this.$refs.input.value);
    }
  }
</script>
