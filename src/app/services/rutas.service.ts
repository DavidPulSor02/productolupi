import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  private rutasEjemplo = [
    { origen: 'CDMX', destino: 'Guadalajara', fecha: '2024-03-20' },
    { origen: 'Monterrey', destino: 'Querétaro', fecha: '2024-03-19' },
    { origen: 'Puebla', destino: 'CDMX', fecha: '2024-03-18' },
  ];

  obtenerRutasAleatorias() {
    return this.rutasEjemplo.sort(() => Math.random() - 0.5);
  }
}
