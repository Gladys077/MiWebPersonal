import { utils } from './util.js';

try {
    const enlacePortfolio = document.querySelector('a[href="#portfolio"]');

    enlacePortfolio.addEventListener("click", () => {
        utils.leerJson();
    });
} catch (e) {
    alert("Error inesperado"+ e);
} finally {

}