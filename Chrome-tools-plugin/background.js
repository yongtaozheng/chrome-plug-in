chrome.contextMenus.create({
    id: 'baidu-search',
    title: '使用度娘搜索：%s',
    contexts: ['selection'],
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    alert('onClicked',info);
    switch(info.menuItemId){
        case 'baidu-search':
            chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText)});
            break;
        case 'getTree':
            getTree();
    }
});
const options = {
    type: 'normal',
    id: 'getTree',
    title: '获取书签',
    visible: true,
}
function getTree(){
    chrome.bookmarks.getTree(function(bookmarkArray){
        alert('bookmarkArray',bookmarkArray);
    });
}
chrome.contextMenus.create(options, () => {
    // alert(`Created Success, id:${options.id}`);
});