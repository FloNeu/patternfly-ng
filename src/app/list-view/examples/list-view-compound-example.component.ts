import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { Action } from '../../models/action';
import { ActionsConfig } from '../../models/actions-config';
import { ListViewConfig } from '../list-view-config';
import { ListViewEvent } from '../list-view-event';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'list-view-compound-example',
  templateUrl: './list-view-compound-example.component.html'
})
export class ListViewCompoundExampleComponent implements OnInit {
  actionsText: string = '';
  allItems: any[];
  items: any[];
  listViewConfig: ListViewConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.allItems = [{
      name: 'Fred Flintstone',
      address: '20 Dinosaur Way',
      city: 'Bedrock',
      state: 'Washingstone',
      typeIcon: 'fa-plane',
      clusterCount: 6,
      hostCount: 8,
      imageCount: 8,
      nodeCount: 10
    }, {
      name: 'John Smith',
      address: '415 East Main Street',
      city: 'Norfolk',
      state: 'Virginia',
      typeIcon: 'fa-magic',
      hostCount: 8,
      clusterCount: 6,
      nodeCount: 10,
      imageCount: 8,
      hideExpandingRowToggle: true
    }, {
      name: 'Frank Livingston',
      address: '234 Elm Street',
      city: 'Pittsburgh',
      state: 'Pennsylvania',
      typeIcon: 'fa-gamepad',
      hostCount: 8,
      clusterCount: 6,
      nodeCount: 10,
      imageCount: 8
    }, {
      name: 'Linda McGovern',
      address: '22 Oak Street',
      city: 'Denver',
      state: 'Colorado',
      typeIcon: 'fa-linux',
      hostCount: 8,
      clusterCount: 6,
      nodeCount: 10,
      imageCount: 8
    }, {
      name: 'Jim Brown',
      address: '72 Bourbon Way',
      city: 'Nashville',
      state: 'Tennessee',
      typeIcon: 'fa-briefcase',
      hostCount: 8,
      clusterCount: 6,
      nodeCount: 10,
      imageCount: 8
    }, {
      name: 'Holly Nichols',
      address: '21 Jump Street',
      city: 'Hollywood',
      state: 'California',
      typeIcon: 'fa-coffee',
      hostCount: 8,
      clusterCount: 6,
      nodeCount: 10,
      imageCount: 8
    }, {
      name: 'Marie Edwards',
      address: '17 Cross Street',
      city: 'Boston',
      state: 'Massachusetts',
      typeIcon: 'fa-rebel',
      hostCount: 8,
      clusterCount: 6,
      nodeCount: 10,
      imageCount: 8
    }, {
      name: 'Pat Thomas',
      address: '50 Second Street',
      city: 'New York',
      state: 'New York',
      typeIcon: 'fa-linux',
      hostCount: 8,
      clusterCount: 6,
      nodeCount: 10,
      imageCount: 8
    }];
    this.items = this.allItems;

    this.listViewConfig = {
      dblClick: false,
      dragEnabled: false,
      headingRow: false,
      multiSelect: false,
      selectItems: false,
      selectionMatchProp: 'name',
      showSelectBox: false,
      useExpandingRows: false
    } as ListViewConfig;
  }

  ngDoCheck(): void {
  }

  /**
   * Get the ActionConfig properties for each row
   *
   * @returns {ActionsConfig}
   */
  getActionsConfig(): ActionsConfig {
    let config = {
      primaryActions: [{
        id: 'action1',
        name: 'Action 1',
        title: 'Perform an action'
      }],
      moreActions: [{
        id: 'moreActions1',
        name: 'Action',
        title: 'Perform an action'
      }, {
        id: 'moreActions2',
        name: 'Another Action',
        title: 'Do something else'
      }, {
        disabled: true,
        id: 'moreActions3',
        name: 'Disabled Action',
        title: 'Unavailable action',
      }, {
        id: 'moreActions4',
        name: 'Something Else',
        title: ''
      }, {
        id: 'moreActions5',
        name: '',
        separator: true
      }, {
        id: 'moreActions6',
        name: 'Grouped Action 1',
        title: 'Do something'
      }, {
        id: 'moreActions7',
        name: 'Grouped Action 2',
        title: 'Do something similar'
      }],
    } as ActionsConfig;

    return config;
  }

  // Actions

  handleAction($event: Action, item: any): void {
    if ($event.name === 'Start') {
      item.started = true;
    }
    this.actionsText = $event.name + ' selected\r\n' + this.actionsText;
  }

  handleClick($event: ListViewEvent): void {
    this.actionsText = $event.item.name + ' clicked\r\n' + this.actionsText;
  }
}
