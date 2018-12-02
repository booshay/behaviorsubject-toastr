import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { MessageService } from './message.service'



@Injectable({
  providedIn: 'root'
})
export class DataService {
   private _data = new BehaviorSubject (null);

  constructor(private http: HttpClient, private messageService : MessageService) { }
  
  getData(page:number){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/"+page)
    .subscribe(
      data => 
        {this._data.next(data);
         this.messageService.showSuccess("Data requested page "+page+" !!", "Notification")
        },
      error => 
        {this.messageService.showError("Page not found!!  Did u enter a number?", "Error")
        }
    );
  }
  
  
  get data$() {
  return this._data.asObservable();
}
}
