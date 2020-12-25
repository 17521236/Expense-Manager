import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateExpense, Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {

  pickerOptions: any;
  newTransaction: CreateExpense;


  constructor(private modalController: ModalController, private _transactionService: TransactionService) {
    this.pickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => { }
      }, {
        text: 'Cancel',
        handler: () => {
          return false;
        }
      }]
    }
  }

  ngOnInit() {
    this.newTransaction = {
      amount: 0,
      _categoryId: '',
      notes: '',
      time: new Date(),
      _balanceId: ''
    }
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }

  save() {
    
   }

  
}