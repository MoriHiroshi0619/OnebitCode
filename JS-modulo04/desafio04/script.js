import { switchTheme } from "./JS/theme.js";
import { cobyToClipBoard } from "./JS/copy.js";
import { calcular } from "./JS/calcular.js";
import { keyClicked, clearKey, typing } from "./JS/keyHandler.js";
document.querySelectorAll('.charKey').forEach( (charkeybtn) => {
    charkeybtn.addEventListener('click', keyClicked);
});
document.getElementById('clear').addEventListener('click', clearKey);
document.getElementById('equal').addEventListener('click', calcular)
document.getElementById('input').addEventListener('keydown', typing)
document.getElementById('themeSwitcher').addEventListener('click', switchTheme);
document.getElementById('copyToClipboard').addEventListener('click', cobyToClipBoard);






























