let innerHtml = `
    <div style="margin-bottom:8px;text-align: center;font-size: large;">
        Chrome便捷助手
    </div>
    <div style="height:100%;padding: 16px 32px 16px 32px;font-size: 16px;">
        <input ${panelConfig.autocomplete ? 'autocomplete="off"' : '' } placeholder="按tab键可自动补全，输入关键字按回车" id="dialogSearchInput" class="dialogSearchInput" style="width:100%;line-height:48px;height:48px;"/>
        <div class="searchTip" style="word-break:break-all;width:100%;color:red;text-align:center;"></div>
        <div style="display:flex;margin-top:16px;" id="filter-project">
            <div style='${this.setStyle('','flex:4;display:flex;')}'>
                <span style="${this.setStyle('label','width:30%;')}">项目关键字</span>
                <input title="项目过滤" class="filterName" style='${this.setStyle('input','width:80%;')}' placeholder="保存默认过滤字段"/>
            </div>
            <span class="filterNameResetBtn" style='${this.setStyle('btn','flex:1;')}'>清空</span>
            <span class="filterNameSaveBtn" style='${this.setStyle('btn','flex:1;')}'>保存</span>
        </div>
        <div style="display:flex;margin-top:16px;">
            <div style='${this.setStyle('','flex:4;display:flex;')}'>
                <input title="屏幕1" class="splitUrl1" style='${this.setStyle('input','width:45%;')}' placeholder="屏幕1URL"/>
                <input title="屏幕2" class="splitUrl2" style='${this.setStyle('input','margin-left:5%;width:45%;')}' placeholder="屏幕2URL"/>
            </div>
            <span class="splitBoard" style='${this.setStyle('btn','flex:1;')}'>分屏</span>
        </div>
        <div style="display:flex;margin-top:16px;">
            <div style='${this.setStyle('','flex:4;display:flex;')}'>
                <input type="color" title="颜色" value="#ffffff" class="colorShow" style='${this.setStyle('input','width:45%;')}'/>
                <input type="text" title="颜色" value="#ffffff" class="colorText" style='${this.setStyle('input','margin-left:5%;width:45%;')}'/>
            </div>
            <span class="colorGet" style='${this.setStyle('btn','flex:1;')}'>颜色拾取</span>
        </div>

    </div>
    <div style="background-color: deepskyblue;display: flex;height:32px;font-size: 16px;">
        <div class="dialogDeleteBtn" title="取消" style="flex:1;text-align: center;cursor: pointer;line-height: 32px;border-right: 1px solid;">取消</div>
        <div class="dialogSetBtn" title="确认" style="flex:1;text-align: center;cursor: pointer;line-height: 32px;">确认</div>
    </div>
    `;

var panel = new Dialog(innerHtml,panelConfig);
let panelDom = document.getElementById(panel.dialogId);
viewsList["panel"] = panel;

let searchInput = panelDom.getElementsByClassName('dialogSearchInput')[0];
let searchTip = panelDom.getElementsByClassName('searchTip')[0];

panelDom.getElementsByClassName('dialogDeleteBtn')[0].onclick = ()=>{
    panel.close();
};
panelDom.getElementsByClassName('dialogSetBtn')[0].onclick = ()=>{
    panel.close();
};
panelDom.getElementsByClassName('colorGet')[0].onclick = ()=>{
    const eyeDropper = new EyeDropper();
    panel.close();
    const result = eyeDropper.open().then(res => {
        panel.open();
        panelDom.getElementsByClassName('colorShow')[0].value = res.sRGBHex;
        panelDom.getElementsByClassName('colorText')[0].value = res.sRGBHex;
    }).catch(err=>{
        panel.open();
    });
};
panelDom.getElementsByClassName('filterNameSaveBtn')[0].onclick = ()=>{
    const filterName = panelDom.getElementsByClassName('filterName')[0].value;
    filterByName(filterName);
    database.dbUpdate('filterName',filterName);
    alert("已保存");
};
panelDom.getElementsByClassName('filterNameResetBtn')[0].onclick = ()=>{
    panelDom.getElementsByClassName('filterName')[0].value = '';
};
panelDom.getElementsByClassName('splitBoard')[0].onclick = ()=>{
    let url1 = panelDom.getElementsByClassName('splitUrl1')[0].value;
    let url2 = panelDom.getElementsByClassName('splitUrl2')[0].value;
    if(url1 != '' && url2 != ''){
        document.write('<HTML><HEAD></HEAD><FRAMESET COLS=\'50%25,*\'><FRAME SRC=' + url1 + '><FRAME SRC=' + url2 + '></FRAMESET></HTML>');
    }
};
//获取当前快捷键跳转地址
searchInput.oninput = function(){
    let val = replaceSpace2One(searchInput.value.trim());
    if(openPenalKeys[val] != undefined) {
        searchTip.innerText = openPenalKeys[val];
        return;
    }
    let tip = '';
    let append = '本窗口打开:';
    if(val.length == 0) searchTip.innerText = searchConfig.baseUrl;
    else{
        val = val.split(' ');
    }
    if(val.length > 1){
        if(val[1].length > 0){
            append = "新窗口打开:";
        }
    }
    tip = searchConfig[val[0]] || "";
    if(tip !== "") tip = append + tip;
    searchTip.innerText = tip;
};

