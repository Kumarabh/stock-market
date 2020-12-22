import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-currency-options',
  templateUrl: './currency-options.component.html',
  styleUrls: ['./currency-options.component.css']
})
export class CurrencyOptionsComponent implements OnInit {
  showLots = false;
  submitted = false;
  allStates
  allBrokers
  brokerShortInfo = {
    brokerName:"",
    info1:"",
    info2:"",
    info3:"",
    imageUrl:"",
  }

  calculatedBrokerageObject = {
    broker: {brokerId: "", brokerName: "", rate: 0, active: true},
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
  this.getBrokerShortInfo('1');
  }

  calculatedBrokerageEventHander($event: any){
    this.calculatedBrokerageObject = $event;
    // console.log($event,'event handler got object', this.calculatedBrokerageObject);
    this.getBrokerShortInfo(this.calculatedBrokerageObject.broker.brokerId);
  }
  
  getBrokerShortInfo(brokerId){
    let brokerShort; 
    this.dataService.getBrokerShortInfoByBrokerId(this.calculatedBrokerageObject.broker.brokerId).subscribe(data=>{
      // console.log('data',data);
      brokerShort = data;
      brokerShort.allBrokers.forEach(element => {
        if(element.brokerId == brokerId){
          this.brokerShortInfo.brokerName = element.brokerName
          this.brokerShortInfo.info1 = element.info1;
          this.brokerShortInfo.info2 = element.info2;
          this.brokerShortInfo.info3 = element.info3;
          this.brokerShortInfo.imageUrl = element.imageUrl;
        }
        
      });
     
    })
    // console.log('**',this.brokerShortInfo)
  }
}
