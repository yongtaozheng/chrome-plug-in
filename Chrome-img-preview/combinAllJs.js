function obj2Style(e){var t=[];for(const i in e)t.push(i+":"+e[i]);return t.join(";")}function addBtn(e,t,i,n=document,s=!1,o={cursor:"pointer",color:"#068ec5","margin-left":"2em",border:"solid 1px",padding:"0.2em","border-radius":"0.5em"}){let a=e;(a="string"==typeof a?n.querySelector(e):a)&&!a.getElementsByClassName(t).length&&((e=n.createElement("span")).id=t,e.classList.add(t),n=obj2Style(o),e.style=n,e.innerText=t,e.onclick=i,s?a.parentNode.insertBefore(e,a):a.appendChild(e))}function getUrlParams(){let e=location.href.split("?");if(e.length<2)return{};var t={};for(const n of e=e[1].split("&")){var i=n.split("=");t[i[0]]=i[1]}return t}function getUrl(e,t){var i=[];for(const n in t)i.push(n+"="+t[n]);return e+"?"+i.join("&")}function getInnerText(e,t=document){t=t.querySelector(e);return t?t.innerText:""}function domObserver(e,t){new MutationObserver(function(e){e.forEach(function(e){"childList"===e.type&&0<e.addedNodes.length&&t&&t()})}).observe(e,{childList:!0})}if(!window.DialogJY){class E{constructor(e={}){this.options=e,this.el=document.createElement("div"),this.el.className="dialogJY-modal",this.el.setAttribute("aria-hidden","true"),this.init()}init(){var{title:e,content:t,okText:i,cancelText:n}=this.options,s=document.createElement("div"),o=(s.className="dialogJY-modal-dialog",document.createElement("div")),a=(o.className="dialogJY-modal-header",document.createElement("h2")),e=(a.className="dialogJY-modal-title",a.textContent=e||"Modal Title",document.createElement("button")),e=(e.className="dialogJY-close-button",e.textContent="×",e.onclick=this.close.bind(this),o.appendChild(e),o.appendChild(a),document.createElement("div")),a=(e.className="dialogJY-modal-body","string"==typeof t?e.textContent=t:e.append(t),document.createElement("div")),t=(a.className="dialogJY-modal-actions",document.createElement("button")),i=(t.className="dialogJY-button",t.textContent=i||"OK",t.onclick=()=>{this.close(),this.options.onOk&&this.options.onOk()},document.createElement("button"));i.className="dialogJY-button",i.textContent=n||"Cancel",i.onclick=this.close.bind(this),a.appendChild(i),a.appendChild(t),s.appendChild(o),s.appendChild(e),s.appendChild(a),this.el.appendChild(s),document.body.appendChild(this.el)}close(){this.el.setAttribute("aria-hidden","true")}open(){this.el.removeAttribute("aria-hidden")}}window.DialogJY=E,window.dialogJY=new E}if(!window.ExpandJY){class S{constructor(e={}){this.config=e,this.isOpen=!0,this.init()}init(){}obj2Style(e){var t=[];for(const i in e)t.push(i+":"+e[i]);return t.join(";")}generateBtn(e,t,i={margin:"auto",cursor:"pointer",color:"#5598EF","text-decoration":"underline"}){var n=document.createElement("span");return n.style=this.obj2Style(i),n.innerText=e,n.onclick=t,n}generate(e=this.config){var t=document.createElement("div"),i=(t.classList.add("ExpandJY"),this.generateHeader(e)),e=this.generateBody(e);return t.appendChild(i),t.appendChild(e),t}generateHeader(e=this.config){var t=document.createElement("div");t.classList.add("ExpandJYHeader"),t.style=this.obj2Style({display:"flex",width:"100%","border-bottom":"1px solid #e5dada"});let i=e.title||"标题";"string"==typeof i&&((s=document.createElement("div")).innerText=i,i=s),i.style.padding="10px 0",i.style.margin="0 10px",i.style.flex=1;var n=document.createElement("div"),s=this.generateBtn(this.isOpen?"收起":"展开",()=>{this.isOpenChange()}),s=(this.expandBtn=s,n.style=this.obj2Style({display:"flex",padding:"10px"}),n.append(s),e.btns||[]);for(const a of s){var o=this.generateBtn(a.text,a.cb,a.styleObj);n.append(o)}return t.appendChild(i),t.appendChild(n),t}generateBody(e=this.config){var t=document.createElement("div");t.classList.add("ExpandJYBody");let i=e.body||"容器";return"string"==typeof i&&((e=document.createElement("div")).innerText=i,i=e),t.appendChild(i),this.body=t}isOpenChange(){this.isOpen=!this.isOpen,this.expandBtn.innerText=this.isOpen?"收起":"展开",this.body.style.display=this.isOpen?"block":"none"}}window.ExpandJY=S,window.expandJY=new S}if(!window.ImagePreviewJY){class qa{constructor(){this.init()}init(){var e=document.getElementById("menuNav")||{},t=document.getElementById("appsBar")||{},e=e.offsetWidth||0,t=t.offsetHeight||0,e=(this.overlay=document.createElement("div"),this.overlay.style.cssText="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); display: none; z-index: 1000; overflow: hidden;",this.closeButton=document.createElement("button"),this.closeButton.innerHTML="&times;",this.closeButton.style.cssText="position: fixed; top: 20px; right: 20px; width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.8); z-index: 1002; border: none; cursor: pointer;font-size: 36px;line-height: 40px;color: #fff;opacity: 0.8;",this.closeButton.onclick=this.close.bind(this),this.overlay.appendChild(this.closeButton),this.image=document.createElement("img"),this.image.style.cssText=`background: #fff;position: fixed; top: 50%; left: calc(50% + ${e/2}px); transform: translate(-50%, -50%) scale(1); max-width:calc(100% - ${e+30}px); max-height: 100%; z-index: 1001; cursor: grab;`,this.image.onload=()=>{this.image.style.cursor="grabbing"},this.image.addEventListener("drag",e=>{e.preventDefault()}),this.image.addEventListener("dragstart",e=>{e.preventDefault()}),this.image.addEventListener("click",e=>{e.stopPropagation()}),this.overlay.appendChild(this.image),this.images=[],this.currentImageIndex=0,this.prevButton=document.createElement("button"),this.prevButton.innerHTML="&#10094;",this.prevButton.style.cssText=`position: fixed; top: 50%; left: ${e+10}px; z-index: 1002; cursor: pointer;height: 50px;font-size: 20px;`,this.prevButton.addEventListener("click",e=>{e.stopPropagation(),this.switchImage(-1)}),this.overlay.appendChild(this.prevButton),this.nextButton=document.createElement("button"),this.nextButton.innerHTML="&#10095;",this.nextButton.style.cssText="position: fixed; top: 50%; right: 10px; z-index: 1002; cursor: pointer;height: 50px;font-size: 20px;",this.nextButton.addEventListener("click",e=>{e.stopPropagation(),this.switchImage(1)}),this.overlay.appendChild(this.nextButton),this.imgIndexText=document.createElement("div"),this.imgIndexText.style.cssText=`position: fixed; bottom: ${t+10}px; left: 50%; z-index: 1002; cursor: pointer;color:#fff;background: rgba(0, 0, 0, 0.8);padding: 5px 10px;border-radius: 5px;font-size: 15px;opacity: 0.8;`,this.overlay.appendChild(this.imgIndexText),this.scale=1,this.scrollOffsetX=0,this.scrollOffsetY=0,this.lastWheelEventTime=0,this.wheelEventInterval=50,this.overlay.id="imagePreviewJY",document.getElementById("imagePreviewJY"));e&&e.parentNode.removeChild(e),document.body.appendChild(this.overlay)}show(e,t=0){this.currentImageIndex=t,this.images=e,this.displayImage(this.currentImageIndex),this.overlay.style.display="block",this.overlay.addEventListener("click",this.close.bind(this)),this.overlay.addEventListener("wheel",this.handleWheel.bind(this)),this.image.addEventListener("mousedown",this.handleDragStart.bind(this)),document.addEventListener("mousemove",this.handleDrag.bind(this)),document.addEventListener("mouseup",this.handleDragEnd.bind(this))}handleWheel(e){var t;e.preventDefault(),0===e.deltaY||(t=(new Date).getTime())-this.lastWheelEventTime<this.wheelEventInterval||(this.lastWheelEventTime=t,this.scale+=e.deltaY<0?.1:-.1,this.scale=Math.max(.1,Math.min(this.scale,5)),t=this.image.style.transform.replace(/scale\((\d+(?:\.\d+)?)\)/g,`scale(${this.scale})`),this.image.style.transform=t)}handleDragStart(e){this.isDragging=!0,this.startX=e.clientX,this.startY=e.clientY,this.startScrollOffsetX=this.scrollOffsetX,this.startScrollOffsetY=this.scrollOffsetY}handleDrag(e){var t;this.isDragging&&(t=e.clientX-this.startX,e=e.clientY-this.startY,this.scrollOffsetX=this.startScrollOffsetX+t,this.scrollOffsetY=this.startScrollOffsetY+e,this.image.style.transform=`translate(-50%, -50%) scale(${this.scale}) translate(${this.scrollOffsetX}px, ${this.scrollOffsetY}px)`)}handleDragEnd(){this.isDragging=!1}switchImage(e){e=this.currentImageIndex+e;this.displayImage((e+this.images.length)%this.images.length)}displayImage(e){e<0||e>=this.images.length||(this.currentImageIndex=e,this.image.src=this.images[e],this.scale=1,this.scrollOffsetX=0,this.scrollOffsetY=0,this.image.style.transform="translate(-50%, -50%) scale(1)",this.image.style.cursor="zoom-in",this.imgIndexText.innerText=e+1+"/"+this.images.length)}close(){this.overlay.style.display="none",this.image.src="",this.scale=1,this.scrollOffsetX=0,this.scrollOffsetY=0,this.image.style.transform="translate(-50%, -50%) scale(1)",this.image.style.cursor="zoom-in",this.isDragging=!1}}window.ImagePreviewJY=qa,window.imagePreviewJY=new qa}if(!window.ToastJY){class Oa{constructor(e={}){this.config=e,this.pDom=null,this.init(e.pDom)}init(e=null){let t=document.body;e&&(t=e),this.pDom=t;var i=document.createElement("div"),n=(i.id="toastContainer",{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.8)",color:"#ffffff",fontSize:"16px",opacity:.7,transition:"opacity 0.3s ease-in-out",padding:"10px","border-radius":"5px",display:"none",textAlign:"center"});for(const l in n)i.style[l]=n[l];t.appendChild(i);var s=document.createElement("div"),o=(s.id="toastLoader",{border:"4px solid #f3f3f3",borderTop:"4px solid #3498db",borderRadius:"50%",width:"20px",height:"20px",animation:"spin 1s linear infinite",margin:"0 auto 10px",display:"none"});for(const d in o)s.style[d]=o[d];i.appendChild(s);var a=document.createElement("div"),r=(a.id="toastText",{marginTop:"5px"});for(const h in r)a.style[h]=r[h];i.appendChild(a);e=document.createElement("style");e.innerHTML=`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `,document.head.appendChild(e)}showToast(e){this.pDom.querySelector("#toastText").innerText=e,this.show(),setTimeout(()=>this.hide(),3e3)}showLoading(e="加载中..."){var t=this.pDom.querySelector("#toastLoader");this.pDom.querySelector("#toastText").innerText=e,t.style.display="block",this.show()}show(){this.pDom.querySelector("#toastContainer").style.display="block"}hide(){try{var e=document.querySelector("#toastContainer"),t=document.querySelector("#toastLoader");e.style.display="none",t.style.display="none"}catch(e){}}}window.ToastJY=Oa,window.toastJY=new Oa}(()=>{try{var e=document.querySelectorAll("img");const n=[];for(let t=0;t<e.length;t++){var i=e[t];n.push(i.src),i.addEventListener("click",e=>{event.stopPropagation(),imagePreviewJY.show(n,t)})}}catch(e){console.log("err:",e)}})();