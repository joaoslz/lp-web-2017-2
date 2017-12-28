// Disponibiliza um pedido de venda vazio
// -------------------------------------------------------------
var pedido = constroiPedidoDeVenda();

$('.form').submit(function (event) {
    event.preventDefault();
    
    // construindo um objeto itemPedido com os dados preechidos do formulário
    var item = constroiItemPedido($('#nome').val(), $('#quantidade').val(), $('#valor').val()    
     );
     // validando o form
    var erros = validaForm(item );
    
    if (erros.length > 0) {
       exibe(erros); 

    } else {
       pedido.adiciona(item );
       atualizaPedidoVenda(item); 
    }
});
// ---------------------------------------------------------

function atualizaPedidoVenda(item) {
       // montar uma linha no início da <table> com um item do pedido
       $('table tbody').prepend( criaLinhaItemPedido( item ) );
 
       $('tbody tr').removeClass('linha-destaque');
       atualizaTotalDoPedidoNoForm(pedido.getTotal() );
       $('tbody tr:first-child').addClass('linha-destaque');

       $('.form').get(0).reset();
       $('.form').find('#nome').focus();
}

// ------------------------------------------------------------

function criaLinhaItemPedido( item ) {
     var tr = $('<tr>');
     tr.append ( criaTdComCss (item.nome, 'cNome-js' ) );
     tr.append ( criaTdComCss (item.quantidade, 'cQuantidade-js' ));
     tr.append ( criaTdComCss (item.valor, 'cValor-js' ));
     tr.append ( criaTdComCss (item.getSubTotal(), 'text-center' ) );
     tr.append ( criaTdComBotaoRemover() );

     tr.find('.botao-remove-item-js')
       .click(function(even) {
            event.preventDefault();

            //var linha = $(this).parent().parent();
            var linha = $(this).closest('tr'); 
         
            // linha.delay(600).remove();
            linha.animate( {opacity: 0, transition: '0.6s'}, 
                           600, 
                           function() { 
                              var item_remocao = constroiItemPedido(
                                                    linha.find('.cNome-js').text(), 
                                                    linha.find('.cQuantidade-js').text(),
                                                    linha.find('.cValor-js').text() );

                             pedido.remove(item_remocao);
                             linha.remove(); 
                             atualizaTotalDoPedidoNoForm( pedido.getTotal() );
                           }
            );
     });

      /* setTimeout( function() {
              $(this).parent().parent().remove(); */


     return tr;
}

function criaTd (valor, cod) {
    return td = $('<td>').text(valor);
}

function criaTdComCss (valor, classe ) {
    return criaTd(valor )
              .addClass(classe );
}

function criaTdComBotaoRemover() {
   var td = $('<td>').addClass('text-center');
   var link =  $('<a>').attr('href', '#')
                       .attr('title', 'Excluir')
                       .addClass('botao-remove-item-js');

   var icone = $('<span>').addClass('glyphicon')
                          .addClass('glyphicon-trash');

   link.append(icone);
   td.append(link);

   return td;
}

/*
'<td class="text-center">
    <a href="#" title="Excluir" id="excluir-item">
        <span class="glyphicon glyphicon-trash"></span>
    </a>
</td>'

*/

function atualizaTotalDoPedidoNoForm(total ) {
    // adiciona o item no pedido
    $('#total')
       .text(total)
       .addClass('text-center');
       

}