function sendEmail(){
    Email.send({
    SecureToken: "db6b0c80-edd9-4c2a-addc-aa5eec1afe66",
    To : 'rafiq1005@gmail.com',
    From : "rafiqaahil28@gmail.com",
    Subject : "Message from Portfolio - " + document.getElementById("personname").value + "(" + document.getElementById("personemail").value + ")",
    Body: "Name: " + document.getElementById("personname").value + "<br>Email: " + document.getElementById("personemail").value + "<br>Phone Number: " + document.getElementById("personphone").value + "<br>Message: " + document.getElementById("personmessage").value,
}).then(message => alert("Message sent successfully"));
}