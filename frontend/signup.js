




   const form = document.getElementById('signup')
   form.addEventListener('submit', signup)





async function signup(event) {
    
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const confirmpass=document.getElementById('confirmpassword').value
const fullName=document.getElementById('fullname').value

    localStorage.clear();
    event.preventDefault()


    if(password==confirmpass){

   


    const result = await fetch('https://backend-data-service.herokuapp.com/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName,
            email,
            password,
            
        })
    })





    .then((response) => response.json())
    //Then with the data from the response in JSON...
    
    
    .then((data) => {
        if(data.message){
      console.log('Error:', data.message);
    
      var error1 = document.getElementById("error")
     
     error1.className += "error"
     error1.innerHTML=data.message
    
    
    
    }
    
       else {
          console.log("success is only",data)
          localStorage.setItem('userInfo', JSON.stringify(data));
                window.location = './index.html'
    
      }
    
      
    })

        
}
else{
    var error1 = document.getElementById("error")
 
 error1.className += "error"
 error1.innerHTML="password and confirm password not match"
                             
}






}
