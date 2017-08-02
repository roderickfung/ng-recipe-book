import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public page = 'recipes';

  public onNavigate(link: string) {
    console.log('what is link:', link);
    this.page = link;
  }

}
