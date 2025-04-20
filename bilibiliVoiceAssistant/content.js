const { pinyin } = window.pinyinPro;

class Subtitle {
  constructor(config = {}) {
    this.timer = null;
    this.id = "bilibiliVoiceAssistantSubtitle";
    this.subtitle = null;
    this.showTime = 3000;
    this.contentSelector = ".live-player-mounter";
    Object.assign(this, config);
  }
  generateSubtitle() {
    const iframes = document.querySelectorAll("iframe");
    let iframe = null;
    for (let i = 0; i < iframes.length; i++) {
      if (iframes[i].src.includes("live.bilibili.com")) {
        iframe = iframes[i];
        break;
      }
    }
    let content = document.querySelector(this.contentSelector);
    if (!content) {
      if (!iframe) return;
      content = iframe.contentDocument.querySelector(this.contentSelector);
    }
    if (!content) return;
    if (this.subtitle) return this.subtitle;
    const subtitle = document.createElement("div");
    subtitle.style.position = "absolute";
    subtitle.style.bottom = "10px";
    subtitle.style.left = "5%";
    subtitle.style.color = "white";
    subtitle.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    subtitle.style.borderRadius = "5px";
    subtitle.style.fontSize = "32px";
    subtitle.style.zIndex = "9999";
    subtitle.innerText = "";
    subtitle.id = this.id;
    subtitle.style.width = "90%";
    subtitle.style.textAlign = "center";
    subtitle.style.display = "none";
    subtitle.style.fontWeight = "bold";
    subtitle.style.color = "skyblue";
    content.appendChild(subtitle);
    this.subtitle = subtitle;
    return subtitle;
  }
  updateSubtitle(text) {
    let subtitle = this.subtitle;
    if (!subtitle) {
      subtitle = this.generateSubtitle();
    }
    if (!subtitle || !text) return;
    subtitle.innerText = text;
    subtitle.style.display = "block";
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      subtitle.style.display = "none";
    }, this.showTime);
  }
}

//命令配置
const command = {
  搜索: {
    method: search, //调用方法
    needConfirm: true, //是否需要确认
    confirmText: "确定跳转到搜索页面？", //确认提示文本
  },
  下一页: {
    method: nextPage,
    needConfirm: false,
  },
  上一页: {
    method: prevPage,
    needConfirm: false,
  },
  暂停: {
    method: pause,
    needConfirm: false,
  },
  播放: {
    method: play,
    needConfirm: false,
  },
  静音: {
    method: mute,
    needConfirm: false,
  },
  加速: {
    method: fastForward,
    needConfirm: false,
  },
  减速: {
    method: fastBackward,
    needConfirm: false,
  },
  退出全屏: {
    method: exitFullScreen,
    needConfirm: false,
  },
  全屏: {
    method: fullScreen,
    needConfirm: false,
  },
  下滚: {
    method: scrollDown,
    needConfirm: false,
  },
  上滚: {
    method: scrollUp,
    needConfirm: false,
  },
  下拉: {
    method: scrollDown,
    needConfirm: false,
  },
  上拉: {
    method: scrollUp,
    needConfirm: false,
  },
  左滑: {
    method: swipeLeft,
    needConfirm: false,
  },
  右滑: {
    method: swipeRight,
    needConfirm: false,
  },
  回到顶部: {
    method: scrollToTop,
    needConfirm: false,
  },
  关闭页面: {
    method: closePage,
    needConfirm: true,
    confirmText: "确定要关闭页面吗？",
  },
  开启弹幕: {
    method: switchDanmak,
    needConfirm: false,
  },
  关闭弹幕: {
    method: switchDanmak,
    needConfirm: false,
  },
  刷新页面: {
    method: refreshPage,
    needConfirm: true,
    confirmText: "确定要刷新页面吗？",
  },
  标序号: {
    method: setNumber,
    needConfirm: false,
  },
  大声点: {
    method: volumeUp,
    needConfirm: false,
  },
  小声点: {
    method: volumeDown,
    needConfirm: false,
  },
  恢复: {
    method: normalSpeed,
    needConfirm: false,
  },
  继续: {
    method: lastOperate,
    needConfirm: false,
  },
};
const regCommand = {
  翻页: {
    reg: /第([零一二三四五六七八九十百千万亿\d]+)页/,
    method: toPage,
    needConfirm: false,
  },
  播放视频: {
    reg: /第([零一二三四五六七八九十百千万亿\d]+)个/,
    method: playVideo,
    needConfirm: false,
  },
};
let confirming = false;
let confirmingCommand = "";
let videoList = [];
let lastCommand = "";
let switchState = true;
let processed = false;

