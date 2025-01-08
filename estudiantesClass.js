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
}

module.exports = {estudiantes}