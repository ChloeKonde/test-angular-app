import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  addingTodoForm = this.fb.group({
    text: ['', Validators.required],
    category: ['']
  });

 constructor(private fb: FormBuilder, public dialog: MatDialogRef<FormComponent>) {}

  ngOnInit(): void {
    this.initForm();
  }

  onClose() {
    this.dialog.close({event: 'cancel'});
  }

  onSubmit() {
    const controls = this.addingTodoForm.controls;

    if (this.addingTodoForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    /** TODO: Обработка данных формы */
    //console.log(this.addingTodoForm.value);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.addingTodoForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.addingTodoForm = this.fb.group({
      text: ['', [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ]
      ]
    });
  }

  // selectedValue: string;
 

  // projects: Project[] = [
  //   {value: '0', viewValue: 'Семья'},
  //   {value: '1', viewValue: 'Работа'},
  //   {value: '2', viewValue: 'Прочее...'}
  // ];

}
