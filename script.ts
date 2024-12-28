import { Produto, hamburguer, batataFrita, refrigerante } from "./produtos";

const lista: string[] = [];

if (hamburguer.value && refrigerante.value < batataFrita.value) {
    lista.push("Batata Frita");
} 
if (refrigerante.value < hamburguer.value) {
    lista.push("Hámburguer");
} 
else {
    lista.push("Refrigerante");
}

if (!lista.includes("Refrigerante")) {
    lista.push("Refrigerante")
}

console.log(lista);
