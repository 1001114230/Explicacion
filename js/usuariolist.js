function validarCrear(){
  with (document.forma){ 
  if(document.getElementById('dirigido').value==''){
    swal('Por favor digite el destinatario.');
    return;
    }

    emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('dirigido').value)) { 
    } 

    else {
      swal('El campo destinatario no puede llevar "3627" o "#%$%#"');
      return;
    }

    if(document.getElementById('mensaje').value==''){
    swal('Por favor digite el mensaje que dejara.');
    return;
    }

    emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('mensaje').value)) { 
    } 

    else {
      swal('El campo mensaje no puede llevar "6211" o "#%$%#"');
      return;
    }

    swal({
          title: "Su sugerencia a sido enviada exitosamente",
          text: "El Administrador podra observar su sugerencia en los proximos dias",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
     }
 }




function notificarT(){
  with (document.forma){ 
  
    if(document.getElementById('mensaje').value==''){
    swal('Por favor digite el mensaje o novedad que dejara.');
    return;
    }

    emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('mensaje').value)) { 
    } 

    else {
      swal('El campo mensaje no puede llevar "6211" o "#%$%#"');
      return;
    }

    swal({
          title: "Su sugerencia o novedad a sido enviada exitosamente",
          text: "El Administrador podra observar su sugerencia en los proximos dias",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
     }
 }




function observacionesC(){
 with (document.forma){ 
  if(document.getElementById('correoC').value==''){
    swal('Por favor digite su correo electronico');
      return;
    }
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(document.getElementById('correoC').value)) {
      
    } 
    else {
      
      swal('Correo invalido. Por favor escribalo nuevamente');
      return;
    }
  
    if(document.getElementById('mensaje').value==''){
    swal('Por favor digite el mensaje o novedad que dejara.');
    return;
    }

    emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('mensaje').value)) { 
    } 

    else {
      swal('El campo mensaje no puede llevar "6211" o "#%$%#"');
      return;
    }

    swal({
          title: "Su sugerencia o observación a sido enviada exitosamente",
          text: "El Administrador podra observar su sugerencia en los proximos dias",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
     }
 }




