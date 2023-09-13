import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

interface MenuNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Locked-out-controle';

  isMenuNavCollapsed = false;
  screenWidth = 0;

  onToggleMenuNav(data: MenuNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isMenuNavCollapsed = data.collapsed;

  }
}
