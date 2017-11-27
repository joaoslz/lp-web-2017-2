
let inputs = [
    document.querySelector('#nome').value,
    document.querySelector('#quantidade').value,
    document.querySelector('#valor').value
];

let tbody = document.querySelector('table tbody')

document.querySelector('.form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
    
       let tr = document.createElement('tr'); 
       
       inputs.forEach( function(valor ) {
            let td = document.createElement('td');

            td.textContent = valor;
            tr.appendChild(td);


       });

       // calcula subtotal e cria a celula
       let subTotal =  parseFloat(inputs[1]) * parseFloat(inputs[2]) ;
       let tdSubTotal = document.createElement('td');
      
       tdSubTotal.textContent = subTotal;
       tdSubTotal.classList = 'text-center';
       tdSubTotal.style.backgroundColor = 'orange';

       tr.appendChild(tdSubTotal ); 
       
      // atualiza o Total do Pedido
      let tdTotal = document.querySelector('.js-total');

      let total = parseFloat ( tdTotal.textContent ) 
                  + subTotal ;

       tdTotal.textContent = total.toFixed(2);

       tbody.appendChild(tr);



    });


