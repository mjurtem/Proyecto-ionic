import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // Estado privado para proteger la variable y controlar su acceso
  private darkMode: boolean = false;

  constructor() { }

  // Método getter: Devuelve si el modo oscuro está activo actualmente
  isDarkMode(): boolean {
    return this.darkMode;
  }

  // Activa o desactiva el modo oscuro y actualiza el DOM de forma inmediata
  setDarkMode(enable: boolean) {
    this.darkMode = enable;
    // Añade o quita la clase 'dark' del elemento body de la página web/app
    document.body.classList.toggle('dark', this.darkMode);
  }

  // Método para alternar (toggle) el estado actual de forma rápida
  toggleDarkMode() {
    this.setDarkMode(!this.darkMode);
  }
}
