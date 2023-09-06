import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autorizarRotasGuard } from './autorizar-rotas.guard';

describe('autorizarRotasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autorizarRotasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
