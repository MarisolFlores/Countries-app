import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountrieService } from '../../services/countries.service';

@Component({
    selector: 'countries-bycapital',
    templateUrl: 'bycapitalpage.component.html',
})

export class BycapitalComponent implements OnInit {
    public countries: Country[]=[];
    public isLoading: boolean=true;
  
   
    public initialValue: string ='';

    constructor (private countryService: CountrieService){
            
    }
    ngOnInit(): void {
       this.countries= this.countryService.cacheStore.byCapital.countries;
       this.initialValue= this.countryService.cacheStore.byCapital.term;
    }
    sel(term:string):void{
        this.isLoading=true;
        this.countryService.searchCapital(term).subscribe(countries=>{
            this.countries=countries;
            this.isLoading=false;
        });
        
    }
}