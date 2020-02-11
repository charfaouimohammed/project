import { Component, OnInit, Input } from '@angular/core';
import{ NgForm, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Employer } from '../employer';
import { EmployerService } from '../employer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { User } from '../user';
import { Emp } from '../emp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() obj=new Emp();
  router: any;
  constructor(private service:EmployerService) { }
    
  

  ngOnInit() {
  }
  
  list:Emp;
  tes:string;
  n=0;
  connecter(formData: NgForm){
    this.obj.Username=formData.value.Username;
    this.obj.Passworld=formData.value.Passworld;
    this.service.getUserByUsername(this.obj.Username).subscribe((res)=>{
      this.list=res;
      console.log("lghjh",this.list);
    })
   
  }
 
}
