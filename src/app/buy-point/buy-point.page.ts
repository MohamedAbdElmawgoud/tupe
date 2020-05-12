import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import { OffersService , offers } from "../firebase/offers.service";
import { map } from "rxjs/internal/operators/map";
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-buy-point',
  templateUrl: './buy-point.page.html',
  styleUrls: ['./buy-point.page.scss'],
})
export class BuyPointPage implements OnInit {
  AllOffers: any;
  user: any;
  showPoint: any;
  public product: any = {
    name: 'My Product',
    appleProductId: '1234',
    googleProductId: '12345'
  };
  constructor( private firebaseService: FirebaseService,
    private offersService : OffersService,    
    private storage: Storage,
    public Platform: Platform, 
    private store: InAppPurchase2
  ) { }

 async ngOnInit() {
  this.getOffers()
    this.user = await this.storage.get('User');
    this.getPoint()
    
  }




  // async configureRestore() {
	// 	// Only works with an emulator or real device
	// 	if (!this.Platform.is('cordova')) { return; }
	// 	let productId;
	// 	try {
	// 		if (this.Platform.is('ios')) {
	// 			productId = this.product.appleProductId;
	// 		} else if (this.Platform.is('android')) {
	// 			productId = this.product.googleProductId;
	// 		}

	// 		// Register Product
	// 		// Set Debug High
	// 		this.store.verbosity = this.store.DEBUG;
	// 		// Register the product with the store
	// 		this.store.register({
	// 			id: productId,
	// 			alias: productId,
	// 			type: this.store.NON_CONSUMABLE
	// 		});

	// 		this.registerHandlers(productId);

	// 		// Errors On The Specific Product
	// 		this.store.when(productId).error( (error) => {
	// 			alert('An Error Occured' + JSON.stringify(error));
	// 		});
	// 		// Refresh Always
	// 		console.log('Refresh Store');
	// 		this.store.refresh();
	// 	} catch (err) {
	// 		console.log('Error On Store Issues' + JSON.stringify(err));
	// 	}

	// }

	// registerHandlers(productId) {
	// // Handlers
	// //
	// 	this.store.when(productId).owned( (product: IAPProduct) => {
	// //Place code to activate what happens when your user already owns the product here
	// 		product.finish();
	// 	});

	// 	this.store.when(productId).registered( (product: IAPProduct) => {
	// 		console.log('Registered: ' + JSON.stringify(product));
	// 	});

	// 	this.store.when(productId).updated( (product: IAPProduct) => {
	// 		console.log('Loaded' + JSON.stringify(product));
	// 	});

	// 	this.store.when(productId).cancelled( (product) => {
	// 		alert('Purchase was Cancelled');
	// 	});

	// 	// Overall Store Error
	// 	this.store.error( (err) => {
	// 		alert('Store Error ' + JSON.stringify(err));
	// 	});
	// }

	// async restorepurchase() {
	// 	if (!this.Platform.is('cordova')) { return };
	// 	this.configureRestore();

	// 	let productId;

	// 	if (this.Platform.is('ios')) {
	// 		productId = this.product.appleProductId;
	// 	} else if (this.Platform.is('android')) {
	// 		productId = this.product.googleProductId;
	// 	}

	// 	console.log('Products: ' + JSON.stringify(this.store.products));
	// 	console.log('Refreshing Store: ' + productId);
	// 	try {
	// 		let product = this.store.get(productId);
	// 		console.log('Product Info: ' + JSON.stringify(product));
	// 		this.store.refresh();
	// 		alert('Finished Restore');
	// 	} catch (err) {
	// 		console.log('Error Ordering ' + JSON.stringify(err));
	// 	}
	// }






  getPoint(){
    this.firebaseService.getDataOfUser(this.user).then(point =>{
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
  getOffers(){
    this.offersService.getoffersList((res => 
      res.orderByChild('point'))).snapshotChanges().pipe(
        map((changes: Array<any>) =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(offer =>{
        this.AllOffers =offer
  console.log(this.AllOffers)
      }); 
  }
}
