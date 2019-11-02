import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/model/user.model'
import { AllUsersService } from 'src/app/services/users/all-users.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[] = []

  constructor(private us: AllUsersService) {}

  ngOnInit() {
    this.us.getAllUsers().subscribe(
      data => {
        this.users = data
      },
      error => console.log(error)
    )
  }
}
