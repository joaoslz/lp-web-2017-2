
function constroiPedidoDeVenda() {
    var pedido = {
        itens : [],

        adiciona : function (item) {
            this.itens.push(item);
        },

        getTotal : function () {
            var total = 0;
            
            this.itens.forEach(function(item) {
                total = total + item.getSubTotal();
            });

            return total;
        }, 

        remove : function(itemRemocao) {
            
            this.itens.forEach(function(item, index, objeto) {
                if ( item.nome == itemRemocao.nome 
                    && item.quantidade == itemRemocao.quantidade 
                    && item.valor == itemRemocao.valor) {
                        objeto.splice(index, 1);
                    }

            });


        }
    };
    return pedido;

}

/*
review.forEach(function(item, index, object) {
  if (item === 'a') {
    object.splice(index, 1);
  }
});
*/