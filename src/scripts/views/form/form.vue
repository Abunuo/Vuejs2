<style lang="scss" scoped>
    .form-inner {
        width: 800px;
        margin: 40px auto;
        h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 20px;
        }
        button {
            float: right;
            width: 100px;
            height: 30px;
            font-size: 20px;
        }
    }
</style>

<template>
    <div class="form-inner">
    	<h1>表格</h1>
    	<form-field v-for="field,index of form" @addField="addEventListenerOn" :placeholder="field" :key="index"></form-field>
        <button type="button" name="button" @click="validataAll">校验</button>
    </div>
</template>

<script>
import formField from '../../components/field.vue';

exports.default = {
	components: {
		formField
	},
	data() {
		return {
			form: [
				'第一个输入框',
				'第二个输入框',
				'第三个输入框',
			],
			fields: []
		}
	},
	methods: {
		addEventListenerOn(field) {
			this.fields.push(field);
		},
		validataAll() { // 验证所有的接口方法
            let res = [];
			this.fields.forEach(item => {
				res.push(item.validateVal()) // 执行每个表单项内的validateVal方法
			});
            console.log(res);
		}
    },
}
</script>
