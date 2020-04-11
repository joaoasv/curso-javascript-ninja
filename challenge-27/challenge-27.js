(function (window, document) {
    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.

    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.

    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false

    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */


    function DOM(node) {

        this.nodes = document.querySelectorAll(node);

        this.on = function on(event, callback) {
            Array.prototype.map.call(this.nodes, function (item) {
                return item.addEventListener(event, callback, false);
            });
        };

        this.get = function get() {
            Array.prototype.map.call(this.nodes, function (item) {
                return console.log(item);
            });
        };

        this.off = function off(event, callback) {
            Array.prototype.map.call(this.nodes, function (item) {
                return item.removeEventListener(event, callback, false);
            });
        };

        this.forEach = function forEach() {
            return Array.prototype.forEach.apply(this.nodes, arguments);
        }

        this.map = function map() {
            return Array.prototype.map.apply(this.nodes, arguments);
        }

        this.reduce = function reduce() {
            return Array.prototype.reduce.apply(this.nodes, arguments);
        }

        this.reduceRight = function reduceRight() {
            return Array.prototype.reduceRight.apply(this.nodes, arguments);
        }

        this.every = function every() {
            return Array.prototype.every.apply(this.nodes, arguments);
        }

        this.some = function some() {
            return Array.prototype.some.apply(this.nodes, arguments);
        }

        this.filter = function filter() {
            return Array.prototype.filter.apply(this.nodes, arguments);
        }

        this.isArray = function isArray(param) {
            return Object.prototype.toString.call(param) === '[object Array]';
        }

        this.isObject = function isObject(param) {
            return Object.prototype.toString.call(param) === '[object Object]';
        }

        this.isFunction = function isFunction(param) {
            return Object.prototype.toString.call(param) === '[object Function]';
        }

        this.isNumber = function isNumber(param) {
            return Object.prototype.toString.call(param) === '[object Number]';
        }

        this.isString = function isString(param) {
            return Object.prototype.toString.call(param) === '[object String]';
        }

        this.isBoolean = function isBoolean(param) {
            return Object.prototype.toString.call(param) === '[object Boolean]';
        }

        this.isNull = function isNull(param) {
            return Object.prototype.toString.call(param) === '[object Null]' || Object.prototype.toString.call(param) === '[object Undefined]';
        }
    }

    var dom = new DOM();

    console.log(dom.isArray([1, 2, 3]));
    console.log(dom.isFunction(function() {}));
    console.log(dom.isNumber('numero'));
    console.log(dom.isNull(undefined));

    var $a = new DOM('[data-js="link"]');

})(window, document);
