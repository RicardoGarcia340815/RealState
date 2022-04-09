const imagenes = document.querySelectorAll(".propiedad__imagen");//Siempre se hace referencia al documento (html)
//querySelector, solo saca un resultado y querySelectorAll agarra todos los elementos a seleccionar


window.addEventListener("scroll", () =>{

    const scroll = this.scrollY /-20;

    imagenes.forEach( (imagen) =>{
    imagen.style.getElementsByClassName.backgroundPositionY = `${scroll}px`;
    
    })

});