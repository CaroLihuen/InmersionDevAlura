//Agregar funcionalidades como link de youtuve a cada pelicula
//también guardar correctamente las imagenes o eliminar en la lista, 
//podría ser objeto también.
function agregarPelicula(){
 let peliAgregada = document.getElementById('pelicula').value 
 let imgAgregada = document.getElementById('listaPeliculas')
 
 imgAgregada.innerHTML +=`<img src=${peliAgregada}>`
 
 document.getElementById('pelicula').value = ''
}