import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-autos',
  templateUrl: './catalogo-autos.component.html',
  styleUrls: ['./catalogo-autos.component.css'],
  standalone: false
})
export class CatalogoAutosComponent {
  marcaSeleccionada: string = '';
  busqueda: string = '';
  autoSeleccionado: any = null;

  marcas: string[] = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];

  autos = [
    { marca: 'Toyota', modelo: 'Corolla', descripcion: 'Sedán confiable.', imagen: 'assets/toyota-corolla.jpg', fabricante: 'Toyota Motor Corporation', anio: 2022 },
    { marca: 'Honda', modelo: 'Civic', descripcion: 'Deportivo y elegante.', imagen: 'assets/honda-civic.jpg', fabricante: 'Honda Motor Co.', anio: 2021 },
    { marca: 'Ford', modelo: 'Mustang', descripcion: 'Potencia y estilo.', imagen: 'assets/ford-mustang.jpg', fabricante: 'Ford Motor Company', anio: 2020 },
    { marca: 'Chevrolet', modelo: 'Camaro', descripcion: 'Un clásico moderno.', imagen: 'assets/chevrolet-camaro.jpg', fabricante: 'General Motors', anio: 2019 }
  ];

  // Filtrar autos según la búsqueda y la marca seleccionada
  autosFiltrados() {
    return this.autos.filter(auto =>
      (this.marcaSeleccionada === '' || auto.marca === this.marcaSeleccionada) &&
      (this.busqueda === '' || auto.modelo.toLowerCase().includes(this.busqueda.toLowerCase()) || auto.descripcion.toLowerCase().includes(this.busqueda.toLowerCase()))
    );
  }

  // Mostrar detalles del auto seleccionado
  mostrarDetalles(auto: any) {
    this.autoSeleccionado = auto;
  }

  // Cerrar los detalles
  cerrarDetalles() {
    this.autoSeleccionado = null;
  }
}
