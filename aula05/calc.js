//funções aritméticas

function calc() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma {+}\n 2 - subtração {-}\n 3 - multiplicação {*}\n 4 - divisão real {/}\n 5 - divisão inteira {%}\n 6 - potenciação {**}'));

    if (!operacao || operacao >= 7) {
        alert('Operação inválida')
        calc();
    } else {

        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let result;

        if (!n1 || !n2){
            alert('Parâmetro inválido! Insira um número.')
            calc();
        } else {

            function soma(){
                result = (n1 + n2);
                alert(`${n1} + ${n2} = ${result}`);
                novaop();
            }
            function sub(){
                result = (n1 - n2);
                alert(`${n1} - ${n2} = ${result}`);
                novaop();
            }
            function multi(){
                result = (n1 * n2);
                alert(`${n1} x ${n2} = ${result}`);
                novaop();
            }
            function div(){
                result = (n1 / n2);
                alert(`${n1} / ${n2} = ${result}`);
                novaop();
            }
            function divint(){
                result = (n1 % n2);
                alert(`${n1} % ${n2} = ${result}`);
                novaop();
            }
            function pot(){
                result = (n1 ** n2);
                alert(`${n1} ^ ${n2} = ${result}`);
                novaop();
            }
        
            function novaop() {
                let opcao = prompt('Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não')
        
                if (opcao == 1) {
                    calc();
                } else if (opcao == 2) {
                    alert('Obrigado por usar a calculadora!')
                }
                else {
                    alert('ERRO! Digito 1 ou 2.')
                    novaop();
                }
            }
        
        }
    }
    // if (operacao == 1) {
    //     soma();
    // } else if (operacao == 2) {
    //     sub();
    // } else if (operacao == 3) {
    //     multi();
    // } else if (operacao == 4) {
    //     div();
    // } else if (operacao == 5) {
    //     divint();
    // } else if (operacao == 6) {
    //     pot();
    // }
        
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            sub();
            break;
        case 3:
            multi();
            break;
        case 4:
            div();
            break;
        case 5:
            divint();
            break;
        case 6:
            pot();
            break;
    }

    
}

calc();

