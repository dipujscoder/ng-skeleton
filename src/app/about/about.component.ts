import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CountiresService } from '../services/countires.service';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(
    private countriesService: CountiresService,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    console.log('Hello world');

    this.countriesService.getAllCountries('dipu').subscribe({
      next: (data) => {
        // localStorage.setItem('token', data.token);
        // localStorage.setItem('permissions', data.permissions);

        // this.isLoading = false;

        // this.router.navigateByUrl('');
        // this.authService.isAuthenticate();

        console.log('data', data);
      },
      error: (err) => {},
    });

    this.todoService
      .getTodos()
      .subscribe((todos) => console.log('todos', todos));
  }
}
