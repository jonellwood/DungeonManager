export type campaign = {
	id: number;
	name: string;
	campaignName: string;
	description: string;
	campaignDesc: string;
	owner_id: number;
};

export type character = {
	id: number;
	characterId: number;
	campaign_id: number;
	name: string;
	characterName: string;
	description: string;
	characterDesc: string;
};

export type encounter = {
	id: number;
	encounterId: number;
	campaign_id: number;
	name: string;
	encounterName: string;
	description: string;
	encounterDesc: string;
};

export type user = {
	id: number;
	username: string;
	password_hash: string;
};
