class Billete {
    constructor(n, v, c) {
        this.imagen = new Image();
        this.nombre = n;
        this.valor = v;
        this.catidad = c;
        this.imagen.src = imagenes[this.nombre];
    }
}