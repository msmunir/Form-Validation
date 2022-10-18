const form = document.querySelector('#validationForm');
const errorMessage = document.querySelector('.d-none');

const validateTextFirstName = (id) => {
    const inputFirstName = document.querySelector(id);

    if (inputFirstName.value.trim() === ''){
        console.log('Please enter your first name.');
        inputFirstName.focus();
        return false;
    }
    else if (inputFirstName.value.length < 2){
        console.log('First name must have atleast 2 character.');
        inputFirstName.focus();
        return false;   
    }
    else if(inputFirstName.value.match(/[0-9]/)){
        console.log("Please avoid numbers in first name.");
        inputFirstName.focus();
        return false;
    }
    else{        
        return true;
    }
}
const validateTextLastName = (id) => {
    const inputLastName = document.querySelector(id);
    
    if (inputLastName.value.trim() === ''){
        console.log('Please enter your last name.');
        return false;
    }
    else if (inputLastName.value.length < 2){
        console.log('Last name must have atleast 2 character.');
        return false;
    }
    else if ( inputLastName.value.match(/[0-9]/)){
        console.log('Please avoid numbers in last name.');
        return false;
    }
    else{
        return true;
    }
}
const validateEmail = (id) => {
    const email = document.querySelector(id);
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
    
    if (email.value.trim() === ''){
        console.log('Email address cannot be empty.');
        return false;
        
    }
    else if ( !regEx.test(email.value)){
        console.log('Please enter a valid email address.');
        return false;
    }
    else{
        return true;
    } 
}
const validatePass = (id) => {
    const password = document.querySelector(id);
    const passEx =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/   //6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter 
    
    if(password.value.trim() === ''){
        console.log('Password field can not be empty.');
        return false;
    }
    else if(!password.value.match(passEx)) {
        console.log('Password must contain atleast 6 characters, includes number, lowercase, uppercase letter.');
        return false;
    }
    else {  
        return true;
    }  
}
const validateRepeatPass = (id) => {
    const repeatPassword = document.querySelector(id);
    
    if (repeatPassword.value === ''){
        console.log('Repeat password field can not be empty. Please enter the same password.')
        return false;
        
    }
    else if ( repeatPassword.value !== password.value){
        console.log('Repeat password does not match with each other');
        return false;
    }    
    else {
        return true;
    }
}
const validateCheck = (id) => {
    const checkBox = document.querySelector(id);
    
    if(!checkBox.checked){
        console.log('You must accept the term and condition.');
         return false;
    }
    else{
         return true;
    } 
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const errors = []; 
    
    for (let i = 0; i < form.length; i++){
        
        const inputId = '#' + form[i].id;
        const formType = form[i].type;
        
        if(formType == 'text'){
            
            if( form[i].id === 'lastName'){
                errors[i] = validateTextLastName(inputId);
            }
            else{
                errors[i] = validateTextFirstName(inputId);
            }
        }
        else if (formType == 'email'){
            errors[i] = validateEmail(inputId);
        }
        else if (formType == 'password'){
            
            if(form[i].id === 'repeatPassword'){
                errors[i] = validateRepeatPass(inputId);
            }
            else{
                errors[i] = validatePass(inputId);
            }
        }
        else if (formType == 'checkbox'){
            errors[i] = validateCheck(inputId);
        }    
    }   
    
    console.log(errors);
    
    if(errors.includes(false)){
        console.log('Oops! something went wrong. Please check the entries again.');
        errorMessage.classList.remove('d-none');
    }
    else {
        errorMessage.classList.add('d-none');
        const user = {
            firstName : firstName.value,
            lastName :  lastName.value,
            email:      email.value,
            password: password.value
        }
        console.log(user);
    }
});





























