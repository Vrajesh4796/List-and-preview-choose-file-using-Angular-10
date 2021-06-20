import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../_services'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

    constructor(public common : CommonService) { }

    ngOnInit(): void {
    }

    downloadFile(data){
      const base64Flag = 'data:application/pdf;base64,';
      const downloadLink = document.createElement("a");

      downloadLink.href = base64Flag + data.url;
      downloadLink.download = data.fileName;
      downloadLink.click();
    }

}
