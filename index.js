// 1
let variableSinValor;
// 2
let booleano1 = true;
let booleano2 = false;
// 3
const PI = 3.14;
// 4
const TAU = PI * 2;
// 5
let booleanoAnd = booleano1 && booleano2;
// 6
let booleanoNot = !booleano1;
// 7
let booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
// 8
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
// 9
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// BUCLES

// 10
let contarHasta10_2 = 0;
for (let i = 0; i <= 10; i++) {
  contarHasta10_2 = i;
}
// 11
let postI = 0;
let postJ = 0;

while (postJ < 11) {
  postI = postI + postJ;
  console.log("El valor es:", postJ);
  postJ++;
}
// 12
let sumaPares = 0;
let i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    sumaPares = sumaPares + i;
    i++;
  } else {
    i++;
  }
}

// VARIABLES

// 13
let variableValorNumerico = 21;
// 14
const MiNombre = "Juanda";
// 15
const MiNumeroFav = 22;

// BOOLEANOS

// 16
let booleanoOr = booleano1 || booleano2;
// 17
let booleanoMix1 =
  booleano1 && (TAU / 2 === PI || variableValorNumerico >= MiNumeroFav);
// 18
let seisNoEsNueve = 6 !== 9;
// 19
let booleanoMix2 =
  variableValorNumerico > 0 || variableValorNumerico < MiNumeroFav * TAU;

// OPERADORES

// 20
let valorSuma = MiNumeroFav + variableValorNumerico;
// 21
let valorResta = MiNumeroFav - variableValorNumerico;
// 22
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
// 23
let valorDivision = MiNumeroFav / 3;

// BUCLES

// 24
let contarHasta10 = 0;
i = 0;
while (i<11) {
    contarHasta10 = i;
    i++;
    console.log(contarHasta10)
}
// 25
let preI = 0;
let preJ = 0;
for (let index = 0; index <= 10; index++) {
    ++preJ
    preI += preJ
}
// 26
let sumaImpares = 0;

i = 0;
while (i<10) {
    if (i%2 !== 0) {
        sumaImpares += i;
    } 
    i++;
}
