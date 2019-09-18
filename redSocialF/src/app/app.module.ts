import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';
import { ViewAllPhotosComponent } from './components/view-all-photos/view-all-photos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddPhotoComponent,
    ViewUsersComponent,
    NavigationComponent,
    ViewPhotoComponent,
    ViewAllPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
