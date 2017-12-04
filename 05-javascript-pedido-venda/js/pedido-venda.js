
let tbody = document.querySelector('table tbody');
let form = document.querySelector('.form');

let pedido = constroiPedido();

form.addEventListener('submit', function (event) {

    event.preventDefault();

    let item = constroiItemPedido(
        form.querySelector('#nome').value,
        form.querySelector('#quantidade').value,
        form.querySelector('#valor').value
    );
   
    let erros = validaFormulario(item);

    if (erros.length == 0 ) {
        pedido.adiciona(item);
        constroiTrItemPedido(item);
        atualizaTrTotalPedido();
  
    } else {
        console.log(erros );
        let ul = document.querySelector('#js-msg-erros');
        ul.classList = 'alert alert-danger';

        let lis =ul.querySelectorAll('#js-msg-erros > li');

        lis.forEach(function(li) {
            li.remove();
        });
        
        erros.forEach(function(erro) { 
           let li = document.createElement('li');
           li.textContent = erro;
           ul.appendChild(li);
        });


    }

});


function validaFormulario(item) {

    let msgErros = [];

     if (item.nome.trim() == '') {
         msgErros.push('Informe um nome válido para o produto');
     }

     if (item.quantidade < 1 ) {
        msgErros.push('Informe uma quantidade >= 1');
    }

     return msgErros;
}


function adicionaTD(valor) {
    let td = document.createElement('td');
    td.textContent = valor;
    return td;
}


function constroiTrItemPedido(item) {
    let tr = document.createElement('tr');

    tr.appendChild( adicionaTD(item.nome));
    tr.appendChild( adicionaTD(item.quantidade));
    tr.appendChild( adicionaTD(item.valor));
    tr.appendChild( adicionaTD(item.getSubTotal() ) );

    tbody.appendChild(tr);


    /*
        tdSubTotal.classList = 'text-center';
        tdSubTotal.style.backgroundColor = 'orange';
    */
}


function atualizaTrTotalPedido() {

    let tdTotal = document.querySelector('.js-total');

    tdTotal.textContent = pedido.getTotal().toFixed(2);
}

