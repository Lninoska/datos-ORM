class cursos {
    constructor(id, titulo, descripcion){
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
    }
    Crear() {
        console.log(`El curso ha sido creado: ${this.titulo}`)
    }
}

module.exports = {cursos}