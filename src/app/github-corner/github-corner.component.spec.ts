import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCornerComponent } from './github-corner.component';

describe('GithubCornerComponent', () => {
  let component: GithubCornerComponent;
  let fixture: ComponentFixture<GithubCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
