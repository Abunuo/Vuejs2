<template>
  <div style="font-size: 30px">
    <h5>{{getLog}}</h5>
    <h5>{{getName}}</h5>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  exports.default = {
    data() {
      return {

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
      this.log(5);
      // this.$store.dispatch('log',4); 等同于this.log(4);
    }
  }
</script>
