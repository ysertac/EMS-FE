import { Component } from '@angular/core';
import { HeaderComponent } from '../../general-contents/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../general-contents/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
