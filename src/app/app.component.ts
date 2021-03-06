import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  length:number=0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  /*
  onChangeLength(value:string) {
    
  //readonly target: EventTarget;
    const parsedValue = parseInt(value);
    console.log(parsedValue);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(parsedValue);
    }
  }
*/
onChangeLength(value:string) {
    
  //readonly target: EventTarget;

  var p = (<HTMLInputElement>document.getElementById("l")).value;
    let parsedValue=parseInt(p);
    console.log(parsedValue);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
     // console.log(parsedValue);
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    //  console.log('aaaaaaaaaaaaaaaaaa3');
    }
    if (this.includeNumbers) {
      validChars += numbers;
    //  console.log('aaaaaaaaaaaaaaaaaa1');
    }
    if (this.includeSymbols) {
      validChars += symbols;
     // console.log('aaaaaaaaaaaaaaaaaa2');
    }

    var p = (<HTMLInputElement>document.getElementById("l")).value;
    let parsedValue=parseInt(p);
    console.log(parsedValue);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
     // console.log(parsedValue);
    }

    let generatedPassword:any=0;
    for (let i = 0; i <parsedValue-1; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
     // console.log('aaaaaaaaaaaaaaaaaa34');
    }
    this.password = generatedPassword;
    
    //console.log(this.password);
  }
}
