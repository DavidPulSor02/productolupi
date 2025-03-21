import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.errorMessage = ''; // Limpiar mensaje de error

    this.authService.login(this.email, this.password).subscribe(success => {
      if (success) {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/panel']); // Redirige al usuario
      } else {
        this.errorMessage = 'Correo o contraseña incorrectos';
      }
    });
  }
}
