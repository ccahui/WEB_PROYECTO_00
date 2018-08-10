
/*AJax*/
//El formulario de inicio Session Profesor es enviado al servlet cuenta Profesor y este 
//Enviara una respuesta,una  cadena si la respuesta dice "OK" iniciamos session y nos vamoas a inicioAlumno.java
//Else significa que el usuario o password es incorrecto
$(document).ready(function () {
    /*El button submit recarga la pagina en si y envia los datos como lo realizaremos mediante
     * AJAX sin recargar la pagina simplemente ponemos false*/
    $('form').submit(function () {
        /*EL objeto this es el formulario con el metodo serialize convierte todos los campos con val name en un objto JSON*/

        var datosJSON = $(this).serialize();
        var metodo = $(this).attr("method");
        var action = $(this).attr("action");
        $.ajax({

            beforeSend: function () {
                $('#rpta').html("<h4>Cargando...</h4>");
            },
            method: metodo,
            url: action,
            data: datosJSON,
            success: function (data) {
                console.log("ok");

                //El servidor envia solo una cadena " Correcto" o "Incorrecito"
                if (data === "ok") {
                    /*El controlador inicio Session se encarga de realizar el preproceso para 
                     * mostrar en una vista de una pagina JSP*/
                    window.location.assign("inicioProfesor");
                } else {
                    $('#rpta').html("<div class='alert alert-danger'> \n\
              <button class='close' data-dismiss='alert'><span>&times;</span>\n\
          </button><strong> Usuario o Password Incorrecto !!!</strong></div>");
                }
            },
            error: function (data) {
                $('#rpta').text("SE Produjo un error " + data);
                console.log("Error " + data);
            },
            /*Sirve el tiempo de espera maximo para la respuesta*/
            timeout: 10000

        });
        return false;
    });
    
    //Esta animacion es de sessionProfesor.jsp mostrar y ocultar Cursos
    

});





      