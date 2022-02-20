/*ICON DE TRES PUNTOS PARA DESPLEGAR EL MENU DE OPCIONES*/
let contPoins=document.querySelector('.container-points');
let icon=document.querySelector('.nav-right__icon4');
icon.addEventListener('click', ()=>{
    contPoins.classList.toggle("spread");  
});
contPoins.addEventListener('click', (e)=>{  /*Click y me avisa que estoy tocando*/
    if(contPoins.classList.contains('spread') && e.target!=contPoins && e.target!=icon){
        contPoins.classList.toggle("spread");        
    }
});


/*CAMBIAMOS EL BACKGROUND DEL NAV AL HACER SCROLL*/
window.addEventListener("scroll",()=>{
	let element = document.querySelector(".header-nav");
	element.classList.toggle("change-nav",window.scrollY>0);
});


/*MANEJO DEL VIDEO, EMDIANTE EL ICON DE VOLUMEN */
let iconVol=document.querySelector(".container-vol__vol");
let video=document.querySelector(".header__video");
console.log(video)
iconVol.addEventListener("click",function(){
	// console.log(iconVol.children[0]);
	if(iconVol.children[0].classList.contains("fa-volume-up")){
		video.muted=true;
		iconVol.children[0].classList.replace("fa-volume-up","fa-volume-off");	
	}else if(iconVol.children[0].classList.contains("fa-volume-off")){
		video.muted=false;
		video.volume=0.5;
		iconVol.children[0].classList.replace("fa-volume-off","fa-volume-up");
	}else{
		video.play();
		iconVol.children[0].classList.replace("fa-play","fa-volume-off");	
		video.muted=true;
	}
});
video.addEventListener("ended",(e)=>{
	if(iconVol.children[0].classList.contains("fa-volume-up")==true){
		iconVol.children[0].classList.replace("fa-volume-up","fa-play");	
	}else{
		iconVol.children[0].classList.replace("fa-volume-off","fa-play");
	}
})


/*MOSSTRAROS LAS IMÁGENES DEL CAROUSEL AL CLICKEAR*/
let imagenes=document.querySelectorAll(" .carousel__lista div ");
let mostrarImagen=document.querySelector(".show-image");
// console.log(imagenes)
mostrarImagen.onclick=()=>{
	mostrarImagen.style.display="none";
}
imagenes.forEach((imagen)=>{
	// console.log(imagen)
	imagen.onclick=()=>{
		let imgSrc=imagen.children[0].getAttribute('src');
		let parraf=imagen.children[1].innerText;
		// console.log(imgSrc)
		mostrarImagen.style.display="flex";
		mostrarImagen.querySelector('img').src=imgSrc;	
		mostrarImagen.querySelector('p').innerText=parraf;
	}
})


/**MOSTRAMOS EL DIV DEL INPUT AL CLICKEAR LA OPCIÓN DE LA LUPA*/
const iconx=document.querySelector('.container-search__icon1')
const contSearch=document.querySelector('.container-search')
const iconSearch=document.querySelector('.nav-right__icon3')
/**Menu para desplegar */
iconSearch.addEventListener('click', ()=>{
    contSearch.classList.toggle("spread-2");
})

iconx.addEventListener('click', e=>{  /*Click y me avisa que estoy tocando*/
    console.log(e.target);
    if(contSearch.classList.contains('spread-2') && e.target!=contSearch ){
        contSearch.classList.toggle("spread-2");        
    }

});
 

/*MANEJO DEL CAROUSEL CON Glider-Js*/
window.addEventListener('load', function(){
	let vistas = document.getElementsByClassName('carousel__lista');
	let num = 1;
	for(let vista of vistas){
		new Glider(vista, {
				slidesToShow: 6,
				slidesToScroll: 1,
				itemWidth: 1,
				exactWidth: false,
				eventPropagate:true,
				scrollPropagate:false,
				draggable: false,
				rewind:true,
				dots: '.carousel__indicadores'+num,
				arrows: {
					prev: '.carousel__anterior'+num,
					next: '.carousel__siguiente'+num
				},
				responsive: [
					{
						// screens greater than >= 1024px
						breakpoint:150,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},{
					// screens greater than >= 1024px
					breakpoint: 350,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
					},{
										// screens greater than >= 1024px
					breakpoint: 450,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
					},{	
					// screens greater than >= 775px
					breakpoint: 750,
					settings: {
						// Set to `auto` and provide item width to adjust to viewport
						slidesToShow: 4,
						slidesToScroll: 2
					}
					},{
					// screens greater than >= 1024px
					breakpoint: 850,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 2
					}
					}
				]
			});	
			num = num + 1;	
		}
});


