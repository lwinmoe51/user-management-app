const nameEl = document.getElementById("name");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirm_passwordEl = document.getElementById("confirm-password");

const form = document.getElementById("form");

const isRequired = value => value === "" ? false : true;
const isBetween = (length,min,max) => length<min || length > max ? false : true;

const showError = (input,message) => {
    //get form-field element
    const formField = input.parentElement;
    //remove success class
    formField.classList.remove("success");
    formField.classList.add("error");
    //show error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    //get the form-field element
    const formField = input.parentElement;
    //remove error class
    formField.classList.remove("error");
    formField.classList.add("success");
    //hide error message
    const error = formField.querySelector('small');
    error.textContent = "";
};

const checkName = () => {
    let valid = false;
    const min = 3,
          max = 25;

    const name = nameEl.value.trim();

    if(!isRequired){
        showError(nameEl,"Name should not be blank.");
    }else if (!isBetween(name.length,min,max)) {
        showError(nameEl,`Name must be between ${min} and ${max} characters.`);
    }else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};



form.addEventListener('submit', function(e){
    //prevent form from submitting
    e.preventDefault();

    //valid fields
    let isNameValid = checkName();

    let isFormValid = isNameValid;

    //submit to the server if the form is valid
    if (isFormValid){
        
    }
});