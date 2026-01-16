import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCard } from "@angular/material/card";
import { MatToolbar } from "@angular/material/toolbar";


@Component({
  selector: 'app-courses',
  imports: [CommonModule, MatTableModule, MatCard, MatToolbar],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent  implements OnInit{

 course: Course[] = [
  { _id: '1', name: 'Angular', category: 'front-end'},
  { _id: '2', name: 'Spring-Boot', category: 'back-end'}

 ];
 displayedColumns = ['name', 'category'];

 constructor() { }

  ngOnInit(): void {
    
  }
}
