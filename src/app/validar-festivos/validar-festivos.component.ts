import { Component, ElementRef, ViewChild } from '@angular/core';
import { FestivosHttpService } from '../services/festivos-http.service';
import { FestivosClass } from '../models/festivos-class';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-validar-festivos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './validar-festivos.component.html',
  styleUrl: './validar-festivos.component.css'
})
export class ValidarFestivosComponent {
  constructor(private FestivosHttpClienteService: FestivosHttpService) {}

  ValidarFestivosYear() {
    this.FestivosHttpClienteService.validarFestivosYear(this.YearInput.nativeElement.value).subscribe({
      next: (respuesta: any) => {
        this.FestivosHttpClienteService.ListaFestivos = [];
        for (let festivo of respuesta) {
          let claseFestivo = new FestivosClass(
            festivo.nombre,
            festivo.dia,
            festivo.mes,
            this.YearInput.nativeElement.value
          );
          this.FestivosHttpClienteService.ListaFestivos.push(claseFestivo);
        }
      },
      error: () => {
        console.log("Ocurrió un Error");
        alert("Selecciona un año válido");
      }
    });
  }

  public ValidarFestivo() {
    let fechaArray = this.FechaInput.nativeElement.value.split("-");
    this.FestivosHttpClienteService.validarFestivos(fechaArray).subscribe({
      next: (response: any) => {
        alert(response.response);
      },
      error: () => {
        console.log("Ocurrió un Error");
        alert("Selecciona una fecha válida");
      }
    });
  }

  @ViewChild('FechaInput') FechaInput!: ElementRef;
  @ViewChild('YearInput') YearInput!: ElementRef;
}