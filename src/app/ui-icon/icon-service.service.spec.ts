import { TestBed, inject } from '@angular/core/testing';

import { IconManageService } from './icon-manage.service';

describe('IconManageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconManageService]
    });
  });

  it('should be created', inject([IconManageService], (service: IconManageService) => {
    expect(service).toBeTruthy();
  }));
});
