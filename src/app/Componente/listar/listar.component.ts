import { Component } from '@angular/core';
import { Empleados } from 'src/app/Dominio/Empleados';
import { ServicioService } from 'src/app/Service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  empleado: Empleados[];
  // Declarar el constructir con los parametros
  constructor(private router: Router, private service: ServicioService) { }

  ngOnInit(): void {
    this.service.listarE().subscribe(data => {
      this.empleado = data;
      console.log(JSON.stringify(data));
    })
  }

  Editar(empleado: Empleados) {
    localStorage.setItem("id", empleado.id.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(empleado: Empleados) {
    this.service.eliminarE(empleado).subscribe(data => {
      this.service.listarE().subscribe(data => {
        this.empleado = data;
      })
    })

  }
}
