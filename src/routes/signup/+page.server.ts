import { lucia } from '$lib/server/auth/auth';
import { fail, redirect } from '@sveltejs/kit';
// import { generateIdFromEntropySize } from 'lucia';
// import { hash } from '@node-rs/argon2';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';

import type { Actions } from './$types';
import db from '$lib/server/db';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		console.log('formData');
		// console.log(formData);
		const username = formData.get('username');
		// console.log('username', username);
		const password = formData.get('password');
		// console.log('password', password);

		if (
			typeof username !== 'string' ||
			username.length < 3 ||
			username.length > 31 ||
			!/^[a-z0-9_-]+$/.test(username)
		) {
			return fail(400, {
				message: 'Invalid username'
			});
		}
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}
		const userId = generateId(15);
		const passwordHash = await new Argon2id().hash(password);

		const sql = `Insert into user (username, password_hash) VALUES ($username, $passwordHash)`;
		const stmt = db.prepare(sql);
		const result = stmt.run({ username, passwordHash });
		console.log(result);

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};
