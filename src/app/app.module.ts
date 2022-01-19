import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './pages/login-component/login-component.component';
import { LoginComponent } from './pages/login/login/login.component';
import { MainComponent } from './pages/main/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { ApiComponent } from './services/api/api.component';
import { SalesComponent } from './components/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    LoginComponent,
    MainComponent,
    CartComponent,
    CheckoutComponent,
    ReceiptComponent,
    ApiComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
