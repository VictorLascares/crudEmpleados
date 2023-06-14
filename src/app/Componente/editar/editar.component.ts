import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Service/servicio.service';
import { Empleados } from 'src/app/Dominio/Empleados';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  constructor(private router: Router, private service: ServicioService) { }
  empleado: Empleados = new Empleados();

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    let id = localStorage.getItem("id");
    this.empleado.id =+ Number(id);

    this.service.buscarE(this.empleado).subscribe(data => {
      this.empleado = data;
    })
  }

  editar() {
    this.service.editarE(this.empleado).subscribe(data => {
      this.router.navigate(["listar"]);
    })
  }
}
