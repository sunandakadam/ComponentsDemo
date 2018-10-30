import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public parentName;

  @Output() public childEvent=new EventEmitter();
  constructor() { }
  send(){
    this.childEvent.emit("This is data from child");
  }
  ngOnInit() {
  }

}
