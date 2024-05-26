import { getEncounterByEncounterId } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (({ params }) => {
	const encounterId = parseInt(params.encounterid);
	const encounter = getEncounterByEncounterId(encounterId);
	return {
		encounter
	};
}) satisfies PageServerLoad;
