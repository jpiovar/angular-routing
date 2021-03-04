import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-main-data',
  templateUrl: './component-main-data.component.html',
  styleUrls: ['./component-main-data.component.scss']
})
export class ComponentMainDataComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      debugger;
    });
  }

}
