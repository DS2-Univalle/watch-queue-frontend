import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/signup',
        pathMatch: 'full',
      },
      {
        path: '',
<<<<<<< HEAD
        loadChildren: () =>
          import('./login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule),
=======
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'watchlist',
        loadChildren: () => import('./watchlist/watchlist.module').then(m => m.WatchlistModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
>>>>>>> main
      },
    ],
  },
  {
    path: '**',
<<<<<<< HEAD
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      ),
=======
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
>>>>>>> main
  },
];

@NgModule({
<<<<<<< HEAD
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
=======
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
>>>>>>> main
  exports: [RouterModule],
})
export class AppRoutingModule {}
