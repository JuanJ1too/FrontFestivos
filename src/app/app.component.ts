import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaActualizableComponent } from './tabla-actualizable/tabla-actualizable.component';
import { ValidarFestivosComponent } from './validar-festivos/validar-festivos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaActualizableComponent, ValidarFestivosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontFestivos';  
}
