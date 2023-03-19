import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

const client = new ApolloClient({
	// uri: 'http://localhost:4000',
	uri: 'https://7sgx4.sse.codesandbox.io/',

	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