//页面过滤
function filterByName(filterName){
    document.getElementsByClassName('projects-list')[0].innerHTML = originDomList;
    filterName = filterName.split('、');
    let domList = document.getElementsByClassName('project-row');
    for(let i = 0;domList && i < domList.length; i++){
        const item = domList[i];
        const dom = item.getElementsByClassName('description');
        const text = dom[0].innerText;
        let flag = true;
        for(let j = 0; j < filterName.length; j++){
            const name = filterName[j];
            if(text.indexOf(name) != -1){
                flag = false;
                break;
            }
        }
        if(flag){
            item.remove();
            i--;
        }
    }
}

//数据库配置信息
const dbConfig = {
    dbName:'GitLabDb', 
    tableName:'GitLabTable'
};
var database = new DataBase(dbConfig);

//是否在gitlab中
if(window.location.href == searchConfig.baseUrl){
    document.getElementById('filter-project').style.display = 'flex';
    var originDomList = document.getElementsByClassName('projects-list')[0].innerHTML;
    let dbOpen = database.openDB(dbConfig.dbName,dbConfig.tableName);
    dbOpen.then(res => {
        database.setDb(res);
        initData();
    }).catch(err => {
        console.log('err',err);
    })
}else{
    document.getElementById('filter-project').style.display = 'none';
}
keyDown();

//初始化页面数据
function initData() {
    let filterName = database.dbGet('filterName');
    filterName.then(res=>{
        panelDom.getElementsByClassName('filterName')[0].value = res.data;
        filterByName(res.data);
    }).catch(err=>{
        console.log(err);
    })
}
//监听键盘事件
function keyDown(){
	panelDom.onkeydown = function(event){
		if(event.keyCode==9){//回车自动补全
            for(let key in {...searchConfig,...openPenalKeys}){
                if(key.length >= searchInput.value.length && searchInput.value == key.slice(0,searchInput.value.length)){
                    searchInput.value = key;
                    searchTip.innerText = '本窗口打开:' + searchConfig[key];
                }
            }
            return false;
        }else if(event.keyCode == 13){
            if(!panel.isHide && event.target.id=='dialogSearchInput'){
                dialogSearch(event.target.value);
            }
        }
	};
    $(document).keydown(function(event){
        if(event.keyCode == 27){
            for(let k in viewsList){
                viewsList[k].close();
            }
        }else{
            let panelName = isOpenKey(event);
            if(!panelName) return;
            openPanel(panelName);
		}

	});
}
function openPanel(panelName){
    if(panelName == 'panel'){
        if(panel.isHide) {
            panel.open();
            searchInput.focus();
            let url1 = panelDom.getElementsByClassName('splitUrl1')[0];
            let url2 = panelDom.getElementsByClassName('splitUrl2')[0];
            searchTip.innerText = '本窗口打开:' + searchConfig.baseUrl;
            url1.value = location.href;
            url2.value = location.href;
        }
        else panel.close();
    }else{
        if(viewsList[panelName].isHide) viewsList[panelName].open();
        else viewsList[panelName].close();
    }
};
//判断是否打开面板快捷键
function isOpenKey(e){
    for(let k in shortcutsKeys){
        let flag = 0;
        for(let key in shortcutsKeys[k].fastKeyCode){
            if(e[key] != shortcutsKeys[k].fastKeyCode[key]){
                break;
            }
            flag++;
        }
        if(flag == 4) return shortcutsKeys[k].penalName;
    }
    return false;
}
const targetMap = {
    解密:'secret',
    翻译:'translation'
};
function dialogSearch(para){
    para = para.trim().split(' ');
    let target = para[0];
    if(Object.keys(targetMap).includes(target)){
        for(let k in viewsList){
            if(k == targetMap[target]) viewsList[k].open();
            else viewsList[k].close();
        }
        return;
    }
    let type = "_self";
    if(para.length > 1 && para[1].length > 0) type = '_blank';
    if(target == '') target = 'baseUrl';
    let tar = searchConfig[target] || '';
    if(tar != ''){
        if(tar !== 'null') window.open(tar,type);
    }else{
        alert("未定义该关键字");
    }
}
