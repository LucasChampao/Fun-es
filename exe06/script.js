function lembrarSoma(x) {
    return function (y) {
        return x + y
    }
}

let soma1 = lembrarSoma(2)

console.log(soma1(8))
console.log(soma1(5))

let soma2 = lembrarSoma(4)

console.log(soma2(8))
