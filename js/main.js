function saludo(){
    const cliente = prompt ("Ingrese su nombre").toUpperCase();
    alert ("Bienvenid@ " + cliente);
}
saludo();

const descuento = (precioProducto) =>{
    if (precioProducto <= 100000){
        return "¡Tenés un 20% de descuento en efectivo!";
    }else{
        return "Precio de lista con hasta 12 cuotas sin interés";
    }
}

while (true){
    let nombreProducto = prompt("Ingrese producto a calcular / Para salir presione Esc").toUpperCase();
    let precioProducto = parseInt(prompt("Ingrese precio de producto"));
    const iva = x => x * 1.21;
    let resultado = parseInt(iva(precioProducto));
    alert("El precio de " + nombreProducto + " es de " + "$" + resultado);
    alert("El precio de lista es " + "$" + resultado + ": " + descuento(precioProducto));
    console.log("El precio de " + nombreProducto + " es de " + "$" + resultado);
}
