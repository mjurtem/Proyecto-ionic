import { Component, Input, OnInit } from '@angular/core';
import { Coches } from '../../interfaces/coches';
// 1. Importamos los componentes de Ionic que usaremos en el HTML
import { IonCard, IonItem, IonCheckbox, IonLabel, IonButton, IonList } from '@ionic/angular';
// 2. Importamos CommonModule para poder usar directivas como [class.tachado]
import { CommonModule } from '@angular/common';

@Component
({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
  standalone: true,
  // 3. Registramos los módulos y componentes en el array 'imports'
  imports: [CommonModule, IonCard, IonItem, IonLabel, IonButton, IonList]
})
export class CarItemComponent 
{

  @Input() coche!: Coches;

  constructor() { }

  mostrarDetalles() 
  {
    console.log('Datos del coche:', this.coche);
  }
}