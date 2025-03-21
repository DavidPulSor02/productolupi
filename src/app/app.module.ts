import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { QuotationComponent } from './pages/quotation/quotation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { AutosComponent } from './pages/autos/autos.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuotationComponent,
    ContactComponent,
    LoginComponent,
    PanelComponent,
    SidebarComponent,
    RutasComponent,
    AutosComponent,
    ConfiguracionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
