// Footer
const formularioFooter = document.querySelector("#form-footer");
const inputFooter = document.querySelector("#form-footer input");
const textareaFooter = document.querySelector("#form-footer textarea");

// Login
const formularioLogin = document.querySelector("#form-login");
const inputsLogin = document.querySelectorAll("#form-login input");

// Agregar
const formularioAgregar = document.querySelector("#form-agregar");
const inputsAgregar = document.querySelectorAll("#form-agregar input");

console.log(formularioAgregar, inputsAgregar);

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-Z0-9\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  precio: /^\d{1,14}$/, // 7 a 14 numeros.
};

const validarFormularioFooter = (e) => {
  console.log(e.target.name);
  switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
        inputFooter.style.borderColor = "rgba(0, 0, 0, 0.3)";
        document.querySelector(
          "#grupo-nombre .contain__contact-error"
        ).style.display = "none";
      } else {
        inputFooter.style.borderColor = "red";
        document.querySelector(
          "#grupo-nombre .contain__contact-error"
        ).style.display = "block";
      }
      break;
  }
};

const validarFormularioLogin = (e) => {
  console.log(e.target.name);
  switch (e.target.name) {
    case "correo":
      if (expresiones.correo.test(e.target.value)) {
        document.querySelector("#correo").style.borderColor =
          "rgba(0, 0, 0, 0.3)";
        document.querySelector(
          "#grupo-email .contain__contact-error"
        ).style.display = "none";
      } else {
        document.querySelector("#correo").style.borderColor = "red";
        document.querySelector(
          "#grupo-email .contain__contact-error"
        ).style.display = "block";
      }
      break;
    case "password":
      if (expresiones.password.test(e.target.value)) {
        document.querySelector("#password").style.borderColor =
          "rgba(0, 0, 0, 0.3)";
        document.querySelector(
          "#grupo-password .contain__contact-error"
        ).style.display = "none";
      } else {
        document.querySelector("#password").style.borderColor = "red";
        document.querySelector(
          "#grupo-password .contain__contact-error"
        ).style.display = "block";
      }
      break;
  }
};

const validarFormularioAgregar = (e) => {
  console.log(e.target.name);
  switch (e.target.name) {
    case "nombre-producto":
      if (expresiones.nombre.test(e.target.value)) {
        document.querySelector("#nombre-producto").style.borderColor =
          "rgba(0, 0, 0, 0.3)";
        document.querySelector(
          "#grupo-agregar .contain__contact-error"
        ).style.display = "none";
      } else {
        document.querySelector("#nombre-producto").style.borderColor = "red";
        document.querySelector(
          "#grupo-agregar .contain__contact-error"
        ).style.display = "block";
      }
      break;
    case "precio":
      if (expresiones.precio.test(e.target.value)) {
        document.querySelector("#precio").style.borderColor =
          "rgba(0, 0, 0, 0.3)";
        document.querySelector(
          "#grupo-precio .contain__contact-error"
        ).style.display = "none";
      } else {
        document.querySelector("#precio").style.borderColor = "red";
        document.querySelector(
          "#grupo-precio .contain__contact-error"
        ).style.display = "block";
      }
      break;
    case "desc":
      if (expresiones.nombre.test(e.target.value)) {
        document.querySelector("#desc").style.borderColor =
          "rgba(0, 0, 0, 0.3)";
        document.querySelector(
          "#grupo-desc .contain__contact-error"
        ).style.display = "none";
      } else {
        document.querySelector("#desc").style.borderColor = "red";
        document.querySelector(
          "#grupo-desc .contain__contact-error"
        ).style.display = "block";
      }
      break;
  }
};

formularioFooter?.addEventListener("submit", (e) => {
  e.preventDefault();
});
formularioLogin?.addEventListener("submit", (e) => {
  e.preventDefault();
});
formularioAgregar?.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputFooter?.addEventListener("keyup", validarFormularioFooter);
inputFooter?.addEventListener("blur", validarFormularioFooter);
textareaFooter?.addEventListener("keyup", validarFormularioFooter);

inputsLogin?.forEach((input) => {
  input.addEventListener("keyup", validarFormularioLogin);
});

inputsAgregar?.forEach((input) => {
  input.addEventListener("keyup", validarFormularioAgregar);
});
document
  .querySelector("#desc")
  .addEventListener("keyup", validarFormularioAgregar);
