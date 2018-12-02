import { Component, OnDestroy  } from '@angular/core';
import {DataService} from '../data.service';
import * as Rx from "rxjs";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnDestroy  {
    sub: Rx.Subscription;
  info:{};
  
  constructor(private dataService: DataService) { 
      this.sub = this.dataService.data$.subscribe(data=>this.info=data);
      
  }

  
  
  ngOnDestroy () {
     this.sub.unsubscribe();
  }

}
