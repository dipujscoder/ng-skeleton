import { Injectable } from '@angular/core';
import { HEROES } from '../components/hero/mock-heroes';
import { Hero } from '../components/hero/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    return heroes;
  }
}
