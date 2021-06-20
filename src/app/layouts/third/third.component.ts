import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../_services'
 
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  constructor(public common : CommonService) { }

  ngOnInit(): void {
  }

}
