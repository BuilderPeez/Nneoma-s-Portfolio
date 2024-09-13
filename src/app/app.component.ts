import { Component, Renderer2 } from '@angular/core';
import { ThemeServiceService } from './navbar/ThemeService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private renderer: Renderer2, private themeService: ThemeServiceService) {
    this.themeService.currentTheme.subscribe((isDark) => {
      if (isDark) {
        this.renderer.addClass(document.body, 'dark-mode');
        this.renderer.removeClass(document.body, 'light-mode');
      } else {
        this.renderer.addClass(document.body, 'light-mode');
        this.renderer.removeClass(document.body, 'dark-mode');
      }
    });
  }
}
