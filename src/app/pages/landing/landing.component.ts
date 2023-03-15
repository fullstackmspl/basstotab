import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  file: File | null = null;
  formData = new FormData();
  response: any
  constructor(private api: ApiService) { }
  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    console.log('file=>', this.file)
  }
  sendVideoData() {
    if (this.file) {
      this.formData.append('video', this.file, this.file.name);
      this.formData.append('caption', 'rrr');
      this.formData.append('author', `${1}`);
      this.api.post('v1/', this.formData)
        .subscribe(data => {
          this.response = data;
          console.log('=>', this.response)
        });
    }

    // create a new FormData object to store the video data


  }
  ngOnInit(): void {
  }

}
