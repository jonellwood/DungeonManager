import type { PageServerLoad } from './$types';
import { getCampaigns } from '$lib/server/db';

export const load = (() => {
	const campaigns = getCampaigns();
	console.log(campaigns);
	return {
		campaigns
	};
}) satisfies PageServerLoad;
