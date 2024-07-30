import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = ['Instalacion', 'Orden', 'Democracia'];

  name = 'Diego';
  disabled = true;
  img = 'https://ik.imagekit.io/hpapi/harry.jpg';

  //Metodo al hacer click en un boton 
  clickHandler(){
    alert('Hola');
  }
  changeHandler(event: Event){
    console.log(event)
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
