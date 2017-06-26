"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var list_view_config_1 = require("./list-view-config");
var lodash_1 = require("lodash");
/**
 * List view component.
 */
var ListViewComponent = (function () {
    function ListViewComponent() {
        this.onActionSelect = new core_1.EventEmitter();
        this.onCheckBoxChange = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
        this.onDblClick = new core_1.EventEmitter();
        this.onDragEnd = new core_1.EventEmitter();
        this.onDragMoved = new core_1.EventEmitter();
        this.onDragStart = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onSelectionChange = new core_1.EventEmitter();
        this.itemsEmpty = true;
        this.defaultConfig = {
            selectItems: false,
            multiSelect: false,
            dblClick: false,
            dragEnabled: false,
            selectedItems: [],
            selectionMatchProp: 'uuid',
            checkDisabled: false,
            useExpandingRows: false,
            showSelectBox: true
        };
    }
    // Initialization
    ListViewComponent.prototype.ngOnInit = function () {
        this.setupConfig();
    };
    ListViewComponent.prototype.ngDoCheck = function () {
        // Do a deep compare on config
        if (!lodash_1.isEqual(this.config, this.prevConfig)) {
            this.setupConfig();
        }
        this.itemsEmpty = !(this.items !== undefined && this.items.length > 0);
    };
    ListViewComponent.prototype.setupConfig = function () {
        if (this.config !== undefined) {
            lodash_1.defaults(this.config, this.defaultConfig);
        }
        else {
            this.config = lodash_1.cloneDeep(this.defaultConfig);
        }
        if ((this.config.multiSelect === undefined || this.config.multiSelect === false)
            && this.config.selectedItems && this.config.selectedItems.length > 0) {
            this.config.selectedItems = [this.config.selectedItems[0]];
        }
        if (this.config.selectItems && this.config.showSelectBox) {
            throw new Error('ListViewComponent - Illegal use: ' +
                'Cannot use both select box and click selection at the same time.');
        }
        this.prevConfig = lodash_1.cloneDeep(this.config);
    };
    // Actions
    ListViewComponent.prototype.handleAction = function (action) {
        if (action && action.disabled !== true) {
            this.onActionSelect.emit(action);
        }
    };
    // Checkbox
    ListViewComponent.prototype.checkBoxChange = function (item) {
        this.onCheckBoxChange.emit({
            item: item
        });
    };
    ListViewComponent.prototype.isSelected = function (item) {
        var matchProp = this.config.selectionMatchProp;
        var selected = false;
        if (this.config.showSelectBox) {
            selected = item.selected;
        }
        else if (this.config.selectItems !== undefined) {
            this.config.selectedItems.forEach(function (itemObj) {
                if (itemObj[matchProp] === item[matchProp]) {
                    selected = true;
                }
            });
        }
        return selected;
    };
    // Drag and drop
    ListViewComponent.prototype.dragEnd = function () {
        this.onDragEnd.emit({
            item: this.dragItem
        });
    };
    ListViewComponent.prototype.dragMoved = function () {
        this.onDragMoved.emit({
            item: this.dragItem
        });
    };
    ListViewComponent.prototype.isDragOriginal = function (item) {
        return (item === this.dragItem);
    };
    ListViewComponent.prototype.dragStart = function (item) {
        this.dragItem = item;
        this.onDragStart.emit({
            item: this.dragItem
        });
    };
    // Row Selection
    ListViewComponent.prototype.itemClick = function ($event, item) {
        var alreadySelected;
        var selectionChanged = false;
        // Ignore disabled item clicks completely
        if (item.disabled === true) {
            return;
        }
        if (this.config.selectItems) {
            if (this.config.multiSelect && !this.config.dblClick) {
                for (var i = 0; i < this.config.selectedItems.length - 1; i++) {
                    if (this.config.selectedItems[i] === item) {
                        alreadySelected = true;
                        break;
                    }
                }
                if (alreadySelected) {
                    // already selected so deselect
                    this.config.selectedItems = lodash_1.without(this.config.selectedItems, item);
                }
                else {
                    // add the item to the selected items
                    this.config.selectedItems.push(item);
                    selectionChanged = true;
                }
            }
            else {
                if (this.config.selectedItems[0] === item) {
                    if (!this.config.dblClick) {
                        this.config.selectedItems = [];
                        selectionChanged = true;
                    }
                }
                else {
                    this.config.selectedItems = [item];
                    selectionChanged = true;
                }
            }
            if (selectionChanged === true) {
                this.onSelect.emit({
                    item: item
                });
                this.onSelectionChange.emit({
                    item: item,
                    selectedItems: this.config.selectedItems
                });
            }
        }
        this.onClick.emit({
            item: item
        });
    };
    ListViewComponent.prototype.dblClick = function ($event, item) {
        // Ignore disabled item clicks
        if (this.config.dblClick === true && item.disabled !== true) {
            this.onDblClick.emit({
                item: item
            });
        }
    };
    // Toggle
    ListViewComponent.prototype.closeExpandingRow = function (item) {
        item.expandingRowId = undefined;
        item.isRowExpanded = false;
    };
    ListViewComponent.prototype.toggleExpandingRow = function (item) {
        // Row may already be open due to compound expansion
        if (item.isRowExpanded && item.expandingRowId !== undefined) {
            item.expandingRowId = undefined;
            return;
        }
        item.expandingRowId = undefined;
        item.isRowExpanded = !item.isRowExpanded;
    };
    return ListViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], ListViewComponent.prototype, "actionTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", list_view_config_1.ListViewConfig)
], ListViewComponent.prototype, "config", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], ListViewComponent.prototype, "itemExpandedTemplate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListViewComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], ListViewComponent.prototype, "itemTemplate", void 0);
__decorate([
    core_1.Output('onActionSelect'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onActionSelect", void 0);
__decorate([
    core_1.Output('onCheckBoxChange'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onCheckBoxChange", void 0);
__decorate([
    core_1.Output('onClick'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onClick", void 0);
__decorate([
    core_1.Output('onDblClick'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onDblClick", void 0);
__decorate([
    core_1.Output('onDragEnd'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onDragEnd", void 0);
__decorate([
    core_1.Output('onDragMoved'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onDragMoved", void 0);
__decorate([
    core_1.Output('onDragStart'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onDragStart", void 0);
__decorate([
    core_1.Output('onSelect'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onSelect", void 0);
__decorate([
    core_1.Output('onSelectionChange'),
    __metadata("design:type", Object)
], ListViewComponent.prototype, "onSelectionChange", void 0);
ListViewComponent = __decorate([
    core_1.Component({
        encapsulation: core_1.ViewEncapsulation.None,
        selector: 'pfng-list-view',
        styles: [require('./list-view.component.css').toString()],
        template: require('./list-view.component.html')
    }),
    __metadata("design:paramtypes", [])
], ListViewComponent);
exports.ListViewComponent = ListViewComponent;
//# sourceMappingURL=list-view.component.js.map