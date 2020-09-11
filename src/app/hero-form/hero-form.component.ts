import {Component, Input, OnInit} from '@angular/core';
import { HeroService } from '../hero.service';
import { Herocare } from '../hero';
import {Validators} from "@angular/forms";


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  carer = ['john', 'chris', 'Tina', 'Pablo', 'maria']
  formErrors = {
    weight: false,
    carer: false,
    email: false
  }

  formValue = {
    weight: null,
    carer: null,
    email: null
  }


  constructor() { }

  ngOnInit(): void {
  }

  validateWeight() {
    this.formErrors.weight=this.formValue.weight < 0
    console.log(this.formErrors.weight);
  }

  ValidateEmail() {
    let mailFormat = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.formErrors.email=!this.formValue.email.match(mailFormat)
    console.log(this.formErrors.email);
  }



}
