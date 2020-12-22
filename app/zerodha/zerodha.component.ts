import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zerodha',
  templateUrl: './zerodha.component.html',
  styleUrls: ['./zerodha.component.css']
})
export class ZerodhaComponent implements OnInit {
  //abhishek
  stockHomeImage = {
    url:""
  }
  // start of code 
  initialUserTypes = [
    "Team Member",
    "Team Manager",
    "Journey Owner"
  ]
  
  dataSetOfUserTypes = [];

  //abhishek//
  constructor() { }

  ngOnInit(): void {
    //abhishek
    this.dataSetOfUserTypes = this.initialUserTypes;
    //abhishek//
  }
//abhishek
  filterOptions(value){
    // console.log('filter the value :-',value)
    if(value.toString().length<3){
      return;
    }
    
    if(value == null || value == undefined){
      return this.initialUserTypes;
    }
    else{
      this.dataSetOfUserTypes = [];
      this.initialUserTypes.forEach(element=>{
        if(element.toLowerCase().indexOf(value) > -1){
          this.dataSetOfUserTypes.push(element);          
        }
        
      })
    }
  }
  enableDropdownLabel(){
    if(document.getElementById('dropDown-icon').className == "fa fa-caret-down"){
      document.getElementById('dropDown-icon').className = "fa fa-times";
      document.getElementById('dropdown-content').style.display= "block";
      // document.getElementById('dropdown-content').style.transition= "0.5s";
      document.getElementById('dropdown-input').style.display = "block";
      document.getElementById('dropdown-label').style.display = "none";

   }
    // dropdown-label
  }

  // x(){
  //   window.scrollY('300')
  // }
  selectUserType(userType){
    console.log('user type selected',userType);
  }
  manageDropdown(){
    // alert('active')

    if(document.getElementById('dropDown-icon').className == "fa fa-caret-down"){
       document.getElementById('dropDown-icon').className = "fa fa-times";
       document.getElementById('dropdown-content').style.display= "block";
       document.getElementById('dropdown-content').style.transition= "0.5s";
       document.getElementById('dropdown-input').style.display = "block";
       document.getElementById('dropdown-label').style.display = "none";

    }
    else{
    document.getElementById('dropDown-icon').className = "fa fa-caret-down";
    document.getElementById('dropdown-content').style.display= "none";
    document.getElementById('dropdown-input').style.display = "none";
    document.getElementById('dropdown-label').style.display = "block";
    }
  }
  //abhishek//
}
