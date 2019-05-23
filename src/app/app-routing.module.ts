import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registry', loadChildren: './registry/registry.module#RegistryPageModule' },
  { path: 'add-patient', loadChildren: './patient/add-patient.module#AddPatientPageModule' },
  { path: 'list-patient', loadChildren: './patient/list-patient.module#ListPatientPageModule' },
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