chrome.storage.local.get(null, (data) => {
  switchState = data.switch;
});
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (changes.switch) {
    switchState = changes.switch.newValue;
  }
});
const host = location.host;
// if (host === "search.bilibili.com") {
setNumber();
// }
if (host === "www.bilibili.com") {
  window.addEventListener("scroll", debounce(setNumber, 1000));
}

//中文数字转阿拉伯数字
function chineseToArabic(chineseStr) {
  // 核心映射表（支持简繁）
  const numMap = {
    零: 0,
    一: 1,
    壹: 1,
    二: 2,
    贰: 2,
    两: 2,
    三: 3,
    叁: 3,
    四: 4,
    肆: 4,
    五: 5,
    伍: 5,
    六: 6,
    陆: 6,
    七: 7,
    柒: 7,
    八: 8,
    捌: 8,
    九: 9,
    玖: 9,
  };

  const unitMap = {
    十: { value: 10, sec: false },
    拾: { value: 10, sec: false },
    百: { value: 100, sec: false },
    佰: { value: 100, sec: false },
    千: { value: 1000, sec: false },
    仟: { value: 1000, sec: false },
    万: { value: 10000, sec: true },
    萬: { value: 10000, sec: true },
    亿: { value: 100000000, sec: true },
    億: { value: 100000000, sec: true },
  };

  let total = 0; // 最终结果
  let section = 0; // 当前小节
  let current = 0; // 当前累加值
  let hasZero = false; // 零标记

  const processSection = () => {
    section += current;
    current = 0;
  };

  for (const char of chineseStr) {
    if (numMap.hasOwnProperty(char)) {
      if (char === "零") {
        hasZero = true;
        continue;
      }

      if (hasZero && current > 0) {
        current *= 10;
        hasZero = false;
      }
      current += numMap[char];
    } else if (unitMap.hasOwnProperty(char)) {
      const unit = unitMap[char];

      if (unit.sec) {
        // 处理万/亿分段
        processSection();
        section = (section + current) * unit.value;
        total += section;
        section = 0;
      } else {
        current = current === 0 ? unit.value : current * unit.value;
        section += current;
        current = 0;
      }
      hasZero = false;
    }
  }

  const last2 = chineseStr.slice(-2)[0];
  const last2Unit = unitMap[last2];
  if (last2Unit) {
    current = (current * last2Unit.value) / 10;
  }
  return total + section + current;
}
function getVisibleElements(selector = "*", threshold = 1) {
  const viewportHeight = window.innerHeight;
  const elements = Array.from(document.querySelectorAll(selector));
  return elements.filter((el) => {
    const rect = el.getBoundingClientRect();
    return rect.top > 0 && rect.top < viewportHeight;
  });
}

//提示文本元素生成---开始
function generateTipBox(text = "") {
  const assistantTipBox = document.getElementById("assistantTipBox");
  if (assistantTipBox) {
    return;
  }
  const tipBox = document.createElement("div");
  tipBox.id = "assistantTipBox";
  tipBox.style.display = "none";
  tipBox.style.position = "fixed";
  tipBox.style.top = "50%";
  tipBox.style.left = "50%";
  tipBox.style.transform = "translate(-50%, -50%)";
  tipBox.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  tipBox.style.color = "white";
  tipBox.style.padding = "10px 20px";
  tipBox.style.borderRadius = "5px";
  tipBox.style.zIndex = "9999";
  tipBox.textContent = text;
  document.body.appendChild(tipBox);
}
generateTipBox();
function showTipBox(text, timer) {
  const tipBox = document.getElementById("assistantTipBox");
  tipBox.textContent = text;
  tipBox.style.display = "block";
  if (timer) {
    setTimeout(() => {
      hideTipBox();
    }, timer);
  }
}
function hideTipBox() {
  const tipBox = document.getElementById("assistantTipBox");
  tipBox.style.display = "none";
}
//提示文本元素生成---结束

