document.getElementById('continue-button').addEventListener("click",function(){
    var inputData = document.getElementById('input-form').value;
    if(inputData == ''){
        alert("please enter your registered email or mobile phone number");
    }
    else if(!inputData.includes('@')){
        alert("please enter a valid email address");
    }
    else{
        localStorage.setItem('inputData',inputData);
        window.location.href = 'sign-in.html';
    }  
});