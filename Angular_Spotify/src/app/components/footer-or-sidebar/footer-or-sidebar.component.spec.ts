import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOrSidebarComponent } from './footer-or-sidebar.component';

describe('FooterOrSidebarComponent', () => {
  let component: FooterOrSidebarComponent;
  let fixture: ComponentFixture<FooterOrSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterOrSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterOrSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
