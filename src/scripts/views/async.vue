
<template>
  <div>
    <h3 style="font-size: 20px">lodash</h3>
    <h3 v-bind:style="{fontSize: '20px', color: 'red'}">demos</h3>
  </div>
</template>

<script>
    exports.default = {
      data() {
        return {

        }
      },
      computed: {

      },
      methods: {

      },
      components: {

      },
      mounted() {
        // console.log('===');
        // var time = _.defer((str) => {
        //   console.log(str);
        // }, function(){
        //   return 'aa'
        // }());
        // console.log(time);
        // console.log('---');


        var sleep = function (time) {
        	return new Promise(function (resolve, reject) {
        		setTimeout(function () {
        			resolve('等待时间到');
        		}, time);
        	})
        };
        var start = async function () {
        	// 在这里使用起来就像同步代码那样直观
        	console.log('start');
        	var a = await sleep(3000);
          console.log(a);
        	console.log('end');
        };
        start();
      }
    }
</script>
