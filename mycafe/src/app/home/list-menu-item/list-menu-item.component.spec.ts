import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuItemComponent } from './list-menu-item.component';

describe('ListMenuItemComponent', () => {
  let component: ListMenuItemComponent;
  let fixture: ComponentFixture<ListMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMenuItemComponent]
    });
    fixture = TestBed.createComponent(ListMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
