import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from './mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.hero = hero;
    this.selectedHero = hero;

    console.log('hero', hero);
  }
}
