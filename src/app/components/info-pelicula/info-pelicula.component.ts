import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: "app-info-pelicula",
  templateUrl: "./info-pelicula.component.html",
  styleUrls: ["./info-pelicula.component.css"]
})
export class InfoPeliculaComponent implements OnInit {
  pelicula: any;
  regresarA:string ="";
  busqueda: string ="";


  constructor(public _ps: PeliculasService,
             public route: ActivatedRoute) {
    this.route.params.subscribe(parametros => {
      console.log(parametros);
      this.regresarA=parametros['pag'];

      if(parametros['busqueda']){
        this.busqueda=parametros['busqueda'];
      }
      
    this._ps.getPelicula(parametros['id'])
      .subscribe(pelicula=>this.pelicula=pelicula)
      
    });
  }

  ngOnInit(): void {}
}
