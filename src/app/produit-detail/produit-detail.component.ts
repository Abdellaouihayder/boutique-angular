import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {
id:any | null;
list:any ;
  constructor(private route:ActivatedRoute,private api : ApiService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']-1;
    //impoter le tableau de produit
    this.api.getProduct()
    .subscribe(res=>{
      this.list = res;
      this.list.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      //affichage
      console.log(this.list[this.id])
    });
  }

}
