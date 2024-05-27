// import type { PageServerLoad } from './$types';
import {
	getCampaignById,
	getCharactersByCampaignId,
	getEncountersByCampaignId
} from '$lib/server/db';

export const load = ({ params }) => {
	const campaignId = parseInt(params.campaignid);
	const campaign = getCampaignById(campaignId);
	const characters = getCharactersByCampaignId(campaignId);
	const encounters = getEncountersByCampaignId(campaignId);
	// console.log(characters);
	return {
		campaign,
		characters,
		encounters
	};
};
