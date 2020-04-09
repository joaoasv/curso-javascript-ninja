(function(window, document) {
    'use strict';
    /*
    Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
    o código, conforme vimos na aula anterior. Quebrar as responsabilidades
    em funções, onde cada função faça somente uma única coisa, e faça bem feito.

    - Remova as duplicações de código;
    - agrupe os códigos que estão soltos em funções (declarações de variáveis,
    listeners de eventos, etc);
    - faça refactories para melhorar esse código, mas de forma que o mantenha com a
    mesma funcionalidade.
    */

    const $visor = document.querySelector(`[data-js="result"]`);
    const $operators = document.querySelectorAll(`[data-js="operators"]`);
    const $numbers = document.querySelectorAll(`[data-js="number"]`);
    const $reset = document.querySelector(`[data-js="reset"]`);
    const $equal = document.querySelector(`[data-js="equal"]`);
    const opRegEx = new RegExp(`([\\+\\-\\/\\*]+)([\\+\\-\\/\\*]+)$`, `g`);
    const opRegExLast = new RegExp(`([\\+\\-\\/\\*])$`, `g`);

    function init() {

        function initEvents() {
            $equal.addEventListener('click', exec, false);
            $reset.addEventListener('click', reset, false);
            Array.prototype.map.call($numbers, (item) => {
                item.addEventListener('click', getNumbers, false);
            });
            Array.prototype.map.call($operators, (item) => {
                return item.addEventListener('click', getOperators, false);
            });
        }

        function getNumbers() {
            $visor.value = $visor.value == 0 ? this.value : $visor.value += this.value;
        }

        function getOperators() {
            $visor.value += this.value;
            $visor.value = $visor.value.replace(opRegEx, '$2');
        }

        function exec() {
            const operation = $visor.value.match(opRegExLast) === null ? $visor.value : $visor.value = $visor.value.replace(opRegExLast, '');
            $visor.value = operation.match(/\d+(?:[\\+\\/\\*\\-]+)?/g).reduce(resultValues);
        }

        function resultValues(initial, current) {
            const operator = initial.split('').pop();
            const lastOperator = opRegExLast.test(current) ? current.split('').pop() : '';
            const firstValue = initial.slice(0, -1);
            const lastValue = current.replace(opRegExLast, '');
            return execOperation(operator, firstValue, lastValue) + lastOperator;
        }

        function execOperation(operator, firstValue, lastValue) {
            switch (operator) {
                case '+':
                    return Number(firstValue) + Number(lastValue);
                case '-':
                    return Number(firstValue) - Number(lastValue);
                case '*':
                    return Number(firstValue) * Number(lastValue);
                case '/':
                    return Number(firstValue) / Number(lastValue);
            }
        }

        function reset() {
            $visor.value = 0;
        }

        initEvents();
    }

    init();

})(window, document);
