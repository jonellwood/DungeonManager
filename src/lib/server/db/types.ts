export type campaign = {
	id: number;
	name: string;
	campaignName: string;
	description: string;
	campaignDesc: string;
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
