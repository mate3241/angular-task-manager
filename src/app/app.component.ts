import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
  num1: number;
  num2: number;
  sumOfNums: number;
  isSumReady = false;
  name = 'mate';
  id = 1;
  isImportant = false;
  gombnyomas() {
    console.log('Hello');
  }
  sum(num1: number, num2: number){
    this.isSumReady = true;
    return num1 + num2;
  }

}
