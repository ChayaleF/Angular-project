import { Observable, Observer, observable } from "rxjs"
import { Fields } from "./fields"
export interface User {
    id:number
    name:string   
    password:string
    searchField:Fields
   
}