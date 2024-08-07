import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = signal(['Instalacion', 'Orden', 'Democracia']);

  name = signal('Diego');
  disabled = true;
  img = 'https://ik.imagekit.io/hpapi/harry.jpg';

  person = signal({
    name: 'Diego',
    age: 27
  });

    colorControl = new FormControl();
    widthControl = new FormControl(50);


  //Metodo al hacer click en un boton 
  clickHandler() {
    alert('Hola');
  }
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(event);
  }
  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue, 10)
      }
    });
  }

  keyDownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
