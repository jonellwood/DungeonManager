import { d as getCharacterByCharacterId } from "../../../../chunks/index3.js";
const load = ({ params }) => {
  const characterId = parseInt(params.characterid);
  const character = getCharacterByCharacterId(characterId);
  return {
    character
  };
};
export {
  load
};
