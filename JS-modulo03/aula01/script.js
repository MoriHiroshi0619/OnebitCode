function show(){
    const contaList = document.getElementById('contact-list');
    console.log(contaList);

    const listElements = document.getElementsByTagName('li');
    console.log(listElements);

    const contactInput = document.getElementsByClassName('contact-input');
    console.log(contactInput);

    const contacts = document.querySelectorAll('.contact-input');
    console.log(contacts);

    const contact1 = document.getElementsByName('contact1');
    console.log(contact1);

    const contact2 = document.querySelector('#contact-list > li > #contact2');
    console.log(contact2);
}