import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi=[
    {
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      telefono: '555-1234'
    },
    {
      nombre: 'Ana Gómez',
      email: 'ana.gomez@example.com',
      telefono: '555-5678'
    },
    {
      nombre: 'Luis Rodríguez',
      email: 'luis.rodriguez@example.com',
      telefono: '555-8765'
    },
    {
      nombre: 'María Fernández',
      email: 'maria.fernandez@example.com',
      telefono: '555-4321'
    },
    {
      nombre: 'Carlos López',
      email: 'carlos.lopez@example.com',
      telefono: '555-9876'
    }
  ];
  constructor() { }
    // Método para obtener datos simulados
    getData(): Observable<any[]> {
      // Retorna un observable con los datos 
      return of(this.urlApi);
    }
}
