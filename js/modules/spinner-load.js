import { $, $$ } from './help.js';
import { } from './anima-numeros.js';

// esconde spinners do load após 2s // 
export const spinnerLoad = setInterval(function () {
    clearInterval(spinnerLoad);
    $('[data-fundo-spinner]').style.display = "none";
    animaNumeros();
}, 1900);