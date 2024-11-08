import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ExploreTabPage } from './explore-tab.page';

describe('Tab1Page', () => {
  let component: ExploreTabPage;
  let fixture: ComponentFixture<ExploreTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
