import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUserModalComponent } from './eliminar-user-modal.component';

describe('EliminarUserModalComponent', () => {
  let component: EliminarUserModalComponent;
  let fixture: ComponentFixture<EliminarUserModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarUserModalComponent]
    });
    fixture = TestBed.createComponent(EliminarUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
