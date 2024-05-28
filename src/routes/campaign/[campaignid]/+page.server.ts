import type { PageServerLoad } from './$types';
import {
	// getCampaignById,
	// getCharactersByCampaignId,
	//getEncountersByCampaignId,
	getCampaignByIdAndOwnerId,
	getCharactersByCampaignIdAndUserId,
	getEncountersByCampaignIdAndUserId
} from '$lib/server/db';

import { error, redirect } from '@sveltejs/kit';
//@ts-expect-error I don't understand the error - but it loads so I am gonna fuss at the moment.
export const load: PageServerLoad = (event) => {
	if (!event.locals.user) redirect(302, './login');
	const campaignId = parseInt(event.params.campaignid);
	const userId = parseInt(event.locals.user.id);
	// const campaignId = parseInt(params.campaignid);
	if (!campaignId) {
		throw error(404, 'CampaignId not found');
	}
	// const campaign = getCampaignById(campaignId);
	const campaign = getCampaignByIdAndOwnerId(campaignId, userId);
	console.log(campaign);
	if (!campaign) {
		throw error(403, 'Not your shit - stay out');
	}
	// const characters = getCharactersByCampaignId(campaignId);
	const characters = getCharactersByCampaignIdAndUserId(campaignId, userId);
	console.log(characters);
	if (!characters) {
		return null;
	}
	// const encounters = getEncountersByCampaignId(campaignId);
	const encounters = getEncountersByCampaignIdAndUserId(campaignId, userId);
	console.log(encounters);
	if (!encounters) {
		return null;
	}
	// console.log(characters);
	return {
		campaign,
		characters,
		encounters
	};
};
