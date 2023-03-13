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
  constructor(private api: ApiService) { }
  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    console.log('file=>',this.file)
  }
  sendVideoData() {
    if (this.file) {
      this.formData.append('Video', this.file, this.file.name);
      this.formData.append('Caption', 'testing');
      this.formData.append('Author', 'admin');
      this.api.post('v1/', this.formData)
      .subscribe(data => console.log('=>', data));
    }
    
    // create a new FormData object to store the video data
    

  }
  ngOnInit(): void {
  }

}
