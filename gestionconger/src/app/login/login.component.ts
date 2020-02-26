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

  constructor(private service:EmployerService,private router: Router) { }
    
  

  ngOnInit() {
    // if(localStorage.getItem('token')!=null)
    // {
    //   this.router.navigateByUrl('/employer');
    // }
  }
  
  tes:string;
  n=0;
  connecter(formData: NgForm){ 
    var employer=new Employer();
    employer.username=formData.value.Username;
    employer.passworld=formData.value.Passworld;
    employer.isAdmin=formData.value.isAdmin;

    console.log("obj",employer);
    this.service.login(employer,'Emploiyes').subscribe((res)=>{
     
      
      console.log("result",res);
      if(res!=null)
      {
        if(employer.isAdmin)
        {
          localStorage.setItem("UserName",formData.value.Username)
          this.router.navigate(['/admin']);
        }
        else
        {
           console.log("id user : ",res.idEmploiye)
           var user = formData.value as Employer
          //localStorage.setItem("UserName",user.username)
          this.router.navigate(['/employer',res.idEmploiye]);
        }
       
      }
      
    })
   
  }
  
 
}
