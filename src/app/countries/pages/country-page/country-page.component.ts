import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries';
import { CountrieService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country ?: Country;
  
  constructor( private activateRoute: ActivatedRoute,
               private countriesService : CountrieService,
               private router: Router
  ){

  }
  ngOnInit(): void {
  this.activateRoute.params
  .pipe(
    switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode ( id)),
  ).subscribe( country =>{
    if (!country){
      return this.router.navigateByUrl('home');
    }
     return this.country=country;
   });
  }


}
