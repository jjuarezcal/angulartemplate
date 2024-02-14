import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages/inicio', pathMatch: 'full' },
  { path: '/pages/inicio', component: InicioComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
