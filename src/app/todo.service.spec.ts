import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});
