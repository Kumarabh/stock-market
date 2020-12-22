import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  allBrokers;
  constructor(private dataService: DataService){ this.getAllBrokers();}
  transform(json: any[], args: any[]): unknown {
    var searchText = args[0];
    var jsonKey = args[1];
    if(searchText == null || searchText == 'undefined') return json;
    if(jsonKey    == null || jsonKey    == 'undefined') return json;
    // console.log('***',json, args[0]);
    // return this.allBrokers;
    var returnObjects = json;
    json.forEach( function ( filterObjectEntery ) {

      if( filterObjectEntery.hasOwnProperty( jsonKey ) ) {
        // console.log('Search key is available in JSON object.');

        if ( typeof filterObjectEntery[jsonKey] != "undefined" && 
        filterObjectEntery[jsonKey].toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
          // console.log(',,', filterObjectEntery[jsonKey].toLowerCase())
            // object value contains the user provided text.
        } else {
            // object didn't match a filter value so remove it from array via filter
            returnObjects = returnObjects.filter(obj => obj !== filterObjectEntery);
        }
      } else {
        // console.log('Search key is not available in JSON object.');
      }

    })
    return returnObjects;
  }

  

  getAllBrokers(){
    this.dataService.getAllBrokers().subscribe(data=>{
      // this.leadsToday = data;
      this.allBrokers = data;
      this.allBrokers = this.allBrokers[0].allBrokers
  })
  
  }

}
