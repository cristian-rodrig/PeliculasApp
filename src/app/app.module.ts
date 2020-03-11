import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

//Servicios
import {PeliculasService} from '../app/services/peliculas.service';

import { APP_ROUTING } from './app.routes';

import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoPeliculaComponent } from './components/info-pelicula/info-pelicula.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { GaleriaComponent } from './components/home/galeria.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoPeliculaComponent,
    HomeComponent,
    BuscadorComponent,
    PeliculaImagenPipe,
    GaleriaComponent,

  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
