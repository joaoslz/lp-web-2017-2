

let tbodyRemove = document.querySelector('table tbody');


tbodyRemove.addEventListener('click', function(event) {
        
    //console.log(event.target  );

    let tr = event.target.parentNode;
    console.log(tr);
    tr.classList = 'oculta-elemento';

    setTimeout(function(){
        tr.remove();
    }, 1000 );
    
        
});




// let trs = document.querySelectorAll('table tbody tr');


// trs.forEach(function(tr) {
//     tr.addEventListener('click', function() {
//         console.log(this);
//         this.remove();
//     });
// });
