import { all } from 'redux-saga/effects';

// import { menuSagas } from './menuSagas';

export default function* root() {
    yield all([
        // ...menuSagas,
    ]);
}
