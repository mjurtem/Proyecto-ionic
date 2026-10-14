// Imports básicos de Angular y Ionic
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

// Imports de nuestra aplicación
import { Coches } from '../interfaces/coches';
import { CarItemComponent } from '../components/car-item/car-item.component'; // El componente hijo
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../components/app-header/app-header.component'; // Módulo necesario para usar *ngIf y *ngFor


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // Al ser un componente standalone, debemos importar aquí todo lo que usemos en la plantilla
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, // Componentes de Ionic
    CarItemComponent, // Nuestro componente hijo
    CommonModule // El módulo para las directivas
    ,
    AppHeaderComponent
],
})
export class HomePage 
{
  catalogo: Coches[] =
  [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', anno: 2020, km: 50000, itv: true, seguro: true, disponible: true, precio: 15000, imagen: "" },
    { id: 2, marca: 'Honda', modelo: 'Civic', anno: 2018, km: 30000, itv: false, seguro: false, disponible: false, precio: 12000, imagen: "" },
    { id: 3, marca: 'Ford', modelo: 'Focus', anno: 2019, km: 80000, itv: true, seguro: true, disponible: true, precio: 10000, imagen: "" },
    { id: 4, marca: 'BMW', modelo: 'X3', anno: 2021, km: 20000, itv: true, seguro: true, disponible: false, precio: 35000, imagen: "" },
    { id: 5, marca: 'Audi', modelo: 'A4', anno: 2017, km: 60000, itv: false, seguro: false, disponible: true, precio: 25000, imagen: "" }
  ];

  constructor() {}
}
