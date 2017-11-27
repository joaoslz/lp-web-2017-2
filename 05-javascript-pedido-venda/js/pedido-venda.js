
var inputs = [

    document.querySelector('#nome'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];


function criaItemPedido(event) {

    event.preventDefault();

    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value);
    }


}


var soma = function (a, b) {
  return ( a + b );
}

console.log( soma(4, 5) );



document.querySelector('.form').addEventListener('submit', criaItemPedido );


