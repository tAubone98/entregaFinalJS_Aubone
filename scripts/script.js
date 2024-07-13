let opcion=0
let intentos=0
let nombre, apellido, nota1, nota2, nota3
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
    }
    calcularPromedio(){
        this.promedio = (this.nota1+this.nota2+this.nota3)/3
        console.log("El promedio de "+this.nombre+" "+this.apellido+" es: ", this.promedio)
    }
    alumnoAprobado(){
        if (this.promedio>=7){
            console.log("El alumno está aprobado.")
        }else{
            console.log("El alumno está desaprobado.")
        }
    }
}

while(opcion!=2 && intentos<3){
    opcion = prompt("Bienvenido. Ingrese el número 1 (uno), si quiere cargar las notas de los alumnos. Ingrese el número 2 (dos), para salir del programa.")
    if (opcion!=2 && opcion>2){
        alert("Opción inválida.")
        intentos++
    } else if (opcion==1) {
        solicitarDatosAlumno()
        let alumno1 = new Alumno(nombre,apellido,nota1,nota2,nota3)
        alumno1.calcularPromedio()
        alumno1.alumnoAprobado()
        solicitarDatosAlumno()
        let alumno2 = new Alumno(nombre,apellido,nota1,nota2,nota3)
        alumno2.calcularPromedio()
        alumno2.alumnoAprobado()
        solicitarDatosAlumno()
        let alumno3 = new Alumno(nombre,apellido,nota1,nota2,nota3)
        alumno3.calcularPromedio()
        alumno3.alumnoAprobado()
        alert("Sus resultados se mostrarán en la consola.")
    }
}
if (intentos==3) {
    alert("Ingresó demasiadas veces una opción incorrecta. El programa se cerrará.")
}