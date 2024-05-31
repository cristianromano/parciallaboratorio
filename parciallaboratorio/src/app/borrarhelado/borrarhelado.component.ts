import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Firestore, deleteDoc, doc } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrarhelado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './borrarhelado.component.html',
  styleUrl: './borrarhelado.component.css',
})
export class BorrarheladoComponent {
  @Input() heladoSeleccionado: any;
  firestore: Firestore = inject(Firestore);
  constructor() {}

  ngOnInit(): void {}

  borrarHelado(): void {
    if (this.heladoSeleccionado && this.heladoSeleccionado.id) {
      const heladoDocRef = doc(
        this.firestore,
        `helados/${this.heladoSeleccionado.id}`
      );
      deleteDoc(heladoDocRef)
        .then(() => {
          Swal.fire('Helado borrado', '', 'success');
          this.heladoSeleccionado = null;
        })
        .catch((error) => {
          console.error('Error al borrar el helado: ', error);
        });
    }
  }
}
