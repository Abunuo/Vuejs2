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
		<p v-if="show" transition="fade" v-longpress="showAT(longPressData)">
			Molonogue
		</p>
		<my-compontent :value="123">abunuo</my-compontent>
		<div id="gradient" @click="staticUpdate"></div>
	</div>
</template>

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
				staticData: 1,  //视图层未使用的数据更新不会触发视图层更新，故不存在 updated 周期的触发
				longPressData: {
					content: '长按文案',
					id: 123
				}
    		}
    	},
    	created() {
    		debug('index created');
    		_debug('_index created');
    		this.$on('update', function(val) {
    			console.log('updated 周期触发：updateTotal: ' + val);
				console.log(this.staticData);
    		})
    		this.$watch('total', function(newVal, oldVal) {
    			console.log('监听 data(total) 触发' + oldVal + '->' + newVal);
    		})
    		this.$watch('show', function(newVal, oldVal) { //等同于下面的 watch
    			console.log('监听 data(show) 触发： is change:' + oldVal + '->' + newVal);
    		})
    	},
    	computed: { //计算属性

    	},
    	directives: { //自定义指令
    		autoSub: {
    			inserted: (el) => {
    				el.click();
    			}
    		},
			/*
				长按指令
				eg. v-longpress:[{content:content,reply_id:reply_id}]="longtap"
			 */
			'longpress': {
                bind: function (el, binding, vNode) {
                    // Make sure expression provided is a function
                    if (typeof binding.value !== 'function') {
                        // Fetch name of component
                        const compName = vNode.context.name
                        // pass warning to console
                        let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`
                        if (compName) { warn += `Found in component '${compName}' ` }

                        console.warn(warn)
                    }
                    // Define variable
                    let pressTimer = null
                    
                    // Define funtion handlers
                    // Create timeout ( run function after 1s )
                    let start = (e) => {
                        if (e.type === 'click' && e.button !== 0) {
                            return;
                        }

                        if (pressTimer === null) {
                            pressTimer = setTimeout(() => {
                                // Run function
                                handler()
                            }, 500)
                        }
                    }

                    // Cancel Timeout
                    let cancel = (e) => {
                        // Check if timer has a value or not
                        if (pressTimer !== null) {
                            clearTimeout(pressTimer)
                            pressTimer = null
                        }
                    }
                    // Run Function
                    const handler = () => {
                        binding.value()
                    }

                    // Add Event listeners
                    el.addEventListener("mousedown", start, { passive: false });
                    el.addEventListener("touchstart", start, { passive: false });
                    // Cancel timeouts if this events happen
                    el.addEventListener("click", cancel, { passive: false });
                    el.addEventListener("mouseout", cancel, { passive: false });
                    el.addEventListener("touchend", cancel, { passive: false });
                    el.addEventListener("touchcancel", cancel, { passive: false });
                }
            },
    	},
    	methods: { //事件方法
    		incrementTotal: function() {
    			this.total += 1;
    		},
			staticUpdate: function(){
				this.staticData ++;
			},
			showAT(longPressData) {
				return () => {
					console.log(longPressData.content, longPressData.id)
				}
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
    			console.log('watch 周期触发: watch-show is change:' + oldVal + '->' + newVal);
    		}
    	}
    }
</script>
