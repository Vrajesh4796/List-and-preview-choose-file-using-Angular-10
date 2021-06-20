import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../_services';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(public common : CommonService,private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onFileChange(pFileList){

    const extension = pFileList.target.files[0].name.substr(pFileList.target.files[0].name.lastIndexOf('.')).split('.');

    const ext = extension[1].toLowerCase();

    if (ext !== 'pdf') {
      this.toastr.error('not an accepted file extension');
      return false;
    }
    else {
      const file = pFileList.target.files[0];
      if (file) {
        const reader = new FileReader();
        var fiename = pFileList.target.files[0].name;
        reader.onload = this.handleOfficialDocReaderLoaded.bind(this, '', ext, fiename);
        reader.readAsBinaryString(file);
      }
    }

    // if (pFileList.target.files && pFileList.target.files[0]) {
    //   var reader = new FileReader();

    //   reader.readAsDataURL(pFileList.target.files[0]); // read file as data url

    //   reader.onload = (pFileList) => { // called once readAsDataURL is completed
    //     this.common.url = pFileList.target.result;
    //   }
    // }
    
    this.common.files = Object.keys(pFileList.target.files).map(key => pFileList.target.files[key]);
  }

  handleOfficialDocReaderLoaded(txt, ext, fiename, e){

    var dataType = '';
    var filePath = '';
    var file = btoa(e.target.result)
    if (ext == 'pdf') {
      dataType = 'data:application/pdf;base64,';

      const details = {
        url : file,
        fileName : fiename
      }
    
      this.common.url.push(details);
    }

    
  }

}
