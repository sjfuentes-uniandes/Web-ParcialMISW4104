import { TestBed, inject } from '@angular/core/testing';

import { CafeService } from './cafe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../app.component';
import { CafeComponent } from './cafe.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, HttpClientModule],
      declarations: [AppComponent, CafeComponent]
    });
    service = TestBed.inject(CafeService);
  });

  it('should be created', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
