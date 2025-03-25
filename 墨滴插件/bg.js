let originMenuList = [];
const addBtn = () => {
  const btnBox = document.querySelector("#nice-sidebar");
  const svg = `<svg t="1730880340340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4296" width="16" height="16"><path d="M106.666667 192a21.333333 21.333333 0 1 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 0-42.666667H106.666667z m0 298.666667a21.333333 21.333333 0 0 0 0 42.666666h85.333333a21.333333 21.333333 0 0 0 0-42.666666H106.666667z m0 298.666666a21.333333 21.333333 0 0 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 0-42.666667H106.666667zM320 192a21.333333 21.333333 0 0 0 0 42.666667h597.333333a21.333333 21.333333 0 0 0 0-42.666667H320z m0 298.666667a21.333333 21.333333 0 0 0 0 42.666666h597.333333a21.333333 21.333333 0 0 0 0-42.666666H320z m0 298.666666a21.333333 21.333333 0 0 0 0 42.666667h597.333333a21.333333 21.333333 0 0 0 0-42.666667H320z" fill="#1196db" p-id="4297"></path></svg>`;
  const menuBtn = document.createElement("a");
  menuBtn.id = "nice-sidebar-menu-type";
  menuBtn.classList.add("nice-btn-previewtype");
  menuBtn.innerHTML = svg;
  menuBtn.title = "查看目录";
  menuBtn.addEventListener("click", () => {
    const mdniceMenu = document.querySelector("#mdniceMenu");
    if (!mdniceMenu) return;
    const display = mdniceMenu.style.display;
    mdniceMenu.style.display = display === "none" ? "block" : "none";
  });
  btnBox.appendChild(menuBtn);
};

const getMenuItem = () => {
  const tmp = document.querySelector("#nice-rich-text-box");
  const titleTag = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const menuList = [];
  titleTag.forEach((item) => {
    const list = tmp.querySelectorAll(item);
    menuList.push(...list);
  });
  return menuList.sort((a, b) => {
    return a.offsetTop - b.offsetTop;
  });
};

const addMenuPanel = () => {
  const btnBox = document.querySelector("#nice-sidebar");
  const menuBtn = document.querySelector("#nice-sidebar-menu-type");
  const menuBox = document.createElement("div");
  menuBox.id = "mdniceMenu";
  menuBox.style.position = "fixed";
  menuBox.style.right = btnBox.offsetWidth + "px";
  // menuBox.style.top = menuBtn.offsetTop + btnBox.offsetTop + "px";
  menuBox.style.top = btnBox.offsetTop + "px";
  menuBox.style.background = "#c4dde9";
  menuBox.style.opacity = "0.7";
  menuBox.style.padding = "1em 0.5em";
  menuBox.style.lineHeight = "1.5em";
  menuBox.style.borderRadius = "1em";
  // menuBox.style.height = "20em";
  menuBox.style.height = `calc(100% - ${btnBox.offsetTop}px)`;
  menuBox.style.overflow = "scroll";
  menuBox.style.color = "#0335f3";
  menuBox.style.display = "none";
  menuBox.style.width = "15em";
  menuBox.style.wordBreak = "break-all";
  document.body.appendChild(menuBox);
  updateMenu();
};

const updateMenu = () => {
  const mdniceMenu = document.querySelector("#mdniceMenu");
  if (!mdniceMenu) return;
  const menuList = getMenuItem();
  const lastMenuList = originMenuList.join("");
  originMenuList = [];
  menuList.forEach((item) => {
    originMenuList.push(item.nodeName + item.innerText);
  });
  if (lastMenuList === originMenuList.join("")) return;
  mdniceMenu.innerHTML = "";
  const minNumber = Math.min(
    ...menuList.map((item) => {
      return item.nodeName.slice(1);
    })
  );
  menuList.forEach((item) => {
    const div = document.createElement("div");
    div.style.paddingLeft = item.nodeName.slice(1) - minNumber + "em";
    div.innerText = item.innerText;
    div.style.cursor = "pointer";
    div.addEventListener("click", () => {
      const tmp = document.querySelector("#nice-rich-text-box");
      tmp.scroll(0, item.offsetTop);
    });
    div.addEventListener("mousemove", () => {
      div.style.textDecoration = "underline";
      div.style.backgroundColor = "#f0f0f0";
    });
    div.addEventListener("mouseleave", () => {
      div.style.textDecoration = "none";
      div.style.backgroundColor = "#c4dde9";
    });
    mdniceMenu.appendChild(div);
  });
};

const run = () => {
  addBtn();
  addMenuPanel();
};

setTimeout(() => {
  run();
  setInterval(() => {
    updateMenu();
  }, 2000);
}, 100);
