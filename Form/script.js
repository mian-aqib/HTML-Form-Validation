console.log("Hello Form");

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//All function
//Function to show error
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//function to show success
function showSuccess(input,message){
    const formControl = input.parentElement;
    formControl.className ='form-control success'; 
}
//function to check if email is valid

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

//This is an a Event listner for the form on submit
form.addEventListener('submit',function(e){
    e.preventDefault();

    if( username.value ===''){
        showError(username,'username is required')
    } else{
        showSuccess(username)
    }

    if(email.value ===''){
        showError(email,'email is required')
    }else if(!isValidEmail(email.value)){
        showError(email,'email is invalid')
    }else{
        showSuccess(email);
    }

    if (password.value ===''){
        showError(password,'password is required')
    }else{
        showSuccess(password);
    }

    if(password2.value ===''){
        showError(password2,'password2 is required')
    }else{
        showSuccess(password2);
    }
})