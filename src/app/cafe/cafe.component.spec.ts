/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { CafeComponent } from './cafe.component';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';

describe('BookListComponent', () => {
 let component: CafeComponent;
 let fixture: ComponentFixture<CafeComponent>;
 let debug: DebugElement;

 beforeEach(waitForAsync(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CafeComponent ],
     providers: [ CafeService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(CafeComponent);
   component = fixture.componentInstance;
   component.cafes = Array.from({ length: 3 }, () => new Cafe(
    faker.number.int(),
    faker.person.fullName(),
    faker.lorem.sentence(),
    faker.lorem.word(),
    faker.lorem.word(),
    faker.number.int(),
    faker.image.avatar()
  ));

  fixture.detectChanges();
  debug = fixture.debugElement;
});

 it('should create', () => {
    expect(component).toBeTruthy();
 });

 it('should have a table with 3 rows of data', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });

  it('should have a table header', () => {
    const headers = debug.query(By.css('thead'));
    expect(headers).toBeTruthy();
  });

  it('should render the first cafe\'s name in a dd element', () => {
    const dds = debug.queryAll(By.css('dd'));
    const nombreDd = dds[1];
    expect(nombreDd.nativeElement.textContent).toContain(component.cafes[0].nombre);
  });
});
