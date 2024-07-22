import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
    selector: 'shared-searchbox',
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit, OnDestroy {
    private debouncer: Subject<string> = new Subject <string> ();
    private deobouncerSubscription  ? : Subscription;
    
    @Input()
    public initialValue:string="";
    
    @Input()
    public placeholder:string="";

    @Output()
    public onValue =new EventEmitter<string> ();

    @Output()
    public onDebounce = new EventEmitter<string> ();
    
    ngOnInit(): void {
      this.deobouncerSubscription= this.debouncer
      .pipe(debounceTime(350))
      .subscribe( value => {
        this.onDebounce.emit(value)
      })
    }
    ngOnDestroy(): void {
       this.deobouncerSubscription?.unsubscribe();
    }
        
    
    emitValue(value:string):void{
        this.onValue.emit ( value );
    }

    onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
    }

}