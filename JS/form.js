//增删改查

import { getloadeds,setloadeds } from "./util.js";

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
    loadeds.push(formData);
    setloadeds(loadeds);

    alert('发布成功！');

    // 页面跳转
    window.location.href = './list.html'
}