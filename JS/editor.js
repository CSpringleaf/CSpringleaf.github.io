//增删改查
import { getloadeds, setloadeds } from "./util.js";
console.log('加载歌曲详情');



// 根据url path 获取id
let query = window.location.search.substring(1);
// 获取id
let id = query.split("=")[1];
console.log(id);

let loadeds = getloadeds();
let loaded = loadeds[id];

console.log('原始数据', loaded);


// 渲染页面
let ul = document.getElementsByClassName('loaded-form')[0]
let div1 = `<h1 class="header-title">编辑内容</h1>
                    <span class="hint">歌曲名称</span>
                    <input class="input loaded-name" type="text" value="浴室RIMX">
                    <span class="hint">演出图片</span>
                    <input class="input loaded-cover" type="text" value="./image/浴室.jpg">
                    <span class="hint">演出场合</span>
                    <input class="input stage" type="text" value="经济学院迎新">
                    <span class="hint">歌曲简介</span>
                    <textarea class="input music-intro" rows="3"></textarea>

                    <span class="hint">
                        演出地点
                    </span>
                    <input class="input publish-house" type="text" value="学活剧院">
                    <span class="hint">
                        作品发布时间
                    </span>
                    <input class="input publish-time" type="text" value="2022-11"> 

                    <span class="hint">音乐类型</span>
                    <select class="input tag" name="cars">
                        <option value="saab">mix</option>
                        <option value="fiat">流行</option>
                        <option value="audi">摇滚</option>
                        <option value="audi">电子</option>
                        <option value="audi">rnb</option>
                        <option value="audi">爵士</option>
                        <option value="audi">rap</option>
                        <option value="audi">民谣</option>
                    </select>

                    <span class="hint"> 演唱难度:</span>
                    <select class="input difficult" name="cars">
                        <option value="saab">轻松驾驭</option>
                        <option value="audi">正好合适</option>
                        <option value="audi">有挑战性</option>
                        <option value="audi">要么天堂要么地狱</option>
                    </select>
                    <span class="hint">满意程度</span>
                    <select class="input access" id="accesss" name="cars">
                        <option value="saab">perfect</option>
                        <option value="fiat">挺好的</option>
                        <option value="audi">凑合吧</option>
                        <option value="audi">挺多瑕疵</option>
                        <option value="audi">唱了个什么玩意</option>
                    </select>

                    <span class="hint">他人评价</span>
                    <select class="input material-type" name="cars">
                        <option value="saab">震撼</option>
                        <option value="fiat">乐感和技巧完全发挥</option>
                        <option value="audi">好听且动人</option>
                        <option value="audi">悦耳</option>
                        <option value="audi">有点尬</option>
                    </select>
                    
                    <p style="margin-top: 30px;">
                        <span class="hint">伴奏乐器:</span>
                            <form>
                                <input type="checkbox" name="area" value="AG" style="margin-left: 20px;">木吉他
                                <input type="checkbox" name="area" value="EG">电吉他
                                <input type="checkbox" name="area" value="Piano">键盘
                                <input type="checkbox" name="area" value="Drum">架子鼓
                                <input type="checkbox" name="area" value="Base">贝斯
                                <input type="checkbox" name="area" value="String">弦乐组
                            </form>
                    </p>
                    
                    <p style="width: 539.180px;">
                    <span class="hint">作品来源：</span>
                    <input type="radio" name="resource">原创
                    <input type="radio" name="resource " style="margin-left: 95px;">转载
                    </p>`

ul.innerHTML += div1

// 修改textarea
document.getElementsByClassName('music-intro')[0].value = loaded.stageIntro


// 修改select
let index = 0;
let tag = document.getElementsByClassName('tag')[0];
// console.log(tag.options);
for (let i = 0; i < tag.options.length; i++) {
    if (tag.options[i].text === loaded.tag) {
        index = i;
    }
}

// console.log('tag index', index);
tag.selectedIndex = index;

index = 0;
let access = document.getElementsByClassName('access')[0];
for (let i = 0; i < access.options.length; i++) {
    if (access.options[i].text === loaded.access) {
        index = i;
    }
}

access.selectedIndex = index;



index = 0;
let difficult = document.getElementsByClassName('difficult')[0];
for (let i = 0; i < difficult.options.length; i++) {
    if (difficult.options[i].text === loaded.difficult) {
        index = i;
    }
}

difficult.selectedIndex = index;



index = 0;
let materialType = document.getElementsByClassName('material-type')[0];
for (let i = 0; i < materialType.options.length; i++) {
    if (materialType.options[i].text === loaded.materialType) {
        index = i;
    }
}

materialType.selectedIndex = index;







// 提交表单
let sumbitBtn = document.getElementsByClassName('submit')[0]
sumbitBtn.onclick = function () {
    // 判断用户有没有登录
    let a = localStorage.getItem('account')
    if (a === null || a === '' ) {
        alert('请先登录')
        return 
    }


    // 设置表单数据
    let formData = {
        loadedName: document.getElementsByClassName('loaded-name')[0].value,
        loadedCover: document.getElementsByClassName('loaded-cover')[0].value,
        stage: document.getElementsByClassName('stage')[0].value,
        stageIntro: document.getElementsByClassName('music-intro')[0].value,
        publishHouse: document.getElementsByClassName('publish-house')[0].value,
        publishTime: document.getElementsByClassName('publish-time')[0].value,

    }; 


    let tag = document.getElementsByClassName('tag')[0];
    formData.tag = tag.options[tag.selectedIndex].text;

    let access = document.getElementsByClassName('access')[0];
    formData.access = access.options[access.selectedIndex].text;

    let difficult = document.getElementsByClassName('difficult')[0];
    formData.difficult = difficult.options[difficult.selectedIndex].text;

    let materialType = document.getElementsByClassName('material-type')[0];
    formData.materialType = materialType.options[materialType.selectedIndex].text;


    console.log('提交表单', formData);
    
 
    // 保存json到数组
    let loadeds = getloadeds();
    loadeds[id] = formData;
    setloadeds(loadeds);

    alert('修改成功！');

    // 页面跳转
    window.history.go(-1);
}