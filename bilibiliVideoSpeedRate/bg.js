function changSpeedRateList(mySpeedList = null) {
  if (!mySpeedList) {
    const defaultList = [0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4, 5, 16];
    const storageList = localStorage.getItem("bilibiliVideoSpeedRateList");
    if (storageList) {
      mySpeedList = JSON.parse(storageList);
    } else {
      mySpeedList = defaultList;
    }
  }
  localStorage.setItem(
    "bilibiliVideoSpeedRateList",
    JSON.stringify(mySpeedList)
  );

  const videoDomSelector =
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch > div > video";
  const speedListSelector =
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-control-wrap > div.bpx-player-control-entity > div.bpx-player-control-bottom > div.bpx-player-control-bottom-right > div.bpx-player-ctrl-btn.bpx-player-ctrl-playbackrate > ul";
  const videoDom = document.querySelector(videoDomSelector);
  const speedListDom = document.querySelector(speedListSelector);
  const speedItemDom = speedListDom.firstElementChild;
  speedListDom.innerHTML = "";
  mySpeedList
    .sort((a, b) => b - a)
    .forEach((item) => {
      const node = speedItemDom.cloneNode();
      node.setAttribute("data-value", item);
      node.innerText = `${item}x`;
      node.addEventListener("click", () => {
        videoDom.playbackRate = item;
      });
      speedListDom.appendChild(node);
    });
  console.log("bilibiliVideoSpeedRate已注入");
}

const repeatImplement = (times = 5) => {
  setTimeout(() => {
    try {
      changSpeedRateList();
    } catch (err) {
      if (times > 0) repeatImplement(times--);
    }
  }, 1000);
};

repeatImplement();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const { action, data } = request;
  sendResponse({ state: "视频倍速列表已更新" });
  if (action === "setSpeedList") {
    changSpeedRateList(data.split("、"));
  }
});
