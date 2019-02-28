<template>
<div id="container">
	<p>{{ total }}</p>
	<button-counter v-autoSub v-on:increment="incrementTotal"></button-counter>
	<button-counter v-on:increment="incrementTotal" v-bind:name="a"></button-counter>
	<button-counter v-on:increment="incrementTotal" v-bind:age="'我是第二个'" />
	<router-link ref="goTo" to="/second">点我跳转第二个</router-link>
	<br>
	<button @click="show = !show" v-bind:style="{color:'red', fontSize:'14px', width:'auto', lineHeight:'30px', marginTop:'.2rem'}"> 点击我看动画 </button>
	<transition name="slide-fade">
		<p v-show="show">hello</p>
	</transition>
	<p v-if="show" transition="fade">
		Molonogue
	</p>
	<my-compontent :value="123">abunuo</my-compontent>
	<div id="gradient"></div>
</div>
</template>

<style scoped>
.slide-fade-enter-active {
	transition: all .3s ease;
}

.slide-fade-leave-active {
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-active {
	transform: translateX(50px);
	opacity: 0;
}
</style>

<script>
    import Debug from 'debug';
    //等同于 import，按需加载当前组件  注：会导致多进入一次 updated 周期（异步加载导致页面重绘）
    //const buttonCounter = r => require.ensure([], () => r(require('../../components/buttonCounter.vue')), 'buttonCounter');
    //const buttonCounter = () => import(/*webpackChunkName: 'buttonCounter'*/'../../components/buttonCounter.vue')
    import buttonCounter from '../../components/buttonCounter.vue';

    const debug = Debug('vue:index');
    const _debug = Debug('vue:_index');

    export default {
    	data() {
    		return {
    			name: 'Monologue',
    			total: 0,
    			a: '我是第一个',
    			show: true,
    		}
    	},
    	created() {
    		debug('index created');
    		_debug('_index created');
    		this.$on('update', function(val) {
    			console.log('updateTotal: ' + val)
    		})
    		this.$watch('total', function(newVal, oldVal) {
    			console.log('data is change:' + oldVal + '->' + newVal);
    		})
    		this.$watch('show', function(newVal, oldVal) { //等同于下面的 watch
    			console.log('$watch-show is change:' + oldVal + '->' + newVal);
    		})
    	},
    	computed: { //计算属性

    	},
    	directives: { //自定义指令
    		autoSub: {
    			inserted: (el) => {
    				el.click();
    			}
    		}
    	},
    	methods: { //事件方法
    		incrementTotal: function() {
    			this.total += 1;
    		}
    	},
    	updated() {
    		this.$emit('update', this.total)
    	},
    	components: { //组件
    		buttonCounter,
    		myCompontent: { //利用 render 渲染页面
    			// render(createElement) {
    			//   return createElement(
    			//     'h2',
    			//     [  // 渲染模板
    			//       'Hello',
    			//       createElement('br'),
    			//       'World!'
    			//     ]
    			//   )
    			// }

    			// template: '<h2>abc</h2>' //利用 template

    			render(createElement) { //安装 babel-plugin-transform-vue-jsx 后使用 jsx 模板
    				return ( <
    					div >
    					<
    					h2 > {
    						this.$slots.default[0].text
    					} + {
    						this.$vnode.data.attrs.value
    					} < /h2> <
    					h2 > 等同于： {
    						this.$slots.default[0].text
    					} + {
    						this.$attrs.value
    					} < /h2> < /
    					div >
    				)
    			}

    		}
    	},
    	mounted() {

    	},
    	watch: {
    		show: function(newVal, oldVal) { //等同于上面的事件监听
    			console.log('watch-show is change:' + oldVal + '->' + newVal);
    		}
    	}
    }
</script>
