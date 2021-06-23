import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { IonicModule } from '@ionic/angular';
import { NumberPipe } from './pipe/number.pipe';
import { VndPipe } from './pipe/vnd.pipe';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { MomoComponent } from './components/momo/momo.component';
import { BankingComponent } from './components/banking/banking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlockComponent } from './components/block/block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations:
    [
      AddExpenseComponent,
      NumberPipe,
      VndPipe,
      PaymentMethodComponent,
      PaypalComponent,
      MomoComponent,
      BankingComponent,
      ProfileComponent,
      BlockComponent,
      InputComponent
    ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NumberPipe,
    VndPipe,
    InputComponent
  ],
  entryComponents: [
    ProfileComponent,
    BankingComponent,
    MomoComponent,
    AddExpenseComponent,
    PaymentMethodComponent,
    BlockComponent
  ]
})
export class SharedModule { }
