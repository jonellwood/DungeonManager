import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const myHeaders = new Headers();
	myHeaders.append('Accept', 'application/json');

	const requestOptions = {
		method: 'GET',
		headers: myHeaders
		//redirect: 'follow'
	};

	const monsters = fetch('https://www.dnd5eapi.co/api/monsters', requestOptions)
		.then((response) => response.json())
		// .then((result) => console.log(result))
		.catch((error) => console.error(error));
	// console.log('MONSTERS');
	// console.log(monsters);
	return monsters;
};
