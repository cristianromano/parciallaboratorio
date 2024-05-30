import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { BanderasService } from '../../services/banderas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banderas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banderas.component.html',
  styleUrl: './banderas.component.css',
})
export class BanderasComponent {
  banderas: any[] = [];
  banderaElegida: { bandera: string; nombre: string } | null = null;
  @Output() banderaSeleccionada = new EventEmitter<{
    bandera: string;
    nombre: string;
  }>();

  constructor(private banderaService: BanderasService) {}

  ngOnInit(): void {
    this.banderaService.traerBanderasRegion('europe').forEach((data) => {
      const europeanFlags = data.slice(0, 2);
      europeanFlags.forEach((bandera: any) => {
        this.banderas.push({
          bandera: bandera.flags.svg,
          nombre: bandera.name.common,
        });
      });
    });
    this.banderaService.traerBanderasRegion('africa').forEach((data) => {
      const africanFlags = data.slice(0, 2);
      africanFlags.forEach((bandera: any) => {
        this.banderas.push({
          bandera: bandera.flags.svg,
          nombre: bandera.name.common,
        });
      });
    });
  }

  selectBandera(bandera: { bandera: string; nombre: string }): void {
    this.banderaSeleccionada.emit(bandera);
  }
}
