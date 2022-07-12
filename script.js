// Codigo Cuadrado

// const ladoCuadrado = 5;
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

console.group("Cuadrado");
// console.log("Los lados del cuadrado miden "+ ladoCuadrado + "cm");
// console.log("El perimetro del cuadrado es "+ perimetroCuadrado + "cm") ;
// console.log("El  area del cuadrado es "+ areaCuadrado + "cm2");
console.groupEnd();

// Codigo Triangulo

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

// console.group("Triangulo");
// console.log("Los lados del triangulo miden "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm"
// );
// console.log("La altura del Triangulo es de: "+ alturaTriangulo + "cm");
// console.log("El perimetro del Triangulo es de: "+ perimetroTriangulo + "cm");
// console.log("El  area del Triangulo es "+ areaTriangulo + "cm2");
// console.groupEnd();

// Codigo Circulo
//Radio
// const radioCirculo = 4;

// Diametro
function diametroCirculo(radio){
    return radio *2;
}


// PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area

function areaCirculo (radio){
    return (radio * radio)* PI;
}

function calcularPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    
    const input = document.getElementById("inputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
}

