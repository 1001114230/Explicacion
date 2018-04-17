$().ready(function(){
      $('button[type="submit"]').click(function(e){
        e.preventDefault();
        usuario = $('#Username').val();
        clave = $('#Password').val();
          
        if(usuario == 'Administrador' && clave == 'admin123'){
          console.log(usuario+''+clave)
          window.location.href = 'Administrador.html';
        } 

        else if(usuario == 'Universidad' && clave == 'univ123'){
          console.log(usuario+''+clave)
          window.location.href = 'Universidad.html';
        } 

        else if(usuario == 'Practicante' && clave == 'prac123'){
          console.log(usuario+''+clave)
          window.location.href = 'Practicantes.html';
        } 

        else if(usuario == 'Mujer' && clave == 'mujer123'){
          console.log(usuario+''+clave)
          window.location.href = 'Mujeres.html';
        }

        else{
          alert('Usuario o clave no valida "Por favor repita su usuario" ')
        }
        
        if (usuario!="Administrador" && usuario!="Universidad" && usuario!="Practicante" && usuario!="Mujer"){
          if(usuario!="" && clave=="") {
            alert('Datos incompletos')
          }
          if(clave!=""){
            alert('Error: Usuario incorrecto')
          }
          if (usuario=="" && clave=="") {
            alert('Error: No escribio los datos completos')
          }
        }       
      });
    });


