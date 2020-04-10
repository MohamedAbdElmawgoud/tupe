import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyPointPage } from './buy-point.page';

describe('BuyPointPage', () => {
  let component: BuyPointPage;
  let fixture: ComponentFixture<BuyPointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyPointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