//命令操作函数---开始
function lastOperate() {
  if (!lastCommand) return;
  const { method, params } = lastCommand;
  method(params);
}
function toPage(text) {
  if (!Number(text)) {
    text = chineseToArabic(text);
  }
  if (location.host !== "search.bilibili.com") {
    return;
  }
  const href = location.href;
  const [url, paramStr] = href.split("?");
  const list = paramStr.split("&");
  const params = {};
  list.forEach((item) => {
    const [key, value] = item.split("=");
    params[key] = decodeURIComponent(value);
  });
  const videoList = getVisibleElements(".bili-video-card__wrap");
  params.page = text;
  params.o = (Number(text) - 1) * videoList.length;
  if (text === 1) {
    delete params.page;
    delete params.o;
  }
  const newHref = `${url}?${new URLSearchParams(params).toString()}`;
  window.open(newHref, "_self");
  // location.href = newHref;
}
function playVideo(text) {
  if (!Number(text)) {
    text = chineseToArabic(text);
  }
  // if (location.host !== "search.bilibili.com") {
  //   return;
  // }
  // const selector = ".bili-video-card";
  // const list = document.querySelectorAll(selector);
  if (!videoList[text - 1]) {
    return;
  }
  const videoDom = videoList[text - 1].querySelector("a");
  videoDom.click();
}
function setNumber() {
  let selector =
    "#i_cecream > div.bili-feed4 > main > div.feed2 > div > div.container.is-version8 > div > div";
  let list = getVisibleElements(selector);
  if (location.host === "search.bilibili.com") {
    selector = ".bili-video-card__wrap";
    list = document.querySelectorAll(selector);
  }
  videoList = list;
  for (let i = 0; i < list.length; i++) {
    const className = "assistant-span-number";
    const oldSpan = list[i].parentNode.querySelector(`.${className}`);
    if (oldSpan) {
      oldSpan.innerText = i + 1;
      continue;
    }
    const span = document.createElement("span");
    span.className = className;
    span.textContent = i + 1;
    span.style.position = "absolute";
    span.style.top = "0";
    span.style.left = "0";
    span.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    span.style.color = "white";
    span.style.padding = "5px";
    span.style.borderRadius = "5px";
    span.style.zIndex = "10";
    list[i].parentNode.style.position = "relative";
    list[i].parentNode.appendChild(span);
  }
}
function refreshPage() {
  location.reload();
}
function closePage() {
  window.close();
}
function startSpeaking(text) {
  return new Promise((resolve, reject) => {
    // 初始化语音合成
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // 设置语音参数
    utterance.lang = "zh-CN"; // 语言
    utterance.rate = 1; // 语速（0.1-10）
    utterance.pitch = 1.5; // 音高（0-2）
    utterance.volume = 1; // 音量（0-1）
    synth.speak(utterance);
    utterance.onend = () => {
      resolve();
    };
    utterance.onerror = () => {
      resolve();
    };
  });
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function swipeLeft() {}

function swipeRight() {}

function fullScreen() {
  const triggerFKey = (targetElement = document.activeElement) => {
    const eventOpts = {
      key: "f",
      code: "KeyF",
      keyCode: 70, // 兼容旧浏览器
      bubbles: true,
      cancelable: true,
    };

    // 触发完整的按键生命周期
    targetElement.dispatchEvent(new KeyboardEvent("keydown", eventOpts));
    targetElement.dispatchEvent(new KeyboardEvent("keypress", eventOpts));
    targetElement.dispatchEvent(new KeyboardEvent("keyup", eventOpts));
  };
  triggerFKey();
}

function exitFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}
function changeSpeedRate(num, flag = false) {
  const videoDomSelector =
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch > div > video";
  const videoDom = document.querySelector(videoDomSelector);
  if (!videoDom) {
    return;
  }
  if (flag) {
    videoDom.playbackRate = num;
    return;
  }
  const currentRate = videoDom.playbackRate;
  videoDom.playbackRate = Math.min(16, Math.max(0.5, currentRate + num));
}
function normalSpeed() {
  changeSpeedRate(1, true);
}
function fastBackward() {
  changeSpeedRate(-0.5);
}

