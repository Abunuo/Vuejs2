<template>
  <div style="font-size: 30px">
    <h5>修改以前：{{getLog1}}</h5>
    <h5>修改以后：{{getLog}}</h5>
    <h5>{{getName}}</h5>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  exports.default = {
    data() {
      return {
        getLog1:0
      }
    },
    computed: {
      ...mapGetters([
        'getLog',
        'getName'
      ]),
    },
    methods: {
      ...mapActions([
        'log'
      ]),
    },
    components: {

    },
    mounted() {
      this.getLog1 = this.getLog;
      this.log(5);
      // this.$store.dispatch('log',4); 等同于this.log(4);
    }
  }
</script>
