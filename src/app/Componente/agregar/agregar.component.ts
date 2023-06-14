import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/Dominio/Empleados';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  constructor(private router: Router, private service: ServicioService) {}

  empleado: Empleados = new Empleados();

  guardar() {
    this.service.guardarE(this.empleado).subscribe(data => {
      this.router.navigate(["listar"]);
    })
  }
}
