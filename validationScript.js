    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let button = document.getElementById("submission")
let para = document.getElementById("event")

function isAlphaNum(value) {
    value.preventDefault(); 

    let submit = document.getElementById("inputField").value; 
    let RegEx = /^[a-z0-9]+$/i; 
    let Valid = RegEx.test(submit);

    if (Valid) {
        console.log(submit)
        para.textContent = `${submit}`
    }

    else {
        console.log(submit)
        window.alert("Value is false. Try again!")
    }
}

button.addEventListener("click", isAlphaNum);
