import { useEffect } from 'react';
import { useState } from 'react';
import styles from './MyComponent.module.css';

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

const products = [
	{ id: 'que', name: 'Teapot' },
	{ id: 'rty', name: 'Iron' },
];

export const MyComponent = () => {
	const [currentDate, setCurrentDate] = useState(new Date())
	const  date = new Date();

	useEffect(() => {
		console.log(date)
	}, [])

		setTimeout(() => {
			//date = new Date();
			setCurrentDate(new Date());
		}, 1000);
   const currentTime = getTimeFromDate(currentDate)

	// const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });
	//setObj({ a: 20, b: 20, c: 30 });
	// if (obj.a === 10) {
	// 	setObj({ ...obj, a: 20 });
	// }

	const [value, setValue] = useState(0);
	const onClick = (event) => {
		// setValue(value + 1);
		//console.log(event);
		//накапливание суммы:
		setValue((updatedValue) => updatedValue + 1);
		setValue((updatedValue) => updatedValue + 1);
	}


	const [showText, setShowText] = useState(true);
	const btnShow = () => {
			setShowText(!showText);
	}
	const text = <div className={styles.text}>Это секретный Пароль</div>;


	const [showRedText, setShowRedText] = useState(false);
   const changeColor = () => {
			setShowRedText(!showRedText);
		};
	const colorText = (
		<div className={showRedText
			? styles.red
			: styles.yellow}>
			Изменяемый Цвет Текста
		</div>
	);

	return (
		<>
			<div>{String(date)}</div>
			<div>Точное летнее время: {currentTime}</div>

			{/* <div>{obj.a}</div> */}

			<ul>
				NEW Products:
				{products.map(({id, name}) => (
					<li key={id}>{name}</li>
				))}
			</ul>

			<div className={styles.count}>{value}</div>
			<button onClick={onClick}>ADD + 2</button>

			{showText && text}
			<button className={styles.password} onClick={btnShow}>{showText ? 'Скрыть' : 'Показать'} Пароль</button>

			<div>{colorText}</div>
			<button onClick={changeColor}>Изменить цвет текста</button>

			<div>Мне очень нравится изучать React -:)</div>
		</>
	)
};

//Первоначальный вариант кода:
// const getValue = () => 123;
//
// export const MyComponent = (props) => {
// 	//const value = 123;
// 	//const className = 'divElement';
// 	const tagName = 'div';

// 	const date = new Date();
// 	useEffect(() => {
// 		console.log(date);
// 	}, []);

// 	//1) :  return <div className='divElement'>123</div>
// 	//2) :
// 	return (
// 		<>
// 			<label>Значение</label>
// 			<div
// 				// className={className}
// 				className={tagName + 'Element'}
// 				style={{
// 					width: '100px',
// 					marginTop: '200px',
// 				}}
// 			>
// 				{/* {value} */}
// 				{getValue()}
// 			</div>
// 			<div>{String(date)}</div>;
// 		</>
// 	);
// };

//return <div>{currentDate.toISOString().substring(11, 19)}</div>

// export const MyCpmponent = () => {
// 	return null
// }
