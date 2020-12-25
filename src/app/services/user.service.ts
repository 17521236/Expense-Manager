import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webReqService: WebRequestService) { }

  register(user): Observable<any> {
    return this.webReqService.post('api/users', user);
  }

  login(user) {

  }
}
