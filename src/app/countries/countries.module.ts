import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BycapitalComponent } from './pages/by-capital-page/bycapitalpage.component';
import { CountriesRoutingModule } from './countries-rounting.module';
import { SharedModule } from "../shared/shared.module";
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/countrytable/countrytable.components';



@NgModule({
    declarations: [
        BycapitalComponent,
        ByCountryPageComponent,
        ByRegionPageComponent,
        CountryPageComponent,
        CountryTableComponent
    ],
    imports: [
        CommonModule,
        CountriesRoutingModule,
        SharedModule
    ],
    /*exports: [
        BycapitalComponent,
        ByCountryPageComponent,
        ByRegionPageComponent,
        CountryPageComponent
    ],*/
})
export class CountriesModule { }
