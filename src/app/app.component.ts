import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerCRUD';

  name: 'AmitYadav'
  dob=new Date(1997,3,15);
  salary=87898.5676;
}
