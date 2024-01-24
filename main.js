import { utils } from './util.js';

try {
    document.addEventListener("DOMContentLoaded", utils.leerJson());

    const enlacePortfolio = document.querySelector('a[href="#portfolio"]');


} catch (e) {
    alert("Error inesperado"+ e);
} finally {

}