import { getEncounterByEncounterId } from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const encounterId = parseInt(params.encounterid);
	const encounter = getEncounterByEncounterId(encounterId);
	if (!encounter) {
		throw error(404, 'Encounter Not found');
	}
	return {
		encounter
	};
};
