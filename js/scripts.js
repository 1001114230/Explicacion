

$(document).ready(function(){

  $(document).on('click','.btn-outline-warning', function(){
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
