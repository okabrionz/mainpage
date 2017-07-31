import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentangComponent } from './tentang.component';

describe('TentangComponent', () => {
  let component: TentangComponent;
  let fixture: ComponentFixture<TentangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
