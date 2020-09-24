import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/auth/page-not-found/page-not-found.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  // },


  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
      },
    ]
  },

  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
