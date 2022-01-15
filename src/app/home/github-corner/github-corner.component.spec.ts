import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubCornerComponent } from './github-corner.component';

describe('GithubCornerComponent', () => {
  let component: GithubCornerComponent;
  let fixture: ComponentFixture<GithubCornerComponent>;

  beforeEach(waitForAsync(() => {
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
