// const precioOriginal = 120;
// const descuento = 18;

const cupon = [
    "Hola",
    "Mundo",
    "Yo bien"
]
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)
     / 100;
     return precioConDescuento;
}



function onClickButtonDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;
    let descuento;



switch(cuponValue){
    case cupon[0]:
        descuento = 15;
    break;
    case cupon[1]:
        descuento = 25;
    break;
    case cupon[2]:
        descuento = 30;
    break;
}

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultParrafo");
    resultP.innerText = "El precio con descuento son "+ "$" + precioConDescuento;
}

