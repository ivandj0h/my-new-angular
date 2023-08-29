import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {

  @Input() fromParent: string | undefined;

  title: string = 'Post Title';

  // Share the data from parent to child
  postParentMessage: string = "Message from Post Component as a Parent";

  // Share the data from child to parent
  childMessage: string = "Message from Post Component as a Child";

  constructor() {
  }

  ngOnInit(): void {
  }

}
