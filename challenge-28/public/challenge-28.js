(function (window, document) {

    'use strict';

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

    const $cep = new DOM('[data-js="form-cep"]');

    $cep.on('submit', submitCEP);

    function cleanCEP(cep) {
        const pattern = new RegExp(`\\d+`, `g`);
        return cep = cep.match(pattern).join('');
    }

    function submitCEP(e) {

        e.preventDefault();

        const $input = document.querySelector('[data-js="cep"]');
        const $main = document.querySelector('.main');
        var cep = $input.value;

        var msg = `<div class="alert alert__load">Buscando informações para o CEP... ${cep}.</div>`;
        document.querySelector('.alerts').innerHTML = msg;

        setTimeout(() => {
            if(cep) {
                cep = cleanCEP($input.value);
                const ajax = new XMLHttpRequest();
                ajax.open('GET', `https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`);
                ajax.onreadystatechange = function() {

                    if(ajax.readyState === 4 && ajax.status === 200) {

                        const data = JSON.parse(ajax.responseText);

                        if(data.status === 200) {
                            var results = `
                            <section class="results">
                                <header class="results__header">
                                    <section class="street">
                                        <h4>Logradouro</h4>
                                    </section>
                                    <section class="district">
                                        <h4>Bairro</h4>
                                    </section>
                                    <section class="estate">
                                        <h4>Estado</h4>
                                    </section>
                                    <section class="city">
                                        <h4>Cidade</h4>
                                    </section>
                                    <section class="zip-code">
                                        <h4>CEP</h4>
                                    </section>
                                </header>
                                <ul class="results__main">
                                    <li>${data.address}</li>
                                    <li>${data.district}</li>
                                    <li>${data.state}</li>
                                    <li>${data.city}</li>
                                    <li>${data.code}</li>
                                </ul>
                            </section>`;
                            document.querySelector('.search-list').innerHTML = results;
                            var msg = `<div class="alert alert__success">Encontramos o CEP: ${cep}.</div>`;
                            document.querySelector('.alerts').innerHTML = msg;
                        }

                        if(data.status === 404 || data.status === 400) {
                            var msg = `<div class="alert alert__error">Não encontramos o endereço para o CEP: ${cep}.</div>`;
                            document.querySelector('.alerts').innerHTML = msg;

                            var results = `
                            <section class="results">
                                <header class="results__header">
                                    <section class="street">
                                        <h4>Logradouro</h4>
                                    </section>
                                    <section class="district">
                                        <h4>Bairro</h4>
                                    </section>
                                    <section class="estate">
                                        <h4>Estado</h4>
                                    </section>
                                    <section class="city">
                                        <h4>Cidade</h4>
                                    </section>
                                    <section class="zip-code">
                                        <h4>CEP</h4>
                                    </section>
                                </header>
                                <ul class="results__main">
                                    <li> - </li>
                                    <li> - </li>
                                    <li> - </li>
                                    <li> - </li>
                                    <li> - </li>
                                </ul>
                            </section>`;
                            document.querySelector('.search-list').innerHTML = results;
                        }
                    }
                }
                ajax.send();
            }
        }, 500);
    }

})(window, document);
