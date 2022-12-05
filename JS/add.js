//1、获取元素
var txt = [...document.getElementsByTagName("textarea")];
var btn = [...document.getElementsByClassName('submit')]
var ul = document.querySelector("ul");

//2、给button绑定点击事件
btn.forEach((item, index) => {
    item.onclick = function () {
        if (txt[index].value == "") {//当文本框中没有文字时，提示
            alert("您没有输入内容")
        } else {
            //创建元素li作为留言区
            var li = document.createElement("li");
            //将文本框中的内容放到li中,a标签中href中的内容代表什么都不执行
            li.innerHTML = txt[index].value + "<a   class='delete' href='javascript:;'>删除</a> <br/>"
            txt[index].value = "";//添加之后文本框的内容清空
            //将留言添加到ul中，而且在最上方
            var liArray = [...ul.getElementsByTagName('li')]
            console.log(liArray[index].getElementsByTagName('span')[0])
            liArray[index].getElementsByTagName('span')[0].innerHTML += li.innerHTML
            //当点击删除时删除ul中的li
            var as = [...document.getElementsByClassName('delete')];
            console.log(as)
            as[index].onclick = function () {
                //删除当前a标签所在位置的父节点li
                var strArray = liArray[index].getElementsByTagName('span')[0].innerHTML.split(li.innerHTML)
                liArray[index].getElementsByTagName('span')[0].innerHTML = strArray[0]
                console.log(strArray)
            }
        }
    }
})