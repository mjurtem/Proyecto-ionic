
import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,  
    IonButtons, IonBackButton,  
    IonList, IonListHeader, IonItem, IonLabel, IonToggle  
  ]
})
export class AjustesPage {

  // Al declarar el parámetro como 'public', Angular nos permite acceder a 
  // 'settingsService' directamente desde el archivo HTML (plantilla).
  constructor(public settingsService: SettingsService) { }

  // Método que se ejecuta cada vez que el usuario mueve el interruptor (ion-toggle)
  onToggleChange(event: any) {
    // Obtenemos el nuevo valor booleano (true o false) del evento del componente
    const isChecked = event.detail.checked;
    
    // Actualizamos el servicio pasándole el nuevo estado
    this.settingsService.setDarkMode(isChecked);
  }
}