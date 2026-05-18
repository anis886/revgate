import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBeasts } from './new-beasts';

describe('NewBeasts', () => {
  let component: NewBeasts;
  let fixture: ComponentFixture<NewBeasts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBeasts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBeasts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
