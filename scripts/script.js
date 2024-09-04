let cId,cApellido,cNombre,cNota1,cNota2,cNota3
let listaAlumnos=[]

//!!Nombres generados aleatoriamente!!
fetch('./scripts/data.json')
    .then((res)=>res.json())
    .then((data)=>localStorage.setItem('listaAlumnos',JSON.stringify(data)))
    .catch((error)=>console.log(error))

//constructor de los objetos alumno para el array
class Alumno{
    constructor(cId,cApellido,cNombre,cNota1,cNota2,cNota3){
        this.id=cId
        this.apellido=cApellido.toUpperCase()
        this.nombre=cNombre.toUpperCase()
        this.nota1=parseFloat(cNota1)
        this.nota2=parseFloat(cNota2)
        this.nota3=parseFloat(cNota3)
    }
}

//Mantener información almacenada, si es que se encuentra
if (localStorage.getItem('listaAlumnos') != null) {
    listaAlumnos = JSON.parse(localStorage.getItem('listaAlumnos'))
}

//Captura y almacenamiento de los datos de alumnos
function guardarDatosAlumnos(){
    cId = document.getElementById("numId").value
    cApellido = document.getElementById("apellido").value
    cNombre = document.getElementById("nombre").value
    cNota1 = document.getElementById("nota1").value
    cNota2 = document.getElementById("nota2").value
    cNota3 = document.getElementById("nota3").value

    let nuevoAlumno = new Alumno(cId,cApellido,cNombre,cNota1,cNota2,cNota3)
    listaAlumnos.push(nuevoAlumno)

    localStorage.setItem('listaAlumnos',JSON.stringify(listaAlumnos))

    Toastify({
        text: "Alumno Cargado!",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, rgb(0, 54, 50), rgb(0, 173, 162))",
        },
    }).showToast();
}

//Creación de elementos de la tabla
function cargarTabla(){
    let tbody = document.querySelector('#tablaAlumnos tbody')
    tbody.innerHTML=''
    
    let nCantidadAlumnos = listaAlumnos.length

    for (let i = 0; i < nCantidadAlumnos; i++) {
        let fila=document.createElement('tr')

        let colId=document.createElement('td'),
            colApellido=document.createElement('td'),
            colNombre=document.createElement('td'),
            colNota1=document.createElement('td'),
            colNota2=document.createElement('td'),
            colNota3=document.createElement('td')
        
        let {id, apellido, nombre, nota1, nota2, nota3}=listaAlumnos[i]

        let nodoTId=document.createTextNode(id),
            nodoTApellido=document.createTextNode(apellido),
            nodoTNombre=document.createTextNode(nombre),
            nodoTNota1=document.createTextNode(nota1),
            nodoTNota2=document.createTextNode(nota2),
            nodoTNota3=document.createTextNode(nota3)
        
        colId.appendChild(nodoTId)
        colApellido.appendChild(nodoTApellido)
        colNombre.appendChild(nodoTNombre)
        colNota1.appendChild(nodoTNota1)
        colNota2.appendChild(nodoTNota2)
        colNota3.appendChild(nodoTNota3)

        fila.appendChild(colId)
        fila.appendChild(colApellido)
        fila.appendChild(colNombre)
        fila.appendChild(colNota1)
        fila.appendChild(colNota2)
        fila.appendChild(colNota3)

        tbody.appendChild(fila)
    }
}

function limpiarFormulario(e){
    e.preventDefault()
    
    cId = document.getElementById("numId")
    cApellido = document.getElementById("apellido")
    cNombre = document.getElementById("nombre")
    cNota1 = document.getElementById("nota1")
    cNota2 = document.getElementById("nota2")
    cNota3 = document.getElementById("nota3")

    cId.value=""
    cApellido.value=""
    cNombre.value=""
    cNota1.value=""
    cNota2.value=""
    cNota3.value=""
}

//Incluir información de los alumnos a la tabla gráfica
cargarTabla()

//Carga de info del formulario al array
let btnCargaAlumno = document.getElementById("cargarAlumno")
btnCargaAlumno.addEventListener('click', guardarDatosAlumnos)
btnCargaAlumno.addEventListener('click', cargarTabla)
btnCargaAlumno.addEventListener('click', limpiarFormulario)

