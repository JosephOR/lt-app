import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
    { path: 'details', component: DetailsComponent },
    { path: '', redirectTo: '/details', pathMatch: 'full' },
    { path: '**', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
