import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transList: Transaction[];

  constructor(private _webReqService: WebRequestService) {
  }

  getAllTransaction(): Observable<any> {
    return this._webReqService.get('api/transactions');
  }
}
