import React, { Fragment } from 'react'
import styles from './styles.module.scss'

import { Card } from '@/components'

const App: React.FC = () => {
	return (
		<Fragment>
			<h1 className={styles['app']}>React typescript</h1>
			<Card />
		</Fragment>
	)
}

export default App
