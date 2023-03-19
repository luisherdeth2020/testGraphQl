import {useEffect} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const API_JSON = 'http://localhost:3000/persons';
	useEffect(() => {
		fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				query: `
			query {
				allPersons {
					name
				}
			}
		`,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res.data);
			});
	});

	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>GraphQl</h1>
		</div>
	);
}

export default App;
