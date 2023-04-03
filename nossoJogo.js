/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem-vindo ao Blackjack!')


if (confirm('Quer inicar uma nova rodada?')) {  
   const carta1JOG = comprarCarta();
   const carta2JOG = comprarCarta();
   
   const pontuacaoJOG = carta1JOG.valor + carta2JOG.valor
   console.log('Usuario: cartas - ' ,carta1JOG.texto, carta2JOG.texto, '-', pontuacaoJOG);

   const carta1CPU = comprarCarta();
   const carta2CPU = comprarCarta();
   
   const pontuacaoCPU = carta1CPU.valor + carta2CPU.valor
   console.log('CPU: cartas - ' ,carta1CPU.texto, carta2CPU.texto, '-', pontuacaoCPU)
   

   
   if (pontuacaoJOG > pontuacaoCPU) {
      console.log('VOCE GANHOU!')
   } else if (pontuacaoJOG < pontuacaoCPU) {
      console.log('VOCE PERDEU!')
   } else {
      console.log('EMPATE!')
   }

} else {
   console.log('FIM DO JOGO')
}