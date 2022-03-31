import { combineReducers } from 'redux'
import app from './reducers/appSlice'

const rootReducer = combineReducers({
	app,
})

export default rootReducer
