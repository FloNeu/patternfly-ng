import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

import { Action } from '../../models/action';
import { ActionConfig } from '../../models/action-config';
import { EmptyStateConfig } from '../../empty-state/empty-state-config';
import { ListViewConfig } from '../list-view-config';
import { ListViewEvent } from '../list-view-event';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'list-view-basic-example',
  styleUrls: ['./list-view-basic-example.component.less'],
  templateUrl: './list-view-basic-example.component.html'
})
export class ListViewBasicExampleComponent implements OnInit {
  actionsText: string = '';
  allItems: any[];
  // dragItem: any;
  emptyStateConfig: EmptyStateConfig;
  items: any[];
  itemsAvailable: boolean = true;
  listViewConfig: ListViewConfig;
  selectType: string = 'checkbox';
  showDisabledRows: boolean = false;

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

    this.emptyStateConfig = {
      actions: {
        primaryActions: [{
          id: 'action1',
          title: 'Main Action',
          tooltip: 'Start the server'
        }],
        moreActions: [{
          id: 'action2',
          title: 'Secondary Action 1',
          tooltip: 'Do the first thing'
        }, {
          id: 'action3',
          title: 'Secondary Action 2',
          tooltip: 'Do something else'
        }, {
          id: 'action4',
          title: 'Secondary Action 3',
          tooltip: 'Do something special'
        }]
      } as ActionConfig,
      icon: 'pficon-warning-triangle-o',
      title: 'No Items Available',
      info: 'This is the Empty State component. The goal of a empty state pattern is to provide a good first ' +
        'impression that helps users to achieve their goals. It should be used when a view is empty because no ' +
        'objects exists and you want to guide the user to perform specific actions.',
      helpLink: {
        hypertext: 'List View example',
        text: 'For more information please see the',
        url: '#/listview'
      }
    } as EmptyStateConfig;

    this.listViewConfig = {
      dblClick: false,
      emptyStateConfig: this.emptyStateConfig,
      multiSelect: false,
      selectItems: false,
      selectionMatchProp: 'name',
      showCheckbox: true,
      useExpandingRows: false
    } as ListViewConfig;
  }

  ngDoCheck(): void {
  }

  /**
   * Get the ActionConfig properties for each row
   *
   * @param item The current row item
   * @param actionButtonTemplate {TemplateRef} Custom button template
   * @param startButtonTemplate {TemplateRef} Custom button template
   * @returns {ActionConfig}
   */
  getActionConfig(item: any, actionButtonTemplate: TemplateRef<any>,
      startButtonTemplate: TemplateRef<any>): ActionConfig {
    let actionConfig = {
      primaryActions: [{
        id: 'start',
        styleClass: 'btn-primary',
        title: 'Start',
        tooltip: 'Start the server',
        template: startButtonTemplate
      }, {
        id: 'action1',
        title: 'Action 1',
        tooltip: 'Perform an action'
      }, {
        id: 'action2',
        title: 'Action 2',
        tooltip: 'Do something else'
      }, {
        id: 'action3',
        title: 'Action 3',
        tooltip: 'Do something special',
        template: actionButtonTemplate
      }],
      moreActions: [{
        id: 'moreActions1',
        title: 'Action',
        tooltip: 'Perform an action'
      }, {
        id: 'moreActions2',
        title: 'Another Action',
        tooltip: 'Do something else'
      }, {
        disabled: true,
        id: 'moreActions3',
        title: 'Disabled Action',
        tooltip: 'Unavailable action',
      }, {
        id: 'moreActions4',
        title: 'Something Else',
        tooltip: 'Do something special'
      }, {
        id: 'moreActions5',
        title: '',
        separator: true
      }, {
        id: 'moreActions6',
        title: 'Grouped Action 1',
        tooltip: 'Do something'
      }, {
        id: 'moreActions7',
        title: 'Grouped Action 2',
        tooltip: 'Do something similar'
      }],
      moreActionsDisabled: false,
      moreActionsVisible: true
    } as ActionConfig;

    // Set button disabled
    if (item.started === true) {
      actionConfig.primaryActions[0].disabled = true;
    }

    // Set custom properties for row
    if (item.name === 'John Smith') {
      actionConfig.moreActionsStyleClass = 'red'; // Set kebab option text red
      actionConfig.primaryActions[1].visible = false; // Hide first button
      actionConfig.primaryActions[2].disabled = true; // Set last button disabled
      actionConfig.primaryActions[3].styleClass = 'red'; // Set last button text red
      actionConfig.moreActions[0].visible = false; // Hide first kebab option
    }

    // Hide kebab
    if (item.name === 'Frank Livingston') {
      actionConfig.moreActionsVisible = false;
    }
    return actionConfig;
  }

  // Actions

  handleAction($event: Action, item: any): void {
    if ($event.id === 'start') {
      item.started = true;
    }
    this.actionsText = $event.title + ' selected\r\n' + this.actionsText;
  }

  handleSelect($event: ListViewEvent): void {
    this.actionsText = $event.item.name + ' selected\r\n' + this.actionsText;
  }

  handleSelectionChange($event: ListViewEvent): void {
    this.actionsText = $event.selectedItems.length + ' items selected\r\n' + this.actionsText;
  }

  handleClick($event: ListViewEvent): void {
    this.actionsText = $event.item.name + ' clicked\r\n' + this.actionsText;
  }

  handleDblClick($event: ListViewEvent): void {
    this.actionsText = $event.item.name + ' double clicked\r\n' + this.actionsText;
  }

  handleCheckboxChange($event: ListViewEvent): void {
    this.actionsText = $event.item.name + ' checked: ' + $event.item.selected + '\r\n' + this.actionsText;
  }

/* Not implemented
  // Drag and drop

  handleDragEnd($event: ListViewEvent): void {
    this.actionsText = 'drag end\r\n' + this.actionsText;
  }

  handleDragMoved($event: ListViewEvent): void {
    let index = -1;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === this.dragItem) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      this.items.splice(index, 1);
    }
    this.actionsText = 'drag moved\r\n' + this.actionsText;
  }

  handleDragStart($event: ListViewEvent): void {
    this.dragItem = $event.item;
    this.actionsText = $event.item.name + ': drag start\r\n' + this.actionsText;
  }
*/

  // Row selection

  updateDisabledRows(): void {
    this.items[1].disabled = this.showDisabledRows;
  }

  updateItemsAvailable(): void {
    this.items = (this.itemsAvailable) ? this.allItems : [];
  }

  updateSelectionType(): void {
    if (this.selectType === 'checkbox') {
      this.listViewConfig.selectItems = false;
      this.listViewConfig.showCheckbox = true;
    } else if (this.selectType === 'row') {
      this.listViewConfig.selectItems = true;
      this.listViewConfig.showCheckbox = false;
    } else {
      this.listViewConfig.selectItems = false;
      this.listViewConfig.showCheckbox = false;
    }
  }
}
