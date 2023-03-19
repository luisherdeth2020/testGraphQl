import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {useQuery} from '@apollo/client';
import GET_PERSONS from './querys/GET_PERSONS';
import './App.css';
import Persons from './components/Persons';

function App() {
	// const [person, setPerson] = useState();
	const {loading, error, data} = useQuery(GET_PERSONS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	// const API_JSON = 'http://localhost:4000/persons';
	// useEffect(() => {
	// 	fetch( API_JSON, {
	// 		method: 'POST',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify({
	// 			query: `
	// 		query {
	// 			allPersons {
	// 				name
	// 			}
	// 		}
	// 	`,
	// 		}),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			// console.log(res.data);
	// 			setPerson(res.data.allPersons);
	// 			console.log(res.data.allPersons);
	// 		});
	// }, []);

	return (
		<div className='App'>
			<div></div>
			<h1>GraphQl</h1>
			<Persons persons={data.users} />
			{/* <div>{data && data.allPersons.map((people) => <li key={people.name}>{people.name}</li>)}</div> */}
		</div>
	);
}

export default App;
