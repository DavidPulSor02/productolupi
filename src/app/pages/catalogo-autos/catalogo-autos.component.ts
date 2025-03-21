import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-autos',
  templateUrl: './catalogo-autos.component.html',
  styleUrls: ['./catalogo-autos.component.css'],
  standalone: false
})
export class CatalogoAutosComponent {
  constructor(private router: Router) { }
  marcaSeleccionada: string = '';
  busqueda: string = '';
  autoSeleccionado: any = null;

  marcas: string[] = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Mazda', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai', 'Kia', 'Subaru', 'Tesla', 'Porsche', 'Jaguar', 'Lexus', 'Ferrari', 'Lamborghini', 'Mitsubishi', 'Peugeot', 'Renault', 'Alfa Romeo', 'Dodge', 'Chrysler', 'Volvo', 'Jeep', 'Cadillac', 'Buick', 'GMC', 'Infiniti', 'Acura', 'Mini', 'Genesis'];

  autos = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', descripcion: 'Sedán confiable.', imagen: 'https://th.bing.com/th?id=OIP.wk63r5deyAi_ZfLz-71hGgHaEb&w=269&h=200&c=12&rs=1&p=0&o=6&pid=23.1', fabricante: 'Toyota Motor Corporation', anio: 2022 },
    { id: 2, marca: 'Honda', modelo: 'Civic', descripcion: 'Deportivo y elegante.', imagen: 'https://th.bing.com/th/id/OIP.zFEePRmzXm5dZXHs5dAgYwHaDz?w=306&h=179&c=7&r=0&o=5&pid=1.7', fabricante: 'Honda Motor Co.', anio: 2021 },
    { id: 3, marca: 'Ford', modelo: 'Mustang', descripcion: 'Potencia y estilo.', imagen: 'https://th.bing.com/th/id/OIP.e1dmTPudOVHd3AsH8JcRYQHaEK?w=274&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'Ford Motor Company', anio: 2020 },
    { id: 4, marca: 'Chevrolet', modelo: 'Camaro', descripcion: 'Un clásico moderno.', imagen: 'https://th.bing.com/th/id/OIP.-LqORcFI8oc-BxaivIjB_QHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'General Motors', anio: 2019 },
    { id: 5, marca: 'Nissan', modelo: 'Altima', descripcion: 'Sedán moderno y eficiente.', imagen: 'https://th.bing.com/th/id/OIP.2O1Pe2_UQX0glhdKVM0IJAHaE9?w=285&h=191&c=7&r=0&o=5&pid=1.7', fabricante: 'Nissan Motor Co.', anio: 2023 },
    { id: 6, marca: 'Mazda', modelo: 'CX-5', descripcion: 'SUV elegante y potente.', imagen: 'https://th.bing.com/th/id/OIP.qtKOhVmH79qQbI_XhomvvAHaD3?w=327&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'Mazda Motor Corporation', anio: 2022 },
    { id: 7, marca: 'BMW', modelo: 'Serie 3', descripcion: 'Deportivo y lujoso.', imagen: 'https://th.bing.com/th/id/OIP.ZSLudrIhlUag9-h1yLa9twHaEK?w=282&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'BMW Group', anio: 2021 },
    { id: 8, marca: 'Mercedes-Benz', modelo: 'Clase C', descripcion: 'Elegancia y tecnología.', imagen: 'https://th.bing.com/th/id/OIP.--2oE6rdwM0hMadsg4ejiAHaFj?w=239&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'Mercedes-Benz Group', anio: 2020 },
    { id: 9, marca: 'Audi', modelo: 'A4', descripcion: 'Innovador y sofisticado.', imagen: 'https://th.bing.com/th/id/OIP.6_9erpNIn64eykY2wtLlvgHaEK?w=289&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'Audi AG', anio: 2023 },
    { id: 10, marca: 'Volkswagen', modelo: 'Jetta', descripcion: 'Compacto y confiable.', imagen: 'https://th.bing.com/th/id/OIP.lbyWNLXv9ZzqNqMEFwQIvgHaE7?w=272&h=181&c=7&r=0&o=5&pid=1.7', fabricante: 'Volkswagen AG', anio: 2021 },
    { id: 11, marca: 'Hyundai', modelo: 'Elantra', descripcion: 'Diseño moderno y eficiente.', imagen: 'https://th.bing.com/th/id/OIP.CoHtwECe0De-L9HYJma3DAHaD1?w=303&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'Hyundai Motor Company', anio: 2022 },
    { id: 12, marca: 'Kia', modelo: 'Sorento', descripcion: 'SUV espacioso y familiar.', imagen: 'https://th.bing.com/th/id/OIP.dOe3VixCGCnt_EhQj9ZPKAHaFj?w=247&h=185&c=7&r=0&o=5&pid=1.7', fabricante: 'Kia Corporation', anio: 2023 },
    { id: 13, marca: 'Subaru', modelo: 'Forester', descripcion: 'Aventurero y resistente.', imagen: 'https://th.bing.com/th/id/OIP.FPCT63vNR907b30fjem9LgHaFC?w=200&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'Subaru Corporation', anio: 2021 },
    { id: 14, marca: 'Tesla', modelo: 'Model 3', descripcion: 'Eléctrico y futurista.', imagen: 'https://th.bing.com/th/id/OIP.6lE1YJgeeRtmjoez72IZUgHaEK?w=307&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'Tesla, Inc.', anio: 2023 },
    { id: 15, marca: 'Porsche', modelo: '911', descripcion: 'Deportivo icónico.', imagen: 'https://th.bing.com/th/id/OIP.UNHaLeHU_iLe48wuCMzd-gHaEK?w=281&h=180&c=7&r=0&o=5&pid=1.7', fabricante: 'Porsche AG', anio: 2022 },

  ];

  // Filtrar autos según la búsqueda y la marca seleccionada
  autosFiltrados() {
    return this.autos.filter(auto =>
      (this.marcaSeleccionada === '' || auto.marca === this.marcaSeleccionada) &&
      (this.busqueda === '' || auto.modelo.toLowerCase().includes(this.busqueda.toLowerCase()) || auto.descripcion.toLowerCase().includes(this.busqueda.toLowerCase()))
    );
  }

  // Mostrar detalles del auto seleccionado
  verDetalles(auto: any) {
    this.router.navigate(['/detalle-auto', auto.id]);
  }

  // Agregar un nuevo auto
  agregarProducto() {
    alert('Funcionalidad de agregar un nuevo auto aún no implementada');
  }
}

