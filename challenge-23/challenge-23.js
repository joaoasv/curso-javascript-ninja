(function(window, document) {
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;

    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    const $visor = document.querySelector(`[data-js="result"]`);
    const $operators = document.querySelectorAll(`[data-js="operators"]`);
    const $numbers = document.querySelectorAll(`[data-js="number"]`);
    const $reset = document.querySelector(`[data-js="reset"]`);
    const $equal = document.querySelector(`[data-js="equal"]`);
    const pattern = new RegExp(`([\\+\\-\\/\\*]+)([\\+\\-\\/\\*]+)$`, `g`);

    Array.prototype.map.call($numbers, (item, index) => {
        return item.addEventListener('click', () => {
            $visor.value = $visor.value == 0 ? item.value : $visor.value += item.value;
        }, false);
    });

    Array.prototype.map.call($operators, (item, index) => {
        return item.addEventListener('click', () => {
            $visor.value += item.value;
            $visor.value = $visor.value.replace(pattern, '$2');
        }, false);
    });

    $equal.addEventListener('click', exec, false);
    $reset.addEventListener('click', reset, false);

    function exec() {

        const lastRegEx = new RegExp(`([\\+\\-\\/\\*])$`, `g`);
        const operation = $visor.value.match(lastRegEx) === null ? $visor.value : $visor.value = $visor.value.replace(lastRegEx, '');

        $visor.value = operation.match(/\d+([\\+\\/\\*\\-]+)?/g).reduce((initial, current) => {
            const operator = initial.split('').pop();
            const lastOperator = lastRegEx.test(current) ? current.split('').pop() : '';
            const firstValue = initial.slice(0, -1);
            const lastValue = current.replace(lastRegEx, '');
            switch (operator) {
                case '+':
                    return (Number(firstValue) + Number(lastValue)) + lastOperator;
                case '-':
                    return (Number(firstValue) - Number(lastValue)) + lastOperator;
                case '*':
                    return (Number(firstValue) * Number(lastValue)) + lastOperator;
                case '/':
                    return (Number(firstValue) / Number(lastValue)) + lastOperator;
            }
        });
    }

    function resultValues(initial, current) {

    }

    function reset() {
        $visor.value = 0;
    }

})(window, document);
