import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,  Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService} from './services/firebase.service'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBpRnZ6XwLqGpilxMY0xV_FKjTK30RDKhM',
  authDomain: 'proplistings-efd11.firebaseapp.com',
  databaseURL: 'https://proplistings-efd11.firebaseio.com',
  storageBucket: 'proplistings-efd11.appspot.com',
  messagingSenderId: '964229301125'
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingComponent},
  {path: 'add-listing', component: AddListingComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    EditListingComponent,
    AddListingComponent,
    AddListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
