
let inputs = [
    document.querySelector('#nome'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

let tbody = document.querySelector('table tbody')

document.querySelector('.form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

/*         
        for (let i = 0; i < inputs.length; i++) {
            
            console.log(inputs[i].value);
            let j = 10;
        } */
        
       inputs.forEach(function(input) {
           console.log(input.value);
       });


    });


