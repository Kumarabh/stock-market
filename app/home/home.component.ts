import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showLots: boolean = false;
  calculatedBrokerageObject = {
    broker: {brokerId: "", brokerName: "", rate: 0, active: ""},
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
  companyOffers: any = []
  companyOffersFilter: any = []
  allStates
  allBrokers
  submitted = false;
  searchText;
  searchTextOffers
  selectedBrokerProp
  EquityDeliveryForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private router: Router, private http:HttpClient,private dataService: DataService) { }

  ngOnInit(): void {
    this.EquityDeliveryForm = this.formBuilder.group({
      buyPrice: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/)]),
      sellPrice: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/)]),
      numberOfShares: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/)]),
      state: new FormControl(''),
      broker: new FormControl(this.selectedBrokerProp, Validators.required),
      searchText: new FormControl(),
      numberOfLots: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/)]),
      lotSize: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/)]),
     
  
  });
  
  this.calculatedBrokerageObject = {
    broker: {brokerId: "", brokerName: "", rate: 0, active: ""},
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

  this.getAllStates();
  this.getAllBrokers();
  if(this.companyOffers[0] == undefined){
    this.getCompanyOffers();
  }
  }
  getCompanyOffers(){
    this.dataService.getCompanyOffersDetails().subscribe(datas=>{
      this.companyOffers = Object.entries(datas);
      this.companyOffersFilter = this.companyOffers;
      // this.companyOffers.push(datas);
      // console.log('offers',this.companyOffers);
    })
  }
  companyOfferFilter(value){
    this.companyOffersFilter = [];
    this.companyOffers.forEach(element => {
      // console.log(element[0], element[1].offer);
      if(element[0].toString().toLowerCase().indexOf(value)>-1 || element[1].offer.toString().toLowerCase().indexOf(value)>-1 || 
      element[1].demat_account_offer.toString().toLowerCase().indexOf(value)>-1 || element[1].sub_broker_offer.toString().toLowerCase().indexOf(value)>-1){
        this.companyOffersFilter.push(element)
      }
      return this.companyOffersFilter;
    });
    
    return this.companyOffersFilter;
  }
  calculatedBrokerageEventHander($event: any){
    this.calculatedBrokerageObject = $event;
    // console.log($event,'event handler got object', this.calculatedBrokerageObject);
    // this.getBrokerShortInfo(this.calculatedBrokerageObject.broker.brokerId);
  }
  getAllStates(){
    this.dataService.getAllStates().subscribe(data=>{
      this.allStates = data;
      this.allStates = this.allStates[0].allStates
  })
}
  selectedBroker(event){
    this.selectedBrokerProp = event.brokerName;
    console.log('selected value event',event);
    this.EquityDeliveryForm.controls['broker'].setValue(event)
    // this.getBrokerShortInfo(event.brokerId);
  }
    getAllBrokers(){
    this.dataService.getAllBrokers().subscribe(data=>{
      this.allBrokers = data;
      this.allBrokers = this.allBrokers[0].allBrokers
  })
  
  }
  get f() { return this.EquityDeliveryForm.controls; }

  
  onSubmitEquityDeliveryForm(){
    if(this.EquityDeliveryForm.controls.buyPrice.value < 0 || this.EquityDeliveryForm.controls.sellPrice.value < 0
      || this.EquityDeliveryForm.controls.numberOfShares.value < 0 || this.EquityDeliveryForm.controls.numberOfLots.value < 0
      || this.EquityDeliveryForm.controls.lotSize.value < 0) {
      this.submitted = true;
      return;
    }
    if(this.showLots == false){
      this.submitted = true; 
      // console.log('on submit ', this.EquityDeliveryForm);
      this.calculatedBrokerageObject = this.dataService.calculateBrokerage(this.EquityDeliveryForm.value);
      // console.log('calculated brokerage', this.calculatedBrokerageObject); 
    } 
    else
    {
      this.submitted = true; 
      this.calculatedBrokerageObject = this.dataService.calculateBrokerageForOptions(this.EquityDeliveryForm.value);
      // console.log('on submit ', this.EquityDeliveryForm);
      console.log(this.calculatedBrokerageObject);

    }
   
    // this.sendObjectBackToParent();


  }

}
