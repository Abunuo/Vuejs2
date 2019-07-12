<template lang="html">
    <div class="html-wrap">
        <div class="body-wrap" id="body-wrap">
            <h1>html</h1>
            <img src="../../../images/img.png" alt="">
            <p class="label">我是图片下面文字</p>
            <div class="content">
                <p>晋江文学城作者Priest原著「729声工场」出品广播剧《杀破狼》已全部完结，在一年多的更新中，我们收获了无数的爱。为了回馈听众的支持，我们将高清版原剧音频、未公开番外</p>
            </div>
            <strong></strong>
        </div>
        <div class="canvas-wrap">
            <img :src="canvas" alt="">
        </div>
        <a class="download" download :href="canvas">下载图片</a>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    export default {
        data() {
            return {
                isCanvas: false,
                canvas: ''
            }
        },
        mounted() {
            var _this = this;
            html2canvas(document.getElementById('body-wrap'), {
                scale: 2, // 添加的scale 参数
                width: '100%',
                logging: true, //日志开关，便于查看html2canvas的内部执行流程
                useCORS:true,
            }).then(function(canvas) {
                console.log(canvas);
                _this.isCanvas = true;
                _this.canvas = canvas.toDataURL();
            });
        }
    }
</script>

<style lang="css" scoped>
    .html-wrap {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    .html-wrap::after {
        display:block;
        content: '';
        height: 0;
        clear: both;
        visibility: hidden;
        overflow:hidden;
    }
    .body-wrap, .canvas-wrap {
        display: flex;
        width: 300px;
        height: 400px;
        margin-right: 40px;
        border: 1px solid #dee0e1;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 100px;
    }
    .canvas-wrap img {
        width: 100%;
        height: 100%;
    }
    .content {
        width: 100%;
        text-indent: 1em;
        font-size: 14px;
        margin-top: 10px;
        position: relative;
    }
    .content::after {
        display: block;
        content: '';
        width: 50px;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url('../../../images/img.png')no-repeat center bottom;
        background-size: 80% auto;
        z-index: -1;
    }
    .download {
        position: fixed;
        top: 50px;
        left: 50px;
    }
</style>
