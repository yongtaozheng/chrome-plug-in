<template>
  <div id="bilibiliVideoSpeedRateApp" v-show="showPanel">
    <div id="bilibiliVideoSpeedRateMask" @click="closePanel()"></div>
    <div id="bilibiliVideoSpeedRate">
      <span id="bilibiliVideoSpeedRateClose" @click="closePanel()">×</span>
      <tabBar
        :tabList="tabList"
        v-model="activeTab"
        id="bilibiliVideoSpeedRateTabBar"
      ></tabBar>
      <div style="width: 100%; flex: 1; overflow: scroll">
        <iframe
          v-if="activeTab.title === '翻译'"
          title="翻译"
          style="width: 100%; height: 100%"
          src="https://fanyi.qq.com/"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import tabBar from "./components/common/tabBar.vue";
export default {
  name: "bilibiliVideoSpeedRateApp",
  components: {
    tabBar,
  },
  data() {
    return {
      activeTab: {
        title: "翻译",
      },
      tabList: [
        {
          title: "翻译",
        },
      ],
      showPanel: false,
    };
  },
  mounted() {
    // const keydownFn = (event) => {
    //   if (event.altKey && event.key === "v") {
    //     this.showPanel = !this.showPanel;
    //   }
    // };
    // const bilibiliVideoSpeedRate = document.getElementById("bilibiliVideoSpeedRate");
    // const bilibiliVideoSpeedRateMask = document.getElementById("bilibiliVideoSpeedRateMask");
    // document.addEventListener("keydown", keydownFn);
    // bilibiliVideoSpeedRate && bilibiliVideoSpeedRate.addEventListener("keydown", keydownFn);
    // bilibiliVideoSpeedRateMask && bilibiliVideoSpeedRateMask.addEventListener("keydown", keydownFn);
  },
  methods: {
    closePanel() {
      this.showPanel = false;
    },
  },
};
</script>

<style scoped>
#bilibiliVideoSpeedRateMask {
  position: fixed;
  background: #b6bdc4;
  opacity: 0.2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999999;
}
#bilibiliVideoSpeedRate {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  background: #b6bdc4;
  opacity: 0.9;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  z-index: 9999999;
}
.logo {
  width: 200px;
}
#bilibiliVideoSpeedRateClose {
  position: absolute;
  right: 0;
  font-size: xx-large;
  cursor: pointer;
  top: 0;
  padding: 0 0.5em;
}
#bilibiliVideoSpeedRateClose:hover {
  background: red;
}
#bilibiliVideoSpeedRateTabBar {
  padding-right: 4em;
}
</style>
