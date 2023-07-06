"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(_a) {
    var loadOptions = _a.loadOptions, filterText = _a.filterText, items = _a.items, multiple = _a.multiple, value = _a.value, itemId = _a.itemId, groupBy = _a.groupBy, filterSelectedItems = _a.filterSelectedItems, itemFilter = _a.itemFilter, convertStringItemsToObjects = _a.convertStringItemsToObjects, filterGroupedItems = _a.filterGroupedItems, label = _a.label;
    if (items && loadOptions)
        return items;
    if (!items)
        return [];
    if (items && items.length > 0 && typeof items[0] !== 'object') {
        items = convertStringItemsToObjects(items);
    }
    var filterResults = items.filter(function (item) {
        var matchesFilter = itemFilter(item[label], filterText, item);
        if (matchesFilter && multiple && (value === null || value === void 0 ? void 0 : value.length)) {
            matchesFilter = !value.some(function (x) {
                return filterSelectedItems ? x[itemId] === item[itemId] : false;
            });
        }
        return matchesFilter;
    });
    if (groupBy) {
        filterResults = filterGroupedItems(filterResults);
    }
    return filterResults;
}
exports.default = filter;
