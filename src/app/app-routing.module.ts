import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuotationComponent } from './pages/quotation/quotation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogoAutosComponent } from './pages/catalogo-autos/catalogo-autos.component';
import { DetalleAutoComponent } from './pages/detalle-auto/detalle-auto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quotation', component: QuotationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalogo-autos', component: CatalogoAutosComponent},
  { path: 'detalle-auto/:id', component: DetalleAutoComponent},

  // Manejo de página no encontrada (404)
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
