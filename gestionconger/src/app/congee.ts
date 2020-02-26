import { Employer } from './employer';
import { EmployerService } from './employer.service';


export class Congee {
    idConger:number;
    dateDebut:string; 
    dateFin:string;    
    statut:string;
    justification:string;
    idEploye:number;
    idAdmine:number;
    idEployeNavigation:Employer;  
   
}
