import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '+52 55 1234 5678',
  };

  car = {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2023,
    color: 'Rojo',
    licensePlate: 'ABC-123',
    vin: '1HGCM82633A123456',
    image: 'https://www.mazda.mx/assets/img/modelos/cx5/cx5.png',
  };

  editCar(): void {
    alert('Función para editar auto en desarrollo...');
  }
}
