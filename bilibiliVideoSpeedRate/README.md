## 说在前面

> 最近在 B 站刷视频，发现 B 站的倍速选择最高只能 **2** 倍速，最低只能 **0.5** 倍速，默认提供的倍速选择不满足需求怎么办呢？既然不能让 B 站直接帮我们修改，那就只能我们自己写个插件来修改下了。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d247d760758f4b87bdf4df71c428fcbf~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=Er0ovprbwO41K8TAlI1xsDV0Az4%3D)

## 效果展示

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/351dc61b260c44278dd1a1543e52c68a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=wdjFDBs4ng4X5%2Fy%2B1ZWzZWUdvYw%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d4f9f2dc6c174b25a0d555290bd2b7a8~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=8KKx6RhvPOSsEHTR0LZXJ3wfizs%3D)

## 插件使用

### 1、插件下载

下载地址：[https://gitee.com/zheng_yongtao/chrome-plug-in/blob/master/bilibiliVideoSpeedRate/dist.zip](https://gitee.com/zheng_yongtao/chrome-plug-in/blob/master/bilibiliVideoSpeedRate/dist.zip)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/abd12d93063541a2809065b766a1ab48~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=mZ%2FqNF31wKohfBkocNPyNHJwsoY%3D)

直接点击下载，下载 **dist.zip** 压缩包。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/88854a8414974d0fb7897b8e912fd36d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=Y1CBkBSvKTWm%2BjoTwb2g0jvM4So%3D)

**下载的时候方便的话可以顺便给我点个小星星 🥰🥰🥰**

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8f6d4e39658247f39e37fd9e691c6703~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=zpjLVxhMZ%2B02wpjCIkoVfTeExXk%3D)

### 2、解压压缩包

将下载好的 **dist.zip** 压缩包解压

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d04c8f24aabe488c8134741b78e06db8~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=mRxYmaiZUiFvWiLZuRDmG0PebAE%3D)

### 3、加载插件到 chrome

打开 chrome 扩展程序面板 [chrome://extensions/](chrome://extensions/)，点击 **加载已解压的扩展程序**

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/799463ed4b3741bab49a6537002bff71~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=IdywlPP3MA3iDaZeG8dt4YFwzJA%3D)

选择刚刚解压的好的 **dist** 目录即可

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1ddcf86eb9f5466e8ef2599d81c350a3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=VLRn4fia8FPrL2G9wrZdbYGQric%3D)

### 4、插件固定显示

将插件固定显示在插件栏上。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e482edc96a26459dbbae8749b9e633d2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=UZJ%2B7s4t2OZCqir7PBreb9mF2nk%3D)

### 5、倍速设置

打开设置面板，输入需要的倍速，多个用 **、** 隔开，点击确定即可。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6888480fc71f457ca99a7c5d8f4d1314~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=dwSbtsqFVuLSE6uLpQMucsUq4YA%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2d94b5a03a0946d5b828e13f6deda23d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=Xz5Gwo3MmRNzK96Xpdhs9LmMYlg%3D)

修改成功后再看一下倍速列表，倍速就已经是自己设置的倍速了，可以选择自己喜欢的倍速来观看视频。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/ed082dd3a71d4b24934da94b7b2bda2a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=lJhtsj7zIXP2t30eWfpDhC4jljE%3D)

## 插件源码

### Gitee

