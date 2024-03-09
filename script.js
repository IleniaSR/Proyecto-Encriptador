/*-------------------- Elementos --------------------*/

const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar")
const txtEncriptar = document.querySelector(".texto-encriptar");
const aviso = document.querySelector(".info-adicional");
const respuesta = document.querySelector(".resultado");
const contenido = document.querySelector(".contenedor-info");
const btnCopiar = document.querySelector(".btn-copiar");



/* -------------------- Funcion del Boton Encriptar -------------------- */

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800",
        aviso.textContent = "El campo de texto no puede estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if(texto !== txt ){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800",
        aviso.textContent = "Solo letras minúsculas y sin acentos";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if (texto !== txt.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800",
        aviso.textContent = "Solo letras minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});


/* -------------------- Funcion del Botón Desencriptar -------------------- */

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800",
        aviso.textContent = "El campo de texto no puede estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if(texto !== txt ){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800",
        aviso.textContent = "Solo letras minúsculas y sin acentos";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else if (texto !== txt.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fff";
        aviso.style.fontWeight = "800",
        aviso.textContent = "Solo letras minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },2000);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});


/* -------------------- Funcion del Botón Copiar -------------------- */

btnCopiar.addEventListener("click", e=>{
    e.preventDefault()
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});

