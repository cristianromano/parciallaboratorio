import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  getDocs,
} from '@angular/fire/firestore';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { DetallerepartidorComponent } from '../detallerepartidor/detallerepartidor.component';
import { DetallebanderasComponent } from '../detallebanderas/detallebanderas.component';
import { BanderasService } from '../../services/banderas.service';

@Component({
  selector: 'app-listarepartidores',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    DetallerepartidorComponent,
    DetallebanderasComponent,
  ],
  templateUrl: './listarepartidores.component.html',
  styleUrl: './listarepartidores.component.css',
})
export class ListarepartidoresComponent {
  firestore: Firestore = inject(Firestore);
  repartidores: any[] = [];
  constructor(
    private router: Router,
    private banderaService: BanderasService
  ) {}
  repartidorSeleccionadoPadre: any;
  banderaSeleccionadaPadre: any;

  ngOnInit(): void {
    getDocs(collection(this.firestore, 'repartidores')).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          this.repartidores.push({ id, ...doc.data() });
        });
      }
    );
  }

  selectRepartidor(repartidor: any): void {
    getDocs(collection(this.firestore, 'repartidores')).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          if (id === repartidor.id) {
            this.repartidorSeleccionadoPadre = { id, ...doc.data() };
            this.banderaService
              .traerBanderaPorNombre(doc.data()['pais'])
              .forEach((data) => {
                const bandera = data[0];
                this.banderaSeleccionadaPadre = {
                  bandera: bandera.flags.svg,
                  nombre: bandera.name.common,
                  capital: bandera.capital[0],
                  population: bandera.population,
                };
                console.log(this.banderaSeleccionadaPadre);
              });
          }
        });
      }
    );
  }
}
