<style scoped>
	* {
		user-select: none;
	}
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
		<p v-if="show" transition="fade" v-longpress="() => showAT(longPressData)">
			Molonogue
		</p>
		<my-compontent :value="123">abunuo</my-compontent>
		<div id="gradient" @click="staticUpdate"></div>
		<button @click="tip" style="margin: 20px 0;">tip</button>
	</div>
</template>

<script>
    import Debug from 'debug';
    // 1. 等同于 import，按需加载当前组件  注：会导致多进入一次 updated 周期（异步加载导致页面重绘）
		// 2. 异步组件的渲染本质上其实就是执行2次或者2次以上的渲染, 先把当前组件渲染为注释节点, 当组件加载成功后, 通过 forceRender 执行重新渲染。或者是渲染为注释节点, 
		//       然后再渲染为loading节点, 在渲染为请求完成的组件
    // const buttonCounter = r => require.ensure([], () => r(require('../../components/buttonCounter.vue')), 'buttonCounter');
    // const buttonCounter = () => import(/*webpackChunkName: 'buttonCounter'*/'../../components/buttonCounter.vue')
    import buttonCounter from '../../components/buttonCounter.vue';

    const debug = Debug('vue:index');
    const _debug = Debug('vue:_index');

    export default {
		/**
		 * beforeRouteEnter 执行顺序：
		 * beforeEnterRouter1 -> created -> mounted1[ -> mounted2] -> beforeEnterRouter2[ -> mounted2]
		 * 注：当 mounted 用 nextTick 时，mounted2 执行顺序取决于 dom 绘制时间长短
		 */ 
		beforeRouteEnter(to, from, next) {
			console.log('beforeEnterRouter1',new Date().getTime());
			next(vm => {
				console.log('beforeEnterRouter2',new Date().getTime());
			})
		},
    	data() {
    		return {
    			name: 'Monologue',
    			total: 0,
    			a: '我是第一个',
    			show: true,
				staticData: 1,  //视图层未使用的数据更新不会触发视图层更新，故不存在 updated 周期的触发
				longPressData: {
					content: '长按文案',
					id: 123
				}
    		}
    	},
    	created() {
			console.log('created',new Date().getTime());
    		debug('index created');
    		_debug('_index created');
    		this.$on('update', function(val) {
    			console.log('updated 周期触发：updateTotal: ' + val);
				console.log(this.staticData);
    		})
			this.$watch('staticData', function(newVal, oldVal) {
    			console.log('监听 data(staticData) 触发' + oldVal + '->' + newVal);
    		})
    		this.$watch('total', function(newVal, oldVal) {
    			console.log('监听 data(total) 触发' + oldVal + '->' + newVal);
    		})
    		this.$watch('show', function(newVal, oldVal) { //等同于下面的 watch
    			console.log('监听 data(show) 触发： is change:' + oldVal + '->' + newVal);
    		})
    	},
		mounted() {
			console.log('mounted1',new Date().getTime());
	        this.$nextTick(() => {
				console.log('mounted2',new Date().getTime());
			})
		},
    	computed: { //计算属性

    	},
    	directives: { //自定义指令
				/*
					自动获取焦点
					eg.  v-autoSub
				*/
    		autoSub: {
    			inserted: (el) => {
    				el.click();
    			}
    		}
    	},
    	methods: { //事件方法
    		incrementTotal: function() {
    			this.total += 1;
    		},
			staticUpdate: function(){
				this.staticData ++;
			},
			showAT(longPressData) {
				console.log(longPressData.content, longPressData.id)
			},
			tip() {
				this.$message({
					type: 'tip',
					durations: 3000,
					content: '冒个泡',
				});
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
    				return (
						<div>
	    					<h2> { this.$slots.default[0].text } + { this.$vnode.data.attrs.value } </h2>
							<h2> 等同于： { this.$slots.default[0].text } + { this.$attrs.value } </h2>
						</div>
    				)
    			}

    		}
    	},
    	watch: {
    		show: function(newVal, oldVal) { //等同于上面的事件监听
    			console.log('watch 周期触发: watch-show is change:' + oldVal + '->' + newVal);
    		}
    	}
    }
</script>
