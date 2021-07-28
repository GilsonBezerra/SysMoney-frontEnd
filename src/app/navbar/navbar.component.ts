import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public exibirmenulateral = false;

  constructor() { }

  ngOnInit() {
  }

  public exibirMenuLateral() {
    this.exibirmenulateral = !this.exibirmenulateral;
  }

}
