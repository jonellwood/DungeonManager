const load = ({ params }) => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  const monsterIndex = params.monsterid;
  const monster = fetch(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`, requestOptions).then((response) => response.json()).catch((error) => console.error(error));
  return monster;
};
export {
  load
};
