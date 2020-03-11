import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InfoPeliculaComponent } from './components/info-pelicula/info-pelicula.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscadorComponent },
    { path: 'buscar/:texto', component: BuscadorComponent },
    { path: 'pelicula/:id/:pag', component: InfoPeliculaComponent },
    { path: 'pelicula/:id/:pag/:busqueda', component: InfoPeliculaComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);

