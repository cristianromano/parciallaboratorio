import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  collection,
  collectionData,
  getDocs,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { BorrarheladoComponent } from '../borrarhelado/borrarhelado.component';
import { ModificarheladoComponent } from '../modificarhelado/modificarhelado.component';

@Component({
  selector: 'app-listarhelados',
  standalone: true,
  imports: [CommonModule, BorrarheladoComponent,ModificarheladoComponent],
  templateUrl: './listarhelados.component.html',
  styleUrl: './listarhelados.component.css',
})
export class ListarheladosComponent implements OnInit {
  auth: Auth = inject(Auth);
  loggedInUser: string = '';
  firestore: Firestore = inject(Firestore);
  helados: any[] = [];
  selectedHelado: any = null;
  constructor() {}

  ngOnInit(): void {
    this.loggedInUser = this.auth.currentUser?.email || '';
    const refImg = collection(this.firestore, 'helados');
    const q = query(refImg, orderBy('precio', 'asc'));

    collectionData(q, { idField: 'id' }).subscribe((data) => {
      this.helados = data;
    });
  }

  selectHelado(helado: any): void {
    this.selectedHelado = helado;
    // getDocs(collection(this.firestore, 'helados')).then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     const id = doc.id;
    //     if (id === helado.id) {
    //       this.selectedHelado = { id, ...doc.data() };
    //       console.log(this.selectedHelado);
    //     }
    //   });
    // });
  }
}
