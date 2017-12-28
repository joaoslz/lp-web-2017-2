
function constroiItemPedido(nome, quantidade, valor ) {
  
    var itemPedido = {
            'nome' : nome,
            'quantidade' : quantidade,
            'valor' : valor,

            getSubTotal : function () {
                return ( this.quantidade * this.valor );
            },

            seuValorNaoEhValido : function() {
                return ( this.valor <= 0 );
            },

            suaQuantidadeNaoEhValido : function() {
                return ( this.quantidade <= 0 );
            }


    };

    return itemPedido;
}