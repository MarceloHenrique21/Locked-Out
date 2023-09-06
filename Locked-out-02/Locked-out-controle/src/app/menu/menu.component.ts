import {Component, Output, EventEmitter} from '@angular/core';
import {navbarData} from './nav-data';

interface MenuNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() onToggleMenuNav: EventEmitter<MenuNavToggle> = new EventEmitter();

  collapsed = true;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleMenuNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeMenu(): void {
    this.collapsed = false
    this.onToggleMenuNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
