import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { Region } from '../../interfaces/region.type';
import { CountrieService } from '../../services/countries.service';



@Component({
  selector: 'countries-byregion',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
    public countries: Country[]=[];
    public regions:Region[]=['Africa' ,'Americas','Asia','Europe','Oceania'];
    public selectedRegion?:Region;

    constructor (private countryService: CountrieService){
            
    }
    ngOnInit(): void {
        this.countries= this.countryService.cacheStore.byRegion.countries;
       this.selectedRegion= this.countryService.cacheStore.byRegion.region
    }


    sel(term:Region):void{
        this.selectedRegion=term;
        this.countryService.searchRegion(term).subscribe(countries=>{
            this.countries=countries;
        });
    }
}