import { Component, OnInit, Input,  } from '@angular/core';
import { Employer } from '../employer';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { EmployerService } from '../employer.service';
import { Congee } from '../congee';
import { CongeeService } from '../congee.service';
import {MatButtonModule} from '@angular/material'
export{
  MatButtonModule
}


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(private service:CongeeService,private ser:EmployerService) { 
  }
    /***********************test if row is selected or not******************************** */
    tes:string;
    StObjet:Congee[];
    private rowSelection;
    private SelectedClient:Congee;
     IsRowSelected: boolean = false;
    IsMultiple: boolean = false;
    onSelectionChanged(event) {
      if (this.api.getSelectedRows().length == 0) {
        this.IsRowSelected = false;
      } else {
        this.IsRowSelected = true;
        this.StObjet=this.api.getSelectedRows();
      }
      if (this.api.getSelectedRows().length != 1) {
        this.IsMultiple = true;
      } else {
        this.IsMultiple = false;
      }
    }
    /********************Delete******************* */
    delete(id:number){
      this.service.delete(id).subscribe(res=>{
        alert("suppression bien faite");
      })

    }
    /****************Dif************************* */
  columnDefs = [
    {
     headerName: "IdConger",
     field:"idConger",
     checkboxSelection:true
    },
    {
      headerName: 'DateDebut', 
      field:'dateDebut'
    },
    {
      headerName:'DateFin',
       field:'dateFin'
    },
    {
      headerName: 'Statut',
       field:'statut'
      },
    {
      headerName: 'Justification',
       field:'justification'
      },
];
listCongess:Congee[];
loadData(){
  this.service.getCongees(1).subscribe((temp)=>{
    this.listCongess=temp;
    console.log("this.list",this.listCongess);
  });
}
/****************variables ag-grid*********** */
private api:GridApi;
private colmunApi:ColumnApi;
/*****************Fill ag grid********** */
onGridReady(params):void{
  this.api=params.api;
  this.colmunApi=params.colmunApi;
  this.api.sizeColumnsToFit();
  this.loadData();
}
  ngOnInit() {
    this.loadData();
  }
}
