import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransfersComponent } from './transfers/transfers.component';
import { TripsComponent } from './trips/trips.component';
import { ContactComponent } from './transfers/contact/contact.component';
import { DestinationComponent } from './transfers/destination/destination.component';
import { DetailsComponent } from './transfers/details/details.component';
import { OverviewComponent } from './transfers/overview/overview.component';
import { PreferencesComponent } from './transfers/preferences/preferences.component';
import { SuccessComponent } from './transfers/success/success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'trips', component: TripsComponent },
  { path: 'transfers', component: TransfersComponent, 
  children: [
    { path: '', redirectTo: 'destination', pathMatch: 'full'},
    { path: 'contact', component: ContactComponent },
    { path: 'destination', component: DestinationComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'preferences', component: PreferencesComponent },
    { path: 'success', component: SuccessComponent }
  ] 
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
