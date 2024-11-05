
const scriptUrlList = ["panel/dist/js/app.3c856a35.js","panel/dist/js/chunk-vendors.34f0b59e.js","combinAllJs.js"];
scriptUrlList.forEach(url=>{
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL(url);
    s.setAttribute('type', 'text/javascript');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
})