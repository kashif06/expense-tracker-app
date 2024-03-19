import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaveUpdateIncomeExpenseComponent } from './save-update-income-expense.component';

describe('SaveUpdateIncomeExpenseComponent', () => {
  let component: SaveUpdateIncomeExpenseComponent;
  let fixture: ComponentFixture<SaveUpdateIncomeExpenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveUpdateIncomeExpenseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveUpdateIncomeExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
