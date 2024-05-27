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

// db.exec(`
//     CREATE TABLE IF NOT EXISTS campaigns (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL
// );
// CREATE TABLE IF NOT EXISTS characters (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     campaign_id INTEGER NOT NULL,
//     name TEXT NOT NULL,
//     description TEXT,
//     FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE
// );
// CREATE TABLE IF NOT EXISTS maps (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     campaign_id INTEGER NOT NULL,
//     name TEXT NOT NULL,
//     description TEXT,
//     FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE
// );
// CREATE TABLE IF NOT EXISTS encounters (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     campaign_id INTEGER NOT NULL,
//     name TEXT NOT NULL,
//     description TEXT,
//     FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE
// );
// `);

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

export function getCharactersByCampaignId(campaignId: number): character[] {
	const sql = `
        select 
            t.id as characterId,
            t.name as characterName,
            t.description as characterDesc
        from characters t
        where t.campaign_id = $campaignId
    `;
	const stmt = db.prepare(sql);
	const rows = stmt.all({ campaignId });
	return rows as character[];
}

export function getCharacterByCharacterId(characterId: number): character {
	const sql = `
        select 
            t.id as characterId,
            t.name as characterName,
            t.description as characterDesc
        from characters t
        where t.id = $characterId
    `;
	const stmt = db.prepare(sql);
	const rows = stmt.get({ characterId });
	return rows as character;
}

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
