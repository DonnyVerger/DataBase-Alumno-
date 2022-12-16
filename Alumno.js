
class Alumno{
    constructor(nombre, apellidoP, apellidoM, edad, sexo){
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.edad = edad;
        this.sexo = sexo;
        this.materiasInscritas = [];
        this.calificacion = [];
    }

    get aprobado(){
        return this.calificacion > 6;
    }

    setCalificacion(numero){
        this.calificacion = numero;
    }
    numeroAlumnos(arreglin){
        return arreglin.length;
    }

}
export {Alumno}