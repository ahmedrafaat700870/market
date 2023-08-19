import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project2';

  public isLoading: boolean = false;
  public changeLoadingState(event : Event) : void {
    this.isLoading = !this.isLoading;
  }

}
