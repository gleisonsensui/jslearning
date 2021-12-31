/**
 * a) Elaborar um programa que leia um número. Calcule e informe o dobro
desse número.
 */

//Entrada
const doubleOut = document.querySelector('.double-result');
const btnCalc = document.querySelector('#btn-double');

doubleOut.textContent = 0;

//Processamento
function calcDouble() {

    let doubleData = Number(prompt(`Informe o valor a ser calculado.`));

    if(doubleData === 0  || doubleData === undefined) {

        alert(`Olá, valor nulo ou vazio. Favor, informar um valor valido.`);

        return

    } else {

        doubleOut.textContent = `${doubleData * 2}`;

    }


    return doubleData
    
}


//Saida

btnCalc.addEventListener('click', calcDouble);















