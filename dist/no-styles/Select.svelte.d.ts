import { SvelteComponentTyped } from "svelte";
import _filter from '../filter';
import _getItems from '../get-items';
declare const __propDef: {
    props: {
        justValue?: any;
        filter?: typeof _filter | undefined;
        getItems?: typeof _getItems | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        container?: string | null | undefined;
        input?: string | null | undefined;
        multiple?: boolean | undefined;
        multiFullItemClearable?: boolean | undefined;
        disabled?: boolean | undefined;
        focused?: boolean | undefined;
        value?: null | undefined;
        filterText?: string | undefined;
        placeholder?: string | undefined;
        placeholderAlwaysShow?: boolean | undefined;
        items?: null | undefined;
        label?: string | undefined;
        itemFilter?: ((label: any, filterText: any, option: any) => boolean) | undefined;
        groupBy?: undefined;
        groupFilter?: ((groups: any) => any) | undefined;
        groupHeaderSelectable?: boolean | undefined;
        itemId?: string | undefined;
        loadOptions?: undefined;
        containerStyles?: string | undefined;
        hasError?: boolean | undefined;
        filterSelectedItems?: boolean | undefined;
        required?: boolean | undefined;
        closeListOnChange?: boolean | undefined;
        createGroupHeaderItem?: ((groupValue: any, item: any) => {
            [x: string]: any;
            value: any;
        }) | undefined;
        getFilteredItems?: (() => any) | undefined;
        searchable?: boolean | undefined;
        inputStyles?: string | undefined;
        clearable?: boolean | undefined;
        loading?: boolean | undefined;
        listOpen?: boolean | undefined;
        debounce?: ((fn: any, wait?: number) => void) | undefined;
        debounceWait?: number | undefined;
        hideEmptyState?: boolean | undefined;
        inputAttributes?: {} | undefined;
        listAutoWidth?: boolean | undefined;
        showChevron?: boolean | undefined;
        listOffset?: number | undefined;
        hoverItemIndex?: number | undefined;
        floatingConfig?: {} | undefined;
        class?: string | undefined;
        handleClear?: (() => void) | undefined;
        ariaValues?: ((values: any) => string) | undefined;
        ariaListOpen?: ((label: any, count: any) => string) | undefined;
        ariaFocused?: (() => string) | undefined;
    };
    events: {
        mousedown: MouseEvent;
        pointerup: PointerEvent;
        keydown: KeyboardEvent;
        input: CustomEvent<any>;
        hoverItem: CustomEvent<any>;
        filter: CustomEvent<any>;
        clear: CustomEvent<any>;
        focus: CustomEvent<any>;
        blur: CustomEvent<any>;
        change: CustomEvent<any>;
        select: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'list-prepend': {};
        list: {
            filteredItems: any;
        };
        item: {
            item: unknown;
            index: any;
        };
        empty: {};
        'list-append': {};
        prepend: {};
        selection: {
            selection: null;
        };
        'multi-clear-icon': {};
        'loading-icon': {};
        'clear-icon': {};
        'chevron-icon': {
            listOpen: boolean;
        };
        'input-hidden': {
            value: null;
        };
        required: {
            value: null;
        };
    };
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
    get getFilteredItems(): () => any;
    get handleClear(): () => void;
}
export {};
