import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Account',
  templateUrl: './Account.component.html',
  styleUrls: ['./Account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usernameLabelTop: number = 40;
  userageLabelTop: number = 40;
  useremailLabelTop: number = 40;
  userpasswordLabelTop: number = 40;

  moveLabelUp(inputField: string) {
    switch(inputField) {
      case 'username':
        this.usernameLabelTop = 0;
        break;
      case 'userage':
        this.userageLabelTop = 0;
        break;
      case 'useremail':
        this.useremailLabelTop = 0;
        break;
      case 'userpassword':
        this.userpasswordLabelTop = 0;
        break;
    }
  }

  moveLabelDown(inputField: string) {
    const inputValue = this.getInputValue(inputField);
    if (!inputValue) {
      switch(inputField) {
        case 'username':
          this.usernameLabelTop = 40;
          break;
        case 'userage':
          this.userageLabelTop = 40;
          break;
        case 'useremail':
          this.useremailLabelTop = 40;
          break;
        case 'userpassword':
          this.userpasswordLabelTop = 40;
          break;
      }
    }
  }

  private getInputValue(inputField: string): string {
    const inputElement = document.getElementById(inputField) as HTMLInputElement;
    return inputElement.value.trim();
  }
}
