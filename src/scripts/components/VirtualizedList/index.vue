<template>
  <div class="virtualizedList-wrap" :style="{height: `${height}px`}" @scroll="requestAnimationFrameScroll">
    <div class="placeholder-height" :style="{height: `${this.data.length * this.rowHeight}px`}"></div>
    <ul :style="{marginTop: `${marginTop}px`}">
      <li v-for="item in visibleData" :key="item.id" :style="liStyle">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'virtualizedList',
    props: {
      data: {
        type: Array,
        required: true,
        default: () => []
      },
      height: {
        type: [Number, String]
      },
      row: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        rowHeight: 50,  // 每行高度
        marginTop: 0,  // 视图展示便宜高度
        
        startIndex: 0,    // 截取起始坐标
        endIndex: this.row,  // 截取截止坐标
        
        isScrollFlag: true,  // 滚动节流
        beforeScrollTop: 0,  // 用来记录上次滚动位置，判断是向上、向下滚动
      }
    },
    computed: {
      liStyle() {
        return {
          height: this.rowHeight + 'px',
          lineHeight: this.rowHeight + 'px'
        }
      },
      visibleData() {
        return this.data.slice(this.startIndex, this.endIndex)
      }
    },
    methods: {
      // 利用 setTimeout 实现节流
      scrollCallback(e) {
        if(!this.isScrollFlag) return;
        this.isScrollFlag = false;
        setTimeout(() => {
          this.isScrollFlag = true;
          
          let scrollTop = e.target.scrollTop;
          // 判断是向上还是向下
          if(this.beforeScrollTop < scrollTop) {
            // 向下
            if(scrollTop >= this.rowHeight * (this.startIndex + 1)) {
              this.marginTop = scrollTop;
            }
          } else {
            // 向下
            if(scrollTop <= this.rowHeight * this.startIndex) {
              this.marginTop = scrollTop - this.rowHeight;
            }
          }
          this.beforeScrollTop = scrollTop;  // 更新滚动位置
          this.startIndex = Math.floor(scrollTop / this.rowHeight);
          this.endIndex = this.startIndex + this.row;
        },1000/60)
      },
      // 利用 requestAnimationFrame 实现节流
      requestAnimationFrameScroll(e) {
        if(this.isScrollFlag) {
          window.requestAnimationFrame(() => {
            let scrollTop = e.target.scrollTop;
            // 判断是向上还是向下
            if(this.beforeScrollTop < scrollTop) {
              // 向下
              if(scrollTop >= this.rowHeight * (this.startIndex + 1)) {
                this.marginTop = scrollTop;
              }
            } else {
              // 向下
              if(scrollTop <= this.rowHeight * this.startIndex) {
                this.marginTop = scrollTop - this.rowHeight;
              }
            }
            this.beforeScrollTop = scrollTop;  // 更新滚动位置
            this.startIndex = Math.floor(scrollTop / this.rowHeight);
            this.endIndex = this.startIndex + this.row;
            this.isScrollFlag = true;
          });
          this.isScrollFlag = false;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .virtualizedList-wrap {
    overflow-y: scroll;
    position: relative;
    .placeholder-height {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
    li {
      padding-left: 30px;
      text-align: center;
      &:nth-of-type(2n) {
        // background: #FAFAFA;
      }
    }
  }
</style>
