// 监听扩展安装事件
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// 示例：监听浏览器标签更新
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log("Tab finished loading:", tab.url);
  }
});
