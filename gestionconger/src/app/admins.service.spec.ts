import { TestBed } from '@angular/core/testing';
import { Congee } from './congee';
import * as adminsService from './admins.service';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';

describe('AdminsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: adminsService.AdminsService = TestBed.get(adminsService.AdminsService);
    expect(service).toBeTruthy();
  });

});



