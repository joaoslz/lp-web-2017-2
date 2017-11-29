function constroiPedido() {

    var pedido = {

        itens: [],

        adiciona: function (item) {
            this.itens.push(item);
        },

        getTotal: function () {
            let total = 0;
            this.itens.forEach(function (item) {
                total = total + item.getSubTotal();
            });
            return total;
        }

    };
    return pedido;
}

