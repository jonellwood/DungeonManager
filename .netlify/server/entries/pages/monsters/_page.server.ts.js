const load = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  const requestOptions = {
    method: "GET",
    headers: myHeaders
    //redirect: 'follow'
  };
  const monsters = fetch("https://www.dnd5eapi.co/api/monsters", requestOptions).then((response) => response.json()).catch((error) => console.error(error));
  return monsters;
};
export {
  load
};
