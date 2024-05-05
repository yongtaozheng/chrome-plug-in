
(function () {
  const scriptUrlList = ["panel/dist/js/app.6e5e03c2.js","panel/dist/js/chunk-vendors.57d7c63b.js","script/html2canvas.js"];
  scriptUrlList.forEach(url=>{
      const s = document.createElement('script');
      s.src = chrome.runtime.getURL(url);
      s.setAttribute('type', 'text/javascript');
      s.onload = function() {
          this.remove();
      };
      (document.head || document.documentElement).appendChild(s);
  })
})()