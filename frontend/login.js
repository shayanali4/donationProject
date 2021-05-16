
 
const form = document.getElementById('login')
form.addEventListener('submit', login)



async function login(event) {




    event.preventDefault()
    const email = document.getElementById('username').value
    const password = document.getElementById('password').value





    const result = await fetch('https://backend-data-service.herokuapp.com/users/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then((response) => response.json())
//Then with the data from the response in JSON...


.then((data) => {
    console.log("success is only ajshjahsjhajsh",data)

    if(data.message){
  console.log('Error:', data.message);

  var error1 = document.getElementById("error")
 
 error1.className += "error"
 error1.innerHTML=data.message
                             




}

   else {
      console.log("success is only",data)
      localStorage.setItem('userInfo', JSON.stringify(data));
      console.log("storageset")
      window.location = './index.html'





  }

  
})

  
}

















