import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/countries';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountrieService {
    
    private apiUrl:string ='https://restcountries.com/v3.1';

    public cacheStore : CacheStore={
        byCapital :{term: '', countries:[]},
        byCountries: {term:'', countries:[]},
        byRegion: {region:'', countries:[]}

    }

    
    constructor(private http: HttpClient) { 
        this.loadFromLocalStorage();
    }
    private saveLocalStore(){
        localStorage.setItem ('cacheStore', JSON.stringify(this.cacheStore));
    }

    private loadFromLocalStorage(){
        if (!localStorage.getItem('cacheStore'))return;
         this.cacheStore=JSON.parse(localStorage.getItem('cacheStore')!);
    }


    
    private getCountriesRequest(url: string) : Observable<Country[]>{
        return this.http.get<Country[]>( url )
        .pipe(
        catchError(() => of ([])),
        
        );

    }

    searchCountryByAlphaCode(code:string):Observable<Country|null>{
        const url= `${this.apiUrl}/alpha/${code}`;
           return this.http.get<Country[]>(url)
           .pipe(
                map( countries => countries.length > 0 ? countries [0] : null),
            catchError(error => {
                return of(null)
                })
            );
    }
    searchCapital(term:string): Observable<Country[]>{
        const url= `${this.apiUrl}/capital/${term}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap(countries => this.cacheStore.byCapital={term:term, countries:countries}),
            tap(()=> this.saveLocalStore())
            //se puede quitar term:term por solo term, igual countries
        );

    }

    searchRegion(region:Region): Observable<Country[]>{
        const url= `${this.apiUrl}/region/${region}`;
        return this.getCountriesRequest(url)
        .pipe(
           tap(countries=>this.cacheStore.byRegion={region,countries}),
           tap(()=> this.saveLocalStore())
        );
     
        
         
    }

    searchCountry(term:string): Observable<Country[]>{
        const url= `${this.apiUrl}/name/${term}`;
           return this.http.get<Country[]>(url)
           .pipe(
            tap(countries=>this.cacheStore.byCountries=({term,countries})),
            tap(()=> this.saveLocalStore())
           )

    }

}

//podia ser en una sola linea
//* catchError( ()=>of ([]))

