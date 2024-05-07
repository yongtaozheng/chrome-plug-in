<template>
  <div id="capturePlugPanelApp" v-show="showPanel">
    <div id="capturePlugPanelMask" @click="closePanel()"></div>
    <div id="capturePlugPanel">
      <span id="capturePlugPanelClose" @click="closePanel()">×</span>
      <div style="width: 100%; flex: 1; overflow: scroll; padding: 2em">
        <h3>截取节点屏幕截图</h3>
        <input placeholder="请输入节点选择器" v-model="selector" />
        <button @click="search()">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import tabBar from "./components/common/tabBar.vue";
export default {
  name: "capturePlugPanelApp",
  components: {
    tabBar,
  },
  data() {
    return {
      showPanel: true,
      selector: "",
    };
  },
  mounted() {
    const keydownFn = (event) => {
      if (event.altKey && event.key === "c") {
        this.showPanel = !this.showPanel;
      }
    };
    const capturePlugPanel = document.getElementById("capturePlugPanel");
    const capturePlugPanelMask = document.getElementById(
      "capturePlugPanelMask"
    );
    document.addEventListener("keydown", keydownFn);
    capturePlugPanel && capturePlugPanel.addEventListener("keydown", keydownFn);
    capturePlugPanelMask &&
      capturePlugPanelMask.addEventListener("keydown", keydownFn);
  },
  methods: {
    closePanel() {
      this.showPanel = false;
    },
    async search() {
      const elementToCaptures = document.querySelectorAll(this.selector);
      if (elementToCaptures.length === 0) return;
      console.log(
        "%c Line:50 🍅 elementToCaptures",
        "color:#6ec1c2",
        elementToCaptures
      );
      await this.downloadElementImg(elementToCaptures);
    },
    async downloadElementImg(elementToCaptures) {
      for (let i = 0; i < elementToCaptures.length; i++) {
        const elementToCapture = elementToCaptures[i];
        const canvas = await html2canvas(elementToCapture);
        // 将canvas转换为图片并下载
        const dataUrl = canvas.toDataURL();
        const link = document.createElement("a");
        link.download = `${new Date().getTime()}-$[i]`;
        link.href = dataUrl;
        link.click();
      }
    },
  },
};
</script>

<style scoped>
#capturePlugPanelMask {
  position: fixed;
  background: #b6bdc4;
  opacity: 0.2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
#capturePlugPanel {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  background: #fff;
  opacity: 0.9;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  z-index: 999;
  display: flex;
  flex-direction: column;
}
.logo {
  width: 200px;
}
#capturePlugPanelClose {
  position: absolute;
  right: 0;
  font-size: xx-large;
  cursor: pointer;
  top: 0;
  padding: 0 0.5em;
}
#capturePlugPanelClose:hover {
  background: red;
}
#capturePlugPanelTabBar {
  padding-right: 4em;
}
</style>
