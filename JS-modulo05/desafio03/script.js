import { Component } from "./JS/Component.js";
import { Form } from "./JS/Form.js";
import { Input } from "./JS/Input.js";
import { Label } from "./JS/Label.js";

const title = new Component('h1', 'body', {textContent : 'Olá mundo'});

console.log(title);

title.render();

title.tag = 'h3';
title.build().render();

const form = new Form('body')
const label = new Label('Nome: ', form, { htmlFor: 'nameInput' });
const input = new Input(form, { id: 'nameInput', name: 'name' });

form.render();
label.render();
form.addChildren(input);

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('data de nascimento: ', form, { htmlFor : 'dataNasc'}),
    new Input(form, {id: 'dataNasc', name: 'dataNasc', type: 'date'})
)
