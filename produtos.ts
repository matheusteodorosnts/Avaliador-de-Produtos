interface Produto {
    name: string
    value: number
};

const hamburguer: Produto = {
    name: "Hámburguer",
    value: 11
}
const batataFrita: Produto = {
    name: "Batata Frita",
    value: 16
}
const refrigerante: Produto = {
    name: "Refrigerante",
    value: 9
}

export { Produto, hamburguer, batataFrita, refrigerante }