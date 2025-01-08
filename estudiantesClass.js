class estudiantes {
    constructor (id, nombres, apellidos, edad, nro_identificacion){
    this.id = id
    this.nombres = nombres
    this.apellidos = apellidos
    this.edad = edad
    this.nro_identificacion = nro_identificacion
    }
    agregado(){
        console.log(`estudiante ha sido inscripto ${this.nombres} ${this.apellidos}`)
    }

    get verificarIdentificacion() {
        return`El n° identificación del estudiantes es ${this.nro_identificacion}`
        
    }
    set modificarNombre(nuevoNombre) {
        this.nombres = nuevoNombre 
        console.log(`Se ha modificado el nombre del estudiante ${nuevoNombre}`)
    }
}

module.exports = {estudiantes}