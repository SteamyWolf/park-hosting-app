import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { SavedTabPage } from './saved-tab.page';

describe('Tab2Page', () => {
  let component: SavedTabPage;
  let fixture: ComponentFixture<SavedTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
