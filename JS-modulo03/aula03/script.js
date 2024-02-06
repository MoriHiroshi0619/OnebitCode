function addContact(){
    const contactSection = document.getElementById('contact-list');

    const h3 = document.createElement('h3');
    h3.innerText = "Contato";

    const ul = document.createElement('ul');

    const nameLi = document.createElement('li');
    nameLi.innerText = "Nome: ";
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullName';
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);
    ul.appendChild(document.createElement('br'));

    const phoneLi = document.createElement('li');
    phoneLi.innerText = "Telefone: ";
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);
    ul.appendChild(document.createElement('br'));

    const addressLi = document.createElement('li');
    const addressInput = document.createElement('input');
    addressLi.innerText = "endereço: ";
    addressInput.type = 'text';
    addressInput.name = 'phone';
    addressLi.appendChild(addressInput);
    ul.appendChild(addressLi);
    ul.appendChild(document.createElement('br'));

    contactSection.append(h3, ul);
}

function removeContact(){
    const contactSection = document.getElementById('contact-list');

    const titles = document.getElementsByTagName('h3');

    const contatos = document.getElementsByTagName('ul');

    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contatos[contatos.length - 1]);
}
















