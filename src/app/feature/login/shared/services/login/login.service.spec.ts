import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  })

  it('Metodo login', () => {
      // Arrange - Preparar
      const expectData = { token: 'QpwL5tke4Pnpja7X4' };
      let dataError, dataResponse;

      // Act - Actuar
      service.login({email: 'eve.holt@reqres.in', password: 'cityslicka'}).then( res => {
        dataResponse = res;
      }).catch( error => dataError = error) ;

      const req = httpTestingController.expectOne(
        `${environment.API}/login`
      );
      req.flush(expectData)

      // Assert - Resolver Hipotesis
      expect(dataResponse.token).toEqual('QpwL5tke4Pnpja7X4');
      expect(req.request.method).toEqual('POST');
      expect(dataError).toBeUndefined();

  });





});
