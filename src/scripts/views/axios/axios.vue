<style lang="scss" scoped>
    div {
        font-size: 24px;
        p {
            text-align: center;
        }
    }
</style>
<template>
  <div>
      <p>console.log</p>
  </div>
</template>

<script>
    import {post, get} from '../../utils/axios-util';
    import axios from '../../utils/axios-util';
    
    export default {
      data() {
        return {};
      },
      created() {
        
        axios({
            url:'/api/project/subjects',
            method: 'get',
            params: {
                pro_id: 81379
            }
        }).then(res => {
            console.log('axios res', res.data);
        }).catch(err => {
            console.error('axios err',err);
        })
        get('/api/project/subjects', {
            pro_id: 81379
        }).then(res => {
            console.log('get res', res);
        }).catch(err => {
            console.error('get err',err);
        })
      }
    };
</script>
