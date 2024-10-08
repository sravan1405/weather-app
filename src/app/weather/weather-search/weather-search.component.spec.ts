import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherSearchComponent } from './weather-search.component';
import {FormsModule} from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WeatherSearchComponent', () => {
  let component: WeatherSearchComponent;
  let fixture: ComponentFixture<WeatherSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ WeatherSearchComponent],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });


});
