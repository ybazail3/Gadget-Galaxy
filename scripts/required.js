let email = document.querySelector("#email")

function ValidateEmail(email) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.value.match(validRegex)) {
      alert("Valid email address!");
      document.form1.text1.focus();
      return true;
  
    } else {
      alert("Invalid email address!");
      document.form1.text1.focus();
      return false;
    }
  }