该插件已开源到 gitee，有兴趣的也可以到这里看看：[https://gitee.com/zheng_yongtao/chrome-plug-in/tree/master/bilibiliVideoSpeedRate](https://gitee.com/zheng_yongtao/chrome-plug-in/tree/master/bilibiliVideoSpeedRate)

---

**🌟 觉得有帮助的可以点个 star\~**

**🖊 有什么问题或错误可以指出，欢迎 pr\~**

**📬 有什么想要实现的组件或想法可以联系我\~**

---

### 公众号

关注公众号『`前端也能这么有趣`』，发送 **chrome 插件** ，即可获取插件源码地址。

目前也新建了一个 wx 群，公众号发送 **加群** 即可加入群聊，一起讨论学习。

> 看到这里，插件的使用效果和使用方法大家都知道了吧，**如果对插件的实现原理感兴趣的话，可以继续往下看**，不感兴趣的同学可以直接下载插件体验试试，欢迎反馈交流，后续会继续扩展更多有趣插件功能。

## 插件实现

### 1、快速生成插件模版

可以通过`jyeontu`脚手架快速生成一个插件模版，没安装的需要先安装下。

```shell
npm install -g jyeontu
```

通过命令生成浏览器插件模版。

```shell
jyeontu create
```

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/ca5db01e662a44f9a8a77e32bfc99e6b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=4lRxio6Kue9Psi8sadGlbI3QjpM%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/92d1d2ee63a9417c83f5e6185cbacf30~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=M4QHxHgh3TKle53lWCWCBQ6yuyE%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b5a2a0ea5a02464cb2d8e9a21c8dae43~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=RqsygQ7r0PGzr1r8eq9MxrUUIfs%3D)

### 2、项目初始化

等待安装所需依赖

```shell
cd bilibiliVideoSpeedRate
npm run init
```

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f5877d300f614cc3b6ad9c651fdc05c3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=ZB4Zf6FmZUwhJJETeEVPI4tH7xg%3D)

### 3、弹窗页面编写

在插件栏点击图标后会弹出一个弹窗

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d0ca62489d314e67953f78aa15a71e13~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=sgb3BFuzw6TF8HXFawm7X1R6F3A%3D)

#### （1）弹窗目录

我们生成的插件模板目录中有一个 **popup** 目录，这个目录为一个`vue`项目，弹窗页面在这个项目里编写即可。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/15dbf240256c42abaad994ec9c296050~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=iW5jxMheMmoSHbZ5swOOFPs8PMM%3D)

#### （2）弹窗页面调试

调试弹窗页面，我们只需要直接运行该项目,当成一个独立的 **vue** 项目进行调休开发即可

```shell
cd popup
npm run serve
```

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/90d2e0e5ea83491fbca5948e41eefbe2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=8nytqPlA9juMiRpibZ2VW81tcsg%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a55b770d625d4bb09798caa32cc71844~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=Tu9IUr95gLuutsM87vhcQP2Ao6o%3D)

#### （3）倍率列表修改

修改完倍率列表，我们需要点击确定按钮将最新的倍率列表发送给 **bilibili** 标签页进行修改。

```html
<textarea v-model="speedRateList" class="textarea-content"></textarea>
<button @click="sendData" class="button">确定</button>
```

```javascript
import { sendMessage } from "../../utils/chrome.js";

sendData() {
  localStorage.setItem("bilibiliVideoSpeedRateList", this.speedRateList);
  sendMessage({
    action: "setSpeedList",
    data: this.speedRateList,
  });
},
```

生成的插件模板中已经写好了 **sendMessage** 方法，直接调用该方法发送消息即可。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/4e1d42cbd89e470ba55ed9876e3ce05c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=km3s2UFRZSOOsBvWBgU6ZPHX%2BJY%3D)

### 4、脚本编写

编写好了一个简单的弹窗配置页面之后，我们就可以开始写脚本了。

#### （1）脚本目录

我们直接在 **bg.js** 中编写脚本即可

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/69f519971aa347adbcc2580b548a7b49~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=G0OmnUOUj0QiEhy%2Fk9RelmpmXWc%3D)

#### （2）接收配置消息

前面我们在配置面板修改配置的时候，点击确认后会发送消息到标签页，标签页也需要接收消息。

```javascript
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const { action, data } = request;
  sendResponse({ state: "视频倍速列表已更新" });
  if (action === "setSpeedList") {
    changSpeedRateList(data.split("、"));
  }
});
```