function actualizarT(){
  with (document.forma){ 
    
    swal({
          title: "Se ha actualizado exitosamente",
          text: "Su estado ha sido actualizado",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
  }
}



function solicitarT(){
  with (document.forma){ 
    
    swal({
          title: "Se ha solicitado una tarea exitosamente",
          text: "En los proximos dias obtendras respuesta",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
  }
}



function solicitarC(){
  with (document.forma){ 
    
    swal({
          title: "Se ha solicitado la calificación exitosamente.",
          text: "En los proximos dias obtendras respuesta",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
  }
}



 function solicitarContrato(){
  with (document.forma){ 
  if(document.getElementById('crreo').value==''){
      swal('Por favor digite su correo electronico');
      return;
    }
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(document.getElementById('crreo').value)) {
      
    } 
    else {
      
      swal('Correo invalido. Por favor escribalo nuevamente');
      return;
    }

    if(document.getElementById('msn').value==''){
    swal('Digite el mensaje que dejara para el Administrador.');
    return;
    }

    swal({
          title: "Su solicitud de contrato ha sido realizada!",
          text: "En los proximos dias obtendras respuesta de Administrador",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
     }
 }




  function inscribirmeTaller(){
  with (document.forma){ 
  if(document.getElementById('correoTaller').value==''){
      swal('Por favor digite su correo electronico');
      return;
    }
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(document.getElementById('correoTaller').value)) {
      
    } 
    else {
      
      swal('Correo invalido. Por favor escribalo nuevamente');
      return;
    }

    if(document.getElementById('contraseña').value==''){
    swal('Contraseña equivocada. Por favor escribala nuevamente');
    return;
    }

    swal({
          title: "Su solicitud de contrato ha sido realizada!",
          text: "En los proximos dias obtendras respuesta de Administrador",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
     }
 }




function observacion(){
  with (document.forma){ 

    if(document.getElementById('bvd').value==''){
    swal('Escribe tu progreso.');
    return;
    }

    swal({
          title: "Su progreso a sido enviado!",
          text: "El Administrador podra ver el avance de tus tareas",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
     }
 }



function crearTaller(){
  with (document.forma){
    if(document.getElementById('codigo').value==''){
    swal('Por favor digite el codigo del taller.');
    return;
    }

  if(document.getElementById('nombret').value==''){
      swal('Por favor digite el nombre del taller');
      return;
    }
    
    emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('nombret').value)) { 
    } 

    else {
      swal('El Nombre del taller no puede llevar "1736" o "#%$%#"');
      return;
    }

    if(document.getElementById('fechat').value==''){
    swal('Por favor seleccione la fecha de realización del taller.');
    return;
    }

    if(document.getElementById('duraciont').value==''){
    swal('Digite por favor la duración que tendra el taller.');
    return;
    }

    if(document.getElementById('tipot').value==''){
    swal('Digite por favor el tipo de taller');
    return;
    }

    if(document.getElementById('comment').value==''){
    swal('Digite un comentario extra o informativo del taller');
    return;
    }

    swal({
          title: "El taller ha sido creado Exitosamente!",
          text: "En los proximos dias este taller sera publicado",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
 }
}



function solicitarP(){
  with (document.solicitud){ 
  if(document.getElementById('nombre').value==''){
    swal('Por favor digite el nombre del Practicante al cual solicitara el contrato');
    return;
    }

      emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('nombre').value)) { 
    } 

    else {
      swal('Los Nombres no llevan "163" o "#%$%#"');
      return;
    }


    if(document.getElementById('descripcion').value==''){
    swal('Digite por favor sus destrezas y habilidades');
    return;
    }

     emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('descripcion').value)) { 
    }

    else {
      swal('El campo descripcion no puede llevar numeros');
      return;
    }

    swal({
          title: "Su solicitud ha sido enviada exitosamente!",
          text: "Ahora el Administrador podra ver tu solicitud de contrato",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
 }
}





function realizarDonacion(){
  with (document.forma){ 
  if(document.getElementById('nombred').value==''){
      swal('Por favor digite su Nombre');
      return;
    }

    emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('nombred').value)) { 
    } 

    else {
      swal('El Nombre no lleva "123" o "#%$%#"');
      return;
    }
    

    if(document.getElementById('apellidosd').value==''){
    swal('Por favor digite sus Apellidos.');
    return;
    }

     emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('apellidosd').value)) { 
    } 

    else {
      swal('Los Apellidos no llevan "1590" o "#%$%#"');
      return;
    }


    if(document.getElementById('cedulad').value==''){
    swal('Digite por favor el numero de su cedula');
    return;
    }

     emailRegex = /^[0-9]+$/;
    if (emailRegex.test(document.getElementById('cedulad').value)) { 
    }

    else {
      swal('El numero de la Cedula no lleva letras');
      return;
    }


    if(document.getElementById('fechad').value==''){
    swal('Digite por favor la fecha de realización de la donación');
    return;
    }


    if(document.getElementById('direcciond').value==''){
    swal('Digite por favor su dirección');
    return;
    }

    if(document.getElementById('tipod').value==''){
    swal('Seleccione el tipo de donación');
    return;
    }

    if(document.getElementById('mensajed').value==''){
    swal('Digite un comentario extra o informativo sobre su donación');
    return;
    }

    swal({
          title: "Su donación ha sido realizada exitosamente!",
          text: "Mantente al tanto de lo que sucede con tu donación",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
 }
}




function crearUsuario(){
  with (document.forma){ 
  if(document.getElementById('nombreu').value==''){
      swal('Por favor digite el Nombre del usuario que desea registrar.');
      return;
    }
    
    emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('nombreu').value)) { 
    } 

    else {
      swal('El Nombre del usuario no puede llevar "1736" o "#%$%#"');
      return;
    }


    if(document.getElementById('apellidosu').value==''){
    swal('Por favor digite los Apellidos del usuario');
    return;
    }

     emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('apellidosu').value)) { 
    } 

    else {
      swal('Los Apellidos no llevan "1590" o "#%$%#"');
      return;
    }

    
    if(document.getElementById('correou').value==''){
      swal('Por favor digite su correo electronico');
      return;
    }
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(document.getElementById('correou').value)) {
      
    } 
    else {
      
      swal('Correo invalido. Por favor escribalo nuevamente');
      return;
    }

    if(document.getElementById('numeroidu').value==''){
    swal('Digite por favor el numero de identificación del usuario');
    return;
    }
    emailRegex = /^[0-9]+$/;
    if (emailRegex.test(document.getElementById('numeroidu').value)) { 
    }

    else {
      swal('El numero de identificación no puede llevar letras');
      return;
    }

    
    if(document.getElementById('fechau').value==''){
    swal('Digite por favor la fecha de nacimiento del usuario');
    return;
    }


    if(document.getElementById('telefonou').value==''){
    swal('Digite por favor el numero de telefono del usuario');
    return;
    }

     emailRegex = /^[0-9]+$/;
    if (emailRegex.test(document.getElementById('telefonou').value)) { 
    }

    else {
      swal('El numero de telefono no puede llevar letras');
      return;
    }

    if(document.getElementById('direccionu').value==''){
    swal('Digite la dirección del usuario');
    return;
    }


    if(document.getElementById('generou').value==''){
    swal('Digite por favor el genero del usuario');
    return;
    }

    emailRegex =  /^[a-zA-Z\s]+$/;
    if (emailRegex.test(document.getElementById('generou').value)) { 
    } 

    else {
      swal('El genero no puede llevar "1590" o "#%$%#"');
      return;
    }


    if(document.getElementById('contraseñau').value==''){
    swal('Asignele una contraseña a este usuario');
    return;
    }

    swal({
          title: "Usuario registrado exitosamente!",
          text: "Enviaremos un mensaje con el usuario y contraseña del usuario creado a la direccion del correo electronico insertada",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
 }
}





function crearContrato(){
  with (document.idContrato){ 
  if(document.getElementById('idC').value==''){
      swal('Por favor seleccione el ID del Practicante');
      return;
    }


    if(document.getElementById('fechaC').value==''){
    swal('Por favor seleccione la fecha del Contrato.');
    return;
    }

    if(document.getElementById('estadoC').value==''){
    swal('Digite por favor el estado del Contrato');
    return;
    }

    if(document.getElementById('tipoC').value==''){
    swal('Seleccione por favor el tipo de contrato');
    return;
    }

    swal({
          title: "El Contrato ha sido creado Exitosamente!",
          text: "Este al pendiente de todos los contratos",
          type: "success",
          showCancelButton: false,
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok",
          closeOnConfirm: false
        });
 }
}






function imprSelec(nombre) 
{ 
var articulo = document.getElementById(nombre); 
var ventimp = window.open(' ','impresion','no','no','50','no','no','no','no','no','no','no','no','50'); 
ventimp.document.write(articulo.innerHTML ); 
ventimp.document.close(); 
ventimp.print( ); 
ventimp.close(); 
}


$("#Descargar").click(function(){
  $("#impresion").table2excel({
    filename: "NombreArchivo"
  }); 
});

  $(function () {

            $('body').on('click', '.list-group .list-group-item', function () {
                $(this).toggleClass('active');
            });
            $('.list-arrows button').click(function () {
                var $button = $(this), actives = '';
                if ($button.hasClass('move-left')) {
                    actives = $('.list-right ul li.active');
                    actives.clone().appendTo('.list-left ul');
                    actives.remove();
                } else if ($button.hasClass('move-right')) {
                    actives = $('.list-left ul li.active');
                    actives.clone().appendTo('.list-right ul');
                    actives.remove();
                }
            });
            $('.dual-list .selector').click(function () {
                var $checkBox = $(this);
                if (!$checkBox.hasClass('selected')) {
                    $checkBox.addClass('selected').closest('.well').find('ul li:not(.active)').addClass('active');
                    $checkBox.children('i').removeClass('glyphicon-unchecked').addClass('glyphicon-check');
                } else {
                    $checkBox.removeClass('selected').closest('.well').find('ul li.active').removeClass('active');
                    $checkBox.children('i').removeClass('glyphicon-check').addClass('glyphicon-unchecked');
                }
            });
            $('[name="SearchDualList"]').keyup(function (e) {
                var code = e.keyCode || e.which;
                if (code == '9') return;
                if (code == '27') $(this).val(null);
                var $rows = $(this).closest('.dual-list').find('.list-group li');
                var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
                $rows.show().filter(function () {
                    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                    return !~text.indexOf(val);
                }).hide();
            });

        });

/*Calendario*/
$(function () {
	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event').popover({
		container: 'body',
		content: 'Hello World',
		html: true,
		placement: 'bottom',
		template: '<div class="popover calendar-event-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});

	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event').on('show.bs.popover', function () {
		var attending = parseInt($(this).find('div.progress>.progress-bar').attr('aria-valuenow')),
			total = parseInt($(this).find('div.progress>.progress-bar').attr('aria-valuemax')),
			remaining = total - attending,
			displayAttending = attending - $(this).find('div.attending').children().length,
			html = [
				'<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>',
				'<h4>'+$(this).find('h4').text()+'</h4>',
				'<div class="desc">'+$(this).find('div.desc').html()+'</div>',
				'<div class="location">'+$(this).find('div.location').html()+'</div>',
				'<div class="datetime">'+$(this).find('div.datetime').html()+'</div>',
				'<div class="space"><span class="pull-right"></span></div>',
				'<div class="attending">',
					$(this).find('div.attending').html(),
	
				'</div>',
				
			].join('\n');

		$(this).attr('title', $(this).find('h4').text());
		$(this).attr('data-content', html);
	});

	$('[data-toggle="calendar"] > .row > .calendar-day > .events > .event').on('shown.bs.popover', function () {
		var $popup = $(this);
		$('.popover:last-child').find('.close').on('click', function(event) {
			$popup.popover('hide');
		});
	});
});
/*Calendario*/