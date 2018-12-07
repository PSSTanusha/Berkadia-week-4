import { Component} from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent{
  added = 0;
  products = ['Honor9 lite', 'Samsung galaxy s9', 'iphone XS max','LG k8','Pixel 3XL'];
 
  onadded(added: boolean) {
    added ? this.added++:this.added;
  }
}
