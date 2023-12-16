import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movie/:apiId',
    component: MovieComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },  
  { 
    path: 'register', 
    component: RegisterComponent
  },  
  {
    path: 'search',
    component: SearchComponent
  },
  { 
    path: '**', 
    redirectTo: '/login' 
  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./components/folder/folder.module').then(m => m.FolderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

