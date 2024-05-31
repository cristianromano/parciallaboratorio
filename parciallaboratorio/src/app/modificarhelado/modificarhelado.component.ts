import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  collection,
  collectionData,
  orderBy,
  query,
} from '@angular/fire/firestore';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modificarhelado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modificarhelado.component.html',
  styleUrl: './modificarhelado.component.css',
})
export class ModificarheladoComponent {
  loggedInUser: string = '';
  @Input() heladoSeleccionadoModificar: any;
  heladoForm: FormGroup; // Formulario de edición de helado

  constructor(private firestore: Firestore) {
    this.heladoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      peso: new FormControl(null, [
        Validators.required,
        Validators.min(250),
        Validators.max(1000),
      ]),
      tipoHelado: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  guardar(): void {
    // Llenar el formulario con los datos del helado seleccionado
    this.heladoForm.patchValue({
      nombre: this.heladoSeleccionadoModificar.nombre,
      precio: this.heladoSeleccionadoModificar.precio,
      peso: this.heladoSeleccionadoModificar.peso,
      tipoHelado: this.heladoSeleccionadoModificar.tipoHelado,
    });
  }
}
