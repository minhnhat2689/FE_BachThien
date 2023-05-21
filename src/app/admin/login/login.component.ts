import { Component } from '@angular/core';
import { AppComponent } from 'src/app/common/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {
  constructor(private appComponent: AppComponent) {
    appComponent.showHeaderFooter = false;
  }
}
