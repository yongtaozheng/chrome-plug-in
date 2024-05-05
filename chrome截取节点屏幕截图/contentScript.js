
const scriptUrlList = ["panel/dist/js/app.858dd3de.js","panel/dist/js/chunk-vendors.2c9262e0.js","combinAllJs.js"];
scriptUrlList.forEach(url=>{
    const s = document.createElement('script');
    s.src = chrome.runtime.getURL(url);
    s.setAttribute('type', 'text/javascript');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
})