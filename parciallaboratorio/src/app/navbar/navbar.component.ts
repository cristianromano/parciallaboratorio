import { Component, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  auth: Auth = inject(Auth);
  nombre?: any;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        console.log('No hay usuario');
      } else {
        this.nombre = user.email;
        console.log('aca esta el nombre', this.nombre);
      }
    });
  }

  irBio() {
    this.route.navigate(['/bio']);
  }

  logOut() {
    this.auth.signOut();
    this.route.navigate(['/login']);
  }
}
