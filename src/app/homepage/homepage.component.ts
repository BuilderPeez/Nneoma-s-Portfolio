import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  navbarFixed: boolean = false;

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

