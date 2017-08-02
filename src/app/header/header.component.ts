import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public pageName = new EventEmitter<string>();

  constructor() {}

  public onSelect(link: string) {
    console.log('what is page:', link);
    this.pageName.emit(link);
  }
}
