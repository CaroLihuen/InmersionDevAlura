//Cambiar a bitcoins
var nombreUsuario = "Jeanmarie";
var valorEnEthereum = 3;
var cotizacionEnEthereum = 8109.71;
var valorEnPeso = (valorEnEthereum * cotizacionEnEthereum).toFixed(2);
// valorEnPeso = valorEnPeso.toFixed(2);
alert('Hola ' + nombreUsuario + ', el valor en reales es de R$ '+ valorEnPeso);