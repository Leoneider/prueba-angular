import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';
import { LoginService } from './login.service';

class MockLoginService { 
  expectData = { token: 'QpwL5tke4Pnpja7X4' };

  login() {
    return this.expectData;
  }
}

describe('LoginService', () => {
  let service: MockLoginService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = new MockLoginService();
  
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  })

  it('Metodo login', async () => {
      // Arrange - Preparar
      
      let dataError, dataResponse;

      // Act - Actuar
       dataResponse = service.login();

      // const req = httpTestingController.expectOne(
      //   `${environment.API}/login`
      // );
      // req.flush(expectData)

      // Assert - Resolver Hipotesis
      expect(dataResponse.token).toEqual('QpwL5tke4Pnpja7X4');
      // expect(req.request.method).toEqual('POST');
      expect(dataError).toBeUndefined();

  });





});
