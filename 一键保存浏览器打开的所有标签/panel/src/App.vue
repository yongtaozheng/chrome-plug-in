<template>
  <div id="一键保存浏览器打开的所有标签App" v-show="showPanel">
    <div id="一键保存浏览器打开的所有标签Mask" @click="closePanel()"></div>
    <div id="一键保存浏览器打开的所有标签">
      <span id="一键保存浏览器打开的所有标签Close" @click="closePanel()"
        >×</span
      >
      <tabBar
        :tabList="tabList"
        v-model="activeTab"
        id="一键保存浏览器打开的所有标签TabBar"
      ></tabBar>
      <div style="width: 100%; flex: 1; overflow: scroll">
        <iframe
          v-if="activeTab.title === '翻译'"
          title="翻译"
          style="width: 100%; height: 100%"
          src="https://fanyi.qq.com/"
        ></iframe>
        <iframe
          v-else-if="activeTab.title === 'ChatGPT'"
          title="ChatGPT"
          style="width: 100%; height: 100%"
          src="https://chat18.aichatos.xyz/#/chat/1700925030769"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import tabBar from "./components/common/tabBar.vue";
export default {
  name: "一键保存浏览器打开的所有标签App",
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
        {
          title: "ChatGPT",
        },
        {
          title: "写作模板",
        },
      ],
      showPanel: false,
    };
  },
  mounted() {
    const keydownFn = (event) => {
      if (event.altKey && event.key === "v") {
        this.showPanel = !this.showPanel;
      }
    };
    const 一键保存浏览器打开的所有标签 =
      document.getElementById("一键保存浏览器打开的所有标签");
    const 一键保存浏览器打开的所有标签Mask =
      document.getElementById("一键保存浏览器打开的所有标签Mask");
    document.addEventListener("keydown", keydownFn);
    一键保存浏览器打开的所有标签 &&
      一键保存浏览器打开的所有标签.addEventListener("keydown", keydownFn);
    一键保存浏览器打开的所有标签Mask &&
      一键保存浏览器打开的所有标签Mask.addEventListener("keydown", keydownFn);
  },
  methods: {
    closePanel() {
      this.showPanel = false;
    },
  },
};
</script>

<style scoped>
#一键保存浏览器打开的所有标签Mask {
  position: fixed;
  background: #b6bdc4;
  opacity: 0.2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
#一键保存浏览器打开的所有标签 {
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
}
.logo {
  width: 200px;
}
#一键保存浏览器打开的所有标签Close {
  position: absolute;
  right: 0;
  font-size: xx-large;
  cursor: pointer;
  top: 0;
  padding: 0 0.5em;
}
#一键保存浏览器打开的所有标签Close:hover {
  background: red;
}
#一键保存浏览器打开的所有标签TabBar {
  padding-right: 4em;
}
</style>
