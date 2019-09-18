import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';
import { ViewAllPhotosComponent } from './components/view-all-photos/view-all-photos.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'add_img', component: AddPhotoComponent },
  { path: 'users', component: ViewUsersComponent },
  { path: 'photo/:id', component: ViewPhotoComponent },
  { path: 'photos', component: ViewAllPhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
