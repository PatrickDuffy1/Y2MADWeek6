import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  elementHidden:boolean = true;
  count:number = 0;

  onClick()
  {
    this.count++;
  }

  onDoubleClick()
  {
    if(this.elementHidden === true)
    {
      this.elementHidden = false;
    }
    else
    {
      this.elementHidden = true;
    }
  }
}
