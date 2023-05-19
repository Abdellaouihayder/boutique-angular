import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  /*des variables pour les composant imbriquer */
question="Quel est le prix le plus grand dans notre boutique?";
message!:string;
stylemsg!:string; 
/*id routage avec parametre */id!:any;
public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService,private router:Router) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  /*fonction pour tester les composant imbriquer */
  correction(reponseEtudiant:number | undefined |null){
    if(reponseEtudiant==undefined || reponseEtudiant==null){this.message="j'attend ta reponse ...";
    this.stylemsg="color:block;";}
    else{
      if(reponseEtudiant==200)
      {this.message='correct/bravo vous avez un remise de 5%';this.stylemsg="color:green;"}
      else{this.message="faux/echec la reponse vrai est 200$";this.stylemsg="color:red;"}
    }
  }
  /*routage avec parametre */
  onSelect(id:any){
    this.router.navigate(['/produitdetail',id]);
  }
}
