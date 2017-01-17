function validateEmail(_evt){
    
      var email = document.getElementById("input-email").value;
      var mensaje = document.getElementById("mensaje3");
      
      if(!/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email)){
        mensaje.innerHTML = "<h5 style='color:#8A2BE2';>Correo Electrónico Inválido</h5>"
      } else {
        mensaje.innerHTML = "";
      }
      
} 
 function validatePass(_evt){
      
      var pass = document.getElementById("input-password").value;
      var msg = document.getElementById("mensaje");
      
      
      if((pass != "123456" || pass != "098754" || pass.toLowerCase() != "password") && (pass.length < 6) ) {
       msg.innerHTML = "<h5 style='color:#8A2BE2';>Contraseña Inválida</h5>"
      } else {
       msg.innerHTML = "";
      }
        
  }
    

  