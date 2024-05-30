import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-detallerepartidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detallerepartidor.component.html',
  styleUrl: './detallerepartidor.component.css',
})
export class DetallerepartidorComponent {
  @Input() repartidorSeleccionado: any = null;
  firestore: Firestore = inject(Firestore);
  constructor() {}

  ngOnInit(): void {}
}
