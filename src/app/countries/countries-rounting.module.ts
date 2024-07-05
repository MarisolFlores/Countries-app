import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BycapitalComponent } from './pages/by-capital-page/bycapitalpage.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes:Routes=[
    { path:'by-capital',component: BycapitalComponent },
    { path:'by-country',component: ByCountryPageComponent},
    { path:'bycapital',component: BycapitalComponent },
    { path:'by/:idl',component: CountryPageComponent },
    {path:'**', component:BycapitalComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
    ],
   
})

export class CountriesRoutingModule { }
