import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutNewComponent } from './flex-layout-new.component';

describe('FlexLayoutNewComponent', () => {
  let component: FlexLayoutNewComponent;
  let fixture: ComponentFixture<FlexLayoutNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexLayoutNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexLayoutNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
