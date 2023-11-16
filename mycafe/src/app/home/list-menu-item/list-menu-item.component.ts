import { Component } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-list-menu-item',
  templateUrl: './list-menu-item.component.html',
  styleUrls: ['./list-menu-item.component.css']
})
export class ListMenuItemComponent {
  menu!: Menu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.findAll().subscribe(data => {
      this.menu = data;
    });
  }
}
