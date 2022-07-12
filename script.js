// Codigo Cuadrado

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.group("Cuadrado");
console.log("Los lados del cuadrado miden "+ ladoCuadrado + "cm");
console.log("El perimetro del cuadrado es "+ perimetroCuadrado + "cm") ;
console.log("El  area del cuadrado es "+ areaCuadrado + "cm2");
console.groupEnd();

// Codigo Triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;


console.group("Triangulo");
console.log("Los lados del triangulo miden "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm"
);
console.log("La altura del Triangulo es de: "+ alturaTriangulo + "cm");
console.log("El perimetro del Triangulo es de: "+ perimetroTriangulo + "cm");
console.log("El  area del Triangulo es "+ areaTriangulo + "cm2");
console.groupEnd();

// Codigo Circulo


console.group("Circulo");
console.groupEnd();