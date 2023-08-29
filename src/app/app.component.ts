import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {PostComponent} from './post/post.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'my-new-angular';
  parentMessage: string = "Message from parent Updated!";

  @ViewChild(PostComponent) childComponent: any;

  constructor() {
    console.log(this.childComponent);
  }

  ngAfterViewInit() {
    console.log(this.childComponent);
    this.message = this.childComponent.childMessage;
  }
}
