export class Videos {
    constructor(titulo, descripcion, src) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.src = src;
    }

    agregarAlFront() {
        const container = document.querySelector(".container");
        container.innerHTML += this.armarArticulo();

    }

    armarArticulo() {
        return ` 
            <article class="articulo">
                <span><h3>${this.titulo}</h3>
                    <p${this.descripcion}</p>
                </span>
                <iframe src="${this.src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </video>
            </article>
        `
    }
}