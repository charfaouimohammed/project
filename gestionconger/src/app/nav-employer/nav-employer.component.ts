import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-employer',
  templateUrl: './nav-employer.component.html',
  styleUrls: ['./nav-employer.component.css']
})
export class NavEmployerComponent implements OnInit {

  constructor(private router:Router) { 


  }

  ngOnInit() {
  }
 
  onlogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
