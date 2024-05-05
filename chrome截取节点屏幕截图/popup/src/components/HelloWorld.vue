<template>
  <div class="hello">
    <h3 id="message">输入需要截图的元素selector</h3>
    <input id="input1" v-model="inputVal" type="text" />
    <button id="sendData" @click="sendData">确定</button>
  </div>
</template>

<script>
import { sendMessage } from "../../utils/chrome.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    sendData() {
      sendMessage({ action: "capture", data: this.inputVal });
    },
  },
};
</script>

<style scoped></style>
