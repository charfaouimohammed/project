import { Injectable } from '@angular/core';
import{HttpClient,HttpClientModule} from '@angular/common/http';
import { Employer } from './employer';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { Emp } from './emp';
import { Congee } from './congee';
import { Admin } from './admin';



@Injectable({
  providedIn: 'root'
})
export class EmployerService {
url:string="https://localhost:44390/api/";

errorData:{};
isLoggedIn=false;
redirectUrl:string;

getUserByUsername(userName:string){
  return this.http.get<Employer>(this.url+'Emploiyes/ByUserName/'+userName);
}
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

     // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
   // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
/******************Get Employer********************* */
getEmp(){
  return this.http.get<Employer[]>(this.url+'Emploiyes/');
}
getEmpById(id:number){
  return this.http.get<Employer>(this.url+id);
}

  constructor(private http:HttpClient,private router:Router) {  }
signup(formData:NgForm):Observable<Employer>{
  console.log("data",formData);
  return this.http.post<Employer>(this.url,formData).pipe(
    tap((Emp:Employer)=>console.log('bien fait')),
    catchError(this.handleError<Employer>('signup'))
  )

}
  login(obj: Employer, conrollerName:string){   
    return this.http.post<any>(`${this.url}/${conrollerName}/login`, obj).pipe(
      tap(Emp => {
        if(Emp!=null){
          console.log("hellp",Emp);
          localStorage.setItem('currentEmployer',JSON.stringify(Emp));
        }else{
          console.log("n'est pas connecer");
        }
      }),
      catchError(this.handleError('signup',null))
    );
  }
  logout() {
    if (localStorage.getItem('currentEmployer')) {
      localStorage.removeItem('currentEmployer');
      this.router.navigate(['/home']);
    }
  }

  isloggedIn() {
    if (localStorage.getItem('currentEmployer')) {
      return true;
    } else {
      return false;
    }
  }
  getEmployer() {
    if (this.isloggedIn) {
      return JSON.parse(localStorage.getItem('currentEmployer'));
    }
    
  }
  getEmpByIdCongee(id){
     this.http.get<Emp[]>(this.url+'/Emploiyes/',id)

  }
  
 
  
}
