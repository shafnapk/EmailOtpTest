import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailformComponent } from './mailform.component';

describe('MailformComponent', () => {
  let component: MailformComponent;
  let fixture: ComponentFixture<MailformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
