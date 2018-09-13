import { Component, OnInit, Input } from '@angular/core';
import { Student } from './../../models';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    console.log(`Student: ${this.student.name}`)
  }
}
