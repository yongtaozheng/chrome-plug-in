<template>
  <div>
    <h3>截取元素节点屏幕截图</h3>
    <input
      v-model="selector"
      class="selector-input"
      placeholder="请输入元素节点选择器"
    />
    <button @click="confirm()">确定</button>
    <div class="input-tip">{{ tip }}</div>
  </div>
</template>

<script>
export default {
  name: "capture",
  data() {
    return {
      selector: "",
      tip: "",
    };
  },
  methods: {
    getElementToCaptures(selector) {
      let elementToCaptures = [];
      try {
        elementToCaptures = document.querySelectorAll(selector);
      } catch (err) {
        elementToCaptures = [];
      }
      return elementToCaptures;
    },
    async confirm() {
      const selector = this.selector;
      if (!selector) {
        this.tip = "请输入元素节点选择器";
        return;
      }
      const elementToCaptures = this.getElementToCaptures(selector);
      if (!elementToCaptures || elementToCaptures.length === 0) {
        this.tip = "请输入正确的元素节点选择器";
        return;
      }
      await this.downloadElementImg(elementToCaptures);
    },
    async downloadElementImg(elementToCaptures) {
      for (let i = 0; i < elementToCaptures.length; i++) {
        this.tip = `下载中 ${i} / ${elementToCaptures.length}`;
        const elementToCapture = elementToCaptures[i];
        const canvas = await html2canvas(elementToCapture);
        // 将canvas转换为图片并下载
        const dataUrl = canvas.toDataURL();
        const link = document.createElement("a");
        link.download = `${new Date().getTime()}-${i}`;
        link.href = dataUrl;
        link.click();
      }
      this.tip = `下载完成 ${elementToCaptures.length} / ${elementToCaptures.length}`;
    },
  },
};
</script>

<style scoped>
.selector-input {
  height: 2em;
  width: 15em;
  margin-right: 2em;
}
.input-tip {
  color: red;
}
</style>
