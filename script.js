let balance = parseInt(prompt("digite o saldo inicial"))
let option = 0
let value = 0
do{
   option = prompt(`saldo atual: ${balance} \n1-adicionar dinheiro\n2-remover dinheiro\n3-sair`)
if(option == 1){
  value = parseInt(prompt("digite o valor a ser adicionado"))
  balance += value
  alert("saldo atual: " + balance)
}
else if(option == 2){
  value = parseInt(prompt("digite o valor a ser removido"))
  balance -= value
  alert("saldo atual: " + balance)
}
else if(option == 3){
   alert("saindo...")
} 
else
  alert("opção invalida")
} while(option != 3)
