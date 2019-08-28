import { combineReducers } from 'redux';

import menuReducer from './menuReducer';
import giphyReducer from './giphyReducer';

export default combineReducers({
    menu: menuReducer,
    giphy: giphyReducer
});
