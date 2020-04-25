<template lang="html">
  <div class="field-inner">
      <input type="text" name="" v-model="value">
      <span v-show="showTip">请输入内容</span>
  </div>
</template>

<script>
export default {
    props: [
        'placeholder'
    ],
    data() {
        return {
            value: this.placeholder,
            showTip: false
        }
    },
    created() {
        this.$emit('addField', this)
    },
    methods: {
        validateVal() {
            if(this.value == '') {
                this.showTip = true;
                return false;
            } else {
                this.showTip = false;
                return this.value;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .field-inner {
        margin-bottom: 20px;
        overflow: hidden;
        input {
            float: left;
            width: 100%;
            height: 30px;
            font-size: 20px;
            line-height: 30px;
            padding: 0 10px;
            box-sizing: border-box;
        }
        span {
            float: left;
            display: block;
            line-height: 20px;
            color: red;
            font-size: 16px;
            margin-top: 10px;
        }
    }
</style>
