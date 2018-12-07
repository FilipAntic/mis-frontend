import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }


  navbarOpen = false;
  constructor(private auth: AuthService) { }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.auth.logout();
  }

}
