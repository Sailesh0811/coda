import { Component } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http, RequestOptions} from '@angular/http';
import { OnInit, ViewChild, ElementRef} from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headers:any;
  options:any;
  isBlue=true;
  isRed=false;
  outputs:any;
  data:any;
  constructor(private http:Http,private eleme: ElementRef) {

  }

  ngOnInit() {
    this.getEvents('all');
  }
  getEvents(str) {
    console.log('hi');
    this.http.get('http://localhost/coda/getEvents.php').subscribe((response) => {
        console.log(response);
        this.data = response['_body'];
      })
    // this.appendCards();

  }
  // appendCards() {
  //   for( let i =0;i<this.data.length;){
  //     for(let j=0;j<4;j++)
  //     console.log(this.data[i][j]);
  //   }
  // }

  changeStyle(event) {
    console.log(event);
    if(event.type == 'mouseover') { this.isRed=true;}

  }
  changeOut(event){
    if (event.type=='mouseout') { console.log('mouseout'); this.isRed=false;this.isBlue=true;}
  }
}
