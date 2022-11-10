import styles from './button.module.css'
import { useState } from 'react';
const message = "hello"
/**
 * sayhello
 */
function sayHello(){
	alert("hello, I'm a button")
}

function Button() {
	const [count,setCount] = useState(0);
	function addCount(){
		setCount(count+1)
	}
	return (
		<>
			<button className={styles.btn} onClick={sayHello}>this is a button</button>
            <p>{message}</p>
			<div>{count}</div>
			<button className={styles.btn} onClick={addCount}>click me</button>
		</>
	);
}

export default Button;
