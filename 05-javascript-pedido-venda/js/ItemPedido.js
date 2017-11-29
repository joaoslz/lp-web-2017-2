
function constroiItemPedido(pNome, pQuantidade, pValor) {

    var item = {
        nome: pNome,
        quantidade: pQuantidade,
        valor: pValor,

        getSubTotal: function () {
            return this.quantidade * this.valor;
        }

    };

    return item;

}
