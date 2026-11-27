// Imports básicos de Angular y Ionic
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonToggle, IonButton, 
  IonButtons, IonIcon, IonGrid, IonRow, IonCol, IonCheckbox, IonSkeletonText } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';


// Imports de nuestra aplicación
import { Coches } from '../interfaces/coches';
import { CarItemComponent } from '../components/car-item/car-item.component'; // El componente hijo
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../components/app-header/app-header.component'; // Módulo necesario para usar *ngIf y *ngFor

// 1. Importamos los controladores desde 'standalone'
import { ToastController, AlertController, ModalController } from '@ionic/angular';
// Importamos el componente del modal (lo crearemos más adelante)
//import { DetalleModalComponent } from '../components/detalle-modal/detalle-modal.component';


@Component
({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone : true,
  // Al ser un componente standalone, debemos importar aquí todo lo que usemos en la plantilla
  imports: 
  [
    IonHeader, IonToolbar, IonTitle, IonContent, // Componentes de Ionic
    CarItemComponent, // Nuestro componente hijo
    CommonModule, // El módulo para las directivas
    AppHeaderComponent,
    IonGrid, IonRow, IonCol, RouterLink, IonButtons, IonIcon,
    FormsModule, IonList, IonItem, IonButton, IonInput,IonToggle,
    IonCheckbox, IonSkeletonText
  ]
})
export class HomePage 
{
  public catalogo: Coches[] = [];
  public cargando: boolean = true;

  public nuevoCoche: Coches =
  {
    id: 0, 
    marca: '', 
    modelo: '', 
    anno: 0, 
    km: 0, 
    itv: false, 
    seguro: false, 
    disponible: false, 
    precio: 0, 
    imagen: "" 
  };

  constructor(private toastController: ToastController) 
  {
    addIcons({ settingsOutline });

    setTimeout(() => {
      this.catalogo = [
        { id: 1, marca: 'Toyota', modelo: 'Corolla', anno: 2020, km: 50000, itv: true, seguro: true, disponible: true, precio: 15000, imagen: "https://picsum.photos/400/300?random=1" },
        { id: 2, marca: 'Honda', modelo: 'Civic', anno: 2018, km: 30000, itv: false, seguro: false, disponible: false, precio: 12000, imagen: "https://picsum.photos/400/300?random=2" },
        { id: 3, marca: 'Ford', modelo: 'Focus', anno: 2019, km: 80000, itv: true, seguro: true, disponible: true, precio: 10000, imagen: "https://picsum.photos/400/300?random=3" },
        { id: 4, marca: 'BMW', modelo: 'X3', anno: 2021, km: 20000, itv: true, seguro: true, disponible: false, precio: 35000, imagen: "https://picsum.photos/400/300?random=4" },
        { id: 5, marca: 'Audi', modelo: 'A4', anno: 2017, km: 60000, itv: false, seguro: false, disponible: true, precio: 25000, imagen: "https://picsum.photos/400/300?random=5" }
      ];
      this.cargando = false; // Cambiamos el estado a "cargado"
    }, 2000);
  }

  agregarCoche() 
  {
    const c = this.nuevoCoche;
    if (c.marca.trim().length === 0 || c.modelo.trim().length === 0 || Number(c.anno) <= 0 || Number(c.km) < 0 || Number(c.precio) <= 0) 
    {
      return;
    }

    const id = this.catalogo.length > 0
      ? Math.max(...this.catalogo.map(x => x.id)) + 1
      : 1;

    this.catalogo.unshift({
      ...c,
      anno: Number(c.anno),
      km: Number(c.km),
      precio: Number(c.precio),
      id,
      imagen: 'https://picsum.photos/400/300?random=' + id
    });

    this.nuevoCoche = { id: 0, marca: '', modelo: '', anno: 0, km: 0, itv: false, seguro: false, disponible: false, precio: 0, imagen: '' };
    this.mostrarToast();
  }

  async mostrarToast() 
  {
    const toast = await this.toastController.create({
      message: 'Nuevo coche agregado exitosamente.',
      duration: 3000, // Se cierra solo a los 2 segundos
      position: 'bottom', // 'top', 'middle', 'bottom'
      color: 'success',   // Color del tema (opcional)
      buttons: ['OK']     // Botón de cierre opcional
    });
    await toast.present();
  }
}