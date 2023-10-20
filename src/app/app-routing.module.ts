import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './component/person/person.component';
import { ConfigComponent } from './component/config/config.component';

const routes: Routes = [
  { path:'person', component:PersonComponent},
  { path:'config', component:ConfigComponent},
  { path:'', redirectTo:'/person', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
