import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginandsignupComponent } from './loginandsignup.component';

describe('LoginandsignupComponent', () => {
  let component: LoginandsignupComponent;
  let fixture: ComponentFixture<LoginandsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginandsignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginandsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
