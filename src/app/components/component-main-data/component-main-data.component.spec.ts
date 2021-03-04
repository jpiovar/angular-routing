import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMainDataComponent } from './component-main-data.component';

describe('ComponentMainDataComponent', () => {
  let component: ComponentMainDataComponent;
  let fixture: ComponentFixture<ComponentMainDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMainDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
