

import * as TYPES from '../actionTypes/themeToggler';

export const setTheme = (payload:string) => ({
    type: TYPES.THEME_TOGGLER,
    payload:payload,
}); 