import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeesComponent } from './components/create-employees/create-employees.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-employees', pathMatch: 'full' },
  { path: 'list-employees', component: ListEmployeesComponent },
  { path: 'create-employees', component: CreateEmployeesComponent },
  { path: 'update-employees/:id', component: CreateEmployeesComponent },
  { path: '**', redirectTo: 'list-employees', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
