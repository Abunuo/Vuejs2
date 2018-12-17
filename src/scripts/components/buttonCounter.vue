<template>
  <button v-on:click="buttonClick">{{ counter }}</button>
</template>

<script>
  export default {
    // props: {   //指定数据类型
    //   name: String,
    //   age: String
    // },
    props: [    //不指定数据类型
      'name',
      'age'
    ],
    data: function () {
      return {
        counter: 0
      }
    },
    computed: {

    },
    methods: {
      buttonClick: function () {
        this.counter += 1;
        this.$emit('increment');
        this.$emit('Monologue');
        if(this.name) {
          console.log(this.name);
        } else if(this.age) {
          console.log(this.age);
        }
      }
    },
  }
</script>
