// Fecha
const footer = document.querySelector("footer");
const date = new Date().getFullYear();

const html = `
<p class="foot__text">
Desarrollado por <span>Luis Fructuoso</span> (${date})
</p>
`;
footer.innerHTML = html;