- **chrome.runtime.onMessage.addListener** 是 **Chrome** 扩展开发中一个非常重要的 **API** 方法，用于注册一个消息监听器。它接受一个回调函数作为参数，每当有其他部分（比如扩展的不同脚本之间或者内容脚本与后台脚本之间等）通过 **chrome.runtime.sendMessage** 或者 **chrome.tabs.sendMessage** 等方式发送消息时，这个注册的回调函数就会被触发执行。
- 回调函数接收三个参数：
  - **request**：代表接收到的消息内容，通常是一个对象，包含了发送方传递过来的各种数据和指令等信息。
  - **sender**：表示消息的发送方相关信息，比如发送消息的脚本所在的标签页、扩展 **ID** 等，通过这个对象可以了解消息的来源情况。
  - **sendResponse**：这是一个用于回复消息的函数，调用它并传入一个对象作为参数，就可以将响应消息发送回给发送方，让发送方能够获取到相应的反馈信息。

#### （3）视频倍速列表修改

- b 站视频页面分析

直接打开 **F12**，可以找到视频元素和倍速列表元素

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/29dcb83723ea46e8a127e08013a85441~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=%2F2q8RmfUgjqiXjWCXaM%2FDL1g6ok%3D)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/3e903069cc3a4bf88066f883fc4cbfe9~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=JaMq8QdPtTiZS3YnNA63J9D3%2Fbk%3D)

可以获取到两个元素的 **selector**

```javascript
const videoDomSelector =
  "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-video-perch > div > video";
const speedListSelector =
  "#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-control-wrap > div.bpx-player-control-entity > div.bpx-player-control-bottom > div.bpx-player-control-bottom-right > div.bpx-player-ctrl-btn.bpx-player-ctrl-playbackrate > ul";
const videoDom = document.querySelector(videoDomSelector);
const speedListDom = document.querySelector(speedListSelector);
```

- 倍速列表内容替换

我们需要用我们设置的倍速列表将原有的倍速列表替换掉，点击倍速的时候直接修改 **video** 元素的 **playbackRate** 即可修改视频的倍速。

```javascript
if (!mySpeedList) {
  const defaultList = [0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4, 5, 16];
  const storageList = localStorage.getItem("bilibiliVideoSpeedRateList");
  if (storageList) {
    mySpeedList = JSON.parse(storageList);
  } else {
    mySpeedList = defaultList;
  }
}
localStorage.setItem("bilibiliVideoSpeedRateList", JSON.stringify(mySpeedList));
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
```

### 5、打包插件

```shell
npm run build
```

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/864dd65e6b56485ea3bdaca00fb520ae~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=VVJsH915QvNue8OWSdYAiEe0WaQ%3D)

- 打包完成后会生成一个 dist 文件

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d23ff986cbc04a5f9a53baeffde17b44~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=BHQkTOh2S4jVxjpEWhVhlnNFizs%3D)

- 将生成的 dist 文件夹加载进浏览器即可。

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/ecbc885c16ca4f55b8a41320c90ae0a2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSlllb250dQ==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDQwMjQ0MjkwNzI3Mjk0In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735055692&x-orig-sign=11yeCqIRGU3OKRenGtend1Rwimc%3D)

## 公众号

关注公众号『`前端也能这么有趣`』，获取更多有趣内容。

公众号发送 **加群** 即可加入群聊，一起讨论学习。

## 说在后面

> 🎉 这里是 JYeontu，现在是一名前端工程师，有空会刷刷算法题，平时喜欢打羽毛球 🏸 ，平时也喜欢写些东西，既为自己记录 📋，也希望可以对大家有那么一丢丢的帮助，写的不好望多多谅解 🙇，写错的地方望指出，定会认真改进 😊，偶尔也会在自己的公众号『`前端也能这么有趣`』发一些比较有趣的文章，有兴趣的也可以关注下。在此谢谢大家的支持，我们下文再见 🙌。
