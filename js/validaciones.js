const formularioFooter = document.querySelector("#form-footer");
const formularioLogin = document.querySelector("#form-login");
const inputFooter = document.querySelector("#form-footer input");
const textareaFooter = document.querySelector("#form-footer textarea");
const inputsLogin = document.querySelectorAll("#form-login input");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-Z0-9\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const validarFormulario = (e) => {
  console.log(e.target.name);
  switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
        inputFooter.style.borderColor = "rgba(0, 0, 0, 0.3)";
        document.querySelector(
          "#grupo-nombre .contain__contact-error"
        ).style.display = "none";
      } else {
        console.log("No el nombre");
        inputFooter.style.borderColor = "red";
        document.querySelector(
          "#grupo-nombre .contain__contact-error"
        ).style.display = "block";
      }
      break;
    case "mensage":
      if (expresiones.nombre.test(e.target.value)) {
        textareaFooter.style.borderColor = "rgba(0, 0, 0, 0.3)";
        document.querySelector(
          "#grupo-mensaje .contain__contact-error"
        ).style.display = "none";
      } else {
        console.log("No el nombre");
        textareaFooter.style.borderColor = "red";
        document.querySelector(
          "#grupo-mensaje .contain__contact-error"
        ).style.display = "block";
      }
      break;
  }
};

formularioFooter.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputFooter.addEventListener("keyup", validarFormulario);
inputFooter.addEventListener("blur", validarFormulario);
textareaFooter.addEventListener("keyup", validarFormulario);
