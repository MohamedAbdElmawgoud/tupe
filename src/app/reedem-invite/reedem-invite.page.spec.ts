import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReedemInvitePage } from './reedem-invite.page';

describe('ReedemInvitePage', () => {
  let component: ReedemInvitePage;
  let fixture: ComponentFixture<ReedemInvitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReedemInvitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReedemInvitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
