import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() drinks:any[] = [];
  @Input() query:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  boldStr(str: string) {
    if (this.query.length < 3) {
      return str;
    }

    const reg = new RegExp('(' + this.query + ')', 'gi');
    return str.replace(reg, '<span class="font-weight-bold">$1</span>');
  }

}
