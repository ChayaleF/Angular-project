import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Fields } from '../models/fields';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer, tap } from 'rxjs';
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
  }

  user: User ={id:1,name:"",password:"",searchField:Fields.Angular};
  cv:number|null=0
  //  getUserFromServer(name:string,password:string){
    
  //   this.http.get(`https://localhost:5001/api/User/${name}/${password}`).subscribe((res: any) => {
  //     console.log(res);
  //     // return res;
  //     this.user = res;
  //   })
    
  // }
  getUserFromServer(name: string, password: string): Observable<any> {
    return this.http.get(`https://localhost:5001/api/User/${name}/${password}`).pipe(
      tap((res:any) => {
        
        this.user=res;
        let cvv=localStorage.getItem("cv")?localStorage.getItem("cv"):"0"
        this.cv=cvv? parseInt(cvv):0
        
      })
    );
  }
  public get User() {
   

    return this.user
  }

  

  getRenredCUser(): Observable<User> {
    let o: Observable<User> = new Observable<User>(o => {})

     /* try {
        setTimeout(() => {
          o.next(this.costumeList[0])
        }, 2000)
        setTimeout(() => {
          o.next(this.costumeList[1])
        }, 1000);
        setTimeout(() => {
          o.next(this.costumeList[2])
          o.complete()
        }, 4000);
      }
      catch (ex) {
        o.error(ex)
      }
    })*/
    return o

  }
}
