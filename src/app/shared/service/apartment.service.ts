import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { API } from 'src/app/core/api.config';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http: HttpService) { }
  getOne(id) {
    return this.http.sendToServer("GET", API.APARTMENT.GET_ONE(id), null, null).pipe(shareReplay());
  }
}
