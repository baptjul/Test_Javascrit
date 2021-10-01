import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedOperationComponent } from './saved-operation.component';

describe('SavedOperationComponent', () => {
  let component: SavedOperationComponent;
  let fixture: ComponentFixture<SavedOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
