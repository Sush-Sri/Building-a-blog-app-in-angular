import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodblogComponent } from './foodblog.component';

describe('FoodblogComponent', () => {
  let component: FoodblogComponent;
  let fixture: ComponentFixture<FoodblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
