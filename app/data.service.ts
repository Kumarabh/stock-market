import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allStatesUrl = '../../assets/allStates.json';
  allBrokersUrl = '../../assets/allBrokers.json';
  brokerShortInfoUrl = '../../assets/brokerShortInfo.json';
  brokerNavigationUrl = '../../assets/brokerNavigation.json';
  companyOffersUrl = '../../assets/companyOffers.json';

  allStates
  allBrokers
  calculatedBrokerageObject = {
    broker: {brokerId: "48", brokerName: "Zerodha", rate: 0.8, active: ""},
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
  constructor(private http:HttpClient) { }

  getCompanyOffersDetails(){
    return this.http.get(this.companyOffersUrl);

  }
  getAllStates(){
    return this.http.get(this.allStatesUrl);
  }
  getAllBrokerNavigationData(){
      return this.http.get(this.brokerNavigationUrl);
  }
  getAllBrokers(){
    return this.http.get(this.allBrokersUrl);
  }
  getBrokerShortInfoByBrokerId(brokerId){
    return this.http.get(this.brokerShortInfoUrl);
  }
  get_a_broker_full_information_by_id(brokerId): any{
     let allBrokersShortInfo;
   return this.http.get(this.brokerNavigationUrl);
  }
  getBrokerShortInfoByBrokerId1(brokerId):any{
    let allBrokersShortInfo;
   return this.http.get(this.brokerShortInfoUrl).subscribe(data=>{
      allBrokersShortInfo = data;
      allBrokersShortInfo.allBrokers.forEach(element => {
        if(element.brokerId === brokerId){
          // console.log('element',element);
          return element;
        }
        
      });
      // console.log('info',allBrokersShortInfo);
      
    })

  }


  calculateBrokerage(EquityDeliveryForm){
    // console.log('###',EquityDeliveryForm)
  this.calculatedBrokerageObject.totalTurnover = (EquityDeliveryForm.buyPrice*EquityDeliveryForm.numberOfShares)+(EquityDeliveryForm.sellPrice*EquityDeliveryForm.numberOfShares)
  this.calculatedBrokerageObject.brokerage = this.calculatedBrokerageObject.totalTurnover*EquityDeliveryForm.broker.rate;
  // if(this.calculatedBrokerageObject.brokerage > 40){
  //   this.calculatedBrokerageObject.brokerage = 40;
  // }
  this.calculatedBrokerageObject.broker = EquityDeliveryForm.broker;
  this.calculatedBrokerageObject.stt = 0;
  this.calculatedBrokerageObject.sebiTurnover;
  this.calculatedBrokerageObject.fees;
  this.calculatedBrokerageObject.stampDuty;
  this.calculatedBrokerageObject.transactionCharges = 0;
  this.calculatedBrokerageObject.gst = 0;
  this.calculatedBrokerageObject.totalBrokerageAndTax = 0;
  this.calculatedBrokerageObject.totalProfitOrLoss = 0;
    // console.log('from service', this.calculatedBrokerageObject);
    return this.calculatedBrokerageObject;
  }

  calculateBrokerageForOptions(EquityDeliveryForm){
    this.calculatedBrokerageObject.totalTurnover = (EquityDeliveryForm.buyPrice*EquityDeliveryForm.numberOfLots)+(EquityDeliveryForm.sellPrice*EquityDeliveryForm.numberOfLots)
    this.calculatedBrokerageObject.brokerage = this.calculatedBrokerageObject.totalTurnover*EquityDeliveryForm.broker.rate;
    // if(this.calculatedBrokerageObject.brokerage > 40){
    //   this.calculatedBrokerageObject.brokerage = 40;
    // }
    this.calculatedBrokerageObject.broker = EquityDeliveryForm.broker;
    this.calculatedBrokerageObject.stt = 0;
    this.calculatedBrokerageObject.sebiTurnover;
    this.calculatedBrokerageObject.fees;
    this.calculatedBrokerageObject.stampDuty;
    this.calculatedBrokerageObject.transactionCharges = 0;
    this.calculatedBrokerageObject.gst = 0;
    this.calculatedBrokerageObject.totalBrokerageAndTax = 0;
    this.calculatedBrokerageObject.totalProfitOrLoss = 0;
  
      return this.calculatedBrokerageObject;

  }


}
