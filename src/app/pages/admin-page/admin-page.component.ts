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

  constructor(private apiService: ApiService, private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) { 

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameters => {
      this.id = parameters['id'];
      this.apiService.getProduct (parseInt (parameters["id"]), (body : any) : void => {
        console.log(body);
        this.product = body.data;
      })
    });
  }

}
