// JavaScript validation functionalities
function validateForm() {
    // Basic validation
    if (document.forms[0].pword.value === "password") {
        alert('Password cannot be password.');
        e.preventDefault(); // prevents a default value from getting sent
        return false; // returns a false value
    }
                
    if (document.forms[0].firstName.value == "") { // First name validation
        alert('First name cannot be empty!');
        e.preventDefault();
        return false;
    }
                
    if (document.forms[0].lastName.value == "") { // Last name validation
        alert('Last name cannot be empty!');
        e.preventDefault();
        return false;
    }

    if (document.forms[0].mobile.value == "") { // Mobile validation
        alert('Please enter a valid mobile number.');
        e.preventDefault();
        return false;
    }

    if (document.forms[0].message.value == "") { // Default or spam message validation
        alert('Please enter a valid message to be sent.');
        e.preventDefault();
        return false;
    }
                
    if (document.forms[0].email.value = "") { // E-mail validation
        alert('Email cannot be empty!');
        e.preventDefault();
        return false;
    }

    if (document.forms[0].country.value = "") { // Dropdown validation
        alert('Please select a country of residence!');
        e.preventDefault();
        return false;
    }

    // Input validation
    if (document.forms[0].pword.value.length < 8 || document.forms[0].pword.value.length > 24) { // Ensuring that the password standard for my website is between 8 to 24 characters
        alert('Passwords have to be between 8 to 24 characters!')
        return false;
    }

    if (document.forms[0].message.value.length < 8) { // Check for spam messages
        alert('Please enter a valid message to be sent.');
        return false;
    }

    /* Email validation (non-functional but applicable)
    if (!document.forms[0].email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert('Please enter a valid e-mail address');
        return false;
    } */

    // If all values are validated, return true and submit the form
    alert('Thank you for your feedback! Your form has been received...')
    return true;
}