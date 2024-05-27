import { getCharacterByCharacterId } from '$lib/server/db';

export const load = ({ params }) => {
	const characterId = parseInt(params.characterid);
	const character = getCharacterByCharacterId(characterId);
	return {
		character
	};
};
