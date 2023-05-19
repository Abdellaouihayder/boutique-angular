import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ContactComponent } from './contact/contact.component';
import { FormclientComponent } from './formclient/formclient.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'formclient', component: FormclientComponent},
  {path:'contact', component: ContactComponent},
  {path:'produitdetail/:id',component:ProduitDetailComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
