// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


//COMENTARIO: esta es la forma mas limpia, segura y sencilla de validar pero se requeria de ver la experiencia con js o jquery
/*$(document).ready(function () {
    $("#new_empleado").validate({
        debug: true,
        lang: 'es-AR',
        rules: {
            "empleado[nombre]": {required: true },  //added this
            "empleado[rfc]": {required: true },
            "empleado[sucursales_id]": {required: true }
        }
    });
});*/

/* Mis validaciones  */

/*Mensajes*/
var msj_requerido= "Este campo es requerido.";
var msj_numerico= "El valor tiene que ser numerico.";
var msj_email = "Favor de ingresar un email valido.";
var msj_pass_no_match = "La contraseña no coincide.";

$(document).ready(function() {

    /* Empleados  */
    var err_1 = false;
    var err_2 = false;
    var err_3 = false;
    var err_4 = false;
    var err_5 = false;
    var err_6 = false;
    var err_7 = false;
    var err_4_2 = false;
    var err_5_2 = false;
    var err_1_2 = false;


    validar_en_focus("#empleado_nombre", "#empleado_err_nombre");
    validar_en_focus("#empleado_rfc", "#empleado_err_rfc");
    validar_en_focus("#empleado_sucursales_id", "#empleado_err_sucursales_id");


    $('#new_empleado').submit(function () {
        err_1 = err_2 = err_3 = false;

        err_1 = verificar_campo_vacio("#empleado_nombre", "#empleado_err_nombre");
        err_2 = verificar_campo_vacio("#empleado_rfc", "#empleado_err_rfc");
        err_3 = verificar_campo_vacio("#empleado_sucursales_id", "#empleado_err_sucursales_id");

        if (!err_1 && !err_2 && !err_3) {
            return true;
        } else {
            return false;
        }
    });

    /* Sucursales */

    validar_en_focus("#sucursale_nombre", "#sucursale_nombre_err");
    validar_en_focus("#sucursale_calle", "#sucursale_calle_err");
    validar_en_focus("#sucursale_colonia", "#sucursale_colonia_err");
    validar_en_focus_num("#sucursale_numeroExterior", "#sucursale_numeroExterior_err");
    validar_en_focus_num("#sucursale_numeroInterior", "#sucursale_numeroInterior_err");
    validar_en_focus("#sucursale_ciudad", "#sucursale_ciudad_err");
    validar_en_focus("#sucursale_pais", "#sucursale_pais_err");

    $('#new_sucursale').submit(function () {
        err_1 = err_2 = err_3 = err_4 = err_5= err_6 = err_7 = err_4_2 = err_5_2 =false;

        err_1 = verificar_campo_vacio("#sucursale_nombre", "#sucursale_nombre_err");
        err_2 = verificar_campo_vacio("#sucursale_calle", "#sucursale_calle_err");
        err_3 = verificar_campo_vacio("#sucursale_colonia", "#sucursale_colonia_err");
        err_4 = verificar_campo_vacio("#sucursale_numeroExterior", "#sucursale_numeroExterior_err");
        err_5 = verificar_campo_vacio("#sucursale_numeroInterior", "#sucursale_numeroInterior_err");
        if(!err_4)
        err_4_2 = esNumero("#sucursale_numeroExterior", "#sucursale_numeroExterior_err");
        if(!err_5)
        err_5_2 = esNumero("#sucursale_numeroInterior", "#sucursale_numeroInterior_err");
        err_6 = verificar_campo_vacio("#sucursale_ciudad", "#sucursale_ciudad_err");
        err_7 = verificar_campo_vacio("#sucursale_pais", "#sucursale_pais_err");

        if (!err_1 && !err_2 && !err_3 && !err_4 && !err_5 && !err_6 && !err_7 && err_4_2 && err_5_2) {
            return true;
        } else {
            return false;
        }

    });

    /* Usuarios */

    validar_en_focus_email("#usuario_email", "#usuario_email_err");
    validar_en_focus("#usuario_nombre", "#usuario_nombre_err");
    validar_en_focus("#usuario_rfc", "#usuario_rfc_err");
    validar_en_focus("#usuario_nombreEmpresa", "#usuario_nombreEmpresa_err");
    validar_en_focus_pass("#usuario_password", "#usuario_password_err","#usuario_password_confirmation","#usuario_password_confirmation_err");
    validar_en_focus_pass("#usuario_password_confirmation", "#usuario_password_confirmation_err","#usuario_password","#usuario_password_err");


    $('#new_usuario').submit(function () {
        err_1 = err_1_2 = err_2 = err_3 = err_4 = err_5= err_6 = err_4_2 = err_5_2 =false;

        err_1 = verificar_campo_vacio("#usuario_email", "#usuario_email_err");
        if(!err_1_2)
            err_1_2 = email_valido("#usuario_email", "#usuario_email_err")
        err_2 = verificar_campo_vacio("#usuario_nombre", "#usuario_nombre_err");
        err_3 = verificar_campo_vacio("#usuario_rfc", "#usuario_rfc_err");
        err_4 = verificar_campo_vacio("#usuario_password", "#usuario_password_err");
        err_5 = verificar_campo_vacio("#usuario_password_confirmation", "#usuario_password_confirmation_err");
        err_6 = verificar_campo_vacio("#usuario_nombreEmpresa", "#usuario_nombreEmpresa_err");

        if(!err_4)
        {
            err_4_2 = passwordValido("#usuario_password", "#usuario_password_err","#usuario_password_confirmation","#usuario_password_confirmation_err");
        }

        if(!err_5)
        {
            err_5_2 = passwordValido("#usuario_password_confirmation", "#usuario_password_confirmation_err","#usuario_password","#usuario_password_err");
        }

        if (!err_1 && !err_2 && !err_3 && !err_4 && !err_5 && !err_6 && err_1_2 && err_4_2 && err_5_2) {
            return true;
        } else {
            return false;
        }

    });

});

