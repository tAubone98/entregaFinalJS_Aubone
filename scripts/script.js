let opcion=0
let intentos=0
let nombre, apellido, nota1, nota2, nota3
let alumnos=[]
function solicitarDatosAlumno(){
    nombre=prompt("Ingrese el nombre del alumno: ")
    apellido=prompt("Ingrese el apellido del alumno: ")
    nota1=prompt("Ingrese la primer nota: ")
    nota2=prompt("Ingrese la segunda nota: ")
    nota3=prompt("Ingrese la tercer nota: ")
}
class Alumno{
    constructor(nombre, apellido, nota1, nota2, nota3){
        this.nombre = nombre
        this.apellido = apellido
        this.nota1 = parseFloat(nota1)
        this.nota2 = parseFloat(nota2)
        this.nota3 = parseFloat(nota3)
        this.promedio = 0
        this.aprobado = false
    }
    calcularPromedio(){
        this.promedio = (this.nota1+this.nota2+this.nota3)/3
    }
    alumnoAprobado(){
        if (this.promedio>=7){
            this.aprobado=true
        }else{
            this.aprobado=false
        }
    }
}
while(opcion!=5 && intentos<3){
    opcion = parseFloat(prompt("Bienvenido. Ingrese el número 1 (uno), si quiere cargar un nuevo alumno. Ingrese el número 2 (dos), para salir del programa."))
    switch (opcion) {
        case 1:
            //Cargar alumnos nuevos
            let terminarCarga = prompt("Ingrese la cantidad de alumnos que desea cargar: ")
            for (let i=0; i<terminarCarga; i++){
                solicitarDatosAlumno()
                let alumnoNuevo= new Alumno(nombre,apellido,nota1,nota2,nota3)
                alumnos.push(alumnoNuevo)
                alumnos[i].calcularPromedio()
                alumnos[i].alumnoAprobado()
            }
            break
        case 2:
            //Buscar alumno por apellido
            let apellidoAlumno=prompt("Ingrese el apellido del alumno que desea buscar: ").toLowerCase()
            let alumnoBuscado=alumnos.find(alumno=>alumno.apellido.toLowerCase() === apellidoAlumno)
            console.log(alumnoBuscado)
            break
        case 3:
            //Mostrar alumnos aprobados
            let alumnosAprobados=alumnos.filter((alumno)=> alumno.aprobado ===true)
            console.log(alumnosAprobados)
            break
        case 4:
            //Mostrar alumnos desaprobados
            let alumnosDesaprobados=alumnos.filter((alumno)=> alumno.aprobado ===false)
            console.log(alumnosDesaprobados)
            break
        case 5:
            alert("El programa se cerrará.")
            break
        default:
            alert("Opción inválida.")
            intentos++
            break
    }
}
if (intentos==3) {
    alert("Ingresó demasiadas veces una opción incorrecta. El programa se cerrará.")
}
/* 
ERRORES/OPTIMIZACIONES
verificar que las notas sean entre 0 y 10 incluios.
verificar que no se ingrese nada más que números en las notas.
verificar que no se ingrese nada más que letras en nombre y apellido.
agregar divisiones de cursos
verificar que el alumno buscado esté
*/