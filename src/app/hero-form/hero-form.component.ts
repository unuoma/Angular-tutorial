import {Component, Input, OnInit} from '@angular/core';
import { HeroService } from '../hero.service';
import { Herocare } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  carer = ['john', 'chris', 'Tina', 'Pablo', 'maria']




  constructor() { }

  ngOnInit(): void {
  }

}
