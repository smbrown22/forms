let button = document.getElementById("submission")
let para = document.getElementById("event")

function isAlphaNum(value) {
    value.preventDefault(); 

    let submit = document.getElementById("alpnumb").value; 
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
