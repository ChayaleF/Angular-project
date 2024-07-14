import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { PositionComponent } from './components/position/position.component';
import { PositionPageComponent } from './components/position-page/position-page.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'position-page', component: PositionPageComponent, children:
      [
      { path: 'show-details/:jobName', component: ShowDetailsComponent }],
  }, 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
