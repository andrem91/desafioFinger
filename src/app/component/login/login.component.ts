import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin: string = '';
  public passwordLogin: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.userLogin == '' || this.passwordLogin == '') {
      window.alert("Digite o usuário e a senha.")
    } else {
      environment.userLogin = this.userLogin;
      this.router.navigate(['/home']);
    }


  }

}
