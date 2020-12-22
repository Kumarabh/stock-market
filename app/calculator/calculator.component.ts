import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @Output() calculatedBrokerageEvent = new EventEmitter<Object>();
  @Input() showLots;
  allStates
  allBrokers
  submitted = false;
  searchText;
  selectedBrokerProp
  EquityDeliveryForm: FormGroup;
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
  constructor(private formBuilder: FormBuilder,private router: Router, private http:HttpClient,private dataService: DataService) { }
  ngOnInit(): void {
    this.EquityDeliveryForm = this.formBuilder.group({
      buyPrice: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/),Validators.min(0)]),
      sellPrice: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/), Validators.min(0)]),
      numberOfShares: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/),Validators.min(0)]),
      state: new FormControl(''),
      broker: new FormControl(this.selectedBrokerProp, Validators.required),
      searchText: new FormControl(),
      numberOfLots: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/),Validators.min(0)]),
      lotSize: new FormControl('',[ Validators.required,Validators.pattern(/^(0|[1-9]\d*)$/),Validators.min(0)]),
     
  
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
      console.log('on submit ', this.EquityDeliveryForm);
      this.calculatedBrokerageObject = this.dataService.calculateBrokerage(this.EquityDeliveryForm.value);
      console.log('calculated brokerage', this.calculatedBrokerageObject); 
    } 
    else
    {
      this.submitted = true; 
      this.calculatedBrokerageObject = this.dataService.calculateBrokerageForOptions(this.EquityDeliveryForm.value);
      console.log('on submit ', this.EquityDeliveryForm);
      console.log(this.calculatedBrokerageObject);

    }
   
    this.sendObjectBackToParent();

  }
  // updateFormForBroker(prf){
  //   this.EquityDeliveryForm.controls['broker'] = prf.brokerId
  // }
  sendObjectBackToParent() {
    this.calculatedBrokerageEvent.emit(this.calculatedBrokerageObject);
    // throw new Error("Method not implemented.");
  }

}
