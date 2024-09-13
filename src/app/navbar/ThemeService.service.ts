import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  currentTheme = this.isDarkMode.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode.next(true);
    }
  }

  toggleTheme() {
    const currentTheme = !this.isDarkMode.value;
    this.isDarkMode.next(currentTheme);
    localStorage.setItem('theme', currentTheme ? 'dark' : 'light');
  }
}
