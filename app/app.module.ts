import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { TabsModule } from 'ngx-bootstrap/tabs';
import {HttpClientModule} from '@angular/common/http';
import { EquityDeliveryComponent } from './equity/equity-delivery/equity-delivery.component';
import { DataService } from './data.service';
import { FilterPipe } from './filter.pipe';
// import { EquityIntradayComponent } from './equity/equity-intraday/equity-intraday.component';
// import { EquityFuturesComponent } from './equity/equity-futures/equity-futures.component';
import { EquityOptionsComponent } from './equity/equity-options/equity-options.component';
// import { CurrencyFuturesComponent } from './equity/currency-futures/currency-futures.component';
import { CurrencyOptionsComponent } from './equity/currency-options/currency-options.component';
// import { CommodityComponent } from './equity/commodity/commodity.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { CompanyComponent } from './company/company.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ZerodhaComponent } from './zerodha/zerodha.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    EquityDeliveryComponent,
    FilterPipe,
    // EquityIntradayComponent,
    // EquityFuturesComponent,
    EquityOptionsComponent,
    // CurrencyFuturesComponent,
    CurrencyOptionsComponent,
    // CommodityComponent,
    SideNavigationComponent,
    CompanyComponent,
    CalculatorComponent,
    ZerodhaComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
