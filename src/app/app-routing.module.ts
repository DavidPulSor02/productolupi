import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuotationComponent } from './pages/quotation/quotation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component'; // Asegúrate de importar el componente correcto
import { PanelComponent } from './pages/panel/panel.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AutosComponent } from './pages/autos/autos.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección a home por defecto
  { path: 'home', component: HomeComponent },
  { path: 'quotation', component: QuotationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'inicio', component: DashboardComponent },
  { path: 'autos', component: AutosComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  


  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
