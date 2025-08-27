import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBooks } from './project-books';

describe('ProjectBooks', () => {
  let component: ProjectBooks;
  let fixture: ComponentFixture<ProjectBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
