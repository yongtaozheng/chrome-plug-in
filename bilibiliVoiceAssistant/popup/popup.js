const command = {
  搜索xxxx: "跳转到搜索页面并搜索xxxx",
  下一页: "如果有下一页，跳转到下一页",
  上一页: "如果有上一页，跳转到上一页",
  暂停: "暂停视频播放",
  播放: "播放视频",
  静音: "（取消）静音视频",
  加速: "加速视频播放，每次加速0.5倍",
  减速: "减速视频播放，每次减速0.5倍",
  恢复: "恢复视频播放速度",
  退出全屏: "退出全屏",
  全屏: "全屏播放视频，第一次需要手动点击全屏按钮",
  "下滚/下拉": "向下滚动页面",
  "上滚/上拉": "向上滚动页面",
  回到顶部: "回到页面顶部",
  开启弹幕: "开启弹幕",
  关闭弹幕: "关闭弹幕",
  刷新页面: "刷新页面",
  标序号: "给页面中的每个视频标序号",
  "大声点/音量加": "视频音量加10",
  "小声点/音量减": "视频音量减10",
  继续: "重复执行上一条指令",
};

const main = document.getElementById("main");
for (let key in command) {
  const div = document.createElement("div");
  div.classList.add("main-item");
  div.innerHTML = `<span class="main-label"><span style="flex:1;">${key}</span><span style="width: 25px;margin: auto;">-></span></span><span class="main-value">${command[key]}</span>`;
  div.style.cursor = "pointer";
  div.style.marginBottom = "5px";
  div.style.borderBottom = "1px solid #eee";
  main.appendChild(div);
}

chrome.storage.local.get(["switch"], (result) => {
  const switchElement = document.querySelector(".smart-switch");
  switchElement.dataset.state = result.switch ? "on" : "off";
});

document.querySelectorAll(".smart-switch").forEach((sw) => {
  sw.addEventListener("click", () => {
    const isActive = sw.dataset.state === "on";

    chrome.storage.local.set({ switch: !isActive }, () => {
      console.log("数据已保存");
    });
    sw.dataset.state = isActive ? "off" : "on";
    sw.dispatchEvent(
      new CustomEvent("switch", {
        detail: {
          state: sw.dataset.state,
          element: sw,
        },
      })
    );
  });
});

// document.getElementById("getText").addEventListener("click", async () => {
//   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: () => {
//         return document.body.innerText;
//       },
//     },
//     (result) => {
//       document.getElementById("output").innerText = result[0].result;
//     }
//   );
// });
