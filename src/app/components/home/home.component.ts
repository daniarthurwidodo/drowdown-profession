import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public dropdown: any;
  public dropdown2: any;
  public lang = 'eng';
  public profileForm;

  constructor(private homeService: HomeService, private fb: FormBuilder) {
    this.dropdown =
      this.homeService.rawdata.payload[0].content.dropdownContent.profession;
    console.log(this.dropdown[0].typeOfIndustry[0]);
    this.profileForm = new FormGroup({
      langForm: new FormControl('eng'),
      professionForm: new FormControl(this.dropdown[0].code),
      profession2Form: new FormControl(this.dropdown[0].typeOfIndustry[0].code),
    });
  }

  onChange() {
    this.profileForm.getRawValue();
  }

  onCascade(event: any) {
    let value = this.dropdown.filter((i: any) => {
      (i.code == event.target.value);

      if (event.target.value == i.code) {
        return i;
      }
    });
    this.dropdown2 = value[0].typeOfIndustry;
  }
}
