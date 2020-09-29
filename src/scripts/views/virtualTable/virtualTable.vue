<template>
  <div class="table-container">
    <virtualized-list :data="tableData" :height="500" :row="12"></virtualized-list>
  </div>
</template>

<script>
  import VirtualizedList from '../../components/VirtualizedList/index.vue'
  
  export default {
    name: 'virtualTable',
    components: { VirtualizedList },
    data() {
      return {
        
      }
    },
    created() {
      this.tableData = (() => {
        const len = 1000;
        const tableData = new Array(len);
        for (let i = 0; i < len; i++) {
          tableData[i] = {
            id: i,
            text: i
          }
        }
        return tableData
      })()
    }
  }
</script>

<style lang="scss" scoped>
  .table-container {
    font-size: 16px;
    width: 70%;
    margin: 20px auto;
    border: 1px solid #dee0e1;
  }
</style>
