let sal = document.querySelector('#salario')

const sala = () => {
    let recebeSalario = Number(document.querySelector('#recebeSalario').value);
    let mostraSalario = document.querySelector('#mostraSalario');
    
    let aumento = recebeSalario * 0.17
    let ajusteAumento = Number(aumento.toFixed(0))

    let novoSalario = recebeSalario + ajusteAumento

    mostraSalario.innerHTML = `O seu salário com o aumento de 17% e reajuste de R$215,00 é: R$${novoSalario},00 `

}

sal.addEventListener('click', sala)
