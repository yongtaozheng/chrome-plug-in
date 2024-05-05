chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const { action, data } = request;
  console.log("%c Line:4 🥔 action,data", "color:#b03734", action, data);
  sendResponse({ state: "已接收到数据" + data });
});

// function appendDiv() {
//   const 一键保存浏览器打开的所有标签App = document.createElement("div");
//   一键保存浏览器打开的所有标签App.id = "一键保存浏览器打开的所有标签App";
//   document.body.appendChild(一键保存浏览器打开的所有标签App);
//   console.log("插件面板已插入");
//   fastKeyListen();
// }
// function fastKeyListen() {
//   const keydownFn = (event) => {
//     if (event.altKey && event.key === "v") {
//       const 一键保存浏览器打开的所有标签 = document.getElementById("一键保存浏览器打开的所有标签App");
//       一键保存浏览器打开的所有标签.style.display =
//         一键保存浏览器打开的所有标签.style.display === "none" ? "block" : "none";
//     }
//   };
//   const 一键保存浏览器打开的所有标签 = document.getElementById("一键保存浏览器打开的所有标签App");
//   document.addEventListener("keydown", keydownFn);
//   一键保存浏览器打开的所有标签.addEventListener("keydown", keydownFn);
// }
// appendDiv();
