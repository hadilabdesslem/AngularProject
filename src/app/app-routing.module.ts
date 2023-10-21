import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouleurComponentComponent } from './couleur-component/couleur-component.component';

const routes: Routes = [
  { path: 'couleur', component:CouleurComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
