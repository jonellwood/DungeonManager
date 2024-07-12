import { e as getEncounterByEncounterId } from "../../../../chunks/index3.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  const encounterId = parseInt(params.encounterid);
  const encounter = getEncounterByEncounterId(encounterId);
  if (!encounter) {
    throw error(404, "Encounter Not found");
  }
  return {
    encounter
  };
};
export {
  load
};
