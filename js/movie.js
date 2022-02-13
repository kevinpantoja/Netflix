/*Variables para desplegar en menu de los 3 puntos*/
const icon=document.querySelector('.menu__icon4');
const contPoins=document.querySelector('.container-points');
/**Menu para desplegar */
icon.addEventListener('click', ()=>{
    /*Cargamos la clase de contPoints con una clase extra*/
    contPoins.classList.toggle("spread");  /*Si no exsite spread en la clase se le le agrega y quedaría  "content-Points spread"*/
});

icon.addEventListener('click', e=>{  /*Click y me avisa que estoy tocando*/
    console.log(e.target);
    console.log(icon);
    console.log(menu);
    if(menu.classList.contains('spread') && e.target!=contPoins && e.target!=icon){
        menu.classList.toggle("spread");        
    }

});



const iconx=document.querySelector('.container-search__icon1')
const contSearch=document.querySelector('.container-search')
const iconSearch=document.querySelector('.menu__icon3')
/**Menu para desplegar */
iconSearch.addEventListener('click', ()=>{
    contSearch.classList.toggle("spread-2");
})

iconx.addEventListener('click', e=>{  /*Click y me avisa que estoy tocando*/
    console.log(e.target);
    console.log(iconx);
    console.log(contSearch);
    if(contSearch.classList.contains('spread-2') && e.target!=contSearch ){
        contSearch.classList.toggle("spread-2");        
    }

});
 

/*El propósito de este evento es proporcionar información sobre el estado de carga del documento o elemento */
document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCarousel=document.querySelectorAll(".carousel");
    console.log(elementosCarousel);
    M.Carousel.init(elementosCarousel,{
        duration: 500,  
        dist: 4,
        shift: 1,           
        padding:10,         //Borde interno
        numVisible: 7,      //Número de imágenes
        indicators: false,   //Puntos de indicación
        noWrap: true        //FIn de items

    });
});



// let btn_play=document.querySelector(".container-content__play");
// let video=document.querySelector(".header__video");

// btn_play.addEventListener('click', ()=>{
//     // location.reload();
//     console.log(video);
//     console.log(video);
  
// })




/* //Para el input
let busqueda_input = document.querySelector('.contenedor__input');
let contenido_output = document.querySelectorAll('.contenedor-galeria__img'); //devuelve Todas los selectores coincidentes con dicha clase
console.log(busqueda_input);
busqueda_input.oninput = () =>{
   contenido_output.forEach((filtrado) => {
        let expreg=new RegExp(".*"+busqueda_input.value.toLowerCase()+".*"); 
        // let expreg=new RegExp("[A-Z]*"+busqueda_input.value.toLowerCase()+".*"); 
        if(expreg.test(filtrado.children[1].innerText.toLowerCase())){
            filtrado.style.display = 'block';
            filtrado.style.color='gray';
            filtrado.style.tranition='transition: all 0.8 linear';
        }else{
            filtrado.style.display = 'none';
        }
   });

};

*/