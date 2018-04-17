$(document).ready(function () {
    $('#datePicker')
        .datepicker({
            autoclose: true,
            format: 'dd/mm/yyyy'
        })
        .on('changeDate', function (e) {
            // Revalidate the date field
            $('#RegisterUsuario').formValidation('revalidateField', 'date');
        });

    $('#RegisterUsuario').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {


            Nombres: {
                // row: '.col-xs-4',
                validators: {
                    notEmpty: {
                        message: 'El campo Nombre es obligatorio'
                    },
                     stringLength: {
                        min: 4,
                        max: 16,
                        message: 'El Nombre del usuario debe tener como minimo 4 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA.]+$/i,
                        message: 'El Nombre puede llevar caracteres alfabéticos y espacios solamente'
                    }
                }
            },


             Apellidos: {
                // row: '.col-xs-4',
                validators: {
                    notEmpty: {
                        message: 'El campo Apellidos es obligatorio'
                    },
                     stringLength: {
                        min: 6,
                        max: 16,
                        message: 'Los Apellidos del usuario debe tener como minimo 6 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'Los Apellidos pueden llevar caracteres alfabéticos y espacios solamente'
                    }
                }
            },


            cedula: {
                validators: {
                    notEmpty: {
                        message: 'El Numero de Documento es Requerido'
                    },
                    stringLength: {
                        min: 6,
                        max: 15,
                        message: 'El Numero de Documento debe tener como minimo 6 caracteres'
                    },
                    regexp: {
                        regexp: /^[0-9_\.]+$/,
                        message: 'El Numero de Documento solo acepta valores numericos'
                    }
                }
            },


            email: {
                validators: {
                    notEmpty: {
                        message: 'El correo electronico es obligatorio'
                    },
                     stringLength: {
                        min: 4,
                        max: 16,
                        message: 'El correo electrónico del usuario debe tener como minimo 4 caracteres'
                    },
                        regexp: {
                            regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                            message: 'La dirección de correo electrónico no válida.'
                    }
                }
            },

            password: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es obligatoria'
                    },
                    callback: {
                        callback: function (value, validator, $field) {
                            var password = $field.val();
                            if (password == '') {
                                return true;
                            }

                            var result = zxcvbn(password),
                                score = result.score,
                                message = result.feedback.warning || 'La contraseña es debil';

                            // Update the progress bar width and add alert class
                            var $bar = $('#strengthBar');
                            switch (score) {
                                case 0:
                                    $bar.attr('class', 'progress-bar progress-bar-danger')
                                        .css('width', '1%');
                                    break;
                                case 1:
                                    $bar.attr('class', 'progress-bar progress-bar-danger')
                                        .css('width', '25%');
                                    break;
                                case 2:
                                    $bar.attr('class', 'progress-bar progress-bar-danger')
                                        .css('width', '50%');
                                    break;
                                case 3:
                                    $bar.attr('class', 'progress-bar progress-bar-warning')
                                        .css('width', '75%');
                                    break;
                                case 4:
                                    $bar.attr('class', 'progress-bar progress-bar-success')
                                        .css('width', '100%');
                                    break;
                            }

                            // We will treat the password as an invalid one if the score is less than 3
                            if (score < 3) {
                                return {
                                    valid: false,
                                    message: message
                                }
                            }

                            return true;
                        }
                    }
                }
            },

        }
    });
});
