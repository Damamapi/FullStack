import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DlcsComponent } from './components/dlcs/dlcs.component';
import { CharactersComponent } from './components/characters/characters.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'dlcs', component: DlcsComponent},
  {path: 'characters', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
