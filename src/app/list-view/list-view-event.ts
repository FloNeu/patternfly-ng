import { Action } from '../models/action';

/**
 * An object containing properties for list view events
 */
export class ListViewEvent {
  /**
   * The item associated with the current list view row
   */
  item: any;

  /**
   * The currently selected items, if applicable
   */
  selectedItems?: any[];
}
