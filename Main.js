import {Alumno} from "./Alumno.js";
import {Materia} from "./Materia.js";
import {Grupo} from "./Grupo.js";

var estudiantes = [];
var misMaterias = [];
var misGrupos = [];

var lista=document.getElementById("listita");
const alta = document.getElementById("alta");
const mostrar = document.getElementById("mostrar");
const materia = document.getElementById("materia");
const calificacion = document.getElementById("calificacion");
const grupoCrear = document.getElementById("grupo1");
const grupoGestionar = document.getElementById("grupo2");
const reset1 = document.getElementById("salir1");
const regresa1 = document.getElementById("regresar1");
const regresa2 = document.getElementById("regresar2");
const regresa3 = document.getElementById("regresar3");

const addAlum = document.getElementById("AgregarAlumno");
const addMater = document.getElementById("AgregarMateria");
const formCG = document.getElementById("formuGrupoName");
const formAddG = document.getElementById("formuAddGrupo");

formCG.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    let grupoName = document.getElementById("nameG").value;
    document.getElementById("nombreGrupo").innerHTML = grupoName; 
    document.getElementById("formuGrupoName").style.display = "none";
    document.getElementById("formuAddGrupo").style.display = "block";
    document.getElementById("formuAddGrupo").style.display = "flex";
});
formAddG.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    let grupoName = document.getElementById("nameG").value;
    let name = document.getElementById("miAlumno2").value;
    ObtenerDatosAlumno(grupoName,name);
    console.log(ObtenerDatosAlumno);

});
function ObtenerDatosAlumno(nGrupo,nAlumno){
    console.log("Hola");
    console.log(misMaterias);
    for(let i = 0;i<=misMaterias.length;i++){
        if(nAlumno == misMaterias[i].nombreAlumno){
            let alumNom = misMaterias[i].nombreAlumno;
            let grupoNom = nGrupo;
            let mat = misMaterias[i].nombreMateria;
            let cali = misMaterias[i].calificacion;
            misGrupos.push(new Grupo(grupoNom,mat,alumNom,cal));
        }
    }
}
reset1.addEventListener("click", (evento)=>{
    evento.preventDefault();
    window.location.reload();
});
regresa1.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("fomrAlta").style.display = "none";
    document.getElementById("formulario1").style.display = "block";
});
regresa2.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("formMostrar").style.display = "none";
    document.getElementById("formulario1").style.display = "block";
    lista.innerHTML = "";
});
regresa3.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("formMateria").style.display = "none";
    document.getElementById("formulario1").style.display = "block";
    document.getElementById("miAlumno").innerHTML ="";
    // myPromedio("Daniel Navarro García");
});
alta.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("formulario1").style.display = "none";
    document.getElementById("fomrAlta").style.display = "block";
});
addAlum.addEventListener("click", (evento)=>{
    evento.preventDefault();
    let name = document.getElementById("alumno").value;
    let patAp = document.getElementById("apellidoPat").value;
    let matAp = document.getElementById("apellidoMat").value;
    let age = document.getElementById("edad").value;
    let gender = document.getElementById("sexo").value;
    estudiantes.push(new Alumno(name,patAp,matAp,age,gender, "", ""));  
    swal({
        tittle: 'Datos guardados con exito',
        text: "El/La alum@ " + name+ " ha sido agregado",
        icon: 'success'
    });
    console.log(estudiantes);
    document.getElementById("alumno").value ="";
    document.getElementById("apellidoPat").value="";
    document.getElementById("apellidoMat").value="";
    document.getElementById("edad").value="";
    document.getElementById("sexo").value="";
});
addMater.addEventListener("click", (evento)=>{
    evento.preventDefault();
    let mater = document.getElementById("Materia").value;
    let name = document.getElementById("miAlumno").value;
    let cal = document.getElementById("cal").value;
    misMaterias.push(new Materia(mater,name,cal));
    console.log(misMaterias);
});
mostrar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("formulario1").style.display = "none";
    document.getElementById("formMostrar").style.display = "block";
    agregarElementos();
});
materia.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("formulario1").style.display = "none";
    document.getElementById("formMateria").style.display = "block";
    cargar_Alumnos();
});
grupoCrear.addEventListener("click", (evento)=>{
    evento.preventDefault();
    document.getElementById("formulario1").style.display = "none";
    document.getElementById("formuGrupoName").style.display = "block";
    cargar_Alumnos2();//contiene el nombre del grupo
});
function agregarElementos(){ 
    let cont = 1;
    let p = 0;
    if(estudiantes != null){
        while(p < estudiantes.length){
            var foo = estudiantes.map(function(data){
                return '<li>'+data.nombre+' '+data.apellidoP+" "+data.apellidoM+'</li>'
              })
              p++;
        }
          lista.innerHTML = foo;
    }
    else{
        foo = '<li>'+"No hay datos aun"+'</li>';
        lista.innerHTML = foo;
    }
}
function cargar_Alumnos() {
    var select = document.getElementById("miAlumno");
    for(let i = 0; i <= estudiantes.length; i++){
        var option = document.createElement("option");
        option.value = estudiantes[i].nombre+" "+estudiantes[i].apellidoP+" "+estudiantes[i].apellidoM;
        option.text = estudiantes[i].nombre+" "+estudiantes[i].apellidoP+" "+estudiantes[i].apellidoM;
        select.appendChild(option);
    }
}
function cargar_Alumnos2() {
    var select = document.getElementById("miAlumno2");
    for(let i = 0; i <= estudiantes.length; i++){
        var option = document.createElement("option");
        option.value = estudiantes[i].nombre+" "+estudiantes[i].apellidoP+" "+estudiantes[i].apellidoM;
        option.text = estudiantes[i].nombre+" "+estudiantes[i].apellidoP+" "+estudiantes[i].apellidoM;
        select.appendChild(option);
    }
}