<template>
  <div id="appJYChromeTab">
    <el-tabs
      id="appJYChromeTabElTabs"
      type="border-card"
      style="
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      "
    >
      <el-tab-pane label="浏览器标签记录"
        ><historyList></historyList
      ></el-tab-pane>
      <el-tab-pane label="配置管理"><configView></configView></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import configView from "./components/configView.vue";
import historyList from "./components/historyList.vue";

export default {
  name: "appJYChromeTab",
  components: {
    configView,
    historyList,
  },
};
</script>

<style>
.el-tabs__content {
  overflow: hidden !important;
  height: 100%;
}
.el-tab-pane {
  height: 100%;
}
.el-collapse-item__content {
  padding-bottom: 0 !important;
}
</style>
<style lang="less" scoped>
#appJYChromeTab {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  width: 600px;
  height: 500px;
  #appJYChromeTabElTabs {
    // background: url("./assets/logo.png") no-repeat center center / cover;
  }
}
</style>
