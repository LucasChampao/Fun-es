const imprimir = (nome, idade) => {
    if (idade === undefined) {
        if (nome !== undefined) {
            console.log('Ola ' + nome)
        }
    } else {
        console.log('nome: ' + nome + 'idade: ' + idade)
    }
}
imprimir()
imprimir('Lucas ')
imprimir('Lucas ', 18)



const repetirFrase = (frase, n = 2) => {
    for (let i = 0; i <= n; i++) {
        console.log(frase + ' ' + n)
    }
}
repetirFrase('unialfa', 8)
repetirFrase('Somente 2 vezes ')

