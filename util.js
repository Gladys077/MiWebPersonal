import { Videos } from './articulos.js';

export const utils = {
    leerJson: async function(archivo = './videos.json'){
        try {
            await fetch(archivo)
            .then(response=>response.json())

            .then(data=>{
                const dat = data.videos;
                dat.forEach(element => {
                    const d = new Videos(element.titulo, element.descripcion, element.video);
                    d.agregarAlFront();
                });
            });
        }
        catch (e) {
            alert('error al leer el json' + e);
        }
        finally {
            
        }
    }
}