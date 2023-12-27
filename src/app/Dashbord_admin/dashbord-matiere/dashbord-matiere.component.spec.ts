import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DashbordMatiereComponent } from './dashbord-matiere.component';

describe('DashbordMatiereComponent', () => {
  let component: DashbordMatiereComponent;
  let fixture: ComponentFixture<DashbordMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordMatiereComponent]
    });
    fixture = TestBed.createComponent(DashbordMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should register matiere', () => {
     component.MatiereRegister.matiere = 'Test Matiere';
     const event = new Event('submit');
     component.RegisterMatiere(event);
     const storedMatiere = localStorage.getItem('Matiere');
     const usersMatiere = JSON.parse(storedMatiere || '[]');
     expect(usersMatiere.length).toBeGreaterThan(0);
   });
});
