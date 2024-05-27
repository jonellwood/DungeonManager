import { getUsersCampaigns } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	if (!event.locals.user) redirect(302, '/login');
	const username = await event.locals.user.username;
	const userId = await event.locals.user.id;
	const userNum = parseInt(userId);
	const usersCampaigns = await getUsersCampaigns(userNum);
	return {
		username,
		usersCampaigns
	};
};
