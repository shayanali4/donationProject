
 
const form = document.getElementById('editprofile')
form.addEventListener('submit', editprofile)



async function editprofile(event) {

event.preventDefault()
   


var fullName=document.getElementById('username').value
var email=document.getElementById('email').value

// var password=document.getElementById('password').value



// console.log(username,email)



var userInfo = JSON.parse(localStorage.getItem('userInfo'))

var updateuser=userInfo._id





    const result = await fetch(`https://backend-data-service.herokuapp.com/users/update/${updateuser}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName,
            email,
        })
    })
    .then((response) => response.json())
// Then with the data from the response in JSON...


.then((data) => {
    console.log("success is only",data)
    localStorage.removeItem("userInfo");
    localStorage.setItem('userInfo', JSON.stringify(data));
    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
var success = document.getElementById("success1")
     console.log(success)
success.className += "success"
success.innerHTML="updated successfully"
// alert("successfully updated")





console.log(fullname)

    

  
 
})

.catch((err) => {
    console.log("err",data)

  
 
})

  

  
}




















// const form1 = document.getElementById('uploadimg')
// form1.addEventListener('submit', uploadimg)









// async function uploadimg(event) {
//     event.preventDefault()

// var Myfile =document.getElementById("img").value
// console.log("chal rha h",Myfile)




// const result = await fetch(`http://localhost:5000/users/uploadfile`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         file:Myfile
//     })
// })
// .then((response) => response.json())
// // Then with the data from the response in JSON...


// .then((data) => {
// console.log("success is only",)

// // alert("successfully updated")










// })

// .catch((err) => {
// console.log("err",data)



// })



// }    







