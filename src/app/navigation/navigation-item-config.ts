/**
 * A config containing properties for navigation items
 */
export class NavigationItemConfig {

  /**
   * Title for the navigation item
   */
  title: string;

  /**
   * The icon class to use for icons displayed to the left of text
   */
  iconClass?: string;

  /**
   * Link to navigate to
   */
  href?: string;

  /**
   * Badges to display information about the navigation item
   */
  badges?: any[];

  /**
   * Navigation children (used for secondary and tertiary navigation)
   */
  children?: NavigationItemConfig[];

  /**
   * Indicate if the item should be active on load
   */
  active?: boolean;

  /**
   * Track the active state of the navigation item
   */
  isActive?: boolean;

  /**
   * Track the hover state of the navigation item
   */
  isHover?: boolean;

  /**
   * Indicates if the child secondary menu is opened
   */
  secondaryCollapsed?: boolean;

  /**
   * Indicates if the child tertiary menu is opened
   */
  tertiaryCollapsed?: boolean;

  /**
   * Indicates if this is a mobile item
   */
  isMobileItem?: boolean;
}
