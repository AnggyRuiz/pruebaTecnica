import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: any[] = []
  constructor(private employeeService: EmployeesService,  private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmpolyees().subscribe(data => {
      this.employees = []
      /*     console.log(data); */
      data.forEach((element: any) => {
        /*   console.log(element.payload.doc.data()); */
        this.employees.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });
      console.log(this.employees);

    })
  }
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployees(id).then(() => {
      console.log('eliminado con exito')
      this.toastr.error('El Docente fue eliminado con exito', 'Registro eliminado', {
        positionClass: 'toast-bottom-right'
      })
    }).catch((err) => {
      console.log(err);

    })
  }
}
