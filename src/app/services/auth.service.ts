import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLocal = { email: 'admin@example.com', password: '123456' };
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private router: Router) { }

  // Observable para obtener el estado de autenticación
  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  login(email: string, password: string): Observable<boolean> {
    const isValidUser = email === this.usuarioLocal.email && password === this.usuarioLocal.password;

    if (isValidUser) {
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedInSubject.next(true);
      return of(true).pipe(delay(1000)); // Simula retraso de autenticación
    }

    return of(false).pipe(delay(1000)); // Devuelve `false` tras 1s
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
