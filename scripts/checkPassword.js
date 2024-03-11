let password = document.querySelector("#pword")

function CheckPassword(password) { 
    let repPassword = document.querySelector("#repPassword")
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

    
    if(password.value.match(paswd)){ 
    alert('Correct, try another...')
    return true;
    } else{ 
    alert('Wrong...!')
    return false;
    }
  }