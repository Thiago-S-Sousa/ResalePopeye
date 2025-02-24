import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
}
