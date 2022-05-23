
import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadFileService {

  FOLDER = 'jsa-s3/';

  constructor() { }

  uploadfile(file:any) {

    const bucket = new S3(
      {
        accessKeyId: 'YOUR-ACCESS-KEY-ID',
        secretAccessKey: 'YOUR-SECRET-ACCESS-KEY',
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: 'jsa-angular4-bucket',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
