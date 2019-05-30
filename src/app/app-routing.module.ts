import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { OutsideGuard } from './guards/outside.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'  , canActivate: [LoginGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' , canActivate: [OutsideGuard]  },
  { path: 'registry', loadChildren: './registry/registry.module#RegistryPageModule'  },
  { path: 'add-patient/:id', loadChildren: './patient/add-patient.module#AddPatientPageModule' , canActivate: [LoginGuard]  },
  { path: 'list-patient', loadChildren: './patient/list-patient.module#ListPatientPageModule' , canActivate: [LoginGuard] },
  { path: 'chat', loadChildren: './chatbot/chat/chat.module#ChatPageModule' },
  { path: 'report-patient/:id', loadChildren: './patient/report-patient.module#ReportPatientPageModule' },
  { path: 'add-report-patient', loadChildren: './patient/add-report-patient.module#AddReportPatientPageModule' }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
