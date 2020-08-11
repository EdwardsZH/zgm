<template>
    <div class="popup" v-show="isPopup" @touchmove.prevent>
        <div class="toast-main">
            <i></i>
            <div class="toast-tip">{{text}}</div>
        </div>
        
        <div class="popup-box"></div>
    </div>
</template>

<script>
export default {
    name: 'yjk-toast',
    data(){
        return {
           isPopup: false,
           type: 'warn',
           time: 1000,
           text: ''
        }
    },
    methods: {
        /* createToast 弹窗展示 
        * options 返回参数:
        * @param {String}  type          toast 展示类型， (警告，错误， 操作成功)
        * @param {Number}  time          toast 显示时长，单位ms (默认1000ms), 
        * @param {String}  text          toast 提示文案  'xxxx我是提示', 
        */
        createToast(options) {
            this.isPopup = true;
            [this.type, this.time, this.text ] = [options.type, options.time, options.text];
            this.hide();
        },

        show() {
            this.isPopup = true;
            this.hide();
        },

        hide() {
            setTimeout(() => this.isPopup = false, this.time);
        }
    }
}
</script>

<style lang="less">
.popup{
    overflow: hidden;
    width: 100%;
    min-height: 38px;
    .toast-main{
        min-width: 260px;
        min-height: 28px;
        line-height: 20px;
        padding: 10px;
        background-color: rgba(37,38,45,.9);
        border-radius: 8px;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 100;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        .toast-tip{
            font-size: 18px;
            color: #ccc;
            text-align: center;
        }
    }
    .popup-box{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        // background: rgba(0,0,0,0.2);
    }
}
</style>