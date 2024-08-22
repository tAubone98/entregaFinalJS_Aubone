let cApellido,cNombre,cNota1,cNota2,cNota3
let aApellido=[], aNombre=[], aNota1=[], aNota2=[], aNota3=[]
if (localStorage.getItem('apellido_Alumnos') != null) {
    aApellido = JSON.parse(localStorage.getItem('apellido_Alumnos'))
    aNombre = JSON.parse(localStorage.getItem('nombre_Alumnos'))
    aNota1 = JSON.parse(localStorage.getItem('nota1_Alumnos'))
    aNota2 = JSON.parse(localStorage.getItem('nota2_Alumnos'))
    aNota3 = JSON.parse(localStorage.getItem('nota3_Alumnos'))
}

let btnCargaAlumno = document.getElementById("cargarAlumno")
btnCargaAlumno.addEventListener('click', guardarDatosAlumnos)

function guardarDatosAlumnos(){
    cApellido = document.getElementById("apellido").value,
    cNombre = document.getElementById("nombre").value,
    cNota1 = document.getElementById("nota1").value,
    cNota2 = document.getElementById("nota2").value,
    cNota3 = document.getElementById("nota3").value

    aApellido.push(cApellido)
    aNombre.push(cNombre)
    aNota1.push(cNota1)
    aNota2.push(cNota2)
    aNota3.push(cNota3)

    localStorage.setItem('apellido_Alumnos',JSON.stringify(aApellido))
    localStorage.setItem('nombre_Alumnos',JSON.stringify(aNombre))
    localStorage.setItem('nota1_Alumnos',JSON.stringify(aNota1))
    localStorage.setItem('nota2_Alumnos',JSON.stringify(aNota2))
    localStorage.setItem('nota3_Alumnos',JSON.stringify(aNota3))
}

cargarTabla()

function cargarTabla(){
    let tbody = document.querySelector('#tablaAlumnos tbody')
    tbody.innerHTML=''
    
    let nCantidadAlumnos = aApellido.length

    for (let i = 0; i < nCantidadAlumnos; i++) {
        let fila=document.createElement('tr')

        let colApellido=document.createElement('td'),
            colNombre=document.createElement('td'),
            colNota1=document.createElement('td'),
            colNota2=document.createElement('td'),
            colNota3=document.createElement('td')
        
        let nodoTApellido=document.createTextNode(aApellido[i]),
            nodoTNombre=document.createTextNode(aNombre[i]),
            nodoTNota1=document.createTextNode(aNota1[i]),
            nodoTNota2=document.createTextNode(aNota2[i]),
            nodoTNota3=document.createTextNode(aNota3[i])
        
        colApellido.appendChild(nodoTApellido)
        colNombre.appendChild(nodoTNombre)
        colNota1.appendChild(nodoTNota1)
        colNota2.appendChild(nodoTNota2)
        colNota3.appendChild(nodoTNota3)

        fila.appendChild(colApellido)
        fila.appendChild(colNombre)
        fila.appendChild(colNota1)
        fila.appendChild(colNota2)
        fila.appendChild(colNota3)

        tbody.appendChild(fila)
    }
}

//UTILIZAR UNICAMENTE UN ARRAY DE OBJETOS "ALUMNO" PARA LA ENTREGA FINAL