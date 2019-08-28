import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsPageComponent } from './starships-page.component';

describe('StarshipsPageComponent', () => {
  let component: StarshipsPageComponent;
  let fixture: ComponentFixture<StarshipsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
