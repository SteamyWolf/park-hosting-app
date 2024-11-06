import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TripsTabPage } from './trips-tab.page';

describe('TripsTabPage', () => {
  let component: TripsTabPage;
  let fixture: ComponentFixture<TripsTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripsTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TripsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
