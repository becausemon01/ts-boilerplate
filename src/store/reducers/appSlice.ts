import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store'

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		increment: (state) => {
			console.log('state', state)
			state.value += 1
		},
	},
})

export const countSelector = (state: RootState) => state.app.value

export const appActions = appSlice.actions

export default appSlice.reducer
