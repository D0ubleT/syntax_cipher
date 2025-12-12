// Vamos a identificar con un id al formulario, a los campos (usuario y psw) 
// y también al botón de Ingresar

//Vamos a extraer los datos de los campos usuario y psw

//Crear una función que permita comparar el usuario y psw con los datos válidos
//Utilizamos usuario y psw hardcodeados.

//Si los datos que ingresa el usuario son correctos, redireccionamos a 
//bienvenida.html

//Caso contrario , mostramos un mensaje de error.


function validarForm() {
  console.log("ValidarForm");
  const usuarioValido = "syntaxcipher";
  const pswValido = "Seele777";

  const usrUser = document.getElementById('id_user').value;
  const usrPsw = document.getElementById('id_psw').value;

  let esValido = true;

  //Condicionales para validar
  if(usrUser.length < 1) {
    mostrarError('empty_user', 'El campo usuario no puede estar vacío');
    esValido = false;
  } else {
    ocultarError('empty_user');
  }

  if(usrPsw.length < 1) {
    mostrarError('empty_psw', 'El campo password no puede estar vacío');
    esValido = false;
  } else {
    ocultarError('empty_psw');
  }

  if(usuarioValido !== usrUser || pswValido !== usrPsw) {
    mostrarError('login_error', 'Las credenciales no son válidas');
    esValido = false;
  } else {
    ocultarError('login_error');
  }

  return esValido;

}

function mostrarError(fieldId, message) {
  const errorElement = document.getElementById(fieldId + '_error');
  errorElement.textContent = "❌ " + message;
  errorElement.style.display = 'block';
}

function ocultarError(fieldId) {
  const errorElement = document.getElementById(fieldId + '_error');
  errorElement.style.display = 'none';
}


/*
Agregamos un listener a nuestro botón Ingresar , que al hacer click el usuario
sobre el mismo, se dispare la función de validarForm.
*/
const btnIngresar = document.getElementById('btn_login');
btnIngresar.addEventListener('click', function(event) {
  event.preventDefault;
  console.log("Entramos en el listener");
  if(validarForm()) {
    window.location.href = "pages/home.html";
  }
});
