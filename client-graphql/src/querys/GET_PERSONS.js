// import {gql} from '@apollo/client';
// const GET_PERSONS = gql`
// 	query {
// 		allPersons {
// 			name
// 		}
// 	}
// `;
// export default GET_PERSONS;

import {gql} from '@apollo/client';
const GET_PERSONS = gql`
	query {
		users {
			id
			login
			avatar_url
		}
	}
`;
export default GET_PERSONS;

