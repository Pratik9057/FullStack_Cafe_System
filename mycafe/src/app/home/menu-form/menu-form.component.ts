import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/model/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent {
  menu!: Menu;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private menuService: MenuService) {
    this.menu = new Menu();
  }

  onSubmit() {
    this.menuService.save(this.menu).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['./menus']);
    alert("Item Added succesfully")
  }
}
