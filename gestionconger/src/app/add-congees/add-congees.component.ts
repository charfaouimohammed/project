import { Component, OnInit, Output, Input } from '@angular/core';    
import{MaterialModuleModule} from '../material/material.module';
import{ReactiveFormsModule, FormControlName, FormControl, FormGroup} from '@angular/forms';
import{ MatFormFieldModule,MatInputModule,MatFormFieldControl,MatButtonModule} from '@angular/material'
import { from } from 'rxjs';
import { CongeeService } from '../congee.service';
import { Congee } from '../congee';
import { ActivatedRoute } from '@angular/router';
export{
  MaterialModuleModule,
  MatFormFieldModule,
  MatInputModule,
  MatFormFieldControl,
  ReactiveFormsModule,
  MatButtonModule

}

@Component({
  selector: 'app-add-congees',
  templateUrl: './add-congees.component.html',
  styleUrls: ['./add-congees.component.css']
})
export class AddCongeesComponent implements OnInit {
  
  @Input() listCongee:Congee[];
  @Input() test=false;

  myForm =new FormGroup({
    idConger:new FormControl(''),
    dateDebut:new FormControl(''),
    dateFin:new FormControl(''),
    statut:new FormControl(''),
    justification:new FormControl(''),
    idEploye:new FormControl(''),
    idAdmine:new FormControl(''),
   });

  constructor(private service:CongeeService, private route:ActivatedRoute) {
    this.loadData();
    console.log("id nouveaux ", this.route.snapshot.paramMap.get('id'));
   }
   
  ngOnInit() { }
  listo:Congee[];
  congee:Congee
  showInsert:boolean = true;
  loadData(){
    console.log('id:',this.route.snapshot.paramMap.get('id'))
    if (this.route.snapshot.paramMap.get('id')!=null) {
      this.showInsert=false
      this.service.getCongeeById(this.route.snapshot.paramMap.get('id')).subscribe(
        res=>{
          this.congee = res as Congee
         console.log("cogggee",this.congee);
         this.myForm.setValue({'idConger':this.congee.idConger,'dateDebut':this.congee.dateDebut,'dateFin':this.congee.dateFin,'statut':this.congee.statut,'justification':this.congee.justification,'idEploye':this.congee.idEploye,'idAdmine':this.congee.idAdmine})
        }
      );
    }
  }
  listCongees:Congee[]
  show(){
    this.service.getCongee().subscribe(res=>{
      this.listCongees=res;
      console.log("liste",this.listCongees)
    })
  }
  Add(){
    var conger=this.myForm.value as Congee
    console.log('conger',conger);
    this.service.AddCongees(conger).subscribe(result=>{
      console.log('res conger',result);
      this.show();
      console.log("data",this.show())
    })
  }

  Modif(){
    console.log("form",this.myForm.value);
    var conger=this.myForm.value as Congee
    console.log("congee :",conger);
    this.service.EditCongees(conger).subscribe(res=>{
      this.loadData();
      alert("product category modifier sucssfully");
    })
  }

}
