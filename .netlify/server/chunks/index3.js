import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import Database from "better-sqlite3";
const db = new Database("./data/dungeonManager.sqlite");
const adapter = new BetterSqlite3Adapter(db, {
  user: "user",
  session: "session"
});
db.pragma("journal_mode = WAL");
function getUsersCampaigns(userId) {
  const sql = `SELECT * from campaigns where owner_id = $userId`;
  const stmt = db.prepare(sql);
  const rows = stmt.all({ userId });
  return rows;
}
function getCampaignByIdAndOwnerId(campaignId, userId) {
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
    return row ? row : null;
  } catch (error) {
    console.error("Man we aint found shit! ", error);
    return null;
  }
}
function getCharactersByCampaignIdAndUserId(campaignId, userId) {
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
    return rows ? rows : null;
  } catch (error) {
    console.error("Character fetch error ", error);
    return null;
  }
}
function getCharacterByCharacterId(characterId) {
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
    return rows ? rows : null;
  } catch (error) {
    console.error("Get characters by id error", error);
    return null;
  }
}
function getEncountersByCampaignIdAndUserId(campaignId, ownerId) {
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
  return rows;
}
function getEncounterByEncounterId(encounterId) {
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
  return rows;
}
function checkIfExistingUser(username) {
  const sql = `SELECT * from user where username = $username`;
  const stmt = db.prepare(sql);
  const rows = stmt.get({ username });
  return rows;
}
export {
  getCampaignByIdAndOwnerId as a,
  getCharactersByCampaignIdAndUserId as b,
  getEncountersByCampaignIdAndUserId as c,
  getCharacterByCharacterId as d,
  getEncounterByEncounterId as e,
  checkIfExistingUser as f,
  getUsersCampaigns as g,
  db as h,
  adapter as i
};
