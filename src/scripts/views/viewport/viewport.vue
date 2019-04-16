<style media="screen" scoped>
    .container {
        width: 100vw;
        height: 100vh;
        overflow: scroll;
    }
    .scroll-wrap {
        width: 100vw;
        height: 300vh;
    }
</style>

<template>
    <section class="container" @scroll="scrollFun">
        <section class="scroll-wrap">

        </section>
    </section>
</template>

<script>
  export default {
    data() {
      return {
          resizeFlag: true,
          scrollFlag: true
      }
    },
    computed: {  //计算属性

    },
    mounted() {
        this.logScreen();
        this.$nextTick(() => {
            // 监听 window.resize
            window.onresize = () => {
                if(!this.resizeFlag)return;
                this.resizeFlag = false;
                setTimeout(() => {
                    this.resizeFlag = true;
                    this.logScreen();
                }, 500)
            }

        })
    },
    updated() {

    },
    methods: {   //事件方法
        logScreen: function() {
            console.log('屏幕尺寸 screen: height->',screen.height,';width->', screen.width);
            console.log('浏览器尺寸 window: height->',window.innerHeight,';width->', window.innerWidth);
        },
        scrollFun: function(){
            if(!this.scrollFlag)return;
            this.scrollFlag = false;
            setTimeout(() => {
                this.scrollFlag = true;
                console.log('滚动距离 window: pageXOffset->',window.pageXOffset,';pageYOffset->', window.pageYOffset);
            }, 500)
        }
    },
    components: {  //组件

    },
    directives: {

    }
  }
</script>
