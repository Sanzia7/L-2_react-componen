import logo from './logo.svg';
import styles from './App.module.css'
import { MyComponent } from './MyComponent';

export default function App() {
   return (
		<div className={styles.app}>
			<header className={styles.header}>
				<img src={logo} className={styles.logo} alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className={styles.link}
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
				{/* <MyComponent type="normal" value="123" /> */}
				<MyComponent />
				{/* <MyComponent />
        <MyComponent /> */}
			</header>
		</div>
	)
}





//MyComponent({type: 'normal', value: '123'}) -пример того как мы могли бы вызывать эту функцию с разложенным объектом в аргументе-это props(свойства)
