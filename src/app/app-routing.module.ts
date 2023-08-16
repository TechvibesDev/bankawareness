import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'pages/:page',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }