import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProgressComponent } from './app-progress.component';

describe('AppProgressComponent', () => {
  let component: AppProgressComponent;
  let fixture: ComponentFixture<AppProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
