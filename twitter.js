// for login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
  
    console.log('Phone Number:', phone);
    console.log('Password:', password);
  
    
    document.getElementById('phone').value = '';
    document.getElementById('password').value = '';
  });
  
  // for signup

  document.getElementById('next').addEventListener('next()', function(e) {
    e.preventDefault(); 
    var name = document.getElementById('name').value;
    var ph = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
  
    console.log('Name:', name);
    console.log('Phone Number:', phone);
    console.log('Date of Birth:', dob);
  
    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('dob').value = '';

  });
  