import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLogin = environment.userLogin;
  user: User = new User();
  userList?: User[];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (environment.userLogin == '') {
      window.alert("Sua seção expirou. Faça o login novamente.");
      this.router.navigate(['/login']);
    }

    this.getAllUsers();
    console.log(this.userList);

  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: User[]) => {
      this.userList = res;
    });
  }

  exit() {
    this.router.navigate(['/login']);
    environment.userLogin = '';
  }
}
