import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isOpen:boolean = true;

    sidebar() :void {
      console.log('sidebar works!');
      
      this.isOpen = !this.isOpen;
    }
}
