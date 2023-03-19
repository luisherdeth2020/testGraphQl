import {ApolloServer, gql} from 'apollo-server';
import axios from 'axios';

const persons = [
	{
		name: 'Midu',
		phone: '123',
		street: 'Calle Frontend',
		city: 'Barcelona',
		id: '3d8912368612893',
	},
	{
		name: 'wiki',
		phone: '456',
		street: 'Calle Developer',
		city: 'Mallorca',
		id: '3wfer34',
	},
	{
		name: 'mariela',
		phone: '789',
		street: 'Calle Backend',
		city: 'Ibiza',
		id: '4m7190321uo',
	},
];

// Describir los datos

const typeDefinitions = gql`
	type Adress {
		street: String!
		city: String!
	}
	type Person {
		#campo requerido
		name: String!
		phone: String
		street: String!
		city: String!
		address: Adress!
		id: ID!
	}

	# peticiones a nuestro graphQL
	type Query {
		# Devuelve un entero
		personCount: Int!
		# Array tipo Persona
		allPersons: [Person]!
		findPerson(name: String!): Person
	}
`;

const resolvers = {
	Query: {
		//método
		personCount: () => persons.length,
		// allPersons: () => persons,
		allPersons: async(root,args) =>{
			const {data:personas} = await axios.get('http://localhost:3000/persons')
			// console.log(prueba)
			return personas
		},
		findPerson: async(root, {name}) => {
			const {data: personsFromRestApi} = await axios.get('http://localhost:3000/persons');
			return personsFromRestApi.find((person) => person.name === name);
		},
	},
	Person: {
		address: (root) => {
			return {
				street: root.street,
				city: root.city,
			};
		},
	},
	// Person: {
	// calculos
	// 	address: (root) => `${root.street}, ${root.city}`,
	// 	check: () => 'Dora',
	// },
};

const server = new ApolloServer({
	typeDefs: typeDefinitions,
	resolvers,
});

server.listen().then(({url}) => {
	console.log(`Server ready at ${url}`);
});
