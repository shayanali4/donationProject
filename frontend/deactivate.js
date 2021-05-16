
 
const form = document.getElementById('login')
form.addEventListener('submit', Deactivate)



async function Deactivate(event) {




    event.preventDefault()
   


    var userInfo = JSON.parse(localStorage.getItem('userInfo'))

var deleteduser=userInfo._id

    const result = await fetch(`https://backend-data-service.herokuapp.com/users/delete/${deleteduser}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
        
       
    })
  
    .then((response) => response.json())
// Then with the data from the response in JSON...


.then((data) => {
    console.log("success is only ajshjahsjhajsh",data)

    if(data.message){
  console.log('Error:', data.message);

//   alert(data.message)
  localStorage.removeItem("userInfo");


  var success = document.getElementById("success")
 
 success.className += "success"
 success.innerHTML="deactivated successfully"
                             



  window.location = './index.html'




}

  

  
})

  
}

















