const users = [{
    user:'Moh',
    password: '1234',
},
{
    user:'Jouza',
    password:'5678',
}]

var username = document.querySelector(".name").value;
var password = document.querySelector("#password").value;

function success(){
    document.querySelector("#log").innerText = "Login Success";
    document.querySelector("#log").style.backgroundColor = "green";
}

function failed(){
    document.querySelector("#log").innerText = "Login Failed";
    document.querySelector("#log").style.backgroundColor = "red";
}

function verify(events){
    result = false;
    for (i = 0; i<users.length; i++){
        if (document.querySelector(".name").value === users[i].user && document.querySelector("#password").value === users[i].password){
            result = true;
        }
    } if (result === true){
        success();
    }else{
        failed();
    }
}
login.addEventListener('click',verify);

