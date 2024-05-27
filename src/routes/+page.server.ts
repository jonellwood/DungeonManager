import { getUsersCampaigns } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { lucia } from '$lib/server/auth/auth';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/login');
	const username = await event.locals.user.username;
	const userId = await event.locals.user.id;
	const userNum = parseInt(userId);
	const usersCampaigns = await getUsersCampaigns(userNum);
	return {
		username,
		usersCampaigns,
		userId
	};
};

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(302, '/login');
	}
};
