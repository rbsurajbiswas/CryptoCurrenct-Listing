import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export class Coin {
  id: string;
  name: string;
  symbol: string;
  market_cap: number;
  current_price: number;

   constructor(id: any, name: any, symbol: any, market_cap: any, current_price: any){
     this.id = id;
     this.name = name;
     this.symbol = symbol;
     this.market_cap = market_cap;
     this.current_price = current_price;
   }
  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit{
  name: any;
  ELEMENT_DATA : Coin[]=[];
  displayedColumns: string[] = ['name', 'symbol', 'marketcap', 'button', 'currentprice'];
  dataSource = new MatTableDataSource<Coin>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCoin();
    this.dataSource.paginator = this.paginator;
  }

  getCoin(){
    this._httpClient.get<any>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false').subscribe(
      res => this.dataSource.data = res as Coin[]
    );
  }

  search(event: { target: HTMLInputElement; }){
    const searchValue = (event.target).value;

    this.dataSource.filter = searchValue.trim().toLowerCase();
  }
}
