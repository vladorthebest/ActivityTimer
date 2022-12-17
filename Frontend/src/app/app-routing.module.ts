import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: '**',
    component: AppComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
