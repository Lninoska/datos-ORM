class cursos {
    constructor(id, titulo, descripcion){
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
    }
    Crear() {
        console.log(`El curso ha sido creado: ${this.titulo} - ${this.descripcion}`)
    }
    get verificartitulo(){
        return`El titulo del curso es ${this.titulo}`
    }
    set cambiarDescripcion(descripcion) {
        this.descripcion = descripcion;
        console.log(`Se ha cambiado la descripcion ${descripcion}`)
    }
}

module.exports = {cursos}