function validaForm(item ) {
   var erros = [];

   if(item.seuValorNaoEhValido() ) {
      erros.push("O Campos Valor é inválido");
   }

   if (item.suaQuantidadeNaoEhValido() ) {
     erros.push("O Campos Quantidade é inválido");
   }
   return erros;
}

function exibe(erros ) {
 
  var ul = $('.mensagem-erro').html('');

  erros.forEach( function(erro ) {
            var li = $('<li>').text(erro);
            ul.append(li);
   });
  
}