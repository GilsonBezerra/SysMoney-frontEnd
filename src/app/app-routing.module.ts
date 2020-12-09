import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', loadChildren: () => import('./seguranca/login/login.component').then(m => m.LoginComponent) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
