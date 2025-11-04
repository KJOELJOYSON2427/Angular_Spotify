import { Component } from '@angular/core';
import { FooterOrSidebarComponent } from "../footer-or-sidebar/footer-or-sidebar.component";

@Component({
  selector: 'app-home',
  imports: [FooterOrSidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
