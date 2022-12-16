class Grupo{
    // constructor(guestList){
    //     this.guestList = guestList;
    // }
    // componenteGrupo(){
    //     let finalComponent = "";
    //     for(let i = 0; i < this.guestList.length; i++){
    //         finalComponent += this.guestList[i].componente();
    //     }
    //     return finalComponent;
    // }
    constructor(nombreGrupo,nombreMateria, nombreAlumno,calificacion){
        this.nombreGrupo = nombreGrupo;
        this.nombreMateria = nombreMateria;
        this.nombreAlumno = nombreAlumno;
        this.calificacion = 0;
    }
}
export {Grupo}