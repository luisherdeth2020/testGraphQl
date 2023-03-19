// const Persons = ({persons}) => {
// 	return <div>{persons.map((people) => <li key={people.name}>{people.name}</li>)}</div>;
// };
// export default Persons;

const Persons = ({persons}) => {
	return (
		<>
			<div>
				{persons.map((people) => (
					<img alt='avatar' className='Card--avatar' src={people.avatar_url} />
				))}
			</div>
			<a href={`https://github.com/${persons.login}`} className='Card--link'>
				See profile
			</a>
		</>
	);
};
export default Persons;
