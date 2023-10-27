// FUNÇÕES

function soma(a, b) {
    return a * b
}

console.log(soma(10, 20))

const resul = soma(15, 2)
    console.log(`o resultado é `+ resul)

function podeDirigir(idade, cnh){
    if( idade >= 18 && cnh == true){
        console.log("PODE DIRIGIR")
    }else{
        console.log("NÃO PODE DIRIGIR !")
    }
}
podeDirigir(18, true)
podeDirigir(19, false)
podeDirigir(18, 0) // 0 = false
podeDirigir(24, 1)// 1 = true 

