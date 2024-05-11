import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from './mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../services/hero.service';
HeroService;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  constructor(private heroService: HeroService) {}

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  heroes: Hero[] = [];

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.hero = hero;
    this.selectedHero = hero;

    console.log('hero', hero);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
