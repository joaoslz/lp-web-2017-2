
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
    pedido.adiciona(item);
    constroiTrItemPedido(item);
    atualizaTrTotalPedido();

});

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

