import type { campaign, character, encounter, user } from './types.js';
import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';
import Database from 'better-sqlite3';

const db = new Database('./data/dungeonManager.sqlite');

export type Database = typeof db;

export const adapter = new BetterSqlite3Adapter(db, {
	user: 'user',
	session: 'session'
});
db.pragma('journal_mode = WAL');

export function getCampaigns(): campaign[] {
	const sql = `SELECT * from campaigns`;
	const stmt = db.prepare(sql);
	const rows = stmt.all();
	return rows as campaign[];
}

export function getUsersCampaigns(userId: number): campaign[] {
	const sql = `SELECT * from campaigns where owner_id = $userId`;
	const stmt = db.prepare(sql);
	const rows = stmt.all({ userId });
	return rows as campaign[];
}

export function getCampaignById(campaignId: number): campaign {
	const sql = `
        select 
            c.id as campaignId, 
            c.name as campaignName, 
            c.description as campaignDesc
        from campaigns c 
        where c.id = $campaignId
    `;
	const stmt = db.prepare(sql);
	const rows = stmt.get({ campaignId });
	return rows as campaign;
}

export function getCampaignByIdAndOwnerId(campaignId: number, userId: number): campaign | null {
	const sql = `
    SELECT
      c.id AS campaignId,
      c.name AS campaignName,
      c.description AS campaignDesc
    FROM campaigns c
    WHERE c.id = $campaignId AND c.owner_id = $userId
  `;
	try {
		const stmt = db.prepare(sql);
		const row = stmt.get({ campaignId, userId });
		return row ? (row as campaign) : null;
	} catch (error) {
		console.error('Man we aint found shit! ', error);
		return null;
	}
}

export function getCharactersByCampaignId(campaignId: number): character[] | null {
	const sql = `
        select 
            t.id as characterId,
            t.name as characterName,
            t.description as characterDesc
        from characters t
        where t.campaign_id = $campaignId
    `;
	try {
		const stmt = db.prepare(sql);
		const rows = stmt.all({ campaignId });
		return rows ? (rows as character[]) : null;
	} catch (error) {
		console.error('Clever error message about characters ', error);
		return null;
	}
}
export function getCharactersByCampaignIdAndUserId(
	campaignId: number,
	userId: number
): character[] | null {
	const sql = `
        select 
            t.id as characterId,
            t.name as characterName,
            t.description as characterDesc
        from characters t
        where t.campaign_id = $campaignId AND owner_id = $userId
    `;
	try {
		const stmt = db.prepare(sql);
		const rows = stmt.all({ campaignId, userId });
		return rows ? (rows as character[]) : null;
	} catch (error) {
		console.error('Character fetch error ', error);
		return null;
	}
}

export function getCharacterByCharacterId(characterId: number): character | null {
	const sql = `
        select 
            t.id as characterId,
            t.name as characterName,
            t.description as characterDesc
        from characters t
        where t.id = $characterId
    `;
	try {
		const stmt = db.prepare(sql);
		const rows = stmt.get({ characterId });
		return rows ? (rows as character) : null;
	} catch (error) {
		console.error('Get characters by id error', error);
		return null;
	}
}

// export function getCharacterByCharacterIdandCampaignId(characterId: number, campaignId: number): character {
// 	const sql = `
//         select
//             t.id as characterId,
//             t.name as characterName,
//             t.description as characterDesc
//         from characters t
//         where t.id = $characterId AND t.campaign_id = $campaignId
//     `;
// 	const stmt = db.prepare(sql);
// 	const rows = stmt.get({ characterId, campaignId });
// 	return rows as character;
// }

export function getEncountersByCampaignId(campaignId: number): encounter[] {
	const sql = `
        select 
            e.id as encounterId,
            e.name as encounterName,
            e.description as encounterDesc
        from encounters e
        where e.campaign_id = $campaignId
    `;
	const stmt = db.prepare(sql);
	const rows = stmt.all({ campaignId });
	return rows as encounter[];
}
export function getEncountersByCampaignIdAndUserId(
	campaignId: number,
	ownerId: number
): encounter[] {
	const sql = `
        select 
            e.id as encounterId,
            e.name as encounterName,
            e.description as encounterDesc
        from encounters e
        where e.campaign_id = $campaignId AND owner_id = $ownerId
    `;
	const stmt = db.prepare(sql);
	const rows = stmt.all({ campaignId, ownerId });
	return rows as encounter[];
}
export function getEncounterByEncounterId(encounterId: number): encounter {
	const sql = `
        select 
            e.id as encounterId,
            e.name as encounterName,
            e.description as encounterDesc
        from encounters e
        where e.id = $encounterId
    `;
	const stmt = db.prepare(sql);
	const rows = stmt.get({ encounterId });
	return rows as encounter;
}

export function checkIfExistingUser(username: string): user {
	const sql = `SELECT * from user where username = $username`;
	const stmt = db.prepare(sql);
	const rows = stmt.get({ username });
	return rows as user;
}

export default db;
