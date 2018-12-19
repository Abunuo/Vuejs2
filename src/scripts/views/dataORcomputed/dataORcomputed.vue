<template>
  <div style="font-size:20px;">
    <p>num1是data中的变量，其初始值为：{{num1}}</p>
    <p>点击按钮后，data中的num1变化为：{{num1}}</p>
    <p>点击按钮后，computed中的c_num1变化为：{{c_num1}}</p>
    <button @click="outerNumChange" style="width:4em;">加10</button>
    <hr>
    <h1>1.data定义的属性不会因为它的赋值变量的变化而变化</h1>
    <h1>2.computed定义的属性会随它的赋值变量的变化而变化</h1>
  </div>
</template>

<script>
    let constData = { num: 30 };
    export default {
      data() {
        return {
          t: constData, //这样,这个组件被多次使用时，c_num1共享状态。没有这句，computed中的c_num1也不跟踪状态。
          num1: constData.num
        };
      },
      computed: {
        c_num1() {
          return constData.num;
        }
      },
      methods: {
        outerNumChange() {
          constData.num += 10;
          console.log(constData.num);
        }
      }
    };
</script>
