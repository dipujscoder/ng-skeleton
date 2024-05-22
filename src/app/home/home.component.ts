import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeroComponent } from '../components/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../components/todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FormsModule,
    TodoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
