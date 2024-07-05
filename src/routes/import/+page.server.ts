import type { PageServerLoad } from './$types';
import data from './pru.json';

export const load: PageServerLoad = async () => {
	// console.log(data);
	return data;
};
