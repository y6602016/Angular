import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "", loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: "about", loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: "contact", loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  // 404 shoule be last one
  {path: '**', component: PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
