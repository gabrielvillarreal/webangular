import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { InfoPagina } from '../interfaces/info-Pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  datacargada = false;


  constructor( private http: HttpClient ) {

    //console.log('servicio de infopagina');

    //leer el archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp:InfoPagina) => {

        this.datacargada=true;
        this.info=resp ;

        //console.log( resp );
        console.log(resp['email'])

      });
   }
}
