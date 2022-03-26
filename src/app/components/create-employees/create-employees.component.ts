import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  createEmployee: FormGroup;
  submitted = false
  loading = false
  id: string | null
  title = 'Agregar Docente'

  constructor(private fb: FormBuilder,
    private employeeServices: EmployeesService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {

    this.createEmployee = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      doc: ['', Validators.required],
      salary: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();

  }
  agregarEditarEmpleado() {
    this.submitted = true;

    if (this.createEmployee.invalid) {
      return;
    }

    if (this.id === null) {

      this.addEmploye();

    } else {

      this.updateEmployee(this.id);

    }

  }
  addEmploye() {


    this.submitted = true;
    if (this.createEmployee.invalid) {
      return
    }
    const employee: any = {
      name: this.createEmployee.value.name,
      lastName: this.createEmployee.value.lastName,
      doc: this.createEmployee.value.doc,
      salary: this.createEmployee.value.salary,
      creationDate: new Date(),
      updateDate: new Date(),
    }
    this.loading = true;
    this.employeeServices.addEmployee(employee).then(() => {
      console.log('Successfully Registered Employee');
      this.toastr.success('El Docente fue registado con exito', 'Docente Registrado', {
        positionClass: 'toast-bottom-right'
      })
      this.loading = false;
      this.router.navigate(['/list.employees'])

    }).catch((err) => {
      console.error(err)
      this.loading = false;

    })
  }
  updateEmployee(id: string) {

    const employee: any = {
      name: this.createEmployee.value.name,
      lastName: this.createEmployee.value.lastName,
      doc: this.createEmployee.value.doc,
      salary: this.createEmployee.value.salary,
      creationDate: new Date(),
      updateDate: new Date(),
    }
    this.loading = true;
    this.employeeServices.updateEmpleado(id, employee).then(() => {
      this.loading = false;
      this.toastr.info('El Docente fue modificado con exito', 'Docente modificado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list-empleados']);
    })

  }
  esEditar() {
    this.title = 'Editar Docente'

    if (this.id !== null) {
      this.loading = true;
      this.employeeServices.getEmployeeUpdate(this.id).subscribe(data => {
        this.loading = false;
        this.createEmployee.setValue({
          name: data.payload.data()['name'],
          lastName: data.payload.data()['lastName'],
          doc: data.payload.data()['doc'],
          salary: data.payload.data()['salary'],
        })
      })
    }

  }
}
