const { cursos } = require('./cursosClass')
const { estudiantes } = require('./estudiantesClass') 

const estudiante1 = new estudiantes (1, "Lisa Bianca", "Perez perez", 27 , 19876542)

estudiante1.agregado()

const curso1 = new cursos(1, 'HTML basico', 'Construccion de sitio web')
curso1.Crear()