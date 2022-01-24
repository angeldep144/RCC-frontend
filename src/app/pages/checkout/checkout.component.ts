import { Component, OnInit } from '@angular/core';
import { CheckoutCart } from 'src/app/models/Checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // using this model for filling out checkout states
  checkout = new CheckoutCart();

  public useShipping : boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  toggleBilling = () => {
    this.useShipping = !this.useShipping
    console.log(this.useShipping);
  }

  completeTransaction = () => {

    //
  }


}
