import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullServiceData
  searchText
  discountBrokersData
  advisorFirmData
  franchiseData
  constructor(private router: Router, private service:DataService) { }
  ngOnInit(){
    this.service.getAllBrokerNavigationData().toPromise().then(data=>{
      this.fullServiceData = Object.entries(data)[0][1];
      this.discountBrokersData = Object.entries(data)[1][1];
      this.advisorFirmData = Object.entries(data)[2][1];
      this.franchiseData = Object.entries(data)[3][1];



      // console.log('header full service',this.fullServiceData)
    })
    
  }

  findCompany(data){
    console.log('finding company',data);
    // this.router.navigateByUrl(['/company'], { queryParams: { brokerId: data.productId } });
    // this.router.navigate(["company", { brokerId: data.brokerId }]);
    this.router.navigate(['company/',data.brokerId+'-review']);

  }
  logout(){
    localStorage.removeItem('loggedInUserId');
    this.router.navigate(['home']);
  }

}
