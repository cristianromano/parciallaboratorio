import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-detallebanderas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detallebanderas.component.html',
  styleUrl: './detallebanderas.component.css',
})
export class DetallebanderasComponent {
  @Input() banderaSeleccionada: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    if (changes.banderaSeleccionada) {
      console.log(changes.banderaSeleccionada.currentValue);
    }
  }
}
