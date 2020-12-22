import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../data.service';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  loadedBroker: any;
  stockHomeImage = {
    url:"../../../assets//stockVector.png"
  }


  constructor( private route: ActivatedRoute, private router:Router, private service:DataService) {
    // this.router.navigate(['/company/zerodha-review']);
    console.log('***',this.router.url)
    if(this.router.url === "/company"){
          this.router.navigate(['/company/zerodha-review']);
    }
   }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.loadProductId = params['productId'];
    // });
    // let token = null;
    // this.route.queryParamMap.subscribe((next : ParamMap) => {
    //   token = next.get("brokerId")

    //   if (token) {
    //     console.log('token url',token);
    //     this.service.get_a_broker_full_information_by_id(token).subscribe(data=>{
    //       console.log('broker info',data);
    //     });
    //   } else {
    //     console.log("no token given in url");
    //   }
    // });
      this.route.params.subscribe(params => {
      console.log(params);
      if (params["brokerId"]) {
        this.loadedBroker = this.service.get_a_broker_full_information_by_id(params["brokerId"]).subscribe(data=>{
          this.loadedBroker = data;
          console.log('loaded broker',this.loadedBroker);

          console.log(data);
        });
      }
      else{
       console.log('no params fetched');
        this.loadedBroker = 1;
      }
    });

    
  }

}
