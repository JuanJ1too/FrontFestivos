import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FestivosClass } from '../models/festivos-class';

@Injectable({
  providedIn: 'root'
})
export class FestivosHttpService {

  public ListaFestivos:FestivosClass[] = []

  constructor(private Cliente:HttpClient) { }

    public validarFestivos(date:string):Observable<any>{
      const url = "https://localhost:7235/Api/FestivoPorFecha/"+date
      console.log(url)
      return this.Cliente.get<any>(url)
    }


  public validarFestivosYear(year:string):Observable<any>{
    return this.Cliente.get<any>(`https://localhost:7235/Api/ObtenerFestivosPorAño/${year}`)
}

}