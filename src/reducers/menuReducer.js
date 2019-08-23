export const DISABLE_MENU = 'DISABLE_MENU';
export const ENABLE_MENU = 'ENABLE_MENU';

export const initialState = false;

// Action Creators
export const disableMenu = () => ({
    type: DISABLE_MENU
});

export const enableMenu = () => ({
    type: ENABLE_MENU
});

// Reducers
export const reduceDisableMenu = () => false;
export const reduceEnableMenu = () => true;

export default function (state = initialState, action) {
    switch (action.type) {
        case DISABLE_MENU:
            return reduceDisableMenu();
        case ENABLE_MENU:
            return reduceEnableMenu();
        default:
            return state;
    }
}
