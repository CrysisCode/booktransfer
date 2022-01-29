import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutComponent } from './home/about/about.component';
import { WorkflowComponent } from './home/workflow/workflow.component';
import { FavouritesComponent } from './home/favourites/favourites.component';
import { PartnersComponent } from './home/partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { TransfersComponent } from './transfers/transfers.component';
import { HomeComponent } from './home/home.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DestinationComponent } from './transfers/destination/destination.component';
import { DetailsComponent } from './transfers/details/details.component';
import { PreferencesComponent } from './transfers/preferences/preferences.component';
import { ContactComponent } from './transfers/contact/contact.component';
import { OverviewComponent } from './transfers/overview/overview.component';
import { SuccessComponent } from './transfers/success/success.component';
import { TripsComponent } from './trips/trips.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    WorkflowComponent,
    FavouritesComponent,
    PartnersComponent,
    FooterComponent,
    TransfersComponent,
    HomeComponent,
    MobileNavComponent,
    DestinationComponent,
    DetailsComponent,
    PreferencesComponent,
    ContactComponent,
    OverviewComponent,
    SuccessComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    Ng5SliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
