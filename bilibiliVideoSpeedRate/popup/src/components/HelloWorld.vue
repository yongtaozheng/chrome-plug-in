<template>
  <div class="wrapper">
    <h2>视频倍速自定义</h2>
    <div class="label">倍速列表，多个使用、隔开</div>
    <div class="info color-red">(目前支持最高倍速为16倍)</div>
    <textarea v-model="speedRateList" class="textarea-content"></textarea>
    <button @click="sendData" class="button">确定</button>
    <div class="info-box">
      <div class="info-box-text">
        联系作者：<span class="color-0d7aee">jyeontu@163.com</span>
      </div>
      <div class="info-box-text">
        公众号：<span class="color-0d7aee">前端也能这么有趣</span>
      </div>
      <div class="url-link">
        <div
          class="url-link-item"
          @click="
            toLink('https://gitee.com/zheng_yongtao/chrome-plug-in/issues/new')
          "
        >
          反馈 or 建议
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendMessage } from "../../utils/chrome.js";
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      speedRateList: "0.5、0.75、1、1.25、1.5、2、3、4、16",
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const storageList = localStorage.getItem("bilibiliVideoSpeedRateList");
      if (storageList) {
        this.speedRateList = storageList;
      }
    },
    sendData() {
      localStorage.setItem("bilibiliVideoSpeedRateList", this.speedRateList);
      sendMessage({
        action: "setSpeedList",
        data: this.speedRateList,
      });
    },
    toLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.color-red {
  color: red;
}
.color-0d7aee {
  color: #0d7aee;
}
.wrapper {
  width: 320px;
  max-height: 500px;
  background: #e8eaeb;
  border-radius: 5px;
  font-size: 16px;
}
.info {
  font-size: 14px;
}
.textarea-content {
  width: 240px;
  height: 100px;
  padding: 1em;
}
.button {
  cursor: pointer;
  display: block;
  margin: auto;
  width: 150px;
  background: #f5508f;
  color: #fff;
  border: none;
  padding: 0.5em;
  border-radius: 5px;
}
.button:hover {
  background: #ef0f65;
}
.info-box {
  margin-top: 1em;
  padding: 1em;
  border-top: 1px solid #fff;
}
.info-box-text {
}
.url-link {
  color: blue;
  display: flex;
}
.url-link-item {
  margin: auto;
  display: flex;
  cursor: pointer;
}
.url-link-item:hover {
  color: #ef0f65;
}
.url-link-item-img {
  height: 16px;
  margin: auto 0;
}
</style>
