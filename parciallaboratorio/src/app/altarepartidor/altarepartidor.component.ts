import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { BanderasService } from '../../services/banderas.service';

import { Firestore, addDoc } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { BanderasComponent } from '../banderas/banderas.component';

@Component({
  selector: 'app-altarepartidor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NavbarComponent,
    BanderasComponent,
  ],
  templateUrl: './altarepartidor.component.html',
  styleUrl: './altarepartidor.component.css',
})
export class AltarepartidorComponent {
  firestore: Firestore = inject(Firestore);

  banderaSeleccionada: { bandera: string; nombre: string } | null = null;

  repartidorForm = new FormGroup({
    dni: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]{8}$'),
    ]),
    nombre: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]+$'),
    ]),
    edad: new FormControl(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(99),
    ]),
    capacidad: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    pais: new FormControl({ value: '', disabled: true }, Validators.required),
    unidadPropia: new FormControl('', Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    private banderasService: BanderasService
  ) {}

  ngOnInit(): void {}

  submitForm() {
    this.repartidorForm.get('pais')?.enable();
    addDoc(collection(this.firestore, 'repartidores'), {
      dni: this.repartidorForm.get('dni')?.value,
      nombre: this.repartidorForm.get('nombre')?.value,
      edad: this.repartidorForm.get('edad')?.value,
      capacidad: this.repartidorForm.get('capacidad')?.value,
      pais: this.repartidorForm.get('pais')?.value,
      unidadPropia: this.repartidorForm.get('unidadPropia')?.value,
    }).then(() => {
      Swal.fire('Repartidor agregado', '', 'success');
      this.repartidorForm.reset();
    });
  }

  onBanderaSeleccionada(bandera: { bandera: string; nombre: string }): void {
    this.repartidorForm.get('pais')?.setValue(bandera.nombre);
  }
}
