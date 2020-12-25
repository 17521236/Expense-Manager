import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionService } from 'src/app/services/transaction.service';
import { AddExpenseComponent } from 'src/app/shared/components/add-expense/add-expense.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public modalController: ModalController, private _transactionService: TransactionService) {
    console.log('Dashboard');
  }

  transactionList;

  ngOnInit() {
    this._transactionService.getAllTransaction().subscribe((res) => {
      console.log(res);
      this.transactionList = res;
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddExpenseComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