function fastForward() {
  changeSpeedRate(0.5);
}

function volume(num, flag = false) {
  const videoDomSelector =
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch > div > video";
  const videoDom = document.querySelector(videoDomSelector);
  if (!videoDom) {
    return;
  }
  if (flag) {
    videoDom.volume = num;
    return;
  }
  const currentVolume = videoDom.volume;
  videoDom.volume = Math.min(1, Math.max(0, currentVolume + num));
}
function volumeUp() {
  volume(0.1);
}
function volumeDown() {
  volume(-0.1);
}

function mute() {
  const videoDomSelector =
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch > div > video";
  const videoDom = document.querySelector(videoDomSelector);
  if (!videoDom) {
    return;
  }
  videoDom.muted = !videoDom.muted;
}

function play() {
  const videoDomSelector =
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch > div > video";
  const videoDom = document.querySelector(videoDomSelector);
  if (!videoDom) {
    return;
  }
  videoDom.play();
}

function pause() {
  const videoDomSelector =
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch > div > video";
  const videoDom = document.querySelector(videoDomSelector);
  if (!videoDom) {
    return;
  }
  videoDom.pause();
}

function prevPage() {
  const selector = ".vui_pagenation>.vui_pagenation--btns>button:first-child";
  const btn = document.querySelector(selector);
  if (!btn) {
    return;
  }
  btn.click();
  setTimeout(() => {
    setNumber();
  }, 1500);
}

function nextPage() {
  const selector = ".vui_pagenation>.vui_pagenation--btns>button:last-child";
  const btn = document.querySelector(selector);
  if (!btn) {
    return;
  }
  btn.click();
  setTimeout(() => {
    setNumber();
  }, 1500);
}

function search(text) {
  const url = `https://search.bilibili.com/all?keyword=${text}`;
  window.open(url, "_blank");
}

function scrollUp() {
  window.scrollBy(0, -(window.innerHeight - 200));
}

function scrollDown() {
  window.scrollBy(0, window.innerHeight - 200);
}

function switchDanmak() {
  const btn1 = document.querySelector(
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-control-wrap > div.bpx-player-control-entity > div.bpx-player-control-bottom > div.bpx-player-control-bottom-center > div > div.bpx-player-dm-root > div.bpx-player-dm-switch.bui.bui-danmaku-switch > div > input"
  );
  const btn2 = document.querySelector(
    "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-sending-area > div > div.bpx-player-dm-root > div.bpx-player-dm-switch.bui.bui-danmaku-switch > div > input"
  );
  const btn = btn2 || btn1;
  if (!btn) {
    return;
  }
  btn.click();
}

//命令操作函数---结束

function debounce(func, delay = 1000) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

//二次确认---开始
function confirm(obj, cmd, param) {
  showTipBox((obj.confirmText || cmd + "?") + "（是的/取消）");
  startSpeaking(obj.confirmText || cmd + "?");
  confirming = true;
  confirmingCommand = {
    cmd,
    param,
  };
  confirmingCommand.trimer = setTimeout(() => {
    hideTipBox();
    confirming = false;
    confirmingCommand = null;
  }, 10000);
}
function confirmResult(text) {
  const { cmd, param, trimer } = confirmingCommand;
  clearTimeout(trimer);
  if (text.includes("是的")) {
    command[cmd].method(param);
    hideTipBox();
    confirming = false;
    confirmingCommand = null;
    lastCommand = {
      method: command[cmd].method,
      params: param,
    };
  } else if (text.includes("取消")) {
    hideTipBox();
    confirming = false;
    confirmingCommand = null;
  }
}
//二次确认---结束
function removePunctuation(str) {
  // 使用 Unicode 属性匹配（需 u 标志）
  return str.replace(/[\p{P}\p{S}\s]/gu, "");
}

