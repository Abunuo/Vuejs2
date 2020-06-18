<template>
    <div class="message-container" v-if="showFlag">
        <section class="message-inner" v-if="options.type !== 'tip'">
            <header class="header-inner">
                {{options.title}}
            </header>
            <section class="content-inner">
                {{options.content}}
            </section>
            <section class="operations-inner">
                <p class="cancel" v-if="options.type == 'confirm'" @click="cancelCallback">{{options.cancelText}}</p>
                <p class="confirm" @click="confirmCallback">{{options.confirmText}}</p>
            </section>
        </section>
        <section v-else class="tip-inner" :style="{animation: animation1}">
            {{options.content}}
        </section>
    </div>
</template>

<script>
export default {
	data() {
		return {
			options: {
				title: '提示',
				content: '请配置显示文案',
				type: 'tip',
				confirmText: '确认',
				cancelText: '取消',
				confirm: null,
				cancel: null,
                durations: 3000
			},
            showFlag: false, // 弹框显示隐藏
            toggleAnimations: false  // tip专用
		}
	},
    computed: {
        animation1() {
            return this.toggleAnimations ? `tipAnimation ${this.options.durations/1000}s` : '';
        }
    },
	methods: {
		init(options) {
            if(this.showFlag) return;
			if (options && !options.content && options.content == '') {
				throw new TypeError('Pleace set correctly content, content must not empty!');
			}
            
			Object.assign(this.options, options);
            this.showMessageWrap();
            
            if(this.options.type == 'tip') {
                this.toggleAnimations = true;
                setTimeout(() => {
                    this.hideMessageWrap();
                }, this.options.durations)
            }
		},
		confirmCallback() {
			this.options.confirm && this.options.confirm();
            this.hideMessageWrap();
		},
		cancelCallback() {
			this.options.cancel && this.options.cancel();
            this.hideMessageWrap();
		},
        showMessageWrap() {
            this.showFlag = true;
        },
        hideMessageWrap() {
            this.showFlag = false;
        }
	}
}
</script>

<style lang="scss" scoped>
    .message-container {
        max-width: 50%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        > section {
            box-shadow: 0 0 10px 0 #dee0e1;
            border-radius: 4px;
        }
        .message-inner {
            width: 260px;
            height: auto;
            color: #303133;
            background: #fff;
            padding: 0 20px;
            .header-inner {
                text-align: center;
                font-size: 18px;
                line-height: 44px;
            }
            .content-inner {
                min-height: 40px;
                color: #606266;
                font-size: 14px;
            }
            .operations-inner {
                display: flex;
                width: 100%;
                border-top: 1px solid #eee;
                margin-top: 20px;
                p {
                    text-align: center;
                    line-height: 44px;
                    cursor: pointer;
                    &.cancel {
                        width: 50%;
                    }
                    &.confirm {
                        flex: 1;
                        color: #00d6a6;
                    }
                }
            }
        }
        .tip-inner {
            padding: 10px 20px;
            min-width: 100px;
            background: rgba(0,0,0,0);
            opacity: 0;
            color: #fff;
            text-align: center;
        }
    }
    @keyframes tipAnimation {
        0% {
            background: rgba(0,0,0,0);
            opacity: 0;
        }
        30% {
            background: rgba(0,0,0,0.5);
            opacity: 1;
        }
        70% {
            background: rgba(0,0,0,0.5);
            opacity: 1;
        }
        100% {
            background: rgba(0,0,0,0);
            opacity: 0;
        }
    }
</style>
