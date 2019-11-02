import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { UserComponent } from './components/pages/user/user.component';
import { ManagerComponent } from './components/pages/manager/manager.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, AdminComponent, UserComponent, ManagerComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
