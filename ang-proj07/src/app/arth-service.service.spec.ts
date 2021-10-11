import { TestBed } from '@angular/core/testing';

import { ArthServiceService } from './arth-service.service';

describe('ArthServiceService', () => {
  let service: ArthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#sum',()=> {
    it('should return 4 given 2,2',()=>{
      expect(service.sum(2,2)).toBe(4);
    })
    it('should return -4 given -2,-2',()=>{
      expect(service.sum(-2,-2)).toBe(-4);
    })
    it('should return 0 given 2,-2',()=>{
      expect(service.sum(2,-2)).toBe(0);
    })
    it('should return 2 given 2,0',()=>{
      expect(service.sum(2,0)).toBe(2);
    })
  });
});
