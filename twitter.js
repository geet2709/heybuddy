// login form
document.getElementById('login-form').addEventListener('submit', function(e) {
    // e.preventDefault(); 
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
  
    console.log('Phone Number:', phone);
    console.log('Password:', password);
  
    
    document.getElementById('phone').value = '';
    document.getElementById('password').value = '';
  });
  
  // signin form
  document.getElementById('innermain').addEventListener('next', function(e) {
    e.stopPropagation()
    var name= document.getElementById('exampleInputname').value;
    var ph_number = document.getElementById('exampleInputnumber').value;
  
    console.log('name:', name);
    console.log('Phone Number:', ph_number);
  
    
    document.getElementById('exampleInputname').value = '';
    document.getElementById('exampleInputnumber').value = '';
  });
 