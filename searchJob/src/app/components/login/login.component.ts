import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fields } from '../../models/fields';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private active: ActivatedRoute) { }



  currentUser: User = { name: '', password: '', id: 0, searchField: Fields.Angular }
  f: FormGroup | null = null

  // @Output()
  // onLogin: EventEmitter<string> = new EventEmitter<string>;
  ngOnInit(): void {
    this.f = new FormGroup(
      {
        
        name: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(/^\S*$/)]),
      }
    )
  }
  save() {
    if (this.f?.valid) {

      // this.saved.emit(this.newCostume)
      this.userService.getUserFromServer(this.currentUser.name, this.currentUser.password).subscribe(() => {
        console.log(this.userService.User);

        if (!this.userService.User)

          alert("משתמש לא קיים")
        else {
          localStorage.setItem("name", this.currentUser.name)
          localStorage.setItem("password", this.currentUser.password)
          // this.onLogin.emit(this.currentUser.Name);
          console.log(this.currentUser.name);
          
          this.router.navigate(['/'])
        }
        console.log(this.userService.User);


      }

      )
    }

    else {
      alert('לא תקין')
    }
  }

}



