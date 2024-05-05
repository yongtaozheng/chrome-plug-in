(() => {
  chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
      const { action, data } = request;
      if (action === "capture") {
        const elementToCaptures = document.querySelectorAll(data);
        if (elementToCaptures.length === 0) return;
        await downloadElementImg(elementToCaptures);
      }
    }
  );

  async function downloadElementImg(elementToCaptures) {
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
  }

  function insertBefore() {
    const parentElement = document.body.parentElement;
    const capturePlugPanelApp = document.createElement("div");
    capturePlugPanelApp.id = "capturePlugPanelApp";
    parentElement.insertBefore(capturePlugPanelApp, document.body);
  }

  insertBefore();
})();
