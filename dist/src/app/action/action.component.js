var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ActionConfig } from './action-config';
import { cloneDeep, defaults, isEqual } from 'lodash';
/**
 * List actions component.
 *
 * By default, buttons and kebab have no padding so they may inherit stying from components such as list and toolbar.
 */
var ActionComponent = (function () {
    /**
     * The default constructor
     *
     * @param el The element reference for this component
     */
    function ActionComponent(el) {
        this.el = el;
        /**
         * The event emitted when an action has been selected
         */
        this.onActionSelect = new EventEmitter();
        this.defaultConfig = {
            moreActionsDisabled: false,
            moreActionsVisible: true
        };
        this.isMoreActionsDropup = false;
    }
    // Initialization
    /**
     *  Setup component configuration upon initialization
     */
    ActionComponent.prototype.ngOnInit = function () {
        this.setupConfig();
    };
    /**
     *  Check if the component config has changed
     */
    ActionComponent.prototype.ngDoCheck = function () {
        // Do a deep compare on config
        if (!isEqual(this.config, this.prevConfig)) {
            this.setupConfig();
        }
    };
    ActionComponent.prototype.setupConfig = function () {
        if (this.config !== undefined) {
            defaults(this.config, this.defaultConfig);
        }
        else {
            this.config = cloneDeep(this.defaultConfig);
        }
    };
    // Actions
    ActionComponent.prototype.handleAction = function (action) {
        if (action && action.disabled !== true) {
            this.onActionSelect.emit(action);
        }
    };
    /**
     * Set flag indicating if kebab should be shown as a dropdown or dropup
     *
     * @param $event The MouseEvent triggering this function
     */
    ActionComponent.prototype.initMoreActionsDropup = function ($event) {
        var _this = this;
        window.requestAnimationFrame(function () {
            var kebabContainer = _this.closest($event.target, '.dropdown-kebab-pf.open', 'pfng-list-actions');
            var listContainer = _this.closest(_this.el.nativeElement, '.list-pf', 'pfng-list');
            if (kebabContainer === null || listContainer === null) {
                return;
            }
            var dropdownButton = kebabContainer.querySelector('.dropdown-toggle');
            var dropdownMenu = kebabContainer.querySelector('.dropdown-menu');
            var buttonRect = dropdownButton.getBoundingClientRect();
            var menuRect = dropdownMenu.getBoundingClientRect();
            var menuTop = buttonRect.top - menuRect.height;
            var menuBottom = buttonRect.top + buttonRect.height + menuRect.height;
            var parentRect = listContainer.getBoundingClientRect();
            if ((menuBottom <= parentRect.top + parentRect.height) || (menuTop < parentRect.top)) {
                _this.isMoreActionsDropup = false;
            }
            else {
                _this.isMoreActionsDropup = true;
            }
        });
    };
    // Utils
    /**
     * Get the closest ancestor based on given selector
     *
     * @param el The HTML element to start searching for matching ancestor
     * @param selector The selector to match
     * @param stopSelector If this selector is matched, the search is stopped
     * @returns {HTMLElement} The matching HTML element or null if not found
     */
    ActionComponent.prototype.closest = function (el, selector, stopSelector) {
        var retval = null;
        while (el) {
            if (el.matches(selector)) {
                retval = el;
                break;
            }
            else if (stopSelector && el.matches(stopSelector)) {
                break;
            }
            el = el.parentElement;
        }
        return retval;
    };
    return ActionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", ActionConfig)
], ActionComponent.prototype, "config", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], ActionComponent.prototype, "template", void 0);
__decorate([
    Output('onActionSelect'),
    __metadata("design:type", Object)
], ActionComponent.prototype, "onActionSelect", void 0);
ActionComponent = __decorate([
    Component({
        encapsulation: ViewEncapsulation.None,
        selector: 'pfng-action',
        template: require('./action.component.html')
    }),
    __metadata("design:paramtypes", [ElementRef])
], ActionComponent);
export { ActionComponent };
//# sourceMappingURL=action.component.js.map