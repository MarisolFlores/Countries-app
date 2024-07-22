import { Component, OnInit } from '@angular/core';
import { CountrieService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { count } from 'rxjs';

@Component({
  selector: 'countries-bycountry',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

    public countries: Country[]=[];
    public isLoading: boolean=true;
    
    public initialValue:string='';

    constructor (private countryService: CountrieService){
            
    }
    ngOnInit(): void {
       this.countries= this.countryService.cacheStore.byCountries.countries;
       this.initialValue=this.countryService.cacheStore.byCountries.term;
    }



    sel(term:string):void{
        this.countryService.searchCountry(term).subscribe(countries=>{
            this.countries=countries; this.countries=countries;
            this.isLoading=false;
        });
    }
}