import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  product: Product = <Product>{};
  id: number = 0;
  
  imageUrl: string = '';
  newProduct: Product = <Product>{};
  imgInput: FileList = <FileList>{};

  constructor(private apiService: ApiService, private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { 

   }

  ngOnInit(): void {
    /* if(this.dataService.user.role != "ADMIN") {
      this.router.navigate(["/"]);
    } */

    this.activatedRoute.params.subscribe(parameters => {
      this.id = parameters['id'];
      this.apiService.getProduct (parseInt (parameters["id"]), (body : any) : void => {
        console.log(body);
        this.product = body.data;
        this.newProduct = body.data;
      })
    });
  }

  fileInput(event: any){
    this.imgInput = event.target.files;
  }

  updateProduct(){
    var formData: FormData = new FormData();

    let file: File = this.imgInput[0];

		if(this.newProduct.salePrice){
		  this.newProduct.salePrice = +this.newProduct.salePrice.toFixed(2);
		  console.log(this.newProduct.salePrice);
		}
		  
		
		
		if(this.newProduct.price){
			this.newProduct.price = +this.newProduct.price.toFixed(2);
		  console.log(this.newProduct.price);
		}else{
			this.newProduct.price = 0.93;
		}
	
		formData.append("name", this.newProduct.name)
		formData.append("description", this.newProduct.description);
		formData.append("price", JSON.stringify(this.newProduct.price));
		if(this.newProduct.salePrice){
			formData.append("salePrice", JSON.stringify(this.newProduct.salePrice));
		}
		formData.append("stock", JSON.stringify(this.newProduct.stock));
		formData.append("imageUrl", this.newProduct.imageUrl);
    formData.append("file", file);


    console.log("new product");
    console.log(this.newProduct);

    console.log("product");
    console.log(this.product);

    this.apiService.updateProductItem(formData);
  }

}
