import { getloadeds, setloadeds } from "./util.js";
console.log('加载歌曲详情');

// 根据url path 获取id
let query = window.location.search.substring(1);
// 获取id
let id = query.split("=")[1];
console.log(id);



// 并判断数组长度是否大于id
let loadeds = getloadeds();
console.log('loaded-num',loadeds.length);
if (loadeds.length <= id) {
    alert('这首歌不存在', id);
    window.location.href = './list.html'
}

let loaded = loadeds[id];

console.log('要加载的歌曲', loaded);


// 渲染标签
document.getElementsByClassName('loaded-name')[0].innerHTML = loaded.loadedName;
document.getElementsByClassName('cover')[0].src = loaded.loadedCover;
document.getElementsByClassName('stage')[0].innerHTML = loaded.stage;
document.getElementsByClassName('publish-house')[0].innerHTML = loaded.publishHouse;
document.getElementsByClassName('difficult')[0].innerHTML = loaded.difficult;
document.getElementsByClassName('access')[0].innerHTML = loaded.access;
document.getElementsByClassName('tag')[0].innerHTML = loaded.tag;
document.getElementsByClassName('publihs-time')[0].innerHTML = loaded.publishTime;


document.getElementsByClassName('music-intro')[0].innerHTML = loaded.stageIntro;

let deleteBtn = document.getElementsByClassName('delete')[0]
deleteBtn.onclick = function () {
    // 判断用户有没有登录
    let a = localStorage.getItem('account')
    if (a === null || a === '' ) {
        alert('请先登录')
        return 
    }

    console.log('delete', id)
    let loadeds = getloadeds();
    loadeds.splice(id, 1);
    setloadeds(loadeds);
    alert('删除成功');
    window.location.href = './list.html';
}

let editorBtn = document.getElementsByClassName('editor')[0]
editorBtn.onclick = function () {

    // 判断用户有没有登录
    let a = localStorage.getItem('account')
    if (a === null || a === '' ) {
        alert('请先登录')
        return 
    }


    console.log('editor', id);
    // 页面跳转到更新的页面
    window.location.href = './editor.html?id=' + id;
}