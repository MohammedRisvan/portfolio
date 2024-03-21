function sendMail(){ console.log("hellow");
    let params = {
       
        name :document.getElementById('name').value,
        email: document.getElementById('email').value,
        message:document.getElementById('message').value, 
        subject:document.getElementById("subject").value,
    };

const serviceID = "service_6pbvukz";
const templateID = "template_veug7xs";
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        document.getElementById("subject").value ="";
        console.log(res);
        alert("your message send is sucessfully");
    })
    .catch((err)=>console.log(err));
}


