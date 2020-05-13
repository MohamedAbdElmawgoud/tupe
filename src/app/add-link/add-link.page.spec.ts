import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLinkPage } from './add-link.page';

describe('AddLinkPage', () => {
  let component: AddLinkPage;
  let fixture: ComponentFixture<AddLinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
