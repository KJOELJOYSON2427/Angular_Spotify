import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { NavbarComponent } from "../layout/navbar/navbar.component";
import { FooterComponent } from "../layout/footer/footer.component";

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, LoginComponent, NavbarComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
