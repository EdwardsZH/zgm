<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
const sessionHistory = window.sessionStorage;

export default {
  data() {
    return {
      transitionName: "forward"
    };
  },
  watch: {
    // 更新页面所在位置，用于判断是前进页还是后退页
    $route(to, from) {
      if (to && from) {
        let toPath = to.path;
        let fromPath = from.path;
        let count = parseInt(sessionHistory.getItem("count"));
        // 如果没有初始记录
        if (Number.isNaN(count)) {
          count = 1;
          this.transitionName = "forward";
        } else {
          count += 1;
          let fromCount = parseInt(sessionHistory.getItem(fromPath));
          let toCount = parseInt(sessionHistory.getItem(toPath));

          if (toCount < fromCount && fromCount < count) {
            this.transitionName = "backward";
            count = toCount;
          } else {
            this.transitionName = "forward";
          }
        }
        sessionHistory.setItem(toPath, count);
        sessionHistory.setItem("count", count);
      }
    }
  },
};
</script>

<style>
  body{
    background-color: #ffffff;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  /* 进入切页动画 */
  .forward-enter-active, .forward-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s;
    z-index: 0;
  }
  .forward-leave {
    transform: translate3d(0, 0, 0);
  }
  .forward-leave-to {
    transform: translate3d(-100%, 0, 0);
  }
  .forward-enter {
    transform: translate3d(100%, 0, 0);
  }
  .forward-enter-to {
    transform: translate3d(0, 0, 0);
  }

  /* 离开切页动画 */
  .backward-enter-active, .backward-leave-active {
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s;
    z-index: 0;
  }
  .backward-leave {
    transform: translate3d(0, 0, 0);
  }
  .backward-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .backward-enter {
    transform: translate3d(-100%, 0, 0);
  }
  .backward-enter-to {
    transform: translate3d(0, 0, 0);
  }
</style>