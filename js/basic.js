console.log('Olá, JavaScript!')

var userName ='ErickBios'

document.getElementById('user-name').innerHTML = userName;

// Variráveis //

// var nome ='Mestre Yoda'
// var idade = 100
// var jedi = true


//Operadores matemáticos //
// var n1 = 7
// var n1 = 2.5
/*Operadores */
// + para somar
// - para subtrarir
// * Multiplicar
// / para dividir

// var total = n1 / n2
// console.log = (total)

// Operadores de comparação

// var v1 = 5
// var v2 = '5'

// var result = v1 !== v2
// console.log(result)

//function in JavaScript//

// function soma(n1, n2){

//     console.log(n1 + n2)
// }
// soma(1, 2)

// function boasVinhdas(nome) {
//     alert(nome + ', seja bem-vindo(a)')
// }

// boasVinhdas('Fernando')

// function soma(n1, n2){

//     return n1 + n2
// }

// var result = soma(5,5)
// console.log(result)
/*
---------------------------------------------------------------------------------------------------------------------------------
*/


// Controle de Fluxo // BDD > Behavior-Driven Development 
// > Desenvolvimento guiado por comportamento

//Sendo um cliente correntista do banco
//Posso sacar dinheiro em caixas eletrônicos
//Parar poder comprar em lugares que não aceitam cartão de débido ou crédido

// var saldo = 1000

// function saque (valor)
// {
//     if(valor > saldo ){
//         console.log('Valor do saque é superior ao saldo')
//     }else if ( valor > 700 ) {
//         console.log('O valor do que é superior ao maximo permitido por operação 700')
//     }
//     else{
//         saldo = saldo - valor
//     }   
// }
// saque(1001)
// console.log(saldo)


// Cenário 01: Saque com sucesso ok
// Dando que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então deve reduzir o valor do meu salto

// Cenário 2: Se o saque for um valor superio ao meu salto
// Dando que meu saldo e de 1000 reais
// Quando faço um saque 1001 reais
// Então não deve reduzir o salvo
// E deve mostrar uma mensagem de alerta informando que o valor não é permitido

// Cenário 3: Saque com o valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operão é de 700
// Quando faço um saque no valor de 701
// Então não deve efetuar o saque
// E deve mostrar uma mensagem de alerta e informando que o valor é superior ao permitido por operação


// Arrys // é um objeto que consiste em armazena um conjunto de dados

// var gaveteiro = ['Meia', 'Gravatas', 'Cuecas' ,'Sapatos']

// console.log(gaveteiro[1])

// var personagens = ['Mestre Kame', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('ErickBios')
// personagens.push('SararBios')

// // personagens.pop()

// personagens = personagens.filter(function(p){
//     return p !== 'Mestre Kame'
// })

// personagens = personagens.filter(function(p){
//     return p === 'Darth Vader'
// })

// console.log(personagens)

// Controle de repetição (Loops) //

// var personagens = ['Mestre Kame', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'Test']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens ) {
//     console.log(personagens [i] )
// }

// for (var i = 0; i <= 10; i++ ){
//     console.log(i)
// }


// Objetos //

// var yoda = {
// nome: 'Mestre Yoda',
// idade: 100,
// jedi: true,

// mostrarIdade: function() {
//     console.log(`A idade do ${this.nome} e de ${this.idade} anos`)
//     }

// }

// console.log(yoda)
// yoda.mostrarIdade()

// Constantes //
const nome = 'Dark Vader'
console.log(nome)

nome = 'Metre Kame'

console.log(nome)
