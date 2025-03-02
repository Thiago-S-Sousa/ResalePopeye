import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faXmark,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faBars = faBars;
  faXmark = faXmark;

  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  openNavbar: boolean = false;
  // faIcon: IconDefinition = faBars;

  toglleNavbar() {
    this.openNavbar = !this.openNavbar;

    // this.openNavbar === true
    //   ? (this.faIcon = this.faXmark)
    //   : (this.faIcon = this.faBars);
  }

  linkWhatsapp: string = '';
  linkInstagram: string = 'https://www.instagram.com/popeyeacai';
  linkFacebook: string = 'https://www.facebook.com/popeyeacai';
}
