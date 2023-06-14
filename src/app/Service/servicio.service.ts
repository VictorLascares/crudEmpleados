import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleados } from '../Dominio/Empleados';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  urlListar = 'http://localhost:9000/EmpleadoWs/listar';
  urlGuardar = 'http://localhost:9000/EmpleadoWs/guardar';
  urlBuscar = 'http://localhost:9000/EmpleadoWs/buscar';
  urlEditar = 'http://localhost:9000/EmpleadoWs/editar';
  urlEliminar = 'http://localhost:9000/EmpleadoWs/eliminar';

  listarE() {
    return this.http.get<Empleados[]>(this.urlListar)
  }

  guardarE(empleado: Empleados) {
    return this.http.post<Empleados>(this.urlGuardar, empleado);
  }

  buscarE(empleado: Empleados) {
    return this.http.post<Empleados>(this.urlBuscar, empleado);
  }

  editarE(empleado: Empleados) {
    return this.http.post<Empleados>(this.urlEditar, empleado);
  }

  eliminarE(empleado: Empleados) {
    return this.http.get<Empleados>(this.urlEliminar.concat(`/${empleado.id}`));
  }
}
