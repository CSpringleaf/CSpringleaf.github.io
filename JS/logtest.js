function login() {
    // 判断账户密码长度是否符合
    let a = document.getElementsByClassName('account')[0]
    let account = a.value
    if(account.length < 6 || account.length > 12) {
        alert('账户长度应该在6-32之间')
        return
    }
    
    let p = document.getElementsByClassName('password')[0]
    let password = p.value
    if(password.length < 6 || password.length > 32) {
        alert('密码长度应该在6-32之间')
        return
    }

 
    console.log('hello');
    alert('登录成功 ')

    // 将账号保存到localstorage中，用于判断用户是否登录
    localStorage.setItem('account', account);

    window.history.go(-1);

}