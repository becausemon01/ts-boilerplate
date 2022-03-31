import { all } from 'redux-saga/effects'
import appSaga from './sagas/appSaga'

export default function* rootSaga() {
	yield all([appSaga()])
}
