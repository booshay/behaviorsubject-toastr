import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { MessageService } from '../message.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataService: DataService, private messageService : MessageService) { }
  page:number;
  info:{};
  search(page){
    this.dataService.getData(page);
    
  }




  ngOnInit() {
  }

}
