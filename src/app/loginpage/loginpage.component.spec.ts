import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage.component';
import { UserserviceService } from '../serviceuser/userservice.service';
import Swal from 'sweetalert2';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
  let userService: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginpageComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [UserserviceService],
    });

    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserserviceService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form and call submitFunction', () => {
    spyOn(component, 'submitFunction');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.submitFunction).toHaveBeenCalled();
  });

  it('should call userService.setUserId when user is found', () => {
    spyOn(userService, 'setUserId');
    component.formData.email = 'habib@gmail.com';
    component.formData.pass = 'habib';
    component.usersdata = component.Schooluser;
    component.submitFunction(new Event('submit'));
    expect(userService.setUserId).toHaveBeenCalled();
  });

  it('should show a success message when user is found', () => {
    spyOn(Swal, 'fire');
    component.formData.email = 'habib@gmail.com';
    component.formData.pass = 'habib';
    component.usersdata = component.Schooluser;
    component.submitFunction(new Event('submit'));
    expect(Swal.fire).toHaveBeenCalledWith({
      position: 'center',
      icon: 'success',
      title: 'Bienvenu habib@gmail.com',
      showConfirmButton: true,
    });
  });

  // Add more test cases based on your requirements
});

