import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';

@Component({
    selector: 'country-table',
    templateUrl: './countrytable.component.html',
    styleUrls:['./countrytable.component.css']
    
})
export class CountryTableComponent implements OnInit {
    constructor() { }
    
    @Input()
    public countries : Country[]=[];
    
    ngOnInit(): void { }
}
