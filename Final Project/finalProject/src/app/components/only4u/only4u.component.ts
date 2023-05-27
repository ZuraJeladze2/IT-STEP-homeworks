import { Component } from '@angular/core';
import { HTTPModuleService } from "../../services/httpmodule.service";

@Component({
  selector: 'app-only4u',
  templateUrl: './only4u.component.html',
  styleUrls: ['./only4u.component.scss']
})


export class Only4uComponent {
  constructor(private HTTPService: HTTPModuleService){}

  productsArray:any = [];

  ngOnInit() {
    this.HTTPService.getAllProducts().subscribe((response) => {
      this.productsArray = response;
      console.log(this.productsArray);
    });
  }
}
