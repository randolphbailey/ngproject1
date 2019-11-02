import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from 'src/app/model/user.model'

@Injectable({
  providedIn: 'root',
})
export class AllUsersService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>('http://localhost:8085/com.expense/Users')
  }
}
