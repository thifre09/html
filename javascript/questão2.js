let c = Number(window.prompt("Digite o capital inicial"));
let taxaJuros = 0.05;
let meses = 240;
let m = c * ((1+taxaJuros) ** 240)
console.log(m)