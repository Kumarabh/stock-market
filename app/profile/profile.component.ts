import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUserId: String;
  leadsToday:any;
  jsonFileUrl = '../../assets/lead.json';
  allStatesUrl = '../../assets/allStates.json';
  allBrokersUrl = '../../assets/allBrokers.json';

  EquityDeliveryForm: FormGroup;
  submitted = false;
  allStates
  allBrokers
  calculatedBrokerageObject = {
    currency:"Rupees",
    totalTurnover:0,
    brokerage:0,
    stt:0,
    sebiTurnover:0,
    fees:0,
    stampDuty:0,
    transactionCharges:0,
    gst:0,
    totalBrokerageAndTax:0,
    totalProfitOrLoss:0

  }

  constructor(private formBuilder: FormBuilder,private router: Router, private http:HttpClient, private dataService: DataService) { }

  ngOnInit(): void {

    this.EquityDeliveryForm = this.formBuilder.group({
      buyPrice: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/)]),
      sellPrice: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/)]),
      numberOfShares: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/)]),
      state: new FormControl(''),
      broker: new FormControl('', Validators.required)
  
  });

  this.calculatedBrokerageObject = {
    currency:"Rupees",
    totalTurnover:0,
    brokerage:0,
    stt:0,
    sebiTurnover:0,
    fees:0,
    stampDuty:0,
    transactionCharges:0,
    gst:0,
    totalBrokerageAndTax:0,
    totalProfitOrLoss:0

  }
  this.loggedInUserId = localStorage.getItem('loggedInUserId');
  this.getAllStates();
  this.getAllBrokers();
  }

  get f() { return this.EquityDeliveryForm.controls; }

  onSubmitEquityDeliveryForm(){
    this.submitted = true; 
    console.log('equity delivery form ', this.EquityDeliveryForm);

  this.calculatedBrokerageObject.totalTurnover = (this.EquityDeliveryForm.value.buyPrice*this.EquityDeliveryForm.value.numberOfShares)+(this.EquityDeliveryForm.value.sellPrice*this.EquityDeliveryForm.value.numberOfShares)
  this.calculatedBrokerageObject.brokerage = this.calculatedBrokerageObject.totalTurnover*this.EquityDeliveryForm.value.broker.rate;
  if(this.calculatedBrokerageObject.brokerage > 40){
    this.calculatedBrokerageObject.brokerage = 40;
  }
  this.calculatedBrokerageObject.stt = 0;
  this.calculatedBrokerageObject.sebiTurnover;
  this.calculatedBrokerageObject.fees;
  this.calculatedBrokerageObject.stampDuty;
  this.calculatedBrokerageObject.transactionCharges = 0;
  this.calculatedBrokerageObject.gst = 0;
  this.calculatedBrokerageObject.totalBrokerageAndTax = 0;
  this.calculatedBrokerageObject.totalProfitOrLoss = 0;


  }
 
  getAllStates(){
  //   this.http.get(this.allStatesUrl).toPromise().then(data=>{
  //     // this.leadsToday = data;
  //     this.allStates = data;
  //     this.allStates = this.allStates[0].allStates
  // })
  this.dataService.getAllStates().subscribe(data=>{
    this.allStates = data;
    this.allStates = this.allStates[0].allStates;
  })
}

  getAllBrokers(){
  this.dataService.getAllBrokers().subscribe(data=>{
    // this.leadsToday = data;
    this.allBrokers = data;
    this.allBrokers = this.allBrokers[0].allBrokers
})

}



}
