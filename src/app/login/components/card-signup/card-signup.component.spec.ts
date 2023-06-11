import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSignupComponent } from './card-signup.component';

describe('CardSignupComponent', () => {
  let component: CardSignupComponent;
  let fixture: ComponentFixture<CardSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [CardSignupComponent],
    }).compileComponents();
=======
      declarations: [ CardSignupComponent ]
    })
    .compileComponents();
>>>>>>> main

    fixture = TestBed.createComponent(CardSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
