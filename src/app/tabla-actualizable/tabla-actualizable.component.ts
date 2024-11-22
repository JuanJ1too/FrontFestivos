import { Component } from '@angular/core';
import { FestivosHttpService } from '../services/festivos-http.service';

@Component({
  selector: 'app-tabla-actualizable',
  standalone: true,
  imports: [],
  templateUrl: './tabla-actualizable.component.html',
  styleUrl: './tabla-actualizable.component.css'
})
export class TablaActualizableComponent 
{
  constructor(public FestivosHttpClienteService:FestivosHttpService){}
}
