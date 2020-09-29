<template>
    <div class="container" @scroll="scrollCallback">
        <div class="input-inner">
            <label for="input">数字框</label>
            <input id="input" v-model="inputValue" type="text" name="input" value="" @input="inputCallback" placeholder="输入校验">
        </div>
        <div class="scrollwrap">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
            scrollFlag: true,
            inputTimeout: {}
        }
    },
    created() {
        //data 监听方式
        // this.$watch('inputValue', function(newVal, oldVal) {
        //     console.log('inputValue is change:' + oldVal + '->' + newVal);
        // })
    },
    methods: {

        //函数防抖模式  --> 执行最新的，清除上一个
        inputCallback: function(e) { //获取输入的单个值
            clearTimeout(this.inputTimeout);
            this.inputTimeout = setTimeout(() => {
                if(/[^0-9\.]/gi.test(this.inputValue) || this.inputValue.match(/\./g) && this.inputValue.match(/\./g).length>1){
                    console.log('只能输入数字')
                }
            }, 500)
        },
        //函数节流模式  --> 执行上一个，清除最新的
        scrollCallback: function(e) {
            if(!this.scrollFlag) return;
            this.scrollFlag = false;
            setTimeout(() => {
                console.log('滚动位置:', e.target.scrollTop);
                this.scrollFlag = true;
            },500)
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
    .input-inner {
        width: 50%;
        margin: 20px auto;
        font-size: 16px;
    }
    input {
        width: 100%;
        height: 30px;
        border: 1px solid #dee0e1;
        padding: 0 6px;
        margin-top: 10px;
    }
    .scrollwrap {
      width: 100%;
      height: 300%;
    }
</style>
