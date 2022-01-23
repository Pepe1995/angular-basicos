import { Component} from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre : String= 'Ironman';
    edad   : number=45;
    //getter //
    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();

    }
    obtenerNombre(): String{
        //se concatena nombre y edad//
        return `${this.nombre}-${this.edad}`;
    }
    cambiarNombre():void{
        this.nombre='Spiderman';
    }
    cambiarEdad():void{
        this.edad=30;
    }

}