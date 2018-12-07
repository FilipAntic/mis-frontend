import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses = []
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.getAllCourses().subscribe((response: Body) => {
      this.courses = response['courses'];
      console.log(this.courses)
    })
  }

}
