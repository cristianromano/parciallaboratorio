import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Firestore,
  collectionData,
  collection,
  getDoc,
  addDoc,
} from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { doc } from 'firebase/firestore';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  firestore: Firestore = inject(Firestore);
  item$?: Observable<any[]>;
  subscriptions: Subscription[] = [];
  private auth: Auth = inject(Auth);

  userFormulario = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    signInWithEmailAndPassword(
      this.auth,
      this.userFormulario.get('email')?.value ?? '',
      this.userFormulario.get('password')?.value ?? ''
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.router.navigate(['/home']);
        Swal.fire({
          toast: true,
          icon: 'success',
          title: `Bienvenido ${user?.email}`,

          position: 'top-end',
        });
      })
      .catch((error) => {
        let rta = this.firebaseErrors(error.code);
        Swal.fire({
          icon: 'error',
          title: rta,
        });
      });
  }

  registro() {
    this.router.navigate(['/registro']);
  }

  getData() {
    // Add the subscription to the array
    const subscription = collectionData(
      collection(this.firestore, 'users')
    ).subscribe((data) => {
      console.log(data);
    });
    this.subscriptions.push(subscription);
  }

  firebaseErrors(error: string) {
    switch (error) {
      case 'auth/email-already-in-use':
        return 'Dirección de correo electrónico en uso.';
      case 'auth/weak-password':
        return 'contraseña debil ingrese una mas segura.';
      case 'auth/user-not-found':
        return 'Usuario no encontrado.';
      case 'auth/invalid-credential':
        return 'Credenciales invalidas.';
      default:
        return 'Ocurrió un error. Por favor, inténtelo nuevamente más tarde.';
    }
  }

  loginRapidoUno() {
    this.userFormulario.setValue({
      email: 'cristianromano2@gmail.com',
      password: 'asdasd123',
    });
  }

  loginRapidoDos() {
    this.userFormulario.setValue({
      email: 'chatgpt@gmail.com',
      password: 'asdasd123',
    });
  }

  loginRapidoTres() {
    this.userFormulario.setValue({
      email: 'anonimo@anonimo.com',
      password: '444444',
    });
  }
}
