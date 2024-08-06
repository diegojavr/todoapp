import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = signal(['Instalacion', 'Orden', 'Democracia']);

  name = signal('Diego');
  disabled = true;
  img = 'https://ik.imagekit.io/hpapi/harry.jpg';

  //Metodo al hacer click en un boton 
  clickHandler(){
    alert('Hola');
  }
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(event);
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
