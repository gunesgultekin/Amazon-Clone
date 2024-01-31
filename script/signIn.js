var inputData = localStorage.getItem('inputData');
document.getElementById('user-data').innerText = inputData;

document.getElementById('change-label').addEventListener("click",function(){
    window.location.href = '../index.html';
});

document.getElementById('sign-in-button').addEventListener("click",function(){
    var passwordData = document.getElementById('input-form').value;
    if(passwordData == ''){
        alert("please enter your password");
    }
    else{
        window.location.href = '../dashboard.html';
    }
});