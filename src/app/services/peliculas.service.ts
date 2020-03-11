import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

//https://api.themoviedb.org/3/movie/550?api_key=
export class PeliculasService {
  private apikey: string = "8b37dc128680f86be9a30d6e6094da26";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  peliculas: any[] = [];

  constructor(private http: HttpClient) {}

  getPopulares() {
    let url = `${this.urlMovieDb}/discover/movie?with_genres=18&primary_release_year=2014&api_key=${this.apikey}&language=es`;
    console.log(this.http.get(url).pipe(map((res: any) => res.results)));
    return this.http.get(url).pipe(map((res: any) => res.results));
  }

  getPelisNiños() {
    let url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    console.log(this.http.get(url).pipe(map((res: any) => res.results)));
    return this.http.get(url).pipe(map((res: any) => res.results));
  }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    //convertir a formato Año /Mes / Dia
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() +
      1}-${desde.getDate()}`;
      

    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() +
      1}-${hasta.getDate()}`;

    // let url=`${this.urlMovieDb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}`;
    let url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${this.apikey}`;

    console.log(this.http.get(url).pipe(map((res: any) => res.results)));
    return this.http.get(url).pipe(map((res: any) => res.results));
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMovieDb}/search/movie?query=${texto}&sort_by=popularity&api_key=${this.apikey}`;

    return this.http.get(url).pipe(
      map((res: any) => {
        this.peliculas = res.results;
        console.log(this.peliculas);
        return this.peliculas;
      })
    );
  }

  getPelicula(id: string) {
    let url = `${this.urlMovieDb}/movie/${id}?&api_key=${this.apikey}`;
    console.log(this.http.get(url).pipe(map((res: any) => res.results)));
    return this.http.get(url).pipe(map((res: any) => res));
  }

}
