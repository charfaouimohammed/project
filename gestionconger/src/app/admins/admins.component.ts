import { Component, OnInit, EventEmitter } from '@angular/core';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { Congee } from '../congee';
import { CongeeService } from '../congee.service';
import { AdminsService } from '../admins.service';
import { Router } from '@angular/router';
import { EmployerService } from '../employer.service';
import { Employer } from '../employer';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})

export class AdminsComponent implements OnInit {
  

  constructor(private service:CongeeService,private ser:AdminsService,private serv:EmployerService, private router:Router) 
  {
    this.service.getCongees().subscribe((temp)=>{
      this.listCongess=temp as Congee[];
      console.log("conges : ",this.listCongess); 
    });
  
  }
$congees=new EventEmitter();

 /***********************test if row is selected or not******************************** */
 tes:string;
 StObjet:Congee[];
 private rowSelection;
 isMultiple:boolean = false;
 private SelectedClient:Congee;
  IsRowSelected: boolean = false;
 IsMultiple: boolean = true;
 employes:Employer[]

 onSelectionChanged(event) {
   if (this.api.getSelectedRows().length == 0) {
     this.IsRowSelected = false;
     this.isMultiple = true
   } 
   else
   {
     this.IsRowSelected = true;
     this.StObjet=this.api.getSelectedRows();    
     console.log("hello again",this.StObjet);    
         this.id=this.api.getSelectedRows()[0].idConger;
        console.log("id again:",this.id);
   }
}
id:number;
list2:string;
  /****************Dif************************* */
  
  columnDefs = [
    {
     headerName: "IdConger",
     field:"idConger",
     width:100,
     checkboxSelection:true
    },
    {
      headerName: "Nom Prenom",
      field:"employeName",
      width:100,
     }, 
     {
      headerName: "employeTel",
      field:"employeTel",
      width:100,
     }, 
    {
      headerName: 'DateDebut', 
      field:"dateDebut",
        //     valueFormatter: function (params) {
        //        var nowDate = new Date(parseInt(params.value.substr(6)));
        //        return nowDate.toDateString();
        // },
      width:150,
    },
    {
      headerName:'DateFin',
       field:'dateFin',
       width:150,
    },
    {
      headerName: 'Justification',
       field:'justification',
       width:200,
      },
    {
      headerName: 'Statut',
       field:'statut',
       width:200,
      },
];

listCongess:Congee[];
loadData(){
  
    
  console.log("resault conge list : ",this.listCongess) 
  
}
/****************variables ag-grid*********** */
private api:GridApi;
private colmunApi:ColumnApi;
/*****************Fill ag grid********** */
onGridReady(params):void{
  this.api=params.api;
  this.colmunApi=params.colmunApi;
  this.api.sizeColumnsToFit();
}
  ngOnInit(){
    console.log("list:",this.listCongess)
  }
  myForm = new FormGroup({
    statut : new FormControl(''),
    justification : new FormControl('')
    })
    obj:Congee;
  send(){
    var list=this.myForm.value as Congee;
    this.obj=new Congee();    
    this.obj.idConger=this.StObjet[0].idConger;
    this.obj.dateDebut=this.StObjet[0].dateDebut;
    this.obj.dateFin=this.StObjet[0].dateFin;
    this.obj.idEploye=this.StObjet[0].idEploye;
    this.obj.idAdmine=this.StObjet[0].idAdmine;
    this.obj.statut=list.statut;
    this.obj.justification=list.justification 
    this.service.EditCongees(this.obj).subscribe(res=>{
      alert("success");
    })
  }
  
}