/*
 * params
 * id_campo: este parametro se usa para el id del elemento que se desea validar
 * id_campo_err: es el id que se desee dar al mensaje
 * */
function validar_en_focus(id_campo,id_campo_err)
{
    var valido=false;
    $(id_campo).focusout(function(){
        valido =  verificar_campo_vacio(id_campo,id_campo_err);
    });
    return valido;
}

function validar_en_focus_num(id_campo,id_campo_err)
{
    var valido=false;
    $(id_campo).focusout(function(){
        valido =  verificar_campo_vacio(id_campo,id_campo_err);
        if(!valido)
            esNumero(id_campo, id_campo_err);
    });


}

function validar_en_focus_email(id_campo,id_campo_err)
{
    var valido=false;
    $(id_campo).focusout(function(){
        valido =  verificar_campo_vacio(id_campo,id_campo_err);
        if(!valido)
            email_valido(id_campo, id_campo_err);
    });
}

function validar_en_focus_pass(id_campo,id_campo_err,compara_pass)
{
    var valido=false;
    $(id_campo).focusout(function(){
        valido =  verificar_campo_vacio(id_campo,id_campo_err);
        if(!valido)
            passwordValido(id_campo, id_campo_err,compara_pass);
    });
}



function email_valido(id_campo,id_campo_err)
{

    var inputText=$(id_campo).val();

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.length>0)
    if(inputText.match(mailformat))
    {
        mostrarOcularMensajeError(true,id_campo,id_campo_err,msj_email);
        return true;
    } else
        {
            mostrarOcularMensajeError(false,id_campo,id_campo_err,msj_email);
            return false;
        }

}

function passwordValido(id_campo,id_campo_err,compara_pass,comprara_pass_err)
{
    var pass_1=$(id_campo).val();
    var pass_2=$(compara_pass).val();

    if(pass_1 != pass_2 && pass_2.length>0)
    {
        mostrarOcularMensajeError(false,id_campo,id_campo_err,msj_pass_no_match);
        return false;
    }else{
        mostrarOcularMensajeError(true,id_campo,id_campo_err,msj_pass_no_match);
        mostrarOcularMensajeError(true,compara_pass,comprara_pass_err,msj_pass_no_match);
        return true;
    }

}



/*
* params
* id_campo: este parametro se usa para el id del elemento que se desea validar
* id_campo_err: es el id que se desee dar al mensaje
* */
function verificar_campo_vacio(id_campo,id_campo_err){

    var valido=($(id_campo).val().length > 0);
    return mostrarOcularMensajeError(valido,id_campo,id_campo_err,msj_requerido);
}



function mostrarOcularMensajeError(valido,id_campo,id_campo_err,msj_error){
    var span=$("<span class='msg-error' id='"+id_campo_err+"' >" + msj_error + "</span>");;
    if(document.getElementById(id_campo_err))
    {
        span.remove();
        var borrar = document.getElementById(id_campo_err).outerHTML='';
        delete borrar;
    }else
    {
        span = $("<span class='msg-error' id='"+id_campo_err+"' >" + msj_error + "</span>");
    }

    if(valido)
    {
        $(id_campo).removeAttr('style');
        if(document.getElementById(id_campo_err))
        {
            span.remove();
            var borrar = document.getElementById(id_campo_err).outerHTML='';
            delete borrar;
        }
        return false;
    }else
    {
        $(id_campo).css('border-color','#ff5661');
        span.insertAfter(id_campo);
        //$(id_campo_err).show();
        //$(id_campo_err).html(msj_requerido);

        return true;
    }
}

function esNumero(id_campo,id_campo_err) {

    var n=$(id_campo).val();
    var valido = !isNaN(parseFloat(n)) && isFinite(n);
    console.log('es numero '+valido+' n='+n);
    if(!valido)
    {
        mostrarOcularMensajeError(valido,id_campo,id_campo_err,msj_numerico);
    }
    else
    {
        mostrarOcularMensajeError(valido,id_campo,id_campo_err,msj_numerico);
    }
    return valido;
}




