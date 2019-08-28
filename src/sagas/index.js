import { all } from 'redux-saga/effects';

import { giphySagas } from './giphySagas';

export default function* root() {
    yield all([
        ...giphySagas,
    ]);
}
