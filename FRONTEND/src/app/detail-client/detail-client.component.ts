import { Client } from '../model/Client';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  @Input() detailClient : any;
  constructor() { }

  ngOnInit(): void {
  }

}
