let balance = parseInt(prompt("Digite o saldo inicial:"));
let option = 0;
let value = 0;

do {
    option = prompt(`Saldo atual: ${balance} \n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair`);

    if (option == 1) {
        value = parseInt(prompt("Digite o valor a ser adicionado:"));
        if (value > 0) {
            balance += value;
            alert("Saldo atual: " + balance);
        } else {
            alert("Valor inválido. Tente novamente.");
        }
    } else if (option == 2) {
        value = parseInt(prompt("Digite o valor a ser removido:"));
        if (value > 0 && value <= balance) {
            balance -= value;
            alert("Saldo atual: " + balance);
        } else if (value > balance) {
            alert("Saldo insuficiente para remover esse valor.");
        } else {
            alert("Valor inválido. Tente novamente.");
        }
    } else if (option == 3) {
        alert("Saindo...");
    } else {
        alert("Opção inválida. Tente novamente.");
    }
} while (option != 3);
