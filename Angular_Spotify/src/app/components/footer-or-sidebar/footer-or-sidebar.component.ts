import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-or-sidebar',
  imports: [],
  templateUrl: './footer-or-sidebar.component.html',
  styleUrl: './footer-or-sidebar.component.css'
})
export class FooterOrSidebarComponent {
   activeTab: string = 'home'


   setActive(tab: string){
    this.activeTab = tab
   }
}
