import {Component, OnInit, ViewEncapsulation} from '@angular/core';
@Component({
  selector     : 'nz-demo-select',
  encapsulation: ViewEncapsulation.None,
  templateUrl  : './nz-demo-select.html',
  styleUrls    : [
    './nz-demo-select.less',
  ]
})
export class NzDemoSelectComponent implements OnInit {
  NzDemoSelectBasicCode = require('!!raw-loader!./nz-demo-select-basic.component');
  NzDemoSelectSizeCode = require('!!raw-loader!./nz-demo-select-size.component');
  NzDemoSelectSearchCode = require('!!raw-loader!./nz-demo-select-search.component');
  NzDemoSelectMultipleCode = require('!!raw-loader!./nz-demo-select-multiple.component');
  NzDemoSelectMultipleChangeCode = require('!!raw-loader!./nz-demo-select-multiple-change.component');
  NzDemoSelectTagCode = require('!!raw-loader!./nz-demo-select-tag.component');
  NzDemoSelectSearchChangeCode = require('!!raw-loader!./nz-demo-select-search-change.component');
  NzDemoSelectOptionOffSetComponentCode= require('!!raw-loader!./nz-demo-select-option-offset.component');

  constructor() {
  }

  ngOnInit() {
  }
}
