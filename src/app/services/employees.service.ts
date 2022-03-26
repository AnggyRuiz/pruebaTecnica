import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private firestore: AngularFirestore) {



  }
  addEmployee(employee: any): Promise<any> {
    return this.firestore.collection('employee').add(employee);
  }
  getEmpolyees(): Observable<any> {
    return this.firestore.collection('employee', ref => ref.orderBy('creationDate', 'asc')).snapshotChanges();
  }
  deleteEmployees(id: string): Promise<any> {
    return this.firestore.collection('employee').doc(id).delete()
  }
  getEmployeeUpdate(id: string): Observable<any> {
    return this.firestore.collection('employee').doc(id).snapshotChanges();

  }

  updateEmpleado(id: string, data:any): Promise<any> {
    return this.firestore.collection('employee').doc(id).update(data);
  }
}
