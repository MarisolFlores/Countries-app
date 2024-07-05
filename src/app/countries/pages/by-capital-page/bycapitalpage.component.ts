import { Component } from '@angular/core';

@Component({
    selector: 'countries-bycapital',
    templateUrl: 'bycapitalpage.component.html',
})

export class BycapitalComponent  {

    searchByCapital(term:string):void{
        console.log ("desde byCapitalPage");
        console.log(term);
    }
}