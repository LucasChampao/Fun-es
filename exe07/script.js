function recursao(num) {
    if (num - 1 < 2) {
        console.log('Recursao parou !!')
    } else if (num % 2 != 0){
        console.log(' Numero Impar !!' + num)
        recursao (num - 1)
    }else{
        console.log(' Numero par !!' + num)
        recursao (num - 2)
    }

}
recursao(14)

