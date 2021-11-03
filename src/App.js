import Parse from 'parse';
import './App.css';

import { initializeParse } from '@parse/react';
// import { useState } from 'react';

initializeParse('http://culvert.gamequiz.live/parse', 'playroom', 'playroom-JSKEY');
Parse.CoreManager.setStorageController(Parse.IndexedDB);

function App() {
	// const [currentUser, setCurrentUser] = useState(null);
	const onClick = async () => {
		await Parse.Cloud.run('hello').then(function (response) {
			console.log(response);
		});
		// const user = await Parse.User.logIn('bettepearson@quiztest.tst', '14143');
		// if (user.id) {
		// 	const query = new Parse.Query(Parse.User);
		// 	query.equalTo('username', 'bettepearson@quiztest.tst');
		// 	const loggedUser = await query.find();
		// 	const jsondata = await JSON.stringify(loggedUser);
		// 	const parseDate = await JSON.parse(jsondata);
		// 	setCurrentUser(parseDate[0]);
		// }
	};

	return (
		<div className="App">
			<button onClick={onClick}>Log user in</button>
		</div>
	);
}

export default App;
