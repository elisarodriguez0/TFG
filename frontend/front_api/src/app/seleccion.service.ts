import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {
  private titulosSeleccionados: string[] = [];
  private conferenceOption = "";
  private venueName = "";

  agregarTitulos(titulos: any[]) {
    this.titulosSeleccionados = titulos.reduce((arr, titulo) => {
      arr.push(titulo);
      return arr;
    }, []);
  }

  obtenerTitulosSeleccionados() {
    return this.titulosSeleccionados;
  }

  limpiarTitulosSeleccionados() {
    this.titulosSeleccionados = [];
  }

  marcarOpcionConferencia(opcion: string) {
    this.conferenceOption = opcion;
  }
  
  obtenerOpcionConferencia() {
    return this.conferenceOption;
  }

  marcarNombreVenue(venue: string) {
    this.venueName = venue;
  }
  
  obtenerNombreVenue() {
    return this.venueName;
  }


}
