function signout(){
    // localStorage.clear();
    // window.location = './login.html'
    localStorage.removeItem("userInfo");
    window.location = './login.html'



   
}

