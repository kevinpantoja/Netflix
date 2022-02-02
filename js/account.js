var administrar = document.getElementById("administrar");
var estado = false;
administrar.onclick = () => {
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
        administrar.innerHTML = '<i class="fas fa-pencil-alt"></i><span>Administrar</span>';
    }
    estado = !estado;
};