import { nanoid } from 'nanoid'
import React, { useState } from 'react';


function App() {
	const [name, setName] = useState('Linda');
  const [surn, setSurn] = useState('Sartuo');

  // function hendler(){
  //   setName('xxxxx');
  // }
	
	return <div>
		<span>{name}</span>
    <span>{surn}</span>
    <button onClick={() => setName('Amanda')}>clickName</button>
    <button onClick={() => setSurn('Janse')}>clickSurn</button>
	</div>;
}


export default App;

// //halp functions:

function id() {
	return nanoid();
}

// function getDigitsSum(num){
//   let sum = 0;
//   const arr = String(num).split('');
//   arr.forEach(element => {
//     sum += Number(element);
//   });
//   return sum;
// }