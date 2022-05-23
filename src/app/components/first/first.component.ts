import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/one.service';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  selectedFiles: FileList;
  constructor(private uploadService: UploadFileService) {}
  ngOnInit() {}
  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
  }
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
}

//