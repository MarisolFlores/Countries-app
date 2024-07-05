import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'shared-searchbox',
    templateUrl: 'search.component.html'
})

export class SearchComponent {
    @Input()
    public placeholder:string="";

    @Output()
    public OnValue  =new EventEmitter<string> ();
    
     emitValue(value:string):void{
        this.OnValue.emit ( value );
        console.log("si entra", value);
    }
}