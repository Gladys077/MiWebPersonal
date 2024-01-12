import { Videos } from './articulos.js';

export const utils = {
    cargado: false,

    leerJson: async function (archivo = './videos.json') {
        try {
            if (!this.cargado) {
                await fetch(archivo)
                    .then(response => response.json())

                    .then(data => {
                        const dat = data.videos;
                        dat.forEach(element => {
                            const d = new Videos(element.titulo, element.descripcion, element.video);
                            d.agregarAlFront();
                        });
                        this.cargado = true;
                    });
            }
        }
        catch (e) {
            const errorMessage = 'Lo sentimos, ha ocurrido un problema al cargar la información...';
            const errorElement = document.createElement('div');
            errorElement.classList.add('mensajeError');
            errorElement.textContent = errorMessage;
        
            const container = document.querySelector('.container');
            container.innerHTML = ''; // Limpiamos el contenido existente
            container.appendChild(errorElement);
            console.error('Error al leer el JSON:', e);
        }
        finally {

        }
    }
}