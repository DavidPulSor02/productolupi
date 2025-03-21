import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../services/rutas.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css'],
  standalone: false,
})
export class RutasComponent implements OnInit {
  rutas: any[] = [];

  constructor(private rutasService: RutasService) { }

  ngOnInit() {
    this.rutas = this.rutasService.obtenerRutasAleatorias();
  }
}
