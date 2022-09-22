import { TestBed } from '@angular/core/testing';

import { EditformService } from './editform.service';

describe('EditformService', () => {
  let service: EditformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
