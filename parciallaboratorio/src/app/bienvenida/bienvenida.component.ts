import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css',
})
export class BienvenidaComponent {
  data: any;
  constructor(private perfilService: PerfilService, private router: Router) {}
  ngOnInit(): void {
    this.perfilService.traerPerfil().subscribe((data) => {
      this.data = data;
    });
  }

  irLogin() {
    this.router.navigate(['/login']);
  }
}
