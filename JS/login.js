function signout() {
    console.log('退出登录');
    // 删除localStorage中的account对象
    localStorage.removeItem('account')
    // 刷新页面
    location.reload(); 
}

let loginBtn = document.getElementsByClassName('login')[0]
let signoutBtn = document.getElementsByClassName('signout')[0]


// 判断localstorage中的account对象是否有值，如果有则代表用户已登录，显示退出登录的按钮
let a = localStorage.getItem('account')
if (a === null || a === '') {
    console.log('用户还未登录')
    // 隐藏退出登录的按钮
    // console.log(loginBtn);
    // console.log(signoutBtn);
    loginBtn.style.display = 'block';
    signoutBtn.style.display = 'none';
} else {
    console.log('用户已登录');
    loginBtn.style.display = 'none';
    signoutBtn.style.display = 'block';
}