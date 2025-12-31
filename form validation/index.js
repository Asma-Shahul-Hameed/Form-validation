//selecting the elements
const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const phonenumber=document.querySelector('#phonenumber');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

// Add submit event listener to the form
form.addEventListener('submit',(e)=>{
    
    // Check if input validation fails
    if (!validateInputs()){
        e.preventDefault(); 
    }
    // pop up success message when form is valid
    else{
        alert('form submitted successfully!');
    }
})

//function for validation of inputs
function validateInputs(){
    //get values from input
    const usernameVal= username.value.trim();
    const emailVal= email.value.trim();
    const phonenumberVal=phonenumber.value.trim();
    const passwordVal= password.value.trim();
    const cpasswordVal= cpassword.value.trim();
   
    let success=true;

    //conditional statements for validation of Username
    if(usernameVal===''){
        success=false;
        setError(username,'Username is required');
    }
    else if(usernameVal.length<5){
        success=false;
        setError(username,'Name should have atleast 5 characters');
    }
    else{
        setSuccess(username);
    }
    
    //conditional statements for validation of email id
    if(emailVal===''){
        success=false;
        setError(email,'Email is required');
    }
    else if(!validateEmail(emailVal)){
        success=false;
        setError(email,'Please enter a valid email');
    }
    else{
        setSuccess(email);
    }
    
    //conditional statements for validation of phone number
    if(phonenumberVal===''){
        success=false;
        setError(phonenumber,'Phone number is required');
    }
    else if(phonenumberVal==='123456789'){
        success=false;
        setError(phonenumber,'please enter a valid phone number');
    }
    else if(phonenumberVal.length!==10){
        success=false;
        setError(phonenumber,'please enter a valid 10 digit phone number');
    }
    else{
         setSuccess(phonenumber);
    }
    
    //conditional statements for validation of password
    if(passwordVal===''){
        success=false;
        setError(password,'Password is required');
    }
    else if(passwordVal==='password'){
        success=false;
        setError(password,'please set a strong password')
    }
    else if(passwordVal===usernameVal){
        success=false;
        setError(password,'please set a strong password')
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'password should have atleast 8 characters')
    }
    else{
         setSuccess(password)
    }

    //conditional statements to check matching of confirm password with password
    if(cpasswordVal===''){
        success=false;
        setError(cpassword,'Cpassword is required');
    }
    else if (cpasswordVal!==passwordVal){
        success=false;
        setError(cpassword,'password does not match,enter correctly')
    }
    else{
        setSuccess(cpassword)
    }
    return success
}

// Display error message and apply error styling to the input field
function setError(element,message){
    const inputContainer = element.parentElement;
    const errorElement=inputContainer.querySelector('.error');

    errorElement.innerText = message;
    
    // Add error class and remove success class
    inputContainer.classList.add('error')
    inputContainer.classList.remove('success')
}
//element (eg.,)- password, message(eg.,)- password is required

// Clear error message and apply success styling to the input field
function setSuccess(element){
    const inputContainer = element.parentElement;
    const errorElement=inputContainer.querySelector('.error');

    errorElement.innerText = '';

    // Add success class and remove error class
    inputContainer.classList.add('success')
    inputContainer.classList.remove('error')
}

// Validate email format using regular expression
const validateEmail = (email) =>{
    return String(email)
     .toLowerCase()
     .match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/); // Valid email format
}