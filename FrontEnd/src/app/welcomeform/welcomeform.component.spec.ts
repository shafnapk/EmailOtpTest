import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeformComponent } from './welcomeform.component';

describe('WelcomeformComponent', () => {
  let component: WelcomeformComponent;
  let fixture: ComponentFixture<WelcomeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
