import React from 'react'

import { useAppSelector, useAppDispatch } from '@/hooks'

import { countSelector, appActions } from '@/store/reducers/appSlice'

const Card: React.FC = () => {
	const dispatch = useAppDispatch()
	const count = useAppSelector(countSelector)

	const onClickBtn = () => {
		dispatch(appActions.increment())
	}

	return (
		<div>
			<button onClick={onClickBtn}>+</button>
			<div>{count}</div>
		</div>
	)
}

export default Card
