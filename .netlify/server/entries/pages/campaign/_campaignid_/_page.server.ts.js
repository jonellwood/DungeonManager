import { a as getCampaignByIdAndOwnerId, b as getCharactersByCampaignIdAndUserId, c as getEncountersByCampaignIdAndUserId } from "../../../../chunks/index3.js";
import { r as redirect, e as error } from "../../../../chunks/index.js";
const load = (event) => {
  if (!event.locals.user)
    redirect(302, "./login");
  const campaignId = parseInt(event.params.campaignid);
  const userId = parseInt(event.locals.user.id);
  if (!campaignId) {
    throw error(404, "CampaignId not found");
  }
  const campaign = getCampaignByIdAndOwnerId(campaignId, userId);
  if (!campaign) {
    throw error(403, "Not your shit - stay out");
  }
  const characters = getCharactersByCampaignIdAndUserId(campaignId, userId);
  if (!characters) {
    return null;
  }
  const encounters = getEncountersByCampaignIdAndUserId(campaignId, userId);
  if (!encounters) {
    return null;
  }
  return {
    campaign,
    characters,
    encounters
  };
};
export {
  load
};
