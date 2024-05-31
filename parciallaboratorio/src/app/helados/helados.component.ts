import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { ListarheladosComponent } from '../listarhelados/listarhelados.component';

@Component({
  selector: 'app-helados',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ReactiveFormsModule,
    ListarheladosComponent,
  ],
  templateUrl: './helados.component.html',
  styleUrl: './helados.component.css',
})
export class HeladosComponent {
  firestore: Firestore = inject(Firestore);

  banderaSeleccionada: { bandera: string; nombre: string } | null = null;

  heladosForm = new FormGroup({
    precio: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    nombre: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]+$'),
    ]),
    peso: new FormControl(null, [
      Validators.required,
      Validators.min(250),
      Validators.max(1000),
    ]),
    tipoHelado: new FormControl('', Validators.required),
  });

  constructor(private formBuilder: FormBuilder) {}

  submitForm() {
    addDoc(collection(this.firestore, 'helados'), {
      precio: this.heladosForm.get('precio')?.value,
      nombre: this.heladosForm.get('nombre')?.value,
      peso: this.heladosForm.get('peso')?.value,
      tipoHelado: this.heladosForm.get('tipoHelado')?.value,
    }).then(() => {
      Swal.fire('Helado agregado', '', 'success');
      this.heladosForm.reset();
    });
  }
}
