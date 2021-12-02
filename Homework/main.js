const users = [
    {user:"Moh", password: "1234",},
    {user:"Jouza",password:"5678",}
];
$(document).ready(function(){

const username = $("#name")
const password = $("#password")
const login = $("#login")
const status = $("#status")

function verify() {
    const currentUser = username.val()
    const currentPassword = password.val()


    for (let i = 0; i < users.length; i++){
        if (currentUser === users[i].user && currentPassword === users[i].password){
            status.text("Login success")
            status.css("background-color", "green");    
            return;
        }
    }
    status.text("login failed")
    status.css("background-color", "red")
    return;
}

login.click(verify);


});


