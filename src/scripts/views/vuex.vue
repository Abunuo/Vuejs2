<template>
  <div style="font-size: 30px">
    <h5>index修改以前：{{getLog1}}</h5>
    <h5>index修改以后：{{getLog}}</h5>
    <h5>name修改以前:{{getName1}}</h5>
    <h5>name修改以后:{{getName}}</h5>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  exports.default = {
    data() {
      return {
        getLog1: new Number(),
        getName1:new String()
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
        'log',
        'logName'
      ]),
    },
    components: {

    },
    mounted() {
        this.getLog1 = this.getLog;
        this.getName1 = this.getName;
        this.log(5);
        this.logName();
        //this.$store.dispatch('log',4); //等同于this.log(4);
    }
  }
</script>
