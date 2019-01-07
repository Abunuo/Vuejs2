<style media="screen" scoped>
    .wrap {
        width: 100%;
        height: 100%;
        font-size: 18px;
    }
    h1 {
        font-size: 24px;
        text-align: center;
        margin-bottom: 20px;
    }
    .grid-wrap {
        width: 100%;
        height: calc(100% - 200px);
        display: grid;
        grid-template-columns: 200px 200px 200px;  /* 内容水平布局 当justify-content: center;时，auto 默认内容宽度 */
        grid-template-rows: 25% auto 200px 25%;  /* 内容垂直布局 当align-content: center;时，auto 默认内容高度 */
        /* justify-items: center;
        align-items:    center; */
        place-items: center center;  /* justify 与 align 简写 */
        justify-content: center; /* 容器布局 */
        align-content: center; /* 容器布局 */
    }
</style>

<template>
  <div class="wrap">
      <h1>grid</h1>
      <div class="grid-wrap">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>
      </div>
  </div>
</template>

<script>
    let constData = { num: 30 };
    export default {
      data() {
        return {
        };
      }
    }
</script>
