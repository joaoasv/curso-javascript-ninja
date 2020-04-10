(function (window, document) {
    /*
    Essa semana você terá dois desafios:
    1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
    tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
    ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
    o que não ficou tão claro das aulas anteriores.
    É essencial que você entenda todo o conteúdo que foi passado até aqui,
    para que possamos prosseguir para a parte mais avançada do curso :D

    2) Estudar eventos!
    Acesse a página do MDN:
    https://developer.mozilla.org/en-US/docs/Web/Events#Categories

    Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
    desafio os experimentos legais que você conseguir desenvolver :D
    */


    function on(element, event, callback) {
        document.querySelector(element)
            .addEventListener(event, callback, false);
    }

    var $div = document.querySelector('.new');

    on('[data-js="add"]', 'click', function() {

        // criamos os elementos das tasks
        var $input = document.createElement('input');
        var $label = document.createElement('label');
        var $close = document.createElement('a');
        var $closeLink = document.createTextNode('Deletar Tarefa');

        // colocamos os elementos dentro de suas respectivas ordens.
        $div.appendChild($label);
        $label.appendChild($input);
        $label.appendChild($close);
        $close.appendChild($closeLink);

        // criamos os atributos dos elementos dinâmicos
        $close.setAttribute('data-js', 'remove-input');
        $close.setAttribute('href', '#');

        // selecionamos os novos elementos criados dinamicamentes.
        var $closeLinks = document.querySelectorAll('[data-js="remove-input"]');
        var $inputs = document.querySelectorAll('input');

        // percorremos cada elemento da nodelist e atribuimos valores de atributo dinamico.
        for(var i = 0, len = $inputs.length; i < len; i++) {
            $inputs[i].setAttribute('data-js', (i + 1));
            $inputs[i].setAttribute('placeholder', `Tarefa nº${(i + 1)}`);
        }

    });

    on('[data-js="remove"]', 'click', function() {
        $div.removeChild($div.lastElementChild);
    });


})(window, document);
