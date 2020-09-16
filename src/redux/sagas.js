import {takeEvery, put, call} from 'redux-saga/effects'
import {CREATE_POST, FETCH_POST, REQUESTS_POSTS, SUCCESS_CREATE} from "./types";
import {createPost, hideLoader, showAlert, showLoader} from "./actions";

const forbidden = ['fuck', 'spam', 'php'];

export function* sagaWatcher() {
    yield takeEvery(REQUESTS_POSTS, sagaWorker)
    yield takeEvery(CREATE_POST, filterSpam)
}

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts);
        yield put({type: FETCH_POST, payload})
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert('Что то пошло не так'));
        yield put(hideLoader());
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await response.json();
}

function* filterSpam(action) {
    const found = forbidden.filter(w => action.payload.title.includes(w));
        if (found.length) {
            yield put(showAlert('Вы спамер'));
        } else {
            yield put({type: SUCCESS_CREATE, payload: action.payload});
        }
}
