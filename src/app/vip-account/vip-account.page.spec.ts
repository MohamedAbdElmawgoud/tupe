import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VipAccountPage } from './vip-account.page';

describe('VipAccountPage', () => {
  let component: VipAccountPage;
  let fixture: ComponentFixture<VipAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VipAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
