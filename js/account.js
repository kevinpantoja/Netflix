var administrar = document.getElementById("administrar");
var estado = false;
administrar.onclick = function() {
    let titulo = document.getElementById("titulo");
    if(!estado){
        let contenedores = document.getElementsByClassName("contenedor__cuenta__img");
        for(let cuenta of contenedores){
            cuenta.classList.add("img-edicion");
        }
        let iconos = document.getElementsByClassName("lapiz-edicion");
        for(let cuenta of iconos){
            cuenta.classList.remove("lapiz-oculto");
        }
        titulo.innerText = "Administrar perfiles";
        administrar.innerHTML = '<i class="fas fa-times"></i><span>Listo</span>';
    }else{
        let contenedores = document.getElementsByClassName("contenedor__cuenta__img");
        for(let cuenta of contenedores){
            cuenta.classList.remove("img-edicion");
        }
        let iconos = document.getElementsByClassName("lapiz-edicion");
        for(let cuenta of iconos){
            cuenta.classList.add("lapiz-oculto");
        }
        titulo.innerText = "¿Quién está viendo ahora?";
        administrar.innerHTML = '<i class="fas fa-pen"></i><span>Administrar</span>';
    }
    estado = !estado;
};


var cuentas = document.getElementsByClassName("contenedor__cuenta");
for(let cuenta of cuentas){
    cuenta.children[1].children[0].onclick = function(){
        let rutaImagen = this.parentElement.parentElement.children[0].src;
        let nombre = this.parentElement.parentElement.children[2].innerText;
        window.location.href="./editAccount.php?ruta='"+rutaImagen+"'&nombre='"+nombre+"'";
    }
}