import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './shared/pages/contactPAge/contactpage.component';
import { HomepageComponent } from './shared/pages/home-page/home-page.component';

const routes : Routes=[
    /*{path:'', component: HomepageComponent},*/
    {path:'about', component: AboutPageComponent},
    {path:'contact', component: ContactpageComponent},
    {path:'countries',
        loadChildren:()=>import ('./countries/countries.module').then( m=>m.CountriesModule)},
    {path:'**', redirectTo: 'countries'}];


@NgModule({
    imports:[
        RouterModule.forRoot(routes),

    ],
    exports:[
        RouterModule,
    ]
})

export class AppRoutingModule { }
