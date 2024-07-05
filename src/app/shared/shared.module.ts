import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactPAge/contactpage.component';
import { HomepageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './sidebar/sidebar.components';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    declarations: [
        HomepageComponent,
        AboutPageComponent,
        SidebarComponent,
        ContactpageComponent,
        SearchComponent

    ],
    imports: [ 
        CommonModule,
        RouterModule
     ],
    exports: [
            HomepageComponent,
            AboutPageComponent,
            SidebarComponent,
            ContactpageComponent,
            SearchComponent
    ],
    providers: [],
})

export class SharedModule {}