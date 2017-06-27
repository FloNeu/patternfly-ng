import { Action } from './action';

/*
 * An actions config containing:
 *
 * moreActions - Optional list of secondary kebab actions
 * moreActionsDisabled - Set to true to disable secondary actions kebab
 * moreActionsStyleClass - Optional style class for secondary actions kebab
 * moreActionsVisible - Set to false to hide secondary actions kebab
 * primaryActions - List of primary button actions
 */
export class ActionConfig {
  moreActions?: Action[];
  moreActionsDisabled: boolean;
  moreActionsStyleClass: string;
  moreActionsVisible: boolean;
  primaryActions: Action[];
}
