import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  constructor(private backend: BackendService) { }
  ngOnInit() {
  }
}
