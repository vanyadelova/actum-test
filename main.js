function sendData(data) {
    var XHR = new XMLHttpRequest();
    var FD  = new FormData();
  
    // Here I push the data into the FormData object
    for(name in data) {
      FD.append(name, data[name]);
    }
  
    // Successful data submission
    XHR.addEventListener('load', function(event) {
      alert('You have successfully submitted the form.');
    });
  
    // In case of error
    XHR.addEventListener('error', function(event) {
      alert('Oops! Something went wrong.');
    });
  
    // Set up the request
    XHR.open('POST', 'https://actum-form-ulcrunoxba.now.sh/api/submit');
  
    // Send the FormData object; HTTP headers are set automatically
    XHR.send(FD);
  }
  

  

  function validation()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];    
    var phone = document.forms["RegForm"]["Telephone"];     
    var address = document.forms["RegForm"]["Address"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   

   
    return true; 
}




(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();