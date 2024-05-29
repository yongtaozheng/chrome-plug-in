<template>
  <div id="capturePlugPanelApp" v-show="showPanel">
    <div id="capturePlugPanelMask" @click="closePanel()"></div>
    <div id="capturePlugPanel">
      <span id="capturePlugPanelClose" @click="closePanel()">×</span>
      <div style="width: 100%; flex: 1; overflow: scroll; padding: 2em">
        <h3>截取节点屏幕截图</h3>
        <textarea
          class=""
          style="width: 80%; height: 10em"
          placeholder="请输入节点选择器"
          v-model="selector"
        />
        <div>
          <button @click="search()">确定</button>
        </div>
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
      await this.downloadElementImg(elementToCaptures);
    },
    async downloadElementImg(elementToCaptures) {
      for (let i = 0; i < elementToCaptures.length; i++) {
        const elementToCapture = elementToCaptures[i];
        // 设置元素的背景颜色为白色
        elementToCapture.style.backgroundColor = "#ffffff";
        const btn = elementToCapture.querySelector(
          "div > .ContentItem > .ContentItem-meta > .AuthorInfo > .FollowButton"
        );
        const footBtn = elementToCapture.querySelector(
          "div > .ContentItem > .RichContent > div:nth-child(4) > div"
        );
        if (btn) {
          btn.style.display = "none";
        }
        if (footBtn) {
          footBtn.style.display = "none";
        }
        setTimeout(async () => {
          // 捕获元素为canvas
          const canvas = await html2canvas(elementToCapture, {
            background: "#ffffff", // 设置html2canvas捕获时的背景颜色
            allowTaint: false, // 阻止跨域图像影响
            useCORS: true, // 允许跨域请求
          });

          // 将canvas转换为图片并下载
          const dataUrl = canvas.toDataURL();
          const link = document.createElement("a");
          link.download = `${new Date().getTime()}-${i}.png`; // 设置下载文件的名称
          link.href = dataUrl;
          link.click();
        }, 100);
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
