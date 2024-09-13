import { Component, HostListener } from '@angular/core';
import { ThemeServiceService } from '../navbar/ThemeService.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  navbarFixed: boolean = false;
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeServiceService) {
    this.themeService.currentTheme.subscribe((isDark) => {
    this.isDarkMode = isDark;
  });
  }

  @HostListener('window:scroll', ['$event']) onscroll(){
    if (window.scrollY > 100) {
      this.navbarFixed = true;
    }
    else {
      this.navbarFixed = false;
    }
  }
   activeLink: string = 'home';

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior:   
 'smooth' });
    }
  }

  
}

