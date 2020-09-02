<!-- 大文件断点续传  配合 node 服务接收文件-->
<template>
  <div class="upload-container">
    <input ref="uploadInput" type="file" name="files" multiple @change="handleFileChange">
    <button class="upload-btn" @click="uploadFile">直接上传</button>
    <button class="upload-btn" @click="uploadFileChunks">分片上传</button>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'upload',
  data() {
    return {
      file: null,
      chunkSize: 1 * 1024 *1024
    }
  },
  methods: {
    handleFileChange(event) {
      console.log(event.target.files);
      this.file = event.target.files[0];
    },
    uploadFile() {
      if(this.file == null) return;
      let formData = new FormData();
      formData.append('file', this.file);
      axios({
        url: '/node/upload',
        method: 'post',
        headers: {
          'content-type': 'multipart/form-data'
        },
        data: formData
      }).then(res => {
          console.log('axios res', res.data);
      }).catch(err => {
          console.error('axios err',err);
      })
    },
    uploadFileChunks() {
      if(this.file == null) return;
      let fileChunkList = this.createChunks();
      let uploadProcess = fileChunkList.map((item, index) => {
        return new Promise((resove, reject) => {
          let formData = new FormData();
          formData.append('fileName', this.file.name);
          formData.append('size', fileChunkList.length);
          formData.append('index', index);
          formData.append('file', item);  // 由于 multer 的限制，文件必须放在最后才能取到 req.body 值
          axios({
            url: '/node/upload/chunks',
            method: 'post',
            headers: {
              'content-type': 'multipart/form-data'
            },
            data: formData
          }).then(res => {
            resove();
          }).catch(err => {
            reject(err)
          })
        })
      })
      Promise.all(uploadProcess).then(res => {
        console.log('分片上传成功');
      }).catch(err => {
        console.error('分片上传失败');
      })
    },
    createChunks() {
      let chunks = [];
      let size = 0;
      while (size < this.file.size) {
        chunks.push(this.file.slice(size, size + this.chunkSize));
        size += this.chunkSize;
      }
      return chunks
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-container {
  font-size: 12px;
  padding: 10px;
  .upload-btn {
    width: auto;
    padding: 2px 6px;
  }
}
</style>
