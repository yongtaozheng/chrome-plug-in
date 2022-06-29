var showind = 0;
var localListData;

const getString = function(data){
	if(Array.isArray(data)) return data.join('');
	return data;
}
//自定义打印样式
function myConsole(str){
	console.log(
		`%c JYeontu %c ${str} %c`,
		'background:deepskyblue ; padding: 2px; border-radius: 3px 0 0 3px;  color: #fff',
		'background:pink ; padding: 2px; border-radius: 0 3px 3px 0;  color: #fff',
		'background:transparent'
	);
};
/**
 * 打开数据库
 * @param {object} dbName 数据库的名字
 * @param {string} storeName 仓库名称
 * @param {string} version 数据库的版本
 * @return {object} 该函数会返回一个数据库实例
 */
 function openDB(dbName,storeName, version = 1) {
    return new Promise((resolve, reject) => {
      //  兼容浏览器
      var indexedDB =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB;
      let db;
      // 打开数据库，若没有则会创建
      const request = indexedDB.open(dbName, version);
      // 数据库打开成功回调
      request.onsuccess = function (event) {
        db = event.target.result; // 数据库对象
        myConsole("数据库打开成功");
        resolve(db);
      };
      // 数据库打开失败的回调
      request.onerror = function (event) {
        myConsole("数据库打开报错");
      };
      // 数据库有更新时候的回调
      request.onupgradeneeded = function (event) {
        // 数据库创建或升级的时候会触发
        myConsole("onupgradeneeded");
        db = event.target.result; // 数据库对象
        var objectStore;
        // 创建存储库
        objectStore = db.createObjectStore(storeName, {
          keyPath: "id", // 这是主键
          // autoIncrement: true // 实现自增
        });
        // 创建索引，在后面查询数据的时候可以根据索引查
        objectStore.createIndex("link", "link", { unique: false }); 
        objectStore.createIndex("sequenceId", "sequenceId", { unique: false });
        objectStore.createIndex("messageType", "messageType", {
          unique: false,
        });
      };
    });
  }
  /**
 * 新增数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} data 数据
 */
function addData(db, storeName, data) {
    var request = db
      .transaction([storeName], "readwrite") // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
      .objectStore(storeName) // 仓库对象
      .add(data);
  
    request.onsuccess = function (event) {
		myConsole("数据写入成功");
    };
  
    request.onerror = function (event) {
		myConsole("数据写入失败");
    };
  }
  /**
 * 通过主键读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} key 主键值
 */
function getDataByKey(db, storeName, key) {
    return new Promise((resolve, reject) => {
      var transaction = db.transaction([storeName]); // 事务
      var objectStore = transaction.objectStore(storeName); // 仓库对象
      var request = objectStore.get(key); // 通过主键获取数据
  
      request.onerror = function (event) {
        myConsole("事务失败");
      };
  
      request.onsuccess = function (event) {
        // console.log("主键查询结果: ", request.result);
        resolve(request.result);
      };
    });
  }
/**
 * 更新数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} data 数据
 */
 function updateDB(db, storeName, data) {
    var request = db
      .transaction([storeName], "readwrite") // 事务对象
      .objectStore(storeName) // 仓库对象
      .put(data);
  
    request.onsuccess = function () {
    //   console.log("数据更新成功");
    };
  
    request.onerror = function () {
    //   console.log("数据更新失败");
    };
}

var db;
var dbName = "cursorImgDb",tableName = "cursorImgList";
let dbOpen = openDB(dbName,tableName);

function dbGet(key = 'localList'){
	getDataByKey(db, tableName, key).then(res => {
		console.log('%c 🦀 res: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', res);
		if(res == undefined){
			dbAdd([]);
			localListData = [];
		}else{
			localListData = res.data;
			changebg(1);
		}
	}).catch(err => {
		console.log("err",err);
	})
};
function dbUpdate(data,img = ''){
	updateDB(db, tableName, {
		id:'localList',
		data:data
	});
	localListData = data;
};
function dbAdd(data){
	addData(db, tableName, {
		id:'localList',
		data:data
	});
};
dbOpen.then(res => {
	db = res;
	dbGet();
}).catch(err => {
	console.log('err',err);
})
//-----------------数据库操作结束-------------------------------
//接受页面请求
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
		const action = request.action;
		switch(action){
			case 'change':
				changebg(0);
				sendResponse({state:'切换成功！'});
				break;
			case 'changeimg':
				changebg(1);
				sendResponse({state:'切换成功！'});
				break;
			case 'sendData':
				let rData = JSON.parse(request.data) || [];
				if(rData.length > 0 || request.doDelete){
					localListData = rData;
					dbUpdate(localListData);
				}
				const gdiv = document.getElementById('cursorLRArrow'),
					tImg = gdiv.style.backgroundImage.slice(5,-2);
				const flag = localListData.some(item => {
					return item == tImg;
				});
				if(localListData.length < 2 || !flag) changebg(1);
				sendResponse({state:JSON.stringify(localListData)});
				break;
			case 'showImg':
				showImg(request.data);
				sendResponse({state:false});
				break;
			case 'setShowImg':
				changebg('',request.data);
				break;
			default:
				break;
		}
    }
);
//生成随机数，随机切换图片
function randomNum(min,max){ 
    switch(arguments.length){ 
        case 1: 
            return Math.floor(Math.random()*minNum+1); 
        break; 
        case 2: 
            return Math.floor(Math.random()*(max-min+1)+min); 
        break; 
		default: 
			return 0; 
		break; 
    } 
} 
//切换图标
function changebg(ind,imgSrc = ''){
	const bgimg = getImgList();
	const num = randomNum(0,bgimg.length-1);
	const src = bgimg[num];
	const cursorLRArrow = document.getElementById('cursorLRArrow');
	cursorLRArrow.style.backgroundImage ="url("+(imgSrc || src)+")";
};

function generateCursor(){
	const gbody = document.getElementsByTagName('body')[0];
	const cursorLRArrow = document.getElementById('cursorLRArrow');
	cursorLRArrow && gbody.remove(cursorLRArrow);
	const span = document.createElement('span');
	span.setAttribute('style','display:none;position:absolute;z-index:9998;width:32px;height:32px;cursor:none;pointer-events:none;background-size: cover;background-repeat: no-repeat;');
	span.id = 'cursorLRArrow';
	gbody.append(span);
};

$(function(){
	$('body').mousemove(function(e){
		var x = e.pageX; //光标距文档左距
		var y = e.pageY; //光标距文档上距
		$(this).css('cursor','none'); 
		$('#cursorLRArrow').css({
			display:'inline-block',
			left:(x-15)+'px',
			top:(y-10)+'px'
		});
		$('#cursorLRArrow').show();
	})
});
//设置style
function tagConfingSet(el,config){
	for(let key in config){
		el.style[key] = config[key];
	}
	return el;
};
//页面初始化
function init(){
	generateCursor();
}

init();
changebg(1);

function getImgList(){
	const appendImgList = [];
	const localList = [
		...(localListData||[]),
		...appendImgList
	];
	return localList;
}