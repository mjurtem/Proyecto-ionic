import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor() { }
  private readonly KEY = 'darkMode';
  isDarkMode = false;

  // Llamar una vez al arrancar la app
  init() {
    const guardado = localStorage.getItem(this.KEY);
    const sistema = window.matchMedia('(prefers-color-scheme: dark)');

    // Si el usuario ya eligió, se respeta; si no, se usa el modo del navegador
    this.aplicar(guardado !== null ? guardado === 'true' : sistema.matches);

    // Si el navegador cambia de modo y el usuario no ha elegido nada, se sigue al sistema
    sistema.addEventListener('change', e => {
      if (localStorage.getItem(this.KEY) === null) this.aplicar(e.matches);
    });
  }

  // El método que ya llama tu página
  setDarkMode(oscuro: boolean) {
    this.aplicar(oscuro);
    localStorage.setItem(this.KEY, String(oscuro));
  }

  private aplicar(oscuro: boolean) {
    this.isDarkMode = oscuro;
    document.documentElement.classList.toggle('ion-palette-dark', oscuro);
  }
}
