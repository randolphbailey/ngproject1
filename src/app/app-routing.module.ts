import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/pages/home/home.component'
import { UserComponent } from './components/pages/user/user.component'
import { AdminComponent } from './components/pages/admin/admin.component'
import { ManagerComponent } from './components/pages/manager/manager.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'manager', component: ManagerComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
