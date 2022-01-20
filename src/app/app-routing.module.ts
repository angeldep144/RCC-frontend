import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./pages/cart/cart.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { LoginComponent } from "./pages/login/login.component";
import { MainComponent } from "./pages/main/main.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { ReceiptComponent } from "./pages/receipt/receipt.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  
  {
    path: "product/:productId",
    component: ProductPageComponent
  },
  
  {
    path: "cart",
    component: CartComponent
  },
  
  {
    path: "checkout",
    component: CheckoutComponent
  },
  
  {
    path: "receipt",
    component: ReceiptComponent
  },
  
  {
    path: "**",
    component: MainComponent
  }
];

@NgModule ({
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }