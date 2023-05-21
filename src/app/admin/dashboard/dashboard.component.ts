import { Component } from '@angular/core';
import { AppComponent } from 'src/app/common/app.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private appComponent: AppComponent) {
    appComponent.showHeaderFooter = false;
  }
}
