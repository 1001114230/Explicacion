
jQuery(document).ready(function(){
  $('.fab').hover(function () {
    $(this).toggleClass('active');
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

  $(".oculto").hide();              
    $(".sh").click(function(){
          var nodo = $(this).attr("href");  
 
          if ($(nodo).is(":visible")){
               $(nodo).hide();
               return false;
          }else{
        $(".oculto").hide("slow");                             
        $(nodo).fadeToggle("fast");
        return false;
          }
    });
    $(document).ready(function () {
$(function () {
   $('.panel-google-plus > .panel-footer > .input-placeholder, .panel-google-plus > .panel-google-plus-comment > .panel-google-plus-textarea > button[type="reset"]').on('click', function(event) {
        var $panel = $(this).closest('.panel-google-plus');
            $comment = $panel.find('.panel-google-plus-comment');
            
        $comment.find('.btn:first-child').addClass('disabled');
        $comment.find('textarea').val('');
        
        $panel.toggleClass('panel-google-plus-show-comment');
        
        if ($panel.hasClass('panel-google-plus-show-comment')) {
            $comment.find('textarea').focus();
        }
   });
   $('.panel-google-plus-comment > .panel-google-plus-textarea > textarea').on('keyup', function(event) {
        var $comment = $(this).closest('.panel-google-plus-comment');
        
        $comment.find('button[type="submit"]').addClass('disabled');
        if ($(this).val().length >= 1) {
            $comment.find('button[type="submit"]').removeClass('disabled');
        }
   });
});
});
    

    });

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});





$(document).ready(function(){

  $(document).on('click','.eliminar', function(){
    var row = $(this);

    swal({
      title: "Estas seguro que deseas eliminar?",
      text: "La tabla se eliminara!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Si, eliminar!",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, cancelar eliminado!",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        row.parent().parent().remove();
        swal("Eliminado!", "Su campo ha sido eliminado.", "success");
      } else {
        swal("Cancelado", "Su tabla no ha sido eliminada)", "error");
      }
    });
  });




    $(document).on('click', '.save', function(){
      var parent = $(this).parent().parent();
      var tdName = parent.children("td:nth-child(1)");
      var tdPhone = parent.children("td:nth-child(2)");
      var tdEmail = parent.children("td:nth-child(3)");
      var tddur = parent.children("td:nth-child(4)");
      var tddes = parent.children("td:nth-child(5)");
      var tdButtons = parent.children("td:nth-child(6)");

      tdName.html(tdName.children("input[type=text]").val());
      tdPhone.html(tdPhone.children("input[type=text]").val());
      tdEmail.html(tdEmail.children("input[type=text]").val());
      tddur.html(tddur.children("input[type=text]").val());
      tddes.html(tddes.children("input[type=text]").val());
      tdButtons.html(
        "<button class=\"btn eliminar\" id=\"eliminartablauno\" ><i class=\"fa fa-trash\"></i></button>" + " " +
        "<button class=\"btn editar\" id=\"editar\" ><i class=\"fa fa-pencil-square-o\"></i></button>"
      );
    });



    $(document).on('click', '.editar', function(){
      var par = $(this).parent().parent(); //trAKDAKLDJ
      var tdName = par.children("td:nth-child(1)");
      var tdPhone = par.children("td:nth-child(2)");
      var tdEmail = par.children("td:nth-child(3)");
      var tddur = par.children("td:nth-child(4)");
      var tddes = par.children("td:nth-child(5)");
      var tdButtons = par.children("td:nth-child(6)");

      tdName.html("<input type='text' id='txtcodT' value='"+tdName.html()+"'/>");
      tdPhone.html("<input type='text' id='txtnombreT' value='"+tdPhone.html()+"'/>");
      tdEmail.html("<input type='text' id='txtfechaP' value='"+tdEmail.html()+"'/>");
      tddur.html("<input type='text' id='txtdur' value='"+tddur.html()+"'/>");
      tddes.html("<input type='text' id='txtdes' value='"+tddes.html()+"'/>");
      tdButtons.html("<button class=\"btn btn-warning save\" title=\"Guardar\"><i class=\"fa fa-archive\"></i></button></td>");
    })
  });






$(document).ready(function(){

  $(document).on('click','.delete', function(){
    var row = $(this);

    swal({
      title: "Estas seguro que deseas eliminar?",
      text: "La tabla se eliminara!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Si, eliminar!",
      cancelButtonColor: "#d33",
      cancelButtonText: "No, cancelar eliminado!",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        row.parent().parent().remove();
        swal("Eliminado!", "Su campo ha sido eliminado.", "success");
      } else {
        swal("Cancelado", "Su tabla no ha sido eliminada)", "error");
      }
    });
  });




    $(document).on('click', '.saved', function(){
      var parent = $(this).parent().parent();
      var tdN = parent.children("td:nth-child(1)");
      var tdP = parent.children("td:nth-child(2)");
      var tdE = parent.children("td:nth-child(3)");
      var tdD = parent.children("td:nth-child(4)");
      var tdButtons = parent.children("td:nth-child(5)");

      tdN.html(tdN.children("input[type=text]").val());
      tdP.html(tdP.children("input[type=text]").val());
      tdE.html(tdE.children("input[type=text]").val());
      tdD.html(tdD.children("input[type=text]").val());
      tdButtons.html(
        "<button class=\"btn delete\" id=\"eliminarP\" ><i class=\"fa fa-trash\"></i></button>" + " " +
        "<button class=\"btn edit\" id=\"editarP\" ><i class=\"fa fa-pencil-square-o\"></i></button>"
      );
    });



    $(document).on('click', '.edit', function(){
      var par = $(this).parent().parent(); //trAKDAKLDJ
      var tdN = par.children("td:nth-child(1)");
      var tdP = par.children("td:nth-child(2)");
      var tdE = par.children("td:nth-child(3)");
      var tdD = par.children("td:nth-child(4)");
      var tdButtons = par.children("td:nth-child(5)");

      tdN.html("<input type='text' id='txtcodT' value='"+tdN.html()+"'/>");
      tdP.html("<input type='text' id='txtnombreT' value='"+tdP.html()+"'/>");
      tdE.html("<input type='text' id='txtfechaP' value='"+tdE.html()+"'/>");
      tdD.html("<input type='text' id='txtdur' value='"+tdD.html()+"'/>");
      tdButtons.html("<button class=\"btn btn-warning saved\" title=\"Guardar\"><i class=\"fa fa-archive\"></i></button></td>");
    })
  });





$(document).ready(function(){

$(document).on('click', '.guard', function(){
      var parent = $(this).parent().parent();
      var tdEstado = parent.children("td:nth-child(3)");
      var tdButtons = parent.children("td:nth-child(5)");

      tdEstado.html(tdEstado.children("input[type=text]").val());
      tdButtons.html(
        "<button class=\"btn editEs\" id=\"editEstado\" ><i class=\"fa fa-pencil-square-o\"></i></button>"
      );
    });



    $(document).on('click', '.editEs', function(){
      var par = $(this).parent().parent(); //trAKDAKLDJ
      var tdEstado = par.children("td:nth-child(3)");
      var tdButtons = par.children("td:nth-child(5)");

      tdEstado.html("<input type='text' id='txtEstado' value='"+tdEstado.html()+"'/>");
      tdButtons.html("<button class=\"btn btn-warning guard\" title=\"Guardar\"><i class=\"fa fa-archive\"></i></button></td>");
    })
  });