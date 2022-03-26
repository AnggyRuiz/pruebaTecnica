import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modules
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CreateEmployeesComponent } from './components/create-employees/create-employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
