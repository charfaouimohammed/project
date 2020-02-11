import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})

export class AdminsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  /****************Dif************************* */
  columnDefs = [
    {
     headerName: "IdConger",
     field:"idConger",
     checkboxSelection:true
    },
    {
      headerName: "username employer",
      field:" Username",
      checkboxSelection:true
     },
     
     {
      headerName: "Nom employer",
      field:" Nom",
      checkboxSelection:true
     },
     {
      headerName: "Prenom Employer",
      field:" Prenom",
      checkboxSelection:true
     },
    {
      headerName: 'DateDebut', 
      field:'dateDebut'
    },
    {
      headerName:'DateFin',
       field:'dateFin',
    },
    {
      headerName: 'Justification',
       field:'justification'
      },
    {
      headerName: 'Statut',
       field:'statut'
      },
    

];

}
