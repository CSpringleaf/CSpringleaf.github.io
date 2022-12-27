//增删改查


import { getloadeds, setloadeds } from "./util.js"
let loadeds = getloadeds();

let ul = document.getElementsByClassName('loaded-list')[0]
loadeds.forEach((item, index) => {
    console.log(index, ":", item);
    let div1 = `<div class="cover">
    <a href="./loaded.html?id=${index}">
        <img src="${item.loadedCover}" alt="封面">
    </a>
</div>`
    let div2 = `<div class="info">
    <a class="name" href="./loaded.html?id=${index}" title="${item.contentIntro}">《${item.loadedName}》</a>
    <div class="stage">${item.stage}</div>
</div>`

    // console.log('html', ul.innerHTML)

    ul.innerHTML += "<li class=\"loaded\">" + div1 + div2 + "</li>"
}) 