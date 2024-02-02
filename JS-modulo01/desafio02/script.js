const submit = document.getElementById('submit');

submit.addEventListener('click', () =>{
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    
    console.log("Adição = " + (n1+n2));
    console.log("Subtração = " + (n1-n2));
    console.log("Multiplacação = " + (n1*n2));
    console.log("Divisão = " + (n1/n2));

    event.preventDefault();
})