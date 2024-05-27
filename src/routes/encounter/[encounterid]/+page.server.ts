import { getEncounterByEncounterId } from '$lib/server/db';

export const load = ({ params }) => {
	const encounterId = parseInt(params.encounterid);
	const encounter = getEncounterByEncounterId(encounterId);
	return {
		encounter
	};
};