const commandRecognition = (text) => {
  text = removePunctuation(text);
  const commands = Object.keys(command); // 获取可枚举属性键

  // 遍历正则表达式对象
  for (const key in regCommand) {
    const obj = regCommand[key];
    const reg = obj.reg;
    const match = reg.exec(text);
    if (match) {
      const param = match[1];
      processed = true;
      obj.method(param);
      showTipBox(match[0], 2000);
      lastCommand = {
        method: obj.method,
        params: param,
      };
      return;
    }
  }

  // 使用常规for循环（避免const在循环中的限制）
  for (const cmd of commands) {
    const cmdPinyin = " " + pinyin(cmd, { toneType: "none" }) + " ";
    const textPinyin = " " + pinyin(text, { toneType: "none" }) + " ";
    if (text.includes(cmd) || textPinyin.includes(cmdPinyin)) {
      if (text.includes(cmd)) text = text.slice(text.indexOf(cmd));
      else {
        const index = textPinyin.indexOf(cmdPinyin);
        const prefix = textPinyin.slice(0, index);
        const prefixNum = prefix.split(" ").length - 1;
        text = cmd + text.slice(prefixNum + cmd.length);
      }
      processed = true;
      console.log("%c Match command:", "color:#2eafb0", cmd);
      const param = text.slice(cmd.length).trim();
      const obj = command[cmd];
      if (obj.needConfirm) {
        confirm(obj, cmd, param);
        return;
      }
      command[cmd].method(param); // 执行对应命令
      showTipBox(cmd, 2000);
      if (cmd !== "继续") {
        lastCommand = {
          method: command[cmd].method,
          params: param,
        };
      }
      return; // 匹配成功后终止遍历
    }
  }
};

// 浏览器兼容性检测
if (!("webkitSpeechRecognition" in window)) {
  alert("当前浏览器不支持语音识别功能，请使用Chrome或Edge");
} else {
  const recognition = new webkitSpeechRecognition();
  let subtitle = null;

  if (location.hostname === "live.bilibili.com") {
    subtitle = new Subtitle();
    subtitle.generateSubtitle();
  }
  // 关键参数配置
  recognition.continuous = true; // 持续识别
  recognition.interimResults = true; // 返回中间结果
  recognition.lang = "zh-CN"; // 设置中文识别

  // 用于跟踪识别状态的标志
  let isRecognizing = false;
  let isActive = true;

  // 状态监听
  document.addEventListener("visibilitychange", () => {
    if (isBrowserTabActive()) {
      isActive = true;
      recognition.start();
    } else {
      recognition.stop();
      isActive = false;
    }
  });
  function dealText(fullText) {
    if (confirming) {
      confirmResult(fullText);
      return;
    }
    commandRecognition(fullText);
  }
  // 语音事件处理
  recognition.onresult = (event) => {
    if (!switchState) return;
    const results = event.results;
    let fullText = "";
    for (let i = event.resultIndex; i < results.length; i++) {
      fullText += results[i][0].transcript;
    }
    // console.log("%c Line:692 🍡 fullText", "color:#f5ce50", fullText);
    if (location.hostname === "live.bilibili.com") {
      if (!subtitle) {
        subtitle = new Subtitle();
      }
      subtitle.updateSubtitle(fullText);
    }
    const judgeList = ["搜索"];
    if (!processed) {
      for (let i = 0; i < judgeList.length; i++) {
        if (fullText.includes(judgeList[i])) {
          break;
        }
        if (i === judgeList.length - 1) {
          dealText(fullText);
        }
      }
    }
    if (!event.results[event.results.length - 1].isFinal) {
      return;
    }
    if (processed) {
      processed = false;
      return;
    }
    // console.log("🍖 ", "color:#465975", fullText, switchState);
    dealText(fullText);
  };

  recognition.onerror = (event) => {
    console.error("识别错误:", event.error);
    isRecognizing = false;
    setTimeout(() => {
      if (!isRecognizing && isActive) {
        recognition.start();
        isRecognizing = true;
      }
    }, 1000);
  };
  recognition.onend = () => {
    isRecognizing = false;
    if (confirming) {
      return;
    }
    setTimeout(() => {
      if (!isRecognizing && isActive) {
        recognition.start();
        isRecognizing = true;
      }
    }, 1000);
  };
  setTimeout(() => {
    if (isBrowserTabActive()) {
      recognition.start();
      console.log("语音助手已开启");
      isRecognizing = true;
    }
  }, 1000);
}

// 监听来自popup的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getText") {
    const text = document.body.innerText;
    sendResponse({ content: text });
  }
});

function isBrowserTabActive() {
  return document.visibilityState === "visible" && !document.hidden;
}
