"use strict";

function mediaSimples() {
  var media = 0;
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  numeros.forEach(function (n) {
    return media += n;
  });
  media = media / numeros.length;
  return media;
}
console.log(mediaSimples(2, 5, 6, 3, 4));
function mediaPonderada() {
  var media = 0;
  for (var _len2 = arguments.length, numeros = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numeros[_key2] = arguments[_key2];
  }
  numeros.forEach(function (num) {
    return media += (num === null || num === void 0 ? void 0 : num.n) * (num === null || num === void 0 ? void 0 : num.p);
  });
  media = media / numeros.reduce(function (acumulador, n) {
    return acumulador + n.p;
  }, 0);
  return media;
}
console.log(mediaPonderada({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
}));
function mediana() {
  var mediana;
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  ordenado = [].concat(numeros).sort(function (a, b) {
    return a - b;
  });
  if (ordenado.length % 2 == 0) {
    mediana = (ordenado[Math.floor(ordenado.length / 2)] + ordenado[Math.floor(ordenado.length / 2) - 1]) / 2;
  } else {
    mediana = ordenado[Math.floor(ordenado.length / 2)];
  }
  return mediana;
}
console.log(mediana(2, 4, 5, 7, 42, 99));
console.log(mediana(15, 14, 8, 7, 3));
function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantidade = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidade.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidade[0][0];
}
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));